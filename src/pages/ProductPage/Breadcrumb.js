import React from 'react'

export default function Breadcrumb({ history }) {
    return (
        <>
            <nav className='pt-3' aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                    {
                        history.map((item, index) =>

                            index === history.length - 1 ?
                                <li className='breadcrumb-item text-capitalize active' key={index}>{item}</li>
                                :
                                <li className='breadcrumb-item text-capitalize' key={index}>
                                    <a className='crumblink' href={item === 'home' ? '/' : `/${item}`}>{item}</a>
                                </li>
                        )
                    }
                </ol>
            </nav>
        </>
    )
}
