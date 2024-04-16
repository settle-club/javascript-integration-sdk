export = PlatformConfig;
declare class PlatformConfig {
    /**
     * @param {Object} config
     * @param {string} config.companyId
     * @param {string} config.domain
     * @param {string} config.key
     * @param {string} config.token
     * @param {string} config.secret
     * @param {boolean} config.useAutoRenewTimer
     */
    constructor(config: {
        companyId: string;
        domain: string;
        key: string;
        token: string;
        secret: string;
        useAutoRenewTimer: boolean;
    });
    companyId: string;
    organizationId: any;
    domain: string;
    apiKey: string;
    apiSecret: string;
    topSecret: string;
    useAutoRenewTimer: boolean;
    oauthClient: OauthClient;
    extraHeaders: any[];
    getAccessToken(): Promise<any>;
}
import OauthClient = require("./OAuthClient");
