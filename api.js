const { createClient } = require("@commercetools/sdk-client");
const {
  createAuthMiddlewareForClientCredentialsFlow,
} = require("@commercetools/sdk-middleware-auth");
const { createHttpMiddleware } = require("@commercetools/sdk-middleware-http");
const fetch = require("node-fetch");

const projectKey = "test_12345";

const authMiddleware = createAuthMiddlewareForClientCredentialsFlow({
  host: "https://auth.us-central1.gcp.commercetools.com",
  projectKey,
  credentials: {
    clientId: "dX7ELmMPJlMx8zt0PLME66Ab",
    clientSecret: "IeG79FmGv4akgDqhslJIf_u4koZywQ4o",
  },
  scopes: ["manage_project:test_12345"],
  fetch,
});
const httpMiddleware = createHttpMiddleware({
  host: "https://api.us-central1.gcp.commercetools.com",
  fetch,
});
const client = createClient({
  middlewares: [authMiddleware, httpMiddleware],
});
