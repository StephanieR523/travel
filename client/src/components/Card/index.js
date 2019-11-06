import React from 'react';
import { Button, CardDeck, Card } from 'react-bootstrap';
import './style.css'


class HomeCard extends React.Component {

  render(props) {
    return (

     <CardDeck className="wholedeck">

          <Card.Img className="cardImage" variant="top" src={this.props.Image} />

        <Card className="text-center">

          <Card.Body className="cardBody">
            <Card.Title>  {this.props.Name} </Card.Title>
            <Card.Text>
            <p className="ratingwords"> rating: {this.props.Rating} </p>
            </Card.Text>
            <Card.Text>
            <p className="pricewords"> price: {this.props.CurrencyType} {this.props.Price} </p>
            </Card.Text>
          </Card.Body>
          
        </Card>
          <Card.Footer className="cardFooter">
            <Button variant="primary" size="small" className="favbutton"> favorite </Button>
          </Card.Footer>
        {/* <Card className="text-center">
          <Card.Img variant="top" src={pool} />
          <Card.Body>
            <Card.Title>Attraction</Card.Title>
            <Card.Text>
              Rating{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" size="small" className="favbutton">favorite</Button>
            <small className="text-muted">  Price</small>
          </Card.Footer>
        </Card>
        <Card className="text-center">
          <Card.Img variant="top" src={rio} />
          <Card.Body>
            <Card.Title>Attraction</Card.Title>
            <Card.Text>
              Rating
                </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" size="small" className="favbutton">favorite</Button>
            <small className="text-muted">  Price</small>

          </Card.Footer>
        </Card> */}
      </CardDeck>

      // <div class="card" style={cardStyle}>
      //   <img src={this.props.Image} class="card-img-top" alt="Image" style={imageStyle}></img>
      //   <div class="card-header">
      //     <h1> Name : {this.props.Name} </h1>
      //   </div>

      //   <div class="card-body">
      //     <p class="card-title"> Price: {this.props.Price} </p>
      //     <p class="card-text"> Rating: {this.props.Rating} </p>
      //     <a href="#" class="btn btn-primary"> Add To Favorites </a>
      //   </div>

      // </div>




    )
  }
}

export default HomeCard;
