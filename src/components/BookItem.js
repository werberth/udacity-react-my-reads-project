import React, { Component } from 'react';


class BookItem extends Component {

    getBookAuthors = (book) => (
        book.authors.join(', ')
            .replace(/, ([^,]*)$/, ' e $1')
    )

    render(){
        return (
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ 
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${this.props.book.imageLinks.smallThumbnail})` 
                }}></div>
                <div className="book-shelf-changer">
                    <select onChange={(e) => this.props.changeBookShelf(this.props.book.id, e)}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                    </select>
                </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">
                    {this.getBookAuthors(this.props.book)}
                </div>
            </div>
        )
    }
}

export default BookItem;