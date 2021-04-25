import React from "react";
import { Link } from "react-router-dom";
import "stylesheets/pages/RoadMap.css";
import urls from "urls";

const RoadMap = () => {
    return (
        <div className="roadmap__container">
            <header className="roadmap__header">RoadMap</header>
            <Link className="roadmap__link" to={urls.home}>
                Go Home
            </Link>
        </div>
    );
};

export default RoadMap;
