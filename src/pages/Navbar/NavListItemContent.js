import React from 'react'

export default function NavListItemContent({ id, type, section, titleSection }) {

    return (
        type === 'menu' ?
            <div className='dropdown-menu container-fluid bg-dark position-lg-absolute top-100 start-0' id={id}>
                <div className='d-flex justify-content-center text-white'>
                    <div className='row w-100'>

                        {/* HEADER */}
                        <div className='col-12 px-3'>
                            <h5 className='border-bottom d-flex justify-content-between py-2'>
                                {titleSection.title}
                                <button type="button" className="btn-close btn-close-white p-0" aria-label="Close"></button>
                            </h5>
                            <p>{titleSection.subTitle}</p>
                        </div>

                        {/* CATEGORIES */}
                        <div className='col-12 px-3'>
                            <h5 className='border-bottom py-2'>Shop {section} By</h5>
                            <div className='row px-2'>
                                <button className='col-lg-2 col-6 btn btn-dark text-white' type='button'>All</button>
                                <button className='col-lg-2 col-6 btn btn-dark text-white' type='button'>Tops</button>
                                <button className='col-lg-2 col-6 btn btn-dark text-white' type='button'>Bottoms</button>
                                <button className='col-lg-2 col-6 btn btn-dark text-white' type='button'>Tees</button>
                                <button className='col-lg-2 col-6 btn btn-dark text-white' type='button'>Pants</button>
                                <button className='col-lg-2 col-6 btn btn-dark text-white' type='button'>Shirts</button>
                                <button className='col-lg-2 col-6 btn btn-dark text-white' type='button'>Shorts</button>
                                <button className='col-lg-2 col-6 btn btn-dark text-white' type='button'>Polos</button>
                                <button className='col-lg-2 col-6 btn btn-dark text-white' type='button'>Sweatpants</button>
                                <button className='col-lg-2 col-6 btn btn-dark text-white' type='button'>Hoodies</button>
                                <button className='col-lg-2 col-6 btn btn-dark text-white' type='button'>Sweaters</button>
                                <button className='col-lg-2 col-6 btn btn-dark text-white' type='button'>Jackets</button>
                                <button className='col-lg-2 col-6 btn btn-dark text-white' type='button'>Coats</button>
                            </div>
                        </div>

                        {/* BRANDS */}
                        <div className='col-12 px-3'>
                            <h5 className='border-bottom py-2'>Shop By Brands</h5>
                            <div className='row px-2'>
                                <button className='btn btn-dark col text-white'>Nike</button>
                                <button className='btn btn-dark col text-white'>Adidas</button>
                                <button className='btn btn-dark col text-white'>Air Jordan</button>
                                <button className='btn btn-dark col text-white'>Vans</button>
                                <button className='btn btn-dark col text-white'>Under Armour</button>
                                <button className='btn btn-dark col text-white'>Supreme</button>
                                <button className='btn btn-dark col text-white'>New Balance</button>
                                <button className='btn btn-dark col text-white'>Crocs</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            :
            <ul className='dropdown-menu dropdown-menu-end text-center p-0 m-2' data-bs-theme="dark" id={id}>
                <p className='border-bottom py-2 m-0'>{section}</p>
                {id.toLowerCase().includes('cart') ?
                    titleSection.list.length === 0 ?
                        <p className='m-0 p-3'>... this bitch empty bruh</p>
                        :
                        titleSection.list.map(section => {
                            return (
                                <li key={section}><a className='dropdown-item' href='\'>{section}</a></li>
                            )
                        })
                    :
                    titleSection.list.map(section => {
                        return (
                            <li key={section}><a className='dropdown-item' href='\'>{section}</a></li>
                        )
                    })}
            </ul>
    )
}
