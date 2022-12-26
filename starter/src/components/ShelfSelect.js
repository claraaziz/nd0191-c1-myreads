import "../App.css";

const ShelfSelect = ({book, changeShelf, shelvesNames, shelfName}) => {
  
  const handleShelf = event => {
      changeShelf(book, event.target.value)
      shelfName = event.target.value;
      book.shelf = shelfName;
  }

  return <div className="book-shelf-changer">
  <select onChange={handleShelf}>
    <option value="moveTo" disabled>
      Move to...
    </option>
    {shelvesNames.map((shelf) => 
      <option value={shelf.key} selected={book.shelf===shelf.key && true}>
          {shelf.name}
      </option>
    )}
    <option value="none" selected={book.shelf==="none" && true} >None</option>
  </select>
</div>
}
export default ShelfSelect;