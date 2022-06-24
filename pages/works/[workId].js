import { useRouter } from "next/router";

const Work = () => {
    const router = useRouter();
    const { workId } = router.query;

    return <p>Post: {workId}</p>;
};

export default Work;
