import React from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button, } from 'react-bootstrap';
import MyCard from "../Card/index";
import logo from '../../logo1.png';
import './style.css'

class MyNavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      dataArray: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.get(`https://www.triposo.com/api/20190906/tour.json?location_ids=${this.state.value}&count=10&account=HB3JSQGZ&token=6luhn0k0fhlou5m4h52poe8c0fjpejzw`)
      .then(res => {

        var dataAPI = res.data
        console.log(dataAPI)

        for (var i = 0; i < 5; i++) {
          var image = dataAPI.results[i].images[0].sizes.original.url;

          var name = dataAPI.results[i].name;
          var price = dataAPI.results[i].price.amount;
          var rating = dataAPI.results[i].score;
          var specificRating = rating.toPrecision(3);
          var currency = dataAPI.results[i].price.currency;
          console.log("Name: " + name);
          console.log("Price: " + price);
          console.log("Rating: " + specificRating);
          console.log("Image: " + image);
          console.log("Currency " + currency)

          var dataObject = {
            Name: name,
            CurrencyType: currency,
            Price: parseFloat(price),
            Rating: parseFloat(specificRating),
            Image: image
          }
          this.state.dataArray.push(dataObject);
          console.log(this.state.dataArray);
          console.log(dataObject)
        }
        this.forceUpdate()
      })
  }


  render() {

    return (
      <div>

        <div>
          <Navbar bg="#ffffff">

            <Navbar.Brand
              href="/">
              <img
                src={logo}
                width="330"
                height="175"
                className="d-inline-block align-top"
                alt="logo"
              />
            </Navbar.Brand>

            <Navbar.Toggle />

            <Navbar.Collapse className="justify-content-end">
              <Form
                inline
                onSubmit={this.handleSubmit}
              >
                <FormControl
                  type="text"
                  placeholder="where to?"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
                <Button
                  type="submit"
                  value="submit"
                  variant="outline-info">
                  search
                </Button>
              </Form>

              <Nav.Item className="justify-content-end">
                <Nav.Link href="/favorites" className="favoritesLink">favorites</Nav.Link>
              </Nav.Item>
              <Nav.Item className="justify-content-end">
                <Nav.Link href="/signin" className="signinLink">sign in </Nav.Link>
              </Nav.Item>

            </Navbar.Collapse>

          </Navbar>
        </div>

        <div>
          {
            this.state.dataArray.map((data) => {
              console.log(data)
              return (
                <div>
                  <MyCard 
                    Image={data.Image}
                    Name={(data.Name)}
                    Price={(data.Price)}
                    Rating={(data.Rating)}
                    CurrencyType={(data.CurrencyType)}
                  />
                </div>
              )
            })
          }
        </div>

      </div>
    )
  }
}

export default MyNavBar
