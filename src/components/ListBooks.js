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
            { shelf: 'Currently Reading',id: 'currentlyReading' },
            { shelf: 'Want to Read', id: 'wantToRead' },
            { shelf: 'Read', id: 'read' }
        ];
    }

    componentDidMount(){
        BookAPI.getAll()
          .then((books) => {
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
                        <BookShelf books={this.state.books} shelf={shelf}/>
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