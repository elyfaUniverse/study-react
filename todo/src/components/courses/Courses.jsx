import queryString from 'query-string'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { courses } from '../../data'
import styles from './Courses.module.css'

const SORT_KEYS = ['title', 'slug', 'id']
function sortCourses(courses, key) {
	const sortedCourses = [...courses]
	if (!key || !SORT_KEYS.includes(key)) {
		return sortedCourses
	}

	sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1))
	return sortedCourses
}

const Courses = () => {
	const location = useLocation()
	const query = queryString.parse(location.search)
	const navigate = useNavigate()
	const [sortKey, setSortKey] = useState(query.sort)

	const [sortedCourses, setSortedCourses] = useState(
		sortCourses(courses, sortKey)
	)
	useEffect(() => {
		if (!SORT_KEYS.includes(sortKey)) {
			navigate('.')
			setSortKey()
			setSortedCourses([...courses])
		}
	}, [sortKey, navigate])
	return (
		<div className={styles.wrapper}>
			<h1>{sortKey ? `Courses sorted by ${sortKey}` : 'Courses'}</h1>
			{sortedCourses.map(course => (
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
