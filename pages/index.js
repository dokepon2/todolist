import React from 'react'
import TodoInput from './input'
import TodoList from './list'

const todos = []

export default class extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			todos
		}
	}

	inputTask(task){
		this.state.todos.push({
			task,
			isCompleted: false
		})
		this.setState({ todos: this.state.todos })
	}

	saveTask(oldTask, newTask){
		const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask)
		foundTodo.task = newTask
		this.setState({todos: this.state.todos})
	}

	deleteTask(taskToDelete){
		_.remove(this.state.todos, todo => todo.task === taskToDelete)
		this.setState({todos: this.state.todos})
	}

	toggleTask(task){
		const foundTodo = _.find(this.state.todos, todo => todo.task === task)
		foundTodo.isCompleted = !foundTodo.isCompleted
		this.setState({todos: this.state.todos})
	}

	render(){
		return(
		<div>
			<h1>Todos</h1>
			<TodoInput 
				inputTask={this.inputTask.bind(this)}
				todos={this.state.todos} 
			/>
			<TodoList 
				todos={this.state.todos}
				toggleTask={this.toggleTask.bind(this)}
				saveTask={this.saveTask.bind(this)}
				deleteTask={this.deleteTask.bind(this)}				
			/>
		</div>)
	}
}