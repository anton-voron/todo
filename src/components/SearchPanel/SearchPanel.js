import React, { Component } from 'react';
import './SearchPanel.css';

class SearchPanel extends Component {
	constructor () {
    	super()
    	this.state = {
    		term: "",
    	}
  	}
  	onSearchChange = (e) => {
  		this.setState ({
  			term: e.target.value
  		});
  		this.props.onSearchChange(this.state.term);
  	}

	render () {
		const searchText = 'Type here to search';
		return (
				<input 
					className = "form-control search-input"
					placeholder = {searchText}
					onChange = {this.onSearchChange}
					value = {this.state.term}
				/>
		);
	}
}  
	

export default SearchPanel;