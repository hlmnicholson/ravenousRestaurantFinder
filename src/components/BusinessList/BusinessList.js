import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BusinessList.css';
import Business from '../Business/Business.js';

class BusinessList extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div className="BusinessList">
        {
          this.props.businesses.map(business => {
            return <Business business={business} />
          })
        }
      </div>
    )
  }
}

export default BusinessList;
