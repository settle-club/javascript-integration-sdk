



##### [Back to Platform docs](./README.md)

## MultiKyc Methods
Will deprecate Hawkeye
* [approvedLenders](#approvedlenders)



## Methods with example and description


### approvedLenders
Approved lenders



```javascript
// Promise
const promise =  
        multiKyc.approvedLenders(
            
            
        
        );

// Async/Await
const data = await 
                    multiKyc.approvedLenders(
                    
                    
                    );
```








*Returned Response:*




[ApprovedLendersTransaction](#ApprovedLendersTransaction)






<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---



### Schemas

 
 
 #### [Lender](#Lender)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | name | string |  no  |  |
 | active | boolean |  no  |  |
 | imageUrl | string |  no  |  |
 | slug | string |  no  |  |
 | theme | any |  no  |  |
 | b2b | boolean |  no  |  |
 | b2c | boolean |  no  |  |
 | merchantConfigSchema | string |  no  |  |
 | createdAt | string |  no  |  |
 | updatedAt | string |  no  |  |
 | deletedAt | string |  no  |  |
 | meta | any |  no  |  |
 | metaSchema | any |  no  |  |

---


 
 
 #### [UserLender](#UserLender)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  |  |
 | userId | string |  yes  |  |
 | lenderId | string |  yes  |  |
 | active | boolean |  no  |  |
 | status | string |  yes  |  |
 | createdAt | string |  yes  |  |
 | updatedAt | string |  yes  |  |
 | deletedAt | string |  no  |  |
 | approvedLimit | number |  yes  |  |
 | entityId | string |  no  |  |
 | entityMapId | string |  no  |  |

---


 
 
 #### [SourceCreditReport](#SourceCreditReport)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  |  |
 | userId | string |  yes  |  |
 | pan | string |  yes  |  |
 | name | string |  yes  |  |
 | mobile | string |  yes  |  |
 | bureau | string |  yes  |  |
 | score | string |  yes  |  |
 | report | string |  yes  |  |
 | createdAt | string |  no  |  |

---


 
 
 #### [Document](#Document)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  |  |
 | userId | string |  yes  |  |
 | imageUrl | string |  yes  |  |
 | number | string |  yes  |  |
 | detail | any |  yes  |  |
 | valid | boolean |  yes  |  |
 | createdAt | string |  yes  |  |
 | updatedAt | string |  yes  |  |
 | deletedAt | string |  no  |  |
 | entityId | string |  no  |  |

---


 
 
 #### [UserKycDetail](#UserKycDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  |  |
 | userId | string |  yes  |  |
 | status | string |  yes  |  |
 | type | string |  yes  |  |
 | remark | string |  yes  |  |
 | profileType | string |  yes  |  |
 | active | boolean |  yes  |  |
 | expiryDate | string |  no  |  |
 | createdAt | string |  no  |  |
 | updatedAt | string |  no  |  |
 | deletedAt | string |  no  |  |
 | lenderId | string |  yes  |  |
 | lender | [Lender](#Lender) |  no  |  |
 | entityMapId | string |  no  |  |
 | entityId | string |  no  |  |

---


 
 
 #### [Form](#Form)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | name | string |  no  |  |
 | title | string |  no  |  |
 | subtitle | string |  no  |  |
 | action | string |  no  |  |
 | form | any |  no  |  |
 | uiSchema | any |  no  |  |
 | workflowId | string |  no  |  |

---


 
 
 #### [LenderKycStepMap](#LenderKycStepMap)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | step | string |  yes  |  |
 | stepIndex | number |  yes  |  |
 | lenderId | string |  yes  |  |
 | active | boolean |  yes  |  |
 | rules | any |  yes  |  |
 | profileType | string |  yes  |  |
 | createdAt | string |  no  |  |
 | updatedAt | string |  no  |  |
 | deletedAt | string |  no  |  |
 | name | string |  yes  |  |
 | description | string |  yes  |  |
 | iconUrl | string |  yes  |  |
 | isInteractive | boolean |  yes  |  |
 | formId | string |  no  |  |
 | merchantId | string |  no  |  |
 | form | [Form](#Form) |  yes  |  |
 | docSchema | any |  yes  |  |

---


 
 
 #### [UserKycLenderStepMap](#UserKycLenderStepMap)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  |  |
 | userId | string |  yes  |  |
 | lenderKycStepMapId | string |  yes  |  |
 | userKycDetailId | string |  yes  |  |
 | lenderId | string |  yes  |  |
 | ruleState | any |  yes  |  |
 | active | boolean |  yes  |  |
 | status | string |  yes  |  |
 | documentId | string |  no  |  |
 | createdAt | string |  yes  |  |
 | updatedAt | string |  yes  |  |
 | deletedAt | string |  no  |  |
 | lenderKycStepMap | [LenderKycStepMap](#LenderKycStepMap) |  no  |  |
 | entityMapId | string |  no  |  |
 | entityId | string |  no  |  |
 | updatedBy | string |  no  |  |

---


 
 
 #### [ProofOfIdentity](#ProofOfIdentity)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | dob | string |  yes  |  |
 | hashedEmail | string |  yes  |  |
 | gender | string |  yes  |  |
 | hashedMobileNumber | string |  yes  |  |
 | name | string |  yes  |  |

---


 
 
 #### [ProofOfAddress](#ProofOfAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | careOf | string |  yes  |  |
 | country | string |  yes  |  |
 | district | string |  yes  |  |
 | house | string |  yes  |  |
 | landmark | string |  yes  |  |
 | locality | string |  yes  |  |
 | pincode | string |  yes  |  |
 | postOffice | string |  yes  |  |
 | state | string |  yes  |  |
 | street | string |  yes  |  |
 | subDistrict | string |  yes  |  |
 | vtc | string |  yes  |  |

---


 
 
 #### [EAadhaarData](#EAadhaarData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | aadhaarReferenceNumber | string |  yes  |  |
 | aadhaarUid | string |  yes  |  |
 | image | string |  yes  |  |
 | proofOfIdentity | [ProofOfIdentity](#ProofOfIdentity) |  yes  |  |
 | proofOfAddress | [ProofOfAddress](#ProofOfAddress) |  yes  |  |
 | xml | string |  no  |  |
 | pdf | string |  no  |  |
 | address | string |  no  |  |

---


 
 
 #### [EntityMapDto](#EntityMapDto)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  |  |
 | merchantId | string |  no  |  |
 | status | string |  no  |  |
 | lenderId | string |  yes  |  |
 | limit | number |  no  |  |
 | creditType | string |  no  |  |
 | userId | string |  yes  |  |
 | entityId | string |  yes  |  |

---


 
 
 #### [EntityDto](#EntityDto)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  |  |
 | type | string |  no  |  |
 | address | string |  no  |  |
 | name | string |  no  |  |
 | gender | string |  no  |  |
 | dob | string |  no  |  |
 | userId | string |  yes  |  |

---


 
 
 #### [MerchantSchema](#MerchantSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  |  |
 | name | string |  no  |  |
 | logo | string |  no  |  |
 | website | string |  no  |  |
 | apiHook | string |  no  |  |
 | epikId | string |  no  |  |
 | disbursementAccountHolderName | string |  no  |  |
 | disbursementAccountNumber | string |  no  |  |
 | disbursementIfsc | string |  no  |  |
 | createdBy | string |  no  |  |
 | active | boolean |  no  |  |
 | category | string |  no  |  |
 | createdAt | string |  no  |  |
 | updatedAt | string |  no  |  |
 | deletedAt | string |  no  |  |
 | businessName | string |  no  |  |
 | email | string |  no  |  |
 | businessAddress | string |  no  |  |
 | pincode | string |  no  |  |
 | b2b | boolean |  no  |  |
 | b2c | boolean |  no  |  |

---


 
 
 #### [Consent](#Consent)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | text | string |  yes  |  |
 | type | string |  yes  |  |

---


 
 
 #### [ValidatePanRequest](#ValidatePanRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | pan | string |  yes  |  |
 | consents | [[Consent](#Consent)] |  yes  |  |

---


 
 
 #### [BankDetails](#BankDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | accountType | string |  yes  |  |
 | bankName | string |  yes  |  |
 | ifsc | string |  yes  |  |
 | accountNumber | string |  yes  |  |
 | accountHolderName | string |  yes  |  |

---


 
 
 #### [DocumentData](#DocumentData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | selfie | string |  no  |  |
 | video | string |  no  |  |
 | digilockerCode | string |  no  |  |
 | bankDetails | [BankDetails](#BankDetails) |  no  |  |

---


 
 
 #### [ConfirmPanRequest](#ConfirmPanRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | pan | string |  yes  |  |
 | name | string |  yes  |  |
 | entity | string |  no  |  |
 | merchantId | string |  no  |  |
 | onboardingToken | string |  no  |  |

---


 
 
 #### [LivelinessDetails](#LivelinessDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | selfie | string |  yes  |  |
 | video | string |  yes  |  |

---


 
 
 #### [UploadDocumentRequest](#UploadDocumentRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user | any |  no  |  |
 | documentData | any |  no  |  |
 | lenderSlug | string |  yes  |  |
 | kycStep | string |  yes  |  |
 | merchantId | string |  no  |  |
 | entityMapId | string |  no  |  |

---


 
 
 #### [UploadDocumentRequestV1](#UploadDocumentRequestV1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | kycStep | string |  yes  |  |
 | entityMapId | string |  yes  |  |
 | documentData | any |  yes  |  |

---


 
 
 #### [UploadDocumentRequestV3](#UploadDocumentRequestV3)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | kycStep | string |  yes  |  |
 | entityMapId | string |  yes  |  |
 | documentData | any |  yes  |  |

---


 
 
 #### [AadhaarRequest](#AadhaarRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | digilockerCode | string |  no  |  |

---


 
 
 #### [UploadAadhaarRequest](#UploadAadhaarRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | documentData | [AadhaarRequest](#AadhaarRequest) |  no  |  |
 | user | any |  no  |  |
 | lenderSlug | string |  yes  |  |
 | kycStep | string |  yes  |  |
 | merchantId | string |  no  |  |
 | entityMapId | string |  no  |  |

---


 
 
 #### [UploadLivelinessRequest](#UploadLivelinessRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | documentData | [LivelinessDetails](#LivelinessDetails) |  no  |  |
 | user | any |  no  |  |
 | lenderSlug | string |  yes  |  |
 | kycStep | string |  yes  |  |
 | merchantId | string |  no  |  |
 | entityMapId | string |  no  |  |

---


 
 
 #### [UploadAadhaarRequestV1](#UploadAadhaarRequestV1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | documentData | [AadhaarRequest](#AadhaarRequest) |  yes  |  |
 | kycStep | string |  yes  |  |
 | entityMapId | string |  yes  |  |

---


 
 
 #### [UploadLivelinessRequestV1](#UploadLivelinessRequestV1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | documentData | [LivelinessDetails](#LivelinessDetails) |  yes  |  |
 | kycStep | string |  yes  |  |
 | entityMapId | string |  yes  |  |

---


 
 
 #### [UploadAadhaarRequestV2](#UploadAadhaarRequestV2)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | documentData | [AadhaarRequest](#AadhaarRequest) |  no  |  |
 | user | any |  no  |  |
 | lenderSlug | string |  yes  |  |
 | kycStep | string |  yes  |  |
 | merchantId | string |  no  |  |
 | entityMapId | string |  no  |  |

---


 
 
 #### [UploadLivelinessRequestV2](#UploadLivelinessRequestV2)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | documentData | [LivelinessDetails](#LivelinessDetails) |  no  |  |
 | user | any |  no  |  |
 | lenderSlug | string |  yes  |  |
 | kycStep | string |  yes  |  |
 | merchantId | string |  no  |  |
 | entityMapId | string |  no  |  |

---


 
 
 #### [UploadAadhaarRequestV3](#UploadAadhaarRequestV3)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | documentData | [AadhaarRequest](#AadhaarRequest) |  yes  |  |
 | kycStep | string |  yes  |  |
 | entityMapId | string |  yes  |  |

---


 
 
 #### [UploadLivelinessRequestV3](#UploadLivelinessRequestV3)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | documentData | [LivelinessDetails](#LivelinessDetails) |  yes  |  |
 | kycStep | string |  yes  |  |
 | entityMapId | string |  yes  |  |

---


 
 
 #### [UploadBankDetailsRequest](#UploadBankDetailsRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | documentData | [BankDetails](#BankDetails) |  no  |  |
 | user | any |  no  |  |
 | lenderSlug | string |  yes  |  |
 | kycStep | string |  yes  |  |
 | merchantId | string |  no  |  |
 | entityMapId | string |  no  |  |

---


 
 
 #### [InitiateKycRequest](#InitiateKycRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | kycType | string |  yes  |  |
 | kycId | string |  no  |  |
 | merchantId | string |  no  |  |

---


 
 
 #### [InitiateKycRequestV1](#InitiateKycRequestV1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | entityMapId | string |  yes  |  |
 | kycType | string |  yes  |  |
 | kycId | string |  no  |  |
 | merchantId | string |  no  |  |

---


 
 
 #### [LenderOnboardRequest](#LenderOnboardRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ack | string |  no  |  |
 | data | any |  yes  |  |
 | merchantId | string |  no  |  |

---


 
 
 #### [LenderOnboardRequestV1](#LenderOnboardRequestV1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | entityMapId | string |  yes  |  |
 | ack | string |  no  |  |
 | data | any |  yes  |  |
 | merchantId | string |  no  |  |

---


 
 
 #### [UpdateLenderStatusRequest](#UpdateLenderStatusRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | string |  yes  |  |
 | payload | any |  yes  |  |
 | data | any |  yes  |  |
 | action | boolean |  yes  |  |

---


 
 
 #### [UpdateProfileRequest](#UpdateProfileRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | firstName | string |  no  |  |
 | lastName | string |  no  |  |
 | gender | string |  no  |  |
 | dob | string |  no  |  |
 | userId | string |  yes  |  |
 | isOnboarded | boolean |  no  |  |
 | address | string |  no  |  |

---


 
 
 #### [UpdateEntityRequest](#UpdateEntityRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | gender | string |  no  |  |
 | dob | string |  no  |  |
 | isDefault | boolean |  no  |  |
 | address | [ProofOfAddress](#ProofOfAddress) |  no  |  |

---


 
 
 #### [CreateKycStepsRequest](#CreateKycStepsRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | any |  yes  |  |

---


 
 
 #### [CreateLenderPgConfigRequest](#CreateLenderPgConfigRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | mid | string |  yes  |  |
 | clientId | string |  yes  |  |
 | secret | string |  yes  |  |
 | active | boolean |  yes  |  |
 | pgId | string |  yes  |  |
 | lenderId | string |  yes  |  |

---


 
 
 #### [CreateLenderStateRequest](#CreateLenderStateRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | any |  yes  |  |

---


 
 
 #### [UpdateLenderRequest](#UpdateLenderRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | any |  yes  |  |
 | lenderId | string |  yes  |  |

---


 
 
 #### [OtherPolicyFilters](#OtherPolicyFilters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | orderBy | [any] |  no  |  |

---


 
 
 #### [GetPolicyFilters](#GetPolicyFilters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | policyType | string |  no  |  |
 | lenderIds | [any] |  no  |  |
 | merchantIds | [any] |  no  |  |
 | orderBy | [any] |  no  |  |

---


 
 
 #### [GetPolicyFilters2](#GetPolicyFilters2)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | breType | string |  no  |  |
 | lenderId | [any] |  no  |  |
 | merchantId | [any] |  no  |  |
 | loanType | string |  no  |  |
 | journeyType | string |  no  |  |
 | subType | string |  no  |  |

---


 
 
 #### [MerchantConfigRequest](#MerchantConfigRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  |  |
 | merchantConfigSchema | any |  yes  |  |

---


 
 
 #### [PanDetails](#PanDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  yes  |  |
 | idNumber | string |  yes  |  |

---


 
 
 #### [FilterByDate](#FilterByDate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | startDate | string |  no  |  |
 | endDate | string |  no  |  |

---


 
 
 #### [AvailableLendersRequest](#AvailableLendersRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | chargeToken | string |  yes  |  |

---


 
 
 #### [InitialData](#InitialData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | userId | string |  yes  |  |
 | entityId | string |  yes  |  |

---


 
 
 #### [ExecutePolicyRequest](#ExecutePolicyRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | policyFilters | [GetPolicyFilters](#GetPolicyFilters) |  no  |  |
 | initialData | [InitialData](#InitialData) |  yes  |  |

---


 
 
 #### [ExecutePolicyRequest2](#ExecutePolicyRequest2)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | policyFilters | [GetPolicyFilters2](#GetPolicyFilters2) |  no  |  |
 | initialData | [InitialData](#InitialData) |  yes  |  |

---


 
 
 #### [RegisterGstRequest](#RegisterGstRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gstin | string |  yes  |  |
 | skipGst | boolean |  no  |  |
 | onboardingToken | string |  no  |  |

---


 
 
 #### [PopulateFormRequest](#PopulateFormRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | form | any |  yes  |  |
 | lenderId | string |  no  |  |
 | merchantId | string |  no  |  |

---


 
 
 #### [ValidateFormFieldRequest](#ValidateFormFieldRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | workflowName | string |  yes  |  |
 | userId | string |  no  |  |
 | entityId | string |  no  |  |
 | entityMapId | string |  no  |  |
 | lenderId | string |  no  |  |
 | merchantId | string |  no  |  |
 | fields | any |  yes  |  |

---


 
 
 #### [MerchantMetricFilter](#MerchantMetricFilter)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  yes  |  |
 | display | string |  yes  |  |
 | value | [any] |  yes  |  |
 | isSelected | boolean |  no  |  |
 | isActive | boolean |  no  |  |

---


 
 
 #### [LenderCustomerMetricsRequest](#LenderCustomerMetricsRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | sort | [[MerchantMetricFilter](#MerchantMetricFilter)] |  no  |  |
 | filters | [[MerchantMetricFilter](#MerchantMetricFilter)] |  no  |  |
 | merchantId | string |  no  |  |
 | lenderId | string |  no  |  |
 | pivotPoints | number |  no  |  |

---


 
 
 #### [StonewallCustomer](#StonewallCustomer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | mobile | string |  no  |  |
 | uid | string |  no  |  |

---


 
 
 #### [GetLimitRequest](#GetLimitRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | lenderSlugs | [any] |  no  |  |
 | onlyDefaultLender | boolean |  no  |  |
 | customer | [StonewallCustomer](#StonewallCustomer) |  yes  |  |

---


 
 
 #### [DocumentObject](#DocumentObject)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | userId | string |  no  |  |
 | name | string |  no  |  |
 | imageUrl | string |  no  |  |
 | number | string |  yes  |  |
 | detail | any |  yes  |  |
 | valid | boolean |  no  |  |
 | entityId | string |  no  |  |

---


 
 
 #### [ManualKycRequest](#ManualKycRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | remark | any |  yes  |  |
 | status | string |  yes  |  |
 | stepId | string |  yes  |  |
 | entityMapId | string |  yes  |  |
 | documentData | [DocumentObject](#DocumentObject) |  no  |  |

---


 
 
 #### [RetriggerLenderOnboardRequest](#RetriggerLenderOnboardRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | stepId | string |  yes  |  |
 | data | any |  yes  |  |

---


 
 
 #### [RetriggerLenderOnboardRequestV2](#RetriggerLenderOnboardRequestV2)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | lenderUserId | string |  yes  |  |
 | stepName | string |  yes  |  |
 | data | any |  yes  |  |
 | entityMapId | string |  yes  |  |

---


 
 
 #### [BusinessDetail](#BusinessDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | category | string |  yes  |  |
 | shopName | string |  no  |  |
 | legalName | string |  yes  |  |
 | address | string |  no  |  |
 | type | string |  no  |  |
 | pincode | string |  no  |  |

---


 
 
 #### [VintageData](#VintageData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | month | number |  yes  |  |
 | year | number |  yes  |  |
 | totalTransactions | number |  yes  |  |
 | totalTransactionAmount | number |  yes  |  |
 | totalCancellations | number |  no  |  |
 | totalCancellationAmount | number |  no  |  |

---


 
 
 #### [DocumentObjects](#DocumentObjects)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | number | string |  yes  |  |
 | category | string |  yes  |  |
 | type | string |  yes  |  |
 | name | string |  no  |  |
 | issuedOn | string |  no  |  |
 | issuedAt | string |  no  |  |
 | issuedBy | string |  no  |  |
 | expiryOn | string |  no  |  |

---


 
 
 #### [AddVintageRequest](#AddVintageRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user | any |  yes  |  |
 | businessDetails | [BusinessDetail](#BusinessDetail) |  yes  |  |
 | vintageData | [VintageData](#VintageData) |  yes  |  |
 | documents | [DocumentObjects](#DocumentObjects) |  yes  |  |
 | merchant | [MerchantSchema](#MerchantSchema) |  yes  |  |

---


 
 
 #### [CheckEligibilityRequest](#CheckEligibilityRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | entity | [EntityDto](#EntityDto) |  no  |  |
 | isPreApproved | boolean |  yes  |  |
 | fetchLimit | boolean |  no  |  |
 | user | any |  yes  |  |
 | businessDetails | [BusinessDetail](#BusinessDetail) |  yes  |  |
 | vintageData | [VintageData](#VintageData) |  yes  |  |
 | documents | [DocumentObjects](#DocumentObjects) |  yes  |  |
 | merchant | [MerchantSchema](#MerchantSchema) |  yes  |  |

---


 
 
 #### [KycCountByStatus](#KycCountByStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | startDate | string |  no  |  |
 | endDate | string |  no  |  |
 | merchantId | string |  no  |  |
 | lenderId | string |  no  |  |

---


 
 
 #### [FindDocResponse](#FindDocResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | string |  yes  |  |
 | info | string |  yes  |  |
 | details | any |  no  |  |
 | name | string |  no  |  |

---


 
 
 #### [LenderKycStatus](#LenderKycStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | string |  yes  |  |
 | lenderId | string |  no  |  |
 | lenderName | string |  no  |  |
 | kycType | string |  no  |  |

---


 
 
 #### [StateResponeDto](#StateResponeDto)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | step | [UserKycLenderStepMap](#UserKycLenderStepMap) |  yes  |  |
 | isStepCompleted | boolean |  yes  |  |

---


 
 
 #### [KycStateMachineDto](#KycStateMachineDto)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | kycResult | [UserKycDetail](#UserKycDetail) |  yes  |  |
 | action | [UserKycLenderStepMap](#UserKycLenderStepMap) |  no  |  |

---


 
 
 #### [InitiateKycDto](#InitiateKycDto)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | kycType | string |  yes  |  |
 | lenderId | string |  yes  |  |
 | user | any |  yes  |  |
 | kycId | string |  no  |  |
 | entityRelation | [EntityMapDto](#EntityMapDto) |  no  |  |

---


 
 
 #### [LenderOnboardDto](#LenderOnboardDto)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | lender | [Lender](#Lender) |  no  |  |
 | user | any |  yes  |  |
 | userLenderDetail | [UserLender](#UserLender) |  no  |  |
 | payload | [LenderOnboardRequest](#LenderOnboardRequest) |  yes  |  |
 | entityRelation | [EntityMapDto](#EntityMapDto) |  no  |  |
 | ipAddress | string |  yes  |  |
 | overrideTtl | boolean |  no  |  |

---


 
 
 #### [StepDetails](#StepDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | description | string |  no  |  |
 | iconUrl | string |  no  |  |
 | status | string |  yes  |  |
 | step | string |  yes  |  |
 | order | number |  yes  |  |

---


 
 
 #### [OnboardStatusDto](#OnboardStatusDto)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | onboardStep | string |  yes  |  |
 | onboardingId | string |  yes  |  |
 | status | string |  yes  |  |
 | action | string |  yes  |  |
 | actionStatus | string |  yes  |  |
 | lender | [Lender](#Lender) |  yes  |  |
 | navigation | string |  no  |  |
 | approvedLimit | number |  yes  |  |
 | proposedLimit | number |  yes  |  |
 | actionData | any |  no  |  |
 | steps | [[StepDetails](#StepDetails)] |  no  |  |
 | entityId | string |  yes  |  |
 | entityMapId | string |  yes  |  |
 | actionIsForm | boolean |  yes  |  |
 | actionForm | [Form](#Form) |  no  |  |
 | merchantId | string |  no  |  |
 | actionName | string |  no  |  |
 | actionDescription | string |  no  |  |

---


 
 
 #### [LenderFilters](#LenderFilters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | includeStatus | [any] |  no  |  |
 | excludeStatus | [any] |  no  |  |
 | allowDisabledLender | any |  no  |  |

---


 
 
 #### [Policy](#Policy)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | name | string |  no  |  |
 | url | string |  no  |  |
 | data | any |  no  |  |
 | version | string |  no  |  |
 | active | boolean |  no  |  |
 | type | any |  no  |  |
 | index | number |  no  |  |
 | lenderId | string |  no  |  |
 | merchantId | string |  no  |  |
 | workflowId | string |  no  |  |
 | schemaRef | [any] |  no  |  |
 | masterVariableRef | [any] |  no  |  |
 | customVariable | any |  no  |  |
 | subType | string |  no  |  |
 | createdAt | any |  no  |  |
 | updatedAt | any |  no  |  |
 | deletedAt | any |  no  |  |

---


 
 
 #### [OrganizationLogosObject](#OrganizationLogosObject)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  |  |
 | name | string |  yes  |  |
 | logo | string |  yes  |  |
 | active | boolean |  yes  |  |

---


 
 
 #### [MetricSubTypes](#MetricSubTypes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | date | string |  yes  |  |
 | count | string |  no  |  |
 | sum | string |  no  |  |

---


 
 
 #### [MetricTypes](#MetricTypes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | pivots | [[MetricSubTypes](#MetricSubTypes)] |  yes  |  |
 | total | string |  no  |  |
 | description | string |  yes  |  |
 | title | string |  yes  |  |
 | valueFormat | string |  yes  |  |
 | logo | string |  yes  |  |

---


 
 
 #### [BreApprovedUsersResponse](#BreApprovedUsersResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [MetricTypes](#MetricTypes) |  yes  |  |

---


 
 
 #### [Metrics](#Metrics)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | lenderApprovedUsers | [MetricTypes](#MetricTypes) |  yes  |  |
 | breApprovedUsers | [MetricTypes](#MetricTypes) |  yes  |  |
 | totalCreditLine | [MetricTypes](#MetricTypes) |  yes  |  |

---


 
 
 #### [MetricData](#MetricData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | metrics | [Metrics](#Metrics) |  yes  |  |
 | filters | [[MerchantMetricFilter](#MerchantMetricFilter)] |  yes  |  |
 | sort | [[MerchantMetricFilter](#MerchantMetricFilter)] |  yes  |  |

---


 
 
 #### [GetAllUserLendersByEnityId](#GetAllUserLendersByEnityId)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | entityId | string |  yes  |  |
 | entityMapId | string |  yes  |  |
 | userId | string |  yes  |  |
 | status | string |  yes  |  |
 | lender | [Lender](#Lender) |  no  |  |
 | partnerId | string |  no  |  |
 | approvedLimit | number |  no  |  |

---


 
 
 #### [ApprovedLenders](#ApprovedLenders)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | string |  yes  |  |
 | lenders | [[BreOutput](#BreOutput)] |  yes  |  |

---


 
 
 #### [BreResultStatus](#BreResultStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | string |  yes  |  |
 | approvedLenders | [[BreOutput](#BreOutput)] |  no  |  |

---


 
 
 #### [LenderState](#LenderState)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | name | string |  yes  |  |
 | lenderId | string |  yes  |  |
 | index | number |  yes  |  |
 | workflowName | string |  yes  |  |
 | workflowUrl | string |  no  |  |
 | active | boolean |  yes  |  |
 | createdAt | string |  no  |  |
 | updatedAt | string |  no  |  |
 | deletedAt | string |  no  |  |
 | lender | [Lender](#Lender) |  no  |  |
 | parentStateId | string |  no  |  |
 | ttl | number |  yes  |  |
 | displayName | string |  no  |  |
 | description | string |  no  |  |
 | iconUrl | string |  no  |  |
 | isInteractive | boolean |  yes  |  |
 | schema | any |  no  |  |

---


 
 
 #### [UserLenderState](#UserLenderState)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  |  |
 | lenderStateId | string |  yes  |  |
 | lenderId | string |  yes  |  |
 | userId | string |  yes  |  |
 | status | string |  yes  |  |
 | userLenderId | string |  yes  |  |
 | remark | string |  yes  |  |
 | active | boolean |  yes  |  |
 | lenderState | [LenderState](#LenderState) |  no  |  |
 | data | any |  no  |  |
 | createdAt | string |  no  |  |
 | updatedAt | string |  no  |  |
 | deletedAt | string |  no  |  |
 | entityId | string |  no  |  |
 | entityMapId | string |  no  |  |
 | updatedBy | string |  no  |  |

---


 
 
 #### [LenderConfig](#LenderConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | baseUrl | string |  yes  |  |
 | accessToken | string |  no  |  |
 | secret | string |  no  |  |
 | data | any |  yes  |  |
 | lenderId | string |  yes  |  |
 | active | boolean |  no  |  |
 | createdAt | string |  no  |  |
 | updatedAt | string |  no  |  |
 | deletedAt | string |  no  |  |

---


 
 
 #### [Pg](#Pg)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  |  |
 | name | string |  yes  |  |
 | active | boolean |  yes  |  |
 | baseUrl | string |  no  |  |
 | config | any |  no  |  |
 | paymentOptions | [any] |  no  |  |
 | credentialsSchema | any |  no  |  |

---


 
 
 #### [LenderPgConfig](#LenderPgConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | mid | string |  yes  |  |
 | clientId | string |  yes  |  |
 | secret | string |  yes  |  |
 | lenderId | string |  yes  |  |
 | pgId | string |  yes  |  |
 | active | boolean |  yes  |  |
 | config | any |  no  |  |
 | paymentOptions | [any] |  no  |  |

---


 
 
 #### [FileUploadResponse](#FileUploadResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | fileId | string |  yes  |  |
 | name | string |  yes  |  |
 | path | string |  yes  |  |
 | format | string |  yes  |  |
 | size | number |  yes  |  |
 | access | string |  yes  |  |
 | tags | string |  yes  |  |
 | metadata | string |  yes  |  |
 | url | string |  yes  |  |
 | thumbnail | string |  yes  |  |

---


 
 
 #### [PresignedUrl](#PresignedUrl)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | url | string |  yes  |  |
 | fields | any |  yes  |  |

---


 
 
 #### [PresignedUrlV2](#PresignedUrlV2)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | url | string |  yes  |  |
 | fields | any |  yes  |  |

---


 
 
 #### [LenderDocument](#LenderDocument)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | lenderId | string |  no  |  |
 | type | string |  no  |  |
 | document | any |  no  |  |
 | active | boolean |  no  |  |
 | createdAt | string |  no  |  |
 | updatedAt | string |  no  |  |
 | deletedAt | string |  no  |  |

---


 
 
 #### [Commercial](#Commercial)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | lenderId | string |  yes  |  |
 | merchantId | string |  yes  |  |
 | commercial | any |  yes  |  |
 | active | boolean |  yes  |  |
 | createdAt | string |  no  |  |
 | updatedAt | string |  no  |  |

---


 
 
 #### [KycStatusResponse](#KycStatusResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | isKycInitiated | boolean |  yes  |  |
 | userId | string |  yes  |  |
 | kycStatuses | [[LenderKycStatus](#LenderKycStatus)] |  yes  |  |

---


 
 
 #### [WorkflowResponse](#WorkflowResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | any |  no  |  |

---


 
 
 #### [Action](#Action)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | step | string |  yes  |  |
 | status | string |  yes  |  |
 | index | number |  yes  |  |
 | isForm | boolean |  no  |  |
 | form | [Form](#Form) |  yes  |  |

---


 
 
 #### [InitiateKycResponse](#InitiateKycResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | kycResult | [UserKycDetail](#UserKycDetail) |  yes  |  |
 | action | [Action](#Action) |  yes  |  |

---


 
 
 #### [UploadDocResponse](#UploadDocResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | string |  yes  |  |
 | data | any |  no  |  |
 | remark | string |  no  |  |
 | reasons | string |  yes  |  |
 | kycResult | [UserKycDetail](#UserKycDetail) |  yes  |  |
 | action | [Action](#Action) |  yes  |  |

---


 
 
 #### [LenderOnboardResponse](#LenderOnboardResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | result | [UserLender](#UserLender) |  yes  |  |
 | action | [UserLenderState](#UserLenderState) |  yes  |  |
 | data | any |  yes  |  |

---


 
 
 #### [OnboardingStatusResponse](#OnboardingStatusResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | onboardStatuses | [[OnboardStatusDto](#OnboardStatusDto)] |  yes  |  |

---


 
 
 #### [SignedUrlResponse](#SignedUrlResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | signedUrl | [PresignedUrl](#PresignedUrl) |  yes  |  |
 | fileUrl | string |  yes  |  |

---


 
 
 #### [SignedUrlV2Response](#SignedUrlV2Response)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | signedUrl | [PresignedUrlV2](#PresignedUrlV2) |  yes  |  |
 | fileUrl | string |  yes  |  |

---


 
 
 #### [PresignedUrlV3](#PresignedUrlV3)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | signedUrl | string |  yes  |  |
 | provider | any |  yes  |  |

---


 
 
 #### [SignedUrlV3Response](#SignedUrlV3Response)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | signedDetails | [PresignedUrlV3](#PresignedUrlV3) |  yes  |  |
 | fileUrl | string |  yes  |  |

---


 
 
 #### [DigilockerLinkResponse](#DigilockerLinkResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | authorizationUrl | string |  yes  |  |

---


 
 
 #### [GetDocumentsResponse](#GetDocumentsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | documents | [[FindDocResponse](#FindDocResponse)] |  yes  |  |

---


 
 
 #### [ApprovedLendersTransaction](#ApprovedLendersTransaction)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  yes  |  |
 | slug | string |  yes  |  |
 | imageUrl | string |  yes  |  |
 | status | string |  yes  |  |
 | active | boolean |  yes  |  |
 | proposedLimit | number |  yes  |  |
 | createdAt | any |  yes  |  |
 | updatedAt | any |  yes  |  |
 | deletedAt | any |  no  |  |
 | isDefault | boolean |  no  |  |

---


 
 
 #### [ApprovedPossibleLenders](#ApprovedPossibleLenders)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | limit | number |  yes  |  |
 | name | string |  yes  |  |
 | slug | string |  yes  |  |
 | active | boolean |  yes  |  |
 | id | string |  yes  |  |
 | theme | any |  no  |  |

---


 
 
 #### [AvailableLenders](#AvailableLenders)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | approvedLenders | [[ApprovedPossibleLenders](#ApprovedPossibleLenders)] |  yes  |  |
 | possibleLenders | [[ApprovedPossibleLenders](#ApprovedPossibleLenders)] |  yes  |  |

---


 
 
 #### [CreditLimit](#CreditLimit)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | availableLimit | number |  yes  |  |
 | approvedLimit | number |  yes  |  |

---


 
 
 #### [CreditLimitResponse](#CreditLimitResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | string |  yes  |  |
 | message | string |  yes  |  |
 | action | boolean |  yes  |  |
 | credit | [CreditLimit](#CreditLimit) |  yes  |  |

---


 
 
 #### [LenderPgConfigResponse](#LenderPgConfigResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  |  |
 | mid | string |  yes  |  |
 | clientId | string |  yes  |  |
 | secret | string |  yes  |  |
 | lenderId | string |  yes  |  |
 | pgId | string |  yes  |  |
 | active | boolean |  yes  |  |
 | pgName | string |  yes  |  |
 | pgActive | boolean |  yes  |  |

---


 
 
 #### [GetLendersResponse](#GetLendersResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [[Lender](#Lender)] |  yes  |  |

---


 
 
 #### [LenderConfigurationResponse](#LenderConfigurationResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | lender | [Lender](#Lender) |  yes  |  |
 | lenderPgConfig | [LenderPgConfig](#LenderPgConfig) |  yes  |  |
 | lenderConfig | [LenderConfig](#LenderConfig) |  yes  |  |
 | lenderState | [[LenderState](#LenderState)] |  yes  |  |
 | lenderKycStepMap | [[LenderKycStepMap](#LenderKycStepMap)] |  yes  |  |

---


 
 
 #### [UpsertLenderResponse](#UpsertLenderResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | any |  yes  |  |

---


 
 
 #### [UpsertLenderConfigResponse](#UpsertLenderConfigResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | any |  yes  |  |

---


 
 
 #### [CreateKycStepsSchema](#CreateKycStepsSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [[LenderKycStepMap](#LenderKycStepMap)] |  yes  |  |

---


 
 
 #### [CreatePaymentGatewaySchema](#CreatePaymentGatewaySchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [[LenderPgConfig](#LenderPgConfig)] |  yes  |  |

---


 
 
 #### [CreateLenderStateSchema](#CreateLenderStateSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [[LenderState](#LenderState)] |  yes  |  |

---


 
 
 #### [GetAllPaymentGatewaysSchema](#GetAllPaymentGatewaysSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [[Pg](#Pg)] |  yes  |  |

---


 
 
 #### [PolicyResponse](#PolicyResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | policies | [[Policy](#Policy)] |  yes  |  |

---


 
 
 #### [CreditCheckBreResponse](#CreditCheckBreResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | newLenderAssigned | boolean |  yes  |  |
 | breStatus | string |  yes  |  |

---


 
 
 #### [MerchantConfigResponse](#MerchantConfigResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  |  |
 | merhantConfigSchema | string |  yes  |  |

---


 
 
 #### [UserLenderByIdAndStatusResponse](#UserLenderByIdAndStatusResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  |  |
 | userId | string |  yes  |  |
 | lenderId | string |  yes  |  |
 | active | boolean |  no  |  |
 | status | string |  yes  |  |
 | createdAt | string |  yes  |  |
 | updatedAt | string |  yes  |  |
 | deletedAt | string |  no  |  |
 | approvedLimit | number |  yes  |  |
 | slug | string |  no  |  |
 | theme | any |  no  |  |
 | name | any |  no  |  |

---


 
 
 #### [IntgrAvailableCreditLimit](#IntgrAvailableCreditLimit)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | limit | number |  yes  |  |
 | lenderName | string |  yes  |  |
 | slug | string |  yes  |  |
 | isDefault | boolean |  yes  |  |
 | logoUrl | string |  yes  |  |

---


 
 
 #### [IngtrAvailableLimit](#IngtrAvailableLimit)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | available | [[IntgrAvailableCreditLimit](#IntgrAvailableCreditLimit)] |  yes  |  |
 | possible | [[IntgrAvailableCreditLimit](#IntgrAvailableCreditLimit)] |  no  |  |

---


 
 
 #### [IntgrCreditLimit](#IntgrCreditLimit)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | limit | [IngtrAvailableLimit](#IngtrAvailableLimit) |  yes  |  |

---


 
 
 #### [PossibleLendersInternal](#PossibleLendersInternal)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | limit | boolean |  yes  |  |
 | lenderName | string |  yes  |  |
 | slug | string |  yes  |  |
 | isDefault | boolean |  yes  |  |
 | logo | string |  yes  |  |
 | lenderId | string |  yes  |  |

---


 
 
 #### [PossibleLendersInternalResponse](#PossibleLendersInternalResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | lenders | [[PossibleLendersInternal](#PossibleLendersInternal)] |  yes  |  |

---


 
 
 #### [GetTotalKycResponse](#GetTotalKycResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | totalKyc | string |  yes  |  |

---


 
 
 #### [GetTotalKycCompletedUsersResponse](#GetTotalKycCompletedUsersResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | totalKycCompletedUsers | string |  yes  |  |

---


 
 
 #### [GetTotalPendingUsersResponse](#GetTotalPendingUsersResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | totalPendingKyc | string |  yes  |  |

---


 
 
 #### [GetTotalCreditProvidedResponse](#GetTotalCreditProvidedResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | totalCreditLimit | string |  yes  |  |

---


 
 
 #### [MetaSchemaResponse](#MetaSchemaResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  yes  |  |
 | name | string |  yes  |  |
 | required | [string] |  yes  |  |
 | type | string |  yes  |  |
 | properties | string |  yes  |  |

---


 
 
 #### [MetaSchema](#MetaSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | metaSchema | [MetaSchemaResponse](#MetaSchemaResponse) |  yes  |  |

---


 
 
 #### [AddMetaSchema](#AddMetaSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | lenderSlug | string |  yes  |  |
 | merchantId | string |  yes  |  |
 | schema | any |  yes  |  |

---


 
 
 #### [AddMetaSchemaRequest](#AddMetaSchemaRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | merchantId | string |  yes  |  |
 | schema | any |  yes  |  |

---


 
 
 #### [ValidatePanResponse](#ValidatePanResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | panName | string |  yes  |  |
 | isPanValid | string |  yes  |  |
 | pan | string |  yes  |  |
 | isProprietor | boolean |  yes  |  |
 | panType | string |  yes  |  |
 | errorCode | string |  no  |  |
 | status | string |  no  |  |
 | errorMessage | string |  no  |  |

---


 
 
 #### [ConfirmPanResonse](#ConfirmPanResonse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | string |  yes  |  |
 | statusCode | string |  yes  |  |
 | message | string |  yes  |  |

---


 
 
 #### [LenderCountResponse](#LenderCountResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | number |  yes  |  |
 | inActive | number |  yes  |  |

---


 
 
 #### [OnboardStepsDto](#OnboardStepsDto)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | steps | [[StepDetails](#StepDetails)] |  yes  |  |
 | lender | [Lender](#Lender) |  yes  |  |

---


 
 
 #### [OnboardStepsResponse](#OnboardStepsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | stepDetails | [[OnboardStepsDto](#OnboardStepsDto)] |  yes  |  |

---


 
 
 #### [LenderDocumentResponse](#LenderDocumentResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [LenderDocument](#LenderDocument) |  yes  |  |

---


 
 
 #### [GetUserLendersResponse](#GetUserLendersResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [[UserLender](#UserLender)] |  yes  |  |

---


 
 
 #### [CreditReportResponse](#CreditReportResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [SourceCreditReport](#SourceCreditReport) |  yes  |  |

---


 
 
 #### [KycDetailsReponse](#KycDetailsReponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [UserKycLenderStepMap](#UserKycLenderStepMap) |  yes  |  |

---


 
 
 #### [GetDocumentByIdResponse](#GetDocumentByIdResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [Document](#Document) |  yes  |  |

---


 
 
 #### [GetAllFormsResponse](#GetAllFormsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | any |  yes  |  |

---


 
 
 #### [UpsertFormResponse](#UpsertFormResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | any |  yes  |  |

---


 
 
 #### [GstDetails](#GstDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gstin | string |  yes  |  |
 | businessName | string |  yes  |  |

---


 
 
 #### [GstDetailsResponse](#GstDetailsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gstDetails | [[GstDetails](#GstDetails)] |  yes  |  |

---


 
 
 #### [RegisterGstResponse](#RegisterGstResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gstDocDetails | [Document](#Document) |  yes  |  |
 | status | string |  yes  |  |

---


 
 
 #### [PopulateFormResponse](#PopulateFormResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | form | any |  yes  |  |

---


 
 
 #### [ValidateFormFieldResponse](#ValidateFormFieldResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | string |  yes  |  |
 | message | string |  yes  |  |
 | data | any |  yes  |  |

---


 
 
 #### [LenderCustomerMetricsResponse](#LenderCustomerMetricsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | string |  yes  |  |
 | message | string |  yes  |  |
 | data | [MetricData](#MetricData) |  yes  |  |

---


 
 
 #### [BreOutput](#BreOutput)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  |  |
 | userId | string |  yes  |  |
 | entityId | string |  yes  |  |
 | lenderId | string |  no  |  |
 | merchantId | string |  no  |  |
 | policyName | string |  yes  |  |
 | category | string |  yes  |  |
 | type | string |  yes  |  |
 | output | any |  yes  |  |
 | status | string |  yes  |  |
 | createdAt | string |  yes  |  |
 | updatedAt | string |  yes  |  |
 | deletedAt | string |  yes  |  |

---


 
 
 #### [ManualKycResponse](#ManualKycResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  yes  |  |
 | step | [UserKycLenderStepMap](#UserKycLenderStepMap) |  yes  |  |

---


 
 
 #### [CustomerKycDetailsReponse](#CustomerKycDetailsReponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [UserKycLenderStepMap](#UserKycLenderStepMap) |  yes  |  |

---


 
 
 #### [PlatformFees](#PlatformFees)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | customerAcquisitionFee | number |  yes  |  |
 | transactionFee | number |  yes  |  |

---


 
 
 #### [CommercialResponse](#CommercialResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [Commercial](#Commercial) |  yes  |  |

---




