import React, { Component } from 'react';
import Routes from './Routes';
import Navbar from './Navbar'
import Whisky from './images/whiskey.jpg';
import Hazel from './images/hazel.jpg';
import Tubby from './images/tubby.jpg';
import './App.css';

class App extends Component {
  static defaultProps = {
    dogs : [
      {
        name  : "Whisky",
        age   : 5,
        src   : Whisky,
        facts : [
          "Whisky loves eating popcorn",
          "Whisky is a terrible guard dog",
          "Whisky wants to cuddle with you!"
        ]
      },
      {
        name  : "Hazel",
        age   : 5,
        src   : Hazel,
        facts : [
          "Hazel loves eating popcorn",
          "Hazel is a terrible guard dog",
          "Hazel wants to cuddle with you!"
        ]
      },
      {
        name  : "Tubby",
        age   : 5,
        src   : Tubby,
        facts : [
          "Tubby loves eating popcorn",
          "Tubby is a terrible guard dog",
          "Tubby wants to cuddle with you!"
        ]
      }
    ]
  }

  render(){
    return (
      <div>
        <Navbar dogs={this.props.dogs} />
        <div className="container">
          <Routes dogs={this.props.dogs} />
        </div>
      </div>
    );
  }
}
export default App;
