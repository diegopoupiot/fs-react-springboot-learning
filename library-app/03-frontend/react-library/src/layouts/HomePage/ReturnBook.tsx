import React from 'react';
import BookModel from "../../models/BookModel";

export const ReturnBook: React.FC<{ book: BookModel }> = (props) => {
    return (
        <div className="mx-2">
            <div className="flex justify-center items-center">
                {props.book.img ?
                    <img src={require('./../../Images/BooksImages/book-luv2code-1000.png')}
                         width={151} height={233} alt={"book"}></img> :
                    <img src={require('./../../Images/BooksImages/book-luv2code-1000.png')}
                         width={151} height={233}
                         alt={"book"}
                         className="block mx-auto max-w-xs h-auto lg:max-w-xs"/>
                }
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

