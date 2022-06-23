import Head from "next/head";
import Link from "next/link";
import { container, content, menus, anchor } from "styles/Home.module.scss";
import { root } from "styles/Global.module.scss";
import urls from "urls";
import PageHeader from "components/PageHeader";
import PageFooter from "components/PageFooter";

const Home = () => {
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
            <PageHeader title="Home" />
            <div className={container}>
                <div className={content}>
                    <div className={menus}>
                        <Link className={anchor} href={urls.github}>
                            <span className={anchor}>Github</span>
                        </Link>
                        <Link className={anchor} href={urls.works}>
                            <span className={anchor}>Works</span>
                        </Link>
                    </div>
                </div>
                <PageFooter href={urls.root} name="Go Back" />
            </div>
        </div>
    );
};

export default Home;
