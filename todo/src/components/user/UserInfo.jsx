import React from 'react'
import UserContext from '../../context/UserContext'

export default function UserInfo() {
	return (
		<UserContext.Consumer>
			<div>{value => <h1>{value}</h1>}</div>
		</UserContext.Consumer>
	)
}
