import React from 'react';
import { Route } from 'react-router-dom';
import ListBooks from './components/ListBooks';
import SearchBooks from './components/SearchBooks';
import './App.css';

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Route exact path='/' component={ListBooks}/>
        <Route path='/search' component={SearchBooks}/>
      </div>
    )
  }
}

export default BooksApp;