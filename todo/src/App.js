import { useEffect, useState } from 'react'
import './App.css'
import Input from './components/input/Input'

import LayoutText from './components/layout/LayotText/LayoutText'
import Layout from './components/layout/Layout/Layout'
import TodoList from './components/todo/TodoList'

function App() {
	const [todos, setTodos] = useState([])

	// Получение todos из базы данных при загрузке приложения
	useEffect(() => {
		const fetchTodos = async () => {
			const response = await fetch('http://localhost:5000/todo')
			const data = await response.json()
			setTodos(data)
		}
		fetchTodos()
	}, [])

	const addTodoHandler = async text => {
		const newTodo = {
			text: text,
			isCompleted: false,
		}

		const response = await fetch('http://localhost:5000/todo', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newTodo),
		})
		if (response.ok) {
			const addedTodo = await response.json()
			setTodos([...todos, addedTodo])
		}
	}

	const deleteTodoHandler = async id => {
		await fetch(`http://localhost:5000/todo/${id}`, {
			method: 'DELETE',
		})
		setTodos(todos.filter(todo => todo.id !== id))
	}

	const toggleTodoHandler = async id => {
		const todoToToggle = todos.find(todo => todo.id === id)

		if (todoToToggle) {
			const updatedTodo = {
				...todoToToggle,
				isCompleted: !todoToToggle.isCompleted,
			}

			await fetch(`http://localhost:5000/todo/${id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(updatedTodo),
			})

			setTodos(todos.map(todo => (todo.id === id ? updatedTodo : todo)))
		}
	}
	const completetTodosCount = todos.filter(todo => todo.isCompleted).length
	const allTodosCount = todos.length

	return (
		<div className='App'>
			<Layout>
				<h1> Your`s todos list</h1>
				<Input addTodo={addTodoHandler} />

				<LayoutText>
					{allTodosCount > 0 && (
						<h3>
							{`TOTAL: ${allTodosCount}
						${allTodosCount > 1 ? 'todos' : 'todo'}`}
						</h3>
					)}

					{completetTodosCount > 0 && (
						<h3>
							{`Completed: ${completetTodosCount}
						${completetTodosCount > 1 ? 'todos' : 'todo'}`}
						</h3>
					)}
				</LayoutText>
				<TodoList
					todos={todos}
					deleteTodo={deleteTodoHandler}
					toggleTodo={toggleTodoHandler}
				/>
			</Layout>
		</div>
	)
}

export default App
