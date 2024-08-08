export = PlatformClient;
declare class PlatformClient {
    constructor(config: any);
    config: any;
    customer: Customer;
    credit: Credit;
    multiKyc: MultiKyc;
    merchant: Merchant;
    payments: Payments;
    application(applicationId: any): PlatformApplicationClient;
    setExtraHeaders(header: any): void;
}
declare namespace PlatformClient {
    export { IntegrationResponseMeta, IntegrationResponseError, IntegrationSuccessResponse, IntegrationErrorResponse, RefundResponse, UserSource, UserSchema, count, FilterByDate, LenderCount, LenderSchema, TotalUsersPerLender, TotalUsersPerLenderData, TotalUserByLender, UsersByLender, ErrorResponse, EditProfileRequest, VerifyOtpRequest, SendMobileOtpRequest, ReSendMobileOtpRequest, SendOtpRequest, ApplicationUser, SendOtpResponse, EmailUpdate, UserUpdateRequest, LenderUpdateRequest, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, LogoutSuccess, OtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, Location, OrderAddress, CustomerObject, Order, VerifyOrder, OrderUid, CustomerMeta, Device, ValidateCustomer, CreateTransaction, ResendPaymentRequest, ValidateCustomerSuccess, CreateTransactionSuccess, SupportDocuments, CreateTicketResponse, CreateTicket, InitiateTransactions, GetMobileFromToken, GetDataFromToken, MerchantDetails, InitiateTransactionsSuccess, RetrieveMobileFromToken, CreateDashboardTemplateRequest, TemplateSections, TemplateComponent, PartnerApplications, Offerings, Banners, Tips, DashboardTemplateResponse, SectionSchema, PartnerApplicationsResponse, OfferingsResponse, BannersResponse, TipsSection, TipsResponse, TipsCategories, ActionSchema, UpdateDashboardTemplateRequest, UpdateTemplateSections, UpdateTemplateComponent, UpdatePartnerApplications, UpdateOfferings, UpdateBanners, UpdateTips, NavigationsMobileResponse, TabsSchema, PageSchema, ProfileSectionSchema, ProfileNavigationSchema, SendPNSRegisterRequest, PNSRegisterResponse, FaqResponse, CategorySchema, QuestionSchema, SupportCategories, SupportCategoriesResponse, SanctionLetterResponse, KfsDocumentResponse, UserWhiteListedResponse, UserConsentRequest, Consents, UserConsentRequestV2, UserConsentResponse, UserKycSteps, CreateKycStepRequest, RemoveKycStepRequest, KycUpdateMessage, MobileFromLinkingRequest, MobileFromLinkingResponse, SessionFromLinkingRequest, SessionFromLinkingResponse, LinkAccount, LinkAccountSuccess, UnlinkAccount, UnlinkAccountSuccess, Refund, Translation, FilterKeys, FilterValues, Filters, PageResponse, UserResponse, UserDetailRequest, UserConsents, CreditScoreSchema, CreditLimitSchema, Screen, UserStateSchema, GetAccessTokenResponse, RefreshTokenResponse, RefreshTokenRequest, Items, RefundStatusList, RefundStatus, GetSchemesSuccess, ActiveEntityResponse, CustomerMetricsPivots, CustomerMetricsSubResponse, CustomerMetricsAnalytics, CustomerMetricsFilters, CustomerMetrics, SchemeResponse, SchemePaymentOptionsResponse, SchemeEmiPaymentOptionResponse, SchemeEmiScheduleResponse, SchemePayLaterPaymentOptionResponse, LimitResponse, AvailableOrPossibleLender, GetSchemesRequest, CustomerMetricsResponse, CustomerMetricsRequest, SourceAnalyticsRequest, LenderResponse, CreditLimitObject, BusinessDetails, DocumentItems, VintageItems, EligibilitySuccess, CheckEligibilityRequest, EmiSchedule, PaymentOption, PaymentOptions, LenderAndPaymentOption, GetSchemesSuccessOld, PageSchemaResponse, userCountRequest, RepaymentRequest, RepaymentResponse, RepaymentResponseData, VerifyMagicLinkResponse, VerifyMagicLinkRequest, VintageData, AddVintageResponse, DisbursalRequest, WorkflowUser, EligiblePlansRequest, EligiblePlans, EligiblePlansResponse, DisbursalResponse, OrderStatus, DisbursalStatusRequest, Transactions, LenderDetail, TransactionResponse, MerchantTransactions, MerchantTransactionSummary, GetReconciliationFileResponse, ReconFile, UploadReconciliationFileRequest, UploadReconciliationFileResponse, TransactionCount, RefundCount, OrganizationTransactionsCount, OrganizationTransactionsSum, UniqueCustomersInOrg, TransactionAmount, SchemaForOneDayTotal, SumofOneDayTransactions, AverageTransaction, AllTransactionsResponse, TotalRefund, TotalRepayment, TotalOverDue, TotalLoansDisbursed, OrganizationTransactionResponse, TrFilters, TrPageResponse, OrgTransactions, TrFilterKeys, TrFilterValues, KfsRequest, KfsResponse, LenderTransactionState, TransactionStateResponse, Theme, Emi, MetricPivots, TransactionMetricSubResponse, TransactionMetrics, LenderCustomerTransactionMetricsFilters, LenderCustomerTransactionMetrics, LenderCustomerTransactionMetricsResponse, LenderCustomerTransactionMetricsRequest, TransactionOrder, TransactionMerchant, TransactionLoan, TransactionLoanEmi, TransactionLender, UserTransaction, Pagination, GetTransactionsData, GetTransactionsResponse, SummaryRequest, OrderShipmentAddressGeoLocation, OrderShipmentAddress, OrderShipmentItem, OrderShipment, OrderDeliveryUpdatesBody, OrderShipmentSummary, OrderShipmentResponse, OrderDeliveryUpdatesData, OrderDeliveryUpdatesResponse, Lender, UserLender, SourceCreditReport, Document, UserKycDetail, Form, LenderKycStepMap, UserKycLenderStepMap, ProofOfIdentity, ProofOfAddress, EAadhaarData, EntityMapDto, EntityDto, MerchantSchema, Consent, ValidatePanRequest, BankDetails, DocumentData, ConfirmPanRequest, LivelinessDetails, UploadDocumentRequest, UploadDocumentRequestV1, UploadDocumentRequestV3, AadhaarRequest, UploadAadhaarRequest, UploadLivelinessRequest, UploadAadhaarRequestV1, UploadLivelinessRequestV1, UploadAadhaarRequestV2, UploadLivelinessRequestV2, UploadAadhaarRequestV3, UploadLivelinessRequestV3, UploadBankDetailsRequest, InitiateKycRequest, InitiateKycRequestV1, LenderOnboardRequest, LenderOnboardRequestV1, UpdateLenderStatusRequest, UpdateProfileRequest, UpdateEntityRequest, CreateKycStepsRequest, CreateLenderPgConfigRequest, CreateLenderStateRequest, UpdateLenderRequest, OtherPolicyFilters, GetPolicyFilters, GetPolicyFilters2, MerchantConfigRequest, PanDetails, AvailableLendersRequest, InitialData, ExecutePolicyRequest, ExecutePolicyRequest2, RegisterGstRequest, PopulateFormRequest, ValidateFormFieldRequest, MerchantMetricFilter, LenderCustomerMetricsRequest, StonewallCustomer, GetLimitRequest, DocumentObject, ManualKycRequest, RetriggerLenderOnboardRequest, BusinessDetail, DocumentObjects, AddVintageRequest, KycCountByStatus, FindDocResponse, LenderKycStatus, StateResponeDto, KycStateMachineDto, InitiateKycDto, LenderOnboardDto, StepDetails, OnboardStatusDto, LenderFilters, Policy, OrganizationLogosObject, MetricSubTypes, MetricTypes, BreApprovedUsersResponse, Metrics, MetricData, GetAllUserLendersByEnityId, ApprovedLenders, BreResultStatus, GetKycDocsResponse, LenderState, UserLenderState, LenderConfig, Pg, LenderPgConfig, FileUploadResponse, PresignedUrl, PresignedUrlV2, LenderDocument, Commercial, KycStatusResponse, WorkflowResponse, Action, InitiateKycResponse, UploadDocResponse, LenderOnboardResponse, OnboardingStatusResponse, SignedUrlResponse, SignedUrlV2Response, PresignedUrlV3, SignedUrlV3Response, DigilockerLinkResponse, GetDocumentsResponse, ApprovedLendersTransaction, ApprovedPossibleLenders, AvailableLenders, CreditLimit, CreditLimitResponse, LenderPgConfigResponse, GetLendersResponse, LenderConfigurationResponse, UpsertLenderResponse, UpsertLenderConfigResponse, CreateKycStepsSchema, CreatePaymentGatewaySchema, CreateLenderStateSchema, GetAllPaymentGatewaysSchema, PolicyResponse, CreditCheckBreResponse, MerchantConfigResponse, UserLenderByIdAndStatusResponse, IntgrAvailableCreditLimit, IngtrAvailableLimit, IntgrCreditLimit, PossibleLendersInternal, PossibleLendersInternalResponse, GetTotalKycResponse, GetTotalKycCompletedUsersResponse, GetTotalPendingUsersResponse, GetTotalCreditProvidedResponse, MetaSchemaResponse, MetaSchema, AddMetaSchema, AddMetaSchemaRequest, ValidatePanResponse, ConfirmPanResonse, LenderCountResponse, OnboardStepsDto, OnboardStepsResponse, LenderDocumentResponse, GetUserLendersResponse, CreditReportResponse, KycDetailsReponse, GetDocumentByIdResponse, GetAllFormsResponse, UpsertFormResponse, GstDetails, GstDetailsResponse, RegisterGstResponse, PopulateFormResponse, ValidateFormFieldResponse, LenderCustomerMetricsResponse, BreOutput, ManualKycResponse, CustomerKycDetailsReponse, PlatformFees, CommercialResponse, BlockUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, UpdateEmail, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, ReSendMobileOtpRequestSchema, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, BlockUserSuccess, EmailOtpSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, PaginationSchema, UserObjectSchema, CreateOrganization, UpdateLogo, AddMetaSchemaResponse, UpdateOrganization, UpdateFinancials, Documents, FinancialDetails, GetOrganization, OrganizationDetails, Organization, OrganizationList, OrganizationCount, TeamMembers, Member, Profile, AddTeamMember, UpdateTeamMemberRole, RemoveTeamMemberResponse, AddTeamMemberResponse, ApiKey, UpdateApiHook, ApiHookDetails, UpdateApiHookResponse, OrganizationIp, AddOrganizationIpDetails, AddUpdateCsvFileResponse, AddUpdateCsvFileRequest, CsvFile, AddReportCsvFileResponse, AddReportCsvFileRequest, ReportCsvFileResponse, AddReportRequestArray, AddReportRequest, AddReportResponseArray, AddReportResponse, VintageDataResponseObject, VintageDataResponse, AddSkuRequestArray, AddSkuRequest, AddSkuResponse, RestrictedSkuSchema, OrganizationIpResponse, OrganizationIpDetails, RefundSuccess, RefundItem, ValidateCredentialsData, ValidateCredentialsResponse, PaymentLinkResponse, ApplicationCutomer, GeoLocation, Address, OrderItems, PaymentLinkRequest, UpdateLenderStatusSchemaRequest, UpdateLenderStatusSchemaResponse, LenderTheme, LenderDetails, OutstandingData, OutstandingDetailsResponse, CreateUserRequestSchema, CreateUserResponseSchema, RepaymentUsingNetbanking, RepaymentUsingNetbankingResponse, RepaymentUsingUPI, RepaymentUsingUPIResponse, RegisterUPIMandateRequest, RegisterUPIMandateResponse, RegisterUPIMandateStatusCheckRequest, RegisterMandateStatusCheckResponse, TransactionStatusRequest, TransactionStatusResponse, BankList, PaymentsObject, OutstandingDetail, OutstandingSummary, DueSummaryOutstanding, OutstandingMessage, UserCredit, DueTransactionsOutstanding, RepaymentSummaryOutstanding, OutstandingDetailsRepayment, PaymentOptionsResponse, CheckEMandateStatusRequest, AutoPayStatusResponse, OutstandingDetailsData };
}
/**
 * @typedef IntegrationResponseMeta
 * @property {string} timestamp
 * @property {string} version
 * @property {string} product
 * @property {string} [requestId]
 */
/**
 * @typedef IntegrationResponseError
 * @property {string} code
 * @property {string} message
 * @property {string} exception
 * @property {string} [field]
 * @property {string} [location]
 */
/**
 * @typedef IntegrationSuccessResponse
 * @property {string} message
 * @property {IntegrationResponseMeta} meta
 * @property {Object} data
 */
/**
 * @typedef IntegrationErrorResponse
 * @property {string} message
 * @property {IntegrationResponseMeta} meta
 * @property {IntegrationResponseError[]} [errors]
 */
/**
 * @typedef RefundResponse
 * @property {string} [status]
 * @property {string} [message]
 * @property {string} [transactionId]
 * @property {string} [refundId]
 */
/**
 * @typedef UserSource
 * @property {string} [userId]
 * @property {string} [type]
 * @property {string} [sourceId]
 * @property {Object} [meta]
 * @property {string} [createdAt]
 * @property {string} [updatedAt]
 * @property {string} [app]
 * @property {string} [entityId]
 * @property {any[]} [userMerchants]
 */
/**
 * @typedef UserSchema
 * @property {string} [id]
 * @property {string} [firstName]
 * @property {string} [lastName]
 * @property {string} [countryCode]
 * @property {string} [mobile]
 * @property {string} [email]
 * @property {string} [gender]
 * @property {string} [dob]
 * @property {boolean} [active]
 * @property {string} [profilePicUrl]
 * @property {boolean} [isEmailVerified]
 * @property {string} [createdAt]
 * @property {string} [updatedAt]
 * @property {string} [deletedAt]
 */
/**
 * @typedef count
 * @property {string} [totalUsers]
 */
/**
 * @typedef FilterByDate
 * @property {string} [startDate]
 * @property {string} [endDate]
 */
/**
 * @typedef LenderCount
 * @property {string} [totalLenders]
 */
/**
 * @typedef LenderSchema
 * @property {string} [id]
 * @property {string} [name]
 * @property {boolean} [active]
 * @property {string} [createdAt]
 * @property {string} [updatedAt]
 * @property {string} [deletedAt]
 */
/**
 * @typedef TotalUsersPerLender
 * @property {Filters[]} filters
 * @property {PageResponse} page
 * @property {TotalUsersPerLenderData[]} lenderList
 */
/**
 * @typedef TotalUsersPerLenderData
 * @property {string} [id]
 * @property {string} [name]
 * @property {boolean} [active]
 * @property {string} [createdAt]
 * @property {string} [updatedAt]
 * @property {string} [deletedAt]
 * @property {string} [totalUsers]
 */
/**
 * @typedef TotalUserByLender
 * @property {string} [name]
 * @property {string} [count]
 */
/**
 * @typedef UsersByLender
 * @property {string} [firstName]
 * @property {string} [lastName]
 * @property {string} [mobile]
 * @property {string} [email]
 * @property {string} [name]
 */
/**
 * @typedef ErrorResponse
 * @property {string} [message]
 * @property {string} [info]
 * @property {string} [code]
 * @property {string} [requestId]
 * @property {Object} [meta]
 */
/**
 * @typedef EditProfileRequest
 * @property {string} [firstName]
 * @property {string} [lastName]
 * @property {string} [countryCode]
 * @property {string} [mobile]
 * @property {string} [email]
 * @property {string} [gender]
 * @property {string} [dob]
 * @property {string} [registrationToken]
 */
/**
 * @typedef VerifyOtpRequest
 * @property {string} requestId
 * @property {string} otp
 * @property {string} [captchaCode]
 * @property {string} [androidHash]
 * @property {string} [referralCode]
 * @property {string} [onboardingToken]
 */
/**
 * @typedef SendMobileOtpRequest
 * @property {string} countryCode
 * @property {string} mobile
 * @property {string} [captchaCode]
 * @property {string} [androidHash]
 * @property {string} [force]
 */
/**
 * @typedef ReSendMobileOtpRequest
 * @property {string} [captchaCode]
 * @property {string} token
 * @property {string} [androidHash]
 */
/**
 * @typedef SendOtpRequest
 * @property {string} [countryCode]
 * @property {string} [captchaCode]
 * @property {string} [mobile]
 */
/**
 * @typedef ApplicationUser
 * @property {UserSchema} [user]
 */
/**
 * @typedef SendOtpResponse
 * @property {number} [resendTimer]
 * @property {string} [resendToken]
 * @property {boolean} [success]
 * @property {string} [requestId]
 * @property {string} [message]
 * @property {string} [mobile]
 * @property {string} [countryCode]
 * @property {string} [email]
 * @property {string} [resendEmailToken]
 * @property {string} [registerToken]
 * @property {boolean} [verifyEmailOtp]
 * @property {boolean} [verifyMobileOtp]
 * @property {boolean} [userExists]
 */
/**
 * @typedef EmailUpdate
 * @property {string} [email]
 */
/**
 * @typedef UserUpdateRequest
 * @property {Object | any} [firstName]
 * @property {Object | any} [lastName]
 * @property {string} countryCode
 * @property {string} mobile
 * @property {Object | any} [email]
 * @property {Object | any} [gender]
 * @property {Object | any} [dob]
 * @property {boolean} [active]
 * @property {Object | any} [profilePictureUrl]
 * @property {boolean} [isEmailVerified]
 */
/**
 * @typedef LenderUpdateRequest
 * @property {string} id
 * @property {string} [name]
 * @property {boolean} [active]
 */
/**
 * @typedef ProfileEditSuccess
 * @property {UserSchema} [user]
 * @property {string} [registerToken]
 * @property {string} [resendEmailToken]
 * @property {boolean} [userExists]
 * @property {boolean} [verifyEmailLink]
 * @property {boolean} [verifyEmailOtp]
 * @property {boolean} [verifyMobileOtp]
 * @property {string} [email]
 * @property {string} [requestId]
 * @property {string} [countryCode]
 * @property {string} [mobile]
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {number} [resendTimer]
 * @property {string} [resendToken]
 */
/**
 * @typedef LoginSuccess
 * @property {UserSchema} [user]
 * @property {string} [requestId]
 * @property {string} [registerToken]
 */
