import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "pages/Home";
import Welcome from "pages/Welcome";
import urls from "urls";

const AppRouter = () => {
    return (
        <Router>
            <Route exact path={urls.root}>
                <Welcome />
            </Route>
            <Route exact path={urls.home}>
                <Home />
            </Route>
        </Router>
    );
};

export default AppRouter;
