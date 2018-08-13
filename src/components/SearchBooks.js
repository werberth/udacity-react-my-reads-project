import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BookAPI from '../utils/BooksAPI';
import BookItem from './BookItem';
import loader from '../icons/loader.gif'

class SearchBooks extends Component {

    constructor(props) {
        super(props)
        this.state = {
            result: [],
            myBooks: [],
            loading: false
        }
    }

    changeBookShelf = (book, shelf) => {
        if(shelf !== 'None'){
            BookAPI.update(book, shelf)
            .then(response => {
                BookAPI.getAll()
                    .then(books => {
                        this.setState({myBooks: books});
                        this.updateSearch();
                    });
            })
        }
    }

    componentDidMount(){
        BookAPI.getAll()
        .then((books) => {
            this.setState({myBooks: books})
        })
    }

    search = (query) => {
        if(query !== ''){
            this.setState({loading: true})
            BookAPI.search(query)
                .then((response) => {
                    const books = response.error ? response.items : response;
                    this.updateSearch(books);
                })
        } else {
            this.setState({result: []})
        }
    }

    updateSearch = (books=this.state.result) => {
        let result = [];
        for(let book of books){
            book.shelf = 'None'
            for(let myBook of this.state.myBooks){
                if(myBook.id === book.id){
                    book.shelf = myBook.shelf;
                }
            }
            result.push(book)
        }
        this.setState({loading: false, result: result})
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
                        {this.state.result.map((book) => (
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