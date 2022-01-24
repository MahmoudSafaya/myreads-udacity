import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import  Search  from './components/Search'

class BooksApp extends React.Component {

  state = {
    books: []
  }
  
  async componentDidMount() {
    const books = await BooksAPI.getAll();
      this.setState({ books })
  }
  
  updateShelf = (updatedBook, shelf) => {
    BooksAPI.update(updatedBook, shelf).then(res => {
      this.setState(state => {
        let currentBooks = [];
        if (state.books.find(book => book.id === updatedBook.id)) {
          currentBooks = state.books.map(book => {
            if (book.id === updatedBook.id) {
              book.shelf = shelf;
            }
            return book;
          })
        } else {
          updatedBook.shelf = shelf;
          currentBooks = state.books.concat([updatedBook]);
        }
        return {books: currentBooks};
      })
    })
  };

  render() {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<Home books={this.state.books} updateShelf={this.updateShelf} />}></Route>
          <Route path='/search' element={<Search books={this.state.books} updateShelf={this.updateShelf} />}></Route>
        </Routes>
      </Router>
    )
  }
}

export default BooksApp
