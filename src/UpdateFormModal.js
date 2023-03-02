import React from 'react'

import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import { Container } from 'react-bootstrap'

export default class UpdateFormModal extends React.Component {
	constructor(props) {
		super(props)
		this.state = { disabled: false }
	}

	handleSubmit = e => {
		e.preventDefault()

		const enteredData = {
			title: e.target.formBasicTitle.value,
			author: e.target.formBasicAuthor.value,
			description: e.target.formBasicDes.value,
			status: e.target.formBasicRead.value,
		}

		this.setState({ disabled: true })

		axios
			.put(
				`${process.env.REACT_APP_SERVER}/books/update/${this.props.bookData.title}`,
				enteredData
			)
			.then(response => {
				this.setState({
					disabled: false,
					message: response.status === 202 ? 'Success' : 'Failed',
				})
				this.props.fetchBooks()
				this.setState({ disabled: false })
				this.props.onHide()
			})
	}

	render() {
		return (
			<Modal
				show={this.props.show}
				onHide={this.props.onHide}
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
							<Form.Control
								defaultValue={this.props.bookData.title}
								type='text'
								placeholder='Title'
							/>
						</Form.Group>
						<Form.Group className='mb-3' controlId='formBasicAuthor'>
							<Form.Label>Author</Form.Label>
							<Form.Control
								defaultValue={this.props.bookData.author}
								type='text'
								placeholder='Author'
							/>
						</Form.Group>
						<Form.Group className='mb-3' controlId='formBasicDes'>
							<Form.Label>Description</Form.Label>
							<Form.Control
								defaultValue={this.props.bookData.description}
								type='text'
								placeholder='Description'
							/>
						</Form.Group>
						<Form.Group className='mb-3' controlId='formBasicRead'>
							<Form.Label>I have ___ read this book.</Form.Label>
							<Form.Control
								defaultValue={this.props.bookData.status}
								type='text'
								placeholder='Read, Currently Reading, or Not Read'
							/>
						</Form.Group>
						<Container className='flex align-items-center justify-content-center'>
							<Button type='submit'>Submit</Button>
							{this.state.disabled ? (
								<Spinner className='mx-5' animation='border' role='status'>
									<span className='visually-hidden'>Loading...</span>
								</Spinner>
							) : (
								''
							)}
							<p
								className={
									this.state.message === 'Success'
										? 'text-primary'
										: 'text-danger'
								}
							>
								{this.state.message}
							</p>
						</Container>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.props.onHide}>Close</Button>
				</Modal.Footer>
			</Modal>
		)
	}
}
