import React from 'react'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import { PencilSquare } from 'react-bootstrap-icons'
class Update extends React.Component {
	constructor(props) {
		super(props)
		this.state = { disabled: false, message: '' }
	}

	handleClick = () => {
		this.setState({ disabled: true })
		
	}

	render() {
		return (
			<>
				<Button variant='primary' type='submit'  disabled={this.state.disabled}>
					<PencilSquare />
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

export default Update;