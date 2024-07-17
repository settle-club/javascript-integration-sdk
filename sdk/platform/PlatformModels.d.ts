export class CustomerValidator {
    static verify(): any;
    static resendPaymentRequest(): any;
    static createOrder(): any;
    static link(): any;
    static unlink(): any;
    static refund(): any;
    static refundStatus(): any;
    static getSchemes(): any;
}
export class CreditValidator {
    static getOrderStatus(): any;
    static getEligiblePlans(): any;
    static getTransactions(): any;
}
export class MultiKycValidator {
    static approvedLenders(): any;
    static getLimit(): any;
}
export class MerchantValidator {
    static getAccessToken(): any;
    static renewAccessToken(): any;
}
