import React, { Component } from 'react';
import BookItem from './BookItem';
import loader from '../icons/loader.gif'

class BookShelf extends Component {

    render(){

        const {books, shelfTitle, loading, changeBookShelf} = this.props
        const empty = !books.length && !loading;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfTitle}</h2>
                <div className="bookshelf-books">
                    {loading && <img src={loader} className="shelf-loader" />}

                    {empty && <h3 class="empty-shelf">This shelf is empty</h3>}

                    <ol className="books-grid">
                        {books.map((book) => (
                            <li key={book.id}>
                                <BookItem
                                    changeBookShelf={changeBookShelf}
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

export default BookShelf;