import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Books from "../components/Book";
import * as BooksAPI from "../BooksAPI"
import "../App.css";


const SearchPage = ({ shelvesNames, changeShelf, updatedBooks, books}) => {
  const [searchBooks, setsearchBooks] = useState([]);
  
  const [query, setQuery] = useState("");

  const updateQuery = async (query) => {
    setQuery(query);
    const res = await BooksAPI.search(query);
    query === "" ? setsearchBooks([]) : setsearchBooks(res);
  };

  const [selectedShelf, setSelectedShelf] = useState("none");

  useEffect(() => {
    const getSelected = () => {
      books.map((b) => {
        searchBooks.map((sb) => {
          b.id === sb.id && setSelectedShelf(b.shelf);
        })
      });
    }
    getSelected();
  })

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
            ? <li><Books book={b} changeShelf={changeShelf} shelvesNames={shelvesNames} updatedBooks={updatedBooks} books={books} searchBooks={searchBooks} selectedShelf={selectedShelf}/></li>
            : "")) : ""
        }
      </ol>
    </div>
  </div>
}
export default SearchPage;