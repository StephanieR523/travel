import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import beach from './beach.JPEG'
import './style.css'
import mount from './mounts.jpg'
import greece from './greece.jpg'

// import logo from 'park.jpg'

// const MyCarousel = () => {

class MyCarousel extends React.Component {

  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="pic d-block"
            src={greece}
            alt="First slide"
          />

          <Carousel.Caption>
            <h3 className="title">Athens Adventures</h3>
            <p className="description">8.6/ 10 stars</p>
            <p className="description2">$50</p>
            <Button variant="primary" size="small" className="favbuttonc">explore</Button>
          </Carousel.Caption>

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="pic d-block"
            src={mount}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="title">Paris Art and Food Tours</h3>
            <p className="description">7.7/ 10 stars</p>
            <p className="description2">starting at $40</p>
            <Button variant="primary" size="small" className="favbuttonc">explore</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="pic d-block"
            src={beach}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="title">Dive into Miami</h3>
            <p className="description">8.9/ 10 stars</p>
            <p className="description2">starting at $15</p>
            <Button variant="primary" size="small" className="favbuttonc">explore</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default MyCarousel;
