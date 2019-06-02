import React, {Component} from 'react';
import './TodoListItem.css';


class TodoListItem extends Component {
	/*constructor() {
		super()
		this.state={
			done: false,
			important: false
		}
	}*/
	
	/*onLabelClick = () => {
		this.setState(({done}) => {
			return {
				done: !done
			};
		})
	};
	onMarkImportant = () => {
		//Иногда функция state может работаь ассинхронно, 
		//состояние может быть установленно позже, поэтому делаем дополнительную функцию (({important}) => {})
		this.setState(({important}) => { //Деструктурируем important из объекта
			return {
				important: !important
			};
		}); 
	};*/
	render () {
		const { label, onDeleted, 
				onToggleImportant, onToggleDone,
				important, done
			   } = this.props; // принимаем в пропс функцию которую передали из App в TodoList
		/*const {done, important} = this.state;*/

		let classNames = "todo-list-item";
		if(done) {
			classNames += " done"
		}

		if(important) {
			classNames += " important"
		}
			
	return (
		<section className = {classNames} >
			<span 
				className = "todo-list-item-label"
				onClick = {onToggleDone}> 
				{label}
			</span>

			<button type="button"
				className="btn btn-outline-success btn-sm float-right"
				onClick = {onToggleImportant}>
				<i className="fa fa-exclamation"/>
			</button>
			<button type="button"
				className="btn btn-outline-danger btn-sm float-right"
				// при клике вызываем функцию которую передали  App ->TodoList -> TodolistItem props
				onClick= {onDeleted} > 
				<i className="fa fa-trash-o" />
			</button>
		</section>
	);
	}
}

export default TodoListItem;