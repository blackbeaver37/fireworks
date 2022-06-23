import Head from "next/head";
import { container, content } from "styles/Blog.module.scss";
import { root } from "styles/Global.module.scss";
import urls from "urls";
import PageHeader from "components/PageHeader";
import PageFooter from "components/PageFooter";

const Blog = () => {
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
            <PageHeader title="Blog" type={1} />
            <div className={container}>
                <div className={content}></div>
            </div>
        </div>
    );
};

export default Blog;
