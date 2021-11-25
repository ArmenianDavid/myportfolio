import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell } from "react-mdl";
import ProjectItem from "../PortfolioProjects/ProjectItems";
import { reactProjectsData } from "../../assets/data/reactProjectsData.js"

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        };
    }
    toggleCategories = () => {
        if (this.state.activeTab === 0) {
            return <ProjectItem data={reactProjectsData}/>;
        } else if (this.state.activeTab === 1) {
            return (
                <div>
                    <h1> this is Angular</h1>
                </div>
            );
        } else if (this.state.activeTab === 2) {
            return (
                <div>
                    <h1> this is Vue</h1>
                </div>
            );
        }
    };

    render() {
        return (
            <div className="category-tabs">
                <Tabs
                    activeTab={this.state.activeTab}
                    onChange={tabId => this.setState({ activeTab: tabId })}
                    ripple
                >
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>Vue</Tab>
                </Tabs>

                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        );
    }
}

export default Projects;
