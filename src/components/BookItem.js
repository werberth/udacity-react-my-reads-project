import React, { Component } from 'react';


class BookItem extends Component {

    getBookAuthors = (book) => (
        book.authors.join(', ')
            .replace(/, ([^,]*)$/, ' e $1')
    )

    render(){

        const {book, changeBookShelf, shelf} = this.props

        return (
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ 
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                }}></div>
                <div className="book-shelf-changer">
                    <select
                        value={shelf}
                        onChange={(e) => changeBookShelf(book, e)}
                    >
                        <option value="move" disabled="disabled">Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                    </select>
                </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">
                    {this.getBookAuthors(book)}
                </div>
            </div>
        )
    }
}

export default BookItem;