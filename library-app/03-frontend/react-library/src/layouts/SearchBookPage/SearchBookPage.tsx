import {useState} from "react";
import BookModel from "../../models/BookModel";

export const SearchBookPage = () => {
    const [books, setBooks] = useState<BookModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

}