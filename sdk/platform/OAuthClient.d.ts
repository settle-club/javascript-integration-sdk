export = OAuthClient;
declare class OAuthClient {
    constructor(config: any);
    config: any;
    token: any;
    refreshToken: any;
    retryOAuthTokenTimer: NodeJS.Timeout;
    raw_token: any;
    token_expires_in: any;
    token_expires_at: number;
    useAutoRenewTimer: any;
    refresh_token_time: number;
    getAccessToken(): Promise<any>;
    isTokenExpired(ttl?: number): boolean;
    setToken(token: any): any;
    retryOAuthToken(expires_in: any): void;
    renewAccessToken(): Promise<any>;
    getAccesstokenObj({ grant_type, refresh_token, code }: {
        grant_type: any;
        refresh_token: any;
        code: any;
    }): Promise<any>;
}
