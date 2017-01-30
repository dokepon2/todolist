import _ from 'lodash'
import React from 'react'
import TodoListHeader from './list-header'
import TodoListItem from './list-item'

export default class TodoList extends React.Component{
	renderItem(){
		const props = _.omit(this.props, 'todos')

		return _.map(this.props.todos,(todo,i)=>
			<TodoListItem 
				key={i} 
				{...todo}
				{...props}
			/>
		)
	}

	render(){
		return(
			<div>
				<table>
					<TodoListHeader />
					<tbody>
						{this.renderItem()}
					</tbody>
				</table>							
			</div>
		)
	}
}