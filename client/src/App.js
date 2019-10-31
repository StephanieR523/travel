import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyNavBar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import MyCard from './components/Card';
import MyCarousel from './components/Carousel';
import Card from "./components/Card"
import MyCard from "./components/Card"
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"




function App() {
  return (
    <Router>
     <Switch>
         <Route exact path='/' component={Home}/>
         <Route exact path='/favorites' component={Favorites} />
         <Route render={() => 404} />
      </Switch> 
      
    </Router>

  );
}

export default App;
