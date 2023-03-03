import React from 'react'
import axios from 'axios'
import Carousel from 'react-bootstrap/Carousel'
import Delete from './Delete'
import AddBook from './AddBook'

import BookFormModal from './BookFormModal'
import { Container } from 'react-bootstrap'
import Update from './Update'
import UpdateFormModal from './UpdateFormModal'
import { withAuth0 } from '@auth0/auth0-react'
import LogoutButton from './LogoutButton'

const SERVER = process.env.REACT_APP_SERVER

class BestBooks extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			books: [],
			selectedBook: {
				title: '',
				author: '',
				description: '',
				status: '',
			},
			showAddBookForm: false,
			showUpdateBookForm: false,
		}
	}

	/* TODO: Make a GET request to your API to fetch all the books from the database  */

	componentDidMount() {
		this.fetchBooks()
	}

	async fetchBooks() {
		let apiUrl = `${SERVER}/books/all`

		try {
			const response = await axios.get(apiUrl)
			this.setState({ books: response.data })
		} catch (error) {
			console.error(error)
		}
	}

	toggleAddBook = e => {
		console.log('toggling')
		this.setState({ showAddBookForm: !this.state.showAddBookForm })
	}

	toggleUpdateBook = book => {
		this.setState({
			selectedBook: book,
			showUpdateBookForm: !this.state.showUpdateBookForm,
		})
	}

	bookCreateHandler = async book => {
		try {
			let url = `${SERVER}/books/new`
			await axios.post(url, book).then(response => {
				this.fetchBooks()
			})
		} catch (error) {
			console.error(error)
		}
	}

	render() {
		/* TODO: render all the books in a Carousel */
		return (
			<Container fluid className='bg-dark bg-gradient'>
				<h2 className='my-5 text-light pt-2 text-center'>
					My Essential Lifelong Learning &amp; Formation Shelf
				</h2>

				<LogoutButton />

				<Carousel className='w-100'>
					{this.state.books.length ? (
						this.state.books.map((item, i) => {
							return (
								<Carousel.Item
									key={i}
									className=' text-center p-5 mb-5 bg-dark text-light'
								>
									<h3>{item.title}</h3>
									<h5 className='my-3'>{item.author}</h5>
									<p>{item.description}</p>
									<h6>
										{item.status ? `I have ${item.status} read this book` : ''}
									</h6>

									<Container className='updateButtons mt-5'>
										<Update
											className='text-center'
											book={item.title}
											onClick={() => {
												this.toggleUpdateBook(item)
											}}
											value={item}
										/>
										<Delete
											fetchBooks={() => {
												this.fetchBooks()
											}}
											className='text-center'
											book={item.title}
										/>
									</Container>
								</Carousel.Item>
							)
						})
					) : (
						<h1 className='text-light m-5 text-center'>
							{'Book collection is empty!'}
						</h1>
					)}
				</Carousel>

				<AddBook onClick={this.toggleAddBook} />
				<UpdateFormModal
					fetchBooks={() => {
						this.fetchBooks()
					}}
					show={this.state.showUpdateBookForm}
					bookData={this.state.selectedBook}
					onHide={() => {
						this.toggleUpdateBook(this.state.selectedBook)
					}}
				/>

				<BookFormModal
					show={this.state.showAddBookForm}
					toggleAddBook={this.toggleAddBook}
					createBook={this.bookCreateHandler}
				/>
			</Container>
		)
	}
}
export default withAuth0(BestBooks)
