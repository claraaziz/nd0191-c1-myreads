import ShelfSelect from "./ShelfSelect";
import "../App.css";


const Books = ({book, changeShelf, shelvesNames, shelfName}) => {
    return <div>
        <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${book.imageLinks.thumbnail})`,
                      }}
                    ></div>
                    <ShelfSelect book={book} changeShelf={changeShelf} shelvesNames={shelvesNames} shelfName={shelfName}/>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
        </div>
    </div>
}
export default Books;