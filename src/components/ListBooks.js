import React, { Component } from 'react';
import * as BookAPI from '../utils/BooksAPI';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf'


class ListBooks extends Component {
    state = {
        books: []
    }

    componentDidMount(){
        BookAPI.getAll()
          .then((books) => {
            this.setState({ books })
        })
    }

    render(){
        const shelfs = ['Currently Reading', 'Want to Read', 'Read'];
 
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    {shelfs.map((shelf) => (
                        <BookShelf books={this.state.books} title={shelf}/>
                    ))}
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default ListBooks;