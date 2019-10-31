import React from 'react'

class Education extends React.Component{
 
  render(){
    return(
     <div className='resume-grid'>
        <div>
              <p>{this.props.startYear} - {this.props.endYear}</p>
        </div>
        <div>
              <h4 className='schoolname'>{this.props.schoolName}</h4>
              <p>{this.props.schoolDescription}</p>
        </div>
     </div>
  )
  }
  
}


export default Education