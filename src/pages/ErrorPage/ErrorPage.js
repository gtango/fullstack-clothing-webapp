import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
    const error = useRouteError();
    return (
        <div className='container-fluid' style={{background:"#F5EEE4", height:"100vh"}}>
            <div className='row flex-column h-100 w-100 justify-content-center align-items-center'>
                <div className='col-12 text-center text-capitalize'>{error.status}</div>
                <div className='col-12 text-center text-capitalize'>you fucked up</div>
            </div>
        </div>
    )
}
