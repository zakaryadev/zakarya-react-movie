import React from "react";
export default class Search extends React.Component {
  state = {
    search: "Avengers",
    type: "all",
    checked: false,
  };
  handleKey = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovie(this.state.search);
    }
  };

  handleCheck = (e) => {
    this.setState({ checked: e.target.checked });
  };

  handleFilter = (e) => {
    this.setState(
      () => ({ type: e.target.dataset.type }),
      () => {
        this.props.searchMovie(this.state.search, this.state.type);
      }
    );
  };

  render() {
    return (
      <div className="row" style={{ marginTop: "40px" }}>
        <div className="input-group">
          <input
            placeholder="Search"
            type="search"
            value={this.state.search}
            onChange={(event) => this.setState({ search: event.target.value })}
            onKeyDown={this.handleKey}
          />

          <button
            className="search-btn"
            onClick={() =>
              this.props.searchMovie(this.state.search, this.state.type)
            }
          >
            <i className="fas fa-search blue-text text-darken-1"></i>
          </button>
        </div>
        <div>
          <p className="p1">
            <label>
              <input
                className="with-gap"
                name="group3"
                type="radio"
                onChange={this.handleFilter}
                data-type="all"
                checked={this.state.type === "all"}
              />
              <span>All</span>
            </label>

            <label>
              <input
                className="with-gap"
                name="group3"
                onChange={this.handleFilter}
                type="radio"
                data-type="movie"
                checked={this.state.type === "movie"}
              />
              <span>Movies</span>
            </label>

            <label>
              <input
                className="with-gap"
                name="group3"
                onChange={this.handleFilter}
                type="radio"
                data-type="series"
                checked={this.state.type === "series"}
              />
              <span>Series only</span>
            </label>
          </p>
        </div>
      </div>
    );
  }
}
