const AVAILABLE_PAGE_TYPE = {
  EXTERNAL: "external",
  LOGIN: "login",
  HOME: "home",
  TRANSACTIONS: "transactions",
  TRANSACTIONDETAILS: "transactionDetails",
  REWARDS: "rewards",
  REFERANDEARN: "referAndEarn",
  PROFILE: "profile",
  SETUPAUTOPAY: "setupAutopay",
  UPDATEEMAIL: "updateEmail",
  REPORTISSUE: "reportIssue",
  CREDITSCORE: "creditScore",
  AUTOPAY: "autoPay",
  HELPCENTER: "helpCenter",
  KYCINIT: "kycInit",
  ACCESSDIGILOCKER: "accessDigilocker",
  LIVELINESS: "liveliness",
  LENDERONBOARD: "lenderOnboard",
  LENDER: "lender",
  KYCDOCS: "kycDocs",
  KYCSELFIE: "kycSelfie",
  KYCSTATUS: "kycStatus",
  KYCERROR: "kycError",
  KYCDIGILOCKERRESPONSE: "kycDigilockerResponse",
  KYCINITRESPONSE: "kycInitResponse",
  REPAYMENT: "repayment",
  NETBANKINGREPAYMENT: "netBankingRepayment",
  UPIREPAYMENT: "upiRepayment",
  SANCTIONLETTER: "sanctionLetter",
  KFS: "kfs",
};

Object.freeze(AVAILABLE_PAGE_TYPE);

const NAVIGATORS = {
  external: {
    name: "External Link",
    link: "/external/:url",
    query: [
      {
        key: "url",
        required: true,
      },
    ],
  },
  login: {
    name: "Login",
    link: "/login",
  },
  home: {
    screenType: "DASHBOARD, PAN, LENDERS",
    name: "Home",
    link: "/",
  },
  transactions: {
    name: "Transactions",
    link: "/transactions",
  },
  transactionDetails: {
    name: "Transaction Details",
    link: "/transactions/:id",
    params: [
      {
        key: "id",
        required: true,
      },
    ],
  },
  rewards: {
    name: "Rewards",
    link: "/rewards",
  },
  referAndEarn: {
    name: "Refer",
    link: "/refer",
  },
  profile: {
    name: "Profile",
    link: "/profile",
  },
  setupAutopay: {
    name: "AutoPay",
    link: "/autopay",
  },
  updateEmail: {
    name: "Update Email",
    link: "/profile/email",
  },
  reportIssue: {
    name: "Report Issue",
    link: "/profile/report",
  },
  creditScore: {
    name: "Credit Score",
    link: "/credit-score",
  },
  autoPay: {
    name: "Setup Autopay",
    link: "/autopay",
  },
  helpCenter: {
    name: "Help Center",
    link: "/profile/help-center",
  },
  kycInit: {
    name: "Start KYC",
    link: "/kyc",
  },
  accessDigilocker: {
    name: "Access Digilocker",
    link: "/kyc/:lender/access-digilocker",
    params: [
      {
        key: "lender",
        required: true,
      },
    ],
  },
  liveliness: {
    name: "Liveliness",
    link: "/kyc/:lender/selfie",
    params: [
      {
        key: "lender",
        required: true,
      },
    ],
  },
  lenderOnboard: {
    name: "Lender Onboard",
    link: "/kyc/:lender/lender-onboard",
    params: [
      {
        key: "lender",
        required: true,
      },
    ],
  },
  lender: {
    name: "Lender",
    link: "/lender/:lenderName",
    params: [
      {
        key: "lenderName",
        required: true,
      },
    ],
  },
  kycDocs: {
    name: "Verify KYC Documents",
    link: "/kyc/documents",
  },
  kycSelfie: {
    name: "Verify KYC Selfie",
    link: "/kyc/selfie",
  },
  kycStatus: {
    name: "KYC Status",
    link: "/kyc/status",
  },
  kycError: {
    name: "KYC Error",
    link: "/kyc/error",
  },
  kycDigilockerResponse: {
    name: "KYC Digilocker Response",
    link: "/kyc/digilocker-response",
  },
  kycInitResponse: {
    name: "KYC Init Response",
    link: "/kyc/init-response",
  },
  repayment: {
    name: "Repayment",
    link: "/repayment",
    query: [
      {
        key: "tid",
        required: false,
      },
      {
        key: "intentid",
        required: false,
      },
    ],
  },
  netBankingRepayment: {
    name: "Net Banking Repayment",
    link: "/repayment/netbanking",
  },
  upiRepayment: {
    name: "UPI Repayment",
    link: "/repayment/upi",
    query: [
      {
        key: "tid",
        required: false,
      },
      {
        key: "intentid",
        required: false,
      },
    ],
  },
  sanctionLetter: {
    name: "Sanction Letter",
    link: "/sanction/:userId",
    params: [
      {
        key: "userId",
        required: true,
      },
    ],
    query: [
      {
        key: "loanAmount",
        required: true,
      },
      {
        key: "orderUid",
        required: true,
      },
      {
        key: "merchantId",
        required: true,
      },
    ],
  },
  kfs: {
    name: "KFS",
    link: "/kfs/:userId",
    params: [
      {
        key: "userId",
        required: true,
      },
    ],
    query: [
      {
        key: "loanAmount",
        required: true,
      },
      {
        key: "orderUid",
        required: true,
      },
      {
        key: "merchantId",
        required: true,
      },
    ],
  },
};

module.exports = {
  AVAILABLE_PAGE_TYPE,
  NAVIGATORS,
};
