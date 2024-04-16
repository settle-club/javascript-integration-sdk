const Joi = require("joi");
class Validator {
  static UserSchema() {
    return Joi.object({
      id: Joi.string().allow(""),

      firstName: Joi.string().allow(""),

      lastName: Joi.string().allow(""),

      countryCode: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      email: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      dob: Joi.string().allow(""),

      active: Joi.boolean(),

      profilePicUrl: Joi.string().allow(""),

      isEmailVerified: Joi.boolean(),

      createdAt: Joi.string().allow(""),

      updatedAt: Joi.string().allow(""),

      deletedAt: Joi.string().allow(""),
    });
  }

  static count() {
    return Joi.object({
      totalUsers: Joi.string().allow(""),
    });
  }

  static FilterByDate() {
    return Joi.object({
      startDate: Joi.string().allow(""),

      endDate: Joi.string().allow(""),
    });
  }

  static LenderCount() {
    return Joi.object({
      totalLenders: Joi.string().allow(""),
    });
  }

  static LenderSchema() {
    return Joi.object({
      id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      active: Joi.boolean(),

      createdAt: Joi.string().allow(""),

      updatedAt: Joi.string().allow(""),

      deletedAt: Joi.string().allow(""),
    });
  }

  static TotalUsersPerLender() {
    return Joi.object({
      filters: Joi.array().items(this.Filters()).required(),

      page: this.PageResponse().required(),

      lenderList: Joi.array().items(this.TotalUsersPerLenderData()).required(),
    });
  }

  static TotalUsersPerLenderData() {
    return Joi.object({
      id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      active: Joi.boolean(),

      createdAt: Joi.string().allow(""),

      updatedAt: Joi.string().allow(""),

      deletedAt: Joi.string().allow(""),

      totalUsers: Joi.string().allow(""),
    });
  }

  static TotalUserByLender() {
    return Joi.object({
      name: Joi.string().allow(""),

      count: Joi.string().allow(""),
    });
  }

  static UsersByLender() {
    return Joi.object({
      firstName: Joi.string().allow(""),

      lastName: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      email: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      info: Joi.string().allow(""),

      code: Joi.string().allow(""),

      requestId: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static EditProfileRequest() {
    return Joi.object({
      firstName: Joi.string().allow(""),

      lastName: Joi.string().allow(""),

      countryCode: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      email: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      dob: Joi.string().allow(""),

      registrationToken: Joi.string().allow(""),
    });
  }

  static VerifyOtpRequest() {
    return Joi.object({
      requestId: Joi.string().allow("").required(),

      otp: Joi.string().allow("").required(),

      captchaCode: Joi.string().allow(""),

      androidHash: Joi.string().allow(""),

      referralCode: Joi.string().allow(""),

      onboardingToken: Joi.string().allow(""),
    });
  }

  static SendMobileOtpRequest() {
    return Joi.object({
      countryCode: Joi.string().allow("").required(),

      mobile: Joi.string().allow("").required(),

      captchaCode: Joi.string().allow(""),

      androidHash: Joi.string().allow(""),

      force: Joi.string().allow(""),
    });
  }

  static ReSendMobileOtpRequest() {
    return Joi.object({
      captchaCode: Joi.string().allow(""),

      token: Joi.string().allow("").required(),

      androidHash: Joi.string().allow(""),
    });
  }

  static SendOtpRequest() {
    return Joi.object({
      countryCode: Joi.string().allow(""),

      captchaCode: Joi.string().allow(""),

      mobile: Joi.string().allow(""),
    });
  }

  static ApplicationUser() {
    return Joi.object({
      user: this.UserSchema(),
    });
  }

  static SendOtpResponse() {
    return Joi.object({
      resendTimer: Joi.number(),

      resendToken: Joi.string().allow(""),

      success: Joi.boolean(),

      requestId: Joi.string().allow(""),

      message: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      countryCode: Joi.string().allow(""),

      email: Joi.string().allow(""),

      resendEmailToken: Joi.string().allow(""),

      registerToken: Joi.string().allow(""),

      verifyEmailOtp: Joi.boolean(),

      verifyMobileOtp: Joi.boolean(),

      userExists: Joi.boolean(),
    });
  }

  static EmailUpdate() {
    return Joi.object({
      email: Joi.string().allow(""),
    });
  }

  static UserUpdateRequest() {
    return Joi.object({
      firstName: Joi.any(),

      lastName: Joi.any(),

      countryCode: Joi.string().allow("").required(),

      mobile: Joi.string().allow("").required(),

      email: Joi.any(),

      gender: Joi.any(),

      dob: Joi.any(),

      active: Joi.boolean(),

      profilePictureUrl: Joi.any(),

      isEmailVerified: Joi.boolean(),
    });
  }

  static LenderUpdateRequest() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      active: Joi.boolean(),
    });
  }

  static ProfileEditSuccess() {
    return Joi.object({
      user: this.UserSchema(),

      registerToken: Joi.string().allow(""),

      resendEmailToken: Joi.string().allow(""),

      userExists: Joi.boolean(),

      verifyEmailLink: Joi.boolean(),

      verifyEmailOtp: Joi.boolean(),

      verifyMobileOtp: Joi.boolean(),

      email: Joi.string().allow(""),

      requestId: Joi.string().allow(""),

      countryCode: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      success: Joi.boolean(),

      message: Joi.string().allow(""),

      resendTimer: Joi.number(),

      resendToken: Joi.string().allow(""),
    });
  }

  static LoginSuccess() {
    return Joi.object({
      user: this.UserSchema(),

      requestId: Joi.string().allow(""),

      registerToken: Joi.string().allow(""),
    });
  }

  static VerifyOtpSuccess() {
    return Joi.object({
      user: this.UserSchema(),

      userExists: Joi.boolean(),

      isNew: Joi.boolean(),
    });
  }

  static LogoutSuccess() {
    return Joi.object({
      logout: Joi.boolean(),
    });
  }

  static OtpSuccess() {
    return Joi.object({
      resendTimer: Joi.number(),

      resendToken: Joi.string().allow(""),

      registerToken: Joi.string().allow(""),

      success: Joi.boolean(),

      requestId: Joi.string().allow(""),

      message: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      isNew: Joi.boolean(),

      countryCode: Joi.string().allow(""),

      otpLength: Joi.number(),
    });
  }

  static SessionListSuccess() {
    return Joi.object({
      sessions: Joi.array().items(Joi.string().allow("")),
    });
  }

  static VerifyMobileOTPSuccess() {
    return Joi.object({
      user: this.UserSchema(),
    });
  }

  static Location() {
    return Joi.object({
      latitude: Joi.number(),

      longitude: Joi.number(),
    });
  }

  static OrderAddress() {
    return Joi.object({
      line1: Joi.string().allow(""),

      line2: Joi.string().allow(""),

      city: Joi.string().allow(""),

      state: Joi.string().allow(""),

      country: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      type: Joi.string().allow(""),

      geoLocation: this.Location(),
    });
  }

  static CustomerObject() {
    return Joi.object({
      countryCode: Joi.string().allow(""),

      mobile: Joi.string().allow("").required(),

      uid: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      firstname: Joi.string().allow(""),

      middleName: Joi.string().allow(""),

      lastName: Joi.string().allow(""),
    });
  }

  static Order() {
    return Joi.object({
      valueInPaise: Joi.number().required(),

      uid: Joi.string().allow("").required(),

      emiTenure: Joi.number(),

      items: Joi.array().items(this.Items()),

      shippingAddress: this.OrderAddress(),

      billingAddress: this.OrderAddress(),
    });
  }

  static OrderUid() {
    return Joi.object({
      valueInPaise: Joi.number(),

      uid: Joi.string().allow("").required(),

      items: Joi.array().items(this.Items()),

      shippingAddress: this.OrderAddress(),

      billingAddress: this.OrderAddress(),
    });
  }

  static CustomerMeta() {
    return Joi.object({
      ip: Joi.string().allow("").required(),

      appVersion: Joi.string().allow("").required(),

      appIdentifier: Joi.string().allow(""),

      customerUserAgent: Joi.string().allow(""),

      deviceId: Joi.string().allow("").required(),
    });
  }

  static Device() {
    return Joi.object({
      ipAddress: Joi.string().allow("").required(),

      userAgent: Joi.string().allow("").required(),

      latitude: Joi.number(),

      longitude: Joi.number(),
    });
  }

  static VerifyCustomer() {
    return Joi.object({
      customer: this.CustomerObject().required(),

      order: this.Order().required(),

      device: this.Device().required(),

      meta: Joi.any(),

      fetchLimitOptions: Joi.boolean(),
    });
  }

  static CreateTransaction() {
    return Joi.object({
      autoCapture: Joi.boolean(),

      redirectUrl: Joi.string().allow("").required(),

      customer: this.CustomerObject().required(),

      order: this.Order().required(),

      device: this.Device().required(),

      meta: Joi.any(),
    });
  }

  static ResendPaymentRequest() {
    return Joi.object({
      autoCapture: Joi.boolean(),

      redirectUrl: Joi.string().allow(""),

      customer: this.CustomerObject().required(),

      order: this.OrderUid().required(),
    });
  }

  static VerifyCustomerSuccess() {
    return Joi.object({
      status: Joi.string().allow(""),

      userStatus: Joi.string().allow(""),

      message: Joi.string().allow(""),

      __headers: Joi.any(),
    });
  }

  static CreateTransactionSuccess() {
    return Joi.object({
      chargeToken: Joi.string().allow(""),

      redirectUrl: Joi.string().allow(""),

      message: Joi.string().allow("").required(),

      transactionId: Joi.string().allow(""),

      status: Joi.string().allow(""),

      userStatus: Joi.string().allow(""),

      __headers: Joi.any(),
    });
  }

  static SupportDocuments() {
    return Joi.object({
      fileName: Joi.string().allow(""),

      fileUrl: Joi.string().allow(""),
    });
  }

