import { Link } from "react-router-dom";
import { useState } from "react";
import Books from "../components/Book";
import * as BooksAPI from "../BooksAPI"
import "../App.css";


const SearchPage = ({ shelvesNames, changeShelf, books}) => {
  const [searchBooks, setsearchBooks] = useState([]);
  
  const [query, setQuery] = useState("");

  const updateQuery = async (query) => {
    setQuery(query);
    const res = await BooksAPI.search(query);
    if (!res.error) {
      query === "" ? setsearchBooks([]) : setsearchBooks(res);
    } else {
      setsearchBooks([])
    }
  };

  const [newUpdatedBooks, setNewUpdatedBooks] = useState(books);
  const newChangeShelf = (book, shelf, books, newUpdatedBooks) => {
    const newUpdatedBooksArray = newUpdatedBooks.filter(b=>b.id!==book.id)
    book.shelf=shelf;
    newUpdatedBooksArray.push(book)
    setNewUpdatedBooks(newUpdatedBooksArray)
    changeShelf(book, shelf, books, newUpdatedBooks);
  }

    return <div className="search-books">
    <div className="search-books-bar">
      <div className="close-search">
        <Link to="/"> Close </Link>
      </div>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title, author, or ISBN"
          value={query}
          onChange={(event) => updateQuery(event.target.value)}
        />
      </div>
    </div>
    <div className="search-books-results">
      <ol className="books-grid">
        {
          searchBooks.map ? (
            query === "" 
            ? "" 
            : searchBooks.map(
              (b)=> 
              b.title.toLowerCase().replace(/^\s+|\s+$/gm,".").includes(query.toLowerCase().replace(/^\s+|\s+$/gm,"."))
            ? <li><Books book={b} changeShelf={newChangeShelf} shelvesNames={shelvesNames} books={books} updatedBooks={newUpdatedBooks}/></li>
            : "")) : ""
        }
      </ol>
    </div>
  </div>
}
export default SearchPage;