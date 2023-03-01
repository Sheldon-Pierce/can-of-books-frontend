import React from 'react'
import axios from 'axios'
import Carousel from 'react-bootstrap/Carousel'
import Delete from './Delete'
import AddBook from './AddBook'
import BookFormModal from './BookFormModal'
import { Container } from 'react-bootstrap'
import Update from './Update'
import UpdateFormModal from './UpdateFormModal'


const SERVER = process.env.REACT_APP_SERVER

class BestBooks extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			books: [],
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

	toggleUpdateBook = e => {
		console.log('toggling')
		this.setState({ showUpdateBookForm: !this.state.showUpdateBookForm })
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

				<Carousel className='w-100'>
					{this.state.books.length ? (
						this.state.books.map((item, i) => {
							return (
								<Carousel.Item
									key={i}
									className=' text-center p-5 mb-5 bg-dark text-light'
								>
									<h3>{item.title}</h3>
									<h5>{item.author}</h5>
									<p>{item.description}</p>
									<Delete
										fetchBooks={() => {
											this.fetchBooks()
										}}
										className='text-center'
										book={item.title}
									/>
									<Update
										
										className='text-center'
										book={item.title}
										onClick={this.toggleUpdateBook}
									/>
									<UpdateFormModal
									fetchBooks={() => {
											this.fetchBooks()
										}}
										show={this.state.showUpdateBookForm}
										bookData={item}
										toggleUpdateBook={this.toggleUpdateBook}

									/>
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
				<BookFormModal
					show={this.state.showAddBookForm}
					toggleAddBook={this.toggleAddBook}
					createBook={this.bookCreateHandler}
				/>

			</Container>
		)
	}
}
export default BestBooks
