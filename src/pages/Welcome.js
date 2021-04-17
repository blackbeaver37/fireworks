import React from "react";
import { Link, useHistory } from "react-router-dom";
import urls from "urls";
import "stylesheets/pages/Welcome.css";

const Welcome = () => {
    const histoy = useHistory();
    const goHome = () => {
        histoy.push(urls.home);
    };

    window.onkeyup = (event) => {
        if (event.keyCode === 13) {
            goHome();
        }
    };

    return (
        <div className="welcome__container">
            <header className="welcome__header">Welcome</header>
            <span className="welcome__description">This</span>
            <span className="welcome__description">is</span>
            <span className="welcome__description">my</span>
            <span className="welcome__description">FireWorks</span>
            <Link className="welcome__link" to={urls.home}>
                Enter
            </Link>
        </div>
    );
};

export default Welcome;
