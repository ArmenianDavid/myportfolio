import React , {Component} from 'react'
import {Grid,Cell} from 'react-mdl'
import avatar from '../img/avatar.jpg'


class Landing extends Component{
    constructor(){
      super()
      this.state={

      }
    }

    render(){
      return(
        <div style={{width:'100%' , margin:'auto'}}>
          <Grid className='landing-grid'>
             <Cell col={12}>
              
               <img 
                 src={avatar}
                 alt='avatar'
                 className='avatar-image'/>
               
               <div className='banner-text'>
                  <h1> Front-End Web Developer</h1>

                  <hr/>
  
                  <p>
                    HTML/CSS | BOOTSTRAP | JavaScript | React | NodeJS | GitGub  
                  </p>

                  <div className='sacial-links'>
                    
                    {/* {Linkedin } */}
                     <a href='https://www.linkedin.com/in/davit-sahakyan-364a51184/'
                        target='_blank' 
                        rel='noopener noreferrer'> 
                          
                           <i className='fa fa-linkedin-square' area-hidden='true' />
                     </a>

                     {/* {Github } */}
                     <a href='https://github.com/ArmenianDavid'
                        target='_blank'
                        rel='noopener noreferrer'> 
                         
                          <i className='fa fa-github-square' area-hidden='true' />
                     </a>


                  </div>
               </div>

               

             </Cell>
          </Grid>
        </div>
      )
    }
}

export default Landing