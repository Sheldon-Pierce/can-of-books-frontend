import React from 'react'
import axios from 'axios'
import Carousel from 'react-bootstrap/Carousel'

import AddBook from './AddBook'
import BookFormModal from './BookFormModal'

const SERVER = process.env.REACT_APP_SERVER

class BestBooks extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			books: [],
			showAddBookForm: false,
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
			//console.log(response)
			this.setState({ books: response.data })
		} catch (error) {
			console.error(error)
		}
	}

	toggleAddBook = e => {
		console.log('toggling')
		this.setState({ showAddBookForm: !this.state.showAddBookForm })
	}

	bookCreateHandler = async (book) => {
		try {
			let url = `${SERVER}/books/new`;
			await axios.post(url, book).then(
			respnse => {this.fetchBooks()})
		} catch (error) {
			console.error(error)
		}
	}

	render() {
		/* TODO: render all the books in a Carousel */
		return (
			<>
				<h2 className='my-5'>
					My Essential Lifelong Learning &amp; Formation Shelf
				</h2>
				<Carousel>
					{this.state.books.length ? (
						this.state.books.map((item, i) => {
							return (
								<Carousel.Item key={i} className='mb-5 bg-dark text-light'>
									<h3>{item.title}</h3>
									<h5>{item.author}</h5>
									<p>{item.description}</p>
								</Carousel.Item>
							)
						})
					) : (
						<p>{'Book collection is empty!'}</p>
					)}
				</Carousel>

				<AddBook onClick={this.toggleAddBook} />
				<BookFormModal
					show={this.state.showAddBookForm}
					toggleAddBook={this.toggleAddBook}
					createBook={this.bookCreateHandler}
				/>
			</>
		)
	}
}
export default BestBooks
