import BookShelf from "../components/BookShelf";
import "../App.css"
import { Link } from "react-router-dom";
import "../App.css";


const HomePage = ({books, shelvesNames, changeShelf, shelfName}) => {
    return <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <BookShelf books={books} shelvesNames={shelvesNames} changeShelf={changeShelf} shelfName={shelfName}/>
      </div>
    </div>
    <div className="open-search">
        <Link to="/search" >Add a book</Link>
      </div>
  </div>
}

export default HomePage;