export interface BookData {
  id: string;
  title: string;
  author: string;
  pages: number;
}

export interface BookContextType {
  popup: boolean;
  setPopup: (value: boolean) => void;
}
