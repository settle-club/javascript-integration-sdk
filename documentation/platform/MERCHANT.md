



##### [Back to Platform docs](./README.md)

## Merchant Methods
Authentication Service
* [getAccessToken](#getaccesstoken)
* [renewAccessToken](#renewaccesstoken)
* [validateCredentials](#validatecredentials)



## Methods with example and description


### getAccessToken
Get Access Token



```javascript
// Promise
const promise =  
        merchant.getAccessToken(
            
            
        
        );

// Async/Await
const data = await 
                    merchant.getAccessToken(
                    
                    
                    );
```






Use this API to get access token

*Returned Response:*




[GetAccessTokenResponse](#GetAccessTokenResponse)

Success. Returns a JSON object as shown below. Refer `GetAccessTokenResponse` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
true
```
</details>

<details>
<summary><i>&nbsp; accessToken</i></summary>

```json
"oa-0a7a064dd15ef22fe002946f90c1e7b22eea47de"
```
</details>

<details>
<summary><i>&nbsp; refreshToken</i></summary>

```json
"oa-d2f33b6be9957050386be051501b84b008f5ef6f"
```
</details>

<details>
<summary><i>&nbsp; tokenExpireAt</i></summary>

```json
"2023-06-27T09:43:07.818Z"
```
</details>

<details>
<summary><i>&nbsp; tokenExpiryIn</i></summary>

```json
"600"
```
</details>

<details>
<summary><i>&nbsp; refreshTokenExpiryAt</i></summary>

```json
"2023-06-27T10:33:07.822Z"
```
</details>

<details>
<summary><i>&nbsp; refreshTokenExpiryIn</i></summary>

```json
"3600"
```
</details>

<details>
<summary><i>&nbsp; scope</i></summary>

```json
[
  "transaction"
]
```
</details>

</details>









---


### renewAccessToken
Renew Access Token



```javascript
// Promise
const promise =  
        merchant.renewAccessToken(
            { 
              body : value
            
         }
        );

// Async/Await
const data = await 
                    merchant.renewAccessToken(
                    { 
                       body : value
                    
                     });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [RefreshTokenRequest](#RefreshTokenRequest) | yes | Request body |


Use this API to renew access token

*Returned Response:*




[RefreshTokenResponse](#RefreshTokenResponse)

Success. Returns a JSON object as shown below. Refer `RefreshTokenResponse` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
true
```
</details>

<details>
<summary><i>&nbsp; accessToken</i></summary>

```json
"oa-de1496c16c91c45396ba87a888eed20fb223995d"
```
</details>

<details>
<summary><i>&nbsp; tokenExpireAt</i></summary>

```json
"2023-06-26T19:23:46.977Z"
```
</details>

<details>
<summary><i>&nbsp; tokenExpiryIn</i></summary>

```json
"600"
```
</details>

</details>









---


### validateCredentials
Validate organization's credentials



```javascript
// Promise
const promise =  
        merchant.validateCredentials(
            
            
        
        );

// Async/Await
const data = await 
                    merchant.validateCredentials(
                    
                    
                    );
```






Use this API to validate organization's credentials

*Returned Response:*




[ValidateCredentialsResponse](#ValidateCredentialsResponse)

Success. Returns a JSON object as shown below. Refer `ValidateCredentialsResponse` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; $ref</i></summary>

```json
"#/components/schemas/ValidateCredentialsResponseExample"
```
</details>

</details>









---



### Schemas

 
 
 #### [ErrorResponse](#ErrorResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | info | string |  no  |  |
 | code | string |  no  |  |
 | requestId | string |  no  |  |
 | meta | string |  no  |  |

---


 
 
 #### [BlockUserRequestSchema](#BlockUserRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | boolean |  no  |  |
 | userid | [string] |  no  |  |
 | reason | string |  no  |  |

---


 
 
 #### [EditEmailRequestSchema](#EditEmailRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | string |  no  |  |

---


 
 
 #### [SendVerificationLinkMobileRequestSchema](#SendVerificationLinkMobileRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | verified | boolean |  no  |  |
 | active | boolean |  no  |  |
 | countryCode | string |  no  |  |
 | phone | string |  no  |  |
 | primary | boolean |  no  |  |

---


 
 
 #### [EditMobileRequestSchema](#EditMobileRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | countryCode | string |  no  |  |
 | phone | string |  no  |  |

---


 
 
 #### [UpdateEmail](#UpdateEmail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | string |  yes  |  |
 | additionalProperties | any |  no  |  |

---


 
 
 #### [EditProfileRequestSchema](#EditProfileRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | firstName | string |  yes  |  |
 | lastName | string |  yes  |  |
 | countryCode | string |  no  |  |
 | mobile | string |  no  |  |
 | email | string |  no  |  |
 | gender | string |  no  |  |
 | registrationToken | string |  no  |  |

---


 
 
 #### [EditProfileMobileSchema](#EditProfileMobileSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | phone | string |  no  |  |
 | countryCode | string |  no  |  |

---


 
 
 #### [SendEmailOtpRequestSchema](#SendEmailOtpRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | string |  no  |  |
 | action | string |  no  |  |
 | token | string |  no  |  |
 | registerToken | string |  no  |  |

---


 
 
 #### [VerifyEmailOtpRequestSchema](#VerifyEmailOtpRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | string |  no  |  |
 | action | string |  no  |  |
 | registerToken | string |  no  |  |
 | otp | string |  no  |  |

---


 
 
 #### [VerifyOtpRequest](#VerifyOtpRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | requestId | string |  yes  |  |
 | otp | string |  yes  |  |
 | captchaCode | string |  no  |  |
 | androidHash | string |  no  |  |

---


 
 
 #### [SendMobileOtpRequest](#SendMobileOtpRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | countryCode | string |  yes  |  |
 | mobile | string |  yes  |  |
 | captchaCode | string |  no  |  |
 | androidHash | string |  no  |  |
 | force | string |  no  |  |

---


 
 
 #### [ReSendMobileOtpRequestSchema](#ReSendMobileOtpRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | captchaCode | string |  no  |  |
 | token | string |  yes  |  |
 | androidHash | string |  no  |  |

---


 
 
 #### [LoginSuccess](#LoginSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user | [UserSchema](#UserSchema) |  no  |  |
 | requestId | string |  no  |  |
 | registerToken | string |  no  |  |

---


 
 
 #### [VerifyOtpSuccess](#VerifyOtpSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user | [UserSchema](#UserSchema) |  no  |  |
 | userExists | boolean |  no  |  |
 | registerToken | string |  no  |  |

---


 
 
 #### [ResetPasswordSuccess](#ResetPasswordSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | string |  no  |  |

---


 
 
 #### [RegisterFormSuccess](#RegisterFormSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | string |  no  |  |
 | resendTimer | number |  no  |  |
 | resendToken | string |  no  |  |
 | resendEmailToken | string |  no  |  |
 | registerToken | string |  no  |  |
 | success | boolean |  no  |  |
 | requestId | string |  no  |  |
 | message | string |  no  |  |
 | mobile | string |  no  |  |
 | countryCode | string |  no  |  |
 | verifyEmailOtp | boolean |  no  |  |
 | verifyMobileOtp | boolean |  no  |  |
 | userExists | boolean |  no  |  |

---


 
 
 #### [VerifyEmailSuccess](#VerifyEmailSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |

---


 
 
 #### [LogoutSuccess](#LogoutSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | logout | boolean |  no  |  |

---


 
 
 #### [BlockUserSuccess](#BlockUserSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |

---


 
 
 #### [ProfileEditSuccess](#ProfileEditSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user | [UserSchema](#UserSchema) |  no  |  |
 | registerToken | string |  no  |  |
 | resendEmailToken | string |  no  |  |
 | userExists | boolean |  no  |  |
 | verifyEmailLink | boolean |  no  |  |
 | verifyEmailOtp | boolean |  no  |  |
 | verifyMobileOtp | boolean |  no  |  |
 | email | string |  no  |  |
 | requestId | string |  no  |  |
 | countryCode | string |  no  |  |
 | mobile | string |  no  |  |
 | success | boolean |  no  |  |
 | message | string |  no  |  |
 | resendTimer | number |  no  |  |
 | resendToken | string |  no  |  |

---


 
 
 #### [OtpSuccess](#OtpSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | resendTimer | number |  no  |  |
 | resendToken | string |  no  |  |
 | registerToken | string |  no  |  |
 | success | boolean |  no  |  |
 | requestId | string |  no  |  |
 | message | string |  no  |  |
 | mobile | string |  no  |  |
 | countryCode | string |  no  |  |

---


 
 
 #### [EmailOtpSuccess](#EmailOtpSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |

---


 
 
 #### [SessionListSuccess](#SessionListSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | sessions | [string] |  no  |  |

---


 
 
 #### [VerifyMobileOTPSuccess](#VerifyMobileOTPSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user | [UserSchema](#UserSchema) |  no  |  |
 | verifyMobileLink | boolean |  no  |  |

---


 
 
 #### [VerifyEmailOTPSuccess](#VerifyEmailOTPSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user | [UserSchema](#UserSchema) |  no  |  |
 | verifyEmailLink | boolean |  no  |  |

---


 
 
 #### [SendMobileVerifyLinkSuccess](#SendMobileVerifyLinkSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | verifyMobileLink | boolean |  no  |  |

---


 
 
 #### [SendEmailVerifyLinkSuccess](#SendEmailVerifyLinkSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | verifyEmailLink | boolean |  no  |  |

---


 
 
 #### [UserSearchResponseSchema](#UserSearchResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | users | [[UserSchema](#UserSchema)] |  no  |  |

---


 
 
 #### [CustomerListResponseSchema](#CustomerListResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[UserSchema](#UserSchema)] |  no  |  |
 | page | [PaginationSchema](#PaginationSchema) |  no  |  |

---


 
 
 #### [PaginationSchema](#PaginationSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | size | number |  no  |  |
 | itemTotal | number |  no  |  |
 | hasNext | boolean |  no  |  |
 | type | string |  no  |  |
 | current | number |  no  |  |

---


 
 
 #### [UserObjectSchema](#UserObjectSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user | [UserSchema](#UserSchema) |  no  |  |

---


 
 
 #### [CreateOrganization](#CreateOrganization)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | logo | string |  no  |  |
 | website | string |  no  |  |
 | disbursementAccountHolderName | string |  no  |  |
 | disbursementAccountNumber | string |  no  |  |
 | disbursementIfsc | string |  no  |  |
 | businessName | string |  no  |  |
 | email | string |  no  |  |
 | businessAddress | string |  no  |  |
 | pincode | string |  no  |  |
 | b2b | boolean |  no  |  |
 | b2c | boolean |  no  |  |
 | docType | string |  no  |  |
 | docNumber | string |  no  |  |
 | organizationId | string |  no  |  |

---


 
 
 #### [UpdateLogo](#UpdateLogo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | logo | string |  no  |  |

---


 
 
 #### [AddMetaSchemaRequest](#AddMetaSchemaRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | merchantId | string |  no  |  |
 | schema | string |  no  |  |

---


 
 
 #### [AddMetaSchemaResponse](#AddMetaSchemaResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | merchantId | string |  no  |  |
 | lenderId | string |  no  |  |
 | mid | string |  no  |  |
 | data | string |  no  |  |

---


 
 
 #### [UpdateOrganization](#UpdateOrganization)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  |  |
 | name | any |  no  |  |
 | logo | any |  no  |  |
 | website | any |  no  |  |
 | disbursementAccountHolderName | any |  no  |  |
 | disbursementAccountNumber | any |  no  |  |
 | disbursementIfsc | any |  no  |  |
 | active | boolean |  no  |  |

---


 
 
 #### [UpdateFinancials](#UpdateFinancials)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | disbursementAccountHolderName | string |  yes  |  |
 | disbursementAccountNumber | string |  yes  |  |
 | disbursementIfsc | string |  yes  |  |

---


 
 
 #### [Documents](#Documents)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | docType | string |  yes  |  |
 | docNumber | string |  yes  |  |

---


 
 
 #### [FinancialDetails](#FinancialDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | disbursementAccountHolderName | string |  no  |  |
 | disbursementAccountNumber | string |  no  |  |
 | disbursementIfsc | string |  no  |  |
 | b2b | boolean |  no  |  |
 | b2c | boolean |  no  |  |
 | businessName | string |  no  |  |
 | email | string |  no  |  |
 | businessAddress | string |  no  |  |
 | pincode | string |  no  |  |
 | documents | [[Documents](#Documents)] |  no  |  |

---


 
 
 #### [GetOrganization](#GetOrganization)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | organizationId | string |  no  |  |
 | createdAt | string |  no  |  |
 | updatedAt | string |  no  |  |
 | isAdmin | boolean |  no  |  |
 | name | string |  no  |  |
 | isActive | boolean |  no  |  |

---


 
 
 #### [OrganizationDetails](#OrganizationDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | organizationId | string |  no  |  |
 | isAdmin | boolean |  no  |  |
 | createdAt | string |  no  |  |
 | updatedAt | string |  no  |  |
 | deletedAt | string |  no  |  |
 | isActive | boolean |  no  |  |
 | logo | string |  no  |  |
 | website | string |  no  |  |
 | disbursementAccountHolderName | string |  no  |  |
 | disbursementAccountNumber | string |  no  |  |
 | disbursementIfsc | string |  no  |  |

---


 
 
 #### [Organization](#Organization)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | name | string |  no  |  |
 | active | boolean |  no  |  |
 | createdAt | string |  no  |  |
 | updatedAt | string |  no  |  |
 | deletedAt | string |  no  |  |

---


 
 
 #### [OrganizationList](#OrganizationList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | logo | string |  no  |  |
 | id | boolean |  no  |  |
 | createdAt | string |  no  |  |
 | updatedAt | string |  no  |  |
 | deletedAt | string |  no  |  |
 | isActive | boolean |  no  |  |
 | epikId | string |  no  |  |
 | website | string |  no  |  |
 | disbursementAccountHolderName | string |  no  |  |
 | disbursementAccountNumber | string |  no  |  |
 | disbursementIfsc | string |  no  |  |

---


 
 
 #### [OrganizationCount](#OrganizationCount)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | count | string |  no  |  |

---


 
 
 #### [TeamMembers](#TeamMembers)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | members | [[Member](#Member)] |  no  |  |

---


 
 
 #### [Member](#Member)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | userId | string |  no  |  |
 | organizationId | string |  no  |  |
 | isAdmin | boolean |  no  |  |
 | createdAt | string |  no  |  |
 | updatedAt | string |  no  |  |
 | deletedAt | string |  no  |  |
 | profile | [Profile](#Profile) |  no  |  |

---


 
 
 #### [Profile](#Profile)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | userId | string |  no  |  |
 | organizationId | string |  no  |  |
 | isAdmin | boolean |  no  |  |
 | createdAt | string |  no  |  |
 | updatedAt | string |  no  |  |
 | deletedAt | string |  no  |  |

---


 
 
 #### [AddTeamMember](#AddTeamMember)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | countryCode | string |  no  |  |
 | mobile | string |  no  |  |
 | email | string |  no  |  |
 | userIsAdmin | boolean |  no  |  |

---


 
 
 #### [UpdateTeamMemberRole](#UpdateTeamMemberRole)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | userIsAdmin | boolean |  no  |  |
 | userId | string |  no  |  |

---


 
 
 #### [RemoveTeamMemberResponse](#RemoveTeamMemberResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |

---


 
 
 #### [AddTeamMemberResponse](#AddTeamMemberResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | userId | string |  no  |  |
 | organizationId | string |  no  |  |
 | isAdmin | boolean |  no  |  |
 | createdAt | string |  no  |  |
 | updatedAt | string |  no  |  |
 | deletedAt | string |  no  |  |

---


 
 
 #### [ApiKey](#ApiKey)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | key | string |  no  |  |
 | secret | string |  no  |  |

---


 
 
 #### [UpdateApiHook](#UpdateApiHook)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | apiKey | string |  yes  |  |
 | url | string |  yes  |  |
 | customHeaders | string |  no  |  |

---


 
 
 #### [ApiHookDetails](#ApiHookDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | apiKey | string |  yes  |  |
 | url | string |  yes  |  |
 | customHeaders | string |  no  |  |
 | createdAt | string |  no  |  |
 | updatedAt | string |  no  |  |

---


 
 
 #### [UpdateApiHookResponse](#UpdateApiHookResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |

---


 
 
 #### [OrganizationIp](#OrganizationIp)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | ip | string |  yes  |  |

---


 
 
 #### [AddOrganizationIpDetails](#AddOrganizationIpDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | organizationIps | [[OrganizationIp](#OrganizationIp)] |  no  |  |
 | delete | string |  no  |  |

---


 
 
 #### [AddUpdateCsvFileResponse](#AddUpdateCsvFileResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |

---


 
 
 #### [AddUpdateCsvFileRequest](#AddUpdateCsvFileRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | csv | string |  no  |  |
 | organizationId | string |  no  |  |

---


 
 
 #### [CsvFile](#CsvFile)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | csv | string |  no  |  |

---


 
 
 #### [AddReportCsvFileResponse](#AddReportCsvFileResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |

---


 
 
 #### [AddReportCsvFileRequest](#AddReportCsvFileRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | csv | string |  no  |  |
 | organizationId | string |  no  |  |
 | name | string |  no  |  |
 | type | string |  no  |  |

---


 
 
 #### [ReportCsvFileResponse](#ReportCsvFileResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | csv | string |  no  |  |

---


 
 
 #### [AddReportRequestArray](#AddReportRequestArray)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | mobile | string |  no  |  |
 | merchantId | string |  no  |  |
 | category | string |  no  |  |
 | shopName | string |  no  |  |
 | legalName | string |  no  |  |
 | firstName | string |  no  |  |
 | middleName | string |  no  |  |
 | lastName | string |  no  |  |
 | aadhaar | string |  no  |  |
 | nameOnPan | string |  no  |  |
 | gstNumber | string |  no  |  |
 | gstBusinessName | string |  no  |  |
 | panNumber | string |  no  |  |
 | udyam | string |  no  |  |
 | ownershipType | string |  no  |  |
 | address | string |  no  |  |
 | pincode | string |  no  |  |
 | license1Type | string |  no  |  |
 | license1 | string |  no  |  |
 | license2Type | string |  no  |  |
 | license2 | string |  no  |  |

---


 
 
 #### [AddReportRequest](#AddReportRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | businessDetails | [any] |  no  |  |

---


 
 
 #### [AddReportResponseArray](#AddReportResponseArray)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | mobile | string |  no  |  |
 | merchantId | string |  no  |  |
 | anchorId | string |  no  |  |
 | category | string |  no  |  |
 | shopName | string |  no  |  |
 | legalName | string |  no  |  |
 | firstName | string |  no  |  |
 | middleName | string |  no  |  |
 | lastName | string |  no  |  |
 | aadhaar | string |  no  |  |
 | nameOnPan | string |  no  |  |
 | gstNumber | string |  no  |  |
 | gstBusinessName | string |  no  |  |
 | panNumber | string |  no  |  |
 | udyam | string |  no  |  |
 | ownershipType | string |  no  |  |
 | address | string |  no  |  |
 | pincode | string |  no  |  |
 | license1Type | string |  no  |  |
 | license1 | string |  no  |  |
 | license2Type | string |  no  |  |
 | license2 | string |  no  |  |

---


 
 
 #### [AddReportResponse](#AddReportResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | businessDetails | [[AddReportResponseArray](#AddReportResponseArray)] |  no  |  |

---


 
 
 #### [VintageDataResponseObject](#VintageDataResponseObject)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | month | string |  no  |  |
 | year | number |  no  |  |
 | revenue | string |  no  |  |
 | businessId | string |  no  |  |
 | createdBy | string |  no  |  |
 | id | string |  no  |  |
 | createdAt | string |  no  |  |
 | updatedBy | string |  no  |  |
 | updatedAt | string |  no  |  |

---


 
 
 #### [VintageDataResponse](#VintageDataResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | vintageData | [[VintageDataResponseObject](#VintageDataResponseObject)] |  no  |  |

---


 
 
 #### [AddSkuRequestArray](#AddSkuRequestArray)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | sku | string |  yes  |  |
 | productName | string |  yes  |  |
 | creditPurchaseOptionFlag | string |  yes  |  |
 | effectiveDates | string |  yes  |  |
 | organizationId | string |  yes  |  |

---


 
 
 #### [AddSkuRequest](#AddSkuRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | skuDetails | [[AddSkuRequestArray](#AddSkuRequestArray)] |  no  |  |

---


 
 
 #### [AddSkuResponse](#AddSkuResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |

---


 
 
 #### [RestrictedSkuSchema](#RestrictedSkuSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | skuDetails | [any] |  no  |  |

---


 
 
 #### [OrganizationIpResponse](#OrganizationIpResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | organizationId | string |  yes  |  |
 | ip | string |  yes  |  |
 | createdAt | string |  no  |  |
 | updatedAt | string |  no  |  |
 | id | string |  yes  |  |

---


 
 
 #### [OrganizationIpDetails](#OrganizationIpDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | organizationIps | [[OrganizationIpResponse](#OrganizationIpResponse)] |  no  |  |

---


 
 
 #### [TrFilterKeys](#TrFilterKeys)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display | string |  no  |  |
 | name | string |  no  |  |
 | kind | string |  no  |  |

---


 
 
 #### [TrFilterValues](#TrFilterValues)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display | string |  no  |  |
 | isSelected | boolean |  no  |  |
 | value | string |  no  |  |

---


 
 
 #### [TrFilters](#TrFilters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | key | [TrFilterKeys](#TrFilterKeys) |  no  |  |
 | values | [[TrFilterValues](#TrFilterValues)] |  no  |  |

---


 
 
 #### [TrPageResponse](#TrPageResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  yes  |  |
 | current | number |  yes  |  |
 | hasPrevious | boolean |  yes  |  |
 | hasNext | boolean |  yes  |  |
 | size | number |  yes  |  |
 | itemTotal | number |  yes  |  |

---


 
 
 #### [RefundSuccess](#RefundSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | string |  yes  |  |
 | message | number |  yes  |  |
 | transactionId | string |  yes  |  |
 | refundId | string |  yes  |  |

---


 
 
 #### [RefundItem](#RefundItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [any] |  yes  |  |

---


 
 
 #### [FilterByDate](#FilterByDate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | startDate | string |  no  |  |
 | endDate | string |  no  |  |

---


 
 
 #### [Refund](#Refund)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | refundItems | [RefundItem](#RefundItem) |  no  |  |
 | refundId | string |  yes  |  |
 | refundAmount | number |  yes  |  |

---


 
 
 #### [GetAccessTokenResponse](#GetAccessTokenResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |
 | accessToken | string |  no  |  |
 | refreshToken | string |  no  |  |
 | tokenExpireAt | string |  no  |  |
 | tokenExpiryIn | string |  no  |  |
 | refreshTokenExpiryAt | string |  no  |  |
 | refreshTokenExpiryIn | string |  no  |  |
 | scope | [string] |  no  |  |

---


 
 
 #### [RefreshTokenResponse](#RefreshTokenResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |
 | accessToken | string |  no  |  |
 | tokenExpireAt | string |  no  |  |
 | tokenExpiryIn | string |  no  |  |

---


 
 
 #### [RefreshTokenRequest](#RefreshTokenRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | token | string |  yes  |  |

---


 
 
 #### [IntegrationResponseMeta](#IntegrationResponseMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | timestamp | string |  yes  | The timestamp when the response was generated. |
 | version | string |  yes  | The version of the API. |
 | product | string |  yes  | The name of the product or service. |
 | requestId | string |  no  | An optional request identifier. |

---


 
 
 #### [IntegrationResponseError](#IntegrationResponseError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string |  yes  | Error code representing the type of error. |
 | message | string |  yes  | A human-readable message providing more details about the error. |
 | exception | string |  yes  | The exception name or type. |
 | field | string |  no  | The field associated with the error, if applicable. |
 | location | string |  no  | The location of the field, such as 'query', 'param' or 'body'. |

---


 
 
 #### [IntegrationErrorResponse](#IntegrationErrorResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  yes  | A message indicating the failure of the operation. |
 | meta | [IntegrationResponseMeta](#IntegrationResponseMeta) |  yes  |  |
 | error | [IntegrationResponseError](#IntegrationResponseError) |  yes  |  |

---


 
 
 #### [ValidateCredentialsData](#ValidateCredentialsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  |  |
 | organizationId | string |  yes  |  |
 | organizationName | string |  no  |  |

---


 
 
 #### [ValidateCredentialsResponse](#ValidateCredentialsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  yes  | Response message indicating the result of the operation. |
 | meta | [IntegrationResponseMeta](#IntegrationResponseMeta) |  yes  |  |
 | data | [ValidateCredentialsData](#ValidateCredentialsData) |  yes  |  |

---


 
 
 #### [PaymentLinkResponse](#PaymentLinkResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | string |  no  |  |
 | message | string |  no  |  |
 | paymentLink | string |  no  |  |

---


 
 
 #### [ApplicationCutomer](#ApplicationCutomer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | countryCode | string |  no  |  |
 | mobile | string |  yes  |  |
 | uid | string |  no  |  |
 | email | string |  no  |  |

---


 
 
 #### [GeoLocation](#GeoLocation)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | latitude | number |  yes  |  |
 | longitude | number |  yes  |  |

---


 
 
 #### [Address](#Address)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | line1 | string |  no  |  |
 | line2 | string |  no  |  |
 | city | string |  no  |  |
 | state | string |  no  |  |
 | country | string |  no  |  |
 | pincode | string |  no  |  |
 | type | string |  no  |  |
 | geoLocation | [GeoLocation](#GeoLocation) |  no  |  |

---


 
 
 #### [OrderItems](#OrderItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | category | string |  no  |  |
 | sku | string |  no  |  |
 | rate | number |  no  |  |
 | quantity | number |  no  |  |

---


 
 
 #### [Order](#Order)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | valueInPaise | number |  yes  |  |
 | uid | string |  yes  |  |
 | items | [[OrderItems](#OrderItems)] |  no  |  |
 | shippingAddress | [Address](#Address) |  no  |  |
 | billingAddress | [Address](#Address) |  no  |  |

---


 
 
 #### [Device](#Device)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ipAddress | string |  yes  |  |
 | userAgent | string |  yes  |  |
 | latitude | number |  no  |  |
 | longitude | number |  no  |  |

---


 
 
 #### [PaymentLinkRequest](#PaymentLinkRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | autoCapture | boolean |  no  |  |
 | lenderId | string |  no  |  |
 | emiTenure | number |  no  |  |
 | customer | [ApplicationCutomer](#ApplicationCutomer) |  yes  |  |
 | order | [Order](#Order) |  yes  |  |
 | device | [Device](#Device) |  no  |  |
 | meta | string |  no  |  |

---


 
 
 #### [UpdateLenderStatusSchemaRequest](#UpdateLenderStatusSchemaRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | merchantId | string |  no  |  |
 | enable | boolean |  no  |  |

---


 
 
 #### [UpdateLenderStatusSchemaResponse](#UpdateLenderStatusSchemaResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | merchantId | string |  no  |  |
 | lenderId | string |  no  |  |
 | mid | string |  no  |  |
 | enable | boolean |  no  |  |
 | data | string |  no  |  |

---


 
 
 #### [LenderTheme](#LenderTheme)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | iconUrl | string |  no  |  |
 | logoUrl | string |  no  |  |

---


 
 
 #### [LenderDetails](#LenderDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | slug | string |  no  |  |
 | name | string |  no  |  |
 | id | string |  no  |  |
 | theme | [LenderTheme](#LenderTheme) |  no  |  |

---


 
 
 #### [OutstandingData](#OutstandingData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | lenderDetails | [LenderDetails](#LenderDetails) |  no  |  |
 | availableLimit | number |  no  |  |
 | creditLimit | number |  no  |  |
 | dueAmount | number |  no  |  |
 | outstandingAmount | number |  no  |  |
 | dueDate | string |  no  |  |

---


 
 
 #### [OutstandingDetailsResponse](#OutstandingDetailsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | outstandingDetails | [[OutstandingData](#OutstandingData)] |  no  |  |

---


 
 
 #### [CreateUserRequestSchema](#CreateUserRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | mobile | string |  yes  |  |
 | email | string |  no  |  |
 | firstName | string |  no  |  |
 | lastName | string |  no  |  |
 | gender | string |  no  |  |

---


 
 
 #### [CreateUserResponseSchema](#CreateUserResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user | [UserSchema](#UserSchema) |  no  |  |

---


 
 
 #### [UserSchema](#UserSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | firstName | string |  no  |  |
 | lastName | string |  no  |  |
 | mobile | string |  no  |  |
 | email | string |  no  |  |
 | gender | string |  no  |  |
 | dob | string |  no  |  |
 | active | boolean |  no  |  |
 | profilePicUrl | string |  no  |  |
 | isEmailVerified | boolean |  no  |  |
 | createdAt | string |  no  |  |
 | updatedAt | string |  no  |  |
 | deletedAt | string |  no  |  |

---