/**
 * @typedef VerifyOtpSuccess
 * @property {UserSchema} [user]
 * @property {boolean} [userExists]
 * @property {boolean} [isNew]
 */
/**
 * @typedef LogoutSuccess
 * @property {boolean} [logout]
 */
/**
 * @typedef OtpSuccess
 * @property {number} [resendTimer]
 * @property {string} [resendToken]
 * @property {string} [registerToken]
 * @property {boolean} [success]
 * @property {string} [requestId]
 * @property {string} [message]
 * @property {string} [mobile]
 * @property {boolean} [isNew]
 * @property {string} [countryCode]
 * @property {number} [otpLength]
 */
/**
 * @typedef SessionListSuccess
 * @property {string[]} [sessions]
 */
/**
 * @typedef VerifyMobileOTPSuccess
 * @property {UserSchema} [user]
 */
/**
 * @typedef Location
 * @property {number} [latitude]
 * @property {number} [longitude]
 */
/**
 * @typedef OrderAddress
 * @property {string} [line1]
 * @property {string} [line2]
 * @property {string} [city]
 * @property {string} [state]
 * @property {string} [country]
 * @property {string} [pincode]
 * @property {string} [type]
 * @property {Location} [geoLocation]
 */
/**
 * @typedef CustomerObject
 * @property {string} [countryCode]
 * @property {string} mobile
 * @property {string} [uid]
 * @property {string} [email]
 * @property {string} [firstname]
 * @property {string} [middleName]
 * @property {string} [lastName]
 */
/**
 * @typedef Order
 * @property {number} valueInPaise
 * @property {string} uid
 * @property {Items[]} [items]
 * @property {OrderAddress} [shippingAddress]
 * @property {OrderAddress} [billingAddress]
 */
/**
 * @typedef VerifyOrder
 * @property {number} valueInPaise
 * @property {string} [uid]
 * @property {Items[]} [items]
 * @property {OrderAddress} [shippingAddress]
 * @property {OrderAddress} [billingAddress]
 */
/**
 * @typedef OrderUid
 * @property {number} [valueInPaise]
 * @property {string} uid
 * @property {Items[]} [items]
 * @property {OrderAddress} [shippingAddress]
 * @property {OrderAddress} [billingAddress]
 */
/**
 * @typedef CustomerMeta
 * @property {string} ip
 * @property {string} appVersion
 * @property {string} [appIdentifier]
 * @property {string} [customerUserAgent]
 * @property {string} deviceId
 */
/**
 * @typedef Device
 * @property {string} ipAddress
 * @property {string} userAgent
 * @property {number} [latitude]
 * @property {number} [longitude]
 */
/**
 * @typedef ValidateCustomer
 * @property {CustomerObject} customer
 * @property {VerifyOrder} order
 * @property {Device} device
 * @property {Object} [meta]
 * @property {boolean} [fetchLimitOptions]
 * @property {boolean} [fetchPlans]
 */
/**
 * @typedef CreateTransaction
 * @property {string} redirectUrl
 * @property {CustomerObject} customer
 * @property {Order} order
 * @property {Device} device
 * @property {Object} [meta]
 * @property {number} [emiTenure]
 * @property {string} [lenderSlug]
 * @property {Consents[]} [consents]
 */
/**
 * @typedef ResendPaymentRequest
 * @property {string} [redirectUrl]
 * @property {CustomerObject} customer
 * @property {OrderUid} order
 */
/**
 * @typedef ValidateCustomerSuccess
 * @property {string} status
 * @property {string} userStatus
 * @property {string} message
 * @property {SchemeResponse[]} [schemes]
 * @property {LimitResponse} [limit]
 */
/**
 * @typedef CreateTransactionSuccess
 * @property {string} [chargeToken]
 * @property {string} [redirectUrl]
 * @property {string} message
 * @property {string} [transactionId]
 * @property {string} [status]
 * @property {string} [userStatus]
 */
/**
 * @typedef SupportDocuments
 * @property {string} [fileName]
 * @property {string} [fileUrl]
 */
/**
 * @typedef CreateTicketResponse
 * @property {string} [serviceRequestId]
 * @property {string} [message]
 */
/**
 * @typedef CreateTicket
 * @property {string} category
 * @property {string} [transactionId]
 * @property {string} description
 * @property {SupportDocuments[]} [documents]
 */
/**
 * @typedef InitiateTransactions
 * @property {string} token
 */
/**
 * @typedef GetMobileFromToken
 * @property {string} token
 */
/**
 * @typedef GetDataFromToken
 * @property {string} token
 */
/**
 * @typedef MerchantDetails
 * @property {string} [name]
 * @property {string} [website]
 * @property {string} [logo]
 */
/**
 * @typedef InitiateTransactionsSuccess
 * @property {string} chargeToken
 * @property {string} [session]
 * @property {string} [expiry]
 * @property {string} [hash]
 * @property {Order} [order]
 * @property {boolean} [isAsp]
 * @property {MerchantDetails} [merchant]
 * @property {string} [redirectUrl]
 */
/**
 * @typedef RetrieveMobileFromToken
 * @property {string} countryCode
 * @property {string} mobile
 */
/**
 * @typedef CreateDashboardTemplateRequest
 * @property {string} name
 * @property {string} version
 * @property {boolean} [isDefault]
 * @property {TemplateSections[]} sections
 */
/**
 * @typedef TemplateSections
 * @property {number} sequence
 * @property {boolean} isAvailableInMobile
 * @property {boolean} isAvailableInDesktop
 * @property {TemplateComponent} component
 */
/**
 * @typedef TemplateComponent
 * @property {string} name
 * @property {string} description
 * @property {boolean} [isAvailableInDesktop]
 * @property {PartnerApplications[]} [partnerApplications]
 * @property {Banners[]} [banners]
 * @property {Tips[]} [tips]
 */
/**
 * @typedef PartnerApplications
 * @property {string} name
 * @property {string} [description]
 * @property {string} [urlPath]
 * @property {string} [urlTarget]
 * @property {string} imageUrl
 * @property {number} [sequence]
 */
/**
 * @typedef Offerings
 * @property {string} name
 * @property {string} [description]
 * @property {string} [urlPath]
 * @property {string} [urlTarget]
 * @property {string} imageUrl
 * @property {number} [sequence]
 * @property {string[]} gradient
 */
/**
 * @typedef Banners
 * @property {string} imageUrl
 * @property {ActionSchema} [action]
 */
/**
 * @typedef Tips
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} urlPath
 * @property {string} [urlTarget]
 * @property {string} [imageUrl]
 * @property {number} [sequence]
 */
/**
 * @typedef DashboardTemplateResponse
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [version]
 * @property {boolean} [active]
 * @property {SectionSchema[]} sections
 */
/**
 * @typedef SectionSchema
 * @property {string} type
 * @property {string} [title]
 * @property {string} [description]
 * @property {PartnerApplicationsResponse[]} [partners]
 * @property {BannersResponse[]} [banners]
 * @property {TipsResponse[]} [tips]
 */
/**
 * @typedef PartnerApplicationsResponse
 * @property {string} [id]
 * @property {string} name
 * @property {string} [description]
 * @property {ActionSchema} action
 * @property {string} imageUrl
 */
/**
 * @typedef OfferingsResponse
 * @property {string} [id]
 * @property {string} name
 * @property {string} [description]
 * @property {ActionSchema} action
 * @property {string} imageUrl
 * @property {string[]} gradient
 */
/**
 * @typedef BannersResponse
 * @property {ActionSchema} [action]
 * @property {string} imageUrl
 */
/**
 * @typedef TipsSection
 * @property {TipsResponse[]} [tips]
 * @property {TipsCategories[]} [categories]
 * @property {ActionSchema} [action]
 */
/**
 * @typedef TipsResponse
 * @property {string} [name]
 * @property {string} [category]
 * @property {string} [description]
 * @property {ActionSchema} action
 * @property {string} [imageUrl]
 */
/**
 * @typedef TipsCategories
 * @property {string} id
 * @property {string} title
 */
/**
 * @typedef ActionSchema
 * @property {string} [type]
 * @property {PageSchema} [page]
 * @property {PageSchema} [popup]
 */
/**
 * @typedef UpdateDashboardTemplateRequest
 * @property {string} id
 * @property {string} [name]
 * @property {string} [version]
 * @property {boolean} [isDefault]
 * @property {boolean} [active]
 * @property {UpdateTemplateSections[]} [sections]
 */
/**
 * @typedef UpdateTemplateSections
 * @property {string} id
 * @property {number} [sequence]
 * @property {boolean} [isAvailableInMobile]
 * @property {boolean} [isAvailableInDesktop]
 * @property {boolean} [active]
 * @property {UpdateTemplateComponent} [component]
 */
/**
 * @typedef UpdateTemplateComponent
 * @property {string} id
 * @property {string} [name]
 * @property {string} [description]
 * @property {boolean} [isAvailableInDesktop]
 * @property {boolean} [active]
 * @property {UpdatePartnerApplications[]} [partners]
 * @property {UpdateBanners[]} [banners]
 * @property {UpdateTips[]} [tips]
 */
/**
 * @typedef UpdatePartnerApplications
 * @property {string} id
 * @property {string} [name]
 * @property {string} [description]
 * @property {Object} [action]
 * @property {string} [imageUrl]
 * @property {number} [sequence]
 * @property {boolean} [active]
 */
/**
 * @typedef UpdateOfferings
 * @property {string} id
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [urlPath]
 * @property {string} [urlTarget]
 * @property {string} [imageUrl]
 * @property {number} [sequence]
 * @property {string[]} [gradient]
 */
/**
 * @typedef UpdateBanners
 * @property {string} id
 * @property {string} [imageUrl]
 * @property {Object} [action]
 * @property {number} [sequence]
 * @property {boolean} [active]
 */
/**
 * @typedef UpdateTips
 * @property {string} id
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [imageUrl]
 * @property {Object} [action]
 * @property {number} [sequence]
 * @property {boolean} [active]
 */
/**
 * @typedef NavigationsMobileResponse
 * @property {TabsSchema[]} tabs
 * @property {ProfileSectionSchema[]} profileSections
 * @property {Object} [footer]
 */
/**
 * @typedef TabsSchema
 * @property {string} title
 * @property {ActionSchema} [action]
 * @property {PageSchema} page
 * @property {string} icon
 * @property {string} activeIcon
 * @property {boolean} active
 */
/**
 * @typedef PageSchema
 * @property {string} [link]
 * @property {PageType} [type]
 * @property {Object} [params]
 * @property {Object} [query]
 */
/**
 * @typedef ProfileSectionSchema
 * @property {string} title
 * @property {ProfileNavigationSchema[]} navigations
 * @property {boolean} active
 */
/**
 * @typedef ProfileNavigationSchema
 * @property {string} title
 * @property {string} [description]
 * @property {string} icon
 * @property {string} type
 * @property {ActionSchema} [action]
 * @property {boolean} [active]
 */
/**
 * @typedef SendPNSRegisterRequest
 * @property {string} deviceId
 * @property {string} deviceType
 * @property {string} token
 */
/**
 * @typedef PNSRegisterResponse
 * @property {boolean} [status]
 * @property {string} [message]
 */
/**
 * @typedef FaqResponse
 * @property {CategorySchema[]} [categories]
 */
/**
 * @typedef CategorySchema
 * @property {string} uid
 * @property {string} [title]
 * @property {string} [description]
 * @property {string} [logo]
 * @property {QuestionSchema[]} [questions]
 */
/**
 * @typedef QuestionSchema
 * @property {string} uid
 * @property {string} [title]
 * @property {string} [description]
 * @property {number} [displayOrder]
 * @property {boolean} [canRaiseRequest]
 */
/**
 * @typedef SupportCategories
 * @property {string} [kind]
 * @property {string} [display]
 */
/**
 * @typedef SupportCategoriesResponse
 * @property {SupportCategories[]} [categories]
 */
/**
 * @typedef SanctionLetterResponse
 * @property {string} sanctionedLetterFileUrl
 */
/**
 * @typedef KfsDocumentResponse
 * @property {string} kfsFileUrl
 */
/**
 * @typedef UserWhiteListedResponse
 * @property {string} [status]
 */
/**
 * @typedef UserConsentRequest
 * @property {string[]} [consents]
 */
/**
 * @typedef Consents
 * @property {string} [type]
 * @property {string} [text]
 * @property {string} [purpose]
 */
/**
 * @typedef UserConsentRequestV2
 * @property {Consents[]} [consents]
 */
/**
 * @typedef UserConsentResponse
 * @property {boolean} [success]
 */
/**
 * @typedef UserKycSteps
 * @property {string} [id]
 * @property {string} [index]
 * @property {string} [name]
 * @property {Object} [rules]
 * @property {boolean} [active]
 * @property {string} [createdAt]
 * @property {string} [updatedAt]
 * @property {string} [deletedAt]
 */
/**
 * @typedef CreateKycStepRequest
 * @property {string} name
 * @property {string} index
 * @property {boolean} active
 * @property {Object} [rules]
 */
/**
 * @typedef RemoveKycStepRequest
 * @property {string} [name]
 * @property {string} index
 * @property {boolean} [active]
 * @property {Object} [rules]
 */
/**
 * @typedef KycUpdateMessage
 * @property {string} [message]
 */
/**
 * @typedef MobileFromLinkingRequest
 * @property {string} token
 */
/**
 * @typedef MobileFromLinkingResponse
 * @property {string} countryCode
 * @property {string} mobile
 */
/**
 * @typedef SessionFromLinkingRequest
 * @property {string} token
 */
/**
 * @typedef SessionFromLinkingResponse
 * @property {string} session
 * @property {number} expiry
 */
/**
 * @typedef LinkAccount
 * @property {CustomerObject} customer
 * @property {string} redirectUrl
 * @property {Device} device
 */
/**
 * @typedef LinkAccountSuccess
 * @property {string} [redirectUrl]
 * @property {number} [statusCode]
 * @property {string} [status]
 * @property {string} [message]
 * @property {string} [errorCode]
 */
/**
 * @typedef UnlinkAccount
 * @property {CustomerObject} customer
 * @property {Device} device
 */
/**
 * @typedef UnlinkAccountSuccess
 * @property {string} status
 * @property {string} message
 * @property {number} statusCode
 * @property {string} [userStatus]
 * @property {string} [errorCode]
 */
/**
 * @typedef Refund
 * @property {string} [fingerprint]
 * @property {CustomerObject} [customer]
 * @property {Items[]} [refundItems]
 * @property {string} orderId
 * @property {string} refundId
 * @property {number} refundAmount
 * @property {string} [redirectionUrl]
 */
/**
 * @typedef Translation
 * @property {Object} [content]
 */
/**
 * @typedef FilterKeys
 * @property {string} [display]
 * @property {string} [name]
 * @property {string} [kind]
 */
/**
 * @typedef FilterValues
 * @property {string} [display]
 * @property {boolean} [isSelected]
 * @property {string} [value]
 */
/**
 * @typedef Filters
 * @property {FilterKeys} [key]
 * @property {FilterValues[]} [values]
 */
/**
 * @typedef PageResponse
 * @property {string} type
 * @property {number} current
 * @property {boolean} hasPrevious
 * @property {boolean} hasNext
 * @property {number} size
 * @property {number} itemTotal
 */
/**
 * @typedef UserResponse
 * @property {Filters[]} filters
 * @property {PageResponse} page
 * @property {UserSchema[]} listOfUsers
 */
/**
 * @typedef UserDetailRequest
 * @property {string} id
 */
/**
 * @typedef UserConsents
 * @property {string} [id]
 * @property {string} [userId]
 * @property {string} [ipAddress]
 * @property {string} [text]
 * @property {string} [createdAt]
 * @property {string} [updatedAt]
 * @property {string} [deletedAt]
 */
/**
 * @typedef CreditScoreSchema
 * @property {string} [id]
 * @property {string} [userId]
 * @property {number} [cibil]
 * @property {string} [finbox]
 * @property {string} [systemAwarded]
 * @property {boolean} [isActive]
 * @property {string} [deletedAt]
 * @property {string} [updatedAt]
 * @property {string} [createdAt]
 */
/**
 * @typedef CreditLimitSchema
 * @property {string} [id]
 * @property {string} [userId]
 * @property {string} [creditLimit]
 * @property {string} [createdAt]
 * @property {string} [updatedAt]
 * @property {string} [deletedAt]
 */
/**
 * @typedef Screen
 * @property {string} [screenType]
 * @property {string} [name]
 * @property {string} [link]
 */
/**
 * @typedef UserStateSchema
 * @property {Screen} [screen]
 */
/**
 * @typedef GetAccessTokenResponse
 * @property {boolean} [success]
 * @property {string} [accessToken]
 * @property {string} [refreshToken]
 * @property {string} [tokenExpireAt]
 * @property {string} [tokenExpiryIn]
 * @property {string} [refreshTokenExpiryAt]
 * @property {string} [refreshTokenExpiryIn]
 * @property {string[]} [scope]
 */
/**
 * @typedef RefreshTokenResponse
 * @property {boolean} [success]
 * @property {string} [accessToken]
 * @property {string} [tokenExpireAt]
 * @property {string} [tokenExpiryIn]
 */
/**
 * @typedef RefreshTokenRequest
 * @property {string} token
 */
/**
 * @typedef Items
 * @property {string} [category]
 * @property {string} [sku]
 * @property {number} [rate]
 * @property {number} [quantity]
 */
/**
 * @typedef RefundStatusList
 * @property {string} [id]
 * @property {Items[]} [orderItems]
 * @property {number} [amount]
 * @property {string} [status]
 * @property {string} [createdAt]
 * @property {string} [processedDate]
 */
/**
 * @typedef RefundStatus
 * @property {string} [orderId]
 * @property {string} [userId]
 * @property {string} [merchantId]
 * @property {string} [lenderId]
 * @property {string} [loanAccountNumber]
 * @property {RefundStatusList[]} [refund]
 */
/**
 * @typedef GetSchemesSuccess
 * @property {string} [userId]
 * @property {SchemeResponse[]} lenders
 */
/**
 * @typedef ActiveEntityResponse
 * @property {Object} [activeEntity]
 */
/**
 * @typedef CustomerMetricsPivots
 * @property {string} [date]
 * @property {number} [sum]
 */
