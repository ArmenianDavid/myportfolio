import React from "react";
import Project from "./Project";

const ProjectItem = (props) => {
    const style = {
        display: "flex",
        flexWrap: "wrap ",
        justifyContent: "center",
    };

    return (
        <div className="project-items" style={style}>
            {props.data.map((item) => {
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
