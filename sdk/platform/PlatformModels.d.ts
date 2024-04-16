export class CustomerValidator {
    static verify(): any;
    static resendPaymentRequest(): any;
    static createOrder(): any;
    static link(): any;
    static unlink(): any;
    static getAccessToken(): any;
    static renewAccessToken(): any;
    static refund(): any;
    static refundStatus(): any;
    static getSchemes(): any;
    static checkEligibility(): any;
}
export class CreditValidator {
    static disburse(): any;
    static getOrderStatus(): any;
    static getEligiblePlans(): any;
}
export class MultiKycValidator {
    static approvedLenders(): any;
    static getLimit(): any;
}
