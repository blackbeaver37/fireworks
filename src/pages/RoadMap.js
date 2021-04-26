import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "stylesheets/pages/RoadMap.css";
import urls from "urls";
import useAxios from "@unsooks/use-axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCss3Alt,
    faHtml5,
    faJava,
    faJsSquare,
    faPython,
} from "@fortawesome/free-brands-svg-icons";
import { faBorderNone, faCopyright } from "@fortawesome/free-solid-svg-icons";

const RoadMap = () => {
    const [showProfile, setShowProfile] = useState(false);
    const [showAllRepo, setShowAllRepo] = useState(false);

    const {
        loading: profileLoading,
        error: profileError,
        data: profileData,
        refetch: profileRefetch,
    } = useAxios({
        url:
            "https://api.github.com/users/" +
            process.env.REACT_APP_GITHUB_USERID,
    });

    const {
        loading: allRepoLoading,
        error: allRepoError,
        data: allRepoData,
        refetch: allRepoRefetch,
    } = useAxios({
        url:
            "https://api.github.com/users/" +
            process.env.REACT_APP_GITHUB_USERID +
            "/repos?sort=pushed",
    });

    const handleShowAllRepoBtn = () => {
        setShowProfile(false);
        setShowAllRepo(true);
        console.log(`Profile: ${showProfile}\nALLRepo: ${showAllRepo}`);
    };

    const formattingDate = (rawDateStr) => {
        var date = new Date(rawDateStr);
        var year = date.getFullYear();
        var month = 1 + date.getMonth();
        month = month >= 10 ? month : "0" + month;
        var day = date.getDate();
        day = day >= 10 ? day : "0" + day;
        var hour = date.getHours();
        hour = hour >= 10 ? hour : "0" + hour;
        var minutes = date.getMinutes();
        minutes = minutes >= 10 ? minutes : "0" + minutes;
        var seconds = date.getSeconds();
        seconds = seconds >= 10 ? seconds : "0" + seconds;

        return `${year}/${month}/${day} ${hour}:${minutes}:${seconds}`;
    };

    const selectIcon = (language) => {
        if (language === null) {
            return (
                <FontAwesomeIcon
                    icon={faBorderNone}
                    style={{ color: "var(--text-gray)" }}
                />
            );
        } else if (language === "CSS") {
            return (
                <FontAwesomeIcon
                    icon={faCss3Alt}
                    style={{ color: "var(--icon-css)" }}
                />
            );
        } else if (language === "JavaScript") {
            return (
                <FontAwesomeIcon
                    icon={faJsSquare}
                    style={{ color: "var(--icon-js)" }}
                />
            );
        } else if (language === "HTML") {
            return (
                <FontAwesomeIcon
                    icon={faHtml5}
                    style={{ color: "var(--icon-html)" }}
                />
            );
        } else if (language === "Java") {
            return (
                <FontAwesomeIcon
                    icon={faJava}
                    style={{ color: "var(--icon-java)" }}
                />
            );
        } else if (language === "C#") {
            return (
                <FontAwesomeIcon
                    icon={faCopyright}
                    style={{ color: "var(--icon-csharp)" }}
                />
            );
        } else if (language === "C++" || language === "C") {
            return (
                <FontAwesomeIcon
                    icon={faCopyright}
                    style={{ color: "var(--icon-cpp)" }}
                />
            );
        } else if (language === "Python") {
            return (
                <FontAwesomeIcon
                    icon={faPython}
                    style={{ color: "var(--icon-python)" }}
                />
            );
        }
    };

    useEffect(() => {
        setShowProfile(true);
        setShowAllRepo(false);
    }, []);

    return (
        <div className="roadmap__container">
            <header className="roadmap__header">RoadMap</header>
            <div className="roadmap__content">
                {!profileLoading ? (
                    <>
                        {showProfile && (
                            <div
                                className="roadmap__content__profile"
                                onClick={handleShowAllRepoBtn}
                            >
                                <img
                                    className="roadmap__content__button"
                                    src={profileData.data.avatar_url}
                                    alt="Github Profile Avatar"
                                />
                                <span>See All Repositories</span>
                            </div>
                        )}
                        {showAllRepo &&
                            allRepoData.data.map((repo, index) => (
                                <div
                                    key={index}
                                    className="roadmap__content__repo-block"
                                    onClick={() =>
                                        window.open(repo.html_url, "_blank")
                                    }
                                >
                                    <span className="repo-title">
                                        {repo.name}
                                    </span>
                                    <span className="repo-language">
                                        {selectIcon(repo.language)}{" "}
                                        {repo.language ? repo.language : "None"}
                                    </span>
                                    <span className="repo-date">
                                        (Create)
                                        {formattingDate(repo.created_at)}{" "}
                                        (Update)
                                        {formattingDate(repo.updated_at)}
                                    </span>
                                    <a>Go Github Repository</a>
                                </div>
                            ))}
                    </>
                ) : (
                    <span>Loading...</span>
                )}
            </div>
            <Link className="roadmap__link" to={urls.home}>
                Go Home
            </Link>
        </div>
    );
};

export default RoadMap;
