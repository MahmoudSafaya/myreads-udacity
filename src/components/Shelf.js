import React from 'react';
import Book from './Book';

const Shelf = ({books, updateShelf}) => {
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books && books.map((item) => {
          return(
            <Book key={item.id} book={item} updateShelf={updateShelf} />
          )
        })}
      </ol>
    </div>
  )
}

export default Shelf;
