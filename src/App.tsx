import { useState } from "react";
import BookList from "./pages/BookList";
import { BookContext } from "./services/book/bookContext";
import "./App.css";

function App() {
  const [popup, setPopup] = useState(false);
  return (
    <>
      <BookContext.Provider value={{ popup, setPopup }}>
        <BookList />
      </BookContext.Provider>
    </>
  );
}

export default App;
