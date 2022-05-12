import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "pages/Home";
import Welcome from "pages/Welcome";
import urls from "urls";
import NotFound from "pages/NotFound";
import RoadMap from "pages/RoadMap";

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path={urls.root}>
                    <Welcome />
                </Route>
                <Route exact path={urls.home}>
                    <Home />
                </Route>
                <Route exact path={urls.roadmap}>
                    <RoadMap />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    );
};

export default AppRouter;
