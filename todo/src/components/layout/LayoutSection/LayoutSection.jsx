import React from 'react'
import styles from './LayoutSection.module.css'

const Layout = props => {
	return <div className={styles.layout}>{props.children}</div>
}

export default Layout
