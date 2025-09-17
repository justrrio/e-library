import { createContext } from "react";
import type { BookContextType } from "@/services/book/book.type";

export const BookContext = createContext<BookContextType>({
  popup: false,
  setPopup: () => {},
});
