import React, { Component } from 'react'
import {Consumer} from '../../context'
// import uuid from 'uuid';

import TextInputGroup from '../layout/TextInputGroup'
import axios from 'axios';

class EditContact extends Component {

  state = {
      name: '',
      email: '',
      phone: '',
      errors: {}
  }

  async componentDidMount() {

    const {id} = this.props.match.params;
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    const {name, email, phone} = res.data;
    this.setState({
        name,
        email,
        phone
    })
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
     const {id} = this.props.match.params;
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

     const updateContact = {id, name, email, phone};

    //  axios.post(`https://jsonplaceholder.typicode.com/users`, newContact)
    //  .then(res => {
    //    dispatch({type: 'ADD_CONTACT', payload: res.data});
    //  });
    // const res = await axios.post(`https://jsonplaceholder.typicode.com/users`, newContact);
    // dispatch({type: 'ADD_CONTACT', payload: res.data});

    this.setState(updateContact)

    try {
        const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updateContact);
        dispatch({
            type: 'UPDATE_CONTACT',payload: res.data
        })
        this.props.history.push('/')
    } catch (exp) {
        alert('data not saved due to error!')
    }
  }

  render() {
    const {name, email, phone, errors} = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
         return (
          <div className="card mb-3">
          <div className="card-header">Update Contact</div>
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
                value="Save Changes" 
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

export default EditContact; 