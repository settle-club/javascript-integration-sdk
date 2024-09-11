export namespace AVAILABLE_PAGE_TYPE {
    const EXTERNAL: string;
    const LOGIN: string;
    const HOME: string;
    const TRANSACTIONS: string;
    const TRANSACTIONDETAILS: string;
    const REWARDS: string;
    const REFERANDEARN: string;
    const PROFILE: string;
    const SETUPAUTOPAY: string;
    const UPDATEEMAIL: string;
    const REPORTISSUE: string;
    const CREDITSCORE: string;
    const AUTOPAY: string;
    const HELPCENTER: string;
    const KYCINIT: string;
    const ACCESSDIGILOCKER: string;
    const LIVELINESS: string;
    const LENDERONBOARD: string;
    const LENDER: string;
    const KYCDOCS: string;
    const KYCSELFIE: string;
    const KYCSTATUS: string;
    const KYCERROR: string;
    const KYCDIGILOCKERRESPONSE: string;
    const KYCINITRESPONSE: string;
    const REPAYMENT: string;
    const NETBANKINGREPAYMENT: string;
    const UPIREPAYMENT: string;
    const SANCTIONLETTER: string;
    const KFS: string;
    const DYNAMICPAGE: string;
}
export namespace NAVIGATORS {
    namespace external {
        const canBuildLink: boolean;
        const name: string;
        const link: string;
        const query: {
            name: string;
            key: string;
            required: boolean;
        }[];
    }
    namespace login {
        const canBuildLink_1: boolean;
        export { canBuildLink_1 as canBuildLink };
        const name_1: string;
        export { name_1 as name };
        const link_1: string;
        export { link_1 as link };
    }
    namespace home {
        const canBuildLink_2: boolean;
        export { canBuildLink_2 as canBuildLink };
        export const screenType: string;
        const name_2: string;
        export { name_2 as name };
        const link_2: string;
        export { link_2 as link };
    }
    namespace transactions {
        const canBuildLink_3: boolean;
        export { canBuildLink_3 as canBuildLink };
        const name_3: string;
        export { name_3 as name };
        const link_3: string;
        export { link_3 as link };
    }
    namespace transactionDetails {
        const canBuildLink_4: boolean;
        export { canBuildLink_4 as canBuildLink };
        const name_4: string;
        export { name_4 as name };
        const link_4: string;
        export { link_4 as link };
        export const params: {
            name: string;
            key: string;
            required: boolean;
        }[];
    }
    namespace rewards {
        const canBuildLink_5: boolean;
        export { canBuildLink_5 as canBuildLink };
        const name_5: string;
        export { name_5 as name };
        const link_5: string;
        export { link_5 as link };
    }
    namespace referAndEarn {
        const canBuildLink_6: boolean;
        export { canBuildLink_6 as canBuildLink };
        const name_6: string;
        export { name_6 as name };
        const link_6: string;
        export { link_6 as link };
    }
    namespace profile {
        const canBuildLink_7: boolean;
        export { canBuildLink_7 as canBuildLink };
        const name_7: string;
        export { name_7 as name };
        const link_7: string;
        export { link_7 as link };
    }
    namespace setupAutopay {
        const canBuildLink_8: boolean;
        export { canBuildLink_8 as canBuildLink };
        const name_8: string;
        export { name_8 as name };
        const link_8: string;
        export { link_8 as link };
    }
    namespace updateEmail {
        const canBuildLink_9: boolean;
        export { canBuildLink_9 as canBuildLink };
        const name_9: string;
        export { name_9 as name };
        const link_9: string;
        export { link_9 as link };
    }
    namespace reportIssue {
        const canBuildLink_10: boolean;
        export { canBuildLink_10 as canBuildLink };
        const name_10: string;
        export { name_10 as name };
        const link_10: string;
        export { link_10 as link };
    }
    namespace creditScore {
        const canBuildLink_11: boolean;
        export { canBuildLink_11 as canBuildLink };
        const name_11: string;
        export { name_11 as name };
        const link_11: string;
        export { link_11 as link };
    }
    namespace autoPay {
        const canBuildLink_12: boolean;
        export { canBuildLink_12 as canBuildLink };
        const name_12: string;
        export { name_12 as name };
        const link_12: string;
        export { link_12 as link };
    }
    namespace helpCenter {
        const canBuildLink_13: boolean;
        export { canBuildLink_13 as canBuildLink };
        const name_13: string;
        export { name_13 as name };
        const link_13: string;
        export { link_13 as link };
    }
    namespace kycInit {
        const canBuildLink_14: boolean;
        export { canBuildLink_14 as canBuildLink };
        const name_14: string;
        export { name_14 as name };
        const link_14: string;
        export { link_14 as link };
    }
    namespace accessDigilocker {
        const canBuildLink_15: boolean;
        export { canBuildLink_15 as canBuildLink };
        const name_15: string;
        export { name_15 as name };
        const link_15: string;
        export { link_15 as link };
        const params_1: {
            name: string;
            key: string;
            required: boolean;
        }[];
        export { params_1 as params };
    }
    namespace liveliness {
        const canBuildLink_16: boolean;
        export { canBuildLink_16 as canBuildLink };
        const name_16: string;
        export { name_16 as name };
        const link_16: string;
        export { link_16 as link };
        const params_2: {
            name: string;
            key: string;
            required: boolean;
        }[];
        export { params_2 as params };
    }
    namespace lenderOnboard {
        const canBuildLink_17: boolean;
        export { canBuildLink_17 as canBuildLink };
        const name_17: string;
        export { name_17 as name };
        const link_17: string;
        export { link_17 as link };
        const params_3: {
            name: string;
            key: string;
            required: boolean;
        }[];
        export { params_3 as params };
    }
    namespace lender {
        const canBuildLink_18: boolean;
        export { canBuildLink_18 as canBuildLink };
        const name_18: string;
        export { name_18 as name };
        const link_18: string;
        export { link_18 as link };
        const params_4: {
            name: string;
            key: string;
            required: boolean;
        }[];
        export { params_4 as params };
    }
    namespace kycDocs {
        const canBuildLink_19: boolean;
        export { canBuildLink_19 as canBuildLink };
        const name_19: string;
        export { name_19 as name };
        const link_19: string;
        export { link_19 as link };
    }
    namespace kycSelfie {
        const canBuildLink_20: boolean;
        export { canBuildLink_20 as canBuildLink };
        const name_20: string;
        export { name_20 as name };
        const link_20: string;
        export { link_20 as link };
    }
    namespace kycStatus {
        const canBuildLink_21: boolean;
        export { canBuildLink_21 as canBuildLink };
        const name_21: string;
        export { name_21 as name };
        const link_21: string;
        export { link_21 as link };
    }
    namespace kycError {
        const canBuildLink_22: boolean;
        export { canBuildLink_22 as canBuildLink };
        const name_22: string;
        export { name_22 as name };
        const link_22: string;
        export { link_22 as link };
    }
    namespace kycDigilockerResponse {
        const canBuildLink_23: boolean;
        export { canBuildLink_23 as canBuildLink };
        const name_23: string;
        export { name_23 as name };
        const link_23: string;
        export { link_23 as link };
    }
    namespace kycInitResponse {
        const canBuildLink_24: boolean;
        export { canBuildLink_24 as canBuildLink };
        const name_24: string;
        export { name_24 as name };
        const link_24: string;
        export { link_24 as link };
    }
    namespace repayment {
        const canBuildLink_25: boolean;
        export { canBuildLink_25 as canBuildLink };
        const name_25: string;
        export { name_25 as name };
        const link_25: string;
        export { link_25 as link };
        const query_1: {
            name: string;
            key: string;
            required: boolean;
        }[];
        export { query_1 as query };
    }
    namespace netBankingRepayment {
        const canBuildLink_26: boolean;
        export { canBuildLink_26 as canBuildLink };
        const name_26: string;
        export { name_26 as name };
        const link_26: string;
        export { link_26 as link };
    }
    namespace upiRepayment {
        const canBuildLink_27: boolean;
        export { canBuildLink_27 as canBuildLink };
        const name_27: string;
        export { name_27 as name };
        const link_27: string;
        export { link_27 as link };
        const query_2: {
            name: string;
            key: string;
            required: boolean;
        }[];
        export { query_2 as query };
    }
    namespace sanctionLetter {
        const canBuildLink_28: boolean;
        export { canBuildLink_28 as canBuildLink };
        const name_28: string;
        export { name_28 as name };
        const link_28: string;
        export { link_28 as link };
        const params_5: {
            name: string;
            key: string;
            required: boolean;
        }[];
        export { params_5 as params };
        const query_3: {
            name: string;
            key: string;
            required: boolean;
        }[];
        export { query_3 as query };
    }
    namespace kfs {
        const canBuildLink_29: boolean;
        export { canBuildLink_29 as canBuildLink };
        const name_29: string;
        export { name_29 as name };
        const link_29: string;
        export { link_29 as link };
        const params_6: {
            name: string;
            key: string;
            required: boolean;
        }[];
        export { params_6 as params };
        const query_4: {
            name: string;
            key: string;
            required: boolean;
        }[];
        export { query_4 as query };
    }
    namespace dynamicPage {
        const canBuildLink_30: boolean;
        export { canBuildLink_30 as canBuildLink };
        const name_30: string;
        export { name_30 as name };
        const link_30: string;
        export { link_30 as link };
        const params_7: {
            name: string;
            key: string;
            required: boolean;
        }[];
        export { params_7 as params };
    }
}
