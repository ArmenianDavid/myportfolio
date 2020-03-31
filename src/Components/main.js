import React from "react";
import Landing from "./landingpage";
import { Switch, Route } from "react-router-dom";
import Contact from "./contact";
import Projects from "./projects";
import Resume from "./resume";

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
