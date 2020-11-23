import React from "react";
import "./SearchBar.css";
function SearchBar(props) {
    return (
        <div className="Searchbar">
            <div>
                <label>Search</label>
                <input
                    type="text"
                    value={props.searchValue}
                    onChange={props.onChange}
                ></input>
            </div>
        </div>
    );
}

export default SearchBar;