import React from 'react'
import { useParams } from 'react-router-dom'

import { courses } from '../../data'

import styles from './Course.module.css'
import NotFound from './NotFound'

// Компонент Course
const Course = () => {
	const params = useParams()

	const course = courses.find(course => course.slug === params.slug)
	if (!course) {
		return <NotFound />
	}
	return (
		<div className={styles.wrapper}>
			<h2>{course.title}</h2>
			<p>{course.description}</p>
			<p>
				<strong>Уровень:</strong> {course.level}
			</p>
			<p>
				<strong>Продолжительность:</strong> {course.duration}
			</p>
			<p>
				<strong>Цена:</strong> ${course.price}
			</p>
			<p>
				<strong>Язык:</strong> {course.language}
			</p>
		</div>
	)
}

export default Course
