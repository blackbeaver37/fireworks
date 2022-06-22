import Head from "next/head";
import Link from "next/link";
import {
    container,
    header,
    content,
    nav,
    sort,
    block,
    profile,
    button,
    loading,
    anchor,
} from "styles/Roadmap.module.scss";
import { root } from "styles/Global.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSortDown,
    faSortUp,
    faTimes,
} from "@fortawesome/free-solid-svg-icons";
import urls from "urls";
import { useEffect, useState } from "react";
import axios from "axios";
import RepoBlock from "components/RepoBlock";

const RoadMap = () => {
    const [initProfile, setInitProfile] = useState(false);
    const [currentProfile, setCurrentProfile] = useState({});

    const [initRepoList, setInitRepoList] = useState(false);
    const [repoList, setRepoList] = useState([]);

    const [showProfile, setShowProfile] = useState(false);
    const [showAllRepo, setShowAllRepo] = useState(false);

    const [sortBy, setSortBy] = useState("pushed");
    const [sortByDirection, setSortByDirection] = useState("desc");

    const getCurrentProfile = async () => {
        const {
            data: { avatar_url },
        } = await axios.get(
            `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERID}`
        );

        setCurrentProfile({ avatar_url });
        setInitProfile(true);
    };

    const getRepoList = async () => {
        setInitRepoList(false);
        setRepoList([]);
        await axios
            .get(
                `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERID}/repos?sort=${sortBy}&direction=${sortByDirection}`
            )
            .then(({ data }) => {
                data.map(
                    ({
                        name,
                        html_url,
                        language,
                        full_name,
                        created_at,
                        updated_at,
                    }) =>
                        setRepoList((prev) => [
                            ...prev,
                            {
                                name,
                                html_url,
                                language,
                                full_name,
                                created_at,
                                updated_at,
                            },
                        ])
                );
                setInitRepoList(true);
            });
    };

    const handleShowAllRepoBtn = async () => {
        setShowProfile(false);
        await getRepoList();
        setShowAllRepo(true);
    };

    const handleHideAllRepoBtn = () => {
        setSortBy("pushed");
        setSortByDirection("desc");
        setShowAllRepo(false);
        setInitRepoList(false);
        setShowProfile(true);
    };

    const toogleSortBy = async () => {
        setShowAllRepo(false);
        if (sortBy === "pushed") {
            setSortBy("updated");
        } else if (sortBy === "updated") {
            setSortBy("created");
        } else if (sortBy === "created") {
            setSortBy("full_name");
        } else if (sortBy === "full_name") {
            setSortBy("pushed");
        }
        await getRepoList();
        setShowAllRepo(true);
    };

    const toogleSortByDirection = async () => {
        setShowAllRepo(false);
        if (sortByDirection === "asc") {
            setSortByDirection("desc");
        } else {
            setSortByDirection("asc");
        }
        await getRepoList();
        setShowAllRepo(true);
    };

    useEffect(() => {
        getCurrentProfile();
        setShowProfile(true);
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
                <header className={header}>RoadMap</header>
                <div className={content}>
                    {showAllRepo && (
                        <div className={nav}>
                            <div className={sort}>
                                <div onClick={toogleSortBy}>
                                    {sortBy === "pushed" && "Pushed"}
                                    {sortBy === "updated" && "Updated"}
                                    {sortBy === "created" && "Created"}
                                    {sortBy === "full_name" && "Name"}
                                </div>
                                <div onClick={toogleSortByDirection}>
                                    {sortByDirection === "asc" && (
                                        <FontAwesomeIcon icon={faSortUp} />
                                    )}
                                    {sortByDirection === "desc" && (
                                        <FontAwesomeIcon icon={faSortDown} />
                                    )}
                                </div>
                            </div>
                            <div
                                className={close}
                                onClick={handleHideAllRepoBtn}
                            >
                                <FontAwesomeIcon icon={faTimes} />
                            </div>
                        </div>
                    )}
                    <div className={block}>
                        {initProfile ? (
                            <>
                                {showProfile && (
                                    <div
                                        className={profile}
                                        onClick={handleShowAllRepoBtn}
                                    >
                                        <img
                                            className={button}
                                            src={currentProfile.avatar_url}
                                            alt="Github Profile Avatar"
                                            draggable="false"
                                        />
                                        <span>See All Repositories</span>
                                    </div>
                                )}
                                {showAllRepo && initRepoList && (
                                    <>
                                        {repoList.map((repo, index) => (
                                            <RepoBlock
                                                key={index}
                                                repo={repo}
                                            />
                                        ))}
                                    </>
                                )}
                            </>
                        ) : (
                            <span className={loading}>Loading...</span>
                        )}
                    </div>
                </div>
                <Link href={urls.home}>
                    <span className={anchor}>Go Home</span>
                </Link>
            </div>
        </div>
    );
};

export default RoadMap;
