import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Books from "../components/Book";
import * as BooksAPI from "../BooksAPI"

const SearchPage = ({book, changeShelf, shelvesNames}) => {
    const [searchBooks, setsearchBooks] = useState([]);

  useEffect(()=> {
    const getSearchBooks = async () =>{
      const res = await BooksAPI.getAll();
      setsearchBooks(res);
    };
    getSearchBooks();
  },[])
  
  const [query, setQuery] = useState("");

  const updateQuery = (query) => {
    setQuery(query);
  };

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
          searchBooks.map((b)=> 
          b.title.toLowerCase().includes(query.toLowerCase()) 
            ? <li><Books book={b} changeShelf={changeShelf} shelvesNames={shelvesNames}/></li>
            : ""
          )
        }
      </ol>
    </div>
  </div>
}
export default SearchPage;