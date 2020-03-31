import React from "react";
import Landing from "./Landingpage";
import { Switch, Route } from "react-router-dom";
import Contact from "./Contact";
import Projects from "./Projects";
import Resume from "./Resume";

const Main = () => {
    return (
        <Switch>
            <Route exact path="/myportfolio" component={Landing} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={Projects} />
            <Route path="/resume" component={Resume} />
        </Switch>
    );
};

export default Main;
