import React from 'react'
import {List , ListItem , ListItemContent} from 'react-mdl'


const ContactList = () =>{
  return(
      <div>
          <List>
                
                <ListItem>
                    <ListItemContent className='listItemContent' style={{fontSize: '20px' , fontFamily: 'Arvo'}}>
                      <i className='fa fa-phone-square' aria-hidden='true'/>
                      <span>(+374) 0 98 00 00 65</span>
                    </ListItemContent>
                </ListItem>
                <ListItem>
                    <ListItemContent className='listItemContent' style={{fontSize: '20px' , fontFamily: 'Arvo'}}>
                      <i className='fa fa-envelope-square' aria-hidden='true'/>
                      <span>sahakyandavit92@gmail.com</span>
                    </ListItemContent>
                </ListItem>
                <i class="fab fa-viber"></i>

          </List>
      </div>
  )
}


export default ContactList