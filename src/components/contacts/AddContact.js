import React, { Component } from 'react'
import {Consumer} from '../../context'
// import uuid from 'uuid';

import TextInputGroup from '../layout/TextInputGroup'
import axios from 'axios';

class AddContact extends Component {

  state = {
      name: '',
      email: '',
      phone: '',
      errors: {}
  }

  onChange = e => {
      const attributeName = e.target.name;
      const attributeValue = e.target.value;
      this.setState(
          {
              ...this.state,
              [attributeName]: attributeValue
          }
      )

      this.validateInputs();
  }

  validateInputs = ()=> {
    const newErrors = {};
    const { name, email, phone } = this.state;

     // check for errors

     if (name === '') {
      newErrors.name = 'Name is required'
     }

     if (email === '') {
      newErrors.email = 'Email is required'
  
     }
     if (phone === '') {
       newErrors.phone = 'Phone is required'
     }

    //  if (name=== '' || email === '' || phone === '') {
    this.setState(
      { errors: newErrors}
    )
  }

  onSubmit = async (dispatch, e) => {
     e.preventDefault();
     const { name, email, phone } = this.state;

     const newErrors = {};

     // check for errors

     if (name === '') {
      newErrors.name = 'Name is required'
     }

     if (email === '') {
      newErrors.email = 'Email is required'
  
     }
     if (phone === '') {
       newErrors.phone = 'Phone is required'
     }

     if (name=== '' || email === '' || phone === '') {
       this.setState(
         { errors: newErrors}
       )
       return;
     }

     const newContact = {name, email, phone};

    //  axios.post(`https://jsonplaceholder.typicode.com/users`, newContact)
    //  .then(res => {
    //    dispatch({type: 'ADD_CONTACT', payload: res.data});
    //  });
    const res = await axios.post(`https://jsonplaceholder.typicode.com/users`, newContact);
    dispatch({type: 'ADD_CONTACT', payload: res.data});

     // clear form
     this.setState({
       name: '',
       email: '',
       phone: '',
       errors: {}
     })

     this.props.history.push('/')
  }

  render() {
    const {name, email, phone, errors} = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
         return (
          <div className="card mb-3">
          <div className="card-header">Add Contact</div>
          <div className="card-body">
           <form onSubmit={this.onSubmit.bind(this, dispatch)}>
              <TextInputGroup
                label='Name'
                name='name'
                placeholder='Enter Name...'
                onChange={this.onChange}
                value={name}
                error={errors.name}
              />
              <TextInputGroup
                label='Email'
                name='email'
                type='email'
                placeholder='Enter Email...'
                onChange={this.onChange}
                value={email}
                error={errors.email}
              />
              <TextInputGroup
                label='Phone'
                name='phone'
                placeholder='Enter Phone...'
                onChange={this.onChange}
                value={phone}
                error={errors.phone}
              />
              <input 
                type="submit" 
                className="btn btn-light btn-block" 
                value="Add Contact" 
              />
           </form>
          </div>
        </div>
         )
        }}
      </Consumer>
    )
  }
}

export default AddContact; 