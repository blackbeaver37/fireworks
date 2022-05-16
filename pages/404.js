import Head from "next/head";
import Link from "next/link";
import { container, header, anchor } from "styles/Home.module.scss";
import { root } from "styles/Global.module.scss";
import urls from "urls";

const NotFound = () => {
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
            <div className="notfound__container">
                <header className="notfound__header">404 Page Not Found</header>
                <Link className="notfound__link" href={urls.home}>
                    Go Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
