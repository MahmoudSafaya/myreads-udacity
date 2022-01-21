import React from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'

const Home = ({books, updateShelf}) => {

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <Shelf 
                books={books.filter((e) => e.shelf === 'currentlyReading')}
                updateShelf={updateShelf}
              />
              <h2 className="bookshelf-title">Want to Read</h2>
              <Shelf 
                books={books.filter((e) => e.shelf === 'wantToRead')}
                updateShelf={updateShelf}
              />
              <h2 className="bookshelf-title">Read</h2>
              <Shelf 
                books={books.filter((e) => e.shelf === 'read')}
                updateShelf={updateShelf}
              />
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to='/search' className='button'>Add a book</Link>
        </div>
      </div>
    )
}

export default Home