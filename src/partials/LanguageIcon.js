import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCss3Alt,
    faHtml5,
    faJava,
    faJsSquare,
    faPython,
} from "@fortawesome/free-brands-svg-icons";
import { faBorderNone, faCopyright } from "@fortawesome/free-solid-svg-icons";

const LanguageIcon = ({ language }) => {
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

export default LanguageIcon;
