import React from 'react';
import Header from '../Pages/Shared/Header';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default Main;