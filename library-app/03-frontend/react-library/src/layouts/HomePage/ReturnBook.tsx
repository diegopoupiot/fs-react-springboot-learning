import React from 'react';

export const ReturnBook = ({books, currentSlide}: { books: { src: string, alt: string }[], currentSlide: number }) => {
    const index = currentSlide % books.length;
    return (
        <div className="mx-2">
            <div className="flex justify-center items-center">
                <img src={books[index].src} alt={books[index].alt}
                     className="block mx-auto max-w-xs h-auto lg:max-w-xs"/>
            </div>
            <div className="text-center my-3">
                <a
                    className="inline-block border border-blue-600 text-blue-600 font-semibold py-2 px-4 rounded hover:bg-blue-600 hover:text-white transition duration-300"
                    href="/search"
                >
                    Reserve
                </a>
            </div>
        </div>
    );
};

