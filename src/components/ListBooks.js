import React, { Component } from 'react';
import * as BookAPI from '../utils/BooksAPI';
import logo from '../icons/logo.png'
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf'


class ListBooks extends Component {
    constructor(props){
        super(props);

        this.state = {
            books: [],
            loading: true
        }

        this.shelfs = [
            { shelfTitle: 'Currently Reading',id: 'currentlyReading' },
            { shelfTitle: 'Want to Read', id: 'wantToRead' },
            { shelfTitle: 'Read', id: 'read' }
        ];
    }

    getShelfBooks = (shelf) => (
        this.state.books.filter((book) => (book.shelf === shelf))
    );

    updateBookShelf = (book, shelf) => {
        this.setState({
            books: this.state.books.map((item) => {
                if(book.id === item.id){
                    item.shelf = shelf;
                }
                return item;
            })
        });
        BookAPI.update(book, shelf);
    }

    componentDidMount(){
        BookAPI.getAll()
          .then((books) => {
                this.setState({books: books, loading: false})
            })
    }

    render(){
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <img alt="My Reads Logo" src={logo}/>
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    {this.shelfs.map((shelf) => (
                        <BookShelf
                            key={shelf.id}
                            books={this.getShelfBooks(shelf.id)}
                            changeBookShelf={this.updateBookShelf}
                            shelfTitle={shelf.shelfTitle}
                            loading={this.state.loading}
                        />
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