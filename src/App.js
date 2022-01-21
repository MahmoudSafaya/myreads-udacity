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
  
  updateShelf = (book, shelf) => {
    book.shelf = shelf
    if(this.state.books.indexOf(book) < 0){
      this.setState((prevState, props) => {
        return {
          books: prevState.books.concat(book)
        }
      })
    }
    BooksAPI.update(book, shelf).then(
      this.setState((prevState, props) => {
        return {
          books: prevState.books.filter((b) => b.id === book.id ? book : b)
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
