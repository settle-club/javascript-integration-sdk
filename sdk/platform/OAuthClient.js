const querystring = require("query-string");
const { fdkAxios } = require("../common/AxiosHelper");
const { sign } = require("../common/RequestSigner");
const { FDKTokenIssueError, FDKOAuthCodeError } = require("../common/FDKError");
class OAuthClient {
  constructor(config) {
    this.config = config;
    this.token = null;
    this.refreshToken = null;
    this.retryOAuthTokenTimer = null;
    this.raw_token = null;
    this.token_expires_in = null;
    this.token_expires_at = 0;
    this.useAutoRenewTimer =
      config.useAutoRenewTimer !== undefined ? config.useAutoRenewTimer : true;
    this.refresh_token_time = null;
  }

  async getAccessToken() {
    if (
      !this.useAutoRenewTimer &&
      this.refreshToken &&
      this.isTokenExpired(this.refresh_token_time)
    ) {
      // Check if token is about to expire in less than 2 mins.
      // Renew if to be expired and auto renew timer is not enabled.
      await this.renewAccessToken();
    }
    if (this.token == null) {
      let res = await this.getAccesstokenObj({
        grant_type: "authorization_code",
      });
      return this.setToken(res);
    } else {
      return this.token;
    }
  }

  // default TTL checked 0 seconds
  isTokenExpired(ttl = 0) {
    const currentTimestamp = new Date().getTime();
    // Check if token is about to expire in less than 2 mins
    if ((this.token_expires_at - currentTimestamp) / 1000 < ttl) {
      return true;
    }
    return false;
  }

  setToken(token) {
    this.raw_token = token;
    this.token_expires_in = token.tokenExpiryIn;
    this.token = token.accessToken;
    this.refresh_token_time = token.tokenExpiryIn / 2;
    this.refreshToken = token.refreshToken ? token.refreshToken : null;
    if (this.refreshToken && this.useAutoRenewTimer) {
      this.retryOAuthToken(token.tokenExpiryIn);
    }
    return token.accessToken;
  }

  retryOAuthToken(expires_in) {
    if (this.retryOAuthTokenTimer) {
      clearTimeout(this.retryOAuthTokenTimer);
    }
    if (expires_in > this.refresh_token_time) {
      this.retryOAuthTokenTimer = setTimeout(() => {
        this.renewAccessToken();
      }, (expires_in - this.refresh_token_time) * 1000);
    }
  }

  async renewAccessToken() {
    try {
      let res = await this.getAccesstokenObj({
        grant_type: "refresh_token",
        refresh_token: this.refreshToken,
      });
      this.setToken(res);
      this.token_expires_at =
        new Date().getTime() + this.token_expires_in * 1000;
      return res;
    } catch (error) {
      if (error.isAxiosError) {
        throw new FDKTokenIssueError(error.message);
      }
      throw error;
    }
  }

  async getAccesstokenObj({ grant_type, refresh_token, code }) {
    let reqData = {
      grant_type: grant_type,
    };
    let url = undefined;
    if (grant_type === "refresh_token") {
      reqData = { ...reqData, token: refresh_token };
      url = `${this.config.domain}/service/integration/staff/authentication/oauth/${this.config.apiKey}/token`;
    } else if (grant_type === "authorization_code") {
      url = `${this.config.domain}/service/integration/staff/authentication/oauth/${this.config.apiKey}/authorize`;
      reqData = { ...reqData, code };
    }
    const token = Buffer.from(
      `${this.config.apiKey}:${this.config.apiSecret}`,
      "utf8"
    ).toString("base64");

    const rawRequest = {
      method: "post",
      url: url,
      data: querystring.stringify(reqData),
      headers: {
        Authorization: `Basic ${token}`,
        "Content-Type": "application/x-www-form-urlencoded",
        "x-merchant-secret": this.config.topSecret,
      },
    };
    return fdkAxios.request(rawRequest);
  }
}

module.exports = OAuthClient;