/**
 * @typedef CustomerMetricsSubResponse
 * @property {string} [total]
 * @property {CustomerMetricsPivots[]} [pivots]
 * @property {string} [title]
 * @property {string} [description]
 * @property {string} [valueFormat]
 * @property {string} [logo]
 */
/**
 * @typedef CustomerMetricsAnalytics
 * @property {CustomerMetricsSubResponse} [totalCustomers]
 * @property {CustomerMetricsSubResponse} [source]
 */
/**
 * @typedef CustomerMetricsFilters
 * @property {string} type
 * @property {string} display
 * @property {string[]} value
 * @property {boolean} [isSelected]
 * @property {boolean} isActive
 */
/**
 * @typedef CustomerMetrics
 * @property {CustomerMetricsAnalytics} [metrics]
 * @property {CustomerMetricsFilters[]} [filters]
 * @property {CustomerMetricsFilters[]} [sort]
 */
/**
 * @typedef SchemeResponse
 * @property {string} slug
 * @property {boolean} isDefault
 * @property {string} logoUrl
 * @property {string} name
 * @property {string} title
 * @property {string} subtitle
 * @property {number} [amount]
 * @property {SchemePaymentOptionsResponse} paymentOptions
 */
/**
 * @typedef SchemePaymentOptionsResponse
 * @property {SchemeEmiPaymentOptionResponse[]} [emis]
 * @property {SchemePayLaterPaymentOptionResponse} [payLater]
 */
/**
 * @typedef SchemeEmiPaymentOptionResponse
 * @property {string} id
 * @property {boolean} isDefault
 * @property {string} description
 * @property {string} title
 * @property {string} subtitle
 * @property {number} amount
 * @property {number} [interest]
 * @property {number} processingFee
 * @property {number} tenure
 * @property {SchemeEmiScheduleResponse[]} emiSchedule
 */
/**
 * @typedef SchemeEmiScheduleResponse
 * @property {number} installmentNo
 * @property {number} installmentAmount
 * @property {string} dueDate
 */
/**
 * @typedef SchemePayLaterPaymentOptionResponse
 * @property {string} id
 * @property {string} title
 * @property {string} subtitle
 * @property {string} description
 * @property {number} tenure
 * @property {number} interest
 * @property {number} processingFee
 * @property {number} amount
 * @property {boolean} isDefault
 */
/**
 * @typedef LimitResponse
 * @property {AvailableOrPossibleLender[]} [available]
 * @property {AvailableOrPossibleLender[]} [possible]
 */
/**
 * @typedef AvailableOrPossibleLender
 * @property {number} limit
 * @property {string} lenderName
 * @property {string} slug
 * @property {boolean} isDefault
 * @property {string} logo
 */
/**
 * @typedef GetSchemesRequest
 * @property {CustomerObject} customer
 * @property {Order} order
 * @property {Device} device
 * @property {Object} [meta]
 */
/**
 * @typedef CustomerMetricsResponse
 * @property {CustomerMetrics} [data]
 */
/**
 * @typedef CustomerMetricsRequest
 * @property {CustomerMetricsFilters[]} [filters]
 * @property {CustomerMetricsFilters[]} [sort]
 * @property {string} [merchantId]
 * @property {string} [lenderId]
 * @property {number} [pivotPoints]
 */
/**
 * @typedef SourceAnalyticsRequest
 * @property {CustomerMetricsFilters[]} [filters]
 * @property {string} [merchantId]
 */
/**
 * @typedef LenderResponse
 * @property {string} [slug]
 * @property {string} [name]
 * @property {string} [logo]
 */
/**
 * @typedef CreditLimitObject
 * @property {number} [availableLimit]
 * @property {number} [possibleLimit]
 * @property {LenderResponse} [lender]
 */
/**
 * @typedef BusinessDetails
 * @property {string} category
 * @property {string} [shopName]
 * @property {string} legalName
 * @property {string} [address]
 * @property {string} [type]
 * @property {string} [pincode]
 */
/**
 * @typedef DocumentItems
 * @property {string} number
 * @property {string} [category]
 * @property {string} type
 * @property {string} [name]
 * @property {string} [issuedOn]
 * @property {string} [issuedAt]
 * @property {string} [issuedBy]
 * @property {string} [expiryOn]
 */
/**
 * @typedef VintageItems
 * @property {number} month
 * @property {number} year
 * @property {number} totalTransactions
 * @property {number} totalTransactionAmount
 * @property {number} [totalCancellations]
 * @property {number} [totalCancellationAmount]
 */
/**
 * @typedef EligibilitySuccess
 * @property {string} [status]
 * @property {string} [message]
 * @property {string} [redirectUrl]
 * @property {CreditLimitObject[]} [creditLimits]
 */
/**
 * @typedef CheckEligibilityRequest
 * @property {CustomerObject} customer
 * @property {Order} [order]
 * @property {Device} device
 * @property {Object} [meta]
 * @property {boolean} [fetchLimitOptions]
 */
/**
 * @typedef EmiSchedule
 * @property {number} [installmentNo]
 * @property {number} [installmentAmount]
 * @property {string} [dueDate]
 */
/**
 * @typedef PaymentOption
 * @property {string} [id]
 * @property {string} [title]
 * @property {string} [subtitle]
 * @property {string} [description]
 * @property {number} [tenure]
 * @property {number} [processingFee]
 * @property {number} [amount]
 * @property {boolean} [isDefault]
 * @property {EmiSchedule[]} [emiSchedule]
 */
/**
 * @typedef PaymentOptions
 * @property {PaymentOption} [payLater]
 * @property {PaymentOption[]} [emis]
 */
/**
 * @typedef LenderAndPaymentOption
 * @property {string} [id]
 * @property {string} name
 * @property {string} [title]
 * @property {string} [subtitle]
 * @property {boolean} [isDefault]
 * @property {string} logoUrl
 * @property {number} [amount]
 * @property {PaymentOptions} [paymentOptions]
 */
/**
 * @typedef GetSchemesSuccessOld
 * @property {string} userId
 * @property {LenderAndPaymentOption[]} [lenders]
 */
/**
 * @typedef PageSchemaResponse
 * @property {string} [slug]
 * @property {string} [description]
 * @property {Object} [sections]
 * @property {Object} [settings]
 */
/**
 * @typedef userCountRequest
 * @property {string} [merchantId]
 * @property {string} [startDate]
 * @property {string} [endDate]
 */
/**
 * @typedef RepaymentRequest
 * @property {string} mobile
 * @property {string} [countryCode]
 * @property {string} [target]
 * @property {string} callbackUrl
 * @property {string} [lenderSlug]
 */
/**
 * @typedef RepaymentResponse
 * @property {string} message
 * @property {IntegrationResponseMeta} meta
 * @property {RepaymentResponseData} data
 */
/**
 * @typedef RepaymentResponseData
 * @property {string} [repaymentUrl]
 */
/**
 * @typedef VerifyMagicLinkResponse
 * @property {UserSchema} user
 * @property {string[]} [scope]
 * @property {string} redirectPath
 * @property {string} [callbackUrl]
 * @property {Object} [meta]
 */
/**
 * @typedef VerifyMagicLinkRequest
 * @property {string} token
 */
/**
 * @typedef VintageData
 * @property {CustomerObject} [customer]
 * @property {BusinessDetails} businessDetails
 * @property {DocumentItems[]} [documents]
 * @property {Device} [device]
 * @property {VintageItems[]} vintage
 * @property {Object} [meta]
 */
/**
 * @typedef AddVintageResponse
 * @property {string} [mesasge]
 * @property {IntegrationResponseMeta} [meta]
 * @property {Object} [data]
 */
/**
 * @typedef DisbursalRequest
 * @property {string} [fingerprint]
 * @property {string} chargeToken
 * @property {number} [loanTypeId]
 * @property {number} [emiTenure]
 * @property {boolean} [isDownpaymentRequired]
 * @property {number} [downpaymentAmount]
 * @property {number} [loanAmount]
 * @property {Object} [data]
 * @property {string} [transactionId]
 * @property {string} [lenderSlug]
 * @property {string} [intent]
 */
/**
 * @typedef WorkflowUser
 * @property {string} [mobile]
 */
/**
 * @typedef EligiblePlansRequest
 * @property {string} [chargeToken]
 */
/**
 * @typedef EligiblePlans
 * @property {string} [name]
 * @property {string} [displayName]
 * @property {string} [description]
 * @property {number} [brokenInterest]
 * @property {number} [noOfEmi]
 * @property {number} [emiAmount]
 * @property {number} [processingFee]
 * @property {number} [installmentInterestRate]
 */
/**
 * @typedef EligiblePlansResponse
 * @property {EligiblePlans[]} [eligiblePlans]
 */
/**
 * @typedef DisbursalResponse
 * @property {string} [transactionId]
 * @property {string} [status]
 * @property {string} [message]
 */
/**
 * @typedef OrderStatus
 * @property {string} orderId
 * @property {string} [transactionId]
 * @property {string} status
 * @property {string} message
 */
/**
 * @typedef DisbursalStatusRequest
 * @property {string} [fingerprint]
 * @property {string} transactionId
 */
/**
 * @typedef Transactions
 * @property {string} id
 * @property {string} userId
 * @property {string} [partnerId]
 * @property {string} [partner]
 * @property {string} [partnerLogo]
 * @property {string} status
 * @property {string} [type]
 * @property {string} [remark]
 * @property {number} amount
 * @property {string} [loanAccountNumber]
 * @property {string} [kfs]
 * @property {string} [utr]
 * @property {string} [sanctionLetter]
 * @property {string} [orderId]
 * @property {string} [refundId]
 * @property {string} createdAt
 * @property {string} [lenderId]
 * @property {string} [lenderName]
 * @property {string} [lenderLogo]
 * @property {string} [loanType]
 * @property {string} [repaymentTransactionId]
 * @property {string} [nextDueDate]
 * @property {number} [paidPercent]
 * @property {LenderDetail} [lenderDetail]
 * @property {Emi[]} [emis]
 */
/**
 * @typedef LenderDetail
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [imageUrl]
 * @property {string} [slug]
 * @property {boolean} [active]
 * @property {boolean} [b2b]
 * @property {boolean} [b2c]
 * @property {Theme} [theme]
 * @property {string} [createdAt]
 * @property {string} [updatedAt]
 * @property {string} [deletedAt]
 */
/**
 * @typedef TransactionResponse
 * @property {Filters[]} filters
 * @property {PageResponse} page
 * @property {Transactions[]} transactions
 */
/**
 * @typedef MerchantTransactions
 * @property {string} [outstandingAmount]
 */
/**
 * @typedef MerchantTransactionSummary
 * @property {MerchantTransactions} [merchantOutstandingSummary]
 */
/**
 * @typedef GetReconciliationFileResponse
 * @property {ReconFile[]} files
 */
/**
 * @typedef ReconFile
 * @property {string} base64
 * @property {string} name
 */
/**
 * @typedef UploadReconciliationFileRequest
 * @property {string} base64File
 * @property {string} [format]
 * @property {string} [lenderId]
 */
/**
 * @typedef UploadReconciliationFileResponse
 * @property {boolean} [success]
 */
/**
 * @typedef TransactionCount
 * @property {string} [totalTransactions]
 */
/**
 * @typedef RefundCount
 * @property {string} [refundTransactions]
 */
/**
 * @typedef OrganizationTransactionsCount
 * @property {number} [count]
 */
/**
 * @typedef OrganizationTransactionsSum
 * @property {number} [sum]
 */
/**
 * @typedef UniqueCustomersInOrg
 * @property {number} [count]
 */
/**
 * @typedef TransactionAmount
 * @property {string} [totalTransactionAmount]
 */
/**
 * @typedef SchemaForOneDayTotal
 * @property {string} [orgId]
 * @property {string} [createdAt]
 * @property {number} [count]
 * @property {string} [sum]
 * @property {string} [refund]
 * @property {string} [difference]
 */
/**
 * @typedef SumofOneDayTransactions
 * @property {SchemaForOneDayTotal[]} [dayTotal]
 */
/**
 * @typedef AverageTransaction
 * @property {number} [average]
 */
/**
 * @typedef AllTransactionsResponse
 * @property {string} [id]
 * @property {string} [userId]
 * @property {string} [partnerId]
 * @property {string} [status]
 * @property {string} [type]
 * @property {string} [remark]
 * @property {number} [amount]
 * @property {string} [loanAccountNumber]
 * @property {string} [createdAt]
 */
/**
 * @typedef TotalRefund
 * @property {string} [totalRefund]
 */
/**
 * @typedef TotalRepayment
 * @property {string} [totalRepayment]
 */
/**
 * @typedef TotalOverDue
 * @property {string} [totalDue]
 */
/**
 * @typedef TotalLoansDisbursed
 * @property {string} [totalLoansDisbursed]
 */
/**
 * @typedef OrganizationTransactionResponse
 * @property {TrFilters[]} filters
 * @property {TrPageResponse} page
 * @property {OrgTransactions[]} transactions
 */
/**
 * @typedef TrFilters
 * @property {TrFilterKeys} [key]
 * @property {TrFilterValues[]} [values]
 */
/**
 * @typedef TrPageResponse
 * @property {string} type
 * @property {number} current
 * @property {boolean} hasPrevious
 * @property {boolean} hasNext
 * @property {number} size
 * @property {number} itemTotal
 */
/**
 * @typedef OrgTransactions
 * @property {string} id
 * @property {string} userId
 * @property {string} [userName]
 * @property {string} [partnerId]
 * @property {string} [partner]
 * @property {string} [partnerLogo]
 * @property {string} status
 * @property {string} [type]
 * @property {string} [remark]
 * @property {number} amount
 * @property {string} [orderId]
 * @property {string} [loanAccountNumber]
 * @property {string} [kfs]
 * @property {string} [sanctionLetter]
 * @property {string} createdAt
 */
/**
 * @typedef TrFilterKeys
 * @property {string} [display]
 * @property {string} [name]
 * @property {string} [kind]
 */
/**
 * @typedef TrFilterValues
 * @property {string} [display]
 * @property {boolean} [isSelected]
 * @property {string} [value]
 */
/**
 * @typedef KfsRequest
 * @property {number} [loanTypeId]
 * @property {string} [chargeToken]
 */
/**
 * @typedef KfsResponse
 * @property {string} [kfsTable]
 */
/**
 * @typedef LenderTransactionState
 * @property {string} [id]
 * @property {number} [stepIndex]
 * @property {string} [lenderId]
 * @property {string} [workflowId]
 * @property {string} [workflowName]
 * @property {string} [parentStateId]
 * @property {string} [workflowUrl]
 * @property {boolean} [isInternal]
 * @property {boolean} [active]
 * @property {number} [ttl]
 * @property {string} [name]
 * @property {string} [type]
 * @property {Object} [inputData]
 * @property {string} [createdAt]
 * @property {string} [updatedAt]
 * @property {string} [deletedAt]
 */
/**
 * @typedef TransactionStateResponse
 * @property {LenderTransactionState[]} [transactionState]
 */
/**
 * @typedef Theme
 * @property {string} [logoUrl]
 * @property {string} [iconUrl]
 * @property {string} [landscapeBgUrl]
 * @property {string} [portraitBgUrl]
 * @property {string} [shortName]
 */
/**
 * @typedef Emi
 * @property {string} [id]
 * @property {string} [userId]
 * @property {number} [installmentno]
 * @property {string} [loanAccountNumber]
 * @property {number} [amount]
 * @property {string} [dueDate]
 * @property {string} [referenceTransactionId]
 * @property {string} [remark]
 * @property {string} [createdAt]
 * @property {string} [updatedAt]
 * @property {string} [entityId]
 * @property {boolean} [paid]
 * @property {boolean} [overdue]
 * @property {string} [repaymentDate]
 */
/**
 * @typedef MetricPivots
 * @property {string} [date]
 * @property {number} [sum]
 */
/**
 * @typedef TransactionMetricSubResponse
 * @property {string} [total]
 * @property {MetricPivots[]} [pivots]
 * @property {string} [title]
 * @property {string} [description]
 * @property {string} [valueFormat]
 * @property {string} [logo]
 */
/**
 * @typedef TransactionMetrics
 * @property {TransactionMetricSubResponse} [totalDisbursement]
 * @property {TransactionMetricSubResponse} [totalOverdue]
 * @property {TransactionMetricSubResponse} [totalRepayment]
 */
/**
 * @typedef LenderCustomerTransactionMetricsFilters
 * @property {string} type
 * @property {string} display
 * @property {string[]} value
 * @property {boolean} [isSelected]
 * @property {boolean} isActive
 */
/**
 * @typedef LenderCustomerTransactionMetrics
 * @property {TransactionMetrics} [metrics]
 * @property {LenderCustomerTransactionMetricsFilters[]} [filters]
 * @property {LenderCustomerTransactionMetricsFilters[]} [sort]
 */
/**
 * @typedef LenderCustomerTransactionMetricsResponse
 * @property {Object} [data]
 */
/**
 * @typedef LenderCustomerTransactionMetricsRequest
 * @property {LenderCustomerTransactionMetricsFilters[]} [filters]
 * @property {LenderCustomerTransactionMetricsFilters[]} [sort]
 * @property {string} [startDate]
 * @property {string} [endDate]
 * @property {string} [merchantId]
 * @property {string} [lenderId]
 * @property {number} [pivotPoints]
 */
/**
 * @typedef TransactionOrder
 * @property {string} id
 * @property {number} amount
 */
/**
 * @typedef TransactionMerchant
 * @property {string} name
 * @property {string} logo
 */
/**
 * @typedef TransactionLoan
 * @property {string} number
 * @property {number} amount
 * @property {string} type
 * @property {string} dueDate
 * @property {number} repaidAmount
 * @property {boolean} isSettled
 * @property {TransactionLoanEmi[]} [emis]
 */
/**
 * @typedef TransactionLoanEmi
 * @property {number} amount
 * @property {string} dueDate
 * @property {number} installmentNo
 * @property {number} repaidAmount
 * @property {boolean} isSettled
 */
/**
 * @typedef TransactionLender
 * @property {string} name
 * @property {string} slug
 * @property {string} logo
 * @property {string} shortName
 */
/**
 * @typedef UserTransaction
 * @property {string} id
 * @property {number} amount
 * @property {string} type
 * @property {string} status
 * @property {string} [settlementUtr]
 * @property {string} [refundId]
 * @property {string} createdAt
 * @property {boolean} isMasked
 * @property {TransactionOrder} [order]
 * @property {TransactionMerchant} merchant
 * @property {TransactionLoan[]} [loans]
 * @property {TransactionLender} [lender]
 */
