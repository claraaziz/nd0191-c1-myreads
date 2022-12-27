import Books from "./Book";
import "../App.css";


const BookShelf = ({books, shelvesNames, changeShelf, updatedBooks}) => {
  
    return <div>
        {shelvesNames.map((shelf) => 
        <div className="bookshelf">
          <h2 className="bookshelf-title" >{shelf.name}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              <li>
                {books.map((book) => (
                  book.shelf === shelf.key && <Books book={book} changeShelf={changeShelf} shelvesNames={shelvesNames} updatedBooks={updatedBooks} />
                ))}
              </li>
            </ol>
          </div>
        </div>)}
    </div>
}

export default BookShelf;