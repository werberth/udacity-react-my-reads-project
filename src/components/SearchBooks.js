import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BookAPI from '../utils/BooksAPI';
import BookItem from './BookItem';
import loader from '../icons/loader.gif'

class SearchBooks extends Component {

    constructor(props) {
        super(props)
        this.state = {
            emptyQuery: '',
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
                        // update myBooks
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
        // reset result, loading and define emptyQuery as false
        this.setState({result: [], loading: false, emptyQuery: false});

        if(query !== ''){
            // start loading
            this.setState({loading: true});
            BookAPI.search(query)
                .then((response) => {
                    // define result as [] when emptyQuery is true
                    if(response.error === "empty query"){
                        this.setState({result: [], emptyQuery: true, loading: false})
                    } else {
                        this.updateSearch(response);
                    }
                })
        }
    }

    updateSearch = (books=this.state.result) => {
        let result = [];
        // looping a fetch books and my shelf books
        // to define your shelf or None
        for(let book of books){
            book.shelf = 'None'
            for(let myBook of this.state.myBooks){
                if(myBook.id === book.id){
                    book.shelf = myBook.shelf;
                }
            }
            result.push(book)
        }
        // stop loading, add result on state and define emptyQuery as false
        this.setState({loading: false, result: result, emptyQuery: false});
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
                            onChange={e => this.search(e.target.value.trim())}
                        />
                    </div>
                </div>
                <div className="search-books-results">

                    {this.state.loading && (
                        <img src={loader} className="search-loader"/>
                    )}

                    {this.state.emptyQuery && (
                        <h3>A pesquisa não retornou nenhum resultado.</h3>
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