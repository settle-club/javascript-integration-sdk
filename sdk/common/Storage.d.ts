export type OnProgressCallback = (progress: number) => any;
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
export function uploadFile(file: File, signedDetails: any, onProgress?: OnProgressCallback): Promise<any>;
