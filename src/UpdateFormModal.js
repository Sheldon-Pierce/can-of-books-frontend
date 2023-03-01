import React from 'react'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import Update from './Update'

export default class UpdateFormModal extends React.Component {
	constructor(props) {
		super(props)
		console.log()
        this.state={
            bookData: this.props.bookData
        }
	}

	handleSubmit = e => {
		e.preventDefault();

		const enteredData = {
			title: e.target.formBasicTitle.value,
			author: e.target.formBasicAuthor.value,
			description: e.target.formBasicDes.value,
			status: e.target.formBasicRead.value
		}
		this.setState({bookData: enteredData});
        axios
			.put(`${process.env.REACT_APP_SERVER}/books/update/${this.props.book}`, enteredData)
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
			<Modal
				show={this.props.show}
				onHide={this.props.toggleAddBook}
				size='lg'
				aria-labelledby='contained-modal-title-vcenter'
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title id='contained-modal-title-vcenter'>
						Edit a Book!
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={this.handleSubmit}>
						<Form.Group className='mb-3' controlId='formBasicTitle'>
							<Form.Label>Title</Form.Label>
							<Form.Control value={this.props.bookData.title} type='text' placeholder='Title' />
						</Form.Group>
						<Form.Group className='mb-3' controlId='formBasicAuthor'>
							<Form.Label>Author</Form.Label>
							<Form.Control value={this.props.bookData.author} type='text' placeholder='Author' />
						</Form.Group>
						<Form.Group className='mb-3' controlId='formBasicDes'>
							<Form.Label>Description</Form.Label>
							<Form.Control value={this.props.bookData.description} type='text' placeholder='Description' />
						</Form.Group>
						<Form.Group className='mb-3' controlId='formBasicRead'>
							<Form.Label>Have Ya Read It?</Form.Label>
							<Form.Control value={this.props.bookData.status} type='text' placeholder='Read, Currently Reading, or Not Read'/>
						</Form.Group>
						<Update  onClick={this.handleSubmit}>
							Submit
						</Update>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.props.onHide}>Close</Button>
				</Modal.Footer>
			</Modal>
		)
	}
}

