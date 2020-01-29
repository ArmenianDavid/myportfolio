import React from 'react'
import { Card , CardTitle ,CardActions ,CardMenu , Button , IconButton , CardText} from 'react-mdl'



const ProjectItem = () =>{
  return (
    <div
      className="project-items"
      style={{
        display: "flex",
        flexWrap: "wrap ",
        justifyContent: "space-between"
      }}
    >
      {/* Project1*/}
      <Card
        shadow={5}
        style={{ minWidth: "450", margin: "auto", padding: "10px" }}
      >
        <a
          href="https://armeniandavid.github.io/project2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CardTitle
            className="bg-image1"
            style={{ color: "#fff", height: "176px" }}
          >
            {" "}
            React Project #1
          </CardTitle>{" "}
        </a>

        <CardText>
          Էջը Ստեղծվել է Դավիթ Սահակյանի կողմից և նախատեսված է որպես
          տեղեկատվական հարթակ ծառայելու բոլոր մեղր օգտագործողներին:
        </CardText>

        <CardActions border>
          <Button colored>
            {" "}
            <a
              href="https://github.com/ArmenianDavid/project2"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              GitHub{" "}
            </a>{" "}
          </Button>
          <Button colored> Codepen</Button>
          <Button colored> LiveDemo</Button>
        </CardActions>

        <CardMenu style={{ color: "#fff" }}>
          <IconButton name="share" />
        </CardMenu>
      </Card>

      {/* Project2*/}
      <Card
        shadow={5}
        style={{ minWidth: "450", margin: "auto", padding: "10px" }}
      >
        <a
          href="https://armeniandavid.github.io/Crypto/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CardTitle
            className="bg-image2"
            style={{ color: "#fff", height: "176px" }}
          >
            {" "}
            React Project #2
          </CardTitle>{" "}
        </a>

        <CardText>
          Էջը Ստեղծվել է Դավիթ Սահակյանի կողմից և կծանոթացնի ինքնաբավարար թվային
          արժույթի տեսակներին ինչպիսին են Բիթքոինը և այլն:
        </CardText>

        <CardActions border>
          <Button colored>
            {" "}
            <a
              href="https://github.com/ArmenianDavid/Crypto"
              target="_blank"
              rel="noopener noreferrer"
            >
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

      {/* Project3*/}
      <Card
        shadow={5}
        style={{ minWidth: "450", margin: "auto", padding: "10px" }}
      >
        <a
          href="https://react-phone-store-recorded.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CardTitle
            className="bg-image3"
            style={{ color: "#009fff", height: "176px" }}
          >
            {" "}
            React Project #3
          </CardTitle>{" "}
        </a>

        <CardText>
          Էջը Ստեղծվել է Դավիթ Սահակյանի կողմից և նախատեսված է որպես բջջային
          հեռախոսների վաճառքի օնլայն հարթակ:
        </CardText>

        <CardActions border>
          <Button colored>
            {" "}
            <a
              href="https://github.com/ArmenianDavid/react-phone-store"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              GitHub{" "}
            </a>{" "}
          </Button>
          <Button colored> Codepen</Button>
          <Button colored> LiveDemo</Button>
        </CardActions>

        <CardMenu style={{ color: "#fff" }}>
          <IconButton name="share" />
        </CardMenu>
      </Card>

      {/* Project4*/}
      <Card
        shadow={5}
        style={{ minWidth: "450", margin: "auto", padding: "10px" }}
      >
        <a
          href="https://armeniandavid.github.io/hello/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CardTitle
            className="bg-image4"
            style={{ color: "#009fff", height: "176px" }}
          >
            {" "}
            React Project #4
          </CardTitle>{" "}
        </a>

        <CardText>
          Թեստը Ստեղծվել է Դավիթ Սահակյանի կողմից և այն վերաբերում է Ճապոնիայում
          ստեղծված անիմացիաներին կամ ուրիշ կերպ ասած Անիմեին:
        </CardText>

        <CardActions border>
          <Button colored>
            {" "}
            <a
              href="https://github.com/ArmenianDavid/hello"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              GitHub{" "}
            </a>{" "}
          </Button>
          <Button colored> Codepen</Button>
          <Button colored> LiveDemo</Button>
        </CardActions>

        <CardMenu style={{ color: "#fff" }}>
          <IconButton name="share" />
        </CardMenu>
      </Card>

      {/* Project5*/}
      <Card
        shadow={5}
        style={{ minWidth: "450", margin: "auto", padding: "10px" }}
      >
        <a
          href="https://armeniandavid.github.io/recipes"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <CardTitle
            className="bg-image5"
            style={{ color: "#009fff", height: "176px" }}
          >
            {" "}
            React Project #5{" "}
          </CardTitle>{" "}
        </a>

        <CardText>
          Նշեք այն բաղադրիչը ինչով ցանկանում եք սնունդ պատրաստել և ստացեք
          ապուրների պատրաստման բաղադրատոմսեր:
        </CardText>

        <CardActions border>
          <Button colored>
            {" "}
            <a
              href="https://github.com/ArmenianDavid/recipe"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              GitHub{" "}
            </a>{" "}
          </Button>
          <Button colored> Codepen</Button>
          <Button colored> LiveDemo</Button>
        </CardActions>

        <CardMenu style={{ color: "#fff" }}>
          <IconButton name="share" />
        </CardMenu>
      </Card>

      {/* Project6*/}
      <Card
        shadow={5}
        style={{ minWidth: "450", margin: "auto", padding: "10px" }}
      >
        <a
          href="https://armeniandavid.github.io/snakegame/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <CardTitle
            className="bg-image6"
            style={{ color: "#009fff", height: "176px" }}
          >
            {" "}
            React Project #5{" "}
          </CardTitle>{" "}
        </a>

        <CardText>Խաղ Օձ հավաքված React -ով դեռ կատարելագործվում է:</CardText>

        <CardActions border>
          <Button colored>
            {" "}
            <a
              href="https://github.com/ArmenianDavid/snakegame"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              GitHub{" "}
            </a>{" "}
          </Button>
          <Button colored> Codepen</Button>
          <Button colored> LiveDemo</Button>
        </CardActions>

        <CardMenu style={{ color: "#fff" }}>
          <IconButton name="share" />
        </CardMenu>
      </Card>
       {/* Project7*/}
       <Card
        shadow={5}
        style={{ minWidth: "450", margin: "auto", padding: "10px" }}
      >
        <a
          href="https://armeniandavid.github.io/todo"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <CardTitle
            className="bg-image5"
            style={{ color: "#009fff", height: "176px" }}
          >
            {" "}
            React Project #7{" "}
          </CardTitle>{" "}
        </a>

        <CardText>
          Կատարելիք գործերի ցուցակ: Ցուցակում կարղ եք ավելացնել ջնջձլ կամ ֆիլտրել ցանկը: 
        </CardText>

        <CardActions border>
          <Button colored>
            {" "}
            <a
              href="https://github.com/ArmenianDavid/todo"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              GitHub{" "}
            </a>{" "}
          </Button>
          <Button colored> Codepen</Button>
          <Button colored> LiveDemo</Button>
        </CardActions>

        <CardMenu style={{ color: "#fff" }}>
          <IconButton name="share" />
        </CardMenu>
      </Card>
    </div>
  );
}


export default ProjectItem