



##### [Back to Platform docs](./README.md)

## Credit Methods
Transaction Service
* [getOrderStatus](#getorderstatus)
* [getEligiblePlans](#geteligibleplans)
* [updateOrderDeliveryStatus](#updateorderdeliverystatus)
* [getTransactions](#gettransactions)



## Methods with example and description


### getOrderStatus
check status of the order



```javascript
// Promise
const promise =  
        credit.getOrderStatus(
            { 
             orderId : value
            
         }
        );

// Async/Await
const data = await 
                    credit.getOrderStatus(
                    { 
                      orderId : value
                    
                     });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| orderId | string | yes | This is order ID |  



Use this API to check status the order.

*Returned Response:*




[OrderStatus](#OrderStatus)

Success. Returns a JSON object as shown below. Refer `OrderStatus` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; orderId</i></summary>

```json
"FY12345"
```
</details>

<details>
<summary><i>&nbsp; transactionId</i></summary>

```json
"TXN123567890"
```
</details>

<details>
<summary><i>&nbsp; status</i></summary>

```json
"PAYMENT_CAPTURED"
```
</details>

<details>
<summary><i>&nbsp; message</i></summary>

```json
"Payment Accepted"
```
</details>

</details>









---


### getEligiblePlans
Get eligible plans



```javascript
// Promise
const promise =  
        credit.getEligiblePlans(
            { 
             lenderSlug : value,
              body : value
            
         }
        );

// Async/Await
const data = await 
                    credit.getEligiblePlans(
                    { 
                      lenderSlug : value,
                       body : value
                    
                     });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| lenderSlug | string | yes | This is lender slug |  
| body | [EligiblePlansRequest](#EligiblePlansRequest) | yes | Request body |


Use this API to Get eligible plans.

*Returned Response:*




[EligiblePlansResponse](#EligiblePlansResponse)

Success. Returns a JSON object as shown below. Refer `EligiblePlansResponse` for more details.




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


### updateOrderDeliveryStatus
Update delivery status for an order



```javascript
// Promise
const promise =  
        credit.updateOrderDeliveryStatus(
            { 
              body : value
            
         }
        );

// Async/Await
const data = await 
                    credit.updateOrderDeliveryStatus(
                    { 
                       body : value
                    
                     });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [OrderDeliveryUpdatesBody](#OrderDeliveryUpdatesBody) | yes | Request body |


Use this API to update the delivery status of an order using order ID or transaction ID.

*Returned Response:*




[OrderDeliveryUpdatesResponse](#OrderDeliveryUpdatesResponse)

Success. Returns a JSON object as shown below. Refer `OrderDeliveryUpdatesResponse` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; OrderDeliveryUpdatesResponseExample</i></summary>

```json
{
  "value": {
    "message": "The request has been processed successfully.",
    "data": {
      "orderId": "ORD1234",
      "transactionId": "ORD1234",
      "shipments": [
        {
          "id": "ship1234",
          "urn": "ship1234_0",
          "shipmentStatus": "DELIVERED",
          "shipmentAmount": 5000,
          "processingStatus": "PROCESSED"
        },
        {
          "id": "ship3245",
          "urn": "ship3245_1",
          "shipmentStatus": "CANCELLED",
          "shipmentAmount": 2000,
          "processingStatus": "PROCESSED"
        }
      ]
    },
    "meta": {
      "timestamp": "2024-07-16T12:07:26.979Z",
      "version": "v1.0",
      "product": "Settle Checkout"
    }
  }
}
```
</details>

</details>









---


### getTransactions
Get list of user transactions



```javascript
// Promise
const promise =  
        credit.getTransactions(
            { 
             mobile : value,
             countryCode : value,
             page : value,
             limit : value,
             orderId : value,
             transactionId : value,
             type : value,
             status : value,
             onlySelf : value,
             granularity : value
            
         }
        );

// Async/Await
const data = await 
                    credit.getTransactions(
                    { 
                      mobile : value,
                      countryCode : value,
                      page : value,
                      limit : value,
                      orderId : value,
                      transactionId : value,
                      type : value,
                      status : value,
                      onlySelf : value,
                      granularity : value
                    
                     });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| mobile | string | yes | The mobile number of the user |    
| countryCode | string | no | The country code of the user's mobile number. |    
| page | number | no | The page number of the transaction list |    
| limit | number | no | The number of transactions to fetch |    
| orderId | string | no | The order ID |    
| transactionId | string | no | The transaction ID |    
| type | Object | no | The transaction type |    
| status | Object | no | The transaction status |    
| onlySelf | boolean | no | Set this flag to true to fetch transactions exclusively for your organization, excluding other organizations. |    
| granularity | string | no | Defines the granularity of transaction details. |  



Retrieves a paginated list of transactions associated with a specific organization, sorted from the latest to the oldest. This endpoint allows filtering transactions based on various criteria and supports pagination.

*Returned Response:*




[GetTransactionsResponse](#GetTransactionsResponse)

Success. The request has been processed successfully and the response contains the requested data.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; GetTransactionsExample</i></summary>

```json
{
  "value": {
    "message": "The request has been processed successfully.",
    "data": {
      "transactions": [
        {
          "id": "TXN1234PKoGu",
          "amount": 5000,
          "type": "DEBIT",
          "status": "SUCCESS",
          "settlementUtr": null,
          "createdAt": "2024-06-10T12:56:46.396Z",
          "merchant": {
            "name": "J Company",
            "logo": "https://cdn.pixelbin.io/v2/muddy-glitter-1091e5/original/public/logos/j.png"
          },
          "order": {
            "id": "ORD1234",
            "amount": 5000
          },
          "loans": [
            {
              "number": "LN123456",
              "amount": 5000,
              "type": "EMI",
              "dueDate": "2024-09-04T18:30:00.000Z",
              "repaidAmount": 2600,
              "isSettled": false,
              "emis": [
                {
                  "amount": 2600,
                  "dueDate": "2024-08-04T18:30:00.000Z",
                  "installmentNo": 1,
                  "repaidAmount": 2600,
                  "isSettled": true
                },
                {
                  "amount": 2550,
                  "dueDate": "2024-09-04T18:30:00.000Z",
                  "installmentNo": 2,
                  "repaidAmount": 0,
                  "isSettled": false
                }
              ]
            }
          ],
          "lender": {
            "name": "Bank of J Limited",
            "slug": "j-bank",
            "logo": "https://cdn.pixelbin.io/v2/muddy-glitter-1091e5/original/public/logos/j.png",
            "shortName": "J Bank"
          },
          "isMasked": false
        },
        {
          "id": "XXXXXPKoGu",
          "amount": 500,
          "type": "DEBIT",
          "status": "SUCCESS",
          "settlementUtr": null,
          "createdAt": "2024-07-01T11:56:46.396Z",
          "merchant": {
            "name": "Other Merchant",
            "logo": "https://cdn.pixelbin.io/v2/potlee/t.grey()/public/logos/settle/square-dark.png"
          },
          "isMasked": true
        }
      ],
      "page": {
        "type": "number",
        "current": 1,
        "hasPrevious": false,
        "hasNext": false,
        "size": 25,
        "itemTotal": 1
      }
    },
    "meta": {
      "timestamp": "2024-07-10T13:56:46.396Z",
      "version": "v1.0",
      "product": "Settle Checkout"
    }
  }
}
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


 
 
 #### [DisbursalRequest](#DisbursalRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | fingerprint | string |  no  |  |
 | chargeToken | string |  yes  |  |
 | loanTypeId | number |  no  |  |
 | emiTenure | number |  no  |  |
 | isDownpaymentRequired | boolean |  no  |  |
 | downpaymentAmount | number |  no  |  |
 | loanAmount | number |  no  |  |
 | data | string |  no  |  |
 | transactionId | string |  no  |  |
 | lenderSlug | string |  no  |  |
 | intent | string |  no  |  |

---


 
 
 #### [WorkflowUser](#WorkflowUser)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | mobile | string |  no  |  |

---


 
 
 #### [EligiblePlansRequest](#EligiblePlansRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | chargeToken | string |  no  |  |

---


 
 
 #### [EligiblePlans](#EligiblePlans)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | displayName | string |  no  |  |
 | description | string |  no  |  |
 | brokenInterest | number |  no  |  |
 | noOfEmi | number |  no  |  |
 | emiAmount | number |  no  |  |
 | processingFee | number |  no  |  |
 | installmentInterestRate | number |  no  |  |

---


 
 
 #### [EligiblePlansResponse](#EligiblePlansResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | eligiblePlans | [[EligiblePlans](#EligiblePlans)] |  no  |  |
 | __headers | string |  no  |  |

---


 
 
 #### [DisbursalResponse](#DisbursalResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | transactionId | string |  no  |  |
 | status | string |  no  |  |
 | message | string |  no  |  |

---


 
 
 #### [OrderStatus](#OrderStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | orderId | string |  yes  |  |
 | transactionId | string |  no  |  |
 | status | string |  yes  |  |
 | message | string |  yes  |  |
 | __headers | string |  no  |  |

---


 
 
 #### [DisbursalStatusRequest](#DisbursalStatusRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | fingerprint | string |  no  |  |
 | transactionId | string |  yes  |  |

---


 
 
 #### [Transactions](#Transactions)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  |  |
 | userId | string |  yes  |  |
 | partnerId | string |  no  |  |
 | partner | string |  no  |  |
 | partnerLogo | string |  no  |  |
 | status | string |  yes  |  |
 | type | string |  no  |  |
 | remark | string |  no  |  |
 | amount | number |  yes  |  |
 | loanAccountNumber | string |  no  |  |
 | kfs | string |  no  |  |
 | utr | string |  no  |  |
 | sanctionLetter | string |  no  |  |
 | orderId | string |  no  |  |
 | refundId | string |  no  |  |
 | createdAt | string |  yes  |  |
 | lenderId | string |  no  |  |
 | lenderName | string |  no  |  |
 | lenderLogo | string |  no  |  |
 | loanType | string |  no  |  |
 | repaymentTransactionId | string |  no  |  |
 | nextDueDate | string |  no  |  |
 | paidPercent | number |  no  |  |
 | lenderDetail | [LenderDetail](#LenderDetail) |  no  |  |
 | emis | [[Emi](#Emi)] |  no  |  |

---


 
 
 #### [LenderDetail](#LenderDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | name | string |  no  |  |
 | imageUrl | string |  no  |  |
 | slug | string |  no  |  |
 | active | boolean |  no  |  |
 | b2b | boolean |  no  |  |
 | b2c | boolean |  no  |  |
 | theme | [Theme](#Theme) |  no  |  |
 | createdAt | string |  no  |  |
 | updatedAt | string |  no  |  |
 | deletedAt | string |  no  |  |

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


 
 
 #### [FilterByDate](#FilterByDate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | startDate | string |  no  |  |
 | endDate | string |  no  |  |

---


 
 
 #### [TransactionResponse](#TransactionResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | filters | [[Filters](#Filters)] |  yes  |  |
 | page | [PageResponse](#PageResponse) |  yes  |  |
 | transactions | [[Transactions](#Transactions)] |  yes  |  |

---


 
 
 #### [MerchantTransactions](#MerchantTransactions)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | outstandingAmount | string |  no  |  |

---


 
 
 #### [MerchantTransactionSummary](#MerchantTransactionSummary)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | merchantOutstandingSummary | [MerchantTransactions](#MerchantTransactions) |  no  |  |

---


 
 
 #### [GetReconciliationFileResponse](#GetReconciliationFileResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | files | [[ReconFile](#ReconFile)] |  yes  |  |

---


 
 
 #### [ReconFile](#ReconFile)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | base64 | string |  yes  |  |
 | name | string |  yes  |  |

---


 
 
 #### [UploadReconciliationFileRequest](#UploadReconciliationFileRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | base64File | string |  yes  |  |
 | format | string |  no  |  |
 | lenderId | string |  no  |  |

---


 
 
 #### [UploadReconciliationFileResponse](#UploadReconciliationFileResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |

---


 
 
 #### [TransactionCount](#TransactionCount)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | totalTransactions | string |  no  |  |

---


 
 
 #### [RefundCount](#RefundCount)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | refundTransactions | string |  no  |  |

---


 
 
 #### [OrganizationTransactionsCount](#OrganizationTransactionsCount)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | count | number |  no  |  |

---


 
 
 #### [OrganizationTransactionsSum](#OrganizationTransactionsSum)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | sum | number |  no  |  |

---


 
 
 #### [UniqueCustomersInOrg](#UniqueCustomersInOrg)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | count | number |  no  |  |

---


 
 
 #### [TransactionAmount](#TransactionAmount)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | totalTransactionAmount | string |  no  |  |

---


 
 
 #### [SchemaForOneDayTotal](#SchemaForOneDayTotal)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | orgId | string |  no  |  |
 | createdAt | string |  no  |  |
 | count | number |  no  |  |
 | sum | string |  no  |  |
 | refund | string |  no  |  |
 | difference | string |  no  |  |

---


 
 
 #### [SumofOneDayTransactions](#SumofOneDayTransactions)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | dayTotal | [[SchemaForOneDayTotal](#SchemaForOneDayTotal)] |  no  |  |

---


 
 
 #### [AverageTransaction](#AverageTransaction)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | average | number |  no  |  |

---


 
 
 #### [AllTransactionsResponse](#AllTransactionsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | userId | string |  no  |  |
 | partnerId | string |  no  |  |
 | status | string |  no  |  |
 | type | string |  no  |  |
 | remark | string |  no  |  |
 | amount | number |  no  |  |
 | loanAccountNumber | string |  no  |  |
 | createdAt | string |  no  |  |

---


 
 
 #### [TotalRefund](#TotalRefund)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | totalRefund | string |  no  |  |

---


 
 
 #### [TotalRepayment](#TotalRepayment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | totalRepayment | string |  no  |  |

---


 
 
 #### [TotalOverDue](#TotalOverDue)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | totalDue | string |  no  |  |

---


 
 
 #### [TotalLoansDisbursed](#TotalLoansDisbursed)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | totalLoansDisbursed | string |  no  |  |

---


 
 
 #### [OrganizationTransactionResponse](#OrganizationTransactionResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | filters | [[TrFilters](#TrFilters)] |  yes  |  |
 | page | [TrPageResponse](#TrPageResponse) |  yes  |  |
 | transactions | [[OrgTransactions](#OrgTransactions)] |  yes  |  |

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


 
 
 #### [OrgTransactions](#OrgTransactions)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  |  |
 | userId | string |  yes  |  |
 | userName | string |  no  |  |
 | partnerId | string |  no  |  |
 | partner | string |  no  |  |
 | partnerLogo | string |  no  |  |
 | status | string |  yes  |  |
 | type | string |  no  |  |
 | remark | string |  no  |  |
 | amount | number |  yes  |  |
 | orderId | string |  no  |  |
 | loanAccountNumber | string |  no  |  |
 | kfs | string |  no  |  |
 | sanctionLetter | string |  no  |  |
 | createdAt | string |  yes  |  |

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


 
 
 #### [KfsRequest](#KfsRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | loanTypeId | number |  no  |  |
 | chargeToken | string |  no  |  |

---


 
 
 #### [KfsResponse](#KfsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | kfsTable | string |  no  |  |

---


 
 
 #### [LenderTransactionState](#LenderTransactionState)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | stepIndex | number |  no  |  |
 | lenderId | string |  no  |  |
 | workflowId | string |  no  |  |
 | workflowName | string |  no  |  |
 | parentStateId | string |  no  |  |
 | workflowUrl | string |  no  |  |
 | isInternal | boolean |  no  |  |
 | active | boolean |  no  |  |
 | ttl | number |  no  |  |
 | name | string |  no  |  |
 | type | string |  no  |  |
 | inputData | string |  no  |  |
 | createdAt | string |  no  |  |
 | updatedAt | string |  no  |  |
 | deletedAt | string |  no  |  |

---


 
 
 #### [TransactionStateResponse](#TransactionStateResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | transactionState | [[LenderTransactionState](#LenderTransactionState)] |  no  |  |

---


 
 
 #### [Theme](#Theme)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | logoUrl | string |  no  |  |
 | iconUrl | string |  no  |  |
 | landscapeBgUrl | string |  no  |  |
 | portraitBgUrl | string |  no  |  |
 | shortName | string |  no  |  |

---


 
 
 #### [Emi](#Emi)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | userId | string |  no  |  |
 | installmentno | number |  no  |  |
 | loanAccountNumber | string |  no  |  |
 | amount | number |  no  |  |
 | dueDate | string |  no  |  |
 | referenceTransactionId | string |  no  |  |
 | remark | string |  no  |  |
 | createdAt | string |  no  |  |
 | updatedAt | string |  no  |  |
 | entityId | string |  no  |  |
 | paid | boolean |  no  |  |
 | overdue | boolean |  no  |  |
 | repaymentDate | string |  no  |  |

---


 
 
 #### [MetricPivots](#MetricPivots)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | date | string |  no  |  |
 | sum | number |  no  |  |

---


 
 
 #### [TransactionMetricSubResponse](#TransactionMetricSubResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | total | string |  no  |  |
 | pivots | [[MetricPivots](#MetricPivots)] |  no  |  |
 | title | string |  no  |  |
 | description | string |  no  |  |
 | valueFormat | string |  no  |  |
 | logo | string |  no  |  |

---


 
 
 #### [TransactionMetrics](#TransactionMetrics)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | totalDisbursement | [TransactionMetricSubResponse](#TransactionMetricSubResponse) |  no  |  |
 | totalOverdue | [TransactionMetricSubResponse](#TransactionMetricSubResponse) |  no  |  |
 | totalRepayment | [TransactionMetricSubResponse](#TransactionMetricSubResponse) |  no  |  |

---


 
 
 #### [LenderCustomerTransactionMetricsFilters](#LenderCustomerTransactionMetricsFilters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  yes  |  |
 | display | string |  yes  |  |
 | value | [string] |  yes  |  |
 | isSelected | boolean |  no  |  |
 | isActive | boolean |  yes  |  |

---


 
 
 #### [LenderCustomerTransactionMetrics](#LenderCustomerTransactionMetrics)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | metrics | [TransactionMetrics](#TransactionMetrics) |  no  |  |
 | filters | [[LenderCustomerTransactionMetricsFilters](#LenderCustomerTransactionMetricsFilters)] |  no  |  |
 | sort | [[LenderCustomerTransactionMetricsFilters](#LenderCustomerTransactionMetricsFilters)] |  no  |  |

---


 
 
 #### [LenderCustomerTransactionMetricsResponse](#LenderCustomerTransactionMetricsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | string |  no  |  |

---


 
 
 #### [LenderCustomerTransactionMetricsRequest](#LenderCustomerTransactionMetricsRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | filters | [[LenderCustomerTransactionMetricsFilters](#LenderCustomerTransactionMetricsFilters)] |  no  |  |
 | sort | [[LenderCustomerTransactionMetricsFilters](#LenderCustomerTransactionMetricsFilters)] |  no  |  |
 | startDate | string |  no  |  |
 | endDate | string |  no  |  |
 | merchantId | string |  no  |  |
 | lenderId | string |  no  |  |
 | pivotPoints | number |  no  |  |

---


 
 
 #### [TransactionOrder](#TransactionOrder)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  | Unique identifier of the order. |
 | amount | number |  yes  | Total amount of the order. |

---


 
 
 #### [TransactionMerchant](#TransactionMerchant)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  yes  | Name of the merchant. |
 | logo | string |  yes  | URL to the merchant's logo. |

---


 
 
 #### [TransactionLoan](#TransactionLoan)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | number | string |  yes  | Loan account number. |
 | amount | number |  yes  | Loan amount. |
 | type | string |  yes  | Type of loan. |
 | dueDate | string |  yes  | Due date in ISO format for the loan repayment. |
 | repaidAmount | number |  yes  | Amount that has been repaid. |
 | isSettled | boolean |  yes  | Indicates if the loan is fully settled. |
 | emis | [[TransactionLoanEmi](#TransactionLoanEmi)] |  no  | EMIs associated with the loan. This information is available only if the granularity is set to 'detail' and an EMI schedule is available for this loan. |

---


 
 
 #### [TransactionLoanEmi](#TransactionLoanEmi)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | number |  yes  | EMI amount. |
 | dueDate | string |  yes  | Due date in ISO format for the EMI payment. |
 | installmentNo | number |  yes  | Installment number for the EMI. |
 | repaidAmount | number |  yes  | Amount that has been repaid towards the EMI. |
 | isSettled | boolean |  yes  | Indicates if the EMI is fully settled. |

---


 
 
 #### [TransactionLender](#TransactionLender)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  yes  | Name of the lender. |
 | slug | string |  yes  | A slug representing the lender. |
 | logo | string |  yes  | URL to the lender's logo. |
 | shortName | string |  yes  | Short name of the lender. |

---


 
 
 #### [UserTransaction](#UserTransaction)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  | Unique identifier of the transaction. |
 | amount | number |  yes  | Amount of the transaction. |
 | type | string |  yes  | Type of the transaction. |
 | status | string |  yes  | Status of the transaction. |
 | settlementUtr | string |  no  | Settlement UTR for the transaction. |
 | refundId | string |  no  | Refund ID if the transaction is a refund. |
 | createdAt | string |  yes  | Timestamp in ISO format when the transaction was created. |
 | isMasked | boolean |  yes  | Indicates if the transaction details are masked. This field is true of the transaction if done on some other merchant |
 | order | [TransactionOrder](#TransactionOrder) |  no  |  |
 | merchant | [TransactionMerchant](#TransactionMerchant) |  yes  |  |
 | loans | [[TransactionLoan](#TransactionLoan)] |  no  |  |
 | lender | [TransactionLender](#TransactionLender) |  no  |  |

---


 
 
 #### [Pagination](#Pagination)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  no  | The type of pagination. |
 | current | number |  yes  | The current page number. |
 | hasPrevious | boolean |  yes  | Indicates if there is a previous page. |
 | hasNext | boolean |  yes  | Indicates if there is a next page. |
 | size | number |  yes  | The number of items per page. |
 | itemTotal | number |  yes  | The total number of items across all pages. |

---


 
 
 #### [GetTransactionsData](#GetTransactionsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | transactions | [[UserTransaction](#UserTransaction)] |  yes  |  |
 | page | [Pagination](#Pagination) |  yes  |  |

---


 
 
 #### [GetTransactionsResponse](#GetTransactionsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  yes  | Response message indicating the result of the operation. |
 | meta | [IntegrationResponseMeta](#IntegrationResponseMeta) |  yes  |  |
 | data | [GetTransactionsData](#GetTransactionsData) |  yes  |  |
 | __headers | string |  no  |  |

---


 
 
 #### [SummaryRequest](#SummaryRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | startDate | string |  no  |  |
 | endDate | string |  no  |  |
 | merchantId | string |  no  |  |
 | type | string |  no  |  |

---


 
 
 #### [OrderShipmentAddressGeoLocation](#OrderShipmentAddressGeoLocation)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | latitude | number |  yes  | The latitude of the location. |
 | longitude | number |  yes  | The longitude of the location. |

---


 
 
 #### [OrderShipmentAddress](#OrderShipmentAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | line1 | string |  no  | The first line of the address. |
 | line2 | string |  no  | The second line of the address. |
 | city | string |  no  | The city of the address. |
 | state | string |  no  | The state of the address. |
 | country | string |  no  | The country of the address. |
 | pincode | string |  no  | The postal code of the address. |
 | type | string |  no  | The type of address (e.g., residential, business). |
 | geoLocation | [OrderShipmentAddressGeoLocation](#OrderShipmentAddressGeoLocation) |  no  | The geographical location of the address. |

---


 
 
 #### [OrderShipmentItem](#OrderShipmentItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | category | string |  no  | The category of the item. |
 | sku | string |  no  | The stock keeping unit for the item. |
 | rate | number |  no  | The price of a single item. |
 | quantity | number |  no  | The quantity of the item. |

---


 
 
 #### [OrderShipment](#OrderShipment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  | The identifier for the shipment. |
 | urn | string |  no  | A unique reference number for the shipment. This is optional; the system will generate a URN if not provided. There can be multiple shipment objects with the same shipment ID, making the URN a unique identifier within the system. |
 | amount | number |  yes  | The amount corresponding to the shipment that is subject to the status update. |
 | timestamp | string |  yes  | The timestamp when the status of the shipment was updated. |
 | status | string |  yes  | The current status of the shipment. |
 | remark | string |  no  | Any remarks regarding the shipment. |
 | items | [[OrderShipmentItem](#OrderShipmentItem)] |  no  | The list of items in the shipment. |
 | shippingAddress | [OrderShipmentAddress](#OrderShipmentAddress) |  no  | The shipping address for the shipment. |
 | billingAddress | [OrderShipmentAddress](#OrderShipmentAddress) |  no  | The billing address for the shipment. |

---


 
 
 #### [OrderDeliveryUpdatesBody](#OrderDeliveryUpdatesBody)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | orderId | string |  no  | The unique identifier for the order. |
 | transactionId | string |  no  | The unique identifier for the transaction. |
 | shipments | [[OrderShipment](#OrderShipment)] |  yes  | The list of shipments for which the status needs to be updated. Only include shipments requiring a status change. |

---


 
 
 #### [OrderShipmentResponse](#OrderShipmentResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  | The unique identifier of the shipment. |
 | urn | string |  no  | A unique resource identifier for the shipment. |
 | shipmentStatus | string |  yes  | The status of the shipment. |
 | shipmentAmount | number |  yes  | The total amount associated with the shipment. |
 | processingStatus | string |  yes  | The processing status of the order shipment. |

---


 
 
 #### [OrderDeliveryUpdatesData](#OrderDeliveryUpdatesData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | orderId | string |  yes  | The unique identifier for the order. |
 | transactionId | string |  yes  | The unique identifier for the order. |
 | shipments | [[OrderShipmentResponse](#OrderShipmentResponse)] |  yes  | The list of shipments for which the status was updated. |

---


 
 
 #### [OrderDeliveryUpdatesResponse](#OrderDeliveryUpdatesResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  yes  | Response message indicating the result of the operation. |
 | meta | [IntegrationResponseMeta](#IntegrationResponseMeta) |  yes  |  |
 | data | [OrderDeliveryUpdatesData](#OrderDeliveryUpdatesData) |  yes  |  |
 | errors | [[IntegrationResponseError](#IntegrationResponseError)] |  no  |  |
 | __headers | string |  no  |  |

---




