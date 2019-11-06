import React from "react";
import MyNavBar from '../components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import MyCarousel from '../components/Carousel';
import { Button, CardDeck, Card, Image, Jumbotron } from 'react-bootstrap';
import tokyo from './tokyo.jpeg';
import './style.css';
import us from './us.png';
import milan from './milan.jpeg';

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
          <Jumbotron className="jumbo">
          <h2>popular destinations</h2>
          </Jumbotron>
        </div>
        <div>
          
<CardDeck className="wholedeck">

      <Card.Img className="cardImage" variant="top" src={tokyo} />

<Card className="text-center">

  <Card.Body className="cardBody">
    <Card.Title> Tokyo, Japan </Card.Title>
    <Card.Text>
  <p className="ratingwords"> 8.8/ 10 stars </p>
  </Card.Text>
  <Card.Text>
  <p className="pricewords"> $40 </p>
  </Card.Text>
  </Card.Body>

</Card>

<Card.Footer className="cardFooter">
  <Button variant="primary" size="small" className="favbutton"> explore </Button>
</Card.Footer>
</CardDeck>

</div>

<div>

        <CardDeck className="wholedeck">

<Card.Img className="cardImage" variant="top" src={milan} />

<Card className="text-center">

<Card.Body className="cardBody">
  <Card.Title> Milan, Italy </Card.Title>
  <Card.Text>
  <p className="ratingwords"> 10/ 10 stars </p>
  </Card.Text>
  <Card.Text>
  <p className="pricewords"> $50  </p>
  </Card.Text>
</Card.Body>

</Card>
<Card.Footer className="cardFooter">
  <Button variant="primary" size="small" className="favbutton"> explore </Button>
</Card.Footer>
</CardDeck>
</div>

  <div>
    <Jumbotron className="jumbo2">
      <h2>top tourguides</h2>
    </Jumbotron>
  </div>

  <div>
    <Image className="tourguides" src={us}></Image>
  </div>



      </Router>
    );
  }

}


export default Home;
