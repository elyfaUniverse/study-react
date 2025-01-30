import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Course from './components/courses/Course'
import Courses from './components/courses/Courses'
import Menu from './components/menu/Menu'
import Home from './Home'

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Menu />

				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/courses' element={<Courses />} />
					<Route path='/courses/:slug' element={<Course />} />
					<Route path='*' element={<h1>Note Found</h1>} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
