import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./Components/main";
import { Link } from "react-router-dom";

const App = () => {
    return (
        <div className="demo-big-content">
            <Layout>
                <Header
                    className="header-color"
                    title={
                        <Link
                            style={{ textDecoration: "none", color: "white" }}
                            to="/myportfolio"
                        >
                            MyPortfolio
                        </Link>
                    }
                    scroll
                >
                    <Navigation>
                        <Link to="/resume">Resume</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contacts</Link>
                    </Navigation>
                </Header>
                <Drawer
                    title={
                        <Link
                            style={{ textDecoration: "none", color: "blue" }}
                            to="/myportfolio"
                        >
                            MyPortfolio
                        </Link>
                    }
                >
                    <Navigation>
                        <Link to="/resume">Resume</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contacts</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <Main />
                </Content>
            </Layout>
        </div>
    );
};

export default App;
