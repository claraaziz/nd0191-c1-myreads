import { Link } from "react-router-dom";
import { useState } from "react";
import Books from "../components/Book";
import * as BooksAPI from "../BooksAPI"
import "../App.css";


const SearchPage = ({ shelvesNames, changeShelf, shelfName }) => {
  const [searchBooks, setsearchBooks] = useState([]);
  
  const [query, setQuery] = useState("");

  const updateQuery = async (query) => {
    setQuery(query);
    const res = await BooksAPI.search(query);
    query === "" ? setsearchBooks([]) : setsearchBooks(res);
  };

  // const [shelfName, setShelf] = useState("")

  // const changeShelf = (book, shelf) => {
  //   BooksAPI.update(book, shelf);
  //   setShelf(shelf);
  // }

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
            ? <li><Books book={b} changeShelf={changeShelf} shelvesNames={shelvesNames} shelfName={shelfName}/></li>
            : "")) : ""
        }
      </ol>
    </div>
  </div>
}
export default SearchPage;