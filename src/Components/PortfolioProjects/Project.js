import React from "react";
import {
    Card,
    CardTitle,
    CardActions,
    CardMenu,
    Button,
    IconButton,
    CardText,
} from "react-mdl";

export default function Project({ id, demoLink, img, description, github }) {
    const cardTitleStyle = {
        color: "#fff",
        height: "176px",
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
    };

    return (
        <Card
            shadow={5}
            style={{
                minWidth: "450",
                maxWidth: "450",
                margin: "5px",
                padding: "10px",
            }}
        >
            <a href={demoLink} target="_blank" rel="noopener noreferrer">
                <CardTitle
                    className="bg-image2"
                    style={cardTitleStyle}
                ></CardTitle>
            </a>

            <CardText>{description}</CardText>

            <CardActions border>
                <Button colored>
                    <a href={github} target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </Button>
                <Button colored> Codepen</Button>
                <Button colored> LiveDemo</Button>
            </CardActions>

            <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
            </CardMenu>
        </Card>
    );
}
