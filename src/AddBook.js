import React from 'react'
import { Container } from 'react-bootstrap'

import Button from 'react-bootstrap/Button'

export default class AddBook extends React.Component {
	constructor(props) {
		super(props)
		console.log()
	}

	render() {
		return (
			<Container className='text-center'>
				<Button onClick={this.props.onClick}>Add Book</Button>
			</Container>
		)
	}
}
