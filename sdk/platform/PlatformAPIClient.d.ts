export = APIClient;
declare class APIClient {
    /**
     * @param {object} conf
     * @param {string} method
     * @param {string} url
     * @param {object} query
     * @param {string} session
     * @param {object} disbursalRequest
     */
    static execute(conf: object, method: string, url: string, query: object, disbursalRequest: object, session: string): Promise<any>;
    get(url: any, config: any): Promise<any>;
}
