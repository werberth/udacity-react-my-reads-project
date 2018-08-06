import React, { Component } from 'react';
import BookItem from './BookItem';

class BookShelf extends Component {

    getShelfBooks = () => (
        this.props.books.filter((book) => {
            console.log(book.shelf, this.props.shelf.id);
            return book.shelf === this.props.shelf.id;
        })
    );

    render(){
        let books = this.getShelfBooks();

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelf.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book) => (
                            <li><BookItem book={book}/></li>    
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf;