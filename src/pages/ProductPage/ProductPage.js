import React from 'react'
import { useParams } from 'react-router-dom'
import MILO from '../../assets/images/Products/BAPE_BBMILO.jpg'
import ProductFilter from './ProductFilter'
import Breadcrumb from './Breadcrumb';

export default function ProductPage() {

    // const state = useLocation() //state: section (mens/womens), 
    let params = useParams();
    const catList = ['all', 'tops', 'bottoms', 'tees', 'pants', 'shirts', 'shorts', 'hoodies', 'sweatpants', 'sweaters', 'skirts', 'jackets', 'dresses', 'suits', 'coats', 'polos']
    const menCatOnly = ['polos', 'suits']
    const womenCatOnly = ['dresses', 'skirts']

    const list = [{ sku: 1, name: "Nike Dri-Fit Check White", price: '40.00', img: MILO }
        , { sku: 2, name: 'Adidas Strip Jacket Green', price: '100.00', img: MILO }
        , { sku: 3, name: 'Bape Baby Milo Shirt Green', price: '90.00', img: MILO }
        , { sku: 4, name: 'Bape Shirt Green', price: '90.00', img: MILO }
        , { sku: 5, name: 'Adidas Strip Jacket Green', price: '100.00', img: MILO }
        , { sku: 6, name: 'Bape Baby Milo Shirt Green', price: '90.00', img: MILO }
        , { sku: 7, name: 'Bape Shirt Green', price: '90.00', img: MILO }
        , { sku: 8, name: 'Adidas Strip Jacket Green', price: '100.00', img: MILO }
        , { sku: 9, name: 'Bape Baby Milo Shirt Green', price: '90.00', img: MILO }
        , { sku: 10, name: 'Bape Shirt Green', price: '90.00', img: MILO }
        , { sku: 11, name: 'Adidas Strip Jacket Green', price: '100.00', img: MILO }
        , { sku: 12, name: 'Bape Baby Milo Shirt Green', price: '90.00', img: MILO }
        , { sku: 13, name: 'Bape Shirt Green', price: '90.00', img: MILO }
        , { sku: 14, name: 'Adidas Strip Jacket Green', price: '100.00', img: MILO }
        , { sku: 15, name: 'Bape Baby Milo Shirt Green', price: '90.00', img: MILO }
        , { sku: 16, name: 'Bape Shirt Green', price: '90.00', img: MILO }
        , { sku: 17, name: 'Adidas Strip Jacket Green', price: '100.00', img: MILO }
        , { sku: 18, name: 'Bape Baby Milo Shirt Green', price: '90.00', img: MILO }
        , { sku: 19, name: 'Bape Shirt Green', price: '90.00', img: MILO }
        , { sku: 20, name: 'Adidas Strip Jacket Green', price: '100.00', img: MILO }
        , { sku: 21, name: 'Bape Baby Milo Shirt Green', price: '90.00', img: MILO }
        , { sku: 22, name: 'Bape Shirt Green', price: '90.00', img: MILO }
        , { sku: 23, name: 'Bape Baby Milo Shirt Green', price: '90.00', img: MILO }
    ]

    return (
        <>
            <div className='container-fluid min-vh-100' style={{ background: "#F5EEE4" }}>

                <div className='row justify-content-center align-items-center border-bottom border-2 border-black px-3 pt-5 pb-0 text-lg-start text-center'>

                    <h1 className='col-12 col-lg p-0 m-0 text-uppercase'>
                        {params.section} {params.cat === undefined ? 'clothing' : params.cat}
                    </h1>

                    <div className='col-12 col-lg pt-3 pb-1 pb-lg-0 pt-lg-0 d-none d-lg-block'>
                        <div className='row justify-content-end align-items-end text-center text-lg-end gx-5'>
                            <div className='col m-0'>
                                <div className='row'>
                                    <p className='col-12 col-lg ps-1 m-0 d-none d-lg-block' style={{ whiteSpace: "nowrap" }}>Items Per Page </p>
                                    <select className='col bg-transparent border border-1 border-black rounded '>
                                        <option value="10">10</option>
                                        <option value="25">25</option>
                                        <option value="50">50</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col m-0'>
                                <div className='row'>
                                    <p className='col-12 col-lg ps-1 m-0 d-none d-lg-block'>Sort By </p>
                                    <select className='col bg-transparent border border-1 border-black rounded '>
                                        <option value="10">Low to High</option>
                                        <option value="25">High to Low</option>
                                        <option value="50">Newest</option>
                                        <option value="50">A-Z</option>
                                        <option value="50">Z-A</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <Breadcrumb history={params.cat === undefined ? ['home', params.section] : ['home', params.section, params.cat]} />

                <div className='row text-center'>
                    <ProductFilter section={params.section} categories={params.section === 'mens' ? catList.filter((cat) => !womenCatOnly.includes(cat)) : catList.filter((cat) => !menCatOnly.includes(cat))} />
                    <div className='col-lg-10 col-12'>
                        <div className='row'>
                            {
                                list.map((item, index) =>
                                    <div className='product btn col-6 col-md-4 p-1' key={item.sku}>
                                        <a href={params.section} className='text-decoration-none text-black p-0'>
                                            <img src={item.img} alt={item.name} style={{ height: '50vh', objectFit: 'cover', width: '100%', mixBlendMode: "multiply" }}></img>
                                            <p className='m-0'>{item.name}</p>
                                            <p className='m-0'>${item.price}</p>
                                        </a>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
