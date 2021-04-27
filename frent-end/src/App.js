import './App.css';
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import  Contact from './components/contact/contact';
import Home from './components/contact/Home';
import Reply from './components/contact/Reply';


import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/add" component={Contact} />
        <Route  path="/Reply/:id" component={Reply} />
      </Switch>
    </Router>
    
    );
  }
}


export default App;
