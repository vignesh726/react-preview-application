import React, { useState, useEffect,useRef } from "react";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider, useMsal } from "@azure/msal-react";
import { msalConfig, loginRequest } from "./authService";
import StaticFileContent from "./Component/StaticFileContent";
import {getFileFromSharepoint} from "./Component/Services";
const App = () => {
  const msalInstance = new PublicClientApplication(msalConfig);
  const [accessToken, setAccessToken] = useState(null); 
  const [fileContent, setFileContent] = useState();
 
  const SignInButton = () => {
                  const { instance } = useMsal();
                  const handleLogin = () => {
                    instance.loginPopup(loginRequest)
                      .then((response) => {
                        console.log("Login successful:", response);
                        setAccessToken(response?.accessToken)        
                      })
                      .catch((error) => {
                        console.error("Login error:", error);
                      });
                  };
                  return <button onClick={handleLogin}>Sign In</button>;
};

  useEffect(()=>{
              if (accessToken) { 
            getFileFromSharepoint(accessToken).then(data=>{
                  setFileContent(data?.value); 
                }).catch(error=>{
                  console.log(error);
                });
              
              } 
  },[accessToken])

  return (
    <div>
        <div>
        <h1> File Reader Sharepoint</h1>
        {!(fileContent && fileContent?.length>0) && <MsalProvider instance={msalInstance}>
          <SignInButton />
        </MsalProvider>}
          </div>          
          <StaticFileContent files={fileContent} accessToken={accessToken}></StaticFileContent> 
        </div>
     
    
  );
};

export default App;
