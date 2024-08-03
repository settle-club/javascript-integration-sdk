



##### [Back to Platform docs](./README.md)

## Payments Methods
KYC Service
* [getOutStandingDetails](#getoutstandingdetails)



## Methods with example and description


### getOutStandingDetails
Get user outstanding details.



```javascript
// Promise
const promise =  
        payments.getOutStandingDetails(
            { 
             mobile : value,
             lenderSlugs : value
            
         }
        );

// Async/Await
const data = await 
                    payments.getOutStandingDetails(
                    { 
                      mobile : value,
                      lenderSlugs : value
                    
                     });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| mobile | string | yes | mobile number of the user |    
| lenderSlugs | Array<string> | no | This is list of lender slugs. eg. ['cashe','liquiloans'] |  



This api is for getting outstanding details for the user with all the lenders.

*Returned Response:*




[OutstandingDetailsResponse](#OutstandingDetailsResponse)

Success. Returns a JSON object as shown below. Refer `PaymentLinkResponse` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; OutstandingDetailsResponse</i></summary>

```json
{
  "value": {
    "message": "The request has been processed successfully.",
    "data": {
      "outstandingDetails": [
        {
          "lender": {
            "id": "315f60f4-1238-462c-8108-cfff9fbc400f",
            "name": "Bhanix Finance and Investment Limited",
            "slug": "cashe",
            "theme": {
              "iconUrl": "https://cdn.pixelbin.io/v2/potlee/original/public/lenders/lenderLogo/v2/512h-logo/cashe-icon.png",
              "logoUrl": "https://cdn.pixelbin.io/v2/potlee/original/public/lenders/lenderLogo/v2/512h-logo/cashe-logo.png"
            }
          },
          "availableLimit": 40000,
          "creditLimit": 40000,
          "dueAmount": 0,
          "outstandingAmount": 0,
          "dueDate": null
        }
      ]
    },
    "meta": {
      "timestamp": "2024-07-26T08:01:02.592Z",
      "version": "v1.0",
      "product": "Settle Checkout",
      "requestId": "048dcf5c1d4ab39a9f39e1d07c584983"
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


 
 
 #### [RepaymentUsingNetbanking](#RepaymentUsingNetbanking)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | number |  yes  |  |
 | bankId | string |  yes  |  |
 | bankName | string |  yes  |  |
 | chargeToken | string |  no  |  |
 | transactionId | string |  no  |  |

---


 
 
 #### [RepaymentUsingNetbankingResponse](#RepaymentUsingNetbankingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | form | string |  no  |  |
 | isDifferent | boolean |  no  |  |
 | outstanding | string |  no  |  |

---


 
 
 #### [RepaymentUsingUPI](#RepaymentUsingUPI)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | number |  yes  |  |
 | vpa | string |  yes  |  |
 | chargeToken | string |  no  |  |
 | transactionId | string |  no  |  |

---


 
 
 #### [RepaymentUsingUPIResponse](#RepaymentUsingUPIResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | isDifferent | boolean |  no  |  |
 | outstanding | string |  no  |  |
 | status | string |  no  |  |
 | intentId | string |  no  |  |
 | transactionId | string |  no  |  |
 | expiry | number |  no  |  |
 | interval | number |  no  |  |

---


 
 
 #### [RegisterUPIMandateRequest](#RegisterUPIMandateRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | vpa | string |  no  |  |

---


 
 
 #### [RegisterUPIMandateResponse](#RegisterUPIMandateResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | transactionId | string |  no  |  |
 | expiry | number |  no  |  |
 | interval | number |  no  |  |

---


 
 
 #### [RegisterUPIMandateStatusCheckRequest](#RegisterUPIMandateStatusCheckRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | transactionId | string |  no  |  |

---


 
 
 #### [RegisterMandateStatusCheckResponse](#RegisterMandateStatusCheckResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | string |  no  |  |

---


 
 
 #### [TransactionStatusRequest](#TransactionStatusRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | intentId | string |  yes  |  |
 | transactionId | string |  yes  |  |

---


 
 
 #### [TransactionStatusResponse](#TransactionStatusResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  |  |
 | methodType | string |  no  |  |
 | methodSubType | string |  no  |  |
 | status | string |  no  |  |

---


 
 
 #### [BankList](#BankList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bankId | string |  no  |  |
 | bankName | string |  no  |  |
 | rank | number |  no  |  |
 | popular | boolean |  no  |  |
 | imageUrl | string |  no  |  |

---


 
 
 #### [PaymentOptions](#PaymentOptions)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  no  |  |
 | shortTitle | string |  no  |  |
 | uid | string |  no  |  |
 | imageUrl | string |  no  |  |

---


 
 
 #### [PaymentsObject](#PaymentsObject)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  no  |  |
 | kind | string |  no  |  |
 | options | [[PaymentOptions](#PaymentOptions)] |  no  |  |

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


 
 
 #### [OutstandingDetail](#OutstandingDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | string |  no  |  |
 | action | boolean |  no  |  |
 | message | [OutstandingMessage](#OutstandingMessage) |  no  |  |
 | credit | [UserCredit](#UserCredit) |  no  |  |
 | dueSummary | [DueSummaryOutstanding](#DueSummaryOutstanding) |  no  |  |
 | outstandingSummary | [OutstandingSummary](#OutstandingSummary) |  no  |  |
 | entityMapId | string |  no  |  |

---


 
 
 #### [OutstandingSummary](#OutstandingSummary)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | totalOutstanding | number |  no  |  |
 | totalOutstandingWithInterest | number |  no  |  |
 | totalOutstandingPenalty | number |  no  |  |
 | availableLimit | number |  no  |  |
 | isOverdue | boolean |  no  |  |
 | dueFromDate | string |  no  |  |
 | repaymentSummary | [[RepaymentSummaryOutstanding](#RepaymentSummaryOutstanding)] |  no  |  |

---


 
 
 #### [DueSummaryOutstanding](#DueSummaryOutstanding)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | dueDate | string |  no  |  |
 | totalDue | number |  no  |  |
 | totalDueWithInterest | number |  no  |  |
 | totalDuePenalty | number |  no  |  |
 | dueTransactions | [[DueTransactionsOutstanding](#DueTransactionsOutstanding)] |  no  |  |
 | minAmntDue | number |  no  |  |

---


 
 
 #### [OutstandingMessage](#OutstandingMessage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | dueMessage | string |  no  |  |
 | backgroundColor | string |  no  |  |
 | textColor | string |  no  |  |
 | isFlexiRepayEnabled | boolean |  no  |  |

---


 
 
 #### [UserCredit](#UserCredit)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | availableLimit | number |  no  |  |
 | approvedLimit | number |  no  |  |
 | isEligibleToDrawdown | boolean |  no  |  |

---


 
 
 #### [DueTransactionsOutstanding](#DueTransactionsOutstanding)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | loanRequestNo | string |  no  |  |
 | merchantCategory | string |  no  |  |
 | installmentAmountWithInterest | number |  no  |  |
 | installmentAmount | number |  no  |  |
 | dueAmount | number |  no  |  |
 | loanType | string |  no  |  |
 | installmentNo | string |  no  |  |
 | installmentDueDate | string |  no  |  |
 | isPastDue | boolean |  no  |  |
 | isPenaltyCharged | boolean |  no  |  |
 | penaltyAmount | number |  no  |  |
 | noOfDaysPenaltyCharged | number |  no  |  |
 | daysDifference | number |  no  |  |
 | lenderTransactionId | string |  no  |  |

---


 
 
 #### [RepaymentSummaryOutstanding](#RepaymentSummaryOutstanding)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | loanRequestNo | string |  no  |  |
 | loanType | string |  no  |  |
 | merchantCategory | string |  no  |  |
 | isBbillingTransaction | boolean |  no  |  |
 | totalInstallmentAmount | number |  no  |  |
 | totalInstallmentAmountWithInterest | number |  no  |  |
 | outstandingDetails | [[OutstandingDetailsRepayment](#OutstandingDetailsRepayment)] |  no  |  |

---


 
 
 #### [OutstandingDetailsRepayment](#OutstandingDetailsRepayment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | installmentAmountWithInterest | number |  no  |  |
 | installmentAmount | number |  no  |  |
 | dueAmount | number |  no  |  |
 | installmentNo | string |  no  |  |
 | installmentDueDate | string |  no  |  |
 | isPastDue | boolean |  no  |  |
 | loanType | string |  no  |  |
 | isPenaltyCharged | boolean |  no  |  |
 | penaltyAmount | number |  no  |  |
 | noOfDaysPenaltyCharged | number |  no  |  |
 | lenderTransactionId | string |  no  |  |

---


 
 
 #### [PaymentOptionsResponse](#PaymentOptionsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | paymentOptions | [[PaymentsObject](#PaymentsObject)] |  no  |  |

---


 
 
 #### [CheckEMandateStatusRequest](#CheckEMandateStatusRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | orderId | string |  no  |  |
 | paymentId | string |  no  |  |
 | scheduledEnd | string |  no  |  |
 | ruleAmountValue | string |  no  |  |

---


 
 
 #### [AutoPayStatusResponse](#AutoPayStatusResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | string |  no  |  |

---


 
 
 #### [MetaResponse](#MetaResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | timestamp | string |  no  |  |
 | version | string |  no  |  |
 | product | string |  no  |  |
 | requestId | string |  no  |  |

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


 
 
 #### [OutstandingDetailsData](#OutstandingDetailsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | outstandingDetails | [[OutstandingData](#OutstandingData)] |  no  |  |

---


 
 
 #### [OutstandingDetailsResponse](#OutstandingDetailsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | mesasge | string |  no  |  |
 | meta | [MetaResponse](#MetaResponse) |  no  |  |
 | data | [OutstandingDetailsData](#OutstandingDetailsData) |  no  |  |
 | __headers | string |  no  |  |

---




