import React, { useContext } from 'react'
import UserContext from '../../context/UserContext'

export default function UserInfo() {
	const { user } = useContext(UserContext)
	return (
		<div>
			<h1>{user}</h1>
		</div>
	)
}
