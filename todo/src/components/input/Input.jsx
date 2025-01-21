import React, { useState } from 'react'
import Button from '../button/Button'
import styles from './input.module.css'

const Input = ({ addTodo }) => {
	const [task, setText] = useState('')
	const onSubmitHandler = e => {
		e.preventDefault()
		addTodo(task)
		setText('')
	}
	return (
		<div className={styles.wrapper}>
			<form onSubmit={onSubmitHandler}>
				<input
					maxLength='60'
					placeholder='Input you todo...'
					onChange={e => setText(e.target.value)}
					value={task}
					type='text'
				></input>
				<Button type='submit' title='Submit'>
					Submit
				</Button>
			</form>
		</div>
	)
}

export default Input
