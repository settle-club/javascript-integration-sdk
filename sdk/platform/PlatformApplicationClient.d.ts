export = PlatformApplicationClient;
declare class PlatformApplicationClient {
    constructor(applicationId: any, config: any);
    config: any;
    companyId: any;
    applicationId: any;
    setExtraHeaders(header: any): void;
}
declare namespace PlatformApplicationClient {
    export { UserSchema, count, FilterByDate, LenderCount, LenderSchema, TotalUsersPerLender, TotalUsersPerLenderData, TotalUserByLender, UsersByLender, ErrorResponse, EditProfileRequest, VerifyOtpRequest, SendMobileOtpRequest, ReSendMobileOtpRequest, SendOtpRequest, ApplicationUser, SendOtpResponse, EmailUpdate, UserUpdateRequest, LenderUpdateRequest, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, LogoutSuccess, OtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, Location, OrderAddress, CustomerObject, Order, OrderUid, CustomerMeta, Device, VerifyCustomer, CreateTransaction, ResendPaymentRequest, VerifyCustomerSuccess, CreateTransactionSuccess, SupportDocuments, CreateTicketResponse, CreateTicket, InitiateTransactions, GetMobileFromToken, GetDataFromToken, MerchantDetails, InitiateTransactionsSuccess, RetrieveMobileFromToken, CreateDashboardTemplateRequest, TemplateSections, TemplateComponent, PartnerApplications, Offerings, Banners, Tips, DashboardTemplateResponse, SectionSchema, PartnerApplicationsResponse, OfferingsResponse, BannersResponse, TipsSection, TipsResponse, TipsCategories, ActionSchema, UpdateDashboardTemplateRequest, UpdateTemplateSections, UpdateTemplateComponent, UpdatePartnerApplications, UpdateOfferings, UpdateBanners, UpdateTips, NavigationsMobileResponse, TabsSchema, PageSchema, ProfileSectionSchema, ProfileNavigationSchema, SendPNSRegisterRequest, PNSRegisterResponse, FaqResponse, CategorySchema, QuestionSchema, SupportCategories, SupportCategoriesResponse, SanctionLetterResponse, KfsDocumentResponse, UserWhiteListedResponse, UserConsentRequest, Consents, UserConsentRequestV2, UserConsentResponse, UserKycSteps, CreateKycStepRequest, RemoveKycStepRequest, KycUpdateMessage, MobileFromLinkingRequest, MobileFromLinkingResponse, SessionFromLinkingRequest, SessionFromLinkingResponse, LinkAccount, LinkAccountSuccess, UnlinkAccount, UnlinkAccountSuccess, Refund, Translation, FilterKeys, FilterValues, Filters, PageResponse, UserResponse, UserDetailRequest, UserConsents, CreditScoreSchema, CreditLimitSchema, Screen, UserStateSchema, GetAccessTokenResponse, RefreshTokenResponse, RefreshTokenRequest, Items, RefundStatusList, RefundStatus, CustomerMetricsPivots, CustomerMetricsSubResponse, CustomerMetricsAnalytics, CustomerMetricsFilters, CustomerMetrics, CustomerMetricsResponse, CustomerMetricsRequest, SourceAnalyticsRequest, LenderResponse, CreditLimitObject, BusinessDetails, DocumentItems, VintageItems, EligibilitySuccess, CheckEligibilityRequest, GetSchemesSuccess, DisbursalRequest, WorkflowUser, EligiblePlansRequest, EligiblePlans, EligiblePlansResponse, DisbursalResponse, OrderStatus, DisbursalStatusRequest, Transactions, LenderDetail, TransactionResponse, MerchantTransactions, MerchantTransactionSummary, GetReconciliationFileResponse, ReconFile, UploadReconciliationFileRequest, UploadReconciliationFileResponse, TransactionCount, RefundCount, OrganizationTransactionsCount, OrganizationTransactionsSum, UniqueCustomersInOrg, TransactionAmount, SchemaForOneDayTotal, SumofOneDayTransactions, AverageTransaction, AllTransactionsResponse, TotalRefund, TotalRepayment, TotalOverDue, TotalLoansDisbursed, OrganizationTransactionResponse, TrFilters, TrPageResponse, OrgTransactions, TrFilterKeys, TrFilterValues, KfsRequest, KfsResponse, LenderTransactionState, TransactionStateResponse, Theme, Emi, MetricPivots, TransactionMetricSubResponse, TransactionMetrics, LenderCustomerTransactionMetricsFilters, LenderCustomerTransactionMetrics, LenderCustomerTransactionMetricsResponse, LenderCustomerTransactionMetricsRequest, LenderTheme, Lender, UserLender, SourceCreditReport, Document, UserKycDetail, Form, LenderKycStepMap, UserKycLenderStepMap, ProofOfIdentity, ProofOfAddress, EAadhaarData, Consent, ValidatePanRequest, BankDetails, DocumentData, ConfirmPanRequest, LivelinessDetails, UploadDocumentRequest, UploadDocumentRequestV1, UploadDocumentRequestV3, AadhaarRequest, UploadAadhaarRequest, UploadLivelinessRequest, UploadAadhaarRequestV1, UploadLivelinessRequestV1, UploadAadhaarRequestV2, UploadLivelinessRequestV2, UploadAadhaarRequestV3, UploadLivelinessRequestV3, UploadBankDetailsRequest, InitiateKycRequest, InitiateKycRequestV1, LenderOnboardRequest, UpdateLenderStatusRequest, UpdateProfileRequest, UpdateEntityRequest, CreateKycStepsRequest, CreateLenderPgConfigRequest, CreateLenderStateRequest, UpdateLenderRequest, OtherPolicyFilters, GetPolicyFilters, GetPolicyFilters2, MerchantConfigRequest, PanDetails, AvailableLendersRequest, InitialData, ExecutePolicyRequest, ExecutePolicyRequest2, RegisterGstRequest, PopulateFormRequest, ValidateFormFieldRequest, MerchantMetricFilter, LenderCustomerMetricsRequest, StonewallCustomer, GetLimitRequest, DocumentObject, ManualKycRequest, RetriggerLenderOnboardRequest, EntityMapDto, EntityDto, FindDocResponse, LenderKycStatus, StateResponeDto, KycStateMachineDto, InitiateKycDto, LenderOnboardDto, StepDetails, OnboardStatusDto, LenderFilters, Policy, GetKycDocsResponse, OrganizationLogosObject, MetricSubTypes, MetricTypes, BreApprovedUsersResponse, Metrics, MetricData, ApprovedLenders, BreResultStatus, GetAllUserLendersByEnityId, LenderState, UserLenderState, LenderConfig, Pg, LenderPgConfig, FileUploadResponse, PresignedUrl, PresignedUrlV2, LenderDocument, KycStatusResponse, WorkflowResponse, InitiateKycResponse, UploadDocResponse, LenderOnboardResponse, OnboardingStatusResponse, SignedUrlResponse, SignedUrlV2Response, PresignedUrlV3, SignedUrlV3Response, DigilockerLinkResponse, GetDocumentsResponse, ApprovedLendersTransaction, ApprovedPossibleLenders, AvailableLenders, CreditLimit, CreditLimitResponse, LenderPgConfigResponse, GetLendersResponse, LenderConfigurationResponse, UpsertLenderResponse, UpsertLenderConfigResponse, CreateKycStepsSchema, CreatePaymentGatewaySchema, CreateLenderStateSchema, GetAllPaymentGatewaysSchema, PolicyResponse, CreditCheckBreResponse, MerchantConfigResponse, UserLenderByIdAndStatusResponse, IntgrAvailableCreditLimit, IngtrAvailableLimit, IntgrCreditLimit, PossibleLendersInternal, PossibleLendersInternalResponse, GetTotalKycResponse, GetTotalKycCompletedUsersResponse, GetTotalPendingUsersResponse, GetTotalCreditProvidedResponse, MetaSchemaResponse, MetaSchema, AddMetaSchema, AddMetaSchemaRequest, ValidatePanResponse, ConfirmPanResonse, LenderCountResponse, OnboardStepsDto, OnboardStepsResponse, LenderDocumentResponse, GetUserLendersResponse, CreditReportResponse, KycDetailsReponse, GetDocumentByIdResponse, GetAllFormsResponse, UpsertFormResponse, GstDetails, GstDetailsResponse, RegisterGstResponse, PopulateFormResponse, ValidateFormFieldResponse, LenderCustomerMetricsResponse, ManualKycResponse, BreOutput, CustomerKycDetailsReponse };
}
type UserSchema = {
    id?: string;
    firstName?: string;
    lastName?: string;
    countryCode?: string;
    mobile?: string;
    email?: string;
    gender?: string;
    dob?: string;
    active?: boolean;
    profilePicUrl?: string;
    isEmailVerified?: boolean;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
};
type count = {
    totalUsers?: string;
};
type FilterByDate = {
    startDate?: string;
    endDate?: string;
};
type LenderCount = {
    totalLenders?: string;
};
type LenderSchema = {
    id?: string;
    name?: string;
    active?: boolean;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
};
type TotalUsersPerLender = {
    filters: Filters[];
    page: PageResponse;
    lenderList: TotalUsersPerLenderData[];
};
type TotalUsersPerLenderData = {
    id?: string;
    name?: string;
    active?: boolean;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
    totalUsers?: string;
};
type TotalUserByLender = {
    name?: string;
    count?: string;
};
type UsersByLender = {
    firstName?: string;
    lastName?: string;
    mobile?: string;
    email?: string;
    name?: string;
};
type ErrorResponse = {
    message?: string;
    info?: string;
    code?: string;
    requestId?: string;
    meta?: any;
};
type EditProfileRequest = {
    firstName?: string;
    lastName?: string;
    countryCode?: string;
    mobile?: string;
    email?: string;
    gender?: string;
    dob?: string;
    registrationToken?: string;
};
type VerifyOtpRequest = {
    requestId: string;
    otp: string;
    captchaCode?: string;
    androidHash?: string;
    referralCode?: string;
    onboardingToken?: string;
};
type SendMobileOtpRequest = {
    countryCode: string;
    mobile: string;
    captchaCode?: string;
    androidHash?: string;
    force?: string;
};
type ReSendMobileOtpRequest = {
    captchaCode?: string;
    token: string;
    androidHash?: string;
};
type SendOtpRequest = {
    countryCode?: string;
    captchaCode?: string;
    mobile?: string;
};
type ApplicationUser = {
    user?: UserSchema;
};
type SendOtpResponse = {
    resendTimer?: number;
    resendToken?: string;
    success?: boolean;
    requestId?: string;
    message?: string;
    mobile?: string;
    countryCode?: string;
    email?: string;
    resendEmailToken?: string;
    registerToken?: string;
    verifyEmailOtp?: boolean;
    verifyMobileOtp?: boolean;
    userExists?: boolean;
};
type EmailUpdate = {
    email?: string;
};
type UserUpdateRequest = {
    firstName?: any;
    lastName?: any;
    countryCode: string;
    mobile: string;
    email?: any;
    gender?: any;
    dob?: any;
    active?: boolean;
    profilePictureUrl?: any;
    isEmailVerified?: boolean;
};
type LenderUpdateRequest = {
    id: string;
    name?: string;
    active?: boolean;
};
type ProfileEditSuccess = {
    user?: UserSchema;
    registerToken?: string;
    resendEmailToken?: string;
    userExists?: boolean;
    verifyEmailLink?: boolean;
    verifyEmailOtp?: boolean;
    verifyMobileOtp?: boolean;
    email?: string;
    requestId?: string;
    countryCode?: string;
    mobile?: string;
    success?: boolean;
    message?: string;
    resendTimer?: number;
    resendToken?: string;
};
type LoginSuccess = {
    user?: UserSchema;
    requestId?: string;
    registerToken?: string;
};
type VerifyOtpSuccess = {
    user?: UserSchema;
    userExists?: boolean;
    isNew?: boolean;
};
type LogoutSuccess = {
    logout?: boolean;
};
type OtpSuccess = {
    resendTimer?: number;
    resendToken?: string;
    registerToken?: string;
    success?: boolean;
    requestId?: string;
    message?: string;
    mobile?: string;
    isNew?: boolean;
    countryCode?: string;
    otpLength?: number;
};
type SessionListSuccess = {
    sessions?: string[];
};
type VerifyMobileOTPSuccess = {
    user?: UserSchema;
};
type Location = {
    latitude?: number;
    longitude?: number;
};
type OrderAddress = {
    line1?: string;
    line2?: string;
    city?: string;
    state?: string;
    country?: string;
    pincode?: string;
    type?: string;
    geoLocation?: Location;
};
type CustomerObject = {
    countryCode?: string;
    mobile: string;
    uid: string;
    email?: string;
    firstname?: string;
    middleName?: string;
    lastName?: string;
};
type Order = {
    valueInPaise: number;
    uid: string;
    emiTenure?: number;
    items?: Items[];
    shippingAddress?: OrderAddress;
    billingAddress?: OrderAddress;
};
type OrderUid = {
    valueInPaise?: number;
    uid: string;
    items?: Items[];
    shippingAddress?: OrderAddress;
    billingAddress?: OrderAddress;
};
type CustomerMeta = {
    ip: string;
    appVersion: string;
    appIdentifier?: string;
    customerUserAgent?: string;
    deviceId: string;
};
type Device = {
    ipAddress: string;
    userAgent: string;
    latitude?: number;
    longitude?: number;
};
type VerifyCustomer = {
    customer: CustomerObject;
    order: Order;
    device: Device;
    meta?: any;
    fetchLimitOptions?: boolean;
};
type CreateTransaction = {
    autoCapture?: boolean;
    redirectUrl: string;
    customer: CustomerObject;
    order: Order;
    device: Device;
    meta?: any;
};
type ResendPaymentRequest = {
    autoCapture?: boolean;
    redirectUrl?: string;
    customer: CustomerObject;
    order: OrderUid;
};
type VerifyCustomerSuccess = {
    status?: string;
    userStatus?: string;
    message?: string;
    __headers?: any;
};
type CreateTransactionSuccess = {
    chargeToken?: string;
    redirectUrl?: string;
    message: string;
    transactionId?: string;
    status?: string;
    userStatus?: string;
    __headers?: any;
};
type SupportDocuments = {
    fileName?: string;
    fileUrl?: string;
};
type CreateTicketResponse = {
    serviceRequestId?: string;
    message?: string;
};
type CreateTicket = {
    category: string;
    transactionId?: string;
    description: string;
    documents?: SupportDocuments[];
};
type InitiateTransactions = {
    token: string;
};
type GetMobileFromToken = {
    token: string;
};
type GetDataFromToken = {
    token: string;
};
type MerchantDetails = {
    name?: string;
    website?: string;
    logo?: string;
};
type InitiateTransactionsSuccess = {
    chargeToken: string;
    session?: string;
    expiry?: string;
    hash?: string;
    order?: Order;
    isAsp?: boolean;
    merchant?: MerchantDetails;
};
type RetrieveMobileFromToken = {
    countryCode: string;
    mobile: string;
};
type CreateDashboardTemplateRequest = {
    name: string;
    version: string;
    isDefault?: boolean;
    sections: TemplateSections[];
};
type TemplateSections = {
    sequence: number;
    isAvailableInMobile: boolean;
    isAvailableInDesktop: boolean;
    component: TemplateComponent;
};
type TemplateComponent = {
    name: string;
    description: string;
    isAvailableInDesktop?: boolean;
    partnerApplications?: PartnerApplications[];
    banners?: Banners[];
    tips?: Tips[];
};
type PartnerApplications = {
    name: string;
    description?: string;
    urlPath?: string;
    urlTarget?: string;
    imageUrl: string;
    sequence?: number;
};
type Offerings = {
    name: string;
    description?: string;
    urlPath?: string;
    urlTarget?: string;
    imageUrl: string;
    sequence?: number;
    gradient: string[];
};
type Banners = {
    imageUrl: string;
    action?: ActionSchema;
};
type Tips = {
    name?: string;
    description?: string;
    urlPath: string;
    urlTarget?: string;
    imageUrl?: string;
    sequence?: number;
};
type DashboardTemplateResponse = {
    id?: string;
    name?: string;
    version?: string;
    active?: boolean;
    sections: SectionSchema[];
};
type SectionSchema = {
    type: string;
    title?: string;
    description?: string;
    partners?: PartnerApplicationsResponse[];
    banners?: BannersResponse[];
    tips?: TipsResponse[];
};
type PartnerApplicationsResponse = {
    id?: string;
    name: string;
    description?: string;
    action: ActionSchema;
    imageUrl: string;
};
type OfferingsResponse = {
    id?: string;
    name: string;
    description?: string;
    action: ActionSchema;
    imageUrl: string;
    gradient: string[];
};
type BannersResponse = {
    action?: ActionSchema;
    imageUrl: string;
};
type TipsSection = {
    tips?: TipsResponse[];
    categories?: TipsCategories[];
    action?: ActionSchema;
};
type TipsResponse = {
    name?: string;
    category?: string;
    description?: string;
    action: ActionSchema;
    imageUrl?: string;
};
type TipsCategories = {
    id: string;
    title: string;
};
type ActionSchema = {
    type?: string;
    page?: PageSchema;
    popup?: PageSchema;
};
type UpdateDashboardTemplateRequest = {
    id: string;
    name?: string;
    version?: string;
    isDefault?: boolean;
    active?: boolean;
    sections?: UpdateTemplateSections[];
};
type UpdateTemplateSections = {
    id: string;
    sequence?: number;
    isAvailableInMobile?: boolean;
    isAvailableInDesktop?: boolean;
    active?: boolean;
    component?: UpdateTemplateComponent;
};
type UpdateTemplateComponent = {
    id: string;
    name?: string;
    description?: string;
    isAvailableInDesktop?: boolean;
    active?: boolean;
    partners?: UpdatePartnerApplications[];
    banners?: UpdateBanners[];
    tips?: UpdateTips[];
};
type UpdatePartnerApplications = {
    id: string;
    name?: string;
    description?: string;
    action?: any;
    imageUrl?: string;
    sequence?: number;
    active?: boolean;
};
type UpdateOfferings = {
    id: string;
    name?: string;
    description?: string;
    urlPath?: string;
    urlTarget?: string;
    imageUrl?: string;
    sequence?: number;
    gradient?: string[];
};
type UpdateBanners = {
    id: string;
    imageUrl?: string;
    action?: any;
    sequence?: number;
    active?: boolean;
};
type UpdateTips = {
    id: string;
    name?: string;
    description?: string;
    imageUrl?: string;
    action?: any;
    sequence?: number;
    active?: boolean;
};
type NavigationsMobileResponse = {
    tabs: TabsSchema[];
    profileSections: ProfileSectionSchema[];
};
type TabsSchema = {
    title: string;
    page: PageSchema;
    icon: string;
    activeIcon: string;
    active: boolean;
};
type PageSchema = {
    link?: string;
    type?: any;
    params?: any;
    query?: any;
};
type ProfileSectionSchema = {
    title: string;
    navigations: ProfileNavigationSchema[];
    active: boolean;
};
type ProfileNavigationSchema = {
    title: string;
    description?: string;
    icon: string;
    type: string;
    action?: ActionSchema;
    active?: boolean;
};
type SendPNSRegisterRequest = {
    deviceId: string;
    deviceType: string;
    token: string;
};
type PNSRegisterResponse = {
    status?: boolean;
    message?: string;
};
type FaqResponse = {
    categories?: CategorySchema[];
};
type CategorySchema = {
    uid: string;
    title?: string;
    description?: string;
    logo?: string;
    questions?: QuestionSchema[];
};
type QuestionSchema = {
    uid: string;
    title?: string;
    description?: string;
    displayOrder?: number;
    canRaiseRequest?: boolean;
};
type SupportCategories = {
    kind?: string;
    display?: string;
};
type SupportCategoriesResponse = {
    categories?: SupportCategories[];
};
type SanctionLetterResponse = {
    sanctionedLetterFileUrl: string;
};
type KfsDocumentResponse = {
    kfsFileUrl: string;
};
type UserWhiteListedResponse = {
    status?: string;
};
type UserConsentRequest = {
    consents?: string[];
};
type Consents = {
    type?: string;
    text?: string;
};
type UserConsentRequestV2 = {
    consents?: Consents[];
};
type UserConsentResponse = {
    success?: boolean;
};
type UserKycSteps = {
    id?: string;
    index?: string;
    name?: string;
    rules?: any;
    active?: boolean;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
};
type CreateKycStepRequest = {
    name: string;
    index: string;
    active: boolean;
    rules?: any;
};
type RemoveKycStepRequest = {
    name?: string;
    index: string;
    active?: boolean;
    rules?: any;
};
type KycUpdateMessage = {
    message?: string;
};
type MobileFromLinkingRequest = {
    token: string;
};
type MobileFromLinkingResponse = {
    countryCode: string;
    mobile: string;
};
type SessionFromLinkingRequest = {
    token: string;
};
type SessionFromLinkingResponse = {
    session: string;
    expiry: number;
};
type LinkAccount = {
    customer: CustomerObject;
    redirectUrl: string;
    device: Device;
};
type LinkAccountSuccess = {
    redirectUrl?: string;
    statusCode?: number;
    status?: string;
    message?: string;
    errorCode?: string;
    __headers?: any;
};
type UnlinkAccount = {
    customer: CustomerObject;
    device: Device;
};
type UnlinkAccountSuccess = {
    status: string;
    message: string;
    statusCode: number;
    userStatus?: string;
    errorCode?: string;
    __headers?: any;
};
type Refund = {
    fingerprint?: string;
    customer: CustomerObject;
    refundItems?: Items[];
    orderId: string;
    refundId: string;
    refundAmount: number;
};
type Translation = {
    content?: any;
};
type FilterKeys = {
    display?: string;
    name?: string;
    kind?: string;
};
type FilterValues = {
    display?: string;
    isSelected?: boolean;
    value?: string;
};
type Filters = {
    key?: FilterKeys;
    values?: FilterValues[];
};
type PageResponse = {
    type: string;
    current: number;
    hasPrevious: boolean;
    hasNext: boolean;
    size: number;
    itemTotal: number;
};
type UserResponse = {
    filters: Filters[];
    page: PageResponse;
    listOfUsers: UserSchema[];
};
type UserDetailRequest = {
    id: string;
};
type UserConsents = {
    id?: string;
    userId?: string;
    ipAddress?: string;
    text?: string;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
};
type CreditScoreSchema = {
    id?: string;
    userId?: string;
    cibil?: number;
    finbox?: string;
    systemAwarded?: string;
    isActive?: boolean;
    deletedAt?: string;
    updatedAt?: string;
    createdAt?: string;
};
type CreditLimitSchema = {
    id?: string;
    userId?: string;
    creditLimit?: string;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
};
type Screen = {
    screenType?: string;
    name?: string;
    link?: string;
};
type UserStateSchema = {
    screen?: Screen;
};
type GetAccessTokenResponse = {
    success?: boolean;
    accessToken?: string;
    refreshToken?: string;
    tokenExpireAt?: string;
    tokenExpiryIn?: string;
    refreshTokenExpiryAt?: string;
    refreshTokenExpiryIn?: string;
    scope?: string[];
    __headers?: any;
};
type RefreshTokenResponse = {
    success?: boolean;
    accessToken?: string;
    tokenExpireAt?: string;
    tokenExpiryIn?: string;
    __headers?: any;
};
type RefreshTokenRequest = {
    token: string;
};
type Items = {
    category?: string;
    sku?: string;
    rate?: number;
    quantity?: number;
};
type RefundStatusList = {
    id?: string;
    orderItems?: Items[];
    amount?: number;
    status?: string;
    createdAt?: string;
    processedDate?: string;
};
type RefundStatus = {
    orderId?: string;
    userId?: string;
    merchantId?: string;
    lenderId?: string;
    loanAccountNumber?: string;
    refund?: RefundStatusList[];
    __headers?: any;
};
type CustomerMetricsPivots = {
    date?: string;
    sum?: number;
};
type CustomerMetricsSubResponse = {
    total?: string;
    pivots?: CustomerMetricsPivots[];
    title?: string;
    description?: string;
    valueFormat?: string;
    logo?: string;
};
type CustomerMetricsAnalytics = {
    totalCustomers?: CustomerMetricsSubResponse;
    source?: CustomerMetricsSubResponse;
};
type CustomerMetricsFilters = {
    type: string;
    display: string;
    value: string[];
    isSelected?: boolean;
    isActive: boolean;
};
type CustomerMetrics = {
    metrics?: CustomerMetricsAnalytics;
    filters?: CustomerMetricsFilters[];
    sort?: CustomerMetricsFilters[];
};
type CustomerMetricsResponse = {
    data?: CustomerMetrics;
};
type CustomerMetricsRequest = {
    filters?: CustomerMetricsFilters[];
    sort?: CustomerMetricsFilters[];
    merchantId?: string;
    lenderId?: string;
    pivotPoints?: number;
};
type SourceAnalyticsRequest = {
    filters?: CustomerMetricsFilters[];
};
type LenderResponse = {
    slug?: string;
    name?: string;
    logo?: string;
};
type CreditLimitObject = {
    availableLimit?: number;
    possibleLimit?: number;
    lender?: LenderResponse;
};
type BusinessDetails = {
    category: string;
    shopName?: string;
    legalName: string;
    address?: string;
    type?: string;
    pincode?: string;
};
type DocumentItems = {
    number?: string;
    category?: string;
    type?: string;
    name?: string;
    issuedOn?: string;
    issuedAt?: string;
    issuedBy?: string;
    expiryOn?: string;
};
type VintageItems = {
    month: number;
    year: number;
    totalTransactions: number;
    totalTransactionAmount: number;
    totalCancellations?: number;
    totalCancellationAmount?: number;
};
type EligibilitySuccess = {
    status?: string;
    message?: string;
    redirectUrl?: string;
    callbackUrl?: string;
    creditLimits?: CreditLimitObject[];
    __headers?: any;
};
type CheckEligibilityRequest = {
    customer: CustomerObject;
    order?: Order;
    businessDetails?: BusinessDetails;
    documents?: DocumentItems[];
    device: Device;
    vintage?: VintageItems[];
    meta?: any;
    fetchLimitOptions?: boolean;
};
type GetSchemesSuccess = {
    userId?: string;
    lenders: undefined[];
    __headers?: any;
};
type DisbursalRequest = {
    fingerprint?: string;
    chargeToken: string;
    loanTypeId?: number;
    emiTenure?: number;
    isDownpaymentRequired?: boolean;
    downpaymentAmount?: number;
    loanAmount?: number;
};
type WorkflowUser = {
    mobile?: string;
};
type EligiblePlansRequest = {
    chargeToken?: string;
};
type EligiblePlans = {
    name?: string;
    displayName?: string;
    description?: string;
    brokenInterest?: number;
    noOfEmi?: number;
    emiAmount?: number;
    processingFee?: number;
    installmentInterestRate?: number;
};
type EligiblePlansResponse = {
    eligiblePlans?: EligiblePlans[];
    __headers?: any;
};
type DisbursalResponse = {
    transactionId?: string;
    status?: string;
    message?: string;
    __headers?: any;
};
type OrderStatus = {
    orderId: string;
    transactionId?: string;
    status: string;
    message: string;
    __headers?: any;
};
type DisbursalStatusRequest = {
    fingerprint?: string;
    transactionId: string;
};
type Transactions = {
    id: string;
    userId: string;
    partnerId?: string;
    partner?: string;
    partnerLogo?: string;
    status: string;
    type?: string;
    remark?: string;
    amount: number;
    loanAccountNumber?: string;
    kfs?: string;
    utr?: string;
    sanctionLetter?: string;
    orderId?: string;
    refundId?: string;
    createdAt: string;
    lenderId?: string;
    lenderName?: string;
    lenderLogo?: string;
    loanType?: string;
    repaymentTransactionId?: string;
    nextDueDate?: string;
    paidPercent?: number;
    lenderDetail?: LenderDetail;
    emis?: Emi[];
};
type LenderDetail = {
    id?: string;
    name?: string;
    imageUrl?: string;
    slug?: string;
    active?: boolean;
    b2b?: boolean;
    b2c?: boolean;
    theme?: Theme;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
};
type TransactionResponse = {
    filters: Filters[];
    page: PageResponse;
    transactions: Transactions[];
};
type MerchantTransactions = {
    outstandingAmount?: string;
};
type MerchantTransactionSummary = {
    merchantOutstandingSummary?: MerchantTransactions;
};
type GetReconciliationFileResponse = {
    files: ReconFile[];
};
type ReconFile = {
    base64: string;
    name: string;
};
type UploadReconciliationFileRequest = {
    base64File: string;
    format?: string;
    lenderId?: string;
};
type UploadReconciliationFileResponse = {
    success?: boolean;
};
type TransactionCount = {
    totalTransactions?: string;
};
type RefundCount = {
    refundTransactions?: string;
};
type OrganizationTransactionsCount = {
    count?: number;
};
type OrganizationTransactionsSum = {
    sum?: number;
};
type UniqueCustomersInOrg = {
    count?: number;
};
type TransactionAmount = {
    totalTransactionAmount?: string;
};
type SchemaForOneDayTotal = {
    orgId?: string;
    createdAt?: string;
    count?: number;
    sum?: string;
    refund?: string;
    difference?: string;
};
type SumofOneDayTransactions = {
    dayTotal?: SchemaForOneDayTotal[];
};
type AverageTransaction = {
    average?: number;
};
type AllTransactionsResponse = {
    id?: string;
    userId?: string;
    partnerId?: string;
    status?: string;
    type?: string;
    remark?: string;
    amount?: number;
    loanAccountNumber?: string;
    createdAt?: string;
};
type TotalRefund = {
    totalRefund?: string;
};
type TotalRepayment = {
    totalRepayment?: string;
};
type TotalOverDue = {
    totalDue?: string;
};
type TotalLoansDisbursed = {
    totalLoansDisbursed?: string;
};
type OrganizationTransactionResponse = {
    filters: TrFilters[];
    page: TrPageResponse;
    transactions: OrgTransactions[];
};
type TrFilters = {
    key?: TrFilterKeys;
    values?: TrFilterValues[];
};
type TrPageResponse = {
    type: string;
    current: number;
    hasPrevious: boolean;
    hasNext: boolean;
    size: number;
    itemTotal: number;
};
type OrgTransactions = {
    id: string;
    userId: string;
    userName?: string;
    partnerId?: string;
    partner?: string;
    partnerLogo?: string;
    status: string;
    type?: string;
    remark?: string;
    amount: number;
    orderId?: string;
    loanAccountNumber?: string;
    kfs?: string;
    sanctionLetter?: string;
    createdAt: string;
};
type TrFilterKeys = {
    display?: string;
    name?: string;
    kind?: string;
};
type TrFilterValues = {
    display?: string;
    isSelected?: boolean;
    value?: string;
};
type KfsRequest = {
    loanTypeId?: number;
    chargeToken?: string;
};
type KfsResponse = {
    kfsTable?: string;
};
type LenderTransactionState = {
    id?: string;
    stepIndex?: number;
    lenderId?: string;
    workflowId?: string;
    workflowName?: string;
    parentStateId?: string;
    workflowUrl?: string;
    isInternal?: boolean;
    active?: boolean;
    ttl?: number;
    name?: string;
    type?: string;
    inputData?: any;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
};
type TransactionStateResponse = {
    transactionState?: LenderTransactionState[];
};
type Theme = {
    logoUrl?: string;
    iconUrl?: string;
    landscapeBgUrl?: string;
    portraitBgUrl?: string;
    shortName?: string;
};
type Emi = {
    id?: string;
    userId?: string;
    installmentno?: number;
    loanAccountNumber?: string;
    amount?: number;
    dueDate?: string;
    referenceTransactionId?: string;
    remark?: string;
    createdAt?: string;
    updatedAt?: string;
    entityId?: string;
    paid?: boolean;
    overdue?: boolean;
    repaymentDate?: string;
};
type MetricPivots = {
    date?: string;
    sum?: number;
};
type TransactionMetricSubResponse = {
    total?: string;
    pivots?: MetricPivots[];
    title?: string;
    description?: string;
    valueFormat?: string;
    logo?: string;
};
type TransactionMetrics = {
    totalDisbursement?: TransactionMetricSubResponse;
    totalOverdue?: TransactionMetricSubResponse;
    totalRepayment?: TransactionMetricSubResponse;
};
type LenderCustomerTransactionMetricsFilters = {
    type: string;
    display: string;
    value: string[];
    isSelected?: boolean;
    isActive: boolean;
};
type LenderCustomerTransactionMetrics = {
    metrics?: TransactionMetrics;
    filters?: LenderCustomerTransactionMetricsFilters[];
    sort?: LenderCustomerTransactionMetricsFilters[];
};
type LenderCustomerTransactionMetricsResponse = {
    data?: any;
};
type LenderCustomerTransactionMetricsRequest = {
    filters?: LenderCustomerTransactionMetricsFilters[];
    sort?: LenderCustomerTransactionMetricsFilters[];
    startDate?: string;
    endDate?: string;
    merchantId?: string;
    lenderId?: string;
    pivotPoints?: number;
};
type LenderTheme = {
    logoUrl: string;
    iconUrl: string;
    landscapeBgUrl: string;
    portraitBgUrl: string;
    shortName: string;
};
type Lender = {
    id?: string;
    name?: string;
    active?: boolean;
    imageUrl?: string;
    slug?: string;
    theme?: LenderTheme;
    b2b?: boolean;
    b2c?: boolean;
    merchantConfigSchema?: string;
    createdAt?: string;
    updatedAt?: string;
    approvedLimit?: number;
    deletedAt?: string;
    meta?: any;
    metaSchema?: any;
};
type UserLender = {
    id: string;
    userId: string;
    lenderId: string;
    active?: boolean;
    status: string;
    createdAt: string;
    updatedAt: string;
    deletedAt?: string;
    approvedLimit: number;
    entityId?: string;
    entityMapId?: string;
};
type SourceCreditReport = {
    id: string;
    userId: string;
    pan: string;
    name: string;
    mobile: string;
    bureau: string;
    score: string;
    report: string;
    createdAt?: string;
};
type Document = {
    id: string;
    userId: string;
    imageUrl: string;
    number: string;
    detail: any;
    valid: boolean;
    createdAt: string;
    updatedAt: string;
    deletedAt?: string;
    entityId?: string;
};
type UserKycDetail = {
    id: string;
    userId: string;
    status: string;
    type: string;
    remark: string;
    profileType: string;
    active: boolean;
    expiryDate?: string;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
    lenderId: string;
    lender?: Lender;
    entityMapId?: string;
    entityId?: string;
};
type Form = {
    id?: string;
    name?: string;
    title?: string;
    subtitle?: string;
    action?: string;
    form?: any;
    uiSchema?: any;
    workflowId?: string;
};
type LenderKycStepMap = {
    id?: string;
    step: string;
    stepIndex: number;
    lenderId: string;
    active: boolean;
    rules: any;
    profileType: string;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
    name: string;
    description: string;
    iconUrl: string;
    isInteractive: boolean;
    formId?: string;
    merchantId?: string;
    form: Form;
    docSchema: any;
};
type UserKycLenderStepMap = {
    id: string;
    userId: string;
    lenderKycStepMapId: string;
    userKycDetailId: string;
    lenderId: string;
    ruleState: any;
    active: boolean;
    status: string;
    documentId?: string;
    createdAt: string;
    updatedAt: string;
    deletedAt?: string;
    lenderKycStepMap?: LenderKycStepMap;
    entityMapId?: string;
    entityId?: string;
    updatedBy?: string;
};
type ProofOfIdentity = {
    dob: string;
    hashedEmail: string;
    gender: string;
    hashedMobileNumber: string;
    name: string;
};
type ProofOfAddress = {
    careOf: string;
    country: string;
    district: string;
    house: string;
    landmark: string;
    locality: string;
    pincode: string;
    postOffice: string;
    state: string;
    street: string;
    subDistrict: string;
    vtc: string;
};
type EAadhaarData = {
    aadhaarReferenceNumber: string;
    aadhaarUid: string;
    image: string;
    proofOfIdentity: ProofOfIdentity;
    proofOfAddress: ProofOfAddress;
    xml?: string;
    pdf?: string;
    address?: string;
};
type Consent = {
    text: string;
    type: string;
};
type ValidatePanRequest = {
    pan: string;
    consents: Consent[];
};
type BankDetails = {
    accountType: string;
    bankName: string;
    ifsc: string;
    accountNumber: string;
    accountHolderName: string;
};
type DocumentData = {
    selfie?: string;
    video?: string;
    digilockerCode?: string;
    bankDetails?: BankDetails;
};
type ConfirmPanRequest = {
    pan: string;
    name: string;
    entity?: string;
    merchantId?: string;
};
type LivelinessDetails = {
    selfie: string;
    video: string;
};
type UploadDocumentRequest = {
    user?: any;
    documentData?: any;
    lenderSlug: string;
    kycStep: string;
    merchantId?: string;
    entityMapId?: string;
};
type UploadDocumentRequestV1 = {
    kycStep: string;
    entityMapId: string;
    documentData: any;
};
type UploadDocumentRequestV3 = {
    kycStep: string;
    entityMapId: string;
    documentData: any;
};
type AadhaarRequest = {
    digilockerCode?: string;
};
type UploadAadhaarRequest = {
    documentData?: AadhaarRequest;
    user?: any;
    lenderSlug: string;
    kycStep: string;
    merchantId?: string;
    entityMapId?: string;
};
type UploadLivelinessRequest = {
    documentData?: LivelinessDetails;
    user?: any;
    lenderSlug: string;
    kycStep: string;
    merchantId?: string;
    entityMapId?: string;
};
type UploadAadhaarRequestV1 = {
    documentData: AadhaarRequest;
    kycStep: string;
    entityMapId: string;
};
type UploadLivelinessRequestV1 = {
    documentData: LivelinessDetails;
    kycStep: string;
    entityMapId: string;
};
type UploadAadhaarRequestV2 = {
    documentData?: AadhaarRequest;
    user?: any;
    lenderSlug: string;
    kycStep: string;
    merchantId?: string;
    entityMapId?: string;
};
type UploadLivelinessRequestV2 = {
    documentData?: LivelinessDetails;
    user?: any;
    lenderSlug: string;
    kycStep: string;
    merchantId?: string;
    entityMapId?: string;
};
type UploadAadhaarRequestV3 = {
    documentData: AadhaarRequest;
    kycStep: string;
    entityMapId: string;
};
type UploadLivelinessRequestV3 = {
    documentData: LivelinessDetails;
    kycStep: string;
    entityMapId: string;
};
type UploadBankDetailsRequest = {
    documentData?: BankDetails;
    user?: any;
    lenderSlug: string;
    kycStep: string;
    merchantId?: string;
    entityMapId?: string;
};
type InitiateKycRequest = {
    kycType: string;
    kycId?: string;
    merchantId?: string;
};
type InitiateKycRequestV1 = {
    entityMapId: string;
    kycType: string;
    kycId?: string;
    merchantId?: string;
};
type LenderOnboardRequest = {
    ack?: string;
    data: any;
    entityMapId?: string;
    merchantId?: string;
};
type UpdateLenderStatusRequest = {
    status: string;
    payload: any;
    data: any;
    action: boolean;
};
type UpdateProfileRequest = {
    firstName?: string;
    lastName?: string;
    gender?: string;
    dob?: string;
    userId: string;
    isOnboarded?: boolean;
    address?: string;
};
type UpdateEntityRequest = {
    name?: string;
    gender?: string;
    dob?: string;
    isDefault?: boolean;
    address?: ProofOfAddress;
};
type CreateKycStepsRequest = {
    data: any;
};
type CreateLenderPgConfigRequest = {
    mid: string;
    clientId: string;
    secret: string;
    active: boolean;
    pgId: string;
    lenderId: string;
};
type CreateLenderStateRequest = {
    data: any;
};
type UpdateLenderRequest = {
    data: any;
    lenderId: string;
};
type OtherPolicyFilters = {
    orderBy?: any[];
};
type GetPolicyFilters = {
    policyType?: string;
    lenderIds?: any[];
    merchantIds?: any[];
    orderBy?: any[];
};
type GetPolicyFilters2 = {
    breType?: string;
    lenderId?: any[];
    merchantId?: any[];
    loanType?: string;
    journeyType?: string;
    subType?: string;
};
type MerchantConfigRequest = {
    id: string;
    merchantConfigSchema: any;
};
type PanDetails = {
    name: string;
    idNumber: string;
};
type AvailableLendersRequest = {
    chargeToken: string;
};
type InitialData = {
    userId: string;
    entityId: string;
};
type ExecutePolicyRequest = {
    policyFilters?: GetPolicyFilters;
    initialData: InitialData;
};
type ExecutePolicyRequest2 = {
    policyFilters?: GetPolicyFilters2;
    initialData: InitialData;
};
type RegisterGstRequest = {
    gstTin: string;
};
type PopulateFormRequest = {
    form: any;
    lenderId?: string;
    merchantId?: string;
};
type ValidateFormFieldRequest = {
    workflowName: string;
    userId?: string;
    entityId?: string;
    entityMapId?: string;
    lenderId?: string;
    merchantId?: string;
    fields: any;
};
type MerchantMetricFilter = {
    type: string;
    display: string;
    value: any[];
    isSelected?: boolean;
    isActive?: boolean;
};
type LenderCustomerMetricsRequest = {
    sort?: MerchantMetricFilter[];
    filters?: MerchantMetricFilter[];
    merchantId?: string;
    lenderId?: string;
    pivotPoints?: number;
};
type StonewallCustomer = {
    mobile?: string;
    uid?: string;
};
type GetLimitRequest = {
    lenderSlugs?: any[];
    onlyDefaultLender?: boolean;
    customer: StonewallCustomer;
};
type DocumentObject = {
    id?: string;
    userId?: string;
    name?: string;
    imageUrl?: string;
    number: string;
    detail: any;
    valid?: boolean;
    entityId?: string;
};
type ManualKycRequest = {
    remark: any;
    status: string;
    stepId: string;
    entityMapId: string;
    documentData?: DocumentObject;
};
type RetriggerLenderOnboardRequest = {
    stepId: string;
    data: any;
};
type EntityMapDto = {
    id: string;
    merchantId?: string;
    status?: string;
    lenderId: string;
    limit?: number;
    creditType?: string;
    userId: string;
    entityId: string;
};
type EntityDto = {
    id: string;
    type?: string;
    address?: string;
    name?: string;
    gender?: string;
    dob?: string;
    userId: string;
};
type FindDocResponse = {
    status: string;
    info: string;
    number: string;
    details?: any;
    name?: string;
};
type LenderKycStatus = {
    status: string;
    lenderId?: string;
    lenderName?: string;
    kycType?: string;
};
type StateResponeDto = {
    step: UserKycLenderStepMap;
    isStepCompleted: boolean;
};
type KycStateMachineDto = {
    kycResult: UserKycDetail;
    action?: UserKycLenderStepMap;
};
type InitiateKycDto = {
    kycType: string;
    lenderId: string;
    user: any;
    kycId?: string;
    entityRelation?: EntityMapDto;
};
type LenderOnboardDto = {
    lender?: Lender;
    user: any;
    userLenderDetail?: UserLender;
    payload: LenderOnboardRequest;
    entityRelation?: EntityMapDto;
    ipAddress: string;
    overrideTtl?: boolean;
};
type StepDetails = {
    name?: string;
    description?: string;
    iconUrl?: string;
    status: string;
    step: string;
    order: number;
};
type OnboardStatusDto = {
    onboardStep: string;
    onboardingId: string;
    status: string;
    action: string;
    actionStatus: string;
    lender: Lender;
    navigation?: string;
    approvedLimit: number;
    proposedLimit: number;
    actionData?: any;
    steps?: StepDetails[];
    entityId: string;
    entityMapId: string;
    actionIsForm: boolean;
    actionForm?: Form;
};
type LenderFilters = {
    includeStatus?: any[];
    excludeStatus?: any[];
    allowDisabledLender?: any;
};
type Policy = {
    id?: string;
    name?: string;
    url?: string;
    data?: any;
    version?: string;
    active?: boolean;
    type?: any;
    index?: number;
    lenderId?: string;
    merchantId?: string;
    workflowId?: string;
    schemaRef?: any[];
    masterVariableRef?: any[];
    customVariable?: any;
    subType?: string;
    createdAt?: any;
    updatedAt?: any;
    deletedAt?: any;
};
type GetKycDocsResponse = {
    documents: FindDocResponse[];
};
type OrganizationLogosObject = {
    id: string;
    name: string;
    logo: string;
    active: boolean;
};
type MetricSubTypes = {
    date: string;
    count?: string;
    sum?: string;
};
type MetricTypes = {
    pivots: MetricSubTypes[];
    total?: string;
    description: string;
    title: string;
    valueFormat: string;
    logo: string;
};
type BreApprovedUsersResponse = {
    data: MetricTypes;
};
type Metrics = {
    lenderApprovedUsers: MetricTypes;
    breApprovedUsers: MetricTypes;
    totalCreditLine: MetricTypes;
};
type MetricData = {
    metrics: Metrics;
    filters: MerchantMetricFilter[];
    sort: MerchantMetricFilter[];
};
type ApprovedLenders = {
    status: string;
    lenders: BreOutput[];
};
type BreResultStatus = {
    status: string;
    approvedLenders?: BreOutput[];
};
type GetAllUserLendersByEnityId = {
    entityId: string;
    entityMapId: string;
    userId: string;
    status: string;
    lender: Lender;
    partnerId?: string;
};
type LenderState = {
    id?: string;
    name: string;
    lenderId: string;
    index: number;
    workflowName: string;
    workflowUrl?: string;
    active: boolean;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
    lender?: Lender;
    parentStateId?: string;
    ttl: number;
    displayName?: string;
    description?: string;
    iconUrl?: string;
    isInteractive: boolean;
    schema?: any;
};
type UserLenderState = {
    id: string;
    lenderStateId: string;
    lenderId: string;
    userId: string;
    status: string;
    userLenderId: string;
    remark: string;
    active: boolean;
    lenderState?: LenderState;
    data?: any;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
    entityId?: string;
    entityMapId?: string;
    updatedBy?: string;
};
type LenderConfig = {
    id?: string;
    baseUrl: string;
    accessToken?: string;
    secret?: string;
    data: any;
    lenderId: string;
    active?: boolean;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
};
type Pg = {
    id: string;
    name: string;
    active: boolean;
};
type LenderPgConfig = {
    id?: string;
    mid: string;
    clientId: string;
    secret: string;
    lenderId: string;
    pgId: string;
    active: boolean;
};
type FileUploadResponse = {
    fileId: string;
    name: string;
    path: string;
    format: string;
    size: number;
    access: string;
    tags: string;
    metadata: string;
    url: string;
    thumbnail: string;
};
type PresignedUrl = {
    url: string;
    fields: any;
};
type PresignedUrlV2 = {
    url: string;
    fields: any;
};
type LenderDocument = {
    id?: string;
    lenderId?: string;
    type?: string;
    document?: any;
    active?: boolean;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
};
type KycStatusResponse = {
    isKycInitiated: boolean;
    userId: string;
    kycStatuses: LenderKycStatus[];
};
type WorkflowResponse = {
    data?: any;
};
type InitiateKycResponse = {
    kycResult: UserKycDetail;
    action: any;
};
type UploadDocResponse = {
    status: string;
    data?: any;
    remark?: string;
    kycResult: UserKycDetail;
    action: any;
};
type LenderOnboardResponse = {
    result: UserLender;
    action: UserLenderState;
    data: any;
};
type OnboardingStatusResponse = {
    onboardStatuses: OnboardStatusDto[];
};
type SignedUrlResponse = {
    signedUrl: PresignedUrl;
    fileUrl: string;
};
type SignedUrlV2Response = {
    signedUrl: PresignedUrlV2;
    fileUrl: string;
};
type PresignedUrlV3 = {
    signedUrl: string;
    provider: any;
};
type SignedUrlV3Response = {
    signedDetails: PresignedUrlV3;
    fileUrl: string;
};
type DigilockerLinkResponse = {
    authorizationUrl: string;
};
type GetDocumentsResponse = {
    documents: FindDocResponse[];
};
type ApprovedLendersTransaction = {
    name: string;
    slug: string;
    imageUrl: string;
    status: string;
    active: boolean;
    proposedLimit: number;
    createdAt: any;
    updatedAt: any;
    deletedAt?: any;
    isDefault?: boolean;
    __headers?: any;
};
type ApprovedPossibleLenders = {
    limit: number;
    name: string;
    slug: string;
    active: boolean;
    id: string;
    theme?: LenderTheme;
};
type AvailableLenders = {
    approvedLenders: ApprovedPossibleLenders[];
    possibleLenders: ApprovedPossibleLenders[];
};
type CreditLimit = {
    availableLimit: number;
    approvedLimit: number;
};
type CreditLimitResponse = {
    status: string;
    message: string;
    action: boolean;
    credit: CreditLimit;
};
type LenderPgConfigResponse = {
    id: string;
    mid: string;
    clientId: string;
    secret: string;
    lenderId: string;
    pgId: string;
    active: boolean;
    pgName: string;
    pgActive: boolean;
};
type GetLendersResponse = {
    data: Lender[];
};
type LenderConfigurationResponse = {
    lender: Lender;
    lenderPgConfig: LenderPgConfig;
    lenderConfig: LenderConfig;
    lenderState: LenderState[];
    lenderKycStepMap: LenderKycStepMap[];
};
type UpsertLenderResponse = {
    data: any;
};
type UpsertLenderConfigResponse = {
    data: any;
};
type CreateKycStepsSchema = {
    data: LenderKycStepMap[];
};
type CreatePaymentGatewaySchema = {
    data: LenderPgConfig[];
};
type CreateLenderStateSchema = {
    data: LenderState[];
};
type GetAllPaymentGatewaysSchema = {
    data: Pg[];
};
type PolicyResponse = {
    policies: Policy[];
};
type CreditCheckBreResponse = {
    newLenderAssigned: boolean;
    breStatus: string;
};
type MerchantConfigResponse = {
    id: string;
    merhantConfigSchema: string;
};
type UserLenderByIdAndStatusResponse = {
    id: string;
    userId: string;
    lenderId: string;
    active?: boolean;
    status: string;
    createdAt: string;
    updatedAt: string;
    deletedAt?: string;
    approvedLimit: number;
    slug?: string;
    theme?: LenderTheme;
    name?: any;
};
type IntgrAvailableCreditLimit = {
    limit: number;
    lenderName: string;
    slug: string;
    isDefault: boolean;
    logoUrl: string;
};
type IngtrAvailableLimit = {
    available: IntgrAvailableCreditLimit[];
};
type IntgrCreditLimit = {
    limit: IngtrAvailableLimit;
    __headers?: any;
};
type PossibleLendersInternal = {
    limit: boolean;
    lenderName: string;
    slug: string;
    isDefault: boolean;
    logo: string;
    lenderId: string;
};
type PossibleLendersInternalResponse = {
    lenders: PossibleLendersInternal[];
};
type GetTotalKycResponse = {
    totalKyc: string;
};
type GetTotalKycCompletedUsersResponse = {
    totalKycCompletedUsers: string;
};
type GetTotalPendingUsersResponse = {
    totalPendingKyc: string;
};
type GetTotalCreditProvidedResponse = {
    totalCreditLimit: string;
};
type MetaSchemaResponse = {
    title: string;
    name: string;
    required: string[];
    type: string;
    properties: any;
};
type MetaSchema = {
    metaSchema: MetaSchemaResponse;
};
type AddMetaSchema = {
    lenderSlug: string;
    merchantId: string;
    schema: any;
};
type AddMetaSchemaRequest = {
    merchantId: string;
    schema: any;
};
type ValidatePanResponse = {
    panName: string;
    isPanValid: string;
    pan: string;
    isProprietor: boolean;
    panType: string;
    errorCode?: string;
    status?: string;
    errorMessage?: string;
};
type ConfirmPanResonse = {
    status: string;
    statusCode: string;
    message: string;
};
type LenderCountResponse = {
    active: number;
    inActive: number;
};
type OnboardStepsDto = {
    steps: StepDetails[];
    lender: Lender;
};
type OnboardStepsResponse = {
    stepDetails: OnboardStepsDto[];
};
type LenderDocumentResponse = {
    data: LenderDocument;
};
type GetUserLendersResponse = {
    data: UserLender[];
};
type CreditReportResponse = {
    data: SourceCreditReport;
};
type KycDetailsReponse = {
    data: UserKycLenderStepMap;
};
type GetDocumentByIdResponse = {
    data: Document;
};
type GetAllFormsResponse = {
    data: any;
};
type UpsertFormResponse = {
    data: any;
};
type GstDetails = {
    gstTin: string;
    businessName: string;
};
type GstDetailsResponse = {
    gstDetails: GstDetails[];
};
type RegisterGstResponse = {
    gstDocDetails: Document;
    status: string;
};
type PopulateFormResponse = {
    form: any;
};
type ValidateFormFieldResponse = {
    status: string;
    message: string;
    data: any;
};
type LenderCustomerMetricsResponse = {
    status: string;
    message: string;
    data: MetricData;
};
type ManualKycResponse = {
    message: string;
    step: UserKycLenderStepMap;
};
type BreOutput = {
    id: string;
    userId: string;
    entityId: string;
    lenderId?: string;
    merchantId?: string;
    policyName: string;
    category: string;
    type: string;
    output: any;
    status: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
};
type CustomerKycDetailsReponse = {
    data: UserKycLenderStepMap;
};