/**
 * @typedef Pagination
 * @property {string} [type]
 * @property {number} current
 * @property {boolean} hasPrevious
 * @property {boolean} hasNext
 * @property {number} size
 * @property {number} itemTotal
 */
/**
 * @typedef GetTransactionsData
 * @property {UserTransaction[]} transactions
 * @property {Pagination} page
 */
/**
 * @typedef GetTransactionsResponse
 * @property {string} message
 * @property {IntegrationResponseMeta} meta
 * @property {GetTransactionsData} data
 */
/**
 * @typedef SummaryRequest
 * @property {string} [startDate]
 * @property {string} [endDate]
 * @property {string} [merchantId]
 * @property {string} [type]
 */
/**
 * @typedef OrderShipmentAddressGeoLocation
 * @property {number} latitude
 * @property {number} longitude
 */
/**
 * @typedef OrderShipmentAddress
 * @property {string} [line1]
 * @property {string} [line2]
 * @property {string} [city]
 * @property {string} [state]
 * @property {string} [country]
 * @property {string} [pincode]
 * @property {string} [type]
 * @property {OrderShipmentAddressGeoLocation} [geoLocation]
 */
/**
 * @typedef OrderShipmentItem
 * @property {string} [category]
 * @property {string} [sku]
 * @property {number} [rate]
 * @property {number} [quantity]
 */
/**
 * @typedef OrderShipment
 * @property {string} id
 * @property {string} [urn]
 * @property {number} amount
 * @property {string} timestamp
 * @property {string} status
 * @property {string} [remark]
 * @property {OrderShipmentItem[]} [items]
 * @property {OrderShipmentAddress} [shippingAddress]
 * @property {OrderShipmentAddress} [billingAddress]
 */
/**
 * @typedef OrderDeliveryUpdatesBody
 * @property {string} [orderId]
 * @property {string} [transactionId]
 * @property {boolean} [includeSummary]
 * @property {OrderShipment[]} shipments
 */
/**
 * @typedef OrderShipmentSummary
 * @property {number} totalAmount
 * @property {number} processedAmount
 * @property {number} unprocessedAmount
 */
/**
 * @typedef OrderShipmentResponse
 * @property {string} id
 * @property {string} urn
 * @property {string} shipmentStatus
 * @property {number} shipmentAmount
 * @property {string} processingStatus
 */
/**
 * @typedef OrderDeliveryUpdatesData
 * @property {string} orderId
 * @property {string} transactionId
 * @property {OrderShipmentResponse[]} shipments
 * @property {OrderShipmentSummary} summary
 */
/**
 * @typedef OrderDeliveryUpdatesResponse
 * @property {string} message
 * @property {IntegrationResponseMeta} meta
 * @property {OrderDeliveryUpdatesData} data
 * @property {IntegrationResponseError[]} [errors]
 */
/**
 * @typedef Lender
 * @property {string} [id]
 * @property {string} [name]
 * @property {boolean} [active]
 * @property {string} [imageUrl]
 * @property {string} [slug]
 * @property {Object} [theme]
 * @property {boolean} [b2b]
 * @property {boolean} [b2c]
 * @property {string} [merchantConfigSchema]
 * @property {string} [createdAt]
 * @property {string} [updatedAt]
 * @property {string} [deletedAt]
 * @property {Object} [meta]
 * @property {Object} [metaSchema]
 */
/**
 * @typedef UserLender
 * @property {string} id
 * @property {string} userId
 * @property {string} lenderId
 * @property {boolean} [active]
 * @property {string} status
 * @property {string} createdAt
 * @property {string} updatedAt
 * @property {string} [deletedAt]
 * @property {number} approvedLimit
 * @property {string} [entityId]
 * @property {string} [entityMapId]
 */
/**
 * @typedef SourceCreditReport
 * @property {string} id
 * @property {string} userId
 * @property {string} pan
 * @property {string} name
 * @property {string} mobile
 * @property {string} bureau
 * @property {string} score
 * @property {string} report
 * @property {string} [createdAt]
 */
/**
 * @typedef Document
 * @property {string} id
 * @property {string} userId
 * @property {string} imageUrl
 * @property {string} number
 * @property {Object} detail
 * @property {boolean} valid
 * @property {string} createdAt
 * @property {string} updatedAt
 * @property {string} [deletedAt]
 * @property {string} [entityId]
 */
/**
 * @typedef UserKycDetail
 * @property {string} id
 * @property {string} userId
 * @property {string} status
 * @property {string} type
 * @property {string} remark
 * @property {string} profileType
 * @property {boolean} active
 * @property {string} [expiryDate]
 * @property {string} [createdAt]
 * @property {string} [updatedAt]
 * @property {string} [deletedAt]
 * @property {string} lenderId
 * @property {Lender} [lender]
 * @property {string} [entityMapId]
 * @property {string} [entityId]
 */
/**
 * @typedef Form
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [title]
 * @property {string} [subtitle]
 * @property {string} [action]
 * @property {Object} [form]
 * @property {Object} [uiSchema]
 * @property {string} [workflowId]
 */
/**
 * @typedef LenderKycStepMap
 * @property {string} [id]
 * @property {string} step
 * @property {number} stepIndex
 * @property {string} lenderId
 * @property {boolean} active
 * @property {Object} rules
 * @property {string} profileType
 * @property {string} [createdAt]
 * @property {string} [updatedAt]
 * @property {string} [deletedAt]
 * @property {string} name
 * @property {string} description
 * @property {string} iconUrl
 * @property {boolean} isInteractive
 * @property {string} [formId]
 * @property {string} [merchantId]
 * @property {Form} form
 * @property {Object} docSchema
 */
/**
 * @typedef UserKycLenderStepMap
 * @property {string} id
 * @property {string} userId
 * @property {string} lenderKycStepMapId
 * @property {string} userKycDetailId
 * @property {string} lenderId
 * @property {Object} ruleState
 * @property {boolean} active
 * @property {string} status
 * @property {string} [documentId]
 * @property {string} createdAt
 * @property {string} updatedAt
 * @property {string} [deletedAt]
 * @property {LenderKycStepMap} [lenderKycStepMap]
 * @property {string} [entityMapId]
 * @property {string} [entityId]
 * @property {string} [updatedBy]
 */
/**
 * @typedef ProofOfIdentity
 * @property {string} dob
 * @property {string} hashedEmail
 * @property {string} gender
 * @property {string} hashedMobileNumber
 * @property {string} name
 */
/**
 * @typedef ProofOfAddress
 * @property {string} careOf
 * @property {string} country
 * @property {string} district
 * @property {string} house
 * @property {string} landmark
 * @property {string} locality
 * @property {string} pincode
 * @property {string} postOffice
 * @property {string} state
 * @property {string} street
 * @property {string} subDistrict
 * @property {string} vtc
 */
/**
 * @typedef EAadhaarData
 * @property {string} aadhaarReferenceNumber
 * @property {string} aadhaarUid
 * @property {string} image
 * @property {ProofOfIdentity} proofOfIdentity
 * @property {ProofOfAddress} proofOfAddress
 * @property {string} [xml]
 * @property {string} [pdf]
 * @property {string} [address]
 */
/**
 * @typedef EntityMapDto
 * @property {string} id
 * @property {string} [merchantId]
 * @property {string} [status]
 * @property {string} lenderId
 * @property {number} [limit]
 * @property {string} [creditType]
 * @property {string} userId
 * @property {string} entityId
 */
/**
 * @typedef EntityDto
 * @property {string} id
 * @property {string} [type]
 * @property {string} [address]
 * @property {string} [name]
 * @property {string} [gender]
 * @property {string} [dob]
 * @property {string} userId
 */
/**
 * @typedef MerchantSchema
 * @property {string} id
 * @property {string} [name]
 * @property {string} [logo]
 * @property {string} [website]
 * @property {string} [apiHook]
 * @property {string} [epikId]
 * @property {string} [disbursementAccountHolderName]
 * @property {string} [disbursementAccountNumber]
 * @property {string} [disbursementIfsc]
 * @property {string} [createdBy]
 * @property {boolean} [active]
 * @property {string} [category]
 * @property {string} [createdAt]
 * @property {string} [updatedAt]
 * @property {string} [deletedAt]
 * @property {string} [businessName]
 * @property {string} [email]
 * @property {string} [businessAddress]
 * @property {string} [pincode]
 * @property {boolean} [b2b]
 * @property {boolean} [b2c]
 */
/**
 * @typedef Consent
 * @property {string} text
 * @property {string} type
 */
/**
 * @typedef ValidatePanRequest
 * @property {string} pan
 * @property {Consent[]} consents
 */
/**
 * @typedef BankDetails
 * @property {string} accountType
 * @property {string} bankName
 * @property {string} ifsc
 * @property {string} accountNumber
 * @property {string} accountHolderName
 */
/**
 * @typedef DocumentData
 * @property {string} [selfie]
 * @property {string} [video]
 * @property {string} [digilockerCode]
 * @property {BankDetails} [bankDetails]
 */
/**
 * @typedef ConfirmPanRequest
 * @property {string} pan
 * @property {string} name
 * @property {string} [entity]
 * @property {string} [merchantId]
 * @property {string} [onboardingToken]
 */
/**
 * @typedef LivelinessDetails
 * @property {string} selfie
 * @property {string} video
 */
/**
 * @typedef UploadDocumentRequest
 * @property {Object} [user]
 * @property {Object} [documentData]
 * @property {string} lenderSlug
 * @property {string} kycStep
 * @property {string} [merchantId]
 * @property {string} [entityMapId]
 */
/**
 * @typedef UploadDocumentRequestV1
 * @property {string} kycStep
 * @property {string} entityMapId
 * @property {Object} documentData
 */
/**
 * @typedef UploadDocumentRequestV3
 * @property {string} kycStep
 * @property {string} entityMapId
 * @property {Object} documentData
 */
/**
 * @typedef AadhaarRequest
 * @property {string} [digilockerCode]
 */
/**
 * @typedef UploadAadhaarRequest
 * @property {AadhaarRequest} [documentData]
 * @property {Object} [user]
 * @property {string} lenderSlug
 * @property {string} kycStep
 * @property {string} [merchantId]
 * @property {string} [entityMapId]
 */
/**
 * @typedef UploadLivelinessRequest
 * @property {LivelinessDetails} [documentData]
 * @property {Object} [user]
 * @property {string} lenderSlug
 * @property {string} kycStep
 * @property {string} [merchantId]
 * @property {string} [entityMapId]
 */
/**
 * @typedef UploadAadhaarRequestV1
 * @property {AadhaarRequest} documentData
 * @property {string} kycStep
 * @property {string} entityMapId
 */
/**
 * @typedef UploadLivelinessRequestV1
 * @property {LivelinessDetails} documentData
 * @property {string} kycStep
 * @property {string} entityMapId
 */
/**
 * @typedef UploadAadhaarRequestV2
 * @property {AadhaarRequest} [documentData]
 * @property {Object} [user]
 * @property {string} lenderSlug
 * @property {string} kycStep
 * @property {string} [merchantId]
 * @property {string} [entityMapId]
 */
/**
 * @typedef UploadLivelinessRequestV2
 * @property {LivelinessDetails} [documentData]
 * @property {Object} [user]
 * @property {string} lenderSlug
 * @property {string} kycStep
 * @property {string} [merchantId]
 * @property {string} [entityMapId]
 */
/**
 * @typedef UploadAadhaarRequestV3
 * @property {AadhaarRequest} documentData
 * @property {string} kycStep
 * @property {string} entityMapId
 */
/**
 * @typedef UploadLivelinessRequestV3
 * @property {LivelinessDetails} documentData
 * @property {string} kycStep
 * @property {string} entityMapId
 */
/**
 * @typedef UploadBankDetailsRequest
 * @property {BankDetails} [documentData]
 * @property {Object} [user]
 * @property {string} lenderSlug
 * @property {string} kycStep
 * @property {string} [merchantId]
 * @property {string} [entityMapId]
 */
/**
 * @typedef InitiateKycRequest
 * @property {string} kycType
 * @property {string} [kycId]
 * @property {string} [merchantId]
 */
/**
 * @typedef InitiateKycRequestV1
 * @property {string} entityMapId
 * @property {string} kycType
 * @property {string} [kycId]
 * @property {string} [merchantId]
 */
/**
 * @typedef LenderOnboardRequest
 * @property {string} [ack]
 * @property {Object} data
 * @property {string} [merchantId]
 */
/**
 * @typedef LenderOnboardRequestV1
 * @property {string} entityMapId
 * @property {string} [ack]
 * @property {Object} data
 * @property {string} [merchantId]
 */
/**
 * @typedef UpdateLenderStatusRequest
 * @property {string} status
 * @property {Object} payload
 * @property {Object} data
 * @property {boolean} action
 */
/**
 * @typedef UpdateProfileRequest
 * @property {string} [firstName]
 * @property {string} [lastName]
 * @property {string} [gender]
 * @property {string} [dob]
 * @property {string} userId
 * @property {boolean} [isOnboarded]
 * @property {string} [address]
 */
/**
 * @typedef UpdateEntityRequest
 * @property {string} [name]
 * @property {string} [gender]
 * @property {string} [dob]
 * @property {boolean} [isDefault]
 * @property {ProofOfAddress} [address]
 */
/**
 * @typedef CreateKycStepsRequest
 * @property {Object} data
 */
/**
 * @typedef CreateLenderPgConfigRequest
 * @property {string} mid
 * @property {string} clientId
 * @property {string} secret
 * @property {boolean} active
 * @property {string} pgId
 * @property {string} lenderId
 */
/**
 * @typedef CreateLenderStateRequest
 * @property {Object} data
 */
/**
 * @typedef UpdateLenderRequest
 * @property {Object} data
 * @property {string} lenderId
 */
/**
 * @typedef OtherPolicyFilters
 * @property {Object[]} [orderBy]
 */
/**
 * @typedef GetPolicyFilters
 * @property {string} [policyType]
 * @property {Object[]} [lenderIds]
 * @property {Object[]} [merchantIds]
 * @property {Object[]} [orderBy]
 */
/**
 * @typedef GetPolicyFilters2
 * @property {string} [breType]
 * @property {Object[]} [lenderId]
 * @property {Object[]} [merchantId]
 * @property {string} [loanType]
 * @property {string} [journeyType]
 * @property {string} [subType]
 */
/**
 * @typedef MerchantConfigRequest
 * @property {string} id
 * @property {Object} merchantConfigSchema
 */
/**
 * @typedef PanDetails
 * @property {string} name
 * @property {string} idNumber
 */
/**
 * @typedef AvailableLendersRequest
 * @property {string} chargeToken
 */
/**
 * @typedef InitialData
 * @property {string} userId
 * @property {string} entityId
 */
/**
 * @typedef ExecutePolicyRequest
 * @property {GetPolicyFilters} [policyFilters]
 * @property {InitialData} initialData
 */
/**
 * @typedef ExecutePolicyRequest2
 * @property {GetPolicyFilters2} [policyFilters]
 * @property {InitialData} initialData
 */
/**
 * @typedef RegisterGstRequest
 * @property {string} gstin
 * @property {boolean} [skipGst]
 * @property {string} [onboardingToken]
 */
/**
 * @typedef PopulateFormRequest
 * @property {Object} form
 * @property {string} [lenderId]
 * @property {string} [merchantId]
 */
/**
 * @typedef ValidateFormFieldRequest
 * @property {string} workflowName
 * @property {string} [userId]
 * @property {string} [entityId]
 * @property {string} [entityMapId]
 * @property {string} [lenderId]
 * @property {string} [merchantId]
 * @property {Object} fields
 */
/**
 * @typedef MerchantMetricFilter
 * @property {string} type
 * @property {string} display
 * @property {Object[]} value
 * @property {boolean} [isSelected]
 * @property {boolean} [isActive]
 */
/**
 * @typedef LenderCustomerMetricsRequest
 * @property {MerchantMetricFilter[]} [sort]
 * @property {MerchantMetricFilter[]} [filters]
 * @property {string} [merchantId]
 * @property {string} [lenderId]
 * @property {number} [pivotPoints]
 */
/**
 * @typedef StonewallCustomer
 * @property {string} [mobile]
 * @property {string} [uid]
 */
/**
 * @typedef GetLimitRequest
 * @property {Object[]} [lenderSlugs]
 * @property {boolean} [onlyDefaultLender]
 * @property {StonewallCustomer} customer
 */
/**
 * @typedef DocumentObject
 * @property {string} [id]
 * @property {string} [userId]
 * @property {string} [name]
 * @property {string} [imageUrl]
 * @property {string} number
 * @property {Object} detail
 * @property {boolean} [valid]
 * @property {string} [entityId]
 */
/**
 * @typedef ManualKycRequest
 * @property {Object} remark
 * @property {string} status
 * @property {string} stepId
 * @property {string} entityMapId
 * @property {DocumentObject} [documentData]
 */
/**
 * @typedef RetriggerLenderOnboardRequest
 * @property {string} stepId
 * @property {Object} data
 */
/**
 * @typedef BusinessDetail
 * @property {string} category
 * @property {string} [shopName]
 * @property {string} legalName
 * @property {string} [address]
 * @property {string} [type]
 * @property {string} [pincode]
 */
/**
 * @typedef DocumentObjects
 * @property {string} number
 * @property {string} category
 * @property {string} type
 * @property {string} [name]
 * @property {string} [issuedOn]
 * @property {string} [issuedAt]
 * @property {string} [issuedBy]
 * @property {string} [expiryOn]
 */
/**
 * @typedef AddVintageRequest
 * @property {Object} user
 * @property {BusinessDetail} businessDetails
 * @property {VintageData} vintageData
 * @property {DocumentObjects} documents
 * @property {MerchantSchema} merchant
 */
/**
 * @typedef KycCountByStatus
 * @property {string} [startDate]
 * @property {string} [endDate]
 * @property {string} [merchantId]
 * @property {string} [lenderId]
 */
/**
 * @typedef FindDocResponse
 * @property {string} status
 * @property {string} info
 * @property {string} number
 * @property {Object} [details]
 * @property {string} [name]
 */
/**
 * @typedef LenderKycStatus
 * @property {string} status
 * @property {string} [lenderId]
 * @property {string} [lenderName]
 * @property {string} [kycType]
 */
