const Joi = require("joi");
class Validator {
  static IntegrationResponseMeta() {
    return Joi.object({
      timestamp: Joi.string().allow("").required(),

      version: Joi.string().allow("").required(),

      product: Joi.string().allow("").required(),

      requestId: Joi.string().allow("").allow(null),
    });
  }

  static IntegrationResponseError() {
    return Joi.object({
      code: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      exception: Joi.string().allow("").required(),

      field: Joi.string().allow("").allow(null),

      location: Joi.string().allow("").allow(null),
    });
  }

  static IntegrationSuccessResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      meta: this.IntegrationResponseMeta().required(),

      data: Joi.any().required(),
    });
  }

  static IntegrationErrorResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      meta: this.IntegrationResponseMeta().required(),

      errors: Joi.array().items(this.IntegrationResponseError()),
    });
  }

  static RefundResponse() {
    return Joi.object({
      status: Joi.string().allow(""),

      message: Joi.string().allow(""),

      transactionId: Joi.string().allow(""),

      refundId: Joi.string().allow(""),

      __headers: Joi.any(),
    });
  }

  static UserSource() {
    return Joi.object({
      userId: Joi.string().allow(""),

      type: Joi.string().allow(""),

      sourceId: Joi.string().allow(""),

      meta: Joi.any(),

      createdAt: Joi.string().allow(""),

      updatedAt: Joi.string().allow(""),

      app: Joi.string().allow(""),

      entityId: Joi.string().allow(""),

      userMerchants: Joi.array().items(Joi.string().allow("")),
    });
  }

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

      uid: Joi.string().allow(""),

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

      items: Joi.array().items(this.Items()),

      shippingAddress: this.OrderAddress(),

      billingAddress: this.OrderAddress(),
    });
  }

  static VerifyOrder() {
    return Joi.object({
      valueInPaise: Joi.number().required(),

      uid: Joi.string().allow(""),

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

  static ValidateCustomer() {
    return Joi.object({
      customer: this.CustomerObject().required(),

      order: this.VerifyOrder().required(),

      device: this.Device().required(),

      meta: Joi.any(),

      fetchLimitOptions: Joi.boolean(),

      fetchPlans: Joi.boolean(),
    });
  }

  static CreateTransaction() {
    return Joi.object({
      redirectUrl: Joi.string().allow("").required(),

      customer: this.CustomerObject().required(),

      order: this.Order().required(),

      device: this.Device().required(),

      meta: Joi.any(),

      emiTenure: Joi.number(),

      lenderSlug: Joi.string().allow(""),

      consents: Joi.array().items(this.Consents()),
    });
  }

  static ResendPaymentRequest() {
    return Joi.object({
      redirectUrl: Joi.string().allow(""),

      customer: this.CustomerObject().required(),

      order: this.OrderUid().required(),
    });
  }

  static ValidateCustomerSuccess() {
    return Joi.object({
      status: Joi.string().allow("").required(),

      userStatus: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      schemes: Joi.array().items(this.SchemeResponse()),

      limit: this.LimitResponse(),

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

      redirectUrl: Joi.string().allow(""),
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

      footer: Joi.any(),
    });
  }

  static TabsSchema() {
    return Joi.object({
      title: Joi.string().allow("").required(),

      action: this.ActionSchema(),

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

      purpose: Joi.string().allow(""),
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

      customer: this.CustomerObject(),

      refundItems: Joi.array().items(this.Items()),

      orderId: Joi.string().allow("").required(),

      refundId: Joi.string().allow("").required(),

      refundAmount: Joi.number().required(),

      redirectionUrl: Joi.string().allow(""),
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

      __headers: Joi.any(),
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
    });
  }

  static RefreshTokenResponse() {
    return Joi.object({
      success: Joi.boolean(),

      accessToken: Joi.string().allow(""),

      tokenExpireAt: Joi.string().allow(""),

      tokenExpiryIn: Joi.string().allow(""),
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

  static GetSchemesSuccess() {
    return Joi.object({
      userId: Joi.string().allow(""),

      lenders: Joi.array().items(this.SchemeResponse()).required(),

      __headers: Joi.any(),
    });
  }

  static ActiveEntityResponse() {
    return Joi.object({
      activeEntity: Joi.any(),
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

  static SchemeResponse() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      isDefault: Joi.boolean().required(),

      logoUrl: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      subtitle: Joi.string().allow("").required(),

      amount: Joi.number(),

      paymentOptions: this.SchemePaymentOptionsResponse().required(),
    });
  }

  static SchemePaymentOptionsResponse() {
    return Joi.object({
      emis: Joi.array().items(this.SchemeEmiPaymentOptionResponse()),

      payLater: this.SchemePayLaterPaymentOptionResponse(),
    });
  }

  static SchemeEmiPaymentOptionResponse() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      isDefault: Joi.boolean().required(),

      description: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      subtitle: Joi.string().allow("").required(),

      amount: Joi.number().required(),

      interest: Joi.number(),

      processingFee: Joi.number().required(),

      tenure: Joi.number().required(),

      emiSchedule: Joi.array()
        .items(this.SchemeEmiScheduleResponse())
        .required(),
    });
  }

  static SchemeEmiScheduleResponse() {
    return Joi.object({
      installmentNo: Joi.number().required(),

      installmentAmount: Joi.number().required(),

      dueDate: Joi.string().allow("").required(),
    });
  }

  static SchemePayLaterPaymentOptionResponse() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      subtitle: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),

      tenure: Joi.number().required(),

      interest: Joi.number().required(),

      processingFee: Joi.number().required(),

      amount: Joi.number().required(),

      isDefault: Joi.boolean().required(),
    });
  }

  static LimitResponse() {
    return Joi.object({
      available: Joi.array().items(this.AvailableOrPossibleLender()),

      possible: Joi.array().items(this.AvailableOrPossibleLender()),
    });
  }

  static AvailableOrPossibleLender() {
    return Joi.object({
      limit: Joi.number().required(),

      lenderName: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      isDefault: Joi.boolean().required(),

      logo: Joi.string().allow("").required(),
    });
  }

  static GetSchemesRequest() {
    return Joi.object({
      customer: this.CustomerObject().required(),

      order: this.Order().required(),

      device: this.Device().required(),

      meta: Joi.any(),
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

      merchantId: Joi.string().allow(""),
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
      number: Joi.string().allow("").required(),

      category: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

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

      creditLimits: Joi.array().items(this.CreditLimitObject()),

      __headers: Joi.any(),
    });
  }

  static CheckEligibilityRequest() {
    return Joi.object({
      customer: this.CustomerObject().required(),

      order: this.Order(),

      device: this.Device().required(),

      meta: Joi.object().pattern(/\S/, Joi.any()),

      fetchLimitOptions: Joi.boolean(),
    });
  }

  static EmiSchedule() {
    return Joi.object({
      installmentNo: Joi.number(),

      installmentAmount: Joi.number(),

      dueDate: Joi.string().allow(""),
    });
  }

  static PaymentOption() {
    return Joi.object({
      id: Joi.string().allow(""),

      title: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      description: Joi.string().allow(""),

      tenure: Joi.number(),

      processingFee: Joi.number(),

      amount: Joi.number(),

      isDefault: Joi.boolean(),

      emiSchedule: Joi.array().items(this.EmiSchedule()),
    });
  }

  static PaymentOptions() {
    return Joi.object({
      payLater: this.PaymentOption(),

      emis: Joi.array().items(this.PaymentOption()),
    });
  }

  static LenderAndPaymentOption() {
    return Joi.object({
      id: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      isDefault: Joi.boolean(),

      logoUrl: Joi.string().allow("").required(),

      amount: Joi.number(),

      paymentOptions: this.PaymentOptions(),
    });
  }

  static GetSchemesSuccessOld() {
    return Joi.object({
      userId: Joi.string().allow("").required(),

      lenders: Joi.array().items(this.LenderAndPaymentOption()),
    });
  }

  static PageSchemaResponse() {
    return Joi.object({
      slug: Joi.string().allow(""),

      description: Joi.string().allow(""),

      sections: Joi.any(),

      settings: Joi.any(),
    });
  }

  static userCountRequest() {
    return Joi.object({
      merchantId: Joi.string().allow(""),

      startDate: Joi.string().allow(""),

      endDate: Joi.string().allow(""),
    });
  }

  static RepaymentRequest() {
    return Joi.object({
      mobile: Joi.string().allow("").required(),

      countryCode: Joi.string().allow(""),

      target: Joi.string().allow(""),

      callbackUrl: Joi.string().allow("").required(),

      lenderSlug: Joi.string().allow(""),
    });
  }

  static RepaymentResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      meta: this.IntegrationResponseMeta().required(),

      data: this.RepaymentResponseData().required(),

      __headers: Joi.any(),
    });
  }

  static RepaymentResponseData() {
    return Joi.object({
      repaymentUrl: Joi.string().allow(""),
    });
  }

  static VerifyMagicLinkResponse() {
    return Joi.object({
      user: this.UserSchema().required(),

      scope: Joi.array().items(Joi.string().allow("")),

      redirectPath: Joi.string().allow("").required(),

      callbackUrl: Joi.string().allow(""),

      meta: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  static VerifyMagicLinkRequest() {
    return Joi.object({
      token: Joi.string().allow("").required(),
    });
  }

  static VintageData() {
    return Joi.object({
      customer: this.CustomerObject(),

      businessDetails: this.BusinessDetails().required(),

      documents: Joi.array().items(this.DocumentItems()),

      device: this.Device(),

      vintage: Joi.array().items(this.VintageItems()).required(),

      meta: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  static AddVintageResponse() {
    return Joi.object({
      mesasge: Joi.string().allow(""),

      meta: this.IntegrationResponseMeta(),

      data: Joi.any(),

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

      "kfs",

      "dynamicPage"
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

      data: Joi.any(),

      transactionId: Joi.string().allow(""),

      lenderSlug: Joi.string().allow(""),

      intent: Joi.string().allow(""),
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

  static TransactionOrder() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      amount: Joi.number().required(),
    });
  }

  static TransactionMerchant() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),
    });
  }

  static TransactionLoan() {
    return Joi.object({
      number: Joi.string().allow("").required(),

      amount: Joi.number().required(),

      type: Joi.string().allow("").required(),

      dueDate: Joi.string().allow("").required(),

      repaidAmount: Joi.number().required(),

      isSettled: Joi.boolean().required(),

      emis: Joi.array().items(this.TransactionLoanEmi()),
    });
  }

  static TransactionLoanEmi() {
    return Joi.object({
      amount: Joi.number().required(),

      dueDate: Joi.string().allow("").required(),

      installmentNo: Joi.number().required(),

      repaidAmount: Joi.number().required(),

      isSettled: Joi.boolean().required(),
    });
  }

  static TransactionLender() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      shortName: Joi.string().allow("").required(),
    });
  }

  static UserTransaction() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      amount: Joi.number().required(),

      type: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      settlementUtr: Joi.string().allow("").allow(null),

      refundId: Joi.string().allow("").allow(null),

      createdAt: Joi.string().allow("").required(),

      isMasked: Joi.boolean().required(),

      order: this.TransactionOrder(),

      merchant: this.TransactionMerchant().required(),

      loans: Joi.array().items(this.TransactionLoan()),

      lender: this.TransactionLender(),
    });
  }

  static Pagination() {
    return Joi.object({
      type: Joi.string().allow(""),

      current: Joi.number().required(),

      hasPrevious: Joi.boolean().required(),

      hasNext: Joi.boolean().required(),

      size: Joi.number().required(),

      itemTotal: Joi.number().required(),
    });
  }

  static GetTransactionsData() {
    return Joi.object({
      transactions: Joi.array().items(this.UserTransaction()).required(),

      page: this.Pagination().required(),
    });
  }

  static GetTransactionsResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      meta: this.IntegrationResponseMeta().required(),

      data: this.GetTransactionsData().required(),

      __headers: Joi.any(),
    });
  }

  static SummaryRequest() {
    return Joi.object({
      startDate: Joi.string().allow(""),

      endDate: Joi.string().allow(""),

      merchantId: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static OrderShipmentAddressGeoLocation() {
    return Joi.object({
      latitude: Joi.number().required(),

      longitude: Joi.number().required(),
    });
  }

  static OrderShipmentAddress() {
    return Joi.object({
      line1: Joi.string().allow(""),

      line2: Joi.string().allow(""),

      city: Joi.string().allow(""),

      state: Joi.string().allow(""),

      country: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      type: Joi.string().allow(""),

      geoLocation: this.OrderShipmentAddressGeoLocation(),
    });
  }

  static OrderShipmentItem() {
    return Joi.object({
      category: Joi.string().allow(""),

      sku: Joi.string().allow(""),

      rate: Joi.number(),

      quantity: Joi.number(),
    });
  }

  static OrderShipment() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      urn: Joi.string().allow(""),

      amount: Joi.number().required(),

      timestamp: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      remark: Joi.string().allow(""),

      items: Joi.array().items(this.OrderShipmentItem()),

      shippingAddress: this.OrderShipmentAddress(),

      billingAddress: this.OrderShipmentAddress(),
    });
  }

  static OrderDeliveryUpdatesBody() {
    return Joi.object({
      orderId: Joi.string().allow(""),

      transactionId: Joi.string().allow(""),

      shipments: Joi.array().items(this.OrderShipment()).required(),
    });
  }

  static OrderShipmentResponse() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      urn: Joi.string().allow(""),

      shipmentStatus: Joi.string().allow("").required(),

      shipmentAmount: Joi.number().required(),

      processingStatus: Joi.string().allow("").required(),
    });
  }

  static OrderDeliveryUpdatesData() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),

      transactionId: Joi.string().allow("").required(),

      shipments: Joi.array().items(this.OrderShipmentResponse()).required(),
    });
  }

  static OrderDeliveryUpdatesResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      meta: this.IntegrationResponseMeta().required(),

      data: this.OrderDeliveryUpdatesData().required(),

      errors: Joi.array().items(this.IntegrationResponseError()),

      __headers: Joi.any(),
    });
  }

  static Lender() {
    return Joi.object({
      id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      active: Joi.boolean(),

      imageUrl: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      theme: Joi.any(),

      b2b: Joi.boolean(),

      b2c: Joi.boolean(),

      merchantConfigSchema: Joi.string().allow(""),

      createdAt: Joi.string().allow(""),

      updatedAt: Joi.string().allow(""),

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

      lenderUserId: Joi.string().allow("").required(),
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

      updatedAt: Joi.string().allow(""),

      deletedAt: Joi.string().allow(""),
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

      createdAt: Joi.string().allow(""),

      updatedAt: Joi.string().allow(""),

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

      createdAt: Joi.string().allow(""),

      updatedAt: Joi.string().allow(""),

      deletedAt: Joi.string().allow(""),
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

      createdAt: Joi.string().allow(""),

      updatedAt: Joi.string().allow(""),

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

  static MerchantSchema() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      website: Joi.string().allow(""),

      apiHook: Joi.string().allow(""),

      epikId: Joi.string().allow(""),

      disbursementAccountHolderName: Joi.string().allow(""),

      disbursementAccountNumber: Joi.string().allow(""),

      disbursementIfsc: Joi.string().allow(""),

      createdBy: Joi.string().allow(""),

      active: Joi.boolean(),

      category: Joi.string().allow(""),

      createdAt: Joi.string().allow(""),

      updatedAt: Joi.string().allow(""),

      deletedAt: Joi.string().allow(""),

      businessName: Joi.string().allow(""),

      email: Joi.string().allow(""),

      businessAddress: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      b2b: Joi.boolean(),

      b2c: Joi.boolean(),
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

      onboardingToken: Joi.string().allow(""),
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

      merchantId: Joi.string().allow(""),
    });
  }

  static LenderOnboardRequestV1() {
    return Joi.object({
      entityMapId: Joi.string().allow("").required(),

      ack: Joi.string().allow(""),

      data: Joi.any().required(),

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
      gstin: Joi.string().allow("").required(),

      skipGst: Joi.boolean(),

      onboardingToken: Joi.string().allow(""),
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

  static RetriggerLenderOnboardRequestV2() {
    return Joi.object({
      lenderUserId: Joi.string().allow("").required(),

      stepName: Joi.string().allow("").required(),

      data: Joi.any().required(),
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

  static BusinessDetail() {
    return Joi.object({
      category: Joi.string().allow("").required(),

      shopName: Joi.string().allow(""),

      legalName: Joi.string().allow("").required(),

      address: Joi.string().allow(""),

      type: Joi.string().allow(""),

      pincode: Joi.string().allow(""),
    });
  }

  static DocumentObjects() {
    return Joi.object({
      number: Joi.string().allow("").required(),

      category: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      issuedOn: Joi.string().allow(""),

      issuedAt: Joi.string().allow(""),

      issuedBy: Joi.string().allow(""),

      expiryOn: Joi.string().allow(""),
    });
  }

  static AddVintageRequest() {
    return Joi.object({
      user: Joi.any().required(),

      businessDetails: this.BusinessDetail().required(),

      vintageData: this.VintageData().required(),

      documents: this.DocumentObjects().required(),

      merchant: this.MerchantSchema().required(),
    });
  }

  static KycCountByStatus() {
    return Joi.object({
      startDate: Joi.string().allow(""),

      endDate: Joi.string().allow(""),

      merchantId: Joi.string().allow(""),

      lenderId: Joi.string().allow(""),
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

      merchantId: Joi.string().allow(""),

      actionName: Joi.string().allow(""),

      actionDescription: Joi.string().allow(""),
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

  static GetAllUserLendersByEnityId() {
    return Joi.object({
      entityId: Joi.string().allow("").required(),

      entityMapId: Joi.string().allow("").required(),

      userId: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      lender: this.Lender(),

      partnerId: Joi.string().allow(""),

      approvedLimit: Joi.number(),
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

      createdAt: Joi.string().allow(""),

      updatedAt: Joi.string().allow(""),

      deletedAt: Joi.string().allow(""),
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

      createdAt: Joi.string().allow(""),

      updatedAt: Joi.string().allow(""),

      deletedAt: Joi.string().allow(""),
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

  static Commercial() {
    return Joi.object({
      id: Joi.string().allow(""),

      lenderId: Joi.string().allow("").required(),

      merchantId: Joi.string().allow("").required(),

      commercial: Joi.any().required(),

      active: Joi.boolean().required(),

      createdAt: Joi.string().allow(""),

      updatedAt: Joi.string().allow(""),
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

  static Action() {
    return Joi.object({
      step: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      index: Joi.number().required(),

      isForm: Joi.boolean(),

      form: this.Form().required(),
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

      reasons: Joi.string().allow("").required(),

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

      createdAt: Joi.any(),

      updatedAt: Joi.any(),

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

      theme: Joi.any(),
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

      isEligibleToDrawdown: Joi.boolean().required(),
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

      theme: Joi.any(),

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

      possible: Joi.array().items(this.IntgrAvailableCreditLimit()),
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
      gstin: Joi.string().allow("").required(),

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

  static PlatformFees() {
    return Joi.object({
      customerAcquisitionFee: Joi.number().required(),

      transactionFee: Joi.number().required(),
    });
  }

  static CommercialResponse() {
    return Joi.object({
      data: this.Commercial().required(),
    });
  }

  static BlockUserRequestSchema() {
    return Joi.object({
      status: Joi.boolean(),

      userid: Joi.array().items(Joi.string().allow("")),

      reason: Joi.string().allow(""),
    });
  }

  static EditEmailRequestSchema() {
    return Joi.object({
      email: Joi.string().allow(""),
    });
  }

  static SendVerificationLinkMobileRequestSchema() {
    return Joi.object({
      verified: Joi.boolean(),

      active: Joi.boolean(),

      countryCode: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      primary: Joi.boolean(),
    });
  }

  static EditMobileRequestSchema() {
    return Joi.object({
      countryCode: Joi.string().allow(""),

      phone: Joi.string().allow(""),
    });
  }

  static UpdateEmail() {
    return Joi.object({
      email: Joi.string().allow("").required(),

      additionalProperties: Joi.string().allow(""),
    });
  }

  static EditProfileRequestSchema() {
    return Joi.object({
      firstName: Joi.string().allow("").required(),

      lastName: Joi.string().allow("").required(),

      countryCode: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      email: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      registrationToken: Joi.string().allow(""),
    });
  }

  static EditProfileMobileSchema() {
    return Joi.object({
      phone: Joi.string().allow(""),

      countryCode: Joi.string().allow(""),
    });
  }

  static SendEmailOtpRequestSchema() {
    return Joi.object({
      email: Joi.string().allow(""),

      action: Joi.string().allow(""),

      token: Joi.string().allow(""),

      registerToken: Joi.string().allow(""),
    });
  }

  static VerifyEmailOtpRequestSchema() {
    return Joi.object({
      email: Joi.string().allow(""),

      action: Joi.string().allow(""),

      registerToken: Joi.string().allow(""),

      otp: Joi.string().allow(""),
    });
  }

  static ReSendMobileOtpRequestSchema() {
    return Joi.object({
      captchaCode: Joi.string().allow(""),

      token: Joi.string().allow("").required(),

      androidHash: Joi.string().allow(""),
    });
  }

  static ResetPasswordSuccess() {
    return Joi.object({
      status: Joi.string().allow(""),
    });
  }

  static RegisterFormSuccess() {
    return Joi.object({
      email: Joi.string().allow(""),

      resendTimer: Joi.number(),

      resendToken: Joi.string().allow(""),

      resendEmailToken: Joi.string().allow(""),

      registerToken: Joi.string().allow(""),

      success: Joi.boolean(),

      requestId: Joi.string().allow(""),

      message: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      countryCode: Joi.string().allow(""),

      verifyEmailOtp: Joi.boolean(),

      verifyMobileOtp: Joi.boolean(),

      userExists: Joi.boolean(),
    });
  }

  static VerifyEmailSuccess() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static BlockUserSuccess() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static EmailOtpSuccess() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static VerifyEmailOTPSuccess() {
    return Joi.object({
      user: this.UserSchema(),

      verifyEmailLink: Joi.boolean(),
    });
  }

  static SendMobileVerifyLinkSuccess() {
    return Joi.object({
      verifyMobileLink: Joi.boolean(),
    });
  }

  static SendEmailVerifyLinkSuccess() {
    return Joi.object({
      verifyEmailLink: Joi.boolean(),
    });
  }

  static UserSearchResponseSchema() {
    return Joi.object({
      users: Joi.array().items(this.UserSchema()),
    });
  }

  static CustomerListResponseSchema() {
    return Joi.object({
      items: Joi.array().items(this.UserSchema()),

      page: this.PaginationSchema(),
    });
  }

  static PaginationSchema() {
    return Joi.object({
      size: Joi.number(),

      itemTotal: Joi.number(),

      hasNext: Joi.boolean(),

      type: Joi.string().allow(""),

      current: Joi.number(),
    });
  }

  static UserObjectSchema() {
    return Joi.object({
      user: this.UserSchema(),
    });
  }

  static CreateOrganization() {
    return Joi.object({
      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      website: Joi.string().allow(""),

      disbursementAccountHolderName: Joi.string().allow(""),

      disbursementAccountNumber: Joi.string().allow(""),

      disbursementIfsc: Joi.string().allow(""),

      businessName: Joi.string().allow(""),

      email: Joi.string().allow(""),

      businessAddress: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      b2b: Joi.boolean(),

      b2c: Joi.boolean(),

      docType: Joi.string().allow(""),

      docNumber: Joi.string().allow(""),

      organizationId: Joi.string().allow(""),
    });
  }

  static UpdateLogo() {
    return Joi.object({
      logo: Joi.string().allow(""),
    });
  }

  static AddMetaSchemaResponse() {
    return Joi.object({
      merchantId: Joi.string().allow(""),

      lenderId: Joi.string().allow(""),

      mid: Joi.string().allow(""),

      data: Joi.any(),
    });
  }

  static UpdateOrganization() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      name: Joi.any(),

      logo: Joi.any(),

      website: Joi.any(),

      disbursementAccountHolderName: Joi.any(),

      disbursementAccountNumber: Joi.any(),

      disbursementIfsc: Joi.any(),

      active: Joi.boolean(),
    });
  }

  static UpdateFinancials() {
    return Joi.object({
      disbursementAccountHolderName: Joi.string().allow("").required(),

      disbursementAccountNumber: Joi.string().allow("").required(),

      disbursementIfsc: Joi.string().allow("").required(),
    });
  }

  static Documents() {
    return Joi.object({
      docType: Joi.string().allow("").required(),

      docNumber: Joi.string().allow("").required(),
    });
  }

  static FinancialDetails() {
    return Joi.object({
      disbursementAccountHolderName: Joi.string().allow(""),

      disbursementAccountNumber: Joi.string().allow(""),

      disbursementIfsc: Joi.string().allow(""),

      b2b: Joi.boolean(),

      b2c: Joi.boolean(),

      businessName: Joi.string().allow(""),

      email: Joi.string().allow(""),

      businessAddress: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      documents: Joi.array().items(this.Documents()),
    });
  }

  static GetOrganization() {
    return Joi.object({
      organizationId: Joi.string().allow(""),

      createdAt: Joi.string().allow(""),

      updatedAt: Joi.string().allow(""),

      isAdmin: Joi.boolean(),

      name: Joi.string().allow(""),

      isActive: Joi.boolean(),
    });
  }

  static OrganizationDetails() {
    return Joi.object({
      name: Joi.string().allow(""),

      organizationId: Joi.string().allow(""),

      isAdmin: Joi.boolean(),

      createdAt: Joi.string().allow(""),

      updatedAt: Joi.string().allow(""),

      deletedAt: Joi.string().allow(""),

      isActive: Joi.boolean(),

      logo: Joi.string().allow(""),

      website: Joi.string().allow(""),

      disbursementAccountHolderName: Joi.string().allow(""),

      disbursementAccountNumber: Joi.string().allow(""),

      disbursementIfsc: Joi.string().allow(""),
    });
  }

  static Organization() {
    return Joi.object({
      id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      active: Joi.boolean(),

      createdAt: Joi.string().allow(""),

      updatedAt: Joi.string().allow(""),

      deletedAt: Joi.string().allow(""),
    });
  }

  static OrganizationList() {
    return Joi.object({
      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      id: Joi.boolean(),

      createdAt: Joi.string().allow(""),

      updatedAt: Joi.string().allow(""),

      deletedAt: Joi.string().allow(""),

      isActive: Joi.boolean(),

      epikId: Joi.string().allow(""),

      website: Joi.string().allow(""),

      disbursementAccountHolderName: Joi.string().allow(""),

      disbursementAccountNumber: Joi.string().allow(""),

      disbursementIfsc: Joi.string().allow(""),
    });
  }

  static OrganizationCount() {
    return Joi.object({
      count: Joi.string().allow(""),
    });
  }

  static TeamMembers() {
    return Joi.object({
      members: Joi.array().items(this.Member()),
    });
  }

  static Member() {
    return Joi.object({
      id: Joi.string().allow(""),

      userId: Joi.string().allow(""),

      organizationId: Joi.string().allow(""),

      isAdmin: Joi.boolean(),

      createdAt: Joi.string().allow(""),

      updatedAt: Joi.string().allow(""),

      deletedAt: Joi.string().allow(""),

      profile: this.Profile(),
    });
  }

  static Profile() {
    return Joi.object({
      id: Joi.string().allow(""),

      userId: Joi.string().allow(""),

      organizationId: Joi.string().allow(""),

      isAdmin: Joi.boolean(),

      createdAt: Joi.string().allow(""),

      updatedAt: Joi.string().allow(""),

      deletedAt: Joi.string().allow(""),
    });
  }

  static AddTeamMember() {
    return Joi.object({
      countryCode: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      email: Joi.string().allow(""),

      userIsAdmin: Joi.boolean(),
    });
  }

  static UpdateTeamMemberRole() {
    return Joi.object({
      userIsAdmin: Joi.boolean(),

      userId: Joi.string().allow(""),
    });
  }

  static RemoveTeamMemberResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static AddTeamMemberResponse() {
    return Joi.object({
      id: Joi.string().allow(""),

      userId: Joi.string().allow(""),

      organizationId: Joi.string().allow(""),

      isAdmin: Joi.boolean(),

      createdAt: Joi.string().allow(""),

      updatedAt: Joi.string().allow(""),

      deletedAt: Joi.string().allow(""),
    });
  }

  static ApiKey() {
    return Joi.object({
      key: Joi.string().allow(""),

      secret: Joi.string().allow(""),
    });
  }

  static UpdateApiHook() {
    return Joi.object({
      apiKey: Joi.string().allow("").required(),

      url: Joi.string().allow("").required(),

      customHeaders: Joi.any(),
    });
  }

  static ApiHookDetails() {
    return Joi.object({
      apiKey: Joi.string().allow("").required(),

      url: Joi.string().allow("").required(),

      customHeaders: Joi.any(),

      createdAt: Joi.string().allow(""),

      updatedAt: Joi.string().allow(""),
    });
  }

  static UpdateApiHookResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static OrganizationIp() {
    return Joi.object({
      id: Joi.string().allow(""),

      ip: Joi.string().allow("").required(),
    });
  }

  static AddOrganizationIpDetails() {
    return Joi.object({
      organizationIps: Joi.array().items(this.OrganizationIp()),

      delete: Joi.string().allow(""),
    });
  }

  static AddUpdateCsvFileResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static AddUpdateCsvFileRequest() {
    return Joi.object({
      csv: Joi.string().allow(""),

      organizationId: Joi.string().allow(""),
    });
  }

  static CsvFile() {
    return Joi.object({
      csv: Joi.string().allow(""),
    });
  }

  static AddReportCsvFileResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static AddReportCsvFileRequest() {
    return Joi.object({
      csv: Joi.string().allow(""),

      organizationId: Joi.string().allow(""),

      name: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static ReportCsvFileResponse() {
    return Joi.object({
      csv: Joi.string().allow(""),
    });
  }

  static AddReportRequestArray() {
    return Joi.object({
      mobile: Joi.string().allow(""),

      merchantId: Joi.string().allow(""),

      category: Joi.string().allow(""),

      shopName: Joi.string().allow(""),

      legalName: Joi.string().allow(""),

      firstName: Joi.string().allow(""),

      middleName: Joi.string().allow(""),

      lastName: Joi.string().allow(""),

      aadhaar: Joi.string().allow(""),

      nameOnPan: Joi.string().allow(""),

      gstNumber: Joi.string().allow(""),

      gstBusinessName: Joi.string().allow(""),

      panNumber: Joi.string().allow(""),

      udyam: Joi.string().allow(""),

      ownershipType: Joi.string().allow(""),

      address: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      license1Type: Joi.string().allow(""),

      license1: Joi.string().allow(""),

      license2Type: Joi.string().allow(""),

      license2: Joi.string().allow(""),
    });
  }

  static AddReportRequest() {
    return Joi.object({
      businessDetails: Joi.array().items(Joi.any()),
    });
  }

  static AddReportResponseArray() {
    return Joi.object({
      mobile: Joi.string().allow(""),

      merchantId: Joi.string().allow(""),

      anchorId: Joi.string().allow(""),

      category: Joi.string().allow(""),

      shopName: Joi.string().allow(""),

      legalName: Joi.string().allow(""),

      firstName: Joi.string().allow(""),

      middleName: Joi.string().allow(""),

      lastName: Joi.string().allow(""),

      aadhaar: Joi.string().allow(""),

      nameOnPan: Joi.string().allow(""),

      gstNumber: Joi.string().allow(""),

      gstBusinessName: Joi.string().allow(""),

      panNumber: Joi.string().allow(""),

      udyam: Joi.string().allow(""),

      ownershipType: Joi.string().allow(""),

      address: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      license1Type: Joi.string().allow(""),

      license1: Joi.string().allow(""),

      license2Type: Joi.string().allow(""),

      license2: Joi.string().allow(""),
    });
  }

  static AddReportResponse() {
    return Joi.object({
      businessDetails: Joi.array().items(this.AddReportResponseArray()),
    });
  }

  static VintageDataResponseObject() {
    return Joi.object({
      month: Joi.string().allow(""),

      year: Joi.number(),

      revenue: Joi.string().allow(""),

      businessId: Joi.string().allow(""),

      createdBy: Joi.string().allow(""),

      id: Joi.string().allow(""),

      createdAt: Joi.string().allow(""),

      updatedBy: Joi.string().allow(""),

      updatedAt: Joi.string().allow(""),
    });
  }

  static VintageDataResponse() {
    return Joi.object({
      vintageData: Joi.array().items(this.VintageDataResponseObject()),
    });
  }

  static AddSkuRequestArray() {
    return Joi.object({
      sku: Joi.string().allow("").required(),

      productName: Joi.string().allow("").required(),

      creditPurchaseOptionFlag: Joi.string().allow("").required(),

      effectiveDates: Joi.string().allow("").required(),

      organizationId: Joi.string().allow("").required(),
    });
  }

  static AddSkuRequest() {
    return Joi.object({
      skuDetails: Joi.array().items(this.AddSkuRequestArray()),
    });
  }

  static AddSkuResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static RestrictedSkuSchema() {
    return Joi.object({
      skuDetails: Joi.array().items(Joi.any()),
    });
  }

  static OrganizationIpResponse() {
    return Joi.object({
      organizationId: Joi.string().allow("").required(),

      ip: Joi.string().allow("").required(),

      createdAt: Joi.string().allow(""),

      updatedAt: Joi.string().allow(""),

      id: Joi.string().allow("").required(),
    });
  }

  static OrganizationIpDetails() {
    return Joi.object({
      organizationIps: Joi.array().items(this.OrganizationIpResponse()),
    });
  }

  static RefundSuccess() {
    return Joi.object({
      status: Joi.string().allow("").required(),

      message: Joi.number().required(),

      transactionId: Joi.string().allow("").required(),

      refundId: Joi.string().allow("").required(),
    });
  }

  static RefundItem() {
    return Joi.object({
      items: Joi.array().items(Joi.any()).required(),
    });
  }

  static ValidateCredentialsData() {
    return Joi.object({
      success: Joi.boolean().required(),

      organizationId: Joi.string().allow("").required(),

      organizationName: Joi.string().allow(""),
    });
  }

  static ValidateCredentialsResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      meta: this.IntegrationResponseMeta().required(),

      data: this.ValidateCredentialsData().required(),

      __headers: Joi.any(),
    });
  }

  static PaymentLinkResponse() {
    return Joi.object({
      status: Joi.string().allow(""),

      message: Joi.string().allow(""),

      paymentLink: Joi.string().allow(""),
    });
  }

  static ApplicationCutomer() {
    return Joi.object({
      countryCode: Joi.string().allow(""),

      mobile: Joi.string().allow("").required(),

      uid: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static GeoLocation() {
    return Joi.object({
      latitude: Joi.number().required(),

      longitude: Joi.number().required(),
    });
  }

  static Address() {
    return Joi.object({
      line1: Joi.string().allow(""),

      line2: Joi.string().allow(""),

      city: Joi.string().allow(""),

      state: Joi.string().allow(""),

      country: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      type: Joi.string().allow(""),

      geoLocation: this.GeoLocation(),
    });
  }

  static OrderItems() {
    return Joi.object({
      category: Joi.string().allow(""),

      sku: Joi.string().allow(""),

      rate: Joi.number(),

      quantity: Joi.number(),
    });
  }

  static PaymentLinkRequest() {
    return Joi.object({
      autoCapture: Joi.boolean(),

      lenderId: Joi.string().allow(""),

      emiTenure: Joi.number(),

      customer: this.ApplicationCutomer().required(),

      order: this.Order().required(),

      device: this.Device(),

      meta: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  static UpdateLenderStatusSchemaRequest() {
    return Joi.object({
      merchantId: Joi.string().allow(""),

      enable: Joi.boolean(),
    });
  }

  static UpdateLenderStatusSchemaResponse() {
    return Joi.object({
      merchantId: Joi.string().allow(""),

      lenderId: Joi.string().allow(""),

      mid: Joi.string().allow(""),

      enable: Joi.boolean(),

      data: Joi.any(),
    });
  }

  static LenderTheme() {
    return Joi.object({
      iconUrl: Joi.string().allow(""),

      logoUrl: Joi.string().allow(""),
    });
  }

  static LenderDetails() {
    return Joi.object({
      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      id: Joi.string().allow(""),

      theme: this.LenderTheme(),
    });
  }

  static OutstandingData() {
    return Joi.object({
      lenderDetails: this.LenderDetails(),

      availableLimit: Joi.number(),

      creditLimit: Joi.number(),

      dueAmount: Joi.number(),

      outstandingAmount: Joi.number(),

      dueDate: Joi.string().allow(""),
    });
  }

  static OutstandingDetailsResponse() {
    return Joi.object({
      outstandingDetails: Joi.array().items(this.OutstandingData()),
    });
  }

  static CreateUserRequestSchema() {
    return Joi.object({
      mobile: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      firstName: Joi.string().allow(""),

      lastName: Joi.string().allow(""),

      gender: Joi.string().allow(""),
    });
  }

  static CreateUserResponseSchema() {
    return Joi.object({
      user: this.UserSchema(),
    });
  }

  static RepaymentUsingNetbanking() {
    return Joi.object({
      amount: Joi.number().required(),

      bankId: Joi.string().allow("").required(),

      bankName: Joi.string().allow("").required(),

      chargeToken: Joi.string().allow(""),

      transactionId: Joi.string().allow(""),
    });
  }

  static RepaymentUsingNetbankingResponse() {
    return Joi.object({
      form: Joi.string().allow(""),

      isDifferent: Joi.boolean(),

      outstanding: Joi.string().allow(""),
    });
  }

  static RepaymentUsingUPI() {
    return Joi.object({
      amount: Joi.number().required(),

      vpa: Joi.string().allow("").required(),

      chargeToken: Joi.string().allow(""),

      transactionId: Joi.string().allow(""),
    });
  }

  static RepaymentUsingUPIResponse() {
    return Joi.object({
      isDifferent: Joi.boolean(),

      outstanding: Joi.string().allow(""),

      status: Joi.string().allow(""),

      intentId: Joi.string().allow(""),

      transactionId: Joi.string().allow(""),

      expiry: Joi.number(),

      interval: Joi.number(),
    });
  }

  static RegisterUPIMandateRequest() {
    return Joi.object({
      vpa: Joi.string().allow(""),
    });
  }

  static RegisterUPIMandateResponse() {
    return Joi.object({
      transactionId: Joi.string().allow(""),

      expiry: Joi.number(),

      interval: Joi.number(),
    });
  }

  static RegisterUPIMandateStatusCheckRequest() {
    return Joi.object({
      transactionId: Joi.string().allow(""),
    });
  }

  static RegisterMandateStatusCheckResponse() {
    return Joi.object({
      status: Joi.string().allow(""),
    });
  }

  static TransactionStatusRequest() {
    return Joi.object({
      intentId: Joi.string().allow("").required(),

      transactionId: Joi.string().allow("").required(),
    });
  }

  static TransactionStatusResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      methodType: Joi.string().allow(""),

      methodSubType: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static BankList() {
    return Joi.object({
      bankId: Joi.string().allow(""),

      bankName: Joi.string().allow(""),

      rank: Joi.number(),

      popular: Joi.boolean(),

      imageUrl: Joi.string().allow(""),
    });
  }

  static PaymentsObject() {
    return Joi.object({
      title: Joi.string().allow(""),

      kind: Joi.string().allow(""),

      options: Joi.array().items(this.PaymentOptions()),
    });
  }

  static OutstandingDetail() {
    return Joi.object({
      status: Joi.string().allow(""),

      action: Joi.boolean(),

      message: this.OutstandingMessage(),

      credit: this.UserCredit(),

      dueSummary: this.DueSummaryOutstanding(),

      outstandingSummary: this.OutstandingSummary(),

      entityMapId: Joi.string().allow(""),
    });
  }

  static OutstandingSummary() {
    return Joi.object({
      totalOutstanding: Joi.number(),

      totalOutstandingWithInterest: Joi.number(),

      totalOutstandingPenalty: Joi.number(),

      availableLimit: Joi.number(),

      isOverdue: Joi.boolean(),

      dueFromDate: Joi.string().allow(""),

      repaymentSummary: Joi.array().items(this.RepaymentSummaryOutstanding()),
    });
  }

  static DueSummaryOutstanding() {
    return Joi.object({
      dueDate: Joi.string().allow(""),

      totalDue: Joi.number(),

      totalDueWithInterest: Joi.number(),

      totalDuePenalty: Joi.number(),

      dueTransactions: Joi.array().items(this.DueTransactionsOutstanding()),

      minAmntDue: Joi.number(),
    });
  }

  static OutstandingMessage() {
    return Joi.object({
      dueMessage: Joi.string().allow(""),

      backgroundColor: Joi.string().allow(""),

      textColor: Joi.string().allow(""),

      isFlexiRepayEnabled: Joi.boolean(),
    });
  }

  static UserCredit() {
    return Joi.object({
      availableLimit: Joi.number(),

      approvedLimit: Joi.number(),

      isEligibleToDrawdown: Joi.boolean(),
    });
  }

  static DueTransactionsOutstanding() {
    return Joi.object({
      loanRequestNo: Joi.string().allow(""),

      merchantCategory: Joi.string().allow(""),

      installmentAmountWithInterest: Joi.number(),

      installmentAmount: Joi.number(),

      dueAmount: Joi.number(),

      loanType: Joi.string().allow(""),

      installmentNo: Joi.string().allow(""),

      installmentDueDate: Joi.string().allow(""),

      isPastDue: Joi.boolean(),

      isPenaltyCharged: Joi.boolean(),

      penaltyAmount: Joi.number(),

      noOfDaysPenaltyCharged: Joi.number(),

      daysDifference: Joi.number(),

      lenderTransactionId: Joi.string().allow(""),
    });
  }

  static RepaymentSummaryOutstanding() {
    return Joi.object({
      loanRequestNo: Joi.string().allow(""),

      loanType: Joi.string().allow(""),

      merchantCategory: Joi.string().allow(""),

      isBbillingTransaction: Joi.boolean(),

      totalInstallmentAmount: Joi.number(),

      totalInstallmentAmountWithInterest: Joi.number(),

      outstandingDetails: Joi.array().items(this.OutstandingDetailsRepayment()),
    });
  }

  static OutstandingDetailsRepayment() {
    return Joi.object({
      installmentAmountWithInterest: Joi.number(),

      installmentAmount: Joi.number(),

      dueAmount: Joi.number(),

      installmentNo: Joi.string().allow(""),

      installmentDueDate: Joi.string().allow(""),

      isPastDue: Joi.boolean(),

      loanType: Joi.string().allow(""),

      isPenaltyCharged: Joi.boolean(),

      penaltyAmount: Joi.number(),

      noOfDaysPenaltyCharged: Joi.number(),

      lenderTransactionId: Joi.string().allow(""),
    });
  }

  static PaymentOptionsResponse() {
    return Joi.object({
      paymentOptions: Joi.array().items(this.PaymentsObject()),
    });
  }

  static CheckEMandateStatusRequest() {
    return Joi.object({
      orderId: Joi.string().allow(""),

      paymentId: Joi.string().allow(""),

      scheduledEnd: Joi.string().allow(""),

      ruleAmountValue: Joi.string().allow(""),
    });
  }

  static AutoPayStatusResponse() {
    return Joi.object({
      status: Joi.string().allow(""),
    });
  }

  static MetaResponse() {
    return Joi.object({
      timestamp: Joi.string().allow(""),

      version: Joi.string().allow(""),

      product: Joi.string().allow(""),

      requestId: Joi.string().allow(""),
    });
  }

  static OutstandingDetailsData() {
    return Joi.object({
      outstandingDetails: Joi.array().items(this.OutstandingData()),
    });
  }
}

class CustomerValidator {
  static validate() {
    return Joi.object({
      body: Validator.ValidateCustomer().required(),
    }).required();
  }

  static createTransaction() {
    return Joi.object({
      body: Validator.CreateTransaction().required(),
    }).required();
  }

  static link() {
    return Joi.object({
      body: Validator.LinkAccount().required(),
    }).required();
  }

  static unlink() {
    return Joi.object({
      body: Validator.UnlinkAccount().required(),
    }).required();
  }

  static refund() {
    return Joi.object({
      body: Validator.Refund().required(),
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
      body: Validator.GetSchemesRequest().required(),
    }).required();
  }

  static checkEligibility() {
    return Joi.object({
      body: Validator.CheckEligibilityRequest().required(),
    }).required();
  }

  static getRepaymentLink() {
    return Joi.object({
      body: Validator.RepaymentRequest().required(),
    }).required();
  }

  static getAll() {
    return Joi.object({
      page: Joi.number().required(),
      limit: Joi.number().required(),
      name: Joi.string().allow(""),
      id: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
    }).required();
  }

  static addVintageData() {
    return Joi.object({
      body: Validator.VintageData().required(),
    }).required();
  }
}

class CreditValidator {
  static getOrderStatus() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
    }).required();
  }

  static getEligiblePlans() {
    return Joi.object({
      lenderSlug: Joi.string().allow("").required(),
      body: Validator.EligiblePlansRequest().required(),
    }).required();
  }

  static updateOrderDeliveryStatus() {
    return Joi.object({
      body: Validator.OrderDeliveryUpdatesBody().required(),
    }).required();
  }

  static getTransactions() {
    return Joi.object({
      mobile: Joi.string().allow("").required(),
      countryCode: Joi.string().allow(""),
      page: Joi.number(),
      limit: Joi.number(),
      orderId: Joi.string().allow(""),
      transactionId: Joi.string().allow(""),
      type: Joi.any(),
      status: Joi.any(),
      onlySelf: Joi.boolean(),
      granularity: Joi.string().allow(""),
    }).required();
  }
}

class MultiKycValidator {
  static approvedLenders() {
    return Joi.object({}).required();
  }

  static getLimit() {
    return Joi.object({
      body: Validator.GetLimitRequest().required(),
    }).required();
  }
}

class MerchantValidator {
  static getAccessToken() {
    return Joi.object({}).required();
  }

  static renewAccessToken() {
    return Joi.object({
      body: Validator.RefreshTokenRequest().required(),
    }).required();
  }

  static validateCredentials() {
    return Joi.object({}).required();
  }
}

class PaymentsValidator {
  static getOutStandingDetails() {
    return Joi.object({
      mobile: Joi.string().allow("").required(),
      lenderSlugs: Joi.array().items(Joi.string().allow("")),
    }).required();
  }
}

module.exports = {
  CustomerValidator,
  CreditValidator,
  MultiKycValidator,
  MerchantValidator,
  PaymentsValidator,
};
