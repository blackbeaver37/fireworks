import Head from "next/head";
import Link from "next/link";
import { container, header, content, anchor } from "styles/Works.module.scss";
import { root } from "styles/Global.module.scss";
import urls from "urls";

const Works = () => {
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
                <header className={header}>Works</header>
                <div className={content}></div>
                <Link href={urls.home}>
                    <span className={anchor}>Go Home</span>
                </Link>
            </div>
        </div>
    );
};

export default Works;
