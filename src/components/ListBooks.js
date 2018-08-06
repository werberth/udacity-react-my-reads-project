import React, { Component } from 'react';
import * as BookAPI from '../utils/BooksAPI';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf'


class ListBooks extends Component {
    constructor(props){
        super(props);

        this.state = {
            books: []
        }

        this.shelfs = [
            { shelfTitle: 'Currently Reading',id: 'currentlyReading' },
            { shelfTitle: 'Want to Read', id: 'wantToRead' },
            { shelfTitle: 'Read', id: 'read' }
        ];
    }

    updateBookShelf = (book, e) => {
        const shelf = e.target.value;
        this.setState((state) => ({
            books: state.books.map((_book) => {
                if(book.id === _book.id){
                    book.shelf = shelf;
                    return book
                }
                return _book
            })
        }));
        BookAPI.update(book, shelf)
    }

    componentDidMount(){
        BookAPI.getAll()
          .then((books) => {
            console.log(books)
            this.setState({ books })
        })
    }

    render(){
 
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    {this.shelfs.map((shelf) => (
                        <BookShelf 
                            books={this.state.books}
                            changeBookShelf={this.updateBookShelf}
                            shelf={shelf}
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