const { createClient } = require("@commercetools/sdk-client");
const { createRequestBuilder } = require("@commercetools/api-request-builder");
const {
  createAuthMiddlewareForClientCredentialsFlow,
} = require("@commercetools/sdk-middleware-auth");
const { createHttpMiddleware } = require("@commercetools/sdk-middleware-http");
const fetch = require("node-fetch");

require("dotenv").config();

console.log("Getting started with commercetools Nodejs SDK");
const {
  CTP_PROJECT_KEY,
  CTP_CLIENT_SECRET,
  CTP_CLIENT_ID,
  CTP_AUTH_URL,
  CTP_API_URL,
  CTP_SCOPES,
} = process.env;

const projectKey = CTP_PROJECT_KEY;

// Create a httpMiddleware for the your project AUTH URL
const authMiddleware = createAuthMiddlewareForClientCredentialsFlow({
  host: CTP_AUTH_URL,
  projectKey,
  credentials: {
    clientId: CTP_CLIENT_ID,
    clientSecret: CTP_CLIENT_SECRET,
  },
  scopes: [CTP_SCOPES],
  fetch,
});

// Create a httpMiddleware for the your project API URL
const httpMiddleware = createHttpMiddleware({
  host: CTP_API_URL,
  fetch,
});

// Create a client using authMiddleware and httpMiddleware
const client = createClient({
  middlewares: [authMiddleware, httpMiddleware],
});

// Create a request builder for the project
const projectService = createRequestBuilder({ projectKey }).project;

// Create a request to get project information
const createGetProjectRequest = {
  uri: projectService.build(),
  method: "GET",
};

(async () => {
  try {
    // Use the `client.execute` method to send a message from this app

    console.log("ADMIN_CLIENT_ID->" + CTP_CLIENT_ID);

    console.log("ADMIN_CLIENT_SECRET->" + CTP_CLIENT_SECRET);

    await client
      .execute(createGetProjectRequest)
      .then((data) => {
        console.log("Project information --->", data);
      })
      .catch((error) => {
        console.log("ERROR --->", error);
      });
  } catch (error) {
    console.log("ERROR --->", error);
  }
  console.log("Got project information");
})();
