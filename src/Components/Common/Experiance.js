import React from "react";

class Experiance extends React.Component {
    render() {
        return (
            <div className="resume-grid">
                <div>
                    <p>
                        {this.props.startYear} - {this.props.endYear}
                    </p>
                </div>
                <div>
                    <h4 className="schoolname">{this.props.workName}</h4>
                    <p>{this.props.workDescription}</p>
                </div>
            </div>
        );
    }
}

export default Experiance;
