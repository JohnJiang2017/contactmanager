import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './contact.css'
import { Consumer } from '../../context'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  static isEmail = (props, propName, componentName) => {
    const regex = /^((([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})))?$/;
  
    if (!regex.test(props[propName])) {
      return new Error(`Invalid prop \`${propName}\` passed to \`${componentName}\`. Expected a valid email address.`);
    } 
  }

  static propTypes = {
    // name: PropTypes.string.isRequired,
    // email: Contact.isEmail,
    // phone: PropTypes.string.isRequired
    contact: PropTypes.object.isRequired
  };

  email = null;

  constructor(props) {
    super();
    // this.onShowClick = this.onShowClick.bind(this);

    // if (props.email != null ) {
    //   this.email = <li> Phone: {props.email}</li>;
    // }
  }

  // onShowClick() {
  //   console.log(this.state)
  // }

  // onShowClick = (id) => {
  //   // console.log(id);
  //   // this.state = {
  //   //   showContactInfo : false
  //   // }
  //   this.setState( {
  //     showContactInfo: ! this.state.showContactInfo
  //   })
  // }
  onDeleteClick = async (id, dispatch) => {
    // debugger;
    // console.log('clicked');
    // this.props.deleteClickHandler();
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({type: 'DELETE_CONTACT', payload: id})
    } catch(exp) {
      dispatch({type: 'DELETE_CONTACT', payload: id})
    }
    // .then(res => dispatch({type: 'DELETE_CONTACT', payload: id}))

  }

  renderHelper = value => {
    const {id, name, email, phone} = this.props.contact;
    const { showContactInfo } = this.state;
    const { dispatch } = value;
    return (
      <div className="card card-body mb-3">
      <h4>{name} <i onClick={()=> this.setState({showContactInfo: !this.state.showContactInfo})} className="fas fa-sort-down" style={{cursor: 'pointer' }}></i>
      <i className="fas fa-times" style={{cursor:'pointer', float: 'right', color: 'red'}}
      onClick={this.onDeleteClick.bind(this, id, dispatch)}
      />
      <Link to={`/edit/${id}`}>
      <i 
        className="fas fa-pencil-alt" 
        style={{
          cursor: 'pointer',
          float: 'right',
          color: 'black',
          marginRight: '1rem'
        }}
      ></i>
      </Link>
      </h4>
      {showContactInfo? (
        <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
        </ul>
        ) : null
      }
    </div>
    )
  }

  render() {
    const { showContactInfo } = this.state;

    const { id, name, email, phone} = this.props.contact;
    return (
      <Consumer>
        { value => {
          return this.renderHelper(value)
        }}

      </Consumer>      
    )
  }
}

// const isEmail = (props, propName, componentName) => {
//   const regex = /^((([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})))?$/;

//   if (!regex.test(props[propName])) {
//     return new Error(`Invalid prop \`${propName}\` passed to \`${componentName}\`. Expected a valid email address.`);
//   } 
// }

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  // deleteClickHandler: PropTypes.func.isRequired
}

export default Contact;