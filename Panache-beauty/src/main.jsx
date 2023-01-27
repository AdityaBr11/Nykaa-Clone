import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {GoogleOAuthProvider} from "@react-oauth/google"
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";


//122806122719-hsoe2eocu4ilnidqk645ui83d5fiaus8.apps.googleusercontent.com
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <GoogleOAuthProvider clientId="122806122719-hsoe2eocu4ilnidqk645ui83d5fiaus8.apps.googleusercontent.com">
    <ChakraProvider>
      <BrowserRouter>
      <Provider store={store}>
      <App />
      </Provider>
      </BrowserRouter>
    </ChakraProvider>
    </GoogleOAuthProvider>
);
