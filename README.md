# birfatura-integration-api
 BirFatura Private Integration Serverless API Service

## Information

 This API service is designed to run on Firebase Cloud Functions. It fulfills the requirements of
 https://app.swaggerhub.com/apis-docs/birfatura/orders/1.0.0#/

 For detailed information about firebase, check out the documentation.
 https://firebase.google.com/docs

### Dependency
 * "dotenv": "^16.3.1",
 * "express": "^4.18.2",
 * "firebase-admin": "^11.8.0",
 * "firebase-functions": "^4.3.1"

### Fields that need editing

  .env
 * PROJECT_ID="FIREBASE_PROJECT_ID"
 * PRIVATE_KEY="PROJECT_PRIVATE_KEY"
 * CLIENT_EMAIL="PROCEJCT_CLIENT_EMAIL"
 * BIR_FATURA_TOKEN="BIRFATURA_API_KEY"

  .firebaserc
 * "default": "PROJECT_ID"
