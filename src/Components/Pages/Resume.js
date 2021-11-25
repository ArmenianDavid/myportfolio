import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import avatar from "../../assets/img/avatar.jpg";
import Education from "../Common/Education";
import Experiance from "../Common/Experiance";
import Skills from "../Common/Skills";
import { eng } from "../../assets/i18n/eng";
import { rus } from "../../assets/i18n/rus";

import "../../assets/button.css";

class Resume extends Component {
    constructor() {
        super();
        this.state = {
            language: "eng",
            data: eng
        };
        this.changeLanguage = this.changeLanguage.bind(this);
    }

    changeLanguage() {
        if (this.state.language === "eng") {
            return this.setState({
                language: "rus",
                data: rus
            });
        } else {
            return this.setState({
                language: "eng",
                data: eng
            });
        }
    }

    render() {
        const { data } = this.state;
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div className="resume-left-div">
                            <img
                                src={avatar}
                                alt="avatar"
                                className="resume-avatar"
                            />
                        </div>
                        <button id="btn" onClick={this.changeLanguage}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            {this.state.language}
                        </button>
                        <h2 className="resume-fullname">
                            {this.state.data.resume_fullname}
                        </h2>
                        <h4 className="resume-profession">
                            {this.state.data.resume_profession}
                        </h4>
                        <hr className="resume-hr" />
                        {this.state.data.resume_info}
                        <hr className="resume-hr" />
                        <h5>{this.state.data.address}</h5>
                        <p>{data.place} </p>
                        <h5>{data.phone}</h5>
                        <p>(+374) 98 00 00 65</p>
                        <h5>{data.mail}</h5>
                        <p>sahakyandavit92@gmail.com</p>
                        <hr className="resume-hr" />
                    </Cell>

                    <Cell className="resume-right-col" col={8}>
                        <h2>{this.state.data.education}</h2>
                        <Education
                            startYear="2015"
                            endYear="2017"
                            schoolName={this.state.data.university}
                            schoolDescription={this.state.data.specialization}
                        />
                        <Education
                            startYear="2018"
                            endYear="2019"
                            schoolName={this.state.data.basicItCenter}
                            schoolDescription="Html , Css , Js , React"
                        />
                        <Education
                            startYear="2019"
                            endYear="2020"
                            schoolName={this.state.data.aca}
                            schoolDescription=" Js , React"
                        />
                        <hr className="resume-hr" />
                        <h2>{this.state.data.experience}</h2>
                        <Experiance
                            startYear="08.2020"
                            endYear="10.2020"
                            workName={this.state.data.internAngularDeveloper}
                            workDescription={this.state.data.descriptionFinConstruct}
                        />
                        <Experiance
                            startYear="01.2021"
                            endYear={this.state.data.present}
                            workName={this.state.data.juniorAngularDeveloper}
                            workDescription={this.state.data.descriptionVoloWork}
                        />
                        <hr className="resume-hr" />
                        <h2>{this.state.data.skills}</h2>
                        <Skills skill="Html" progress={70} />
                        <Skills skill="Css" progress={60} />
                        <Skills skill="Js" progress={50} />
                        <Skills skill="Angular" progress={50} />
                        <Skills skill="Ngrx" progress={30} />
                        <Skills skill="React" progress={30} />
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Resume;
