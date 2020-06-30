import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './SearchBar.css';

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rating": "rating",
  "Most Reviewed": "review_count",

}

class SearchBar extends Component {
  static propTypes = {
    prop: PropTypes
  }

  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      const sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue}>
        { sortByOption }
      </li>
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a>Let's Go</a>
        </div>
      </div>
    )
  }
}

export default SearchBar;

