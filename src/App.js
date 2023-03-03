import React from 'react'
import Header from './Header'
import Footer from './Footer'
// import BestBooks from './BestBooks'
import About from './About'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Welcome from './Welcome'
import Profile from './Profile'
import { withAuth0 } from '@auth0/auth0-react'


class App extends React.Component {

	render() {
		
		return (
			<>
				<Router>
					<Header />
					<Routes>
						<Route exact path='/' element={<Welcome />}></Route>
						<Route exact path='/home' element={<Profile />}></Route>
						<Route exact path='/about' element={<About />}></Route>

						{/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
					</Routes>
					<Footer />
				</Router>
			</>
		)
	}
}

export default withAuth0(App);
