import { LogLevel } from "@azure/msal-browser";

export const msalConfig = {
    auth: {
        clientId: process.env.AZURE_AUTH_CLIENT_ID || "",
        authority: process.env.AZURE_AUTH_AUTHORITY || "",
        redirectUri: process.env.AZURE_AUTH_REDIRECT_URI || ""
    },
    // auth: {
    //     clientId: "9a1b12fb-3672-4b05-81b5-b78fa73466db",
    //     authority: "https://login.microsoft.com/2f15f028-fc4e-4546-8d11-da8e0f549b5c",
    //     redirectUri: "http://localhost:3000"
    // },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {	
        loggerOptions: {	
            loggerCallback: (level: any, message: any, containsPii: any) => {	
                if (containsPii) {		
                    return;		
                }		
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                    default:
                        return;
                }	
            }	
        }	
    }
};

export const loginRequest = {
    scopes: ["User.Read"]
};

export const graphConfig = {
    graphMeEndpoint: "Enter_the_Graph_Endpoint_Herev1.0/me" //e.g. https://graph.microsoft.com/v1.0/me
};