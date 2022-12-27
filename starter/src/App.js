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

  useEffect(()=> {
    const getBooks = async () =>{
      const res = await BooksAPI.getAll();
      setBooks(res);
    };
    getBooks();
  },[])

  const updatedBooks = Array.from(books);
  
  const changeShelf = (book, shelf, updatedBooks) => {
    BooksAPI.update(book, shelf);
    const updatedBook = updatedBooks.filter(b => b.id === book.id)
    const removeBook = (updatedBooks, updatedBook) => {
      updatedBooks = updatedBooks.filter(b=>b.id!==updatedBook[0].id)
    }
    removeBook(updatedBooks, updatedBook);
    updatedBook.shelf = shelf;
    updatedBooks.concat(updatedBook);
    setBooks(updatedBooks);
  }

  return (
    <Routes>
      <Route exact path ="/" element={<HomePage books={books} shelvesNames={shelvesNames} changeShelf={changeShelf} updatedBooks={updatedBooks}/>}/>
      <Route exact path ="/search" element={<SearchPage shelvesNames={shelvesNames} changeShelf={changeShelf} updatedBooks={updatedBooks} books={books}/>}/>
  </Routes>
  );
}

export default App;
