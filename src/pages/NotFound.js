import React from "react";
import { Link } from "react-router-dom";
import "stylesheets/pages/NotFound.css";
import urls from "urls";

const NotFound = () => {
    return (
        <div className="notfound__container">
            <header className="notfound__header">404 Page Not Found</header>
            <Link className="notfound__link" to={urls.home}>
                Go Home
            </Link>
        </div>
    );
};

export default NotFound;
