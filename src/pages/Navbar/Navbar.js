import { useQuery } from '@tanstack/react-query';
import NavContent from './NavContent';
import { Outlet } from 'react-router-dom';
import axios from 'axios';

export default function Navbar() {

    const getUser = () => {
        if(JSON.parse(localStorage.getItem("user"))?.expire < Date.now()){
            localStorage.clear()
            axios.get(`${window.location.origin}/api/v1/auth/signout`, { withCredentials: "true" });
        }
        return JSON.parse(localStorage.getItem('user')) ?? null;
    }

    const { data } = useQuery({
        queryKey: ['navbar'],
        queryFn: () => getUser()
    })

    return (
        <>
            <nav className='sticky-top navbar navbar-expand-lg navbar-dark bg-dark text-white m-0 p-1 w-100'>
                <a className='navbar-brand fw-bold px-2 mx-1' href='/'>Tango's Shop</a>

                <NavContent
                    user={data}
                />
            </nav>
            <Outlet/>
            {/* <ScrollRestoration /> */}
        </>
    )
}
