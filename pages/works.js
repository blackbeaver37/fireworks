import Head from "next/head";
import Link from "next/link";
import { container, content, anchor } from "styles/Works.module.scss";
import { root } from "styles/Global.module.scss";
import urls from "urls";
import PageHeader from "components/PageHeader";
import PageFooter from "components/PageFooter";

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
            <PageHeader title="Works" />
            <div className={container}>
                <div className={content}>
                    <Link href="http://stemfont.ssu.ac.kr:8181">
                        <a target="_blank" className={anchor}>
                            STEMFONT
                        </a>
                    </Link>
                </div>
                <PageFooter href={urls.home} name="Go Home" />
            </div>
        </div>
    );
};

export default Works;
