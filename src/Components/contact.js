import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import avatar from "../img/avatar.jpg";
import ContactList from "./ContactList";

class Contact extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6} tablet={4} phone={12}>
                        <h2>Davit Sahakyan</h2>
                        <img
                            src={avatar}
                            alt="avatar"
                            style={{ height: "250px" }}
                        />
                        <p
                            style={{
                                width: "75%",
                                margin: "auto",
                                paddingTop: "1em"
                            }}
                        >
                            Hello. I am Davit. I am Front-end web developer.
                        </p>
                    </Cell>

                    <Cell col={6} tablet={8} phone={12}>
                        <h2>Contact Me</h2>
                        <hr />

                        <div className="contact-list">
                            <ContactList />
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Contact;
