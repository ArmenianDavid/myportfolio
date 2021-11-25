import React from "react";
import Landing from "./Pages/Landingpage";
import { Switch, Route, Redirect } from "react-router-dom";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Resume from "./Pages/Resume";

const Main = () => {
    return (
        <Switch>
            <Route exact path="/myportfolio" component={Landing} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={Projects} />
            <Route path="/resume" component={Resume} />
            <Route path='*' render={() => (<Redirect to="/myportfolio"/>)} />
        </Switch>
    );
};

export default Main;
