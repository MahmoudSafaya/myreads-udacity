import React from 'react';

const Book = ({book, updateShelf}) => {
  const {id, title, authors, imageLinks, shelf} = book;
  if(!book.shelf){
		book.shelf='none'
	}
  return (
    <li key={id}>
      <div className="book">
        <div className="book-top">
          {imageLinks && 
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks.thumbnail})` }}></div>
          }
          <div className="book-shelf-changer">
            {id && (
              <select onChange={e => updateShelf(book, e.target.value)} defaultValue={shelf}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            )}
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{
          authors && authors.map((item, index) => {
            return(
              <p key={index}>{item}</p>
            )
          })
        }</div>
      </div>
    </li>
  )
};

export default Book;