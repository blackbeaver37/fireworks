import Head from "next/head";
import Link from "next/link";
import { container, content, anchor } from "styles/Works.module.scss";
import { root } from "styles/Global.module.scss";
import PageHeader from "components/PageHeader";
import { useEffect, useState } from "react";
import axios from "axios";
import WorksBlock from "components/WorksBlock";

const Works = () => {
    const [works, setWorks] = useState([]);
    const [initWorks, setInitWorks] = useState(false);
    const getAllMyWorks = async () => {
        const allWorks = await axios.get("/api/myWorks");
        setWorks(allWorks.data.allWorks);
        setInitWorks(true);
    };
    useEffect(() => {
        setInitWorks(false);
        getAllMyWorks();
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
            <PageHeader title="Works" type={1} />
            <div className={container}>
                <div className={content}>
                    {initWorks &&
                        works.map((work, index) => (
                            <WorksBlock key={index} work={work} />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Works;
