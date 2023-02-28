import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';


const SERVER = process.env.REACT_APP_SERVER

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  componentDidMount() {
    this.fetchBooks();
  }

  async fetchBooks() {
    let apiUrl = `${SERVER}/books`;
    console.log(apiUrl)
    try {
      const response = await axios.get(apiUrl);
      console.log(response);
      this.setState({ books: response.data })
    } catch (error) {
      console.error(error)
    }
  }



  render() {

    /* TODO: render all the books in a Carousel */
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <Carousel>
          {this.state.books.length ? this.state.books.map(item => {
            return (<Carousel.Item>        
                <h3>{item.title}</h3>
                <h5>{item.author}</h5>
                <p>{item.description}</p>
            </Carousel.Item>
            )
          })
        : <p>{'Book collection is empty!'}</p>
        }
        </Carousel>
        </>
    )
  };
}             
export default BestBooks;
