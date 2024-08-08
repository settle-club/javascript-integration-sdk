const { fdkAxios } = require("../common/AxiosHelper");

class APIClient {
  /**
   * @param {object} conf
   * @param {string} method
   * @param {string} url
   * @param {object} query
   * @param {object} body
   * @param {object} headers
   */
  static async execute(conf, method, url, query, body, headers = {}) {
    const isOauthRoute = url?.includes("/oauth/");
    let token;
    if (isOauthRoute) {
      token = Buffer.from(`${conf.apiKey}:${conf.apiSecret}`, "utf8").toString(
        "base64"
      );
    } else {
      token = await conf.oauthClient.getAccessToken();
    }

    let extraHeaders = conf.extraHeaders.reduce((acc, curr) => {
      acc = { ...acc, ...curr };
      return acc;
    }, {});
    if (conf.topSecret) {
      extraHeaders["x-merchant-secret"] = conf.topSecret;
    }
    extraHeaders["x-source"] = "platform";

    const rawRequest = {
      baseURL: conf.domain,
      method: method,
      url: url,
      params: query,
      data: body,
      headers: {
        Authorization: (isOauthRoute ? "Basic " : "Bearer ") + token,
        ...extraHeaders,
        ...headers,
      },
    };

    return fdkAxios.request(rawRequest);
  }

  async get(url, config) {
    let access_token = await this.configuration.getAccessToken();
    config = config || {};
    config.headers = config.headers || {};
    config.headers.Authorization = "Bearer " + access_token;
    return axios.get(url);
  }
}
module.exports = APIClient;
