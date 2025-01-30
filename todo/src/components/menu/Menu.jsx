import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Menu.module.css'

const Menu = () => {
	return (
		<nav>
			<ul className={styles.menu}>
				<li>
					<Link to='/'>
						<h3>Home</h3>
					</Link>
				</li>

				<li>
					<Link to='/courses'>
						<h3>Courses</h3>
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Menu
