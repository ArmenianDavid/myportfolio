import React from 'react'
import { Card , CardTitle ,CardActions ,CardMenu , Button , IconButton , CardText} from 'react-mdl'


const ProjectItem = () =>{
  return(
    <div className='project-items' style={{display:'flex' , justifyContent: 'space-between'}}>
        {/* Project1*/}
            <Card shadow={5} style={{minWidth:'450' , margin:'auto'}}>
              <CardTitle className='bg-image1' style={{color : '#fff' , height:'176px'  }}> React Project #1 </CardTitle>

              <CardText>
              Էջը Ստեղծվել է Դավիթ Սահակյանի կողմից և նախատեսված է որպես տեղեկատվական հարթակ ծառայելու բոլոր մեղր օգտագործողներին:
              </CardText>

              <CardActions border>
                <Button colored> GitHub</Button>
                <Button colored> Codepen</Button>
                <Button colored> LiveDemo</Button>
              </CardActions>

              <CardMenu style={{color : '#fff'}}>
                <IconButton name='share' />
              </CardMenu>
            </Card>

        {/* Project2*/}
            <Card shadow={5} style={{minWidth:'450' , margin:'auto'}}>
              <CardTitle className='bg-image2' style={{color : '#fff' , height:'176px'  }}> React Project #2 </CardTitle>

              <CardText>
              Էջը Ստեղծվել է Դավիթ Սահակյանի կողմից և նախատեսված է որպես տեղեկատվական հարթակ ծառայելու բոլոր մեղր օգտագործողներին:
              </CardText>

              <CardActions border>
                <Button colored> GitHub</Button>
                <Button colored> Codepen</Button>
                <Button colored> LiveDemo</Button>
              </CardActions>

              <CardMenu style={{color : '#fff'}}>
                <IconButton name='share' />
              </CardMenu>
            </Card>

        {/* Project3*/}
            <Card shadow={5} style={{minWidth:'450' , margin:'auto'}}>
              <CardTitle className='bg-image3' style={{color : '#009fff' , height:'176px'  }}> React Project #3 </CardTitle>

              <CardText >
              Էջը Ստեղծվել է Դավիթ Սահակյանի կողմից և նախատեսված է որպես տեղեկատվական հարթակ ծառայելու բոլոր մեղր օգտագործողներին:
              </CardText>

              <CardActions border>
                <Button colored> GitHub</Button>
                <Button colored> Codepen</Button>
                <Button colored> LiveDemo</Button>
              </CardActions>

              <CardMenu style={{color : '#fff'}}>
                <IconButton name='share' />
              </CardMenu>
            </Card>
    </div>
  )
}


export default ProjectItem