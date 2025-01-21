const express = require('express')
const { Pool } = require('pg')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const port = 5000

app.use(cors())
app.use(bodyParser.json())

/*NODE_ENV=development;
DATABASE_URL=postgresql://postgres:Mamba123@localhost:5432/postgres?shema=public */

const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'todos',
	password: 'Mamba123',
	port: 5432,
})
app.get('/todo', async (req, res) => {
	try {
		const result = await pool.query('SELECT * FROM todo')
		res.status(200).json(result.rows)
	} catch (err) {
		console.error(err)
		res.status(500).send('Server error')
	}
})

// Добавление задачи
app.post('/todo', async (req, res) => {
	const { text } = req.body
	if (!text) {
		return res.status(400).json({ error: 'text is required' })
	}
	try {
		const result = await pool.query(
			'INSERT INTO todo (text, isCompleted) VALUES ($1, $2) RETURNING *',
			[text, false]
		)
		res.status(201).json(result.rows[0]) // Возвращаем добавленную задачу
	} catch (err) {
		console.error(err)
		res.status(500).send('Server error')
	}
})
// Удаление задачи
app.delete('/todo/:id', async (req, res) => {
	const { id } = req.params
	try {
		const result = await pool.query('DELETE FROM todo WHERE id = $1', [id])

		// Проверяем, была ли запись удалена
		if (result.rowCount === 0) {
			return res.status(404).json({ error: 'Todo not found' })
		}

		res.status(204).send() // Успешное удаление, без тела ответа
	} catch (err) {
		console.error(err)
		res.status(500).json({ error: 'Server error' })
	}
})

// Обновление задачи
app.put('/todo/:id', async (req, res) => {
	const { id } = req.params
	const { text, isCompleted } = req.body
	try {
		const result = await pool.query(
			'UPDATE todo SET text = $1, isCompleted = $2 WHERE id = $3 RETURNING *',
			[text, isCompleted, id]
		)
		res.status(200).json(result.rows[0])
	} catch (err) {
		console.error(err)
		res.status(500).send('Server error')
	}
})

// Запуск сервера
app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`)
})
