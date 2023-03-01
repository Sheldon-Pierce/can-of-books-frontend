import React from 'react'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

export default class BookFormModal extends React.Component {
	constructor(props) {
		super(props)
		console.log()
	}

	handleSubmit = e => {
		e.preventDefault();
		const enteredData = {
			title: e.target.formBasicTitle.value,
			author: e.target.formBasicAuthor.value,
			description: e.target.formBasicDes.value,
			status: e.target.formBasicRead.value
		}
		this.props.createBook(enteredData);
	}

	render() {
		return (
			<Modal
				show={this.props.show}
				onHide={this.props.toggleAddBook}
				size='lg'
				aria-labelledby='contained-modal-title-vcenter'
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title id='contained-modal-title-vcenter'>
						Add a book!
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={this.handleSubmit}>
						<Form.Group className='mb-3' controlId='formBasicTitle'>
							<Form.Label>Title</Form.Label>
							<Form.Control type='text' placeholder='Title' />
						</Form.Group>
						<Form.Group className='mb-3' controlId='formBasicAuthor'>
							<Form.Label>Author</Form.Label>
							<Form.Control type='text' placeholder='Author' />
						</Form.Group>
						<Form.Group className='mb-3' controlId='formBasicDes'>
							<Form.Label>Description</Form.Label>
							<Form.Control type='text' placeholder='Description' />
						</Form.Group>
						<Form.Group className='mb-3' controlId='formBasicRead'>
							<Form.Label>Have Ya Read It?</Form.Label>
							<Form.Control type='text' placeholder='Read, Currently Reading, or Not Read'/>
						</Form.Group>
						<Button variant='primary' type='submit' onClick={this.props.toggleAddBook}>
							Submit
						</Button>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.props.onHide}>Close</Button>
				</Modal.Footer>
			</Modal>
		)
	}
}
