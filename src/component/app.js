import React from "react";
import Axios from "axios";
import SearchBar from "./searchBar";
import ImageContainer from "./imageContainer";

class App extends React.Component {
  onSeatchSubmit(term) {
    console.log(term);
  }

  render() {
    return (
      <div className="app-container">
        <SearchBar onSubmit={this.onSeatchSubmit} />
      </div>
    );
  }
}

export default App;
