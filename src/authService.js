// authConfig.js
export const msalConfig = {
    auth: {
      clientId: "ce01beec-6eeb-4f53-a177-af3ec8ce1669", // Replace with your app's client ID
      authority: "https://login.microsoftonline.com/fe11687e-6b7a-4e5a-8391-07b6c395e512", // Replace with your tenant ID
      redirectUri: "http://localhost:3000", // The redirect URI you set during registration
    },
  };
  
  export const loginRequest = {
    scopes: ["Files.Read", "offline_access"],
  };
  