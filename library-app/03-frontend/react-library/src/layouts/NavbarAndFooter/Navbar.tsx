import {useState} from 'react';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-blue-600 py-3">
            <div className="container mx-auto flex items-center justify-between">
                <span className="text-white text-2xl font-semibold">Library App</span>
                <button
                    className="text-white focus:outline-none lg:hidden"
                    onClick={toggleNavbar}
                    aria-controls="navbarNavDropdown"
                    aria-expanded={isOpen}
                    aria-label="Toggle Navigation"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                <div className={`${isOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:space-x-4`}
                     id="navbarNavDropdown">
                    <ul className="flex flex-col lg:flex-row lg:space-x-4">
                        <li>
                            <a className="text-white hover:text-gray-300 block py-2 px-4 lg:p-0 transition duration-300"
                               href="/home">Home</a>
                        </li>
                        <li>
                            <a className="text-white hover:text-gray-300 block py-2 px-4 lg:p-0 transition duration-300"
                               href="/search">Search Books</a>
                        </li>
                        <li>
                            <a className="text-white hover:text-gray-300 block py-2 px-4 lg:p-0 transition duration-300"
                               href="/shelf">Shelf</a>
                        </li>
                        <li>
                            <a className="text-white hover:text-gray-300 block py-2 px-4 lg:p-0 transition duration-300"
                               href="/admin">Admin</a>
                        </li>
                    </ul>
                    <ul className="flex flex-col lg:flex-row lg:space-x-4 mt-2 lg:mt-0 ml-auto">
                        <li className="m-1">
                            <a
                                className="inline-block bg-white text-blue-600 font-semibold py-2 px-4 rounded hover:bg-blue-100 transition duration-300"
                                href="/login"
                            >
                                Sign in
                            </a>
                        </li>
                        <li className="m-1">
                            <button
                                className="inline-block bg-transparent border border-white text-white font-semibold py-2 px-4 rounded hover:bg-white hover:text-blue-600 transition duration-300"
                                onClick={() => { /* Add your logout logic here */
                                }}
                            >
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

