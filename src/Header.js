import React from 'react'
import { Navbar, NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Header extends React.Component {
	render() {
		return (
			<Navbar
				collapseOnSelect
				expand='lg'
				bg='dark'
				variant='dark'
				className='px-5 gap-4'
			>
				<Navbar.Brand>My Favorite Books</Navbar.Brand>
				<NavItem>
					<Link to='/' className='nav-link text-light'>
						Home
					</Link>
				</NavItem>
				<NavItem></NavItem>
				<NavItem>
					<Link to='/about' className='nav-link text-light'>
						About
					</Link>
				</NavItem>
				{/* PLACEHOLDER: render a navigation link to the about page */}
			</Navbar>
		)
	}
}

export default Header
