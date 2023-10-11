import React from 'react'

export default function NavListItemContent({ id, type, section, titleSection, categories }) {

    return (
        type === 'menu' ?
            <div className='dropdown-menu container-fluid bg-dark position-lg-absolute top-100 start-0' id={id}>
                <div className='d-flex justify-content-center text-white'>
                    <div className='row w-100'>

                        {/* HEADER */}
                        <div className='col-12 px-3'>
                            <h5 className='border-bottom d-flex justify-content-between py-2 text-capitalize'>
                                {titleSection.title}
                                <button type="button" className="btn-close btn-close-white p-0" aria-label="Close"></button>
                            </h5>
                            <p className='text-capitalize'>{titleSection.subTitle}</p>
                        </div>

                        {/* CATEGORIES */}
                        <div className='col-12 px-3'>
                            <h5 className='border-bottom py-2 text-capitalize'>Shop {section} By</h5>
                            <div className='row px-2'>
                                {
                                    categories.map((cat) =>
                                        <a href={cat === 'all'? `/${section}` : `/${section}/${cat}`} className='col-lg-2 col-6 btn btn-dark text-white text-capitalize' key={cat}>{cat}</a>
                                    )
                                }
                                {/* <button className='col-lg-2 col-6 btn btn-dark text-white  text-capitalize' type='button' onClick={() => goto(`/${section.toLowerCase()}`, { state : {section: section} })}> */}
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
