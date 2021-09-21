import Head from "next/head";
import "../src/styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link
                    href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
                    rel="stylesheet"
                />
                <title>Carregando...</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
