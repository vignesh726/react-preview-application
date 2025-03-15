
export const msalConfig = {
    auth: {
      clientId: "55cdc898-c249-45ae-afe5-fbdb4997d321", // Replace with your app's client ID
      authority: "https://login.microsoftonline.com/949d4ab5-4410-40c6-858e-7b44ee2a2257", // Replace with your tenant ID
      redirectUri: "https://vignesh726.github.io/react-preview-application/", // The redirect URI you set during registration
    },
  };  
  export const loginRequest = {
    scopes: ["https://dealvps.sharepoint.com/.default"]
  };
  