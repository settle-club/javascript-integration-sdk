/**
 * @callback OnProgressCallback
 * @param {number} progress - Upload progress in percentage.
 */

/**
 * Uploads a file to Google Cloud Storage (GCS) using a signed URL.
 *
 * @param {File} file - The file to be uploaded.
 * @param signedDetails - An object containing the signed URL and other details
 *   for the upload.
 * @param {OnProgressCallback} [onProgress] - An optional callback function to
 *   handle progress updates. Receives progress as a percentage.
 * @returns {Promise<Object>} A promise that resolves with the response from the
 *   GCS upload.
 * @throws {Error} Throws an error if the upload fails.
 */
const uploadFileToGcs = (file, signedDetails, onProgress) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("PUT", signedDetails.signedUrl);

    // Assuming file.type contains something like "video/webm;codecs=vp9"
    const mainMimeType = file.type.split(";")[0]; // This splits the string at ';' and takes the first part, i.e., "video/webm"
    // Set the request headers
    xhr.setRequestHeader(
      "Content-Type",
      mainMimeType || "application/octet-stream"
    );

    // Handle the response
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(new Error("An error occurred while uploading file."));
      }
    };

    // Handle network errors
    xhr.onerror = () => {
      reject(new Error("A network error occurred while uploading file."));
    };

    // Progress event
    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const progress = (event.loaded / event.total) * 100;
        // Call the onProgress callback with the progress value
        if (typeof onProgress === "function") {
          onProgress(progress);
        }
      }
    };

    // Send the request
    xhr.send(file);
  });
};

/**
 * Asynchronously uploads a file to Pixelbin cloud storage, providing progress updates.
 *
 * This function initiates the upload of a given file to Pixelbin using a signed URL.
 *
 * @param {File} file - The file object to be uploaded.
 * @param signedDetails - Contains the signed URL and the file URL for checking
 *   the upload status.
 * @param {OnProgressCallback} [onProgress] - An optional callback function that
 *   receives upload progress updates. Receives progress as a percentage.
 * @returns {Promise<void>} A promise that resolves when the file is
 *   successfully uploaded or rejects if an error occurs.
 * @throws {Error} Throws an error if the upload fails due to network issues or
 *   if the server responds with a status indicating failure.
 */
const uploadFileToPixelbin = async (file, signedDetails, onProgress) => {
  const Pixelbin = require("@pixelbin/core");

  let lastProgress = 0;

  // Send random progress updates before Pixelbin.upload is called
  const sendRandomProgress = () => {
    if (typeof onProgress === "function") {
      // Ensure the new random progress is always greater than the last sent progress
      const minProgress = Math.min(lastProgress + 1, 49); // Ensure it doesn't exceed 49
      const randomProgress = Math.floor(
        Math.random() * (50 - minProgress) + minProgress
      );
      lastProgress = randomProgress;
      onProgress(randomProgress);
    }
  };

  const randomProgressInterval = setInterval(sendRandomProgress, 1000);

  await Pixelbin.default.upload(file, signedDetails.signedUrl);

  clearInterval(randomProgressInterval);

  // Once Pixelbin.upload has returned, send 50 progress
  if (typeof onProgress === "function") {
    lastProgress = 50; // Update lastProgress to reflect this manual update
    onProgress(50);
  }

  const axios = require("axios");
  axios.defaults.withCredentials = false;

  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      axios
        .head(signedDetails.fileUrl)
        .then((response) => {
          if (response.status === 200) {
            if (interval) clearInterval(interval);
            // Once HEAD call returns 200, send 100 progress
            if (typeof onProgress === "function") {
              onProgress(100);
            }
            resolve();
          }
        })
        .catch((error) => {
          const parsedError = JSON.parse(JSON.stringify(error));
          console.error("Error:", error.message);
          // Error status is null in case of 429
          if (parsedError.status === null || parsedError.status === 429) {
            if (interval) clearInterval(interval);
            reject(new Error("An error occurred while uploading file."));
          }
        });
    }, Number(process.env.PIXELBIN_HEAD_POLLING_INTERVAL) || 3000);
  });
};

/**
 * Uploads a file to a cloud storage provider using a signed URL.
 *
 * @param {File} file - The file to be uploaded.
 * @param signedDetails - An object containing details required for the upload,
 *   including the provider.
 * @param {OnProgressCallback} [onProgress] - An optional callback function to
 *   handle progress updates. Receives progress as a percentage.
 * @returns {Promise<Object>} A promise that resolves with the response from the upload.
 * @throws {Error} Throws an error if the provider is unsupported or the upload fails.
 */
const uploadFile = async (file, signedDetails, onProgress) => {
  switch (signedDetails.provider) {
    case "gcp": {
      return await uploadFileToGcs(file, signedDetails, onProgress);
    }
    case "pixelbin": {
      return await uploadFileToPixelbin(file, signedDetails, onProgress);
    }
    default: {
      throw new Error("Unsupported provider");
    }
  }
};

module.exports = {
  uploadFile,
};
