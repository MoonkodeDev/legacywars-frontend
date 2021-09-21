import Head from "next/head";
import User from "../src/components/User";
import Navbar from "../src/components/Navbar";
import Header from "../src/components/Home/Header";
import Vips from "../src/components/Home/Vips";
import Posts from "../src/components/Home/Posts";
import Footer from "../src/components/Footer";

export default function Home() {
    return (
        <>
            <Head>
                <title>LegacyWars - Servidor de Minecraft</title>
                <link
                    rel="shortcut icon"
                    href="https://cdn.moonkode.com/images/projects/LegacyWars/favicon.ico"
                />
            </Head>
            <User />
            <Navbar />
            <Header />
            <Vips />
            <Posts />
            <Footer />
        </>
    );
}
