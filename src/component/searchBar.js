import React from "react";
import style from "../style/style.css";
import ImageContainer from "./imageContainer";

class SearchBar extends React.Component {
  state = { term: "" };

  onFromSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="searchBar-container">
        <form
          onSubmit={this.onFromSubmit}
          className="ui form"
        >
          <div className="ui action search-input">
            <input
              type="text"
              placeholder="Search images..."
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
