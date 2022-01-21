import React from 'react'
import { Link } from 'react-router-dom'
import * as apiData from '../BooksAPI'
import Book from './Book';

class Search extends React.Component {

  state = {
    df: '',
    data: [],
    result: ''
  }

  getData = (item) => {
    if(item){
      apiData.search(item).then(data => {
        if(data){
          if(data.error){
            this.setState({ result : 'error', data : data.error })
          
          } else {
            this.setState({ result : 'full data', data })
            console.log(data);
          }
        }
      })
    } else {
      this.setState({ result : 'empty data', data: [] })
    }
  }

  render() {
    const {result, data} = this.state
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={e => this.getData(e.target.value)}
            />
  
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {result === 'error' && <li>Not Found</li>}
            {result === 'empty data' && <li>There is nothing yet!</li>}
            {result === 'full data' && 
            data.map((item) => {
              return(
                <Book key={item.id} book={item} updateShelf={this.props.updateShelf} />
              )
            })}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search