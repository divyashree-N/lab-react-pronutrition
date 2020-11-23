import React, { Component } from "react";
import "./App.css";
import Foodbox from "./components/Foodbox";
import SearchBar from "./components/SearchBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      food: [
        {
          id: 1,
          name: "pizza",
          calories: `400 cal`,
          imgUrl: `https://i.imgur.com/eTmWoAN.png`,
        },
        {
          id: 2,
          name: "orange",
          calories: `200 cal`,
          imgUrl: `https://images.unsplash.com/photo-1557800636-894a64c1696f`,
        },
        {
          id: 3,
          name: "chocolate",
          calories: `300 cal`,
          imgUrl: `https://images.unsplash.com/photo-1553452118-621e1f860f43`,
        },
        {
          id: 4,
          name: "apple",
          calories: `300 cal`,
          imgUrl: `https://images.unsplash.com/photo-1567306226416-28f0efdc88ce`,
        },
      ],
      searchFeild: "",
    };
  }
  changeHandler = (event) => {
    this.setState({
      searchFeild: event.target.value,
    });
  };
  render() {
    return (
      <div className="App">
        <SearchBar
          onChange={this.changeHandler}
          searchValue={this.state.searchFeild}
        ></SearchBar>
        <Foodbox
          foodArr={this.state.food}
          searchValue={this.state.searchFeild}
        ></Foodbox>
      </div>
    );
  }
}

export default App;