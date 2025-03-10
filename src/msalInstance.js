import { PublicClientApplication } from "@azure/msal-browser";


const msalInstance = new PublicClientApplication({
  auth: {
      clientId: "ce01beec-6eeb-4f53-a177-af3ec8ce1669",
  },
  system: {
      allowPlatformBroker: true,
  },
});

await msalInstance.initialize();
await msalInstance.handleRedirectPromise(); // This will no longer throw this error since initialize completed before this was invoked
msalInstance.acquireTokenSilent(); // This will also no longer throw this error

export default msalInstance;