import React from "react";
import { createRoot } from "react-dom/client";
import { ReactDOM } from "react-dom/client";
import {BrowserRouter as Router} from 'react-router-dom'
import App from "./App";
import './index.css';
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "./styles/globals.css";
import { StateContextProvider } from "./context";
import {ChakraProvider} from '@chakra-ui/react';

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mainnet;

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>

    <ThirdwebProvider desiredChainId={ChainId.Goerli}>
<ChakraProvider>
<Router>
      <StateContextProvider>

      <App />
      </StateContextProvider>

</Router>
      
</ChakraProvider>
    </ThirdwebProvider>
   </React.StrictMode> 
  
);
