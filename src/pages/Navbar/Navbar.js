import React from 'react';
import NavContent from './NavContent';
import { Outlet } from 'react-router-dom';

export default function Navbar() {

    return (
        <>
            <nav className='sticky-top navbar navbar-expand-lg navbar-dark bg-dark text-white m-0 p-1  w-100'>
                <a className='navbar-brand fw-bold px-2 mx-1' href='/'>Tango's Shop</a>

                <NavContent/>
            </nav>
            <Outlet/>
            {/* <ScrollRestoration /> */}
        </>
    )
}
