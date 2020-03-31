import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import avatar from "../img/avatar.jpg";
import Education from "./Common/Education";
import Experiance from "./Common/Experiance";
import Skills from "./Common/Skills";
import { engData } from "./Data/EngData";
import { rusData } from "./Data/RusData";

import "./Data/button.css";

class Resume extends Component {
    constructor() {
        super();
        this.state = {
            language: "eng",
            data: engData
        };
        this.changeLanguage = this.changeLanguage.bind(this);
    }

    changeLanguage() {
        if (this.state.language === "eng") {
            return this.setState({
                language: "rus",
                data: rusData
            });
        } else {
            return this.setState({
                language: "eng",
                data: engData
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
                        <h2>
                            {this.state.data === engData
                                ? "Education"
                                : "Образование"}
                        </h2>
                        <Education
                            startYear="2015"
                            endYear="2017"
                            schoolName={
                                this.state.data === engData
                                    ? "Armenian State University of Economics"
                                    : "Армянский государственный экономический университет"
                            }
                            schoolDescription={
                                data === engData
                                    ? "Business management specialization, Master’s degree"
                                    : "Управление бизнесом магистрант"
                            }
                        />
                        <Education
                            startYear="2018"
                            endYear="2019"
                            schoolName={
                                data === engData
                                    ? "Basic It Center"
                                    : "Бейсик  ай ти центр"
                            }
                            schoolDescription="Html , Css , Js , React"
                        />
                        <Education
                            startYear="2019"
                            endYear={
                                data === engData ? "present" : "настоящее время"
                            }
                            schoolName={
                                data === engData
                                    ? "ACA(Armenian Code Academy)"
                                    : "АКА(Армениан код академи)"
                            }
                            schoolDescription=" Js , React"
                        />
                        <hr className="resume-hr" />
                        <h2>
                            {data === engData ? "Experience" : "Опыт работы"}
                        </h2>
                        <Experiance
                            startYear="2016"
                            endYear="2018"
                            workName={
                                data === engData
                                    ? "Sales Manager"
                                    : "Менеджер по продажам"
                            }
                            workDescription={
                                data === engData
                                    ? `Working at Arantsk I learned how to work in a team and it was an
                       interesting and good experience for me. My duty was to understand
                       what my clients wanted and to offer them our best suggestions. I
                       calculated how much materials they needed and arranged the
                       delivery`
                                    : `Работая в Арантске я научился работать в команде и это был интересный и хороший опыт для меня.
                        Я должен был понимать что хотят клиенты и предложить самые подходящие им варианты. Считал сколько 
                        материалов им нужно и обеспечивал доставку`
                            }
                        />
                        <hr className="resume-hr" />
                        <h2>{data === engData ? "Skills" : "Навыки"}</h2>
                        <Skills skill="Html" progress={70} />
                        <Skills skill="Css" progress={60} />
                        <Skills skill="Js" progress={50} />
                        <Skills skill="React" progress={50} />
                        <Skills skill="Bootstrap" progress={30} />
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Resume;
