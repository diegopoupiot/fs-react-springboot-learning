import React from 'react';
import {Navbar} from "./layouts/NavbarAndFooter/Navbar";
import {Footer} from "./layouts/NavbarAndFooter/Footer";
import {HomePage} from "./layouts/HomePage/HomePage";


export const App = () => {
    return (
        <>
            <Navbar/>
            <HomePage/>
            <Footer/>
        </>
    );
}
