import { useContext } from "react";
import BookCard from "@/components/BookCard";
import BookForm from "@/components/BookForm";
import type { BookData } from "@/services/book/book.type";
import { BookContext } from "@/services/book/bookContext";

const BOOKS_DATA: BookData[] = [
  {
    id: "1",
    title: "Atomic Habits",
    author: "James Clear",
    pages: 320,
  },
  {
    id: "2",
    title: "Sapiens",
    author: "Yuval Noah Harari",
    pages: 512,
  },
  {
    id: "3",
    title: "Filosofi Teras",
    author: "Henry Manampiring",
    pages: 324,
  },
];

export default function BookList() {
  const { popup, setPopup } = useContext(BookContext);

  return (
    <>
      <div className="flex justify-between min-w-2xl mb-20">
        <h1>Book List</h1>
        <button className="text-white" onClick={() => setPopup(!popup)}>
          Add Book
        </button>
      </div>
      <div className="flex flex-col min-w-2xl gap-4">
        {BOOKS_DATA.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>

      {/* POPUP */}
      {popup && (
        <div className="fixed inset-0 bg-black/75 flex justify-center items-center">
          <BookForm />
        </div>
      )}
    </>
  );
}
