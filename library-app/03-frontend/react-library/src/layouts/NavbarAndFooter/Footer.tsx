export const Footer = () => {
    return (
        <div className="bg-blue-600">
            <footer className="container mx-auto flex flex-wrap justify-between items-center py-5 text-white">
                <p className="w-full md:w-1/2 mb-4 md:mb-0 text-center md:text-left">© Example Library App, Inc</p>
                <ul className="flex w-full md:w-1/2 justify-center md:justify-end">
                    <li className="mx-2">
                        <a href="/home" className="text-white hover:text-blue-200">
                            Home
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="/search" className="text-white hover:text-blue-200">
                            Search Books
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    );
};
