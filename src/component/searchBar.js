import React from "react";
// import style from "../style/style.css";
// import ImageContainer from "./imageContainer";

class SearchBar extends React.Component {
  searceDelay = () => {
    setTimeout(() => {
      this.onFromSubmit();
    }, 1000);
  };
  state = { term: "" };
  onFromSubmit = (event) => {
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="searchBar-container">
        <div className="ui action search-input">
          <input
            type="text"
            placeholder="Search images..."
            value={this.state.term}
            onChange={(e) => {
              this.setState({ term: e.target.value });
              this.searceDelay();
            }}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
