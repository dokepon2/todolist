import React from 'react'

export default class TodoInput extends React.Component{
	constructor(props){
		super(props)

		this.state = {
			error: null
		}
	}

	renderError(){
		if(!this.state.error){
			return null
		}

		return <div style={{ color: 'red'}}>{this.state.error}</div>
	}

	handleCreate(event){
		event.preventDefault();

		const createInput = this.refs.createInput
		const task = createInput.value
		const validateInput = this.validateInput(task)

		if(validateInput){
			this.setState({
				error: validateInput
			})
			return
		}

		this.setState({ error: null})
		this.props.inputTask(this.refs.createInput.value)
		this.refs.createInput.value = ''
	}

	validateInput(task){
		if(!task){
			return 'Please enter a message.'
		} else if(_.find(this.props.todos, todo => todo.task === task)){
			return 'Message already exists.'
		} else {
			return null
		}
	}

	render(){
		return(
			<form onSubmit={this.handleCreate.bind(this)}>
				<input type="text" placeholder="What do i need to do?" ref="createInput" />
				<button>Add Todo</button>
				{this.renderError()}
			</form>
		)
	}
}