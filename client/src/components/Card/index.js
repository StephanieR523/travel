import React from 'react';
import { Button, CardDeck, Card } from 'react-bootstrap';
import './style.css'
import pool from "./pool.JPG"

class MyCard extends React.Component {

  render(props) {
    return (

      <CardDeck>
          <Card.Img className="cardImage" variant="top" src={this.props.Image} />

        <Card className="text-center">

          <Card.Body className="cardBody">
            <Card.Title> Title: {this.props.Name} </Card.Title>
            <Card.Text>
              <p> Rating: {this.props.Rating} </p>
            </Card.Text>
            <Card.Text>
              <p> Price: {this.props.CurrencyType} {this.props.Price} </p>
            </Card.Text>
          </Card.Body>
          
        </Card>
          <Card.Footer className="cardFooter">
            {/* <Button variant="primary" size="small" onClick={() => console.log("hello")}className="favbutton"> Add To Favorites {} </Button> */}
          </Card.Footer>
        
      </CardDeck>

      



    )
  }
}

export default MyCard;