import React from "react";
import axios from "axios";
import { Link, Router } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button, } from 'react-bootstrap';
import ls from "local-storage";
import MyCard from "../Card/index";
import logo from '../../logo1.png';
import './style.css'

class MyNavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      dataArray: [],
      favorites: []
    };

    // this.context.Router.push({
    //   pathname: '/favorites',
    //   state: { favorites: this.state.favorites }
    // })

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
              href="#home">
              <img
                src={logo}
                width="125"
                height="80"
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
                  placeholder="Search"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
                <Button
                  type="submit"
                  value="submit"
                  variant="outline-info">
                  Search
                </Button>
              </Form>

              <Nav.Item className="justify-content-end">
                <Nav.Link href="/favorites" onCLick={() => { console.log("hello") }}>favorites</Nav.Link>
              </Nav.Item>
              <Nav.Item className="justify-content-end">
                <Nav.Link href="/signin">sign in </Nav.Link>
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
                  >
                  </MyCard>


                  <Button variant="primary" size="small" onClick={(event) => {
                    // ls.set(data)
                    // console.log(this.state.favorites)
                    this.state.favorites.push(data)
                    ls.set("data", this.state.favorites)
                    // console.log(this.state.favorites)
                    // console.log(data)
                  }} className="favbutton"> Add To Favorites </Button>

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