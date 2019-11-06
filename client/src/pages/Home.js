import React from "react";
import MyNavBar from '../components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import MyCarousel from '../components/Carousel';
import { Button, CardDeck, Card, Jumbotron } from 'react-bootstrap';
import rome from './rome.jpg';
import './style.css';
import park from './park.JPG';

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
                        <h2>popular attractions</h2>
                    </Jumbotron>
                </div>
                <div>

                    <CardDeck className="wholedeck">

                        <Card.Img className="cardImage" variant="top" src={rome} />

                        <Card className="text-center">

                            <Card.Body className="cardBody">
                                <Card.Title>  Rome Bus Tours </Card.Title>
                                <Card.Text>
                                    <p className="ratingwords"> 8.8/ 10 stars </p>
                                </Card.Text>
                                <Card.Text>
                                    <p className="pricewords"> $50 (lunch included) {this.props.Price} </p>
                                </Card.Text>
                            </Card.Body>

                        </Card>

                        <Card.Footer className="cardFooter">
                            <Button variant="primary" size="small" className="favbutton"> favorite </Button>
                        </Card.Footer>
                    </CardDeck>



                </div>

                <div>

                    <CardDeck className="wholedeck">

                        <Card.Img className="cardImage" variant="top" src={park} />

                        <Card className="text-center">

                            <Card.Body className="cardBody">
                                <Card.Title>  Aruba ATV Tour </Card.Title>
                                <Card.Text>
                                    <p className="ratingwords"> 10/ 10 stars </p>
                                </Card.Text>
                                <Card.Text>
                                    <p className="pricewords"> $200  </p>
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
