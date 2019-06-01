import React from 'react';
import './SearchPanel.css';

const SearchPanel = () => {
	const searchText = 'Type here to search';
	
	return <input 
	className = "form-control search-input"
	placeholder = {searchText} />;
};

export default SearchPanel;