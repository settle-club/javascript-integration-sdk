const { fdkAxios } = require("../common/AxiosHelper");

class APIClient {
  /**
   * @param {object} conf
   * @param {string} method
   * @param {string} url
   * @param {object} query
   * @param {string} session
   * @param {object} body
   */
  static async execute(conf, method, url, query, body, session) {
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
      data: body,
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
