import React, { Component } from 'react';
import thumbnail from '../icons/thumbnail.png';


class BookItem extends Component {

    getBookAuthors = (book) => (
        book.authors.join(', ')
            .replace(/, ([^,]*)$/, ' e $1')
    )

    render(){

        const {book, changeBookShelf} = this.props;
        const cover = book.imageLinks ? book.imageLinks.smallThumbnail : thumbnail;
        const coverStyle = {
            width: 128,
            height: 193,
            backgroundImage: `url(${cover})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            backgroundColor: '#1758b1'
        }

        return (
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={coverStyle}></div>
                <div className="book-shelf-changer">
                    <select
                        value={book.shelf}
                        onChange={(e) => changeBookShelf(book, e.target.value)}
                    >
                        <option value="move" disabled="disabled">Move to...</option>
                        {book.shelf === "None" && <option value="None">None</option>}
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                    </select>
                </div>
                </div>
                <div className="book-title">{book.title}</div>
                    {book.authors && (
                        <div className="book-authors">
                            {this.getBookAuthors(book)}
                        </div>
                    )}
            </div>
        )
    }
}

export default BookItem;