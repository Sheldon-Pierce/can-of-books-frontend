import React from 'react'
import { Container } from 'react-bootstrap'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import { useAuth0 } from '@auth0/auth0-react'

export default function Welcome() {
	const { user, isAuthenticated, isLoading } = useAuth0()
	return (
		<Container>
			{isAuthenticated ? <LogoutButton /> : <LoginButton />}
		</Container>
	)
}
