import React from "react";

import "./TodaysFood.css";

export default function TodaysFood(props) {
    let { arr } = { ...props };
    console.log(arr);
    let HTML =
        arr.length > 1 ? (
            <div>
                <div>{arr[0]}</div>
                <div>{arr[1]}</div>
                <div>{arr[2]}</div>
            </div>
        ) : null;

    return (
        <div>
            Todays Food
            {HTML}
        </div>
    );
}