const { fdkAxios } = require("../common/AxiosHelper");

class APIClient {
  /**
   * @param {object} conf
   * @param {string} method
   * @param {string} url
   * @param {object} query
   * @param {string} session
   * @param {object} disbursalRequest
   */
  static async execute(conf, method, url, query, disbursalRequest, session) {
    const token = await conf.oauthClient.getAccessToken();

    let extraHeaders = conf.extraHeaders.reduce((acc, curr) => {
      acc = { ...acc, ...curr };
      return acc;
    }, {});
    if (session) {
      extraHeaders.cookie = `user.session=${session}`;
    }
    if (conf.topSecret) {
      extraHeaders["x-merchant-secret"] = conf.topSecret;
    }
    const rawRequest = {
      baseURL: conf.domain,
      method: method,
      url: url,
      params: query,
      data: disbursalRequest,
      headers: {
        Authorization: "Bearer " + token,
        ...extraHeaders,
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
