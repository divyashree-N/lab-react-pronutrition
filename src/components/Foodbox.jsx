import React, { Component } from "react";

import "./Foodbox.css";
import TodaysFood from "./TodaysFood";

export default class Foodbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            name: "",
            calories: "",
            todaysArr: [],
        };
    }
    clickHandler = (event) => {
        console.log(event.target);

        this.setState(
            () => {
                return {
                    name: event.target.name,
                    calories: event.target.value,
                };
            },
            () => {
                this.setState(() => {
                    return {
                        todaysArr: [this.state.name, this.state.calories, this.state.count],
                    };
                });
            }
        );
    };
    changeHandler = (event) => {
        this.setState({
            count: event.target.value,
        });
    };
    render() {
        let { foodArr, searchValue } = this.props;
        let filteredFoodArr = !searchValue
            ? foodArr
            : foodArr.filter((food) => {
                let str = food.name;
                if (str.startsWith(`${searchValue}`)) {
                    return true;
                }
            });
        let uiRenderList = filteredFoodArr
            ? filteredFoodArr.map((food) => {
                return (
                    <div className="box">
                        <article className="media">
                            <div className="media-left">
                                <img src={`${food.imgUrl}`} />
                            </div>
                            <div className="media-content">
                                <div className="content">
                                    <p>
                                        <strong>{`${food.name}`}</strong> <br />
                                        <small>{`${food.calories}`}</small>
                                    </p>
                                </div>
                            </div>
                            <div className="media-right">
                                <div className="field has-addons">
                                    <div className="control">
                                        <input
                                            className="input"
                                            type="number"
                                            value={this.state.count}
                                            onChange={this.changeHandler}
                                        />
                                    </div>
                                    <div className="control">
                                        <button
                                            className="button is-info"
                                            onClick={this.clickHandler}
                                            name={food.name}
                                            value={food.calories}
                                        >
                                            +
                      </button>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                );
            })
            : null;

        return (
            <div className="FoodBox_container">
                <div>{uiRenderList}</div>
                <TodaysFood arr={this.state.todaysArr}></TodaysFood>
            </div>
        );
    }
}