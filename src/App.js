import React from 'react'
import Header from './Header'
import Footer from './Footer'
import BestBooks from './BestBooks'
import About from './About'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { withAuth0 } from '@auth0/auth0-react'

import Profile from './About'
import Welcome from './Welcome'

class App extends React.Component {
	render() {
		return (
			<>
				<Router>
					<Routes>
						<Route exact path='/' element={<Welcome />}></Route>
						<Route exact path='/home' element={<BestBooks />}></Route>
						<Route exact path='/about' element={<About />}></Route>
					</Routes>
				</Router>
			</>
		)
	}
}

export default withAuth0(App)
