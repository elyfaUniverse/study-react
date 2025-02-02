import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'

import { courses } from '../../data'

import styles from './Course.module.css'

// Компонент Course
const Course = () => {
	const params = useParams()
	const navigate = useNavigate()
	const location = useLocation()
	console.log(location)
	const course = courses.find(course => course.slug === params.slug)
	useEffect(() => {
		if (!course) {
			navigate('..', { relative: 'path' })
		}
	}, [course, navigate])
	//Simple show not found component
	/*if (!course) {
		return <NotFound />
	}*/
	return (
		<div className={styles.wrapper}>
			<h2>{course?.title}</h2>
			<p>{course?.description}</p>
			<p>
				<strong>Уровень:</strong> {course?.level}
			</p>
			<p>
				<strong>Продолжительность:</strong> {course?.duration}
			</p>
			<p>
				<strong>Цена:</strong> ${course?.price}
			</p>
			<p>
				<strong>Язык:</strong> {course?.language}
			</p>
			<Link to='..' relative='path'>
				<h2>All courses </h2>
			</Link>
		</div>
	)
}

export default Course