/**
 * @typedef StateResponeDto
 * @property {UserKycLenderStepMap} step
 * @property {boolean} isStepCompleted
 */
/**
 * @typedef KycStateMachineDto
 * @property {UserKycDetail} kycResult
 * @property {UserKycLenderStepMap} [action]
 */
/**
 * @typedef InitiateKycDto
 * @property {string} kycType
 * @property {string} lenderId
 * @property {Object} user
 * @property {string} [kycId]
 * @property {EntityMapDto} [entityRelation]
 */
/**
 * @typedef LenderOnboardDto
 * @property {Lender} [lender]
 * @property {Object} user
 * @property {UserLender} [userLenderDetail]
 * @property {LenderOnboardRequest} payload
 * @property {EntityMapDto} [entityRelation]
 * @property {string} ipAddress
 * @property {boolean} [overrideTtl]
 */
/**
 * @typedef StepDetails
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [iconUrl]
 * @property {string} status
 * @property {string} step
 * @property {number} order
 */
/**
 * @typedef OnboardStatusDto
 * @property {string} onboardStep
 * @property {string} onboardingId
 * @property {string} status
 * @property {string} action
 * @property {string} actionStatus
 * @property {Lender} lender
 * @property {string} [navigation]
 * @property {number} approvedLimit
 * @property {number} proposedLimit
 * @property {Object} [actionData]
 * @property {StepDetails[]} [steps]
 * @property {string} entityId
 * @property {string} entityMapId
 * @property {boolean} actionIsForm
 * @property {Form} [actionForm]
 * @property {string} [merchantId]
 * @property {string} [actionName]
 * @property {string} [actionDescription]
 */
/**
 * @typedef LenderFilters
 * @property {Object[]} [includeStatus]
 * @property {Object[]} [excludeStatus]
 * @property {Object} [allowDisabledLender]
 */
/**
 * @typedef Policy
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [url]
 * @property {Object} [data]
 * @property {string} [version]
 * @property {boolean} [active]
 * @property {Object} [type]
 * @property {number} [index]
 * @property {string} [lenderId]
 * @property {string} [merchantId]
 * @property {string} [workflowId]
 * @property {Object[]} [schemaRef]
 * @property {Object[]} [masterVariableRef]
 * @property {Object} [customVariable]
 * @property {string} [subType]
 * @property {Object} [createdAt]
 * @property {Object} [updatedAt]
 * @property {Object} [deletedAt]
 */
/**
 * @typedef OrganizationLogosObject
 * @property {string} id
 * @property {string} name
 * @property {string} logo
 * @property {boolean} active
 */
/**
 * @typedef MetricSubTypes
 * @property {string} date
 * @property {string} [count]
 * @property {string} [sum]
 */
/**
 * @typedef MetricTypes
 * @property {MetricSubTypes[]} pivots
 * @property {string} [total]
 * @property {string} description
 * @property {string} title
 * @property {string} valueFormat
 * @property {string} logo
 */
/**
 * @typedef BreApprovedUsersResponse
 * @property {MetricTypes} data
 */
/**
 * @typedef Metrics
 * @property {MetricTypes} lenderApprovedUsers
 * @property {MetricTypes} breApprovedUsers
 * @property {MetricTypes} totalCreditLine
 */
/**
 * @typedef MetricData
 * @property {Metrics} metrics
 * @property {MerchantMetricFilter[]} filters
 * @property {MerchantMetricFilter[]} sort
 */
/**
 * @typedef GetAllUserLendersByEnityId
 * @property {string} entityId
 * @property {string} entityMapId
 * @property {string} userId
 * @property {string} status
 * @property {Lender} [lender]
 * @property {string} [partnerId]
 * @property {number} [approvedLimit]
 */
/**
 * @typedef ApprovedLenders
 * @property {string} status
 * @property {BreOutput[]} lenders
 */
/**
 * @typedef BreResultStatus
 * @property {string} status
 * @property {BreOutput[]} [approvedLenders]
 */
/**
 * @typedef GetKycDocsResponse
 * @property {FindDocResponse[]} documents
 */
/**
 * @typedef LenderState
 * @property {string} [id]
 * @property {string} name
 * @property {string} lenderId
 * @property {number} index
 * @property {string} workflowName
 * @property {string} [workflowUrl]
 * @property {boolean} active
 * @property {string} [createdAt]
 * @property {string} [updatedAt]
 * @property {string} [deletedAt]
 * @property {Lender} [lender]
 * @property {string} [parentStateId]
 * @property {number} ttl
 * @property {string} [displayName]
 * @property {string} [description]
 * @property {string} [iconUrl]
 * @property {boolean} isInteractive
 * @property {Object} [schema]
 */
/**
 * @typedef UserLenderState
 * @property {string} id
 * @property {string} lenderStateId
 * @property {string} lenderId
 * @property {string} userId
 * @property {string} status
 * @property {string} userLenderId
 * @property {string} remark
 * @property {boolean} active
 * @property {LenderState} [lenderState]
 * @property {Object} [data]
 * @property {string} [createdAt]
 * @property {string} [updatedAt]
 * @property {string} [deletedAt]
 * @property {string} [entityId]
 * @property {string} [entityMapId]
 * @property {string} [updatedBy]
 */
/**
 * @typedef LenderConfig
 * @property {string} [id]
 * @property {string} baseUrl
 * @property {string} [accessToken]
 * @property {string} [secret]
 * @property {Object} data
 * @property {string} lenderId
 * @property {boolean} [active]
 * @property {string} [createdAt]
 * @property {string} [updatedAt]
 * @property {string} [deletedAt]
 */
/**
 * @typedef Pg
 * @property {string} id
 * @property {string} name
 * @property {boolean} active
 */
/**
 * @typedef LenderPgConfig
 * @property {string} [id]
 * @property {string} mid
 * @property {string} clientId
 * @property {string} secret
 * @property {string} lenderId
 * @property {string} pgId
 * @property {boolean} active
 */
/**
 * @typedef FileUploadResponse
 * @property {string} fileId
 * @property {string} name
 * @property {string} path
 * @property {string} format
 * @property {number} size
 * @property {string} access
 * @property {string} tags
 * @property {string} metadata
 * @property {string} url
 * @property {string} thumbnail
 */
/**
 * @typedef PresignedUrl
 * @property {string} url
 * @property {Object} fields
 */
/**
 * @typedef PresignedUrlV2
 * @property {string} url
 * @property {Object} fields
 */
/**
 * @typedef LenderDocument
 * @property {string} [id]
 * @property {string} [lenderId]
 * @property {string} [type]
 * @property {Object} [document]
 * @property {boolean} [active]
 * @property {string} [createdAt]
 * @property {string} [updatedAt]
 * @property {string} [deletedAt]
 */
/**
 * @typedef Commercial
 * @property {string} [id]
 * @property {string} lenderId
 * @property {string} merchantId
 * @property {Object} commercial
 * @property {boolean} active
 * @property {string} [createdAt]
 * @property {string} [updatedAt]
 */
/**
 * @typedef KycStatusResponse
 * @property {boolean} isKycInitiated
 * @property {string} userId
 * @property {LenderKycStatus[]} kycStatuses
 */
/**
 * @typedef WorkflowResponse
 * @property {Object} [data]
 */
/**
 * @typedef Action
 * @property {string} step
 * @property {string} status
 * @property {number} index
 * @property {boolean} [isForm]
 * @property {Form} form
 */
/**
 * @typedef InitiateKycResponse
 * @property {UserKycDetail} kycResult
 * @property {Action} action
 */
/**
 * @typedef UploadDocResponse
 * @property {string} status
 * @property {Object} [data]
 * @property {string} [remark]
 * @property {string} reasons
 * @property {UserKycDetail} kycResult
 * @property {Action} action
 */
/**
 * @typedef LenderOnboardResponse
 * @property {UserLender} result
 * @property {UserLenderState} action
 * @property {Object} data
 */
/**
 * @typedef OnboardingStatusResponse
 * @property {OnboardStatusDto[]} onboardStatuses
 */
/**
 * @typedef SignedUrlResponse
 * @property {PresignedUrl} signedUrl
 * @property {string} fileUrl
 */
/**
 * @typedef SignedUrlV2Response
 * @property {PresignedUrlV2} signedUrl
 * @property {string} fileUrl
 */
/**
 * @typedef PresignedUrlV3
 * @property {string} signedUrl
 * @property {Object} provider
 */
/**
 * @typedef SignedUrlV3Response
 * @property {PresignedUrlV3} signedDetails
 * @property {string} fileUrl
 */
/**
 * @typedef DigilockerLinkResponse
 * @property {string} authorizationUrl
 */
/**
 * @typedef GetDocumentsResponse
 * @property {FindDocResponse[]} documents
 */
/**
 * @typedef ApprovedLendersTransaction
 * @property {string} name
 * @property {string} slug
 * @property {string} imageUrl
 * @property {string} status
 * @property {boolean} active
 * @property {number} proposedLimit
 * @property {string | string} createdAt
 * @property {string | string} updatedAt
 * @property {string | string} [deletedAt]
 * @property {boolean} [isDefault]
 */
/**
 * @typedef ApprovedPossibleLenders
 * @property {number} limit
 * @property {string} name
 * @property {string} slug
 * @property {boolean} active
 * @property {string} id
 * @property {Object} [theme]
 */
/**
 * @typedef AvailableLenders
 * @property {ApprovedPossibleLenders[]} approvedLenders
 * @property {ApprovedPossibleLenders[]} possibleLenders
 */
/**
 * @typedef CreditLimit
 * @property {number} availableLimit
 * @property {number} approvedLimit
 */
/**
 * @typedef CreditLimitResponse
 * @property {string} status
 * @property {string} message
 * @property {boolean} action
 * @property {CreditLimit} credit
 */
/**
 * @typedef LenderPgConfigResponse
 * @property {string} id
 * @property {string} mid
 * @property {string} clientId
 * @property {string} secret
 * @property {string} lenderId
 * @property {string} pgId
 * @property {boolean} active
 * @property {string} pgName
 * @property {boolean} pgActive
 */
/**
 * @typedef GetLendersResponse
 * @property {Lender[]} data
 */
/**
 * @typedef LenderConfigurationResponse
 * @property {Lender} lender
 * @property {LenderPgConfig} lenderPgConfig
 * @property {LenderConfig} lenderConfig
 * @property {LenderState[]} lenderState
 * @property {LenderKycStepMap[]} lenderKycStepMap
 */
/**
 * @typedef UpsertLenderResponse
 * @property {Object} data
 */
/**
 * @typedef UpsertLenderConfigResponse
 * @property {Object} data
 */
/**
 * @typedef CreateKycStepsSchema
 * @property {LenderKycStepMap[]} data
 */
/**
 * @typedef CreatePaymentGatewaySchema
 * @property {LenderPgConfig[]} data
 */
/**
 * @typedef CreateLenderStateSchema
 * @property {LenderState[]} data
 */
/**
 * @typedef GetAllPaymentGatewaysSchema
 * @property {Pg[]} data
 */
/**
 * @typedef PolicyResponse
 * @property {Policy[]} policies
 */
/**
 * @typedef CreditCheckBreResponse
 * @property {boolean} newLenderAssigned
 * @property {string} breStatus
 */
/**
 * @typedef MerchantConfigResponse
 * @property {string} id
 * @property {string} merhantConfigSchema
 */
/**
 * @typedef UserLenderByIdAndStatusResponse
 * @property {string} id
 * @property {string} userId
 * @property {string} lenderId
 * @property {boolean} [active]
 * @property {string} status
 * @property {string} createdAt
 * @property {string} updatedAt
 * @property {string} [deletedAt]
 * @property {number} approvedLimit
 * @property {string} [slug]
 * @property {Object} [theme]
 * @property {Object} [name]
 */
/**
 * @typedef IntgrAvailableCreditLimit
 * @property {number} limit
 * @property {string} lenderName
 * @property {string} slug
 * @property {boolean} isDefault
 * @property {string} logoUrl
 */
/**
 * @typedef IngtrAvailableLimit
 * @property {IntgrAvailableCreditLimit[]} available
 * @property {IntgrAvailableCreditLimit[]} [possible]
 */
/**
 * @typedef IntgrCreditLimit
 * @property {IngtrAvailableLimit} limit
 */
/**
 * @typedef PossibleLendersInternal
 * @property {boolean} limit
 * @property {string} lenderName
 * @property {string} slug
 * @property {boolean} isDefault
 * @property {string} logo
 * @property {string} lenderId
 */
/**
 * @typedef PossibleLendersInternalResponse
 * @property {PossibleLendersInternal[]} lenders
 */
/**
 * @typedef GetTotalKycResponse
 * @property {string} totalKyc
 */
/**
 * @typedef GetTotalKycCompletedUsersResponse
 * @property {string} totalKycCompletedUsers
 */
/**
 * @typedef GetTotalPendingUsersResponse
 * @property {string} totalPendingKyc
 */
/**
 * @typedef GetTotalCreditProvidedResponse
 * @property {string} totalCreditLimit
 */
/**
 * @typedef MetaSchemaResponse
 * @property {string} title
 * @property {string} name
 * @property {string[]} required
 * @property {string} type
 * @property {Object} properties
 */
/**
 * @typedef MetaSchema
 * @property {MetaSchemaResponse} metaSchema
 */
/**
 * @typedef AddMetaSchema
 * @property {string} lenderSlug
 * @property {string} merchantId
 * @property {Object} schema
 */
/**
 * @typedef AddMetaSchemaRequest
 * @property {string} merchantId
 * @property {Object} schema
 */
/**
 * @typedef ValidatePanResponse
 * @property {string} panName
 * @property {string} isPanValid
 * @property {string} pan
 * @property {boolean} isProprietor
 * @property {string} panType
 * @property {string} [errorCode]
 * @property {string} [status]
 * @property {string} [errorMessage]
 */
/**
 * @typedef ConfirmPanResonse
 * @property {string} status
 * @property {string} statusCode
 * @property {string} message
 */
/**
 * @typedef LenderCountResponse
 * @property {number} active
 * @property {number} inActive
 */
/**
 * @typedef OnboardStepsDto
 * @property {StepDetails[]} steps
 * @property {Lender} lender
 */
/**
 * @typedef OnboardStepsResponse
 * @property {OnboardStepsDto[]} stepDetails
 */
/**
 * @typedef LenderDocumentResponse
 * @property {LenderDocument} data
 */
/**
 * @typedef GetUserLendersResponse
 * @property {UserLender[]} data
 */
/**
 * @typedef CreditReportResponse
 * @property {SourceCreditReport} data
 */
/**
 * @typedef KycDetailsReponse
 * @property {UserKycLenderStepMap} data
 */
/**
 * @typedef GetDocumentByIdResponse
 * @property {Document} data
 */
/**
 * @typedef GetAllFormsResponse
 * @property {Object} data
 */
/**
 * @typedef UpsertFormResponse
 * @property {Object} data
 */
/**
 * @typedef GstDetails
 * @property {string} gstin
 * @property {string} businessName
 */
/**
 * @typedef GstDetailsResponse
 * @property {GstDetails[]} gstDetails
 */
/**
 * @typedef RegisterGstResponse
 * @property {Document} gstDocDetails
 * @property {string} status
 */
/**
 * @typedef PopulateFormResponse
 * @property {Object} form
 */
/**
 * @typedef ValidateFormFieldResponse
 * @property {string} status
 * @property {string} message
 * @property {Object} data
 */
/**
 * @typedef LenderCustomerMetricsResponse
 * @property {string} status
 * @property {string} message
 * @property {MetricData} data
 */
/**
 * @typedef BreOutput
 * @property {string} id
 * @property {string} userId
 * @property {string} entityId
 * @property {string} [lenderId]
 * @property {string} [merchantId]
 * @property {string} policyName
 * @property {string} category
 * @property {string} type
 * @property {Object} output
 * @property {string} status
 * @property {string} createdAt
 * @property {string} updatedAt
 * @property {string} deletedAt
 */
/**
 * @typedef ManualKycResponse
 * @property {string} message
 * @property {UserKycLenderStepMap} step
 */
/**
 * @typedef CustomerKycDetailsReponse
 * @property {UserKycLenderStepMap} data
 */
/**
 * @typedef PlatformFees
 * @property {number} customerAcquisitionFee
 * @property {number} transactionFee
 */
/**
 * @typedef CommercialResponse
 * @property {Commercial} data
 */
/**
 * @typedef BlockUserRequestSchema
 * @property {boolean} [status]
 * @property {string[]} [userid]
 * @property {string} [reason]
 */
/**
 * @typedef EditEmailRequestSchema
 * @property {string} [email]
 */
/**
 * @typedef SendVerificationLinkMobileRequestSchema
 * @property {boolean} [verified]
 * @property {boolean} [active]
 * @property {string} [countryCode]
 * @property {string} [phone]
 * @property {boolean} [primary]
 */
/**
 * @typedef EditMobileRequestSchema
 * @property {string} [countryCode]
 * @property {string} [phone]
 */
/**
 * @typedef UpdateEmail
 * @property {string} email
 * @property {any} [additionalProperties]
 */
/**
 * @typedef EditProfileRequestSchema
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} [countryCode]
 * @property {string} [mobile]
 * @property {string} [email]
 * @property {string} [gender]
 * @property {string} [registrationToken]
 */
/**
 * @typedef EditProfileMobileSchema
 * @property {string} [phone]
 * @property {string} [countryCode]
 */
/**
 * @typedef SendEmailOtpRequestSchema
 * @property {string} [email]
 * @property {string} [action]
 * @property {string} [token]
 * @property {string} [registerToken]
 */
/**
 * @typedef VerifyEmailOtpRequestSchema
 * @property {string} [email]
 * @property {string} [action]
 * @property {string} [registerToken]
 * @property {string} [otp]
 */
/**
 * @typedef ReSendMobileOtpRequestSchema
 * @property {string} [captchaCode]
 * @property {string} token
 * @property {string} [androidHash]
 */
/**
 * @typedef ResetPasswordSuccess
 * @property {string} [status]
 */
/**
 * @typedef RegisterFormSuccess
 * @property {string} [email]
 * @property {number} [resendTimer]
 * @property {string} [resendToken]
 * @property {string} [resendEmailToken]
 * @property {string} [registerToken]
 * @property {boolean} [success]
 * @property {string} [requestId]
 * @property {string} [message]
 * @property {string} [mobile]
 * @property {string} [countryCode]
 * @property {boolean} [verifyEmailOtp]
 * @property {boolean} [verifyMobileOtp]
 * @property {boolean} [userExists]
 */
