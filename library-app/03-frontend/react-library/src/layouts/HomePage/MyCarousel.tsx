import {useEffect, useState} from "react";
import BookModel from "../../models/BookModel";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import {ReturnBook} from "./ReturnBook";
import {SpinnerLoading} from "../utils/SpinnerLoading";

export const MyCarousel = () => {
    const [books, setBooks] = useState<BookModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            const baseUrl = "http://localhost:8080/api/books";
            const url: string = `${baseUrl}?page=0&size=9`;

            const response = await fetch(url)

            if (!response.ok) {
                throw new Error("Something went wrong!");
            }

            const responseJson = await response.json();

            const responseData = responseJson._embedded.books;

            const loadedBooks: BookModel[] = [];

            for (const key in responseData) {
                loadedBooks.push({
                    id: responseData[key].id,
                    title: responseData[key].title,
                    author: responseData[key].author,
                    description: responseData[key].description,
                    copies: responseData[key].copies,
                    copiesAvailable: responseData[key].copiesAvailable,
                    category: responseData[key].category,
                    img: responseData[key].img
                });
            }

            setBooks(loadedBooks);
            setIsLoading(false);
        }
        fetchBooks().catch((error: any) => {
            setIsLoading(false);
            setHttpError(error.message);
        })
    }, []);

    if (isLoading) {
        return (
            <SpinnerLoading/>
        );
    }

    if (httpError) {
        return (
            <div className="container mx-auto mt-5 max-w-4xl text-center">
                <p>{httpError}</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto mt-5 max-w-4xl relative">
            <div className="mb-5 text-center">
                <h3 className="text-xl font-semibold">Find your next "I stayed up too late reading" book.</h3>
            </div>
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper: any) => console.log(swiper)}
            >
                {books.map((book) => (
                    <SwiperSlide>
                        <ReturnBook book={book}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="text-center">
                <a href="/search"
                   className="bg-blue-600 text-white px-6 py-3 mt-4 rounded-lg inline-block hover:bg-blue-700 transition duration-300">
                    View more
                </a>
            </div>
        </div>
    );
};
