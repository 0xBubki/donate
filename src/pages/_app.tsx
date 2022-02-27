import "../styles/globals.css";
import type {AppProps} from "next/app";
import {ChakraProvider} from "@chakra-ui/react";
import {DAppProvider} from '@usedapp/core';

function MyApp({Component, pageProps}: AppProps) {
    return (
        <DAppProvider config={{}}>
            <ChakraProvider>
                <Component {...pageProps} />
            </ChakraProvider>
        </DAppProvider>
    );
}

export default MyApp;
