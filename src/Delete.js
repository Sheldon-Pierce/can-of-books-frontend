import React from 'react'
import axios from 'axios';


class Delete extends React.Component{

    handleClick =() => {
        axios.delete(`${process.env.REACT_APP_SERVER}/books/delete/${this.props.book}`).then(() => {this.props.fetchBooks()})
        
    }

    render(){
        return <button onClick={this.handleClick}>trash</button>
    }
    }


    export default Delete;