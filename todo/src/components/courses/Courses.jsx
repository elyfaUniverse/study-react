import React from 'react'
import { Link } from 'react-router-dom'
import { courses } from '../../data'
import styles from './Courses.module.css'

const Courses = () => {
	return (
		<div className={styles.wrapper}>
			<h1>Courses</h1>
			{courses.map(course => (
				<div key={course.id}>
					<Link to={course.slug}>
						<h2> {course.title}</h2>
					</Link>
				</div>
			))}
		</div>
	)
}

export default Courses
