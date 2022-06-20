import React from "react";
import { Link } from "react-router-dom";
import "stylesheets/pages/Home.css";
import urls from "urls";

const Home = () => {
    return (
        <div className="home__container">
            <header className="home__header">Home</header>
            <Link className="home__link" to={urls.roadmap}>
                RoadMap
            </Link>
            <a
                className="home__link"
                href="http://stemfont.ssu.ac.kr:8181"
                target="_blank"
            >
                STEMFONT
            </a>
            <span className="home__link__desc">ID : tester / PW : tester</span>
            <br />
            <br />
            <Link className="home__link" to={urls.root}>
                Go Back
            </Link>
        </div>
    );
};

export default Home;
