



##### [Back to Platform docs](./README.md)

## Credit Methods
Transaction Service
* [disburse](#disburse)
* [getOrderStatus](#getorderstatus)
* [getEligiblePlans](#geteligibleplans)



## Methods with example and description


### disburse
Disburse the credit



```javascript
// Promise
const promise =  
        credit.disburse(
            { 
              disbursalRequest : value
            
         }
        );

// Async/Await
const data = await 
                    credit.disburse(
                    { 
                       disbursalRequest : value
                    
                     });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [DisbursalRequest](#DisbursalRequest) | yes | Request body |


Use this API to disburse the credit.

*Returned Response:*




[DisbursalResponse](#DisbursalResponse)

Success. Returns a JSON object as shown below. Refer `DisbursalResponse` for more details.




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
              disbursalRequest : value
            
         }
        );

// Async/Await
const data = await 
                    credit.getEligiblePlans(
                    { 
                      lenderSlug : value,
                       disbursalRequest : value
                    
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
 | __headers | string |  no  |  |

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




