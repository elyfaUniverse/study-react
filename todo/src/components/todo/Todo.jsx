import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { RiDeleteBin2Line } from 'react-icons/ri'
import styles from './Todo.module.css'

const Todo = ({ todo, deleteTodo, toggleTodo }) => {
	return (
		<div className={styles.wrapper}>
			<div>
				<p> {todo.text}</p>
			</div>
			<div className={styles.iconGroup}>
				<div className={styles.deleteIcon}>
					<RiDeleteBin2Line onClick={() => deleteTodo(todo.id)} />
				</div>
				<div
					className={`${styles.checkIcon} ${
						todo.isCompleted ? styles.completedTodo : ''
					}`}
				>
					<FaCheck onClick={() => toggleTodo(todo.id)} />
				</div>
			</div>
		</div>
	)
}

export default Todo
