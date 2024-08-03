



##### [Back to Platform docs](./README.md)

## Customer Methods
Authentication Service
* [validate](#validate)
* [createTransaction](#createtransaction)
* [link](#link)
* [unlink](#unlink)
* [refund](#refund)
* [refundStatus](#refundstatus)
* [getSchemes](#getschemes)
* [checkEligibility](#checkeligibility)
* [getRepaymentLink](#getrepaymentlink)
* [getAll](#getall)
* [addVintageData](#addvintagedata)



## Methods with example and description


### validate
Validate Customer



```javascript
// Promise
const promise =  
        customer.validate(
            { 
              body : value
            
         }
        );

// Async/Await
const data = await 
                    customer.validate(
                    { 
                       body : value
                    
                     });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [ValidateCustomer](#ValidateCustomer) | yes | Request body |


The Validate Customer API processes validity checks using customer details, order information, a redirect URL, and device data. It returns `Disabled` if the transaction cannot proceed due to reasons such as the customer's limit being unavailable, already used, the customer being blocked, the pincode not being serviceable, or the SKU/product category not being serviceable by the lender. It returns `Enabled` if the transaction is allowed.

*Returned Response:*




[ValidateCustomerSuccess](#ValidateCustomerSuccess)

Success. Returns a JSON object as shown below. Refer `ValidateCustomerSuccess` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### createTransaction
Create Transaction



```javascript
// Promise
const promise =  
        customer.createTransaction(
            { 
              body : value
            
         }
        );

// Async/Await
const data = await 
                    customer.createTransaction(
                    { 
                       body : value
                    
                     });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CreateTransaction](#CreateTransaction) | yes | Request body |


The Create Transaction API processes transactions using customer details, order information, a redirect URL, and device data. It returns `Disabled` if the transaction cannot proceed due to reasons such as the customer's limit being unavailable, already used, the customer being blocked, the pincode not being serviceable, or the SKU/product category not being serviceable by the lender. If the transaction is allowed, it returns `Enabled` along with the redirect URL and the user status as authorized.

*Returned Response:*




[CreateTransactionSuccess](#CreateTransactionSuccess)

Success. Returns a JSON object as shown below. Refer `CreateTransactionSuccess` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; CreateTransactionResponseExample</i></summary>

```json
{
  "value": {
    "redirectUrl": "https://account.potlee.co.in/auth/login?onboardingToken=e738521b-a763-460d-a440-d9570e79be47&redirectUrl=https://url.merchant.com/callback",
    "message": "Payment Authorised",
    "userStatus": "PAYMENT_AUTHORISED"
  }
}
```
</details>

</details>









---


### link
Link account



```javascript
// Promise
const promise =  
        customer.link(
            { 
              body : value
            
         }
        );

// Async/Await
const data = await 
                    customer.link(
                    { 
                       body : value
                    
                     });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [LinkAccount](#LinkAccount) | yes | Request body |


The Link API generates a merchant-linked session for the user, enabling automatic login to complete payment or repayment activities seamlessly. This session ensures a smooth and secure transaction process without requiring the user to manually log in.

*Returned Response:*




[LinkAccountSuccess](#LinkAccountSuccess)

Success. Returns a JSON object as shown below. Refer `LinkAccountSuccess` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; redirectUrl</i></summary>

```json
"https://account.potlee.co.in/auth/login?linkingToken=1245rtfyg765"
```
</details>

</details>









---


### unlink
Unlink account



```javascript
// Promise
const promise =  
        customer.unlink(
            { 
              body : value
            
         }
        );

// Async/Await
const data = await 
                    customer.unlink(
                    { 
                       body : value
                    
                     });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [UnlinkAccount](#UnlinkAccount) | yes | Request body |


The Unlink API serves as the reverse of the Link API. It terminates the merchant-linked session for the user, effectively logging them out and preventing any further automatic login for payment or repayment activities. This ensures security and control over session management.

*Returned Response:*




[UnlinkAccountSuccess](#UnlinkAccountSuccess)

Success. Returns a JSON object as shown below. Refer `UnlinkAccountSuccess` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
true
```
</details>

</details>









---


### refund
Refund Order



```javascript
// Promise
const promise =  
        customer.refund(
            { 
              body : value
            
         }
        );

// Async/Await
const data = await 
                    customer.refund(
                    { 
                       body : value
                    
                     });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [Refund](#Refund) | yes | Request body |


The Refund API processes refunds based on business arrangements and returns the corresponding status of the refund request. The possible statuses include: - SUCCESS: The refund was processed successfully. - FAILED: The refund request failed. - PENDING: The refund request is still being processed and is awaiting completion.

*Returned Response:*




[RefundResponse](#RefundResponse)

Success. Returns a JSON object as shown below. Refer `RefundResponse` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; status</i></summary>

```json
"SUCCESS"
```
</details>

<details>
<summary><i>&nbsp; message</i></summary>

```json
"Refund request has been successfully recorded."
```
</details>

<details>
<summary><i>&nbsp; refundId</i></summary>

```json
"R123"
```
</details>

<details>
<summary><i>&nbsp; transactionId</i></summary>

```json
"TXN1234567dsfg"
```
</details>

</details>









---


### refundStatus
Check Refund status



```javascript
// Promise
const promise =  
        customer.refundStatus(
            { 
             refundId : value,
             orderId : value
            
         }
        );

// Async/Await
const data = await 
                    customer.refundStatus(
                    { 
                      refundId : value,
                      orderId : value
                    
                     });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| refundId | string | no | This is the refund ID |    
| orderId | string | no | This is the order ID |  



The Refund Status API returns the current status of a refund request based on business arrangements. The possible statuses include: - SUCCESS: The refund was processed successfully. - FAILED: The refund request failed. - PENDING: The refund request is still being processed and is awaiting completion.

*Returned Response:*




[RefundStatus](#RefundStatus)

Success. Returns a JSON object as shown below. Refer `RefundStatus` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; orderId</i></summary>

```json
"PM-28"
```
</details>

<details>
<summary><i>&nbsp; userId</i></summary>

```json
"c004a863-bce5-492b-b7aa-ba2890bc9e25"
```
</details>

<details>
<summary><i>&nbsp; merchantId</i></summary>

```json
"3e0cf7da-ad5f-4c99-a9e7-49cad484ef37"
```
</details>

<details>
<summary><i>&nbsp; lenderId</i></summary>

```json
"f622b3e8-c797-434d-948f-d0fda56e3db6"
```
</details>

<details>
<summary><i>&nbsp; refund</i></summary>

```json
[
  {
    "id": "10122313672606485999",
    "loanAccountNumber": "CASHe-1686764747795",
    "orderItems": {
      "list": [
        {
          "sku": "1",
          "rate": "1",
          "category": "1",
          "quantity": 1
        }
      ]
    },
    "amount": 3000,
    "status": "SUCCESS",
    "processedDate": "2023-06-14T17:44:28.052Z",
    "createdAt": "2023-06-14T17:44:28.052Z"
  }
]
```
</details>

</details>









---


### getSchemes
Get schemes



```javascript
// Promise
const promise =  
        customer.getSchemes(
            { 
              body : value
            
         }
        );

// Async/Await
const data = await 
                    customer.getSchemes(
                    { 
                       body : value
                    
                     });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [GetSchemesRequest](#GetSchemesRequest) | yes | Request body |


The Schemes API returns Buy Now, Pay Later (BNPL) and EMI plans offered by lenders for the user. It provides details on available financing options, including terms and conditions for both BNPL and EMI arrangements.

*Returned Response:*




[GetSchemesSuccess](#GetSchemesSuccess)

Success. Returns a JSON object as shown below. Refer `GetSchemesSuccess` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; userId</i></summary>

```json
"bf94b96a-1a15-406b-8d2f-0b37bfe47732"
```
</details>

<details>
<summary><i>&nbsp; lenders</i></summary>

```json
[
  {
    "slug": "cashe",
    "name": "CASHe",
    "title": "CASHe",
    "subtitle": "Bhanix Finance and Investment Limited",
    "isDefault": false,
    "logoUrl": "https://cdn.pixelbin.io/v2/potlee/original/public/lenders/lenderLogo/v2/512h-logo/cashe-logo.png",
    "amount": 5000,
    "paymentOptions": {
      "emis": [
        {
          "id": 62,
          "title": "3 Months - EMIs",
          "subtitle": "CASHe Shop 3EMI (PaymentGateway)",
          "description": "3 Months - No cost EMIs",
          "tenure": 3,
          "interest": 0,
          "processingFee": 75,
          "amount": 1692,
          "emiSchedule": [
            {
              "installmentNo": 1,
              "installmentAmount": 1741,
              "dueDate": "2023-12-22T12:00:00.000+00:00",
              "dueAmount": 3334
            },
            {
              "installmentNo": 2,
              "installmentAmount": 1666,
              "dueDate": "2024-01-22T12:00:00.000+00:00",
              "dueAmount": 1668
            },
            {
              "installmentNo": 3,
              "installmentAmount": 1666,
              "dueDate": "2024-02-22T12:00:00.000+00:00",
              "dueAmount": 2
            }
          ],
          "isDefault": false
        }
      ],
      "payLater": {
        "id": 1,
        "title": "PayLater",
        "subtitle": "CASHe_PayLater",
        "description": "Customer can pay after 30days",
        "tenure": 1,
        "interest": 0,
        "processingFee": 0,
        "amount": 5000,
        "emiSchedule": null,
        "isDefault": true
      }
    }
  }
]
```
</details>

</details>









---


### checkEligibility
Check Credit Eligibility



```javascript
// Promise
const promise =  
        customer.checkEligibility(
            { 
              body : value
            
         }
        );

// Async/Await
const data = await 
                    customer.checkEligibility(
                    { 
                       body : value
                    
                     });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CheckEligibilityRequest](#CheckEligibilityRequest) | yes | Request body |


Use this API to pre approve by checking the customer's credit eligibility based on mobile number and countryCode and vintage data of monthly transactions.

*Returned Response:*




[EligibilitySuccess](#EligibilitySuccess)

Success. Returns a JSON object as shown below. Refer `EligibilitySuccess` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; EligibilitySuccess</i></summary>

```json
{
  "value": {
    "status": "ENABLED",
    "message": "User is eligible to transact",
    "redirectUrl": "https://account.potlee.co.in",
    "creditLimit": [
      {
        "availableLimit": 300000,
        "possibleLimit": 500000,
        "lender": {
          "slug": "ugro",
          "name": "UGRO",
          "logo": "https://cdn.pixelbin.io/v2/potlee/original/public/ugro/ugro_logo"
        }
      }
    ]
  }
}
```
</details>

</details>









---


### getRepaymentLink
Get Repayment link



```javascript
// Promise
const promise =  
        customer.getRepaymentLink(
            { 
              body : value
            
         }
        );

// Async/Await
const data = await 
                    customer.getRepaymentLink(
                    { 
                       body : value
                    
                     });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [RepaymentRequest](#RepaymentRequest) | yes | Request body |


The Repayment Link API generates a repayment link based on the current outstanding balance. The URL provided allows users to make payments and settle their outstanding amounts directly.

*Returned Response:*




[RepaymentResponse](#RepaymentResponse)

Success. The request has been processed successfully and the response contains the requested data.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; RepaymentUrlResponseExample</i></summary>

```json
{
  "value": {
    "message": "The request has been processed successfully.",
    "data": {
      "repaymentUrl": "https://account.settle.club/magic-link/65bafe6a-f665-4378-964f-fc7457585ac7"
    },
    "meta": {
      "timestamp": "2024-07-16T13:30:10.663Z",
      "version": "v1.0",
      "product": "Settle Checkout"
    }
  }
}
```
</details>

</details>









---


### getAll
Get List of Users



```javascript
// Promise
const promise =  
        customer.getAll(
            { 
             page : value,
             limit : value,
             name : value,
             id : value,
             mobile : value
            
         }
        );

// Async/Await
const data = await 
                    customer.getAll(
                    { 
                      page : value,
                      limit : value,
                      name : value,
                      id : value,
                      mobile : value
                    
                     });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| page | number | yes | This is page number |   
| limit | number | yes | This is no of transaction |    
| name | string | no | This is name for filter |    
| id | string | no | This is uuid for filter |    
| mobile | string | no | This is Mobile Number for filter |  



The Customer Listing API returns a paginated list of users associated with the specified organization. Supports filtering by various query parameters such as name, ID, and mobile number.

*Returned Response:*




[UserResponse](#UserResponse)

Success. Returns a JSON object as shown below. Refer `UserResponse` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; UserExample</i></summary>

```json
{
  "value": {
    "gender": "male",
    "active": true,
    "profilePicUrl": "https://d2co8r51m5ca2d.cloudfront.net/inapp_banners/default_profile_img.png",
    "id": "5e68af49cfa09bf7233022f1",
    "firstName": "Akash",
    "lastName": "Mane",
    "mobile": "8652523958",
    "countryCode": 91,
    "email": "akashmane@gofynd.com",
    "createdAt": "2020-03-11T09:28:41.982Z",
    "updatedAt": "2021-02-04T10:10:44.981Z"
  }
}
```
</details>

</details>









---


### addVintageData
Add user vintage details



```javascript
// Promise
const promise =  
        customer.addVintageData(
            { 
              body : value
            
         }
        );

// Async/Await
const data = await 
                    customer.addVintageData(
                    { 
                       body : value
                    
                     });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [VintageData](#VintageData) | yes | Request body |


Use this API to add vintage details of the user.

*Returned Response:*




[AddVintageResponse](#AddVintageResponse)

Success. Returns a JSON object as shown below. Refer `AddVintageResponse` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; AddVintageResponse</i></summary>

```json
{
  "value": {
    "message": "Request Processed Successfully.",
    "meta": {
      "timestamp": "2024-07-10T13:56:46.396Z",
      "version": "v1.0",
      "product": "Settle Checkout"
    },
    "data": {}
  }
}
```
</details>

</details>









---



### Schemas

 
 
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


 
 
 #### [IntegrationSuccessResponse](#IntegrationSuccessResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  yes  | A message indicating the success of the operation. |
 | meta | [IntegrationResponseMeta](#IntegrationResponseMeta) |  yes  |  |
 | data | string |  yes  | The data payload of the response. The structure of this object will vary depending on the specific API endpoint. |

---


 
 
 #### [IntegrationErrorResponse](#IntegrationErrorResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  yes  | A message indicating the failure of the operation. |
 | meta | [IntegrationResponseMeta](#IntegrationResponseMeta) |  yes  |  |
 | errors | [[IntegrationResponseError](#IntegrationResponseError)] |  no  |  |

---


 
 
 #### [RefundResponse](#RefundResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | string |  no  |  |
 | message | string |  no  |  |
 | transactionId | string |  no  |  |
 | refundId | string |  no  |  |
 | __headers | string |  no  |  |

---


 
 
 #### [UserSource](#UserSource)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | userId | string |  no  |  |
 | type | string |  no  |  |
 | sourceId | string |  no  |  |
 | meta | string |  no  |  |
 | createdAt | string |  no  |  |
 | updatedAt | string |  no  |  |
 | app | string |  no  |  |
 | entityId | string |  no  |  |
 | userMerchants | [any] |  no  |  |

---


 
 
 #### [UserSchema](#UserSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | firstName | string |  no  |  |
 | lastName | string |  no  |  |
 | countryCode | string |  no  |  |
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


 
 
 #### [count](#count)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | totalUsers | string |  no  |  |

---


 
 
 #### [FilterByDate](#FilterByDate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | startDate | string |  no  |  |
 | endDate | string |  no  |  |

---


 
 
 #### [LenderCount](#LenderCount)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | totalLenders | string |  no  |  |

---


 
 
 #### [LenderSchema](#LenderSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | name | string |  no  |  |
 | active | boolean |  no  |  |
 | createdAt | string |  no  |  |
 | updatedAt | string |  no  |  |
 | deletedAt | string |  no  |  |

---


 
 
 #### [TotalUsersPerLender](#TotalUsersPerLender)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | filters | [[Filters](#Filters)] |  yes  |  |
 | page | [PageResponse](#PageResponse) |  yes  |  |
 | lenderList | [[TotalUsersPerLenderData](#TotalUsersPerLenderData)] |  yes  |  |

---


 
 
 #### [TotalUsersPerLenderData](#TotalUsersPerLenderData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | name | string |  no  |  |
 | active | boolean |  no  |  |
 | createdAt | string |  no  |  |
 | updatedAt | string |  no  |  |
 | deletedAt | string |  no  |  |
 | totalUsers | string |  no  |  |

---


 
 
 #### [TotalUserByLender](#TotalUserByLender)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | count | string |  no  |  |

---


 
 
 #### [UsersByLender](#UsersByLender)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | firstName | string |  no  |  |
 | lastName | string |  no  |  |
 | mobile | string |  no  |  |
 | email | string |  no  |  |
 | name | string |  no  |  |

---


 
 
 #### [ErrorResponse](#ErrorResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | info | string |  no  |  |
 | code | string |  no  |  |
 | requestId | string |  no  |  |
 | meta | string |  no  |  |

---


 
 
 #### [EditProfileRequest](#EditProfileRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | firstName | string |  no  |  |
 | lastName | string |  no  |  |
 | countryCode | string |  no  |  |
 | mobile | string |  no  |  |
 | email | string |  no  |  |
 | gender | string |  no  |  |
 | dob | string |  no  |  |
 | registrationToken | string |  no  |  |

---


 
 
 #### [VerifyOtpRequest](#VerifyOtpRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | requestId | string |  yes  |  |
 | otp | string |  yes  |  |
 | captchaCode | string |  no  |  |
 | androidHash | string |  no  |  |
 | referralCode | string |  no  |  |
 | onboardingToken | string |  no  |  |

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


 
 
 #### [ReSendMobileOtpRequest](#ReSendMobileOtpRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | captchaCode | string |  no  |  |
 | token | string |  yes  |  |
 | androidHash | string |  no  |  |

---


 
 
 #### [SendOtpRequest](#SendOtpRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | countryCode | string |  no  |  |
 | captchaCode | string |  no  |  |
 | mobile | string |  no  |  |

---


 
 
 #### [ApplicationUser](#ApplicationUser)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user | [UserSchema](#UserSchema) |  no  |  |

---


 
 
 #### [SendOtpResponse](#SendOtpResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | resendTimer | number |  no  |  |
 | resendToken | string |  no  |  |
 | success | boolean |  no  |  |
 | requestId | string |  no  |  |
 | message | string |  no  |  |
 | mobile | string |  no  |  |
 | countryCode | string |  no  |  |
 | email | string |  no  |  |
 | resendEmailToken | string |  no  |  |
 | registerToken | string |  no  |  |
 | verifyEmailOtp | boolean |  no  |  |
 | verifyMobileOtp | boolean |  no  |  |
 | userExists | boolean |  no  |  |

---


 
 
 #### [EmailUpdate](#EmailUpdate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | string |  no  |  |

---


 
 
 #### [UserUpdateRequest](#UserUpdateRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | firstName | any |  no  |  |
 | lastName | any |  no  |  |
 | countryCode | string |  yes  |  |
 | mobile | string |  yes  |  |
 | email | any |  no  |  |
 | gender | any |  no  |  |
 | dob | any |  no  |  |
 | active | boolean |  no  |  |
 | profilePictureUrl | any |  no  |  |
 | isEmailVerified | boolean |  no  |  |

---


 
 
 #### [LenderUpdateRequest](#LenderUpdateRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  |  |
 | name | string |  no  |  |
 | active | boolean |  no  |  |

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
 | isNew | boolean |  no  |  |

---


 
 
 #### [LogoutSuccess](#LogoutSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | logout | boolean |  no  |  |

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
 | isNew | boolean |  no  |  |
 | countryCode | string |  no  |  |
 | otpLength | number |  no  |  |

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

---


 
 
 #### [Location](#Location)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | latitude | number |  no  |  |
 | longitude | number |  no  |  |

---


 
 
 #### [OrderAddress](#OrderAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | line1 | string |  no  |  |
 | line2 | string |  no  |  |
 | city | string |  no  |  |
 | state | string |  no  |  |
 | country | string |  no  |  |
 | pincode | string |  no  |  |
 | type | string |  no  |  |
 | geoLocation | [Location](#Location) |  no  |  |

---


 
 
 #### [CustomerObject](#CustomerObject)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | countryCode | string |  no  |  |
 | mobile | string |  yes  |  |
 | uid | string |  no  |  |
 | email | string |  no  |  |
 | firstname | string |  no  |  |
 | middleName | string |  no  |  |
 | lastName | string |  no  |  |

---


 
 
 #### [Order](#Order)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | valueInPaise | number |  yes  |  |
 | uid | string |  yes  |  |
 | items | [[Items](#Items)] |  no  |  |
 | shippingAddress | [OrderAddress](#OrderAddress) |  no  |  |
 | billingAddress | [OrderAddress](#OrderAddress) |  no  |  |

---


 
 
 #### [VerifyOrder](#VerifyOrder)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | valueInPaise | number |  yes  |  |
 | uid | string |  no  |  |
 | items | [[Items](#Items)] |  no  |  |
 | shippingAddress | [OrderAddress](#OrderAddress) |  no  |  |
 | billingAddress | [OrderAddress](#OrderAddress) |  no  |  |

---


 
 
 #### [OrderUid](#OrderUid)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | valueInPaise | number |  no  |  |
 | uid | string |  yes  |  |
 | items | [[Items](#Items)] |  no  |  |
 | shippingAddress | [OrderAddress](#OrderAddress) |  no  |  |
 | billingAddress | [OrderAddress](#OrderAddress) |  no  |  |

---


 
 
 #### [CustomerMeta](#CustomerMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ip | string |  yes  |  |
 | appVersion | string |  yes  |  |
 | appIdentifier | string |  no  |  |
 | customerUserAgent | string |  no  |  |
 | deviceId | string |  yes  |  |

---


 
 
 #### [Device](#Device)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ipAddress | string |  yes  |  |
 | userAgent | string |  yes  |  |
 | latitude | number |  no  |  |
 | longitude | number |  no  |  |

---


 
 
 #### [ValidateCustomer](#ValidateCustomer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | customer | [CustomerObject](#CustomerObject) |  yes  |  |
 | order | [VerifyOrder](#VerifyOrder) |  yes  |  |
 | device | [Device](#Device) |  yes  |  |
 | meta | string |  no  |  |
 | fetchLimitOptions | boolean |  no  |  |
 | fetchPlans | boolean |  no  |  |

---


 
 
 #### [CreateTransaction](#CreateTransaction)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | redirectUrl | string |  yes  | User will be redirected back to this URL after a successful or a failed transaction. |
 | customer | [CustomerObject](#CustomerObject) |  yes  |  |
 | order | [Order](#Order) |  yes  |  |
 | device | [Device](#Device) |  yes  |  |
 | meta | string |  no  | Any additional details |
 | emiTenure | number |  no  | EMI tenure selected by customer |
 | lenderSlug | string |  no  | slug of lender selected by customer |
 | consents | [[Consents](#Consents)] |  no  | Consent for AUTO_DISBURSAL is mandatory while calling createTransaction API. |

---


 
 
 #### [ResendPaymentRequest](#ResendPaymentRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | redirectUrl | string |  no  |  |
 | customer | [CustomerObject](#CustomerObject) |  yes  |  |
 | order | [OrderUid](#OrderUid) |  yes  |  |

---


 
 
 #### [ValidateCustomerSuccess](#ValidateCustomerSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | string |  yes  | Indicates whether a user is allowed to perform the transaction or not |
 | userStatus | string |  yes  | Represents the status of the user for transaction eligibility |
 | message | string |  yes  | Message to be displayed to the user |
 | schemes | [[SchemeResponse](#SchemeResponse)] |  no  | An array of possible schemes of lenders available for a transaction. |
 | limit | [LimitResponse](#LimitResponse) |  no  | Limit details of available and possible lenders for a transaction. |
 | __headers | string |  no  |  |

---


 
 
 #### [CreateTransactionSuccess](#CreateTransactionSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | chargeToken | string |  no  | A unique token for completing the transaction. Charge token is received only if a valid user session is passed in request and auto capture is false. ASP merchants do not receive charge token. |
 | redirectUrl | string |  no  | URL to which the user should be redirected to complete the transaction. |
 | message | string |  yes  | A message or information related to the transaction. |
 | transactionId | string |  no  | A unique identifier for the transaction. This is received only if session is passed and auto capture is true in request. ASP merchants do not receive transaction ID in this response. |
 | status | string |  no  | Indicates transaction status in case of auto disbursal. |
 | userStatus | string |  no  | Represents the status of the user for transaction eligibility |
 | __headers | string |  no  |  |

---


 
 
 #### [SupportDocuments](#SupportDocuments)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | fileName | string |  no  |  |
 | fileUrl | string |  no  |  |

---


 
 
 #### [CreateTicketResponse](#CreateTicketResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | serviceRequestId | string |  no  |  |
 | message | string |  no  |  |

---


 
 
 #### [CreateTicket](#CreateTicket)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | category | string |  yes  |  |
 | transactionId | string |  no  |  |
 | description | string |  yes  |  |
 | documents | [[SupportDocuments](#SupportDocuments)] |  no  |  |

---


 
 
 #### [InitiateTransactions](#InitiateTransactions)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | token | string |  yes  |  |

---


 
 
 #### [GetMobileFromToken](#GetMobileFromToken)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | token | string |  yes  |  |

---


 
 
 #### [GetDataFromToken](#GetDataFromToken)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | token | string |  yes  |  |

---


 
 
 #### [MerchantDetails](#MerchantDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | website | string |  no  |  |
 | logo | string |  no  |  |

---


 
 
 #### [InitiateTransactionsSuccess](#InitiateTransactionsSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | chargeToken | string |  yes  |  |
 | session | string |  no  |  |
 | expiry | string |  no  |  |
 | hash | string |  no  |  |
 | order | [Order](#Order) |  no  |  |
 | isAsp | boolean |  no  |  |
 | merchant | [MerchantDetails](#MerchantDetails) |  no  |  |
 | redirectUrl | string |  no  |  |

---


 
 
 #### [RetrieveMobileFromToken](#RetrieveMobileFromToken)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | countryCode | string |  yes  |  |
 | mobile | string |  yes  |  |

---


 
 
 #### [CreateDashboardTemplateRequest](#CreateDashboardTemplateRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  yes  |  |
 | version | string |  yes  |  |
 | isDefault | boolean |  no  |  |
 | sections | [[TemplateSections](#TemplateSections)] |  yes  |  |

---


 
 
 #### [TemplateSections](#TemplateSections)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | sequence | number |  yes  |  |
 | isAvailableInMobile | boolean |  yes  |  |
 | isAvailableInDesktop | boolean |  yes  |  |
 | component | [TemplateComponent](#TemplateComponent) |  yes  |  |

---


 
 
 #### [TemplateComponent](#TemplateComponent)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  yes  |  |
 | description | string |  yes  |  |
 | isAvailableInDesktop | boolean |  no  |  |
 | partnerApplications | [[PartnerApplications](#PartnerApplications)] |  no  |  |
 | banners | [[Banners](#Banners)] |  no  |  |
 | tips | [[Tips](#Tips)] |  no  |  |

---


 
 
 #### [PartnerApplications](#PartnerApplications)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  yes  |  |
 | description | string |  no  |  |
 | urlPath | string |  no  |  |
 | urlTarget | string |  no  |  |
 | imageUrl | string |  yes  |  |
 | sequence | number |  no  |  |

---


 
 
 #### [Offerings](#Offerings)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  yes  |  |
 | description | string |  no  |  |
 | urlPath | string |  no  |  |
 | urlTarget | string |  no  |  |
 | imageUrl | string |  yes  |  |
 | sequence | number |  no  |  |
 | gradient | [string] |  yes  |  |

---


 
 
 #### [Banners](#Banners)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | imageUrl | string |  yes  |  |
 | action | [ActionSchema](#ActionSchema) |  no  |  |

---


 
 
 #### [Tips](#Tips)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | description | string |  no  |  |
 | urlPath | string |  yes  |  |
 | urlTarget | string |  no  |  |
 | imageUrl | string |  no  |  |
 | sequence | number |  no  |  |

---


 
 
 #### [DashboardTemplateResponse](#DashboardTemplateResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | name | string |  no  |  |
 | version | string |  no  |  |
 | active | boolean |  no  |  |
 | sections | [[SectionSchema](#SectionSchema)] |  yes  |  |

---


 
 
 #### [SectionSchema](#SectionSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  yes  |  |
 | title | string |  no  |  |
 | description | string |  no  |  |
 | partners | [[PartnerApplicationsResponse](#PartnerApplicationsResponse)] |  no  |  |
 | banners | [[BannersResponse](#BannersResponse)] |  no  |  |
 | tips | [[TipsResponse](#TipsResponse)] |  no  |  |

---


 
 
 #### [PartnerApplicationsResponse](#PartnerApplicationsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | name | string |  yes  |  |
 | description | string |  no  |  |
 | action | [ActionSchema](#ActionSchema) |  yes  |  |
 | imageUrl | string |  yes  |  |

---


 
 
 #### [OfferingsResponse](#OfferingsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | name | string |  yes  |  |
 | description | string |  no  |  |
 | action | [ActionSchema](#ActionSchema) |  yes  |  |
 | imageUrl | string |  yes  |  |
 | gradient | [string] |  yes  |  |

---


 
 
 #### [BannersResponse](#BannersResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action | [ActionSchema](#ActionSchema) |  no  |  |
 | imageUrl | string |  yes  |  |

---


 
 
 #### [TipsSection](#TipsSection)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | tips | [[TipsResponse](#TipsResponse)] |  no  |  |
 | categories | [[TipsCategories](#TipsCategories)] |  no  |  |
 | action | [ActionSchema](#ActionSchema) |  no  |  |

---


 
 
 #### [TipsResponse](#TipsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | category | string |  no  |  |
 | description | string |  no  |  |
 | action | [ActionSchema](#ActionSchema) |  yes  |  |
 | imageUrl | string |  no  |  |

---


 
 
 #### [TipsCategories](#TipsCategories)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  |  |
 | title | string |  yes  |  |

---


 
 
 #### [ActionSchema](#ActionSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  no  |  |
 | page | [PageSchema](#PageSchema) |  no  |  |
 | popup | [PageSchema](#PageSchema) |  no  |  |

---


 
 
 #### [UpdateDashboardTemplateRequest](#UpdateDashboardTemplateRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  |  |
 | name | string |  no  |  |
 | version | string |  no  |  |
 | isDefault | boolean |  no  |  |
 | active | boolean |  no  |  |
 | sections | [[UpdateTemplateSections](#UpdateTemplateSections)] |  no  |  |

---


 
 
 #### [UpdateTemplateSections](#UpdateTemplateSections)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  |  |
 | sequence | number |  no  |  |
 | isAvailableInMobile | boolean |  no  |  |
 | isAvailableInDesktop | boolean |  no  |  |
 | active | boolean |  no  |  |
 | component | [UpdateTemplateComponent](#UpdateTemplateComponent) |  no  |  |

---


 
 
 #### [UpdateTemplateComponent](#UpdateTemplateComponent)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  |  |
 | name | string |  no  |  |
 | description | string |  no  |  |
 | isAvailableInDesktop | boolean |  no  |  |
 | active | boolean |  no  |  |
 | partners | [[UpdatePartnerApplications](#UpdatePartnerApplications)] |  no  |  |
 | banners | [[UpdateBanners](#UpdateBanners)] |  no  |  |
 | tips | [[UpdateTips](#UpdateTips)] |  no  |  |

---


 
 
 #### [UpdatePartnerApplications](#UpdatePartnerApplications)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  |  |
 | name | string |  no  |  |
 | description | string |  no  |  |
 | action | string |  no  |  |
 | imageUrl | string |  no  |  |
 | sequence | number |  no  |  |
 | active | boolean |  no  |  |

---


 
 
 #### [UpdateOfferings](#UpdateOfferings)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  |  |
 | name | string |  no  |  |
 | description | string |  no  |  |
 | urlPath | string |  no  |  |
 | urlTarget | string |  no  |  |
 | imageUrl | string |  no  |  |
 | sequence | number |  no  |  |
 | gradient | [string] |  no  |  |

---


 
 
 #### [UpdateBanners](#UpdateBanners)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  |  |
 | imageUrl | string |  no  |  |
 | action | string |  no  |  |
 | sequence | number |  no  |  |
 | active | boolean |  no  |  |

---


 
 
 #### [UpdateTips](#UpdateTips)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  |  |
 | name | string |  no  |  |
 | description | string |  no  |  |
 | imageUrl | string |  no  |  |
 | action | string |  no  |  |
 | sequence | number |  no  |  |
 | active | boolean |  no  |  |

---


 
 
 #### [NavigationsMobileResponse](#NavigationsMobileResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | tabs | [[TabsSchema](#TabsSchema)] |  yes  |  |
 | profileSections | [[ProfileSectionSchema](#ProfileSectionSchema)] |  yes  |  |
 | footer | string |  no  |  |

---


 
 
 #### [TabsSchema](#TabsSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  yes  |  |
 | action | [ActionSchema](#ActionSchema) |  no  |  |
 | page | [PageSchema](#PageSchema) |  yes  |  |
 | icon | string |  yes  |  |
 | activeIcon | string |  yes  |  |
 | active | boolean |  yes  |  |

---


 
 
 #### [PageSchema](#PageSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | link | string |  no  |  |
 | type | [PageType](#PageType) |  no  |  |
 | params | [String: [string]] |  no  |  |
 | query | [String: string] |  no  |  |

---


 
 
 #### [ProfileSectionSchema](#ProfileSectionSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  yes  |  |
 | navigations | [[ProfileNavigationSchema](#ProfileNavigationSchema)] |  yes  |  |
 | active | boolean |  yes  |  |

---


 
 
 #### [ProfileNavigationSchema](#ProfileNavigationSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  yes  |  |
 | description | string |  no  |  |
 | icon | string |  yes  |  |
 | type | string |  yes  |  |
 | action | [ActionSchema](#ActionSchema) |  no  |  |
 | active | boolean |  no  |  |

---


 
 
 #### [SendPNSRegisterRequest](#SendPNSRegisterRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | deviceId | string |  yes  |  |
 | deviceType | string |  yes  |  |
 | token | string |  yes  |  |

---


 
 
 #### [PNSRegisterResponse](#PNSRegisterResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | boolean |  no  |  |
 | message | string |  no  |  |

---


 
 
 #### [FaqResponse](#FaqResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | categories | [[CategorySchema](#CategorySchema)] |  no  |  |

---


 
 
 #### [CategorySchema](#CategorySchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | uid | string |  yes  |  |
 | title | string |  no  |  |
 | description | string |  no  |  |
 | logo | string |  no  |  |
 | questions | [[QuestionSchema](#QuestionSchema)] |  no  |  |

---


 
 
 #### [QuestionSchema](#QuestionSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | uid | string |  yes  |  |
 | title | string |  no  |  |
 | description | string |  no  |  |
 | displayOrder | number |  no  |  |
 | canRaiseRequest | boolean |  no  |  |

---


 
 
 #### [SupportCategories](#SupportCategories)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | kind | string |  no  |  |
 | display | string |  no  |  |

---


 
 
 #### [SupportCategoriesResponse](#SupportCategoriesResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | categories | [[SupportCategories](#SupportCategories)] |  no  |  |

---


 
 
 #### [SanctionLetterResponse](#SanctionLetterResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | sanctionedLetterFileUrl | string |  yes  |  |

---


 
 
 #### [KfsDocumentResponse](#KfsDocumentResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | kfsFileUrl | string |  yes  |  |

---


 
 
 #### [UserWhiteListedResponse](#UserWhiteListedResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | string |  no  |  |

---


 
 
 #### [UserConsentRequest](#UserConsentRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | consents | [string] |  no  |  |

---


 
 
 #### [Consents](#Consents)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  no  |  |
 | text | string |  no  |  |
 | purpose | string |  no  | If consent type is AUTO_DISBURSAL, purpose will be uid of order. |

---


 
 
 #### [UserConsentRequestV2](#UserConsentRequestV2)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | consents | [[Consents](#Consents)] |  no  |  |

---


 
 
 #### [UserConsentResponse](#UserConsentResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |

---


 
 
 #### [UserKycSteps](#UserKycSteps)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | index | string |  no  |  |
 | name | string |  no  |  |
 | rules | string |  no  |  |
 | active | boolean |  no  |  |
 | createdAt | string |  no  |  |
 | updatedAt | string |  no  |  |
 | deletedAt | string |  no  |  |

---


 
 
 #### [CreateKycStepRequest](#CreateKycStepRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  yes  |  |
 | index | string |  yes  |  |
 | active | boolean |  yes  |  |
 | rules | string |  no  |  |

---


 
 
 #### [RemoveKycStepRequest](#RemoveKycStepRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | index | string |  yes  |  |
 | active | boolean |  no  |  |
 | rules | string |  no  |  |

---


 
 
 #### [KycUpdateMessage](#KycUpdateMessage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |

---


 
 
 #### [MobileFromLinkingRequest](#MobileFromLinkingRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | token | string |  yes  |  |

---


 
 
 #### [MobileFromLinkingResponse](#MobileFromLinkingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | countryCode | string |  yes  |  |
 | mobile | string |  yes  |  |

---


 
 
 #### [SessionFromLinkingRequest](#SessionFromLinkingRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | token | string |  yes  |  |

---


 
 
 #### [SessionFromLinkingResponse](#SessionFromLinkingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | session | string |  yes  |  |
 | expiry | number |  yes  |  |

---


 
 
 #### [LinkAccount](#LinkAccount)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | customer | [CustomerObject](#CustomerObject) |  yes  |  |
 | redirectUrl | string |  yes  |  |
 | device | [Device](#Device) |  yes  |  |

---


 
 
 #### [LinkAccountSuccess](#LinkAccountSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | redirectUrl | string |  no  |  |
 | statusCode | number |  no  |  |
 | status | string |  no  |  |
 | message | string |  no  |  |
 | errorCode | string |  no  |  |
 | __headers | string |  no  |  |

---


 
 
 #### [UnlinkAccount](#UnlinkAccount)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | customer | [CustomerObject](#CustomerObject) |  yes  |  |
 | device | [Device](#Device) |  yes  |  |

---


 
 
 #### [UnlinkAccountSuccess](#UnlinkAccountSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | string |  yes  |  |
 | message | string |  yes  |  |
 | statusCode | number |  yes  |  |
 | userStatus | string |  no  |  |
 | errorCode | string |  no  |  |
 | __headers | string |  no  |  |

---


 
 
 #### [Refund](#Refund)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | fingerprint | string |  no  |  |
 | customer | [CustomerObject](#CustomerObject) |  no  |  |
 | refundItems | [[Items](#Items)] |  no  |  |
 | orderId | string |  yes  |  |
 | refundId | string |  yes  |  |
 | refundAmount | number |  yes  |  |
 | redirectionUrl | string |  no  |  |

---


 
 
 #### [Translation](#Translation)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | content | any |  no  |  |

---


 
 
 #### [FilterKeys](#FilterKeys)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display | string |  no  |  |
 | name | string |  no  |  |
 | kind | string |  no  |  |

---


 
 
 #### [FilterValues](#FilterValues)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display | string |  no  |  |
 | isSelected | boolean |  no  |  |
 | value | string |  no  |  |

---


 
 
 #### [Filters](#Filters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | key | [FilterKeys](#FilterKeys) |  no  |  |
 | values | [[FilterValues](#FilterValues)] |  no  |  |

---


 
 
 #### [PageResponse](#PageResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  yes  |  |
 | current | number |  yes  |  |
 | hasPrevious | boolean |  yes  |  |
 | hasNext | boolean |  yes  |  |
 | size | number |  yes  |  |
 | itemTotal | number |  yes  |  |

---


 
 
 #### [UserResponse](#UserResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | filters | [[Filters](#Filters)] |  yes  |  |
 | page | [PageResponse](#PageResponse) |  yes  |  |
 | listOfUsers | [[UserSchema](#UserSchema)] |  yes  |  |
 | __headers | string |  no  |  |

---


 
 
 #### [UserDetailRequest](#UserDetailRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  |  |

---


 
 
 #### [UserConsents](#UserConsents)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | userId | string |  no  |  |
 | ipAddress | string |  no  |  |
 | text | string |  no  |  |
 | createdAt | string |  no  |  |
 | updatedAt | string |  no  |  |
 | deletedAt | string |  no  |  |

---


 
 
 #### [CreditScoreSchema](#CreditScoreSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | userId | string |  no  |  |
 | cibil | number |  no  |  |
 | finbox | string |  no  |  |
 | systemAwarded | string |  no  |  |
 | isActive | boolean |  no  |  |
 | deletedAt | string |  no  |  |
 | updatedAt | string |  no  |  |
 | createdAt | string |  no  |  |

---


 
 
 #### [CreditLimitSchema](#CreditLimitSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | userId | string |  no  |  |
 | creditLimit | string |  no  |  |
 | createdAt | string |  no  |  |
 | updatedAt | string |  no  |  |
 | deletedAt | string |  no  |  |

---


 
 
 #### [Screen](#Screen)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | screenType | string |  no  |  |
 | name | string |  no  |  |
 | link | string |  no  |  |

---


 
 
 #### [UserStateSchema](#UserStateSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | screen | [Screen](#Screen) |  no  |  |

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


 
 
 #### [Items](#Items)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | category | string |  no  |  |
 | sku | string |  no  |  |
 | rate | number |  no  |  |
 | quantity | number |  no  |  |

---


 
 
 #### [RefundStatusList](#RefundStatusList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | orderItems | [[Items](#Items)] |  no  |  |
 | amount | number |  no  |  |
 | status | string |  no  |  |
 | createdAt | string |  no  |  |
 | processedDate | string |  no  |  |

---


 
 
 #### [RefundStatus](#RefundStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | orderId | string |  no  |  |
 | userId | string |  no  |  |
 | merchantId | string |  no  |  |
 | lenderId | string |  no  |  |
 | loanAccountNumber | string |  no  |  |
 | refund | [[RefundStatusList](#RefundStatusList)] |  no  |  |
 | __headers | string |  no  |  |

---


 
 
 #### [GetSchemesSuccess](#GetSchemesSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | userId | string |  no  |  |
 | lenders | [[SchemeResponse](#SchemeResponse)] |  yes  |  |
 | __headers | string |  no  |  |

---


 
 
 #### [ActiveEntityResponse](#ActiveEntityResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | activeEntity | string |  no  |  |

---


 
 
 #### [CustomerMetricsPivots](#CustomerMetricsPivots)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | date | string |  no  |  |
 | sum | number |  no  |  |

---


 
 
 #### [CustomerMetricsSubResponse](#CustomerMetricsSubResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | total | string |  no  |  |
 | pivots | [[CustomerMetricsPivots](#CustomerMetricsPivots)] |  no  |  |
 | title | string |  no  |  |
 | description | string |  no  |  |
 | valueFormat | string |  no  |  |
 | logo | string |  no  |  |

---


 
 
 #### [CustomerMetricsAnalytics](#CustomerMetricsAnalytics)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | totalCustomers | [CustomerMetricsSubResponse](#CustomerMetricsSubResponse) |  no  |  |
 | source | [CustomerMetricsSubResponse](#CustomerMetricsSubResponse) |  no  |  |

---


 
 
 #### [CustomerMetricsFilters](#CustomerMetricsFilters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  yes  |  |
 | display | string |  yes  |  |
 | value | [string] |  yes  |  |
 | isSelected | boolean |  no  |  |
 | isActive | boolean |  yes  |  |

---


 
 
 #### [CustomerMetrics](#CustomerMetrics)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | metrics | [CustomerMetricsAnalytics](#CustomerMetricsAnalytics) |  no  |  |
 | filters | [[CustomerMetricsFilters](#CustomerMetricsFilters)] |  no  |  |
 | sort | [[CustomerMetricsFilters](#CustomerMetricsFilters)] |  no  |  |

---


 
 
 #### [SchemeResponse](#SchemeResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | slug | string |  yes  | A slug identifier for the lender. |
 | isDefault | boolean |  yes  | Indicates if this is the default lender |
 | logoUrl | string |  yes  | URL to the logo of the lender |
 | name | string |  yes  | Name of the lender |
 | title | string |  yes  | Title of the lender |
 | subtitle | string |  yes  | Subtitle or additional information about the lender |
 | amount | number |  no  | Transaction amount |
 | paymentOptions | [SchemePaymentOptionsResponse](#SchemePaymentOptionsResponse) |  yes  |  |

---


 
 
 #### [SchemePaymentOptionsResponse](#SchemePaymentOptionsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | emis | [[SchemeEmiPaymentOptionResponse](#SchemeEmiPaymentOptionResponse)] |  no  |  |
 | payLater | [SchemePayLaterPaymentOptionResponse](#SchemePayLaterPaymentOptionResponse) |  no  |  |

---


 
 
 #### [SchemeEmiPaymentOptionResponse](#SchemeEmiPaymentOptionResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  | Unique identifier for the payment option. |
 | isDefault | boolean |  yes  | Indicates if this is the default payment option. |
 | description | string |  yes  | Description of the payment option. |
 | title | string |  yes  | Title of the payment option. |
 | subtitle | string |  yes  | Subtitle or additional information about the payment option. |
 | amount | number |  yes  | Total amount for this EMI. |
 | interest | number |  no  | Interest rate applicable to the EMIn. |
 | processingFee | number |  yes  | Processing fee associated with the EMI. |
 | tenure | number |  yes  | Tenure of the EMI in months. |
 | emiSchedule | [[SchemeEmiScheduleResponse](#SchemeEmiScheduleResponse)] |  yes  | Schedule of EMIs. |

---


 
 
 #### [SchemeEmiScheduleResponse](#SchemeEmiScheduleResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | installmentNo | number |  yes  | The installment number. |
 | installmentAmount | number |  yes  | The total amount due for this installment. |
 | dueDate | string |  yes  | The date by which the installment is due, in ISO 8601 format. |

---


 
 
 #### [SchemePayLaterPaymentOptionResponse](#SchemePayLaterPaymentOptionResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  | Unique identifier for the PayLater option |
 | title | string |  yes  | Title of the PayLater option |
 | subtitle | string |  yes  | Subtitle or additional descriptor for the PayLater option |
 | description | string |  yes  | Detailed description of the PayLater option |
 | tenure | number |  yes  | The tenure of the PayLater option, in months |
 | interest | number |  yes  | Interest amount for the PayLater option |
 | processingFee | number |  yes  | Processing fee for the PayLater option |
 | amount | number |  yes  | The amount to be paid in Rupees |
 | isDefault | boolean |  yes  | Indicates if this is the default payment option |

---


 
 
 #### [LimitResponse](#LimitResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | available | [[AvailableOrPossibleLender](#AvailableOrPossibleLender)] |  no  |  |
 | possible | [[AvailableOrPossibleLender](#AvailableOrPossibleLender)] |  no  |  |

---


 
 
 #### [AvailableOrPossibleLender](#AvailableOrPossibleLender)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | limit | number |  yes  | The available credit limit from the lender. |
 | lenderName | string |  yes  | The name of the lender. |
 | slug | string |  yes  | A slug identifier for the lender. |
 | isDefault | boolean |  yes  | Indicates if this is the default lender option. |
 | logo | string |  yes  | URL to the lender's logo. |

---


 
 
 #### [GetSchemesRequest](#GetSchemesRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | customer | [CustomerObject](#CustomerObject) |  yes  |  |
 | order | [Order](#Order) |  yes  |  |
 | device | [Device](#Device) |  yes  |  |
 | meta | string |  no  |  |

---


 
 
 #### [CustomerMetricsResponse](#CustomerMetricsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [CustomerMetrics](#CustomerMetrics) |  no  |  |

---


 
 
 #### [CustomerMetricsRequest](#CustomerMetricsRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | filters | [[CustomerMetricsFilters](#CustomerMetricsFilters)] |  no  |  |
 | sort | [[CustomerMetricsFilters](#CustomerMetricsFilters)] |  no  |  |
 | merchantId | string |  no  |  |
 | lenderId | string |  no  |  |
 | pivotPoints | number |  no  |  |

---


 
 
 #### [SourceAnalyticsRequest](#SourceAnalyticsRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | filters | [[CustomerMetricsFilters](#CustomerMetricsFilters)] |  no  |  |
 | merchantId | string |  no  |  |

---


 
 
 #### [LenderResponse](#LenderResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | slug | string |  no  |  |
 | name | string |  no  |  |
 | logo | string |  no  |  |

---


 
 
 #### [CreditLimitObject](#CreditLimitObject)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | availableLimit | number |  no  |  |
 | possibleLimit | number |  no  |  |
 | lender | [LenderResponse](#LenderResponse) |  no  |  |

---


 
 
 #### [BusinessDetails](#BusinessDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | category | string |  yes  |  |
 | shopName | string |  no  |  |
 | legalName | string |  yes  |  |
 | address | string |  no  |  |
 | type | string |  no  |  |
 | pincode | string |  no  |  |

---


 
 
 #### [DocumentItems](#DocumentItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | number | string |  yes  |  |
 | category | string |  no  |  |
 | type | string |  yes  |  |
 | name | string |  no  |  |
 | issuedOn | string |  no  |  |
 | issuedAt | string |  no  |  |
 | issuedBy | string |  no  |  |
 | expiryOn | string |  no  |  |

---


 
 
 #### [VintageItems](#VintageItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | month | number |  yes  |  |
 | year | number |  yes  |  |
 | totalTransactions | number |  yes  |  |
 | totalTransactionAmount | number |  yes  |  |
 | totalCancellations | number |  no  |  |
 | totalCancellationAmount | number |  no  |  |

---


 
 
 #### [EligibilitySuccess](#EligibilitySuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | string |  no  |  |
 | message | string |  no  |  |
 | redirectUrl | string |  no  |  |
 | creditLimits | [[CreditLimitObject](#CreditLimitObject)] |  no  |  |
 | __headers | string |  no  |  |

---


 
 
 #### [CheckEligibilityRequest](#CheckEligibilityRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | customer | [CustomerObject](#CustomerObject) |  yes  |  |
 | order | [Order](#Order) |  no  |  |
 | device | [Device](#Device) |  yes  |  |
 | meta | string |  no  |  |
 | fetchLimitOptions | boolean |  no  |  |

---


 
 
 #### [EmiSchedule](#EmiSchedule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | installmentNo | number |  no  |  |
 | installmentAmount | number |  no  |  |
 | dueDate | string |  no  |  |

---


 
 
 #### [PaymentOption](#PaymentOption)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | title | string |  no  |  |
 | subtitle | string |  no  |  |
 | description | string |  no  |  |
 | tenure | number |  no  |  |
 | processingFee | number |  no  |  |
 | amount | number |  no  |  |
 | isDefault | boolean |  no  |  |
 | emiSchedule | [[EmiSchedule](#EmiSchedule)] |  no  |  |

---


 
 
 #### [PaymentOptions](#PaymentOptions)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | payLater | [PaymentOption](#PaymentOption) |  no  |  |
 | emis | [[PaymentOption](#PaymentOption)] |  no  |  |

---


 
 
 #### [LenderAndPaymentOption](#LenderAndPaymentOption)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | name | string |  yes  |  |
 | title | string |  no  |  |
 | subtitle | string |  no  |  |
 | isDefault | boolean |  no  |  |
 | logoUrl | string |  yes  |  |
 | amount | number |  no  |  |
 | paymentOptions | [PaymentOptions](#PaymentOptions) |  no  |  |

---


 
 
 #### [GetSchemesSuccessOld](#GetSchemesSuccessOld)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | userId | string |  yes  |  |
 | lenders | [[LenderAndPaymentOption](#LenderAndPaymentOption)] |  no  |  |

---


 
 
 #### [PageSchemaResponse](#PageSchemaResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | slug | string |  no  |  |
 | description | string |  no  |  |
 | sections | string |  no  |  |
 | settings | string |  no  |  |

---


 
 
 #### [userCountRequest](#userCountRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | merchantId | string |  no  |  |
 | startDate | string |  no  |  |
 | endDate | string |  no  |  |

---


 
 
 #### [RepaymentRequest](#RepaymentRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | mobile | string |  yes  |  |
 | countryCode | string |  no  |  |
 | target | string |  no  |  |
 | callbackUrl | string |  yes  |  |
 | lenderSlug | string |  no  |  |

---


 
 
 #### [RepaymentResponse](#RepaymentResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  yes  | Response message indicating the result of the operation. |
 | meta | [IntegrationResponseMeta](#IntegrationResponseMeta) |  yes  |  |
 | data | [RepaymentResponseData](#RepaymentResponseData) |  yes  |  |
 | __headers | string |  no  |  |

---


 
 
 #### [RepaymentResponseData](#RepaymentResponseData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | repaymentUrl | string |  no  |  |

---


 
 
 #### [VerifyMagicLinkResponse](#VerifyMagicLinkResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user | [UserSchema](#UserSchema) |  yes  |  |
 | scope | [string] |  no  |  |
 | redirectPath | string |  yes  |  |
 | callbackUrl | string |  no  |  |
 | meta | string |  no  |  |

---


 
 
 #### [VerifyMagicLinkRequest](#VerifyMagicLinkRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | token | string |  yes  |  |

---


 
 
 #### [VintageData](#VintageData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | customer | [CustomerObject](#CustomerObject) |  no  |  |
 | businessDetails | [BusinessDetails](#BusinessDetails) |  yes  |  |
 | documents | [[DocumentItems](#DocumentItems)] |  no  |  |
 | device | [Device](#Device) |  no  |  |
 | vintage | [[VintageItems](#VintageItems)] |  yes  |  |
 | meta | string |  no  |  |

---


 
 
 #### [AddVintageResponse](#AddVintageResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | mesasge | string |  no  |  |
 | meta | [IntegrationResponseMeta](#IntegrationResponseMeta) |  no  |  |
 | data | string |  no  |  |
 | __headers | string |  no  |  |

---




### Enums





 #### [PageType](#PageType)
 Type : string

 | Name | Value | Description |
 | ---- | ----- | ----------- |
 | external | external | Symbolic link for External Link: /external/:url |
 | login | login | Symbolic link for Login: /login |
 | home | home | Symbolic link for Home: / |
 | transactions | transactions | Symbolic link for Transactions: /transactions |
 | transactionDetails | transactionDetails | Symbolic link for Transaction Details: /transactions/:id |
 | rewards | rewards | Symbolic link for Rewards: /rewards |
 | referAndEarn | referAndEarn | Symbolic link for Refer: /refer |
 | profile | profile | Symbolic link for Profile: /profile |
 | setupAutopay | setupAutopay | Symbolic link for AutoPay: /autopay |
 | updateEmail | updateEmail | Symbolic link for Update Email: /profile/email |
 | reportIssue | reportIssue | Symbolic link for Report Issue: /profile/report |
 | creditScore | creditScore | Symbolic link for Credit Score: /credit-score |
 | autoPay | autoPay | Symbolic link for Setup Autopay: /autopay |
 | helpCenter | helpCenter | Symbolic link for Help Center: /profile/help-center |
 | kycInit | kycInit | Symbolic link for Start KYC: /kyc |
 | accessDigilocker | accessDigilocker | Symbolic link for Access Digilocker: /kyc/:lender/access-digilocker |
 | liveliness | liveliness | Symbolic link for Liveliness: /kyc/:lender/selfie |
 | lenderOnboard | lenderOnboard | Symbolic link for Lender Onboard: /kyc/:lender/lender-onboard |
 | lender | lender | Symbolic link for Lender: /lender/:lenderName |
 | kycDocs | kycDocs | Symbolic link for Verify KYC Documents: /kyc/documents |
 | kycSelfie | kycSelfie | Symbolic link for Verify KYC Selfie: /kyc/selfie |
 | kycStatus | kycStatus | Symbolic link for KYC Status: /kyc/status |
 | kycError | kycError | Symbolic link for KYC Error: /kyc/error |
 | kycDigilockerResponse | kycDigilockerResponse | Symbolic link for KYC Digilocker Response: /kyc/digilocker-response |
 | kycInitResponse | kycInitResponse | Symbolic link for KYC Init Response: /kyc/init-response |
 | repayment | repayment | Symbolic link for Repayment: /repayment |
 | netBankingRepayment | netBankingRepayment | Symbolic link for Net Banking Repayment: /repayment/netbanking |
 | upiRepayment | upiRepayment | Symbolic link for UPI Repayment: /repayment/upi |
 | sanctionLetter | sanctionLetter | Symbolic link for Sanction Letter: /sanction/:userId |
 | kfs | kfs | Symbolic link for KFS: /kfs/:userId |
 | dynamicPage | dynamicPage | Symbolic link for Dynamic Page: /page/:slug |

---






