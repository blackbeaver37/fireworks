import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { root } from "styles/Global.module.scss";
import urls from "urls";

const Index = () => {
    const router = useRouter();
    useEffect(() => {
        router.push(urls.root);
    }, []);

    return (
        <div className={root}>
            <Head>
                <title>Fireworks</title>
                <meta
                    name="Fireworks"
                    content="YoonSoo's Web Develop Journey"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </div>
    );
};

export default Index;
