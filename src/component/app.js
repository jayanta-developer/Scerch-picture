import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./searchBar";
import ImageContainer from "./imageContainer";

class App extends React.Component {
  state = { image: [] };
  onSeatchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    this.setState({ image: response.data.results });
  };

  render() {
    return (
      <div className="app-container">
        <SearchBar onSubmit={this.onSeatchSubmit} />
        Found: {this.state.image.length} images
      </div>
    );
  }
}

export default App;
