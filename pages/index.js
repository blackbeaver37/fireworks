import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import { useEffect } from "react";
import {
    container,
    header,
    description,
    anchor,
} from "styles/Index.module.scss";
import { root } from "styles/Global.module.scss";
import urls from "urls";

const Index = () => {
    useEffect(() => {
        window.onkeyup = (e) => {
            e.preventDefault();
            if (e.keyCode === 13) Router.push(urls.home);
        };
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

            <div className={container}>
                <header className={header}>Welcome</header>
                <span className={description}>This</span>
                <span className={description}>is</span>
                <span className={description}>my</span>
                <span className={description}>FireWorks</span>
                <Link href={urls.home}>
                    <span className={anchor}>Enter</span>
                </Link>
            </div>
        </div>
    );
};

export default Index;
