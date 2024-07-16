export const ExploreTopBooks = () => {
    return (
        <div className="bg-gray-800 p-5 mb-4">
            <div className="container mx-auto py-10 text-white flex flex-col items-center">
                <h1 className="text-4xl font-bold mb-4">Find your next adventure</h1>
                <p className="text-lg mb-6">Where would you like to go next?</p>
                <a
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                    href="/search"
                >
                    Explore top books
                </a>
            </div>
        </div>
    );
}