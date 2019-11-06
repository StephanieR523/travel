import React from "react";
import MyNavBar from '../components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import FavoritesCard from "../components/Favorites";

class FavoritesPage extends React.Component {



  
  render() {
    return (
      <Router>
        
        <div>
        <MyNavBar />
        </div>
  
        <div>
          <FavoritesCard />
        </div>
        <FavoritesCard/>
        <div>
        <FavoritesCard/>
        </div>
        <div>
        <FavoritesCard/>
        </div>
  
        
      </Router>
    );
  }

}


export default FavoritesPage;
