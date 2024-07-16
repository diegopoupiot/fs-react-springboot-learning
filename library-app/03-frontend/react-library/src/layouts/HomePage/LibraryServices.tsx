export const LibraryServices = () => {

    return (
        <div className="container mx-auto my-5">
            <div className="flex flex-col lg:flex-row p-4 items-center border shadow-lg">
                <div className="lg:w-7/12 p-3">
                    <h1 className="text-4xl font-bold">
                        Can't find what you are looking for?
                    </h1>
                    <p className="text-lg leading-relaxed">
                        If you cannot find what you are looking for,
                        send our library admins a personal message!
                    </p>
                    <div className="flex gap-2 mt-4 lg:mt-3">
                        {true ? (
                            <a href="/messages"
                               className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 lg:px-6 lg:py-3 rounded-lg font-bold text-lg">
                                Library Services
                            </a>
                        ) : (
                            <a href="/login"
                               className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 lg:px-6 lg:py-3 rounded-lg font-bold text-lg">
                                Sign up
                            </a>
                        )}
                    </div>
                </div>
                <div className="lg:w-5/12 lg:ml-6 shadow-lg lost-image"></div>
            </div>
        </div>
    );
};
