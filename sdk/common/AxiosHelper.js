const { combineURLs, isAbsoluteURL } = require("./utils");
const axios = require("axios");
const axiosRetry = require("axios-retry");
const querystring = require("query-string");
const { sign } = require("./RequestSigner");
const { FDKServerResponseError } = require("./FDKError");
axios.defaults.withCredentials = true;

function getTransformer(config) {
  const { transformRequest } = config;

  if (transformRequest) {
    if (typeof transformRequest === "function") {
      return transformRequest;
    } else if (transformRequest.length) {
      return transformRequest[0];
    }
  }

  throw new Error(
    "Could not get default transformRequest function from Axios defaults"
  );
}

function requestInterceptorFn() {
  return (config) => {
    if (!config.url) {
      throw new Error(
        "No URL present in request config, unable to sign request"
      );
    }

    let url = config.url;
    if (config.baseURL && !isAbsoluteURL(config.url)) {
      url = combineURLs(config.baseURL, config.url);
    }
    const { host, pathname, search } = new URL(url);
    const { data, headers, method, params } = config;
    headers["x-ptl-sdk-version"] = "v1.0";
    let querySearchObj = querystring.parse(search);
    querySearchObj = { ...querySearchObj, ...params };
    let queryParam = "";
    if (querySearchObj && Object.keys(querySearchObj).length) {
      if (querystring.stringify(querySearchObj).trim() !== "") {
        queryParam = `?${querystring.stringify(querySearchObj)}`;
      }
    }
    let transformedData;
    if (method != "get") {
      const transformRequest = getTransformer(config);
      transformedData = transformRequest(data, headers);
    }

    // Remove all the default Axios headers
    const {
      common,
      delete: _delete, // 'delete' is a reserved word
      get,
      head,
      post,
      put,
      patch,
      ...headersToSign
    } = headers;

    const signingOptions = {
      method: method && method.toUpperCase(),
      host: host,
      path: pathname + search + queryParam,
      body: transformedData,
      headers: headersToSign,
      secret: headers["x-merchant-secret"],
    };
    delete headers["x-merchant-secret"];
    sign(signingOptions, headers["x-source"]);
    delete headers["x-source"];

    config.headers["x-ptl-date"] = signingOptions.headers["x-ptl-date"];
    config.headers["x-ptl-signature"] =
      signingOptions.headers["x-ptl-signature"];
    return config;
  };
}
const fdkAxios = axios.create({
  paramsSerializer: (params) => {
    return querystring.stringify(params);
  },
});

axiosRetry(fdkAxios, { retries: 2 }, { retryDelay: 1000 });

fdkAxios.interceptors.request.use(requestInterceptorFn());
fdkAxios.interceptors.response.use(
  function (response) {
    if (response.config.method == "head") {
      return response.headers;
    }
    if (process.env.INCLUDE_HEADERS_IN_RESPONSE) {
      response.data.__headers = response.headers;
    }
    return response.data; // IF 2XX then return response.data only
  },
  function (error) {
    console.log(error);
    if (error.response) {
      // Request made and server responded
      throw new FDKServerResponseError(
        error.response.data.message || error.message,
        error.response.data.stack || error.stack,
        error.response.statusText,
        error.response.status,
        error.response.data
      );
    } else if (error.request) {
      // The request was made but no error.response was received
      throw new FDKServerResponseError(
        error.message,
        error.stack,
        error.code,
        error.code
      );
    } else {
      // Something happened in setting up the request that triggered an Error
      throw new FDKServerResponseError(error.message, error.stack);
    }
  }
);

module.exports = {
  fdkAxios,
};
