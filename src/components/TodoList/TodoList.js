import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem.js';
import './TodoList.css';

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
	
	const elements = todos.map((item, index, arr) => {

		const {id, ...rest} = item;
		return (
			<li key={id} className="list-group-item"> 
				<TodoListItem {...rest} //Используем spread оператор, label: label, important: important
					/*label = {item.label}
					important = {item.important}*/ 

/*Снизу слева пропс из TodoListitem*/   /*Снизу справа функция из App*/		
			onDeleted = {() => onDeleted(id)} 
			// Принимаем onDeleted из родительского файла App 
			// и передаём функцию в качестве props при нажатии на копку (создаём первую TodoList -> TodoListItem)
			onToggleImportant = {() => onToggleImportant (id)}
			onToggleDone = {() => onToggleDone(id)}
			/>
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