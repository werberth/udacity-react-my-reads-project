import React from 'react'
import * as BooksAPI from './BooksAPI';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import './App.css';

class BooksApp extends React.Component {
  state = {
    showSearchPage: false
  }

  changePage = status => this.setState({ showSearchPage: status });

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks onChangePage={() => this.changePage(false)} />
        ) : (
          <ListBooks onChangePage={() => this.changePage(true)}/>
        )}
      </div>
    )
  }
}

export default BooksApp;