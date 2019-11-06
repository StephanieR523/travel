import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import MyNavBar from '../components/Navbar';
import MyCarousel from '../components/Carousel';
import MyCard from "../components/Card";
import ls from "local-storage";

class Favorites extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      favoritesPage: []
    };
  }
  render() {
    return (
      < div >
        {/* {console.log(this.state.favorites)} */}
        {console.log(ls.get("data"))}

        <Router>

          <div>
            <MyNavBar />
          </div>

          <div>
            <MyCarousel />
          </div>

          <div>
            <MyCard />
          </div>
          {
            ls.get("data").map((data) => {


              console.log(data)
              return (
                <div>
                  <MyCard

                    Image={data.Image}
                    Name={(data.Name)}
                    Price={(data.Price)}
                    Rating={(data.Rating)}
                    CurrencyType={(data.CurrencyType)}
                  >
                  </MyCard>

                </div>
              )
            })
          }

        </Router>
      </div >
    )
  }
}




export default Favorites;