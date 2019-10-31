import React from 'react';
import {Carousel, Button} from 'react-bootstrap';
import beach from './beach.JPEG'
import './style.css'
import mount from './mounts.jpg'
import greece from './greece.jpg'

// import logo from 'park.jpg'
 
// const MyCarousel = () => {

class MyCarousel extends React.Component {

render () {  
return (
    <Carousel>
  <Carousel.Item>
    <img
      className="pic d-block"
      src= {greece}
      alt="First slide"
    />
    
    <Carousel.Caption>
      <h3 className="title">Tour Greece</h3>
      <p className="description">8.6 rating   $100/ person</p>
      <Button variant="primary" size="small" className="favbuttonc">favorite</Button>
    </Carousel.Caption>
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="pic d-block"
      src= {mount}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3 className="title">The Great Wall</h3>
      <p className="description">7.5 rating   $30/ person</p>
      <Button variant="primary" size="small" className="favbuttonc">favorite</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="pic d-block"
      src= {beach}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3 className="title">Beach Getaways</h3>
    <p className="description">9.6 rating   $10/ person</p>
    <Button variant="primary" size="small" className="favbuttonc">favorite</Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
)
}
}

export default MyCarousel;
