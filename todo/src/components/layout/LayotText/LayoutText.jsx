import React from 'react'
import styles from './LayoutText.module.css'

const LayoutText = props => {
	return <div className={styles.layout}>{props.children}</div>
}

export default LayoutText
