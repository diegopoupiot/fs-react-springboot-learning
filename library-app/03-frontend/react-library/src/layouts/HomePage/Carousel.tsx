import {useState} from "react";
import bookLuv2CodeImage from "./../../Images/BooksImages/book-luv2code-1000.png";
import newBook2Image from "./../../Images/BooksImages/new-book-2.png";
import newBook1Image from "./../../Images/BooksImages/new-book-1.png";
import {ReturnBook} from "./ReturnBook";

const books = [
    {src: bookLuv2CodeImage, alt: "book 1"},
    {src: newBook2Image, alt: "book 2"},
    {src: newBook1Image, alt: "book 3"}
];

export const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrev = () => {
        setCurrentSlide(prevSlide => (prevSlide === 0 ? books.length - 1 : prevSlide - 1));
    };

    const handleNext = () => {
        setCurrentSlide(prevSlide => (prevSlide === books.length - 1 ? 0 : prevSlide + 1));
    };

    return (
        <div className="container mx-auto mt-5 max-w-4xl relative">
            <div className="text-center">
                <h3 className="text-xl font-semibold">Find your next "I stayed up too late reading" book.</h3>
            </div>
            <div className="relative overflow-hidden">
                <div className="flex justify-center items-center">
                    <ReturnBook books={books} currentSlide={currentSlide}/>
                    <ReturnBook books={books} currentSlide={(currentSlide + 1) % books.length}/>
                    <ReturnBook books={books} currentSlide={(currentSlide + 2) % books.length}/>
                </div>
            </div>
            <button
                className="absolute left-1 top-1/2 transform -translate-y-1/2 -translate-x-10 bg-blue-600 text-white p-2 rounded-full z-10"
                type="button"
                onClick={handlePrev}
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </button>
            <button
                className="absolute right-1 top-1/2 transform -translate-y-1/2 translate-x-10 bg-blue-600 text-white p-2 rounded-full z-10"
                type="button"
                onClick={handleNext}
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </button>
            <div className="flex justify-center mt-4">
                <a
                    className="inline-flex items-center justify-center bg-blue-600 text-white font-semibold py-2 px-3 rounded-lg transition duration-300"
                    href="/search"
                >
                    View More
                </a>
            </div>
        </div>
    );
};
