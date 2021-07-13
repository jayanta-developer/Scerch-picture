import React from "react";
import style from "../style/style.css";
import ImageContainer from "./imageContainer";

class SearchBar extends React.Component {
  state = { term: "" };

  render() {   
    return (
          <div className="searchBar-container">
        <from className="ui form">
            <p>{this.state.term.length < 4 ? 'Password must be in 4 characters' : ''}</p>
          <div className="ui action input">
            <input
              type="text"
              placeholder="Search images..."
              onChange={e=> this.setState({ term: e.target.value }) }/>
            <button className="ui icon button">
              <i className="search icon"></i>
            </button>           
          </div>
        </from>
      </div>


    );
  }
}

export default SearchBar;
