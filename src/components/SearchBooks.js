import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BookAPI from '../utils/BooksAPI';
import BookItem from './BookItem';
import loader from '../icons/loader.gif'

class SearchBooks extends Component {

    constructor(props) {
        super(props)
        this.state = {
            books: [],
            loading: false
        }
    }

    changeBookShelf = (book, shelf) => (BookAPI.update(book, shelf));

    search = (query) => {
        this.setState({books: []})
        if(query !== ''){
            this.setState({loading: true})
            BookAPI.search(query)
                .then((response) => {
                    const books = response.error ? response.items : response
                    this.setState({loading: false, books: books})
                })
        }
    }

    render(){
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            onChange={(e) => this.search(e.target.value.trim())}
                        />
                    </div>
                </div>
                <div className="search-books-results">

                    {this.state.loading && (
                        <img src={loader} className="search-loader"/>
                    )}

                    <ol className="books-grid">
                        {this.state.books.map((book) => (
                            <li key={book.id}>
                                <BookItem
                                    changeBookShelf={this.changeBookShelf}
                                    book={book}
                                />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks;