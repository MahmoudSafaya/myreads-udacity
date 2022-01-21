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
  
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
  
  updateShelf = (book, shelf) => {
    book.shelf = shelf
    console.log(this.state.books)
    if(this.state.books.indexOf(book) < 0) {
      this.state.books.push(book)
    }
    BooksAPI.update(book, shelf).then(
      this.setState((prevState, props) => {
        return {
          books: prevState.books.map((e) => e.id === book.id ? book : e)
        }
      })
    )
  }

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
