import React, { Component } from 'react'

class Test extends Component {
  state = {
      title: '',
      body: ''
  };

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
      console.log('componentDidMount');
      fetch('http://jsonplaceholder.typicode.com/posts/1').then(response=>response.json())
      .then(json=> this.setState({title: json.title, body: json.body}));
  }

  componentWillUpdate() {
      console.log('componentWillUpdate');
  }

  componentWillReceiveProps(nextProps, nextState) {
      console.log('componentWillReceiveProps');
  }

  static getDerivedStateFromProps(nextProps, preState) {
    return {
        test: 'something'
    };
  }

  getDerivedStateFromProps(prevProps, prevState) {
      console.log('getDerivedStateFromProps')
  }

  render() {
    const {title, body} = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p className="text-secondary">{body}</p>
      </div>
    )
  }
}

export default Test;