import React from 'react';
import {Button, CardDeck, Card} from 'react-bootstrap';
import './style.css';


class FavoritesCard extends React.Component {

  render(props) {
    return (

     <CardDeck className="wholedeck">

          <Card.Img className="cardImage" variant="top" src={this.props.Image} />

        <Card className="text-center">

          <Card.Body className="cardBody">
            <Card.Title> {this.props.Name} </Card.Title>
            <Card.Text>
              <p className="ratingwords"> rating: {this.props.Rating} </p>
            </Card.Text>
            <Card.Text>
              <p className="pricewords"> price: {this.props.CurrencyType} {this.props.Price} </p>
            </Card.Text>
          </Card.Body>
          
        </Card>
          <Card.Footer className="cardFooter">
            <Button variant="primary" size="small" className="favbutton"> remove </Button>
          </Card.Footer>
        
      </CardDeck>

    )
  }
}

export default FavoritesCard;