  static CreateTicketResponse() {
    return Joi.object({
      serviceRequestId: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static CreateTicket() {
    return Joi.object({
      category: Joi.string().allow("").required(),

      transactionId: Joi.string().allow(""),

      description: Joi.string().allow("").required(),

      documents: Joi.array().items(this.SupportDocuments()),
    });
  }

  static InitiateTransactions() {
    return Joi.object({
      token: Joi.string().allow("").required(),
    });
  }

  static GetMobileFromToken() {
    return Joi.object({
      token: Joi.string().allow("").required(),
    });
  }

  static GetDataFromToken() {
    return Joi.object({
      token: Joi.string().allow("").required(),
    });
  }

  static MerchantDetails() {
    return Joi.object({
      name: Joi.string().allow(""),

      website: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static InitiateTransactionsSuccess() {
    return Joi.object({
      chargeToken: Joi.string().allow("").required(),

      session: Joi.string().allow(""),

      expiry: Joi.string().allow(""),

      hash: Joi.string().allow(""),

      order: this.Order(),

      isAsp: Joi.boolean(),

      merchant: this.MerchantDetails(),
    });
  }

  static RetrieveMobileFromToken() {
    return Joi.object({
      countryCode: Joi.string().allow("").required(),

      mobile: Joi.string().allow("").required(),
    });
  }

  static CreateDashboardTemplateRequest() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      version: Joi.string().allow("").required(),

      isDefault: Joi.boolean(),

      sections: Joi.array().items(this.TemplateSections()).required(),
    });
  }

  static TemplateSections() {
    return Joi.object({
      sequence: Joi.number().required(),

      isAvailableInMobile: Joi.boolean().required(),

      isAvailableInDesktop: Joi.boolean().required(),

      component: this.TemplateComponent().required(),
    });
  }

  static TemplateComponent() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),

      isAvailableInDesktop: Joi.boolean(),

      partnerApplications: Joi.array().items(this.PartnerApplications()),

      banners: Joi.array().items(this.Banners()),

      tips: Joi.array().items(this.Tips()),
    });
  }

  static PartnerApplications() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      urlPath: Joi.string().allow(""),

      urlTarget: Joi.string().allow(""),

      imageUrl: Joi.string().allow("").required(),

      sequence: Joi.number(),
    });
  }

  static Offerings() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      urlPath: Joi.string().allow(""),

      urlTarget: Joi.string().allow(""),

      imageUrl: Joi.string().allow("").required(),

      sequence: Joi.number(),

      gradient: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static Banners() {
    return Joi.object({
      imageUrl: Joi.string().allow("").required(),

      action: this.ActionSchema(),
    });
  }

  static Tips() {
    return Joi.object({
      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      urlPath: Joi.string().allow("").required(),

      urlTarget: Joi.string().allow(""),

      imageUrl: Joi.string().allow(""),

      sequence: Joi.number(),
    });
  }

  static DashboardTemplateResponse() {
    return Joi.object({
      id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      version: Joi.string().allow(""),

      active: Joi.boolean(),

      sections: Joi.array().items(this.SectionSchema()).required(),
    });
  }

  static SectionSchema() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      description: Joi.string().allow(""),

      partners: Joi.array().items(this.PartnerApplicationsResponse()),

      banners: Joi.array().items(this.BannersResponse()),

      tips: Joi.array().items(this.TipsResponse()),
    });
  }

  static PartnerApplicationsResponse() {
    return Joi.object({
      id: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      action: this.ActionSchema().required(),

      imageUrl: Joi.string().allow("").required(),
    });
  }

  static OfferingsResponse() {
    return Joi.object({
      id: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      action: this.ActionSchema().required(),

      imageUrl: Joi.string().allow("").required(),

      gradient: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static BannersResponse() {
    return Joi.object({
      action: this.ActionSchema(),

      imageUrl: Joi.string().allow("").required(),
    });
  }

  static TipsSection() {
    return Joi.object({
      tips: Joi.array().items(this.TipsResponse()),

      categories: Joi.array().items(this.TipsCategories()),

      action: this.ActionSchema(),
    });
  }

  static TipsResponse() {
    return Joi.object({
      name: Joi.string().allow(""),

      category: Joi.string().allow(""),

      description: Joi.string().allow(""),

      action: this.ActionSchema().required(),

      imageUrl: Joi.string().allow(""),
    });
  }

  static TipsCategories() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),
    });
  }

  static ActionSchema() {
    return Joi.object({
      type: Joi.string().allow(""),

      page: this.PageSchema(),

      popup: this.PageSchema(),
    });
  }

  static UpdateDashboardTemplateRequest() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      version: Joi.string().allow(""),

      isDefault: Joi.boolean(),

      active: Joi.boolean(),

      sections: Joi.array().items(this.UpdateTemplateSections()),
    });
  }

  static UpdateTemplateSections() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      sequence: Joi.number(),

      isAvailableInMobile: Joi.boolean(),

      isAvailableInDesktop: Joi.boolean(),

      active: Joi.boolean(),

      component: this.UpdateTemplateComponent(),
    });
  }

  static UpdateTemplateComponent() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      isAvailableInDesktop: Joi.boolean(),

      active: Joi.boolean(),

      partners: Joi.array().items(this.UpdatePartnerApplications()),

      banners: Joi.array().items(this.UpdateBanners()),

      tips: Joi.array().items(this.UpdateTips()),
    });
  }

  static UpdatePartnerApplications() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      action: Joi.any(),

      imageUrl: Joi.string().allow(""),

      sequence: Joi.number(),

      active: Joi.boolean(),
    });
  }

  static UpdateOfferings() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      urlPath: Joi.string().allow(""),

      urlTarget: Joi.string().allow(""),

      imageUrl: Joi.string().allow(""),

      sequence: Joi.number(),

      gradient: Joi.array().items(Joi.string().allow("")),
    });
  }

  static UpdateBanners() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      imageUrl: Joi.string().allow(""),

      action: Joi.any(),

      sequence: Joi.number(),

      active: Joi.boolean(),
    });
  }

  static UpdateTips() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      imageUrl: Joi.string().allow(""),

      action: Joi.any(),

      sequence: Joi.number(),

      active: Joi.boolean(),
    });
  }

  static NavigationsMobileResponse() {
    return Joi.object({
      tabs: Joi.array().items(this.TabsSchema()).required(),

      profileSections: Joi.array()
        .items(this.ProfileSectionSchema())
        .required(),
    });
  }

  static TabsSchema() {
    return Joi.object({
      title: Joi.string().allow("").required(),

      page: this.PageSchema().required(),

      icon: Joi.string().allow("").required(),

      activeIcon: Joi.string().allow("").required(),

      active: Joi.boolean().required(),
    });
  }

  static PageSchema() {
    return Joi.object({
      link: Joi.string().allow(""),

      type: this.PageType(),

      params: Joi.object().pattern(
        /\S/,
        Joi.array().items(Joi.string().allow(""))
      ),

      query: Joi.object().pattern(/\S/, Joi.string().allow("")),
    });
  }

  static ProfileSectionSchema() {
    return Joi.object({
      title: Joi.string().allow("").required(),

      navigations: Joi.array().items(this.ProfileNavigationSchema()).required(),

      active: Joi.boolean().required(),
    });
  }

  static ProfileNavigationSchema() {
    return Joi.object({
      title: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      icon: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      action: this.ActionSchema(),

      active: Joi.boolean(),
    });
  }

  static SendPNSRegisterRequest() {
    return Joi.object({
      deviceId: Joi.string().allow("").required(),

      deviceType: Joi.string().allow("").required(),

      token: Joi.string().allow("").required(),
    });
  }

  static PNSRegisterResponse() {
    return Joi.object({
      status: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static FaqResponse() {
    return Joi.object({
      categories: Joi.array().items(this.CategorySchema()),
    });
  }

  static CategorySchema() {
    return Joi.object({
      uid: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      description: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      questions: Joi.array().items(this.QuestionSchema()),
    });
  }

  static QuestionSchema() {
    return Joi.object({
      uid: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      description: Joi.string().allow(""),

      displayOrder: Joi.number(),

      canRaiseRequest: Joi.boolean(),
    });
  }

  static SupportCategories() {
    return Joi.object({
      kind: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static SupportCategoriesResponse() {
    return Joi.object({
      categories: Joi.array().items(this.SupportCategories()),
    });
  }

  static SanctionLetterResponse() {
    return Joi.object({
      sanctionedLetterFileUrl: Joi.string().allow("").required(),
    });
  }

  static KfsDocumentResponse() {
    return Joi.object({
      kfsFileUrl: Joi.string().allow("").required(),
    });
  }

  static UserWhiteListedResponse() {
    return Joi.object({
      status: Joi.string().allow(""),
    });
  }

  static UserConsentRequest() {
    return Joi.object({
      consents: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Consents() {
    return Joi.object({
      type: Joi.string().allow(""),

      text: Joi.string().allow(""),
    });
  }

  static UserConsentRequestV2() {
    return Joi.object({
      consents: Joi.array().items(this.Consents()),
    });
  }

  static UserConsentResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static UserKycSteps() {
    return Joi.object({
      id: Joi.string().allow(""),

      index: Joi.string().allow(""),

      name: Joi.string().allow(""),

      rules: Joi.any(),

      active: Joi.boolean(),

      createdAt: Joi.string().allow(""),

      updatedAt: Joi.string().allow(""),

      deletedAt: Joi.string().allow(""),
    });
  }

  static CreateKycStepRequest() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      index: Joi.string().allow("").required(),

      active: Joi.boolean().required(),

      rules: Joi.any(),
    });
  }

  static RemoveKycStepRequest() {
    return Joi.object({
      name: Joi.string().allow(""),

      index: Joi.string().allow("").required(),

      active: Joi.boolean(),

      rules: Joi.any(),
    });
  }

  static KycUpdateMessage() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static MobileFromLinkingRequest() {
    return Joi.object({
      token: Joi.string().allow("").required(),
    });
  }

  static MobileFromLinkingResponse() {
    return Joi.object({
      countryCode: Joi.string().allow("").required(),

      mobile: Joi.string().allow("").required(),
    });
  }

  static SessionFromLinkingRequest() {
    return Joi.object({
      token: Joi.string().allow("").required(),
    });
  }

  static SessionFromLinkingResponse() {
    return Joi.object({
      session: Joi.string().allow("").required(),

      expiry: Joi.number().required(),
    });
  }

  static LinkAccount() {
    return Joi.object({
      customer: this.CustomerObject().required(),

      redirectUrl: Joi.string().allow("").required(),

      device: this.Device().required(),
    });
  }

  static LinkAccountSuccess() {
    return Joi.object({
      redirectUrl: Joi.string().allow(""),

      statusCode: Joi.number(),

      status: Joi.string().allow(""),

      message: Joi.string().allow(""),

      errorCode: Joi.string().allow(""),

      __headers: Joi.any(),
    });
  }

  static UnlinkAccount() {
    return Joi.object({
      customer: this.CustomerObject().required(),

      device: this.Device().required(),
    });
  }

  static UnlinkAccountSuccess() {
    return Joi.object({
      status: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      statusCode: Joi.number().required(),

      userStatus: Joi.string().allow(""),

      errorCode: Joi.string().allow(""),

      __headers: Joi.any(),
    });
  }

  static Refund() {
    return Joi.object({
      fingerprint: Joi.string().allow(""),

      customer: this.CustomerObject().required(),

      refundItems: Joi.array().items(this.Items()),

      orderId: Joi.string().allow("").required(),

      refundId: Joi.string().allow("").required(),

      refundAmount: Joi.number().required(),
    });
  }

  static Translation() {
    return Joi.object({
      content: Joi.any(),
    });
  }

  static FilterKeys() {
    return Joi.object({
      display: Joi.string().allow(""),

      name: Joi.string().allow(""),

      kind: Joi.string().allow(""),
    });
  }

  static FilterValues() {
    return Joi.object({
      display: Joi.string().allow(""),

      isSelected: Joi.boolean(),

      value: Joi.string().allow(""),
    });
  }

  static Filters() {
    return Joi.object({
      key: this.FilterKeys(),

      values: Joi.array().items(this.FilterValues()),
    });
  }

  static PageResponse() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      current: Joi.number().required(),

      hasPrevious: Joi.boolean().required(),

      hasNext: Joi.boolean().required(),

      size: Joi.number().required(),

      itemTotal: Joi.number().required(),
    });
  }

  static UserResponse() {
    return Joi.object({
      filters: Joi.array().items(this.Filters()).required(),

      page: this.PageResponse().required(),

      listOfUsers: Joi.array().items(this.UserSchema()).required(),
    });
  }

  static UserDetailRequest() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    });
  }

  static UserConsents() {
    return Joi.object({
      id: Joi.string().allow(""),

      userId: Joi.string().allow(""),

      ipAddress: Joi.string().allow(""),

      text: Joi.string().allow(""),

      createdAt: Joi.string().allow(""),

      updatedAt: Joi.string().allow(""),

      deletedAt: Joi.string().allow(""),
    });
  }

  static CreditScoreSchema() {
    return Joi.object({
      id: Joi.string().allow(""),

      userId: Joi.string().allow(""),

      cibil: Joi.number(),

      finbox: Joi.string().allow(""),

      systemAwarded: Joi.string().allow(""),

      isActive: Joi.boolean(),

      deletedAt: Joi.string().allow(""),

      updatedAt: Joi.string().allow(""),

      createdAt: Joi.string().allow(""),
    });
  }

  static CreditLimitSchema() {
    return Joi.object({
      id: Joi.string().allow(""),

      userId: Joi.string().allow(""),

      creditLimit: Joi.string().allow(""),

      createdAt: Joi.string().allow(""),

      updatedAt: Joi.string().allow(""),

      deletedAt: Joi.string().allow(""),
    });
  }

  static Screen() {
    return Joi.object({
      screenType: Joi.string().allow(""),

      name: Joi.string().allow(""),

      link: Joi.string().allow(""),
    });
  }

  static UserStateSchema() {
    return Joi.object({
      screen: this.Screen(),
    });
  }

  static GetAccessTokenResponse() {
    return Joi.object({
      success: Joi.boolean(),

      accessToken: Joi.string().allow(""),

      refreshToken: Joi.string().allow(""),

      tokenExpireAt: Joi.string().allow(""),

      tokenExpiryIn: Joi.string().allow(""),

      refreshTokenExpiryAt: Joi.string().allow(""),

      refreshTokenExpiryIn: Joi.string().allow(""),

      scope: Joi.array().items(Joi.string().allow("")),

      __headers: Joi.any(),
    });
  }

  static RefreshTokenResponse() {
    return Joi.object({
      success: Joi.boolean(),

      accessToken: Joi.string().allow(""),

      tokenExpireAt: Joi.string().allow(""),

      tokenExpiryIn: Joi.string().allow(""),

      __headers: Joi.any(),
    });
  }

  static RefreshTokenRequest() {
    return Joi.object({
      token: Joi.string().allow("").required(),
    });
  }

  static Items() {
    return Joi.object({
      category: Joi.string().allow(""),

      sku: Joi.string().allow(""),

      rate: Joi.number(),

      quantity: Joi.number(),
    });
  }

  static RefundStatusList() {
    return Joi.object({
      id: Joi.string().allow(""),

      orderItems: Joi.array().items(this.Items()),

      amount: Joi.number(),

      status: Joi.string().allow(""),

      createdAt: Joi.string().allow(""),

      processedDate: Joi.string().allow(""),
    });
  }

  static RefundStatus() {
    return Joi.object({
      orderId: Joi.string().allow(""),

      userId: Joi.string().allow(""),

      merchantId: Joi.string().allow(""),

      lenderId: Joi.string().allow(""),

      loanAccountNumber: Joi.string().allow(""),

      refund: Joi.array().items(this.RefundStatusList()),

      __headers: Joi.any(),
    });
  }

  static CustomerMetricsPivots() {
    return Joi.object({
      date: Joi.string().allow(""),

      sum: Joi.number(),
    });
  }

  static CustomerMetricsSubResponse() {
    return Joi.object({
      total: Joi.string().allow(""),

      pivots: Joi.array().items(this.CustomerMetricsPivots()),

      title: Joi.string().allow(""),

      description: Joi.string().allow(""),

      valueFormat: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static CustomerMetricsAnalytics() {
    return Joi.object({
      totalCustomers: this.CustomerMetricsSubResponse(),

      source: this.CustomerMetricsSubResponse(),
    });
  }

  static CustomerMetricsFilters() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      display: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.string().allow("")).required(),

      isSelected: Joi.boolean(),

      isActive: Joi.boolean().required(),
    });
  }

  static CustomerMetrics() {
    return Joi.object({
      metrics: this.CustomerMetricsAnalytics(),

      filters: Joi.array().items(this.CustomerMetricsFilters()),

      sort: Joi.array().items(this.CustomerMetricsFilters()),
    });
  }

  static CustomerMetricsResponse() {
    return Joi.object({
      data: this.CustomerMetrics(),
    });
  }

  static CustomerMetricsRequest() {
    return Joi.object({
      filters: Joi.array().items(this.CustomerMetricsFilters()),

      sort: Joi.array().items(this.CustomerMetricsFilters()),

      merchantId: Joi.string().allow(""),

      lenderId: Joi.string().allow(""),

      pivotPoints: Joi.number(),
    });
  }

  static SourceAnalyticsRequest() {
    return Joi.object({
      filters: Joi.array().items(this.CustomerMetricsFilters()),
    });
  }

  static LenderResponse() {
    return Joi.object({
      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static CreditLimitObject() {
    return Joi.object({
      availableLimit: Joi.number(),

      possibleLimit: Joi.number(),

      lender: this.LenderResponse(),
    });
  }

  static BusinessDetails() {
    return Joi.object({
      category: Joi.string().allow("").required(),

      shopName: Joi.string().allow(""),

      legalName: Joi.string().allow("").required(),

      address: Joi.string().allow(""),

      type: Joi.string().allow(""),

      pincode: Joi.string().allow(""),
    });
  }

  static DocumentItems() {
    return Joi.object({
      number: Joi.string().allow(""),

      category: Joi.string().allow(""),

      type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      issuedOn: Joi.string().allow(""),

      issuedAt: Joi.string().allow(""),

      issuedBy: Joi.string().allow(""),

      expiryOn: Joi.string().allow(""),
    });
  }

  static VintageItems() {
    return Joi.object({
      month: Joi.number().required(),

      year: Joi.number().required(),

      totalTransactions: Joi.number().required(),

      totalTransactionAmount: Joi.number().required(),

      totalCancellations: Joi.number(),

      totalCancellationAmount: Joi.number(),
    });
  }

  static EligibilitySuccess() {
    return Joi.object({
      status: Joi.string().allow(""),

      message: Joi.string().allow(""),

      redirectUrl: Joi.string().allow(""),

      callbackUrl: Joi.string().allow(""),

      creditLimits: Joi.array().items(this.CreditLimitObject()),

      __headers: Joi.any(),
    });
  }

  static CheckEligibilityRequest() {
    return Joi.object({
      customer: this.CustomerObject().required(),

      order: this.Order(),

      businessDetails: this.BusinessDetails(),

      documents: Joi.array().items(this.DocumentItems()),

      device: this.Device().required(),

      vintage: Joi.array().items(this.VintageItems()),

      meta: Joi.object().pattern(/\S/, Joi.any()),

      fetchLimitOptions: Joi.boolean(),
    });
  }

  static GetSchemesSuccess() {
    return Joi.object({
      userId: Joi.string().allow(""),

      lenders: Joi.array().items(undefined).required(),

      __headers: Joi.any(),
    });
  }

  /*
        Enum: PageType
        Used By: Customer
    */
  static PageType() {
    return Joi.string().valid(
      "external",

      "login",

      "home",

      "transactions",

      "transactionDetails",

      "rewards",

      "referAndEarn",

      "profile",

      "setupAutopay",

      "updateEmail",

      "reportIssue",

      "creditScore",

      "autoPay",

      "helpCenter",

      "kycInit",

      "accessDigilocker",

      "liveliness",

      "lenderOnboard",

      "lender",

      "kycDocs",

      "kycSelfie",

      "kycStatus",

      "kycError",

      "kycDigilockerResponse",

      "kycInitResponse",

      "repayment",

      "netBankingRepayment",

      "upiRepayment",

      "sanctionLetter",

      "kfs"
    );
  }

  static DisbursalRequest() {
    return Joi.object({
      fingerprint: Joi.string().allow(""),

      chargeToken: Joi.string().allow("").required(),

      loanTypeId: Joi.number(),

      emiTenure: Joi.number(),

      isDownpaymentRequired: Joi.boolean(),

      downpaymentAmount: Joi.number(),

      loanAmount: Joi.number(),
    });
  }

  static WorkflowUser() {
    return Joi.object({
      mobile: Joi.string().allow(""),
    });
  }

  static EligiblePlansRequest() {
    return Joi.object({
      chargeToken: Joi.string().allow(""),
    });
  }

  static EligiblePlans() {
    return Joi.object({
      name: Joi.string().allow(""),

      displayName: Joi.string().allow(""),

      description: Joi.string().allow(""),

      brokenInterest: Joi.number(),

      noOfEmi: Joi.number(),

      emiAmount: Joi.number(),

      processingFee: Joi.number(),

      installmentInterestRate: Joi.number(),
    });
  }

  static EligiblePlansResponse() {
    return Joi.object({
      eligiblePlans: Joi.array().items(this.EligiblePlans()),

      __headers: Joi.any(),
    });
  }

  static DisbursalResponse() {
    return Joi.object({
      transactionId: Joi.string().allow(""),

      status: Joi.string().allow(""),

      message: Joi.string().allow(""),

      __headers: Joi.any(),
    });
  }

  static OrderStatus() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),

      transactionId: Joi.string().allow(""),

      status: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      __headers: Joi.any(),
    });
  }

  static DisbursalStatusRequest() {
    return Joi.object({
      fingerprint: Joi.string().allow(""),

      transactionId: Joi.string().allow("").required(),
    });
  }

  static Transactions() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      userId: Joi.string().allow("").required(),

      partnerId: Joi.string().allow(""),

      partner: Joi.string().allow(""),

      partnerLogo: Joi.string().allow(""),

      status: Joi.string().allow("").required(),

      type: Joi.string().allow(""),

      remark: Joi.string().allow(""),

      amount: Joi.number().required(),

      loanAccountNumber: Joi.string().allow(""),

      kfs: Joi.string().allow(""),

      utr: Joi.string().allow(""),

      sanctionLetter: Joi.string().allow(""),

      orderId: Joi.string().allow(""),

      refundId: Joi.string().allow(""),

      createdAt: Joi.string().allow("").required(),

      lenderId: Joi.string().allow(""),

      lenderName: Joi.string().allow(""),

      lenderLogo: Joi.string().allow(""),

      loanType: Joi.string().allow(""),

      repaymentTransactionId: Joi.string().allow(""),

      nextDueDate: Joi.string().allow(""),

      paidPercent: Joi.number(),

      lenderDetail: this.LenderDetail(),

      emis: Joi.array().items(this.Emi()),
    });
  }

  static LenderDetail() {
    return Joi.object({
      id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      imageUrl: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      active: Joi.boolean(),

      b2b: Joi.boolean(),

      b2c: Joi.boolean(),

      theme: this.Theme(),

      createdAt: Joi.string().allow(""),

      updatedAt: Joi.string().allow(""),

      deletedAt: Joi.string().allow(""),
    });
  }

  static TransactionResponse() {
    return Joi.object({
      filters: Joi.array().items(this.Filters()).required(),

      page: this.PageResponse().required(),

      transactions: Joi.array().items(this.Transactions()).required(),
    });
  }

  static MerchantTransactions() {
    return Joi.object({
      outstandingAmount: Joi.string().allow(""),
    });
  }

  static MerchantTransactionSummary() {
    return Joi.object({
      merchantOutstandingSummary: this.MerchantTransactions(),
    });
  }

  static GetReconciliationFileResponse() {
    return Joi.object({
      files: Joi.array().items(this.ReconFile()).required(),
    });
  }

  static ReconFile() {
    return Joi.object({
      base64: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static UploadReconciliationFileRequest() {
    return Joi.object({
      base64File: Joi.string().allow("").required(),

      format: Joi.string().allow(""),

      lenderId: Joi.string().allow(""),
    });
  }

  static UploadReconciliationFileResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static TransactionCount() {
    return Joi.object({
      totalTransactions: Joi.string().allow(""),
    });
  }

  static RefundCount() {
    return Joi.object({
      refundTransactions: Joi.string().allow(""),
    });
  }

  static OrganizationTransactionsCount() {
    return Joi.object({
      count: Joi.number(),
    });
  }

  static OrganizationTransactionsSum() {
    return Joi.object({
      sum: Joi.number(),
    });
  }

  static UniqueCustomersInOrg() {
    return Joi.object({
      count: Joi.number(),
    });
  }

  static TransactionAmount() {
    return Joi.object({
      totalTransactionAmount: Joi.string().allow(""),
    });
  }

  static SchemaForOneDayTotal() {
    return Joi.object({
      orgId: Joi.string().allow(""),

      createdAt: Joi.string().allow(""),

      count: Joi.number(),

      sum: Joi.string().allow(""),

      refund: Joi.string().allow(""),

      difference: Joi.string().allow(""),
    });
  }

  static SumofOneDayTransactions() {
    return Joi.object({
      dayTotal: Joi.array().items(this.SchemaForOneDayTotal()),
    });
  }

  static AverageTransaction() {
    return Joi.object({
      average: Joi.number(),
    });
  }

  static AllTransactionsResponse() {
    return Joi.object({
      id: Joi.string().allow(""),

      userId: Joi.string().allow(""),

      partnerId: Joi.string().allow(""),

      status: Joi.string().allow(""),

      type: Joi.string().allow(""),

      remark: Joi.string().allow(""),

      amount: Joi.number(),

      loanAccountNumber: Joi.string().allow(""),

      createdAt: Joi.string().allow(""),
    });
  }

  static TotalRefund() {
    return Joi.object({
      totalRefund: Joi.string().allow(""),
    });
  }

  static TotalRepayment() {
    return Joi.object({
      totalRepayment: Joi.string().allow(""),
    });
  }

  static TotalOverDue() {
    return Joi.object({
      totalDue: Joi.string().allow(""),
    });
  }

  static TotalLoansDisbursed() {
    return Joi.object({
      totalLoansDisbursed: Joi.string().allow(""),
    });
  }

  static OrganizationTransactionResponse() {
    return Joi.object({
      filters: Joi.array().items(this.TrFilters()).required(),

      page: this.TrPageResponse().required(),

      transactions: Joi.array().items(this.OrgTransactions()).required(),
    });
  }

  static TrFilters() {
    return Joi.object({
      key: this.TrFilterKeys(),

      values: Joi.array().items(this.TrFilterValues()),
    });
  }

  static TrPageResponse() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      current: Joi.number().required(),

      hasPrevious: Joi.boolean().required(),

      hasNext: Joi.boolean().required(),

      size: Joi.number().required(),

      itemTotal: Joi.number().required(),
    });
  }

  static OrgTransactions() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      userId: Joi.string().allow("").required(),

      userName: Joi.string().allow(""),

      partnerId: Joi.string().allow(""),

      partner: Joi.string().allow(""),

      partnerLogo: Joi.string().allow(""),

      status: Joi.string().allow("").required(),

      type: Joi.string().allow(""),

      remark: Joi.string().allow(""),

      amount: Joi.number().required(),

      orderId: Joi.string().allow(""),

      loanAccountNumber: Joi.string().allow(""),

      kfs: Joi.string().allow(""),

      sanctionLetter: Joi.string().allow(""),

      createdAt: Joi.string().allow("").required(),
    });
  }

  static TrFilterKeys() {
    return Joi.object({
      display: Joi.string().allow(""),

      name: Joi.string().allow(""),

      kind: Joi.string().allow(""),
    });
  }

  static TrFilterValues() {
    return Joi.object({
      display: Joi.string().allow(""),

      isSelected: Joi.boolean(),

      value: Joi.string().allow(""),
    });
  }

  static KfsRequest() {
    return Joi.object({
      loanTypeId: Joi.number(),

      chargeToken: Joi.string().allow(""),
    });
  }

  static KfsResponse() {
    return Joi.object({
      kfsTable: Joi.string().allow(""),
    });
  }

  static LenderTransactionState() {
    return Joi.object({
      id: Joi.string().allow(""),

      stepIndex: Joi.number(),

      lenderId: Joi.string().allow(""),

      workflowId: Joi.string().allow(""),

      workflowName: Joi.string().allow(""),

      parentStateId: Joi.string().allow(""),

      workflowUrl: Joi.string().allow(""),

      isInternal: Joi.boolean(),

      active: Joi.boolean(),

      ttl: Joi.number(),

      name: Joi.string().allow(""),

      type: Joi.string().allow(""),

      inputData: Joi.any(),

      createdAt: Joi.string().allow(""),

      updatedAt: Joi.string().allow(""),

      deletedAt: Joi.string().allow(""),
    });
  }

  static TransactionStateResponse() {
    return Joi.object({
      transactionState: Joi.array().items(this.LenderTransactionState()),
    });
  }

  static Theme() {
    return Joi.object({
      logoUrl: Joi.string().allow(""),

      iconUrl: Joi.string().allow(""),

      landscapeBgUrl: Joi.string().allow(""),

      portraitBgUrl: Joi.string().allow(""),

      shortName: Joi.string().allow(""),
    });
  }

  static Emi() {
    return Joi.object({
      id: Joi.string().allow(""),

      userId: Joi.string().allow(""),

      installmentno: Joi.number(),

      loanAccountNumber: Joi.string().allow(""),

      amount: Joi.number(),

      dueDate: Joi.string().allow(""),

      referenceTransactionId: Joi.string().allow(""),

      remark: Joi.string().allow(""),

      createdAt: Joi.string().allow(""),

      updatedAt: Joi.string().allow(""),

      entityId: Joi.string().allow(""),

      paid: Joi.boolean(),

      overdue: Joi.boolean(),

      repaymentDate: Joi.string().allow(""),
    });
  }

  static MetricPivots() {
    return Joi.object({
      date: Joi.string().allow(""),

      sum: Joi.number(),
    });
  }

  static TransactionMetricSubResponse() {
    return Joi.object({
      total: Joi.string().allow(""),

      pivots: Joi.array().items(this.MetricPivots()),

      title: Joi.string().allow(""),

      description: Joi.string().allow(""),

      valueFormat: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static TransactionMetrics() {
    return Joi.object({
      totalDisbursement: this.TransactionMetricSubResponse(),

      totalOverdue: this.TransactionMetricSubResponse(),

      totalRepayment: this.TransactionMetricSubResponse(),
    });
  }

  static LenderCustomerTransactionMetricsFilters() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      display: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.string().allow("")).required(),

      isSelected: Joi.boolean(),

      isActive: Joi.boolean().required(),
    });
  }

  static LenderCustomerTransactionMetrics() {
    return Joi.object({
      metrics: this.TransactionMetrics(),

      filters: Joi.array().items(
        this.LenderCustomerTransactionMetricsFilters()
      ),

      sort: Joi.array().items(this.LenderCustomerTransactionMetricsFilters()),
    });
  }

  static LenderCustomerTransactionMetricsResponse() {
    return Joi.object({
      data: Joi.any(),
    });
  }

  static LenderCustomerTransactionMetricsRequest() {
    return Joi.object({
      filters: Joi.array().items(
        this.LenderCustomerTransactionMetricsFilters()
      ),

      sort: Joi.array().items(this.LenderCustomerTransactionMetricsFilters()),

      startDate: Joi.string().allow(""),

      endDate: Joi.string().allow(""),

      merchantId: Joi.string().allow(""),

      lenderId: Joi.string().allow(""),

      pivotPoints: Joi.number(),
    });
  }

  static LenderTheme() {
    return Joi.object({
      logoUrl: Joi.string().allow("").required(),

      iconUrl: Joi.string().allow("").required(),

      landscapeBgUrl: Joi.string().allow("").required(),

      portraitBgUrl: Joi.string().allow("").required(),

      shortName: Joi.string().allow("").required(),
    });
  }

  static Lender() {
    return Joi.object({
      id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      active: Joi.boolean(),

      imageUrl: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      theme: this.LenderTheme(),

      b2b: Joi.boolean(),

      b2c: Joi.boolean(),

      merchantConfigSchema: Joi.string().allow(""),

      createdAt: Joi.string().allow(""),

      updatedAt: Joi.string().allow(""),

      approvedLimit: Joi.number(),

      deletedAt: Joi.string().allow(""),

      meta: Joi.any(),

      metaSchema: Joi.any(),
    });
  }

  static UserLender() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      userId: Joi.string().allow("").required(),

      lenderId: Joi.string().allow("").required(),

      active: Joi.boolean(),

      status: Joi.string().allow("").required(),

      createdAt: Joi.string().allow("").required(),

      updatedAt: Joi.string().allow("").required(),

      deletedAt: Joi.string().allow(""),

      approvedLimit: Joi.number().required(),

      entityId: Joi.string().allow(""),

      entityMapId: Joi.string().allow(""),
    });
  }

  static SourceCreditReport() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      userId: Joi.string().allow("").required(),

      pan: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      mobile: Joi.string().allow("").required(),

      bureau: Joi.string().allow("").required(),

      score: Joi.string().allow("").required(),

      report: Joi.string().allow("").required(),

      createdAt: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      userId: Joi.string().allow("").required(),

      imageUrl: Joi.string().allow("").required(),

      number: Joi.string().allow("").required(),

      detail: Joi.any().required(),

      valid: Joi.boolean().required(),

      createdAt: Joi.string().allow("").required(),

      updatedAt: Joi.string().allow("").required(),

      deletedAt: Joi.string().allow(""),

      entityId: Joi.string().allow(""),
    });
  }

  static UserKycDetail() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      userId: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      remark: Joi.string().allow("").required(),

      profileType: Joi.string().allow("").required(),

      active: Joi.boolean().required(),

      expiryDate: Joi.string().allow(""),

      createdAt: Joi.string().allow(""),

      updatedAt: Joi.string().allow(""),

      deletedAt: Joi.string().allow(""),

      lenderId: Joi.string().allow("").required(),

      lender: this.Lender(),

      entityMapId: Joi.string().allow(""),

      entityId: Joi.string().allow(""),
    });
  }

  static Form() {
    return Joi.object({
      id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      title: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      action: Joi.string().allow(""),

      form: Joi.any(),

      uiSchema: Joi.any(),

      workflowId: Joi.string().allow(""),
    });
  }

  static LenderKycStepMap() {
    return Joi.object({
      id: Joi.string().allow(""),

      step: Joi.string().allow("").required(),

      stepIndex: Joi.number().required(),

      lenderId: Joi.string().allow("").required(),

      active: Joi.boolean().required(),

      rules: Joi.any().required(),

      profileType: Joi.string().allow("").required(),

      createdAt: Joi.string().allow(""),

      updatedAt: Joi.string().allow(""),

      deletedAt: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),

      iconUrl: Joi.string().allow("").required(),

      isInteractive: Joi.boolean().required(),

      formId: Joi.string().allow(""),

      merchantId: Joi.string().allow(""),

      form: this.Form().required(),

      docSchema: Joi.any().required(),
    });
  }

  static UserKycLenderStepMap() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      userId: Joi.string().allow("").required(),

      lenderKycStepMapId: Joi.string().allow("").required(),

      userKycDetailId: Joi.string().allow("").required(),

      lenderId: Joi.string().allow("").required(),

      ruleState: Joi.any().required(),

      active: Joi.boolean().required(),

      status: Joi.string().allow("").required(),

      documentId: Joi.string().allow(""),

      createdAt: Joi.string().allow("").required(),

      updatedAt: Joi.string().allow("").required(),

      deletedAt: Joi.string().allow(""),

      lenderKycStepMap: this.LenderKycStepMap(),

      entityMapId: Joi.string().allow(""),

      entityId: Joi.string().allow(""),

      updatedBy: Joi.string().allow(""),
    });
  }

  static ProofOfIdentity() {
    return Joi.object({
      dob: Joi.string().allow("").required(),

      hashedEmail: Joi.string().allow("").required(),

      gender: Joi.string().allow("").required(),

      hashedMobileNumber: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static ProofOfAddress() {
    return Joi.object({
      careOf: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      district: Joi.string().allow("").required(),

      house: Joi.string().allow("").required(),

      landmark: Joi.string().allow("").required(),

      locality: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      postOffice: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      street: Joi.string().allow("").required(),

      subDistrict: Joi.string().allow("").required(),

      vtc: Joi.string().allow("").required(),
    });
  }

  static EAadhaarData() {
    return Joi.object({
      aadhaarReferenceNumber: Joi.string().allow("").required(),

      aadhaarUid: Joi.string().allow("").required(),

      image: Joi.string().allow("").required(),

      proofOfIdentity: this.ProofOfIdentity().required(),

      proofOfAddress: this.ProofOfAddress().required(),

      xml: Joi.string().allow(""),

      pdf: Joi.string().allow(""),

      address: Joi.string().allow(""),
    });
  }

  static Consent() {
    return Joi.object({
      text: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
    });
  }

  static ValidatePanRequest() {
    return Joi.object({
      pan: Joi.string().allow("").required(),

      consents: Joi.array().items(this.Consent()).required(),
    });
  }

  static BankDetails() {
    return Joi.object({
      accountType: Joi.string().allow("").required(),

      bankName: Joi.string().allow("").required(),

      ifsc: Joi.string().allow("").required(),

      accountNumber: Joi.string().allow("").required(),

      accountHolderName: Joi.string().allow("").required(),
    });
  }

  static DocumentData() {
    return Joi.object({
      selfie: Joi.string().allow(""),

      video: Joi.string().allow(""),

      digilockerCode: Joi.string().allow(""),

      bankDetails: this.BankDetails(),
    });
  }

  static ConfirmPanRequest() {
    return Joi.object({
      pan: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      entity: Joi.string().allow(""),

      merchantId: Joi.string().allow(""),
    });
  }

  static LivelinessDetails() {
    return Joi.object({
      selfie: Joi.string().allow("").required(),

      video: Joi.string().allow("").required(),
    });
  }

  static UploadDocumentRequest() {
    return Joi.object({
      user: Joi.any(),

      documentData: Joi.any(),

      lenderSlug: Joi.string().allow("").required(),

      kycStep: Joi.string().allow("").required(),

      merchantId: Joi.string().allow(""),

      entityMapId: Joi.string().allow(""),
    });
  }

  static UploadDocumentRequestV1() {
    return Joi.object({
      kycStep: Joi.string().allow("").required(),

      entityMapId: Joi.string().allow("").required(),

      documentData: Joi.any().required(),
    });
  }

  static UploadDocumentRequestV3() {
    return Joi.object({
      kycStep: Joi.string().allow("").required(),

      entityMapId: Joi.string().allow("").required(),

      documentData: Joi.any().required(),
    });
  }

  static AadhaarRequest() {
    return Joi.object({
      digilockerCode: Joi.string().allow(""),
    });
  }

  static UploadAadhaarRequest() {
    return Joi.object({
      documentData: this.AadhaarRequest(),

      user: Joi.any(),

      lenderSlug: Joi.string().allow("").required(),

      kycStep: Joi.string().allow("").required(),

      merchantId: Joi.string().allow(""),

      entityMapId: Joi.string().allow(""),
    });
  }

  static UploadLivelinessRequest() {
    return Joi.object({
      documentData: this.LivelinessDetails(),

      user: Joi.any(),

      lenderSlug: Joi.string().allow("").required(),

      kycStep: Joi.string().allow("").required(),

      merchantId: Joi.string().allow(""),

      entityMapId: Joi.string().allow(""),
    });
  }

  static UploadAadhaarRequestV1() {
    return Joi.object({
      documentData: this.AadhaarRequest().required(),

      kycStep: Joi.string().allow("").required(),

      entityMapId: Joi.string().allow("").required(),
    });
  }

  static UploadLivelinessRequestV1() {
    return Joi.object({
      documentData: this.LivelinessDetails().required(),

      kycStep: Joi.string().allow("").required(),

      entityMapId: Joi.string().allow("").required(),
    });
  }

  static UploadAadhaarRequestV2() {
    return Joi.object({
      documentData: this.AadhaarRequest(),

      user: Joi.any(),

      lenderSlug: Joi.string().allow("").required(),

      kycStep: Joi.string().allow("").required(),

      merchantId: Joi.string().allow(""),

      entityMapId: Joi.string().allow(""),
    });
  }

  static UploadLivelinessRequestV2() {
    return Joi.object({
      documentData: this.LivelinessDetails(),

      user: Joi.any(),

      lenderSlug: Joi.string().allow("").required(),

      kycStep: Joi.string().allow("").required(),

      merchantId: Joi.string().allow(""),

      entityMapId: Joi.string().allow(""),
    });
  }

  static UploadAadhaarRequestV3() {
    return Joi.object({
      documentData: this.AadhaarRequest().required(),

      kycStep: Joi.string().allow("").required(),

      entityMapId: Joi.string().allow("").required(),
    });
  }

  static UploadLivelinessRequestV3() {
    return Joi.object({
      documentData: this.LivelinessDetails().required(),

      kycStep: Joi.string().allow("").required(),

      entityMapId: Joi.string().allow("").required(),
    });
  }

  static UploadBankDetailsRequest() {
    return Joi.object({
      documentData: this.BankDetails(),

      user: Joi.any(),

      lenderSlug: Joi.string().allow("").required(),

      kycStep: Joi.string().allow("").required(),

      merchantId: Joi.string().allow(""),

      entityMapId: Joi.string().allow(""),
    });
  }

  static InitiateKycRequest() {
    return Joi.object({
      kycType: Joi.string().allow("").required(),

      kycId: Joi.string().allow(""),

      merchantId: Joi.string().allow(""),
    });
  }

  static InitiateKycRequestV1() {
    return Joi.object({
      entityMapId: Joi.string().allow("").required(),

      kycType: Joi.string().allow("").required(),

      kycId: Joi.string().allow(""),

      merchantId: Joi.string().allow(""),
    });
  }

  static LenderOnboardRequest() {
    return Joi.object({
      ack: Joi.string().allow(""),

      data: Joi.any().required(),

      entityMapId: Joi.string().allow(""),

      merchantId: Joi.string().allow(""),
    });
  }

  static UpdateLenderStatusRequest() {
    return Joi.object({
      status: Joi.string().allow("").required(),

      payload: Joi.any().required(),

      data: Joi.any().required(),

      action: Joi.boolean().required(),
    });
  }

  static UpdateProfileRequest() {
    return Joi.object({
      firstName: Joi.string().allow(""),

      lastName: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      dob: Joi.string().allow(""),

      userId: Joi.string().allow("").required(),

      isOnboarded: Joi.boolean(),

      address: Joi.string().allow(""),
    });
  }

  static UpdateEntityRequest() {
    return Joi.object({
      name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      dob: Joi.string().allow(""),

      isDefault: Joi.boolean(),

      address: this.ProofOfAddress(),
    });
  }

  static CreateKycStepsRequest() {
    return Joi.object({
      data: Joi.any().required(),
    });
  }

  static CreateLenderPgConfigRequest() {
    return Joi.object({
      mid: Joi.string().allow("").required(),

      clientId: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      active: Joi.boolean().required(),

      pgId: Joi.string().allow("").required(),

      lenderId: Joi.string().allow("").required(),
    });
  }

  static CreateLenderStateRequest() {
    return Joi.object({
      data: Joi.any().required(),
    });
  }

  static UpdateLenderRequest() {
    return Joi.object({
      data: Joi.any().required(),

      lenderId: Joi.string().allow("").required(),
    });
  }

  static OtherPolicyFilters() {
    return Joi.object({
      orderBy: Joi.array().items(Joi.any()),
    });
  }

  static GetPolicyFilters() {
    return Joi.object({
      policyType: Joi.string().allow(""),

      lenderIds: Joi.array().items(Joi.any()),

      merchantIds: Joi.array().items(Joi.any()),

      orderBy: Joi.array().items(Joi.any()),
    });
  }

  static GetPolicyFilters2() {
    return Joi.object({
      breType: Joi.string().allow(""),

      lenderId: Joi.array().items(Joi.any()),

      merchantId: Joi.array().items(Joi.any()),

      loanType: Joi.string().allow(""),

      journeyType: Joi.string().allow(""),

      subType: Joi.string().allow(""),
    });
  }

  static MerchantConfigRequest() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      merchantConfigSchema: Joi.any().required(),
    });
  }

  static PanDetails() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      idNumber: Joi.string().allow("").required(),
    });
  }

  static AvailableLendersRequest() {
    return Joi.object({
      chargeToken: Joi.string().allow("").required(),
    });
  }

  static InitialData() {
    return Joi.object({
      userId: Joi.string().allow("").required(),

      entityId: Joi.string().allow("").required(),
    });
  }

  static ExecutePolicyRequest() {
    return Joi.object({
      policyFilters: this.GetPolicyFilters(),

      initialData: this.InitialData().required(),
    });
  }

  static ExecutePolicyRequest2() {
    return Joi.object({
      policyFilters: this.GetPolicyFilters2(),

      initialData: this.InitialData().required(),
    });
  }

  static RegisterGstRequest() {
    return Joi.object({
      gstTin: Joi.string().allow("").required(),
    });
  }

  static PopulateFormRequest() {
    return Joi.object({
      form: Joi.any().required(),

      lenderId: Joi.string().allow(""),

      merchantId: Joi.string().allow(""),
    });
  }

  static ValidateFormFieldRequest() {
    return Joi.object({
      workflowName: Joi.string().allow("").required(),

      userId: Joi.string().allow(""),

      entityId: Joi.string().allow(""),

      entityMapId: Joi.string().allow(""),

      lenderId: Joi.string().allow(""),

      merchantId: Joi.string().allow(""),

      fields: Joi.any().required(),
    });
  }

  static MerchantMetricFilter() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      display: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),

      isSelected: Joi.boolean(),

      isActive: Joi.boolean(),
    });
  }

  static LenderCustomerMetricsRequest() {
    return Joi.object({
      sort: Joi.array().items(this.MerchantMetricFilter()),

      filters: Joi.array().items(this.MerchantMetricFilter()),

      merchantId: Joi.string().allow(""),

      lenderId: Joi.string().allow(""),

      pivotPoints: Joi.number(),
    });
  }

  static StonewallCustomer() {
    return Joi.object({
      mobile: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static GetLimitRequest() {
    return Joi.object({
      lenderSlugs: Joi.array().items(Joi.any()),

      onlyDefaultLender: Joi.boolean(),

      customer: this.StonewallCustomer().required(),
    });
  }

  static DocumentObject() {
    return Joi.object({
      id: Joi.string().allow(""),

      userId: Joi.string().allow(""),

      name: Joi.string().allow(""),

      imageUrl: Joi.string().allow(""),

      number: Joi.string().allow("").required(),

      detail: Joi.any().required(),

      valid: Joi.boolean(),

      entityId: Joi.string().allow(""),
    });
  }

  static ManualKycRequest() {
    return Joi.object({
      remark: Joi.any().required(),

      status: Joi.string().allow("").required(),

      stepId: Joi.string().allow("").required(),

      entityMapId: Joi.string().allow("").required(),

      documentData: this.DocumentObject(),
    });
  }

  static RetriggerLenderOnboardRequest() {
    return Joi.object({
      stepId: Joi.string().allow("").required(),

      data: Joi.any().required(),
    });
  }

  static EntityMapDto() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      merchantId: Joi.string().allow(""),

      status: Joi.string().allow(""),

      lenderId: Joi.string().allow("").required(),

      limit: Joi.number(),

      creditType: Joi.string().allow(""),

      userId: Joi.string().allow("").required(),

      entityId: Joi.string().allow("").required(),
    });
  }

  static EntityDto() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      type: Joi.string().allow(""),

      address: Joi.string().allow(""),

      name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      dob: Joi.string().allow(""),

      userId: Joi.string().allow("").required(),
    });
  }

  static FindDocResponse() {
    return Joi.object({
      status: Joi.string().allow("").required(),

      info: Joi.string().allow("").required(),

      number: Joi.string().allow("").required(),

      details: Joi.any(),

      name: Joi.string().allow(""),
    });
  }

  static LenderKycStatus() {
    return Joi.object({
      status: Joi.string().allow("").required(),

      lenderId: Joi.string().allow(""),

      lenderName: Joi.string().allow(""),

      kycType: Joi.string().allow(""),
    });
  }

  static StateResponeDto() {
    return Joi.object({
      step: this.UserKycLenderStepMap().required(),

      isStepCompleted: Joi.boolean().required(),
    });
  }

  static KycStateMachineDto() {
    return Joi.object({
      kycResult: this.UserKycDetail().required(),

      action: this.UserKycLenderStepMap(),
    });
  }

  static InitiateKycDto() {
    return Joi.object({
      kycType: Joi.string().allow("").required(),

      lenderId: Joi.string().allow("").required(),

      user: Joi.any().required(),

      kycId: Joi.string().allow(""),

      entityRelation: this.EntityMapDto(),
    });
  }

  static LenderOnboardDto() {
    return Joi.object({
      lender: this.Lender(),

      user: Joi.any().required(),

      userLenderDetail: this.UserLender(),

      payload: this.LenderOnboardRequest().required(),

      entityRelation: this.EntityMapDto(),

      ipAddress: Joi.string().allow("").required(),

      overrideTtl: Joi.boolean(),
    });
  }

  static StepDetails() {
    return Joi.object({
      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      iconUrl: Joi.string().allow(""),

      status: Joi.string().allow("").required(),

      step: Joi.string().allow("").required(),

      order: Joi.number().required(),
    });
  }

  static OnboardStatusDto() {
    return Joi.object({
      onboardStep: Joi.string().allow("").required(),

      onboardingId: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),

      actionStatus: Joi.string().allow("").required(),

      lender: this.Lender().required(),

      navigation: Joi.string().allow(""),

      approvedLimit: Joi.number().required(),

      proposedLimit: Joi.number().required(),

      actionData: Joi.any(),

      steps: Joi.array().items(this.StepDetails()),

      entityId: Joi.string().allow("").required(),

      entityMapId: Joi.string().allow("").required(),

      actionIsForm: Joi.boolean().required(),

      actionForm: this.Form(),
    });
  }

  static LenderFilters() {
    return Joi.object({
      includeStatus: Joi.array().items(Joi.any()),

      excludeStatus: Joi.array().items(Joi.any()),

      allowDisabledLender: Joi.any(),
    });
  }

  static Policy() {
    return Joi.object({
      id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      url: Joi.string().allow(""),

      data: Joi.any(),

      version: Joi.string().allow(""),

      active: Joi.boolean(),

      type: Joi.any(),

      index: Joi.number(),

      lenderId: Joi.string().allow(""),

      merchantId: Joi.string().allow(""),

      workflowId: Joi.string().allow(""),

      schemaRef: Joi.array().items(Joi.any()),

      masterVariableRef: Joi.array().items(Joi.any()),

      customVariable: Joi.any(),

      subType: Joi.string().allow(""),

      createdAt: Joi.any(),

      updatedAt: Joi.any(),

      deletedAt: Joi.any(),
    });
  }

  static GetKycDocsResponse() {
    return Joi.object({
      documents: Joi.array().items(this.FindDocResponse()).required(),
    });
  }

  static OrganizationLogosObject() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      active: Joi.boolean().required(),
    });
  }

  static MetricSubTypes() {
    return Joi.object({
      date: Joi.string().allow("").required(),

      count: Joi.string().allow(""),

      sum: Joi.string().allow(""),
    });
  }

  static MetricTypes() {
    return Joi.object({
      pivots: Joi.array().items(this.MetricSubTypes()).required(),

      total: Joi.string().allow(""),

      description: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      valueFormat: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),
    });
  }

  static BreApprovedUsersResponse() {
    return Joi.object({
      data: this.MetricTypes().required(),
    });
  }

  static Metrics() {
    return Joi.object({
      lenderApprovedUsers: this.MetricTypes().required(),

      breApprovedUsers: this.MetricTypes().required(),

      totalCreditLine: this.MetricTypes().required(),
    });
  }

  static MetricData() {
    return Joi.object({
      metrics: this.Metrics().required(),

      filters: Joi.array().items(this.MerchantMetricFilter()).required(),

      sort: Joi.array().items(this.MerchantMetricFilter()).required(),
    });
  }

  static ApprovedLenders() {
    return Joi.object({
      status: Joi.string().allow("").required(),

      lenders: Joi.array().items(this.BreOutput()).required(),
    });
  }

  static BreResultStatus() {
    return Joi.object({
      status: Joi.string().allow("").required(),

      approvedLenders: Joi.array().items(this.BreOutput()),
    });
  }

  static GetAllUserLendersByEnityId() {
    return Joi.object({
      entityId: Joi.string().allow("").required(),

      entityMapId: Joi.string().allow("").required(),

      userId: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      lender: this.Lender().required(),

      partnerId: Joi.string().allow(""),
    });
  }

  static LenderState() {
    return Joi.object({
      id: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      lenderId: Joi.string().allow("").required(),

      index: Joi.number().required(),

      workflowName: Joi.string().allow("").required(),

      workflowUrl: Joi.string().allow(""),

      active: Joi.boolean().required(),

      createdAt: Joi.string().allow(""),

      updatedAt: Joi.string().allow(""),

      deletedAt: Joi.string().allow(""),

      lender: this.Lender(),

      parentStateId: Joi.string().allow(""),

      ttl: Joi.number().required(),

      displayName: Joi.string().allow(""),

      description: Joi.string().allow(""),

      iconUrl: Joi.string().allow(""),

      isInteractive: Joi.boolean().required(),

      schema: Joi.any(),
    });
  }

  static UserLenderState() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      lenderStateId: Joi.string().allow("").required(),

      lenderId: Joi.string().allow("").required(),

      userId: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      userLenderId: Joi.string().allow("").required(),

      remark: Joi.string().allow("").required(),

      active: Joi.boolean().required(),

      lenderState: this.LenderState(),

      data: Joi.any(),

      createdAt: Joi.string().allow(""),

      updatedAt: Joi.string().allow(""),

      deletedAt: Joi.string().allow(""),

      entityId: Joi.string().allow(""),

      entityMapId: Joi.string().allow(""),

      updatedBy: Joi.string().allow(""),
    });
  }

  static LenderConfig() {
    return Joi.object({
      id: Joi.string().allow(""),

      baseUrl: Joi.string().allow("").required(),

      accessToken: Joi.string().allow(""),

      secret: Joi.string().allow(""),

      data: Joi.any().required(),

      lenderId: Joi.string().allow("").required(),

      active: Joi.boolean(),

      createdAt: Joi.string().allow(""),

      updatedAt: Joi.string().allow(""),

      deletedAt: Joi.string().allow(""),
    });
  }

  static Pg() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      active: Joi.boolean().required(),
    });
  }

  static LenderPgConfig() {
    return Joi.object({
      id: Joi.string().allow(""),

      mid: Joi.string().allow("").required(),

      clientId: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      lenderId: Joi.string().allow("").required(),

      pgId: Joi.string().allow("").required(),

      active: Joi.boolean().required(),
    });
  }

  static FileUploadResponse() {
    return Joi.object({
      fileId: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      path: Joi.string().allow("").required(),

      format: Joi.string().allow("").required(),

      size: Joi.number().required(),

      access: Joi.string().allow("").required(),

      tags: Joi.string().allow("").required(),

      metadata: Joi.string().allow("").required(),

      url: Joi.string().allow("").required(),

      thumbnail: Joi.string().allow("").required(),
    });
  }

  static PresignedUrl() {
    return Joi.object({
      url: Joi.string().allow("").required(),

      fields: Joi.any().required(),
    });
  }

  static PresignedUrlV2() {
    return Joi.object({
      url: Joi.string().allow("").required(),

      fields: Joi.any().required(),
    });
  }

  static LenderDocument() {
    return Joi.object({
      id: Joi.string().allow(""),

      lenderId: Joi.string().allow(""),

      type: Joi.string().allow(""),

      document: Joi.any(),

      active: Joi.boolean(),

      createdAt: Joi.string().allow(""),

      updatedAt: Joi.string().allow(""),

      deletedAt: Joi.string().allow(""),
    });
  }

  static KycStatusResponse() {
    return Joi.object({
      isKycInitiated: Joi.boolean().required(),

      userId: Joi.string().allow("").required(),

      kycStatuses: Joi.array().items(this.LenderKycStatus()).required(),
    });
  }

  static WorkflowResponse() {
    return Joi.object({
      data: Joi.any(),
    });
  }

  static InitiateKycResponse() {
    return Joi.object({
      kycResult: this.UserKycDetail().required(),

      action: this.Action().required(),
    });
  }

  static UploadDocResponse() {
    return Joi.object({
      status: Joi.string().allow("").required(),

      data: Joi.any(),

      remark: Joi.string().allow(""),

      kycResult: this.UserKycDetail().required(),

      action: this.Action().required(),
    });
  }

  static LenderOnboardResponse() {
    return Joi.object({
      result: this.UserLender().required(),

      action: this.UserLenderState().required(),

      data: Joi.any().required(),
    });
  }

  static OnboardingStatusResponse() {
    return Joi.object({
      onboardStatuses: Joi.array().items(this.OnboardStatusDto()).required(),
    });
  }

  static SignedUrlResponse() {
    return Joi.object({
      signedUrl: this.PresignedUrl().required(),

      fileUrl: Joi.string().allow("").required(),
    });
  }

  static SignedUrlV2Response() {
    return Joi.object({
      signedUrl: this.PresignedUrlV2().required(),

      fileUrl: Joi.string().allow("").required(),
    });
  }

  static PresignedUrlV3() {
    return Joi.object({
      signedUrl: Joi.string().allow("").required(),

      provider: Joi.any().required(),
    });
  }

  static SignedUrlV3Response() {
    return Joi.object({
      signedDetails: this.PresignedUrlV3().required(),

      fileUrl: Joi.string().allow("").required(),
    });
  }

  static DigilockerLinkResponse() {
    return Joi.object({
      authorizationUrl: Joi.string().allow("").required(),
    });
  }

  static GetDocumentsResponse() {
    return Joi.object({
      documents: Joi.array().items(this.FindDocResponse()).required(),
    });
  }

  static ApprovedLendersTransaction() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      imageUrl: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      active: Joi.boolean().required(),

      proposedLimit: Joi.number().required(),

      createdAt: Joi.any().required(),

      updatedAt: Joi.any().required(),

      deletedAt: Joi.any(),

      isDefault: Joi.boolean(),

      __headers: Joi.any(),
    });
  }

  static ApprovedPossibleLenders() {
    return Joi.object({
      limit: Joi.number().required(),

      name: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      active: Joi.boolean().required(),

      id: Joi.string().allow("").required(),

      theme: this.LenderTheme(),
    });
  }

  static AvailableLenders() {
    return Joi.object({
      approvedLenders: Joi.array()
        .items(this.ApprovedPossibleLenders())
        .required(),

      possibleLenders: Joi.array()
        .items(this.ApprovedPossibleLenders())
        .required(),
    });
  }

  static CreditLimit() {
    return Joi.object({
      availableLimit: Joi.number().required(),

      approvedLimit: Joi.number().required(),
    });
  }

  static CreditLimitResponse() {
    return Joi.object({
      status: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      action: Joi.boolean().required(),

      credit: this.CreditLimit().required(),
    });
  }

  static LenderPgConfigResponse() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      mid: Joi.string().allow("").required(),

      clientId: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      lenderId: Joi.string().allow("").required(),

      pgId: Joi.string().allow("").required(),

      active: Joi.boolean().required(),

      pgName: Joi.string().allow("").required(),

      pgActive: Joi.boolean().required(),
    });
  }

  static GetLendersResponse() {
    return Joi.object({
      data: Joi.array().items(this.Lender()).required(),
    });
  }

  static LenderConfigurationResponse() {
    return Joi.object({
      lender: this.Lender().required(),

      lenderPgConfig: this.LenderPgConfig().required(),

      lenderConfig: this.LenderConfig().required(),

      lenderState: Joi.array().items(this.LenderState()).required(),

      lenderKycStepMap: Joi.array().items(this.LenderKycStepMap()).required(),
    });
  }

  static UpsertLenderResponse() {
    return Joi.object({
      data: Joi.any().required(),
    });
  }

  static UpsertLenderConfigResponse() {
    return Joi.object({
      data: Joi.any().required(),
    });
  }

  static CreateKycStepsSchema() {
    return Joi.object({
      data: Joi.array().items(this.LenderKycStepMap()).required(),
    });
  }

  static CreatePaymentGatewaySchema() {
    return Joi.object({
      data: Joi.array().items(this.LenderPgConfig()).required(),
    });
  }

  static CreateLenderStateSchema() {
    return Joi.object({
      data: Joi.array().items(this.LenderState()).required(),
    });
  }

  static GetAllPaymentGatewaysSchema() {
    return Joi.object({
      data: Joi.array().items(this.Pg()).required(),
    });
  }

  static PolicyResponse() {
    return Joi.object({
      policies: Joi.array().items(this.Policy()).required(),
    });
  }

  static CreditCheckBreResponse() {
    return Joi.object({
      newLenderAssigned: Joi.boolean().required(),

      breStatus: Joi.string().allow("").required(),
    });
  }

  static MerchantConfigResponse() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      merhantConfigSchema: Joi.string().allow("").required(),
    });
  }

  static UserLenderByIdAndStatusResponse() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      userId: Joi.string().allow("").required(),

      lenderId: Joi.string().allow("").required(),

      active: Joi.boolean(),

      status: Joi.string().allow("").required(),

      createdAt: Joi.string().allow("").required(),

      updatedAt: Joi.string().allow("").required(),

      deletedAt: Joi.string().allow(""),

      approvedLimit: Joi.number().required(),

      slug: Joi.string().allow(""),

      theme: this.LenderTheme(),

      name: Joi.any(),
    });
  }

  static IntgrAvailableCreditLimit() {
    return Joi.object({
      limit: Joi.number().required(),

      lenderName: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      isDefault: Joi.boolean().required(),

      logoUrl: Joi.string().allow("").required(),
    });
  }

  static IngtrAvailableLimit() {
    return Joi.object({
      available: Joi.array().items(this.IntgrAvailableCreditLimit()).required(),
    });
  }

  static IntgrCreditLimit() {
    return Joi.object({
      limit: this.IngtrAvailableLimit().required(),

      __headers: Joi.any(),
    });
  }

  static PossibleLendersInternal() {
    return Joi.object({
      limit: Joi.boolean().required(),

      lenderName: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      isDefault: Joi.boolean().required(),

      logo: Joi.string().allow("").required(),

      lenderId: Joi.string().allow("").required(),
    });
  }

  static PossibleLendersInternalResponse() {
    return Joi.object({
      lenders: Joi.array().items(this.PossibleLendersInternal()).required(),
    });
  }

  static GetTotalKycResponse() {
    return Joi.object({
      totalKyc: Joi.string().allow("").required(),
    });
  }

  static GetTotalKycCompletedUsersResponse() {
    return Joi.object({
      totalKycCompletedUsers: Joi.string().allow("").required(),
    });
  }

  static GetTotalPendingUsersResponse() {
    return Joi.object({
      totalPendingKyc: Joi.string().allow("").required(),
    });
  }

  static GetTotalCreditProvidedResponse() {
    return Joi.object({
      totalCreditLimit: Joi.string().allow("").required(),
    });
  }

  static MetaSchemaResponse() {
    return Joi.object({
      title: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      required: Joi.array().items(Joi.string().allow("")).required(),

      type: Joi.string().allow("").required(),

      properties: Joi.any().required(),
    });
  }

  static MetaSchema() {
    return Joi.object({
      metaSchema: this.MetaSchemaResponse().required(),
    });
  }

  static AddMetaSchema() {
    return Joi.object({
      lenderSlug: Joi.string().allow("").required(),

      merchantId: Joi.string().allow("").required(),

      schema: Joi.any().required(),
    });
  }

  static AddMetaSchemaRequest() {
    return Joi.object({
      merchantId: Joi.string().allow("").required(),

      schema: Joi.any().required(),
    });
  }

  static ValidatePanResponse() {
    return Joi.object({
      panName: Joi.string().allow("").required(),

      isPanValid: Joi.string().allow("").required(),

      pan: Joi.string().allow("").required(),

      isProprietor: Joi.boolean().required(),

      panType: Joi.string().allow("").required(),

      errorCode: Joi.string().allow(""),

      status: Joi.string().allow(""),

      errorMessage: Joi.string().allow(""),
    });
  }

  static ConfirmPanResonse() {
    return Joi.object({
      status: Joi.string().allow("").required(),

      statusCode: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),
    });
  }

  static LenderCountResponse() {
    return Joi.object({
      active: Joi.number().required(),

      inActive: Joi.number().required(),
    });
  }

  static OnboardStepsDto() {
    return Joi.object({
      steps: Joi.array().items(this.StepDetails()).required(),

      lender: this.Lender().required(),
    });
  }

  static OnboardStepsResponse() {
    return Joi.object({
      stepDetails: Joi.array().items(this.OnboardStepsDto()).required(),
    });
  }

  static LenderDocumentResponse() {
    return Joi.object({
      data: this.LenderDocument().required(),
    });
  }

  static GetUserLendersResponse() {
    return Joi.object({
      data: Joi.array().items(this.UserLender()).required(),
    });
  }

  static CreditReportResponse() {
    return Joi.object({
      data: this.SourceCreditReport().required(),
    });
  }

  static KycDetailsReponse() {
    return Joi.object({
      data: this.UserKycLenderStepMap().required(),
    });
  }

  static GetDocumentByIdResponse() {
    return Joi.object({
      data: this.Document().required(),
    });
  }

  static GetAllFormsResponse() {
    return Joi.object({
      data: Joi.any().required(),
    });
  }

  static UpsertFormResponse() {
    return Joi.object({
      data: Joi.any().required(),
    });
  }

  static GstDetails() {
    return Joi.object({
      gstTin: Joi.string().allow("").required(),

      businessName: Joi.string().allow("").required(),
    });
  }

  static GstDetailsResponse() {
    return Joi.object({
      gstDetails: Joi.array().items(this.GstDetails()).required(),
    });
  }

  static RegisterGstResponse() {
    return Joi.object({
      gstDocDetails: this.Document().required(),

      status: Joi.string().allow("").required(),
    });
  }

  static PopulateFormResponse() {
    return Joi.object({
      form: Joi.any().required(),
    });
  }

  static ValidateFormFieldResponse() {
    return Joi.object({
      status: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      data: Joi.any().required(),
    });
  }

  static LenderCustomerMetricsResponse() {
    return Joi.object({
      status: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      data: this.MetricData().required(),
    });
  }

  static ManualKycResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      step: this.UserKycLenderStepMap().required(),
    });
  }

  static BreOutput() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      userId: Joi.string().allow("").required(),

      entityId: Joi.string().allow("").required(),

      lenderId: Joi.string().allow(""),

      merchantId: Joi.string().allow(""),

      policyName: Joi.string().allow("").required(),

      category: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      output: Joi.any().required(),

      status: Joi.string().allow("").required(),

      createdAt: Joi.string().allow("").required(),

      updatedAt: Joi.string().allow("").required(),

      deletedAt: Joi.string().allow("").required(),
    });
  }

  static CustomerKycDetailsReponse() {
    return Joi.object({
      data: this.UserKycLenderStepMap().required(),
    });
  }
}

