import "./App.css";
import { useState, useEffect } from "react";
import SearchPage from "./pages/Search";
import HomePage from "./pages/Home";
import * as BooksAPI from "./BooksAPI"
import { Route, Routes } from "react-router-dom";

function App() {
  const [books, setBooks] = useState([]);
  const shelvesNames = [
    { key: 'currentlyReading', name: 'Currently Reading' },
    { key: 'wantToRead', name: 'Want to Read' },
    { key: 'read', name: 'Read' },
  ]

  const [shelfName, setShelf] = useState("")

  useEffect(()=> {
    const getBooks = async () =>{
      const res = await BooksAPI.getAll();
      setBooks(res);
    };
    getBooks();
  },[])
  
  const changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    setShelf(shelf);
  }

  return (
    <Routes>
      <Route exact path ="/" element={<HomePage books={books} shelvesNames={shelvesNames} changeShelf={changeShelf} shelfName={shelfName}/>}/>
      <Route exact path ="/search" element={<SearchPage shelvesNames={shelvesNames} changeShelf={changeShelf} shelfName={shelfName}/>}/>
  </Routes>
  );
}

export default App;
