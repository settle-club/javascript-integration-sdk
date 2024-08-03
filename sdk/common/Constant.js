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
  DYNAMICPAGE: "dynamicPage",
};

Object.freeze(AVAILABLE_PAGE_TYPE);

const NAVIGATORS = {
  external: {
    canBuildLink: true,
    name: "External Link",
    link: "/external/:url",
    query: [
      {
        name: "URL",
        key: "url",
        required: true,
      },
    ],
  },
  login: {
    canBuildLink: false,
    name: "Login",
    link: "/login",
  },
  home: {
    canBuildLink: true,
    screenType: "DASHBOARD, PAN, LENDERS",
    name: "Home",
    link: "/",
  },
  transactions: {
    canBuildLink: true,
    name: "Transactions",
    link: "/transactions",
  },
  transactionDetails: {
    canBuildLink: false,
    name: "Transaction Details",
    link: "/transactions/:id",
    params: [
      {
        name: "Transaction Id",
        key: "id",
        required: true,
      },
    ],
  },
  rewards: {
    canBuildLink: true,
    name: "Rewards",
    link: "/rewards",
  },
  referAndEarn: {
    canBuildLink: true,
    name: "Refer",
    link: "/refer",
  },
  profile: {
    canBuildLink: true,
    name: "Profile",
    link: "/profile",
  },
  setupAutopay: {
    canBuildLink: false,
    name: "AutoPay",
    link: "/autopay",
  },
  updateEmail: {
    canBuildLink: true,
    name: "Update Email",
    link: "/profile/email",
  },
  reportIssue: {
    canBuildLink: true,
    name: "Report Issue",
    link: "/profile/report",
  },
  creditScore: {
    canBuildLink: true,
    name: "Credit Score",
    link: "/credit-score",
  },
  autoPay: {
    canBuildLink: false,
    name: "Setup Autopay",
    link: "/autopay",
  },
  helpCenter: {
    canBuildLink: true,
    name: "Help Center",
    link: "/profile/help-center",
  },
  kycInit: {
    canBuildLink: false,
    name: "Start KYC",
    link: "/kyc",
  },
  accessDigilocker: {
    canBuildLink: false,
    name: "Access Digilocker",
    link: "/kyc/:lender/access-digilocker",
    params: [
      {
        name: "Lender",
        key: "lender",
        required: true,
      },
    ],
  },
  liveliness: {
    canBuildLink: false,
    name: "Liveliness",
    link: "/kyc/:lender/selfie",
    params: [
      {
        name: "Lender",
        key: "lender",
        required: true,
      },
    ],
  },
  lenderOnboard: {
    canBuildLink: false,
    name: "Lender Onboard",
    link: "/kyc/:lender/lender-onboard",
    params: [
      {
        name: "Lender",
        key: "lender",
        required: true,
      },
    ],
  },
  lender: {
    canBuildLink: false,
    name: "Lender",
    link: "/lender/:lenderName",
    params: [
      {
        name: "Lender Name",
        key: "lenderName",
        required: true,
      },
    ],
  },
  kycDocs: {
    canBuildLink: false,
    name: "Verify KYC Documents",
    link: "/kyc/documents",
  },
  kycSelfie: {
    canBuildLink: false,
    name: "Verify KYC Selfie",
    link: "/kyc/selfie",
  },
  kycStatus: {
    canBuildLink: false,
    name: "KYC Status",
    link: "/kyc/status",
  },
  kycError: {
    canBuildLink: false,
    name: "KYC Error",
    link: "/kyc/error",
  },
  kycDigilockerResponse: {
    canBuildLink: false,
    name: "KYC Digilocker Response",
    link: "/kyc/digilocker-response",
  },
  kycInitResponse: {
    canBuildLink: false,
    name: "KYC Init Response",
    link: "/kyc/init-response",
  },
  repayment: {
    canBuildLink: false,
    name: "Repayment",
    link: "/repayment",
    query: [
      {
        name: "Transcation Id",
        key: "tid",
        required: false,
      },
      {
        name: "Intent Id",
        key: "intentid",
        required: false,
      },
    ],
  },
  netBankingRepayment: {
    canBuildLink: false,
    name: "Net Banking Repayment",
    link: "/repayment/netbanking",
  },
  upiRepayment: {
    canBuildLink: false,
    name: "UPI Repayment",
    link: "/repayment/upi",
    query: [
      {
        name: "Transcation Id",
        key: "tid",
        required: false,
      },
      {
        name: "Intent Id",
        key: "intentid",
        required: false,
      },
    ],
  },
  sanctionLetter: {
    canBuildLink: false,
    name: "Sanction Letter",
    link: "/sanction/:userId",
    params: [
      {
        name: "User Id",
        key: "userId",
        required: true,
      },
    ],
    query: [
      {
        name: "Loan Amount",
        key: "loanAmount",
        required: true,
      },
      {
        name: "Order Id",
        key: "orderUid",
        required: true,
      },
      {
        name: "Merchant Id",
        key: "merchantId",
        required: true,
      },
    ],
  },
  kfs: {
    canBuildLink: false,
    name: "KFS",
    link: "/kfs/:userId",
    params: [
      {
        name: "User Id",
        key: "userId",
        required: true,
      },
    ],
    query: [
      {
        name: "Loan Amount",
        key: "loanAmount",
        required: true,
      },
      {
        name: "Order Id",
        key: "orderUid",
        required: true,
      },
      {
        name: "Merchant Id",
        key: "merchantId",
        required: true,
      },
    ],
  },
  dynamicPage: {
    canBuildLink: true,
    name: "Dynamic Page",
    link: "/page/:slug",
    params: [
      {
        name: "Slug",
        key: "slug",
        required: true,
      },
    ],
  },
};

module.exports = {
  AVAILABLE_PAGE_TYPE,
  NAVIGATORS,
};
