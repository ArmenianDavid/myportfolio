import React from "react";
import Project from "./Project";
import { reactProjectsData } from "./Data/ReactProjectsData.js";

const ProjectItem = () => {
    return (
        <div
            className="project-items"
            style={{
                display: "flex",
                flexWrap: "wrap ",
                justifyContent: "space-between"
            }}
        >
            {reactProjectsData.map(item => {
                return (
                    <Project
                        key={item.id}
                        id={item.id}
                        demoLink={item.demoLink}
                        img={item.img}
                        description={item.description}
                        github={item.github}
                    />
                );
            })}
        </div>
    );
};

export default ProjectItem;
