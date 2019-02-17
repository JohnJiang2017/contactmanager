import React, { Component } from 'react'
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_CONTACT':
            return (
                {
                    ...state,
                    contacts: state.contacts.filter(contact => contact.id !== action.payload)
                }
            );
        case 'UPDATE_CONTACT':
        console.log('updating!!!')
            return ({
                  ...state,
                  contacts: state.contacts.map(contact => {
                    if (contact.id == action.payload.id) {
                        return action.payload;
                    } else {
                      return contact;
                    }
                  })
               });
        case 'ADD_CONTACT':
            return (
                {
                    ...state,
                    contacts: [action.payload, ...state.contacts]
                }
            );
         default:
            return state;
    }
}

class Provider extends Component {

  state = {
    contacts: [],
    dispatch: action => this.setState(reducer(this.state, action))
}

  render() {
    return (
      <div>
        <Context.Provider value={this.state}>
            {this.props.children}
        </Context.Provider>
      </div>
    )
  }

  componentWillUpdate() {
    console.log('componentWillUpdate lifecyle method of Context.js');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate lifecyle method of Context.js');
  }

  async componentDidMount() {
    //   axios.get('http://jsonplaceholder.typicode.com/users')
    //   .then(res => this.setState({contacts: res.data}));
    const res = await axios.get('http://jsonplaceholder.typicode.com/users');
    this.setState({contacts: res.data});
  }

}

export const Consumer = Context.Consumer;
export default Provider;
