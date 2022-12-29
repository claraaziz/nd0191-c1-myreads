import "../App.css";
// import { useState, useEffect } from "react";

const ShelfSelect = ({book, changeShelf, shelvesNames, updatedBooks, books, searchBooks, selectedShelf}) => {
  
  const handleShelf = event => {
      changeShelf(book, event.target.value, updatedBooks)
      book.shelf = selectedShelf;
  }

  return <div className="book-shelf-changer">
  <select onChange={handleShelf} defaultValue={selectedShelf}>
    <option value="moveTo" disabled>
      Move to...
    </option>
    {shelvesNames.map((shelf) => 
      <option value={shelf.key} key={shelf.key} selected={shelf.key===book.shelf && true}>
          {shelf.name}
      </option>
    )}
    <option value="none" selected={book.shelf==="none" && true} >None</option>
  </select>
</div>
}
export default ShelfSelect;