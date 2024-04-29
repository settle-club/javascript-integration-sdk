### Usage

```
npm install git+https://github.com/potlee-finance/javascript-integration-sdk.git 
```

or

```
yarn add https://github.com/potlee-finance/javascript-integration-sdk 
```

### Sample Usage

```javascript
const { PlatformConfig, PlatformClient } = require("potlee");

const platformConfig = new PlatformConfig({
    key: "API_KEY",
    token: "API_TOKEN",
    secret: "API_SECRET",
    companyId: "COMPANY_ID",
    domain: "https://api.potlee.co.in",
    useAutoRenewTimer: true,
});

async function verifyCustomer() {
  try {
    // Create a client using your credentials
    const client = new PlatformClient(platformConfig);

    // Call APIs using their correponding methods
    const result = await client.customer.verify({
        organizationId: "COMPANY_ID",
        disbursalRequest: {
            "customer": {
                "uid": "1",
                "countryCode": "91",
                "mobile": "8888888888"
            },
            "order": {
                "valueInPaise": 10000,
                "uid": "1"
            }
        },
    });
  } catch (err) {
    console.log(err);
  }
}

verifyCustomer();
```
