import React, { useState, useEffect } from "react";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider, useMsal } from "@azure/msal-react";
import { msalConfig, loginRequest } from "./authService";
import StaticFileContent from "./Component/StaticFileContent"

const msalInstance = new PublicClientApplication(msalConfig);

const SignInButton = () => {
  const { instance } = useMsal();
  const [isRender,setRender]=useState(1);

  const handleLogin = () => {
    instance.loginPopup(loginRequest).then((response) => {
      console.log("Login successful:", response);
    
    }).catch((error) => {
      console.error("Login error:", error);
    });
  };

  return <button onClick={handleLogin}>Sign In</button>;
};

const FileReader = () => {
  const { instance, accounts } = useMsal();
  const [fileContent, setFileContent] = useState("");

  const fetchFile = async () => {
    console.log("check Foud Accout")
    if (accounts.length === 0) {
      console.log("No account found");
      return;
    }
    else{
      console.log("Accout is there")
    }

    const account = accounts[0];
    const accessTokenRequest = {
      ...loginRequest,
      account: account,
    };

    try {
      const accessTokenResponse = await instance.acquireTokenSilent(accessTokenRequest);
      const accessToken = accessTokenResponse.accessToken;
      console.log("Api Call Accout is there")
      // Fetch a file from OneDrive
      const fileUrl = "https://graph.microsoft.com/v1.0/me/drive/root/children"; // Replace with your file path
      const response = await fetch(fileUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const text = await response.text();
      setFileContent(text);
    } catch (error) {
      console.error("Error fetching file:", error);
    }
  };

  useEffect(() => {
    fetchFile();
  }, [accounts]);

  return (
    <div>
      <h3>File Content:</h3>
      <pre>{fileContent}</pre>
    </div>
  );
};

const App = () => {
  return (
  <div>
    <MsalProvider instance={msalInstance}>
      <div>
      <h1>OneDrive File Reader</h1>
        <SignInButton />
        <FileReader />
      </div>
    </MsalProvider>
    <StaticFileContent/>

   </div>
  );
};

export default App;