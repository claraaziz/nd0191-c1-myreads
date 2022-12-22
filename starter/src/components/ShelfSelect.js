const ShelfSelect = ({book, changeShelf, shelvesNames}) => {
  
    const handleShelf = event => {
        changeShelf(book, event.target.value)
    }

    return <div className="book-shelf-changer">
    <select onChange={handleShelf}>
      <option value="none" disabled>
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