const OauthClient = require("./OAuthClient");
class PlatformConfig {
  /**
   * @param {Object} config
   * @param {string} config.companyId
   * @param {string} config.domain
   * @param {string} config.key
   * @param {string} config.token
   * @param {string} config.secret
   * @param {boolean} config.useAutoRenewTimer
   */
  constructor(config) {
    this.companyId = config.companyId;
    this.organizationId = config.organizationId;
    this.domain = config.domain || "https://api.potleex0.de";
    this.apiKey = config.key;
    this.apiSecret = config.token;
    this.topSecret = config.secret;
    this.useAutoRenewTimer =
      config.useAutoRenewTimer !== undefined ? config.useAutoRenewTimer : true;
    this.oauthClient = new OauthClient(this);
    this.extraHeaders = [];
  }
  async getAccessToken() {
    let token = await this.oauthClient.getAccessToken();
    return token.access_token;
  }
}

module.exports = PlatformConfig;
