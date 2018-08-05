import React from 'react';
import { Route } from 'react-router-dom';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import './App.css';

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Route path='/' component={ListBooks}/>
        <Route path='/create' component={SearchBooks}/>
      </div>
    )
  }
}

export default BooksApp;