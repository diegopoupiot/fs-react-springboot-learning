export const Heros = () => {

    return (
        <div className="container mx-auto mt-5">
            {/* Desktop Layout */}
            <div className="hidden lg:block">
                <div className="grid grid-cols-12 gap-0">
                    <div className="col-span-6">
                        <div className="col-image-left bg-cover bg-center h-96"></div>
                    </div>
                    <div className="col-span-4 col-start-7 flex items-center justify-center">
                        <div className="ml-4">
                            <h1 className="text-3xl font-bold mb-4">What have you been reading?</h1>
                            <p className="text-lg">
                                The library team would love to know what you have been reading.
                                Whether it is to learn a new skill or grow within one,
                                we will be able to provide the top content for you!
                            </p>
                            {true ? (
                                <a href="/search"
                                   className="bg-blue-600 text-white px-6 py-3 mt-4 rounded-lg inline-block hover:bg-blue-700 transition duration-300">
                                    Explore top books
                                </a>
                            ) : (
                                <a href="/login"
                                   className="bg-blue-600 text-white px-6 py-3 mt-4 rounded-lg inline-block hover:bg-blue-700 transition duration-300">
                                    Sign up
                                </a>
                            )}
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-0 mt-8">
                    <div className="col-span-4 flex items-center justify-center">
                        <div className="ml-4">
                            <h1 className="text-3xl font-bold mb-4">Our collection is always changing!</h1>
                            <p className="text-lg">
                                Try to check in daily as our collection is always changing!
                                We work nonstop to provide the most accurate book selection possible
                                for our Luv 2 Read students! We are diligent about our book selection
                                and our books are always going to be our
                                top priority.
                            </p>
                        </div>
                    </div>
                    <div className="col-span-6 col-start-5">
                        <div className="col-image-right bg-cover bg-center h-96"></div>
                    </div>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden">
                <div className="m-2">
                    <div className="col-image-left bg-cover bg-center h-96"></div>
                    <div className="mt-4">
                        <h1 className="text-3xl font-bold">What have you been reading?</h1>
                        <p className="text-lg">
                            The library team would love to know what you have been reading.
                            Whether it is to learn a new skill or grow within one,
                            we will be able to provide the top content for you!
                        </p>
                        {true ? (
                            <a href="search"
                               className="bg-blue-600 text-white px-6 py-3 mt-4 rounded-lg inline-block hover:bg-blue-700 transition duration-300">
                                Explore top books
                            </a>
                        ) : (
                            <a href="/login"
                               className="bg-blue-600 text-white px-6 py-3 mt-4 rounded-lg inline-block hover:bg-blue-700 transition duration-300">
                                Sign up
                            </a>
                        )}
                    </div>
                </div>
                <div className="m-2 mt-8">
                    <div className="col-image-right bg-cover bg-center h-96"></div>
                    <div className="mt-4">
                        <h1 className="text-3xl font-bold">Our collection is always changing!</h1>
                        <p className="text-lg">
                            Try to check in daily as our collection is always changing!
                            We work nonstop to provide the most accurate book selection possible
                            for our Luv 2 Read students! We are diligent about our book selection
                            and our books are always going to be our
                            top priority.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
