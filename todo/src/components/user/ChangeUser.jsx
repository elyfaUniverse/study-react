import React, { useContext } from 'react'
import UserContext from '../../context/UserContext'

function ChangeUser() {
	const { user, setUser } = useContext(UserContext)
	return (
		<button onClick={() => setUser(user === 'Elvira' ? 'Alice' : 'Elvira')}>
			PUSH HERE
		</button>
	)
}

export default ChangeUser
