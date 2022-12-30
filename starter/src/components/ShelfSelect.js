import "../App.css";
import { useState } from "react";

const ShelfSelect = ({book, changeShelf, shelvesNames, books, updatedBooks}) => {
  const [shelf, setShelf] = useState(book.shelf)
  const handleShelf = event => {
      changeShelf(book, event.target.value, books, updatedBooks)
      setShelf(event.target.value)
  }

  return <div className="book-shelf-changer">
  <select onChange={handleShelf} value={shelf}>
    <option value="moveTo" disabled>
      Move to...
    </option>
    {shelvesNames.map((shelf) => 
      <option value={shelf.key} key={shelf.key} >
          {shelf.name}
      </option>
    )}
    <option value="none" >None</option>
  </select>
</div>
}
export default ShelfSelect;