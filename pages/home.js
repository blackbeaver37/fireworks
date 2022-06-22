import Head from "next/head";
import Link from "next/link";
import { container, header, menus, anchor } from "styles/Home.module.scss";
import { root } from "styles/Global.module.scss";
import urls from "urls";

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
            <div className={container}>
                <header className={header}>Home</header>
                <div className={menus}>
                    <Link className={anchor} href={urls.roadmap}>
                        <span className={anchor}>RoadMap</span>
                    </Link>
                    <Link className={anchor} href={urls.works}>
                        <span className={anchor}>Works</span>
                    </Link>
                </div>
                <Link className={anchor} href={urls.root}>
                    <span className={anchor}>Go Back</span>
                </Link>
            </div>
        </div>
    );
};

export default Home;
