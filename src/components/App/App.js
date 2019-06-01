import React from 'react';
import TodoList from '../TodoList/TodoList.js';
import AppHeader from '../AppHeader/AppHeader.js';
import Searchpanel from '../SearchPanel/SearchPanel.js';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter.js';
import './App.css';


const App = () => {
	const todoData = [
		{label: 'Drink Coffee', important: false, id: 1},
		{label: 'Make Awesome App', important: true, id: 2},
		{label: 'Have a lunch', important: false, id: 3},
	];
	return (
		<div className="todo-app"> 
			<AppHeader toDo={1} done={3} />
			<div className="top-panel d-flex">
				<Searchpanel />
				<ItemStatusFilter/>
			</div>

			<TodoList todos = {todoData}/>
		</div>
	);
}

export default App;