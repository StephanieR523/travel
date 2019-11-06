import React from "react";
import MyNavBar from '../components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import MyCarousel from '../components/Carousel';
import { Button, CardDeck, Card } from 'react-bootstrap';
import rome from './rome.jpg';


class Home extends React.Component {

  render() {
    return (
      <Router>
        
        <div>
        <MyNavBar />
        </div>
  
        <div>
          <MyCarousel />
        </div>
  
        <div>

          <CardDeck className="wholedeck">

<Card.Img className="cardImage" variant="top" src={rome} />

<Card className="text-center">

<Card.Body className="cardBody">
  <Card.Title>  Rome Bus Tours </Card.Title>
  <Card.Text>
  <p className="ratingwords"> rating: 8 </p>
  </Card.Text>
  <Card.Text>
  <p className="pricewords"> price: $50 (lunch included) {this.props.Price} </p>
  </Card.Text>
</Card.Body>

</Card>
<Card.Footer className="cardFooter">
  <Button variant="primary" size="small" className="favbutton"> favorite </Button>
</Card.Footer>
</CardDeck>

        </div>
  
      </Router>
    );
  }

}


export default Home;
