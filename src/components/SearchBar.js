import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };
  }
  render() {
    return <h1>SearchBar</h1>;
  }
}
export default SearchBar;
