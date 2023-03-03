import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Auth0Provider } from '@auth0/auth0-react'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Auth0Provider
		domain='dev-iaagx3vzh22w84ou.us.auth0.com'
		clientId='5CzLcWvqOIB81SJccwDxE2F2duOF72ai'
		authorizationParams={{
			redirect_uri: `${process.env.REACT_APP_AUTH_REDIRECT_URI}/home`,
		}}
	>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Auth0Provider>
)
