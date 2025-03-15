import { PublicClientApplication } from "@azure/msal-browser";

const msalInstance = new PublicClientApplication({
      auth: {
          clientId: "55cdc898-c249-45ae-afe5-fbdb4997d321",
      },
      system: {
          allowPlatformBroker: true,
      },
});
await msalInstance.initialize();
await msalInstance.handleRedirectPromise();
msalInstance.acquireTokenSilent(); 

export default msalInstance;