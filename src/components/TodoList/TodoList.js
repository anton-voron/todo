import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem.js';
import './TodoList.css';

const TodoList = ({ todos }) => {
	
	const elements = todos.map((item) => {

		const {id, ...rest} = item;
		return (
			<li key={id} className="list-group-item"> 
				<TodoListItem {...rest} //Используем spread оператор, label: label, important: important
					/*label = {item.label}
					important = {item.important}*/ />
			</li>);
	});

	/*const elements = todos.map(function (item, index, arr) {
		return (
			<li>
				<TodoListItem
					label = {item.label}
					important = {item.important} />
			</li>
			)
	});*/
	return(
		<ul className ="list-group todo-list">
			{elements}
		</ul>
	);
};

export default TodoList;