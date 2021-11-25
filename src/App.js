import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";
import Main from "./Components/Main";

const RESUME_LINK_TEXT = "Resume";
const PROJECT_LINK_TEXT = "Projects";
const CONTAXT_LINK_TEXT = "Contacts";
const LOGO_MY_PORTFOLIO_TEXT = "MyPortfolio";

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
                            {LOGO_MY_PORTFOLIO_TEXT}
                        </Link>
                    }
                    scroll
                >
                    <Navigation>
                        <Link to="/resume">{RESUME_LINK_TEXT}</Link>
                        <Link to="/projects">{PROJECT_LINK_TEXT}</Link>
                        <Link to="/contact">{CONTAXT_LINK_TEXT}</Link>
                    </Navigation>
                </Header>
                <Drawer
                    title={
                        <Link
                            style={{ textDecoration: "none", color: "blue" }}
                            to="/myportfolio"
                        >
                            {LOGO_MY_PORTFOLIO_TEXT}
                        </Link>
                    }
                >
                    <Navigation>
                        <Link to="/resume">{RESUME_LINK_TEXT}</Link>
                        <Link to="/projects">{PROJECT_LINK_TEXT}</Link>
                        <Link to="/contact">{CONTAXT_LINK_TEXT}</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <Main/>
                </Content>
            </Layout>
        </div>
    );
};

export default App;
