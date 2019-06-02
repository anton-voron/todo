import React, { Component } from 'react';

import './ItemStatusFilter.css';

class ItemStatusFilter extends Component {
  constructor () {
    super()
    this.state = {

    }
  }
  render () {
    const {onClickAll, onClickActive, onClickDone} = this.props;
    return (
      <div className="btn-group">
        <button type="button"
                className="btn btn-info"
                onClick = {() => onClickAll ()}>
                All
        </button>
        <button type="button"
                className="btn btn-outline-secondary"
                onClick = {() => onClickActive ()}>
                Active
        </button>
        <button type="button"
                className="btn btn-outline-secondary"
                onClick = {() => onClickDone ()}>
                Done
        </button>
      </div>
    );
  }
}


export default ItemStatusFilter;