import React, { Component } from 'react';
import Contacts from './components/contacts/Contacts'
import Header from './components/layout/Header'
import Provider from './context'
import AddContact from './components/contacts/AddContact'
import EditContact from './components/contacts/EditContact'
import About from './components/pages/About'
import NotFound from './components/pages/NotFound'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Test from './components/test/Test'

class App extends Component {
  render() {
    // const name = 'World';
    // const showHello = true;

    return (
      // React.createElement(
      //   'div',
      //   {className: 'App'},
      //   React.createElement(
      //     'hi',
      //     null,
      //     'The App Component without Sugar!'
      //   )
      // )
      <Provider>
      <Router>
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
        <Switch>
          <Route exact path="/" component={Contacts} />
          <Route exact path="/add" component={AddContact} />
          <Route exact path="/edit/:id" component={EditContact} />
          <Route exact path="/about/:id" component={About} />
          <Route exact path="/test" component={Test} />
          <Route component={NotFound} />
        </Switch>
        </div>
      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
