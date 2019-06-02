import React, { Component} from 'react';
import TodoList from '../TodoList/TodoList.js';
import AppHeader from '../AppHeader/AppHeader.js';
import Searchpanel from '../SearchPanel/SearchPanel.js';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter.js';
import ItemAddForm from '../ItemAddForm/ItemAddForm.js'
import './App.css';


class App extends Component {
	maxId = 1;
	constructor () {
		super()
		this.state = {
			todoData: [
			this.createTodoItem('Drink Coffee'),
			this.createTodoItem('Make Awesome App'),
			this.createTodoItem('Have a lunch'),
			  /*{label: 'Drink Coffee', important: false, id: 1},
				{label: 'Make Awesome App', important: true, id: 2},
				{label: 'Have a lunch', important: false, id: 3},*/
			],
			term: '',
			filter: 'all' // active , all , done
		}
	}

	createTodoItem = (label) => {  //Создаём функцию, которая будет добавл новый компонент в наш
		//todoDate, чтобы код не повторялся
		return {
			label: label,
			important: false,
			done: false,
			id: this.maxId++
		}
	}

	deleteItem = (id) => {

		this.setState(({ todoData }) => { //Передаём функию, потому что нам нужно передать новый стейт (это старый масив без 1 элемента), 
			//для этого нам нужно точно знать, какой именно был старый массив, поэтому новый сейт зависит от старого стейта ( не можем взять и передать объект)
			const idx = todoData.findIndex((el) => el.id === id); // получаем индекс элемента, который собираемся удалять

			const before = todoData.slice(0, idx); //Чтобы не изменять существующий массив в сйте мы копируем его до элемента, ктр собираемся удалить
			// а так же копируем после и создаём новый массив newArray
			const after = todoData.slice(idx + 1);

			const newArray = [...before, ...after];
			
			return {
				todoData: newArray //!!НУЖНО передать новый массив, нельзя изменять стейт напрямую!!!! Ни в коем случае нельзя изменять структуру данных, которую мы получаем внутрь setState
			};
		});
	};

	addItem = (text) => {
		//Нужно сгенерировать id
		/*const newItem = {
			label: text,
			important: false,
			id: this.maxId++
		}*/
		const newItem = this.createTodoItem(text)

		// Добавить элемент в массив
		this.setState (({todoData}) => {
			const before = todoData.slice();
			const newArray = [...before, newItem];

			return {
				todoData: newArray
			};
		})
		console.log('done' , text);
	};

	togleProperty = (arr, id, propName) => {
		const idx = arr.findIndex ((el) => el.id === id);
			// 1. Нужно обновить объектк, котоырй содержится в массиве
		const oldItem = arr[idx];
		const newItem = {...oldItem, // создали объект, у которого все теже свой ства и все теже значения, что и у oldItem
			[propName]: !oldItem[propName]}; // меняем значение done
		// 2. Нужно сконструировать новый массив
		const before = arr.slice(0, idx); //Чтобы не изменять существующий массив в сйте мы копируем его до элемента, ктр собираемся удалить
		// а так же копируем после и создаём новый массив newArray
		const after = arr.slice(idx + 1);

		const newArray = [...before, 
						  newItem, 
						  ...after
						  ];
		return newArray;
	};

	onToggleDone = (id) => {
		this.setState(({todoData}) => {
			return {
				todoData: this.togleProperty(todoData, id, 'done') // Вызываем функцию togleProperty, которая возвращает новый массив и мы заменяет его в setState
			}	
		});
	};

	onToggleImportant = (id) => {
		this.setState(({todoData}) => {
			return {
				todoData: this.togleProperty(todoData, id, 'important')
			}
		});
	};

	search (arr, term) {
		if(term.length === 0) {
			return arr
		} else {
			 return arr.filter((el) => {
				return el.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
			});
		}
	}
	onSearchChange = (term) => {
		this.setState({ term });
	};

	filter (arr, filter) { 
		switch (filter) {
			case 'all': return arr;
			case 'active': return arr.filter((el, index, arr) => {
				return el.done === false;
			});
			case 'done': return arr.filter((el, index, arr) => {
				return el.done;
			});		}
	}
	onFilterChange = (filter) => {
		this.setState({filter});
	}

	
	render () {
		const {todoData, term, filter} = this.state;
		const visibleItem = this.filter(this.search(todoData, term), filter);
		const doneCount = todoData.filter((el)=> el.done).length; //создаёт новый массив, 
		//в который войдут только те элементы el массива  todoData, для которых вызов callback(el, i, arr) возвратит true.
		//и получаем длину этого массива 
		const todoCount = todoData.length - doneCount;
		return (
			<div className="todo-app"> 
				<AppHeader toDo={todoCount} done={doneCount} />

				<div className="top-panel d-flex">
					
					<Searchpanel onSearchChange = {this.onSearchChange} />


					<ItemStatusFilter 
						filter = {filter} 
						onFilterChange={this.onFilterChange}/>
				
				</div>

				<TodoList todos = {visibleItem}
				/*Регистрируем новый EventListener onDeleted, который получает id элемента, 
				который мы удаляем , эту функцию передаём в props TodoList, вызываем её при нажатии onClick в файле
				TodolistItem , который передаёт ёё из props в TodoList*/

				onDeleted = { this.deleteItem }
				onToggleImportant= {this.onToggleImportant}
				onToggleDone = {this.onToggleDone}/> 


				<ItemAddForm addItem = {this.addItem}/>
			</div>
		);
	}
}


export default App;