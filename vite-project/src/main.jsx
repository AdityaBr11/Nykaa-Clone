import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {GoogleOAuthProvider} from "@react-oauth/google"
import { BrowserRouter } from "react-router-dom";
//122806122719-hsoe2eocu4ilnidqk645ui83d5fiaus8.apps.googleusercontent.com
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="122806122719-hsoe2eocu4ilnidqk645ui83d5fiaus8.apps.googleusercontent.com">
    <ChakraProvider>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </ChakraProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
