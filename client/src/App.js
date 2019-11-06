import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import Register from './pages/Register';
import Login from './pages/Login';




function App() {
  return (
    <Router>
     <Switch>
         <Route exact path='/' component={Home}/>
         <Route exact path='/favorites' component={Favorites} />
         <Route exact path='/register' component={Register}/>
         <Route exact path='/signin' component={Login} />
         <Route render={() => 404} />
      </Switch> 
      
    </Router>

  );
}

export default App;
