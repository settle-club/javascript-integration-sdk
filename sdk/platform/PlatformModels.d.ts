export class CustomerValidator {
    static validate(): any;
    static createTransaction(): any;
    static link(): any;
    static unlink(): any;
    static refund(): any;
    static refundStatus(): any;
    static getSchemes(): any;
    static checkEligibility(): any;
    static getRepaymentLink(): any;
    static getAll(): any;
    static addVintageData(): any;
}
export class CreditValidator {
    static getOrderStatus(): any;
    static getEligiblePlans(): any;
    static updateOrderDeliveryStatus(): any;
    static getTransactions(): any;
}
export class MultiKycValidator {
    static approvedLenders(): any;
    static getLimit(): any;
}
export class MerchantValidator {
    static getAccessToken(): any;
    static renewAccessToken(): any;
    static validateCredentials(): any;
}
export class PaymentsValidator {
    static getOutStandingDetails(): any;
}
