import React from "react";
import { Link } from "react-router-dom";
import "stylesheets/pages/Home.css";
import urls from "urls";

const Home = () => {
    return (
        <div className="home__container">
            <header className="home__header">Home</header>
            <Link className="home__link" to={urls.root}>
                Go Back
            </Link>
        </div>
    );
};

export default Home;