/**
 * @typedef VerifyEmailSuccess
 * @property {string} [message]
 */
/**
 * @typedef BlockUserSuccess
 * @property {boolean} [success]
 */
/**
 * @typedef EmailOtpSuccess
 * @property {boolean} [success]
 */
/**
 * @typedef VerifyEmailOTPSuccess
 * @property {UserSchema} [user]
 * @property {boolean} [verifyEmailLink]
 */
/**
 * @typedef SendMobileVerifyLinkSuccess
 * @property {boolean} [verifyMobileLink]
 */
/**
 * @typedef SendEmailVerifyLinkSuccess
 * @property {boolean} [verifyEmailLink]
 */
/**
 * @typedef UserSearchResponseSchema
 * @property {UserSchema[]} [users]
 */
/**
 * @typedef CustomerListResponseSchema
 * @property {UserSchema[]} [items]
 * @property {PaginationSchema} [page]
 */
/**
 * @typedef PaginationSchema
 * @property {number} [size]
 * @property {number} [itemTotal]
 * @property {boolean} [hasNext]
 * @property {string} [type]
 * @property {number} [current]
 */
/**
 * @typedef UserObjectSchema
 * @property {UserSchema} [user]
 */
/**
 * @typedef CreateOrganization
 * @property {string} [name]
 * @property {string} [logo]
 * @property {string} [website]
 * @property {string} [disbursementAccountHolderName]
 * @property {string} [disbursementAccountNumber]
 * @property {string} [disbursementIfsc]
 * @property {string} [businessName]
 * @property {string} [email]
 * @property {string} [businessAddress]
 * @property {string} [pincode]
 * @property {boolean} [b2b]
 * @property {boolean} [b2c]
 * @property {string} [docType]
 * @property {string} [docNumber]
 * @property {string} [organizationId]
 */
/**
 * @typedef UpdateLogo
 * @property {string} [logo]
 */
/**
 * @typedef AddMetaSchemaResponse
 * @property {string} [merchantId]
 * @property {string} [lenderId]
 * @property {string} [mid]
 * @property {Object} [data]
 */
/**
 * @typedef UpdateOrganization
 * @property {string} id
 * @property {Object | any} [name]
 * @property {Object | any} [logo]
 * @property {Object | any} [website]
 * @property {Object | any} [disbursementAccountHolderName]
 * @property {Object | any} [disbursementAccountNumber]
 * @property {Object | any} [disbursementIfsc]
 * @property {boolean} [active]
 */
/**
 * @typedef UpdateFinancials
 * @property {string} disbursementAccountHolderName
 * @property {string} disbursementAccountNumber
 * @property {string} disbursementIfsc
 */
/**
 * @typedef Documents
 * @property {string} docType
 * @property {string} docNumber
 */
/**
 * @typedef FinancialDetails
 * @property {string} [disbursementAccountHolderName]
 * @property {string} [disbursementAccountNumber]
 * @property {string} [disbursementIfsc]
 * @property {boolean} [b2b]
 * @property {boolean} [b2c]
 * @property {string} [businessName]
 * @property {string} [email]
 * @property {string} [businessAddress]
 * @property {string} [pincode]
 * @property {Documents[]} [documents]
 */
/**
 * @typedef GetOrganization
 * @property {string} [organizationId]
 * @property {string} [createdAt]
 * @property {string} [updatedAt]
 * @property {boolean} [isAdmin]
 * @property {string} [name]
 * @property {boolean} [isActive]
 */
/**
 * @typedef OrganizationDetails
 * @property {string} [name]
 * @property {string} [organizationId]
 * @property {boolean} [isAdmin]
 * @property {string} [createdAt]
 * @property {string} [updatedAt]
 * @property {string} [deletedAt]
 * @property {boolean} [isActive]
 * @property {string} [logo]
 * @property {string} [website]
 * @property {string} [disbursementAccountHolderName]
 * @property {string} [disbursementAccountNumber]
 * @property {string} [disbursementIfsc]
 */
/**
 * @typedef Organization
 * @property {string} [id]
 * @property {string} [name]
 * @property {boolean} [active]
 * @property {string} [createdAt]
 * @property {string} [updatedAt]
 * @property {string} [deletedAt]
 */
/**
 * @typedef OrganizationList
 * @property {string} [name]
 * @property {string} [logo]
 * @property {boolean} [id]
 * @property {string} [createdAt]
 * @property {string} [updatedAt]
 * @property {string} [deletedAt]
 * @property {boolean} [isActive]
 * @property {string} [epikId]
 * @property {string} [website]
 * @property {string} [disbursementAccountHolderName]
 * @property {string} [disbursementAccountNumber]
 * @property {string} [disbursementIfsc]
 */
/**
 * @typedef OrganizationCount
 * @property {string} [count]
 */
/**
 * @typedef TeamMembers
 * @property {Member[]} [members]
 */
/**
 * @typedef Member
 * @property {string} [id]
 * @property {string} [userId]
 * @property {string} [organizationId]
 * @property {boolean} [isAdmin]
 * @property {string} [createdAt]
 * @property {string} [updatedAt]
 * @property {string} [deletedAt]
 * @property {Profile} [profile]
 */
/**
 * @typedef Profile
 * @property {string} [id]
 * @property {string} [userId]
 * @property {string} [organizationId]
 * @property {boolean} [isAdmin]
 * @property {string} [createdAt]
 * @property {string} [updatedAt]
 * @property {string} [deletedAt]
 */
/**
 * @typedef AddTeamMember
 * @property {string} [countryCode]
 * @property {string} [mobile]
 * @property {string} [email]
 * @property {boolean} [userIsAdmin]
 */
/**
 * @typedef UpdateTeamMemberRole
 * @property {boolean} [userIsAdmin]
 * @property {string} [userId]
 */
/**
 * @typedef RemoveTeamMemberResponse
 * @property {boolean} [success]
 */
/**
 * @typedef AddTeamMemberResponse
 * @property {string} [id]
 * @property {string} [userId]
 * @property {string} [organizationId]
 * @property {boolean} [isAdmin]
 * @property {string} [createdAt]
 * @property {string} [updatedAt]
 * @property {string} [deletedAt]
 */
/**
 * @typedef ApiKey
 * @property {string} [key]
 * @property {string} [secret]
 */
/**
 * @typedef UpdateApiHook
 * @property {string} apiKey
 * @property {string} url
 * @property {Object} [customHeaders]
 */
/**
 * @typedef ApiHookDetails
 * @property {string} apiKey
 * @property {string} url
 * @property {Object} [customHeaders]
 * @property {string} [createdAt]
 * @property {string} [updatedAt]
 */
/**
 * @typedef UpdateApiHookResponse
 * @property {boolean} [success]
 */
/**
 * @typedef OrganizationIp
 * @property {string} [id]
 * @property {string} ip
 */
/**
 * @typedef AddOrganizationIpDetails
 * @property {OrganizationIp[]} [organizationIps]
 * @property {string} [delete]
 */
/**
 * @typedef AddUpdateCsvFileResponse
 * @property {string} [message]
 */
/**
 * @typedef AddUpdateCsvFileRequest
 * @property {string} [csv]
 * @property {string} [organizationId]
 */
/**
 * @typedef CsvFile
 * @property {string} [csv]
 */
/**
 * @typedef AddReportCsvFileResponse
 * @property {string} [message]
 */
/**
 * @typedef AddReportCsvFileRequest
 * @property {string} [csv]
 * @property {string} [organizationId]
 * @property {string} [name]
 * @property {string} [type]
 */
/**
 * @typedef ReportCsvFileResponse
 * @property {string} [csv]
 */
/**
 * @typedef AddReportRequestArray
 * @property {string} [mobile]
 * @property {string} [merchantId]
 * @property {string} [category]
 * @property {string} [shopName]
 * @property {string} [legalName]
 * @property {string} [firstName]
 * @property {string} [middleName]
 * @property {string} [lastName]
 * @property {string} [aadhaar]
 * @property {string} [nameOnPan]
 * @property {string} [gstNumber]
 * @property {string} [gstBusinessName]
 * @property {string} [panNumber]
 * @property {string} [udyam]
 * @property {string} [ownershipType]
 * @property {string} [address]
 * @property {string} [pincode]
 * @property {string} [license1Type]
 * @property {string} [license1]
 * @property {string} [license2Type]
 * @property {string} [license2]
 */
/**
 * @typedef AddReportRequest
 * @property {Object[]} [businessDetails]
 */
/**
 * @typedef AddReportResponseArray
 * @property {string} [mobile]
 * @property {string} [merchantId]
 * @property {string} [anchorId]
 * @property {string} [category]
 * @property {string} [shopName]
 * @property {string} [legalName]
 * @property {string} [firstName]
 * @property {string} [middleName]
 * @property {string} [lastName]
 * @property {string} [aadhaar]
 * @property {string} [nameOnPan]
 * @property {string} [gstNumber]
 * @property {string} [gstBusinessName]
 * @property {string} [panNumber]
 * @property {string} [udyam]
 * @property {string} [ownershipType]
 * @property {string} [address]
 * @property {string} [pincode]
 * @property {string} [license1Type]
 * @property {string} [license1]
 * @property {string} [license2Type]
 * @property {string} [license2]
 */
/**
 * @typedef AddReportResponse
 * @property {AddReportResponseArray[]} [businessDetails]
 */
/**
 * @typedef VintageDataResponseObject
 * @property {string} [month]
 * @property {number} [year]
 * @property {string} [revenue]
 * @property {string} [businessId]
 * @property {string} [createdBy]
 * @property {string} [id]
 * @property {string} [createdAt]
 * @property {string} [updatedBy]
 * @property {string} [updatedAt]
 */
/**
 * @typedef VintageDataResponse
 * @property {VintageDataResponseObject[]} [vintageData]
 */
/**
 * @typedef AddSkuRequestArray
 * @property {string} sku
 * @property {string} productName
 * @property {string} creditPurchaseOptionFlag
 * @property {string} effectiveDates
 * @property {string} organizationId
 */
/**
 * @typedef AddSkuRequest
 * @property {AddSkuRequestArray[]} [skuDetails]
 */
/**
 * @typedef AddSkuResponse
 * @property {string} [message]
 */
/**
 * @typedef RestrictedSkuSchema
 * @property {Object[]} [skuDetails]
 */
/**
 * @typedef OrganizationIpResponse
 * @property {string} organizationId
 * @property {string} ip
 * @property {string} [createdAt]
 * @property {string} [updatedAt]
 * @property {string} id
 */
/**
 * @typedef OrganizationIpDetails
 * @property {OrganizationIpResponse[]} [organizationIps]
 */
/**
 * @typedef RefundSuccess
 * @property {string} status
 * @property {number} message
 * @property {string} transactionId
 * @property {string} refundId
 */
/**
 * @typedef RefundItem
 * @property {Object[]} items
 */
/**
 * @typedef ValidateCredentialsData
 * @property {boolean} success
 * @property {string} organizationId
 * @property {string} [organizationName]
 */
/**
 * @typedef ValidateCredentialsResponse
 * @property {string} message
 * @property {IntegrationResponseMeta} meta
 * @property {ValidateCredentialsData} data
 */
/**
 * @typedef PaymentLinkResponse
 * @property {string} [status]
 * @property {string} [message]
 * @property {string} [paymentLink]
 */
/**
 * @typedef ApplicationCutomer
 * @property {string} [countryCode]
 * @property {string} mobile
 * @property {string} [uid]
 * @property {string} [email]
 */
/**
 * @typedef GeoLocation
 * @property {number} latitude
 * @property {number} longitude
 */
/**
 * @typedef Address
 * @property {string} [line1]
 * @property {string} [line2]
 * @property {string} [city]
 * @property {string} [state]
 * @property {string} [country]
 * @property {string} [pincode]
 * @property {string} [type]
 * @property {GeoLocation} [geoLocation]
 */
/**
 * @typedef OrderItems
 * @property {string} [category]
 * @property {string} [sku]
 * @property {number} [rate]
 * @property {number} [quantity]
 */
/**
 * @typedef PaymentLinkRequest
 * @property {boolean} [autoCapture]
 * @property {string} [lenderId]
 * @property {number} [emiTenure]
 * @property {ApplicationCutomer} customer
 * @property {Order} order
 * @property {Device} [device]
 * @property {Object} [meta]
 */
/**
 * @typedef UpdateLenderStatusSchemaRequest
 * @property {string} [merchantId]
 * @property {boolean} [enable]
 */
/**
 * @typedef UpdateLenderStatusSchemaResponse
 * @property {string} [merchantId]
 * @property {string} [lenderId]
 * @property {string} [mid]
 * @property {boolean} [enable]
 * @property {Object} [data]
 */
/**
 * @typedef LenderTheme
 * @property {string} [iconUrl]
 * @property {string} [logoUrl]
 */
/**
 * @typedef LenderDetails
 * @property {string} [slug]
 * @property {string} [name]
 * @property {string} [id]
 * @property {LenderTheme} [theme]
 */
/**
 * @typedef OutstandingData
 * @property {LenderDetails} [lenderDetails]
 * @property {number} [availableLimit]
 * @property {number} [creditLimit]
 * @property {number} [dueAmount]
 * @property {number} [outstandingAmount]
 * @property {string} [dueDate]
 */
/**
 * @typedef OutstandingDetailsResponse
 * @property {OutstandingData[]} [outstandingDetails]
 */
/**
 * @typedef CreateUserRequestSchema
 * @property {string} mobile
 * @property {string} [email]
 * @property {string} [firstName]
 * @property {string} [lastName]
 * @property {string} [gender]
 */
/**
 * @typedef CreateUserResponseSchema
 * @property {UserSchema} [user]
 */
/**
 * @typedef RepaymentUsingNetbanking
 * @property {number} amount
 * @property {string} bankId
 * @property {string} bankName
 * @property {string} [chargeToken]
 * @property {string} [transactionId]
 */
/**
 * @typedef RepaymentUsingNetbankingResponse
 * @property {string} [form]
 * @property {boolean} [isDifferent]
 * @property {string} [outstanding]
 */
/**
 * @typedef RepaymentUsingUPI
 * @property {number} amount
 * @property {string} vpa
 * @property {string} [chargeToken]
 * @property {string} [transactionId]
 */
/**
 * @typedef RepaymentUsingUPIResponse
 * @property {boolean} [isDifferent]
 * @property {string} [outstanding]
 * @property {string} [status]
 * @property {string} [intentId]
 * @property {string} [transactionId]
 * @property {number} [expiry]
 * @property {number} [interval]
 */
/**
 * @typedef RegisterUPIMandateRequest
 * @property {string} [vpa]
 */
/**
 * @typedef RegisterUPIMandateResponse
 * @property {string} [transactionId]
 * @property {number} [expiry]
 * @property {number} [interval]
 */
/**
 * @typedef RegisterUPIMandateStatusCheckRequest
 * @property {string} [transactionId]
 */
/**
 * @typedef RegisterMandateStatusCheckResponse
 * @property {string} [status]
 */
/**
 * @typedef TransactionStatusRequest
 * @property {string} intentId
 * @property {string} transactionId
 */
/**
 * @typedef TransactionStatusResponse
 * @property {boolean} success
 * @property {string} [methodType]
 * @property {string} [methodSubType]
 * @property {string} [status]
 */
/**
 * @typedef BankList
 * @property {string} [bankId]
 * @property {string} [bankName]
 * @property {number} [rank]
 * @property {boolean} [popular]
 * @property {string} [imageUrl]
 */
/**
 * @typedef PaymentsObject
 * @property {string} [title]
 * @property {string} [kind]
 * @property {PaymentOptions[]} [options]
 */
/**
 * @typedef OutstandingDetail
 * @property {string} [status]
 * @property {boolean} [action]
 * @property {OutstandingMessage} [message]
 * @property {UserCredit} [credit]
 * @property {DueSummaryOutstanding} [dueSummary]
 * @property {OutstandingSummary} [outstandingSummary]
 * @property {string} [entityMapId]
 */
/**
 * @typedef OutstandingSummary
 * @property {number} [totalOutstanding]
 * @property {number} [totalOutstandingWithInterest]
 * @property {number} [totalOutstandingPenalty]
 * @property {number} [availableLimit]
 * @property {boolean} [isOverdue]
 * @property {string} [dueFromDate]
 * @property {RepaymentSummaryOutstanding[]} [repaymentSummary]
 */
/**
 * @typedef DueSummaryOutstanding
 * @property {string} [dueDate]
 * @property {number} [totalDue]
 * @property {number} [totalDueWithInterest]
 * @property {number} [totalDuePenalty]
 * @property {DueTransactionsOutstanding[]} [dueTransactions]
 * @property {number} [minAmntDue]
 */
/**
 * @typedef OutstandingMessage
 * @property {string} [dueMessage]
 * @property {string} [backgroundColor]
 * @property {string} [textColor]
 * @property {boolean} [isFlexiRepayEnabled]
 */
/**
 * @typedef UserCredit
 * @property {number} [availableLimit]
 * @property {number} [approvedLimit]
 * @property {boolean} [isEligibleToDrawdown]
 */
/**
 * @typedef DueTransactionsOutstanding
 * @property {string} [loanRequestNo]
 * @property {string} [merchantCategory]
 * @property {number} [installmentAmountWithInterest]
 * @property {number} [installmentAmount]
 * @property {number} [dueAmount]
 * @property {string} [loanType]
 * @property {string} [installmentNo]
 * @property {string} [installmentDueDate]
 * @property {boolean} [isPastDue]
 * @property {boolean} [isPenaltyCharged]
 * @property {number} [penaltyAmount]
 * @property {number} [noOfDaysPenaltyCharged]
 * @property {number} [daysDifference]
 * @property {string} [lenderTransactionId]
 */
/**
 * @typedef RepaymentSummaryOutstanding
 * @property {string} [loanRequestNo]
 * @property {string} [loanType]
 * @property {string} [merchantCategory]
 * @property {boolean} [isBbillingTransaction]
 * @property {number} [totalInstallmentAmount]
 * @property {number} [totalInstallmentAmountWithInterest]
 * @property {OutstandingDetailsRepayment[]} [outstandingDetails]
 */
