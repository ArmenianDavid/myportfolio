import React , {Component} from 'react'
import {Grid , Cell} from 'react-mdl'
import avatar from '../img/avatar.jpg'
import Education from './Common/Education'
import Experiance from './Common/Experiance'
import Skills from './Common/Skills'


class Resume extends Component{
    constructor(){
      super()
      this.state={

      }
    }

    render(){
      return(
        <div>
          <Grid>

                <Cell  col={4}  >
                  <div className='resume-left-div'>
                     <img src={avatar} alt='avatar' className='resume-avatar'/>
                  </div>

                  <h2 className='resume-fullname'>Davit Sahakyan</h2>
                  <h4 className='resume-profession'>Programmer</h4>
                  <hr className='resume-hr'/>
                  <p>Hello i am Davit. I am Front-end web developer.These are the  technologies in programming that i 
                    can use. <strong>HTML</strong>, use its tags with <strong>CSS</strong>. Can 
                    make <strong>Responsive design</strong>(your website
                    would display equally well in everything from widescreen monitors to mobile phones).Can use <strong>
                    Bootstrap</strong>, wich is an open source toolkit for developing with HTML, CSS, and JS. <strong>
                    JS</strong> and library <strong>React</strong>.Can fetch data from API-s and show to the
                    web page and more...
                  </p>
                  <hr className='resume-hr'/>
                  <h5>Addres</h5>
                  <p>Armenia Yerevan Sose 2/2 </p>
                  <h5>Phone</h5>
                  <p>(+374) 98 00 00 65</p>
                  <h5>Email</h5>
                  <p>sahakyandavit92@gmail.com</p>
                  <hr className='resume-hr' />
                </Cell>





                <Cell className='resume-right-col' col={8}  >
                   <h2>Education</h2>
                   <Education 
                      startYear='2015' 
                      endYear='2017' 
                      schoolName='Armenian State University of Economics'
                      schoolDescription="Business management specialization, Master’s degree"
                      />
                   <Education 
                      startYear='2018' 
                      endYear='2019' 
                      schoolName='Basic It Center'
                      schoolDescription="Html , Css , Js , React"
                      />
                   <Education 
                      startYear='2019' 
                      endYear='present' 
                      schoolName='ACA(Armenian Code Academy)'
                      schoolDescription=" Js , React"
                      />  
                      <hr className='resume-hr'/>
                      <h2>Experiance</h2>
                    <Experiance 
                       startYear='2016'
                       endYear='2018'
                       workName='Sales Manager'
                       workDescription='Working at Arantsk I learned how to work in a team and it was an
                       interesting and good experience for me. My duty was to understand
                       what my clients wanted and to offer them our best suggestions. I
                       calculated how much materials they needed and arranged the
                       delivery.'
                    />
                      <hr className='resume-hr'/>
                      <h2>Skills</h2>
                    <Skills skill='Html' progress={70}/>
                    <Skills skill='Css' progress={60}/>
                    <Skills skill='Js' progress={50}/>
                    <Skills skill='React' progress={50}/>
                    <Skills skill='Bootstrap' progress={30}/>

                </Cell>  
                 
                   
          </Grid>
        </div>
      )
    }
}

export default Resume