class CustomerValidator {
  static verify() {
    return Joi.object({
      disbursalRequest: Validator.VerifyCustomer().required(),
    }).required();
  }

  static resendPaymentRequest() {
    return Joi.object({
      disbursalRequest: Validator.ResendPaymentRequest().required(),
    }).required();
  }

  static createOrder() {
    return Joi.object({
      disbursalRequest: Validator.CreateTransaction().required(),
    }).required();
  }

  static link() {
    return Joi.object({
      disbursalRequest: Validator.LinkAccount().required(),
    }).required();
  }

  static unlink() {
    return Joi.object({
      disbursalRequest: Validator.UnlinkAccount().required(),
    }).required();
  }

  static getAccessToken() {
    return Joi.object({}).required();
  }

  static renewAccessToken() {
    return Joi.object({
      disbursalRequest: Validator.RefreshTokenRequest().required(),
    }).required();
  }

  static refund() {
    return Joi.object({
      disbursalRequest: Validator.Refund().required(),
    }).required();
  }

  static refundStatus() {
    return Joi.object({
      refundId: Joi.string().allow(""),
      orderId: Joi.string().allow(""),
    }).required();
  }

  static getSchemes() {
    return Joi.object({
      disbursalRequest: Validator.VerifyCustomer().required(),
    }).required();
  }

  static checkEligibility() {
    return Joi.object({
      disbursalRequest: Validator.CheckEligibilityRequest().required(),
    }).required();
  }
}

class CreditValidator {
  static disburse() {
    return Joi.object({
      disbursalRequest: Validator.DisbursalRequest().required(),
    }).required();
  }

  static getOrderStatus() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
    }).required();
  }

  static getEligiblePlans() {
    return Joi.object({
      lenderSlug: Joi.string().allow("").required(),
      disbursalRequest: Validator.EligiblePlansRequest().required(),
    }).required();
  }
}

class MultiKycValidator {
  static approvedLenders() {
    return Joi.object({}).required();
  }

  static getLimit() {
    return Joi.object({
      disbursalRequest: Validator.GetLimitRequest().required(),
    }).required();
  }
}

module.exports = {
  CustomerValidator,
  CreditValidator,
  MultiKycValidator,
};
