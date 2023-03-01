import React from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import { TrashFill } from 'react-bootstrap-icons'
class Delete extends React.Component {
	constructor(props) {
		super(props)
		this.state = { disabled: false, message: '' }
	}

	handleClick = () => {
		this.setState({ disabled: true })
		axios
			.delete(`${process.env.REACT_APP_SERVER}/books/delete/${this.props.book}`)
			.then(response => {
				this.setState({
					disabled: false,
					message: response.status === 202 ? 'Success' : 'Failed',
				})
				this.props.fetchBooks()
			})
	}

	render() {
		return (
			<>
				<Button onClick={this.handleClick} disabled={this.state.disabled}>
					<TrashFill />
				</Button>
				{this.state.disabled ? (
					<Spinner animation='border' role='status'>
						<span className='visually-hidden'>Loading...</span>
					</Spinner>
				) : (
					''
				)}
				<p
					className={
						this.state.message === 'Success' ? 'text-primary' : 'text-danger'
					}
				>
					{this.state.message}
				</p>
			</>
		)
	}
}

export default Delete
