import React, { Component } from 'react'
import Contact from './Contact'
import { Consumer } from '../../context'

export default class Contacts extends Component {

  constructor() {
      super();
      // this.state = {
      //     contacts: [
      //         {
      //             id: 1,
      //             name: 'John Doe',
      //             email: 'jdoe@gmail.com',
      //             phone: '555-555-5555'
      //         },
      //         {
      //             id: 2,
      //             name: 'Karen Williams',
      //             email: 'karenw@gmail.com',
      //             phone: '222-22-2222'
      //         },
      //         {
      //             id: 3,
      //             name: 'Henry Johnson',
      //             email: 'henryj@gmail.com',
      //             phone: '111-111-1111'
      //         },
      //     ]
      // }
  }

  render() {

    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="displpay-4 mb-2">
                <span className="text-danger">Contact</span> List
              </h1>            
              {contacts.map( contact => 
                  // <h1>{contact.name}</h1>
                  // <Contact key={contact.id} name={contact.name} email={contact.email} phone={contact.phone}/>
                  <Contact key={contact.id} contact={contact} />
              )}
            </React.Fragment>
          )
        }}
      </Consumer>
    )
  }

  deleteContact = id => {
    const { contacts } = this.state;

    const newContact = contacts.filter(contact => 
      contact.id !== id
    )
    
    this.setState( {
      contacts: newContact
    })

  }
}
