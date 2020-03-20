import React from "react";
import { ProgressBar } from "react-mdl";

class Skills extends React.Component {
    render() {
        return (
            <div className="skills-grid">
                <div className="skill-container">
                    <div>{this.props.skill}</div>
                    <ProgressBar
                        style={{ width: "75%" }}
                        progress={this.props.progress}
                    />
                </div>
            </div>
        );
    }
}

export default Skills;
