import React from 'react';
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import AddContact from './components/AddContact';
import Reply from './components/Reply';
import Home from './components/Home'
const  App =()=> {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/add" component={AddContact} />
        <Route  path="/Reply/:id" component={Reply} />
      </Switch>
    </Router>
  );
}

export default App;
