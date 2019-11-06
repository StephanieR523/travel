import React from 'react';
import { Button, CardDeck, Card } from 'react-bootstrap';
import './style.css'
import rio from './rio.jpg'
import pool from './pool.JPG'
import newz from './newz.jpg'
// const cardStyle = {
//         color: #525252;
//         font-weight: bold
//     }

class FavoritesCard extends React.Component {

  state = {
    value = ""
  }

  render() {
    return (

      <CardDeck>
        <Card className="text-center">
          <Card.Img variant="top" src={rio} />
          <Card.Body>
            <Card.Title>Attraction</Card.Title>
            <Card.Text>
              Rating
                </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" size="small" className="favbutton">Delete Destiantion</Button>
            <small className="text-muted">  Price</small>
          </Card.Footer>
        </Card>
      </CardDeck>




    )
  }
}

export default FavoritesCard;