/**
 * @typedef OutstandingDetailsRepayment
 * @property {number} [installmentAmountWithInterest]
 * @property {number} [installmentAmount]
 * @property {number} [dueAmount]
 * @property {string} [installmentNo]
 * @property {string} [installmentDueDate]
 * @property {boolean} [isPastDue]
 * @property {string} [loanType]
 * @property {boolean} [isPenaltyCharged]
 * @property {number} [penaltyAmount]
 * @property {number} [noOfDaysPenaltyCharged]
 * @property {string} [lenderTransactionId]
 */
/**
 * @typedef PaymentOptionsResponse
 * @property {PaymentsObject[]} [paymentOptions]
 */
/**
 * @typedef CheckEMandateStatusRequest
 * @property {string} [orderId]
 * @property {string} [paymentId]
 * @property {string} [scheduledEnd]
 * @property {string} [ruleAmountValue]
 */
/**
 * @typedef AutoPayStatusResponse
 * @property {string} [status]
 */
/**
 * @typedef OutstandingDetailsData
 * @property {OutstandingData[]} outstandingDetails
 */
declare class Customer {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {ValidateCustomer} arg.body
     * @summary: Validate Customer
     * @description: The Validate Customer API processes validity checks using customer details, order information, a redirect URL, and device data. It returns `Disabled` if the transaction cannot proceed due to reasons such as the customer's limit being unavailable, already used, the customer being blocked, the pincode not being serviceable, or the SKU/product category not being serviceable by the lender. It returns `Enabled` if the transaction is allowed.
     */
    validate({ body }?: {
        body: ValidateCustomer;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.session] - The user session.
     * @param {CreateTransaction} arg.body
     * @summary: Create Transaction
     * @description: The Create Transaction API processes transactions using customer details, order information, a redirect URL, and device data. It returns `Disabled` if the transaction cannot proceed due to reasons such as the customer's limit being unavailable, already used, the customer being blocked, the pincode not being serviceable, or the SKU/product category not being serviceable by the lender. If the transaction is allowed, it returns `Enabled` along with the redirect URL and the user status as authorized.
     */
    createTransaction({ body, session }?: {
        session?: string;
        body: CreateTransaction;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {LinkAccount} arg.body
     * @summary: Link account
     * @description: The Link API generates a merchant-linked session for the user, enabling automatic login to complete payment or repayment activities seamlessly. This session ensures a smooth and secure transaction process without requiring the user to manually log in.
     */
    link({ body }?: {
        body: LinkAccount;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {UnlinkAccount} arg.body
     * @summary: Unlink account
     * @description: The Unlink API serves as the reverse of the Link API. It terminates the merchant-linked session for the user, effectively logging them out and preventing any further automatic login for payment or repayment activities. This ensures security and control over session management.
     */
    unlink({ body }?: {
        body: UnlinkAccount;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {Refund} arg.body
     * @summary: Refund Order
     * @description: The Refund API processes refunds based on business arrangements and returns the corresponding status of the refund request. The possible statuses include: - SUCCESS: The refund was processed successfully. - FAILED: The refund request failed. - PENDING: The refund request is still being processed and is awaiting completion.
     */
    refund({ body }?: {
        body: Refund;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.refundId] - This is the refund ID
     * @param {string} [arg.orderId] - This is the order ID
     * @summary: Check Refund status
     * @description: The Refund Status API returns the current status of a refund request based on business arrangements. The possible statuses include: - SUCCESS: The refund was processed successfully. - FAILED: The refund request failed. - PENDING: The refund request is still being processed and is awaiting completion.
     */
    refundStatus({ refundId, orderId }?: {
        refundId?: string;
        orderId?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {GetSchemesRequest} arg.body
     * @summary: Get schemes
     * @description: The Schemes API returns Buy Now, Pay Later (BNPL) and EMI plans offered by lenders for the user. It provides details on available financing options, including terms and conditions for both BNPL and EMI arrangements.
     */
    getSchemes({ body }?: {
        body: GetSchemesRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CheckEligibilityRequest} arg.body
     * @summary: Check Credit Eligibility
     * @description: Use this API to pre approve by checking the customer's credit eligibility based on mobile number and countryCode and vintage data of monthly transactions.
     */
    checkEligibility({ body }?: {
        body: CheckEligibilityRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {RepaymentRequest} arg.body
     * @summary: Get Repayment link
     * @description: The Repayment Link API generates a repayment link based on the current outstanding balance. The URL provided allows users to make payments and settle their outstanding amounts directly.
     */
    getRepaymentLink({ body }?: {
        body: RepaymentRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.page - This is page number
     * @param {number} arg.limit - This is no of transaction
     * @param {string} [arg.name] - This is name for filter
     * @param {string} [arg.mobile] - This is Mobile Number for filter
     * @summary: Get List of Users
     * @description: The Customer Listing API returns a paginated list of users associated with the specified organization. Supports filtering by various query parameters such as name, ID, and mobile number.
     */
    getAllCustomers({ page, limit, name, mobile }?: {
        page: number;
        limit: number;
        name?: string;
        mobile?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {VintageData} arg.body
     * @summary: Add user vintage details
     * @description: Use this API to add vintage details of the user.
     */
    addVintageData({ body }?: {
        body: VintageData;
    }): Promise<any>;
}
declare class Credit {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId - This is order ID
     * @summary: check status of the order
     * @description: Use this API to check status the order.
     */
    getOrderStatus({ orderId }?: {
        orderId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.lenderSlug - This is lender slug
     * @param {EligiblePlansRequest} arg.body
     * @summary: Get eligible plans
     * @description: Use this API to Get eligible plans.
     */
    getEligiblePlans({ lenderSlug, body }?: {
        lenderSlug: string;
        body: EligiblePlansRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {OrderDeliveryUpdatesBody} arg.body
     * @summary: Update delivery status for an order
     * @description: Use this API to update the delivery status of an order using order ID or transaction ID, and to trigger loan disbursals based on defined configurations.
     */
    updateOrderDeliveryStatus({ body }?: {
        body: OrderDeliveryUpdatesBody;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.mobile - The mobile number of the user
     * @param {string} [arg.countryCode] - The country code of the user's mobile number.
     * @param {number} [arg.page] - The page number of the transaction list
     * @param {number} [arg.limit] - The number of transactions to fetch
     * @param {string} [arg.orderId] - The order ID
     * @param {string} [arg.transactionId] - The transaction ID
     * @param {string[] | string} [arg.type] - The transaction type
     * @param {string[] | string} [arg.status] - The transaction status
     * @param {boolean} [arg.onlySelf] - Set this flag to true to fetch
     *   transactions exclusively for your organization, excluding other organizations.
     * @param {string} [arg.granularity] - Defines the granularity of transaction details.
     * @summary: Get list of user transactions
     * @description: Retrieves a paginated list of transactions associated with a specific organization, sorted from the latest to the oldest. This endpoint allows filtering transactions based on various criteria and supports pagination.
     */
    getTransactions({ mobile, countryCode, page, limit, orderId, transactionId, type, status, onlySelf, granularity, }?: {
        mobile: string;
        countryCode?: string;
        page?: number;
        limit?: number;
        orderId?: string;
        transactionId?: string;
        type?: string[] | string;
        status?: string[] | string;
        onlySelf?: boolean;
        granularity?: string;
    }): Promise<any>;
}
declare class MultiKyc {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Approved lenders
     * @description:
     */
    approvedLenders({}?: any): Promise<any>;
}
declare class Merchant {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get Access Token
     * @description: Use this API to get access token
     */
    getAccessToken({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {RefreshTokenRequest} arg.body
     * @summary: Renew Access Token
     * @description: Use this API to renew access token
     */
    renewAccessToken({ body }?: {
        body: RefreshTokenRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Validate organization's credentials
     * @description: Use this API to validate organization's credentials
     */
    validateCredentials({}?: any): Promise<any>;
}
declare class Payments {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.mobile - Mobile number of the user
     * @param {string[]} [arg.lenderSlugs] - This is list of lender slugs. eg.
     *   ['cashe','liquiloans']
     * @summary: Get user outstanding details.
     * @description: This api is for getting outstanding details for the user with all the lenders.
     */
    getUserCreditSummary({ mobile, lenderSlugs }?: {
        mobile: string;
        lenderSlugs?: string[];
    }): Promise<any>;
}
import PlatformApplicationClient = require("./PlatformApplicationClient");
type IntegrationResponseMeta = {
    timestamp: string;
    version: string;
    product: string;
    requestId?: string;
};
type IntegrationResponseError = {
    code: string;
    message: string;
    exception: string;
    field?: string;
    location?: string;
};
type IntegrationSuccessResponse = {
    message: string;
    meta: IntegrationResponseMeta;
    data: any;
};
type IntegrationErrorResponse = {
    message: string;
    meta: IntegrationResponseMeta;
    errors?: IntegrationResponseError[];
};
type RefundResponse = {
    status?: string;
    message?: string;
    transactionId?: string;
    refundId?: string;
};
type UserSource = {
    userId?: string;
    type?: string;
    sourceId?: string;
    meta?: any;
    createdAt?: string;
    updatedAt?: string;
    app?: string;
    entityId?: string;
    userMerchants?: any[];
};
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
    firstName?: any | any;
    lastName?: any | any;
    countryCode: string;
    mobile: string;
    email?: any | any;
    gender?: any | any;
    dob?: any | any;
    active?: boolean;
    profilePictureUrl?: any | any;
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
    uid?: string;
    email?: string;
    firstname?: string;
    middleName?: string;
    lastName?: string;
};
type Order = {
    valueInPaise: number;
    uid: string;
    items?: Items[];
    shippingAddress?: OrderAddress;
    billingAddress?: OrderAddress;
};
type VerifyOrder = {
    valueInPaise: number;
    uid?: string;
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
type ValidateCustomer = {
    customer: CustomerObject;
    order: VerifyOrder;
    device: Device;
    meta?: any;
    fetchLimitOptions?: boolean;
    fetchPlans?: boolean;
};
type CreateTransaction = {
    redirectUrl: string;
    customer: CustomerObject;
    order: Order;
    device: Device;
    meta?: any;
    emiTenure?: number;
    lenderSlug?: string;
    consents?: Consents[];
};
type ResendPaymentRequest = {
    redirectUrl?: string;
    customer: CustomerObject;
    order: OrderUid;
};
type ValidateCustomerSuccess = {
    status: string;
    userStatus: string;
    message: string;
    schemes?: SchemeResponse[];
    limit?: LimitResponse;
};
type CreateTransactionSuccess = {
    chargeToken?: string;
    redirectUrl?: string;
    message: string;
    transactionId?: string;
    status?: string;
    userStatus?: string;
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
    redirectUrl?: string;
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
    footer?: any;
};
type TabsSchema = {
    title: string;
    action?: ActionSchema;
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
    purpose?: string;
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
};
type Refund = {
    fingerprint?: string;
    customer?: CustomerObject;
    refundItems?: Items[];
    orderId: string;
    refundId: string;
    refundAmount: number;
    redirectionUrl?: string;
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
};
type RefreshTokenResponse = {
    success?: boolean;
    accessToken?: string;
    tokenExpireAt?: string;
    tokenExpiryIn?: string;
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
};
type GetSchemesSuccess = {
    userId?: string;
    lenders: SchemeResponse[];
};
type ActiveEntityResponse = {
    activeEntity?: any;
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
type SchemeResponse = {
    slug: string;
    isDefault: boolean;
    logoUrl: string;
    name: string;
    title: string;
    subtitle: string;
    amount?: number;
    paymentOptions: SchemePaymentOptionsResponse;
};
type SchemePaymentOptionsResponse = {
    emis?: SchemeEmiPaymentOptionResponse[];
    payLater?: SchemePayLaterPaymentOptionResponse;
};
type SchemeEmiPaymentOptionResponse = {
    id: string;
    isDefault: boolean;
    description: string;
    title: string;
    subtitle: string;
    amount: number;
    interest?: number;
    processingFee: number;
    tenure: number;
    emiSchedule: SchemeEmiScheduleResponse[];
};
type SchemeEmiScheduleResponse = {
    installmentNo: number;
    installmentAmount: number;
    dueDate: string;
};
type SchemePayLaterPaymentOptionResponse = {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    tenure: number;
    interest: number;
    processingFee: number;
    amount: number;
    isDefault: boolean;
};
type LimitResponse = {
    available?: AvailableOrPossibleLender[];
    possible?: AvailableOrPossibleLender[];
};
type AvailableOrPossibleLender = {
    limit: number;
    lenderName: string;
    slug: string;
    isDefault: boolean;
    logo: string;
};
type GetSchemesRequest = {
    customer: CustomerObject;
    order: Order;
    device: Device;
    meta?: any;
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
    merchantId?: string;
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
    number: string;
    category?: string;
    type: string;
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
    creditLimits?: CreditLimitObject[];
};
type CheckEligibilityRequest = {
    customer: CustomerObject;
    order?: Order;
    device: Device;
    meta?: any;
    fetchLimitOptions?: boolean;
};
type EmiSchedule = {
    installmentNo?: number;
    installmentAmount?: number;
    dueDate?: string;
};
type PaymentOption = {
    id?: string;
    title?: string;
    subtitle?: string;
    description?: string;
    tenure?: number;
    processingFee?: number;
    amount?: number;
    isDefault?: boolean;
    emiSchedule?: EmiSchedule[];
};
type PaymentOptions = {
    payLater?: PaymentOption;
    emis?: PaymentOption[];
};
type LenderAndPaymentOption = {
    id?: string;
    name: string;
    title?: string;
    subtitle?: string;
    isDefault?: boolean;
    logoUrl: string;
    amount?: number;
    paymentOptions?: PaymentOptions;
};
type GetSchemesSuccessOld = {
    userId: string;
    lenders?: LenderAndPaymentOption[];
};
type PageSchemaResponse = {
    slug?: string;
    description?: string;
    sections?: any;
    settings?: any;
};
type userCountRequest = {
    merchantId?: string;
    startDate?: string;
    endDate?: string;
};
type RepaymentRequest = {
    mobile: string;
    countryCode?: string;
    target?: string;
    callbackUrl: string;
    lenderSlug?: string;
};
type RepaymentResponse = {
    message: string;
    meta: IntegrationResponseMeta;
    data: RepaymentResponseData;
};
type RepaymentResponseData = {
    repaymentUrl?: string;
};
type VerifyMagicLinkResponse = {
    user: UserSchema;
    scope?: string[];
    redirectPath: string;
    callbackUrl?: string;
    meta?: any;
};
type VerifyMagicLinkRequest = {
    token: string;
};
type VintageData = {
    customer?: CustomerObject;
    businessDetails: BusinessDetails;
    documents?: DocumentItems[];
    device?: Device;
    vintage: VintageItems[];
    meta?: any;
};
type AddVintageResponse = {
    mesasge?: string;
    meta?: IntegrationResponseMeta;
    data?: any;
};
type DisbursalRequest = {
    fingerprint?: string;
    chargeToken: string;
    loanTypeId?: number;
    emiTenure?: number;
    isDownpaymentRequired?: boolean;
    downpaymentAmount?: number;
    loanAmount?: number;
    data?: any;
    transactionId?: string;
    lenderSlug?: string;
    intent?: string;
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
};
type DisbursalResponse = {
    transactionId?: string;
    status?: string;
    message?: string;
};
type OrderStatus = {
    orderId: string;
    transactionId?: string;
    status: string;
    message: string;
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
type TransactionOrder = {
    id: string;
    amount: number;
};
type TransactionMerchant = {
    name: string;
    logo: string;
};
type TransactionLoan = {
    number: string;
    amount: number;
    type: string;
    dueDate: string;
    repaidAmount: number;
    isSettled: boolean;
    emis?: TransactionLoanEmi[];
};
type TransactionLoanEmi = {
    amount: number;
    dueDate: string;
    installmentNo: number;
    repaidAmount: number;
    isSettled: boolean;
};
type TransactionLender = {
    name: string;
    slug: string;
    logo: string;
    shortName: string;
};
type UserTransaction = {
    id: string;
    amount: number;
    type: string;
    status: string;
    settlementUtr?: string;
    refundId?: string;
    createdAt: string;
    isMasked: boolean;
    order?: TransactionOrder;
    merchant: TransactionMerchant;
    loans?: TransactionLoan[];
    lender?: TransactionLender;
};
type Pagination = {
    type?: string;
    current: number;
    hasPrevious: boolean;
    hasNext: boolean;
    size: number;
    itemTotal: number;
};
type GetTransactionsData = {
    transactions: UserTransaction[];
    page: Pagination;
};
type GetTransactionsResponse = {
    message: string;
    meta: IntegrationResponseMeta;
    data: GetTransactionsData;
};
type SummaryRequest = {
    startDate?: string;
    endDate?: string;
    merchantId?: string;
    type?: string;
};
type OrderShipmentAddressGeoLocation = {
    latitude: number;
    longitude: number;
};
type OrderShipmentAddress = {
    line1?: string;
    line2?: string;
    city?: string;
    state?: string;
    country?: string;
    pincode?: string;
    type?: string;
    geoLocation?: OrderShipmentAddressGeoLocation;
};
type OrderShipmentItem = {
    category?: string;
    sku?: string;
    rate?: number;
    quantity?: number;
};
type OrderShipment = {
    id: string;
    urn?: string;
    amount: number;
    timestamp: string;
    status: string;
    remark?: string;
    items?: OrderShipmentItem[];
    shippingAddress?: OrderShipmentAddress;
    billingAddress?: OrderShipmentAddress;
};
type OrderDeliveryUpdatesBody = {
    orderId?: string;
    transactionId?: string;
    includeSummary?: boolean;
    shipments: OrderShipment[];
};
type OrderShipmentSummary = {
    totalAmount: number;
    processedAmount: number;
    unprocessedAmount: number;
};
type OrderShipmentResponse = {
    id: string;
    urn: string;
    shipmentStatus: string;
    shipmentAmount: number;
    processingStatus: string;
};
type OrderDeliveryUpdatesData = {
    orderId: string;
    transactionId: string;
    shipments: OrderShipmentResponse[];
    summary: OrderShipmentSummary;
};
type OrderDeliveryUpdatesResponse = {
    message: string;
    meta: IntegrationResponseMeta;
    data: OrderDeliveryUpdatesData;
    errors?: IntegrationResponseError[];
};
type Lender = {
    id?: string;
    name?: string;
    active?: boolean;
    imageUrl?: string;
    slug?: string;
    theme?: any;
    b2b?: boolean;
    b2c?: boolean;
    merchantConfigSchema?: string;
    createdAt?: string;
    updatedAt?: string;
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
type MerchantSchema = {
    id: string;
    name?: string;
    logo?: string;
    website?: string;
    apiHook?: string;
    epikId?: string;
    disbursementAccountHolderName?: string;
    disbursementAccountNumber?: string;
    disbursementIfsc?: string;
    createdBy?: string;
    active?: boolean;
    category?: string;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
    businessName?: string;
    email?: string;
    businessAddress?: string;
    pincode?: string;
    b2b?: boolean;
    b2c?: boolean;
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
    onboardingToken?: string;
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
    merchantId?: string;
};
type LenderOnboardRequestV1 = {
    entityMapId: string;
    ack?: string;
    data: any;
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
    gstin: string;
    skipGst?: boolean;
    onboardingToken?: string;
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
type BusinessDetail = {
    category: string;
    shopName?: string;
    legalName: string;
    address?: string;
    type?: string;
    pincode?: string;
};
type DocumentObjects = {
    number: string;
    category: string;
    type: string;
    name?: string;
    issuedOn?: string;
    issuedAt?: string;
    issuedBy?: string;
    expiryOn?: string;
};
type AddVintageRequest = {
    user: any;
    businessDetails: BusinessDetail;
    vintageData: VintageData;
    documents: DocumentObjects;
    merchant: MerchantSchema;
};
type KycCountByStatus = {
    startDate?: string;
    endDate?: string;
    merchantId?: string;
    lenderId?: string;
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
    merchantId?: string;
    actionName?: string;
    actionDescription?: string;
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
type GetAllUserLendersByEnityId = {
    entityId: string;
    entityMapId: string;
    userId: string;
    status: string;
    lender?: Lender;
    partnerId?: string;
    approvedLimit?: number;
};
type ApprovedLenders = {
    status: string;
    lenders: BreOutput[];
};
type BreResultStatus = {
    status: string;
    approvedLenders?: BreOutput[];
};
type GetKycDocsResponse = {
    documents: FindDocResponse[];
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
type Commercial = {
    id?: string;
    lenderId: string;
    merchantId: string;
    commercial: any;
    active: boolean;
    createdAt?: string;
    updatedAt?: string;
};
type KycStatusResponse = {
    isKycInitiated: boolean;
    userId: string;
    kycStatuses: LenderKycStatus[];
};
type WorkflowResponse = {
    data?: any;
};
type Action = {
    step: string;
    status: string;
    index: number;
    isForm?: boolean;
    form: Form;
};
type InitiateKycResponse = {
    kycResult: UserKycDetail;
    action: Action;
};
type UploadDocResponse = {
    status: string;
    data?: any;
    remark?: string;
    reasons: string;
    kycResult: UserKycDetail;
    action: Action;
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
    createdAt: string | string;
    updatedAt: string | string;
    deletedAt?: string | string;
    isDefault?: boolean;
};
type ApprovedPossibleLenders = {
    limit: number;
    name: string;
    slug: string;
    active: boolean;
    id: string;
    theme?: any;
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
    theme?: any;
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
    possible?: IntgrAvailableCreditLimit[];
};
type IntgrCreditLimit = {
    limit: IngtrAvailableLimit;
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
    gstin: string;
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
type ManualKycResponse = {
    message: string;
    step: UserKycLenderStepMap;
};
type CustomerKycDetailsReponse = {
    data: UserKycLenderStepMap;
};
type PlatformFees = {
    customerAcquisitionFee: number;
    transactionFee: number;
};
type CommercialResponse = {
    data: Commercial;
};
type BlockUserRequestSchema = {
    status?: boolean;
    userid?: string[];
    reason?: string;
};
type EditEmailRequestSchema = {
    email?: string;
};
type SendVerificationLinkMobileRequestSchema = {
    verified?: boolean;
    active?: boolean;
    countryCode?: string;
    phone?: string;
    primary?: boolean;
};
type EditMobileRequestSchema = {
    countryCode?: string;
    phone?: string;
};
type UpdateEmail = {
    email: string;
    additionalProperties?: any;
};
type EditProfileRequestSchema = {
    firstName: string;
    lastName: string;
    countryCode?: string;
    mobile?: string;
    email?: string;
    gender?: string;
    registrationToken?: string;
};
type EditProfileMobileSchema = {
    phone?: string;
    countryCode?: string;
};
type SendEmailOtpRequestSchema = {
    email?: string;
    action?: string;
    token?: string;
    registerToken?: string;
};
type VerifyEmailOtpRequestSchema = {
    email?: string;
    action?: string;
    registerToken?: string;
    otp?: string;
};
type ReSendMobileOtpRequestSchema = {
    captchaCode?: string;
    token: string;
    androidHash?: string;
};
type ResetPasswordSuccess = {
    status?: string;
};
type RegisterFormSuccess = {
    email?: string;
    resendTimer?: number;
    resendToken?: string;
    resendEmailToken?: string;
    registerToken?: string;
    success?: boolean;
    requestId?: string;
    message?: string;
    mobile?: string;
    countryCode?: string;
    verifyEmailOtp?: boolean;
    verifyMobileOtp?: boolean;
    userExists?: boolean;
};
type VerifyEmailSuccess = {
    message?: string;
};
type BlockUserSuccess = {
    success?: boolean;
};
type EmailOtpSuccess = {
    success?: boolean;
};
type VerifyEmailOTPSuccess = {
    user?: UserSchema;
    verifyEmailLink?: boolean;
};
type SendMobileVerifyLinkSuccess = {
    verifyMobileLink?: boolean;
};
type SendEmailVerifyLinkSuccess = {
    verifyEmailLink?: boolean;
};
type UserSearchResponseSchema = {
    users?: UserSchema[];
};
type CustomerListResponseSchema = {
    items?: UserSchema[];
    page?: PaginationSchema;
};
type PaginationSchema = {
    size?: number;
    itemTotal?: number;
    hasNext?: boolean;
    type?: string;
    current?: number;
};
type UserObjectSchema = {
    user?: UserSchema;
};
type CreateOrganization = {
    name?: string;
    logo?: string;
    website?: string;
    disbursementAccountHolderName?: string;
    disbursementAccountNumber?: string;
    disbursementIfsc?: string;
    businessName?: string;
    email?: string;
    businessAddress?: string;
    pincode?: string;
    b2b?: boolean;
    b2c?: boolean;
    docType?: string;
    docNumber?: string;
    organizationId?: string;
};
type UpdateLogo = {
    logo?: string;
};
type AddMetaSchemaResponse = {
    merchantId?: string;
    lenderId?: string;
    mid?: string;
    data?: any;
};
type UpdateOrganization = {
    id: string;
    name?: any | any;
    logo?: any | any;
    website?: any | any;
    disbursementAccountHolderName?: any | any;
    disbursementAccountNumber?: any | any;
    disbursementIfsc?: any | any;
    active?: boolean;
};
type UpdateFinancials = {
    disbursementAccountHolderName: string;
    disbursementAccountNumber: string;
    disbursementIfsc: string;
};
type Documents = {
    docType: string;
    docNumber: string;
};
type FinancialDetails = {
    disbursementAccountHolderName?: string;
    disbursementAccountNumber?: string;
    disbursementIfsc?: string;
    b2b?: boolean;
    b2c?: boolean;
    businessName?: string;
    email?: string;
    businessAddress?: string;
    pincode?: string;
    documents?: Documents[];
};
type GetOrganization = {
    organizationId?: string;
    createdAt?: string;
    updatedAt?: string;
    isAdmin?: boolean;
    name?: string;
    isActive?: boolean;
};
type OrganizationDetails = {
    name?: string;
    organizationId?: string;
    isAdmin?: boolean;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
    isActive?: boolean;
    logo?: string;
    website?: string;
    disbursementAccountHolderName?: string;
    disbursementAccountNumber?: string;
    disbursementIfsc?: string;
};
type Organization = {
    id?: string;
    name?: string;
    active?: boolean;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
};
type OrganizationList = {
    name?: string;
    logo?: string;
    id?: boolean;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
    isActive?: boolean;
    epikId?: string;
    website?: string;
    disbursementAccountHolderName?: string;
    disbursementAccountNumber?: string;
    disbursementIfsc?: string;
};
type OrganizationCount = {
    count?: string;
};
type TeamMembers = {
    members?: Member[];
};
type Member = {
    id?: string;
    userId?: string;
    organizationId?: string;
    isAdmin?: boolean;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
    profile?: Profile;
};
type Profile = {
    id?: string;
    userId?: string;
    organizationId?: string;
    isAdmin?: boolean;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
};
type AddTeamMember = {
    countryCode?: string;
    mobile?: string;
    email?: string;
    userIsAdmin?: boolean;
};
type UpdateTeamMemberRole = {
    userIsAdmin?: boolean;
    userId?: string;
};
type RemoveTeamMemberResponse = {
    success?: boolean;
};
type AddTeamMemberResponse = {
    id?: string;
    userId?: string;
    organizationId?: string;
    isAdmin?: boolean;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
};
type ApiKey = {
    key?: string;
    secret?: string;
};
type UpdateApiHook = {
    apiKey: string;
    url: string;
    customHeaders?: any;
};
type ApiHookDetails = {
    apiKey: string;
    url: string;
    customHeaders?: any;
    createdAt?: string;
    updatedAt?: string;
};
type UpdateApiHookResponse = {
    success?: boolean;
};
type OrganizationIp = {
    id?: string;
    ip: string;
};
type AddOrganizationIpDetails = {
    organizationIps?: OrganizationIp[];
    delete?: string;
};
type AddUpdateCsvFileResponse = {
    message?: string;
};
type AddUpdateCsvFileRequest = {
    csv?: string;
    organizationId?: string;
};
type CsvFile = {
    csv?: string;
};
type AddReportCsvFileResponse = {
    message?: string;
};
type AddReportCsvFileRequest = {
    csv?: string;
    organizationId?: string;
    name?: string;
    type?: string;
};
type ReportCsvFileResponse = {
    csv?: string;
};
type AddReportRequestArray = {
    mobile?: string;
    merchantId?: string;
    category?: string;
    shopName?: string;
    legalName?: string;
    firstName?: string;
    middleName?: string;
    lastName?: string;
    aadhaar?: string;
    nameOnPan?: string;
    gstNumber?: string;
    gstBusinessName?: string;
    panNumber?: string;
    udyam?: string;
    ownershipType?: string;
    address?: string;
    pincode?: string;
    license1Type?: string;
    license1?: string;
    license2Type?: string;
    license2?: string;
};
type AddReportRequest = {
    businessDetails?: any[];
};
type AddReportResponseArray = {
    mobile?: string;
    merchantId?: string;
    anchorId?: string;
    category?: string;
    shopName?: string;
    legalName?: string;
    firstName?: string;
    middleName?: string;
    lastName?: string;
    aadhaar?: string;
    nameOnPan?: string;
    gstNumber?: string;
    gstBusinessName?: string;
    panNumber?: string;
    udyam?: string;
    ownershipType?: string;
    address?: string;
    pincode?: string;
    license1Type?: string;
    license1?: string;
    license2Type?: string;
    license2?: string;
};
type AddReportResponse = {
    businessDetails?: AddReportResponseArray[];
};
type VintageDataResponseObject = {
    month?: string;
    year?: number;
    revenue?: string;
    businessId?: string;
    createdBy?: string;
    id?: string;
    createdAt?: string;
    updatedBy?: string;
    updatedAt?: string;
};
type VintageDataResponse = {
    vintageData?: VintageDataResponseObject[];
};
type AddSkuRequestArray = {
    sku: string;
    productName: string;
    creditPurchaseOptionFlag: string;
    effectiveDates: string;
    organizationId: string;
};
type AddSkuRequest = {
    skuDetails?: AddSkuRequestArray[];
};
type AddSkuResponse = {
    message?: string;
};
type RestrictedSkuSchema = {
    skuDetails?: any[];
};
type OrganizationIpResponse = {
    organizationId: string;
    ip: string;
    createdAt?: string;
    updatedAt?: string;
    id: string;
};
type OrganizationIpDetails = {
    organizationIps?: OrganizationIpResponse[];
};
type RefundSuccess = {
    status: string;
    message: number;
    transactionId: string;
    refundId: string;
};
type RefundItem = {
    items: any[];
};
type ValidateCredentialsData = {
    success: boolean;
    organizationId: string;
    organizationName?: string;
};
type ValidateCredentialsResponse = {
    message: string;
    meta: IntegrationResponseMeta;
    data: ValidateCredentialsData;
};
type PaymentLinkResponse = {
    status?: string;
    message?: string;
    paymentLink?: string;
};
type ApplicationCutomer = {
    countryCode?: string;
    mobile: string;
    uid?: string;
    email?: string;
};
type GeoLocation = {
    latitude: number;
    longitude: number;
};
type Address = {
    line1?: string;
    line2?: string;
    city?: string;
    state?: string;
    country?: string;
    pincode?: string;
    type?: string;
    geoLocation?: GeoLocation;
};
type OrderItems = {
    category?: string;
    sku?: string;
    rate?: number;
    quantity?: number;
};
type PaymentLinkRequest = {
    autoCapture?: boolean;
    lenderId?: string;
    emiTenure?: number;
    customer: ApplicationCutomer;
    order: Order;
    device?: Device;
    meta?: any;
};
type UpdateLenderStatusSchemaRequest = {
    merchantId?: string;
    enable?: boolean;
};
type UpdateLenderStatusSchemaResponse = {
    merchantId?: string;
    lenderId?: string;
    mid?: string;
    enable?: boolean;
    data?: any;
};
type LenderTheme = {
    iconUrl?: string;
    logoUrl?: string;
};
type LenderDetails = {
    slug?: string;
    name?: string;
    id?: string;
    theme?: LenderTheme;
};
type OutstandingData = {
    lenderDetails?: LenderDetails;
    availableLimit?: number;
    creditLimit?: number;
    dueAmount?: number;
    outstandingAmount?: number;
    dueDate?: string;
};
type OutstandingDetailsResponse = {
    outstandingDetails?: OutstandingData[];
};
type CreateUserRequestSchema = {
    mobile: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    gender?: string;
};
type CreateUserResponseSchema = {
    user?: UserSchema;
};
type RepaymentUsingNetbanking = {
    amount: number;
    bankId: string;
    bankName: string;
    chargeToken?: string;
    transactionId?: string;
};
type RepaymentUsingNetbankingResponse = {
    form?: string;
    isDifferent?: boolean;
    outstanding?: string;
};
type RepaymentUsingUPI = {
    amount: number;
    vpa: string;
    chargeToken?: string;
    transactionId?: string;
};
type RepaymentUsingUPIResponse = {
    isDifferent?: boolean;
    outstanding?: string;
    status?: string;
    intentId?: string;
    transactionId?: string;
    expiry?: number;
    interval?: number;
};
type RegisterUPIMandateRequest = {
    vpa?: string;
};
type RegisterUPIMandateResponse = {
    transactionId?: string;
    expiry?: number;
    interval?: number;
};
type RegisterUPIMandateStatusCheckRequest = {
    transactionId?: string;
};
type RegisterMandateStatusCheckResponse = {
    status?: string;
};
type TransactionStatusRequest = {
    intentId: string;
    transactionId: string;
};
type TransactionStatusResponse = {
    success: boolean;
    methodType?: string;
    methodSubType?: string;
    status?: string;
};
type BankList = {
    bankId?: string;
    bankName?: string;
    rank?: number;
    popular?: boolean;
    imageUrl?: string;
};
type PaymentsObject = {
    title?: string;
    kind?: string;
    options?: PaymentOptions[];
};
type OutstandingDetail = {
    status?: string;
    action?: boolean;
    message?: OutstandingMessage;
    credit?: UserCredit;
    dueSummary?: DueSummaryOutstanding;
    outstandingSummary?: OutstandingSummary;
    entityMapId?: string;
};
type OutstandingSummary = {
    totalOutstanding?: number;
    totalOutstandingWithInterest?: number;
    totalOutstandingPenalty?: number;
    availableLimit?: number;
    isOverdue?: boolean;
    dueFromDate?: string;
    repaymentSummary?: RepaymentSummaryOutstanding[];
};
type DueSummaryOutstanding = {
    dueDate?: string;
    totalDue?: number;
    totalDueWithInterest?: number;
    totalDuePenalty?: number;
    dueTransactions?: DueTransactionsOutstanding[];
    minAmntDue?: number;
};
type OutstandingMessage = {
    dueMessage?: string;
    backgroundColor?: string;
    textColor?: string;
    isFlexiRepayEnabled?: boolean;
};
type UserCredit = {
    availableLimit?: number;
    approvedLimit?: number;
    isEligibleToDrawdown?: boolean;
};
type DueTransactionsOutstanding = {
    loanRequestNo?: string;
    merchantCategory?: string;
    installmentAmountWithInterest?: number;
    installmentAmount?: number;
    dueAmount?: number;
    loanType?: string;
    installmentNo?: string;
    installmentDueDate?: string;
    isPastDue?: boolean;
    isPenaltyCharged?: boolean;
    penaltyAmount?: number;
    noOfDaysPenaltyCharged?: number;
    daysDifference?: number;
    lenderTransactionId?: string;
};
type RepaymentSummaryOutstanding = {
    loanRequestNo?: string;
    loanType?: string;
    merchantCategory?: string;
    isBbillingTransaction?: boolean;
    totalInstallmentAmount?: number;
    totalInstallmentAmountWithInterest?: number;
    outstandingDetails?: OutstandingDetailsRepayment[];
};
type OutstandingDetailsRepayment = {
    installmentAmountWithInterest?: number;
    installmentAmount?: number;
    dueAmount?: number;
    installmentNo?: string;
    installmentDueDate?: string;
    isPastDue?: boolean;
    loanType?: string;
    isPenaltyCharged?: boolean;
    penaltyAmount?: number;
    noOfDaysPenaltyCharged?: number;
    lenderTransactionId?: string;
};
type PaymentOptionsResponse = {
    paymentOptions?: PaymentsObject[];
};
type CheckEMandateStatusRequest = {
    orderId?: string;
    paymentId?: string;
    scheduledEnd?: string;
    ruleAmountValue?: string;
};
type AutoPayStatusResponse = {
    status?: string;
};
type OutstandingDetailsData = {
    outstandingDetails: OutstandingData[];
};
