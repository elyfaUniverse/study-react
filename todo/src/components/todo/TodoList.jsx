import React from 'react'
import Todo from './Todo'
import styles from './TodoList.module.css'

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
	return (
		<div className={styles.wrapper}>
			{!todos.length && <h2> TODO list is empty</h2>}
			<ol>
				{todos.map(todo => (
					<li key={todo.id}>
						<Todo
							key={todo.id}
							todo={todo}
							deleteTodo={deleteTodo}
							toggleTodo={toggleTodo}
						/>
					</li>
				))}
			</ol>
		</div>
	)
}

export default TodoList
