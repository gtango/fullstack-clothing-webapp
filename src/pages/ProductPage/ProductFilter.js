import React from 'react'
import ProductCategoryList from './ProductCategoryList'

export default function ProductFilter({ section, categories }) {
    return (
        <div className='col-2 d-none d-lg-block'>
            <ProductCategoryList section={section} categories={categories}/>

            <h6 className='text-center border-bottom border-black px-1 py-3 m-0'>Filter By</h6>

            <div className='border-bottom border-dark py-0 px-1'>
                <a className='btn w-100 d-flex justify-content-between my-1 px-3 py-2'
                    data-bs-toggle='collapse'
                    href='#brandCollapse'
                    role='button'
                    aria-expanded='false'
                    aria-controls='brandCollapse'
                    onClick={() => console.log("brand filter")}
                >
                    <p className='m-0 p-0 text-capitalize'>Brand</p>
                    <p className='m-0 p-0'>+</p>
                </a>
                <div className='collapse' id='brandCollapse'>
                    <div className='d-flex flex-column'>
                        <button className='btn btn-outline-dark my-1 py-2 px-3 text-start order-last' type='button' aria-pressed='false' onClick={() => console.log("filter press")} id='brand-Nike'>Nike</button>
                        <button className='btn btn-outline-dark my-1 py-2 px-3 text-start order-last' type='button' aria-pressed='false' onClick={() => console.log("filter press")} id='brand-Adidas'>Adidas</button>
                        <button className='btn btn-outline-dark my-1 py-2 px-3 text-start order-last' type='button' aria-pressed='false' onClick={() => console.log("filter press")} id='brand-UnderArmour'>Under Armour</button>
                        <button className='btn btn-outline-dark my-1 py-2 px-3 text-start order-last' type='button' aria-pressed='false' onClick={() => console.log("filter press")} id='brand-Vans'>Vans</button>
                        <button className='btn btn-outline-dark my-1 py-2 px-3 text-start order-last' type='button' aria-pressed='false' onClick={() => console.log("filter press")} id='brand-Supreme'>Supreme</button>
                        <button className='btn btn-outline-dark my-1 py-2 px-3 text-start order-last' type='button' aria-pressed='false' onClick={() => console.log("filter press")} id='brand-Crocs'>Crocs</button>
                        <button className='btn btn-outline-dark my-1 py-2 px-3 text-start order-last' type='button' aria-pressed='false' onClick={() => console.log("filter press")} id='brand-NewBalance'>NewBalance</button>
                        <button className='btn btn-outline-dark my-1 py-2 px-3 text-start order-last' type='button' aria-pressed='false' onClick={() => console.log("filter press")} id='brand-AirJordan'>Air Jordan</button>
                    </div>
                </div>
            </div>

            <div className='border-bottom border-dark py-0 px-1'>
                <a className='btn w-100 d-flex justify-content-between my-1 px-3 py-2'
                    data-bs-toggle='collapse'
                    href='#sizeCollapse'
                    role='button'
                    aria-expanded='false'
                    aria-controls='sizeCollapse'
                    onClick={() => console.log("size filter")}
                >
                    <p className='m-0 p-0 text-capitalize'>Size</p>
                    <p className='m-0 p-0'>+</p>
                </a>
                <div className='collapse p-2 ' id='sizeCollapse'>
                    <div className='d-flex flex-wrap justify-content-evenly'>
                        <p className='col-12 text-center m-0 pb-2 pb-xl-1'>Shirt Size</p>
                        <div className='row px-2 justify-content-evenly text-center'>
                            <button className='col btn btn-outline-dark text-center order-last' type='button' aria-pressed='false' onClick={() => console.log("filter press")} id='size-small'>S</button>
                            <button className='col btn btn-outline-dark text-center order-last' type='button' aria-pressed='false' onClick={() => console.log("filter press")} id='size-medium'>M</button>
                            <button className='col btn btn-outline-dark text-center order-last' type='button' aria-pressed='false' onClick={() => console.log("filter press")} id='size-large'>L</button>
                            <button className='col btn btn-outline-dark text-center order-last' type='button' aria-pressed='false' onClick={() => console.log("filter press")} id='size-extralarge'>XL</button>
                            <button className='col btn btn-outline-dark text-center order-last' type='button' aria-pressed='false' onClick={() => console.log("filter press")} id='size-doublelarge'>XXL</button>
                        </div>
                    </div>
                    <div className='d-flex flex-wrap justify-content-evenly'>
                        <p className='col-12 text-center m-0 pb-2 pb-xl-1'>Shoe Size</p>
                        <div className='row row-cols-2 px-2 justify-content-evenly text-center'>
                            <button className='col btn btn-outline-dark text-center order-last' type='button' aria-pressed='false' onClick={() => console.log("filter press")} id='size-7'>7</button>
                            <button className='col btn btn-outline-dark text-center order-last' type='button' aria-pressed='false' onClick={() => console.log("filter press")} id='size-7.5'>7.5</button>
                            <button className='col btn btn-outline-dark text-center order-last' type='button' aria-pressed='false' onClick={() => console.log("filter press")} id='size-8'>8</button>
                            <button className='col btn btn-outline-dark text-center order-last' type='button' aria-pressed='false' onClick={() => console.log("filter press")} id='size-8.5'>8.5</button>
                            <button className='col btn btn-outline-dark text-center order-last' type='button' aria-pressed='false' onClick={() => console.log("filter press")} id='size-9'>9</button>
                            <button className='col btn btn-outline-dark text-center order-last' type='button' aria-pressed='false' onClick={() => console.log("filter press")} id='size-9.5'>9.5</button>
                            <button className='col btn btn-outline-dark text-center order-last' type='button' aria-pressed='false' onClick={() => console.log("filter press")} id='size-10'>10</button>
                            <button className='col btn btn-outline-dark text-center order-last' type='button' aria-pressed='false' onClick={() => console.log("filter press")} id='size-10.5'>10.5</button>
                            <button className='col btn btn-outline-dark text-center order-last' type='button' aria-pressed='false' onClick={() => console.log("filter press")} id='size-11'>11</button>
                            <button className='col btn btn-outline-dark text-center order-last' type='button' aria-pressed='false' onClick={() => console.log("filter press")} id='size-11.5'>11.5</button>
                            <button className='col btn btn-outline-dark text-center order-last' type='button' aria-pressed='false' onClick={() => console.log("filter press")} id='size-12'>12</button>
                            <button className='col btn btn-outline-dark text-center order-last' type='button' aria-pressed='false' onClick={() => console.log("filter press")} id='size-12.5'>12.5</button>
                            <button className='col btn btn-outline-dark text-center order-last' type='button' aria-pressed='false' onClick={() => console.log("filter press")} id='size-13'>13</button>
                            <button className='col btn btn-outline-dark text-center order-last' type='button' aria-pressed='false' onClick={() => console.log("filter press")} id='size-13.5'>13.5</button>
                            <button className='col btn btn-outline-dark text-center order-last' type='button' aria-pressed='false' onClick={() => console.log("filter press")} id='size-14'>14</button>
                            <button className='col btn btn-outline-dark text-center order-last' type='button' aria-pressed='false' onClick={() => console.log("filter press")} id='size-14.5'>14.5</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='border-bottom border-dark py-0 px-1'>
                <a className='btn w-100 d-flex justify-content-between my-1 px-3 py-2'
                    data-bs-toggle='collapse'
                    href='#colorCollapse'
                    role='button'
                    aria-expanded='false'
                    aria-controls='colorCollapse'
                    onClick={() => console.log("color filter")}
                >
                    <p className='m-0 p-0 text-capitalize'>Color</p>
                    <p className='m-0 p-0'>+</p>
                </a>
                <div className='collapse' id='colorCollapse'>
                    <div className='d-flex flex-column'>
                        <button className='btn btn-outline-dark bg-white my-1 py-2 px-3 text-start order-last text-dark' type='button' aria-pressed='false' onClick={() => console.log("filter press")} id='color-White'>White</button>
                        <button className='btn btn-outline-dark bg-black my-1 py-2 px-3 text-start order-last' type='button' aria-pressed='false' onClick={() => console.log("filter press")} id='color-Black'>Black</button>
                        <button className='btn btn-outline-dark bg-danger my-1 py-2 px-3 text-start order-last' type='button' aria-pressed='false' onClick={() => console.log("filter press")} id='color-Red'>Red</button>
                        <button className='btn btn-outline-dark bg-success my-1 py-2 px-3 text-start order-last' type='button' aria-pressed='false' onClick={() => console.log("filter press")} id='color-Green'>Green</button>
                        <button className='btn btn-outline-dark bg-primary my-1 py-2 px-3 text-start order-last' type='button' aria-pressed='false' onClick={() => console.log("filter press")} id='color-Blue'>Blue</button>
                        <button className='btn btn-outline-dark bg-warning my-1 py-2 px-3 text-start order-last' type='button' aria-pressed='false' onClick={() => console.log("filter press")} id='color-Yellow'>Yellow</button>
                        <button className='btn btn-outline-dark bg-warning my-1 py-2 px-3 text-start order-last' type='button' aria-pressed='false' onClick={() => console.log("filter press")} style={{ backgroundImage: "linear-gradient(to right, red,orange,yellow,green,blue,indigo)" }} id='color-Multi'>Multi</button>
                    </div>
                </div>
            </div>

            <div className='border-bottom border-dark py-0 px-1'>
                <a className='btn w-100 d-flex justify-content-between my-1 px-3 py-2'
                    data-bs-toggle='collapse'
                    href='#priceCollapse'
                    role='button'
                    aria-expanded='false'
                    aria-controls='priceCollapse'
                    onClick={() => console.log("price filter")}
                >
                    <p className='m-0 p-0 text-capitalize'>Price</p>
                    <p className='m-0 p-0'>+</p>
                </a>
                <div className='collapse' id='priceCollapse'>
                    <div className='d-flex flex-column'>
                        <button className='btn btn-outline-dark my-1 py-2 px-3 text-start order-last' type='button' aria-pressed='false' onClick={() => console.log("filter press")} id='price-0-25'>$0-$25</button>
                        <button className='btn btn-outline-dark my-1 py-2 px-3 text-start order-last' type='button' aria-pressed='false' onClick={() => console.log("filter press")} id='price-25-50'>$25-$50</button>
                        <button className='btn btn-outline-dark my-1 py-2 px-3 text-start order-last' type='button' aria-pressed='false' onClick={() => console.log("filter press")} id='price-50-100'>$50-$100</button>
                        <button className='btn btn-outline-dark my-1 py-2 px-3 text-start order-last' type='button' aria-pressed='false' onClick={() => console.log("filter press")} id='price-100-200'>$100-$200</button>
                        <button className='btn btn-outline-dark my-1 py-2 px-3 text-start order-last' type='button' aria-pressed='false' onClick={() => console.log("filter press")} id='price-200-500'>$200-$500</button>
                        <button className='btn btn-outline-dark my-1 py-2 px-3 text-start order-last' type='button' aria-pressed='false' onClick={() => console.log("filter press")} id='price-1000'>$ Tax Refund Type</button>
                    </div>
                </div>
            </div>

            <div className='border-bottom border-dark py-0 px-1'>
                <a className='btn w-100 d-flex justify-content-between my-1 px-3 py-2'
                    data-bs-toggle='collapse'
                    href='#availableCollapse'
                    role='button'
                    aria-expanded='false'
                    aria-controls='availableCollapse'
                    onClick={() => console.log("available filter")}
                >
                    <p className='m-0 p-0 text-capitalize'>avaliability</p>
                    <p className='m-0 p-0'>+</p>
                </a>
                <div className='collapse' id='availableCollapse'>
                    <div className='d-flex flex-column'>
                        <button className='btn btn-outline-dark my-1 py-2 px-3 text-start order-last' type='button' aria-pressed='false' onClick={() => console.log("filter press")} id='available-yes'>In-Stock</button>
                        <button className='btn btn-outline-dark my-1 py-2 px-3 text-start order-last' type='button' aria-pressed='false' onClick={() => console.log("filter press")} id='available-no'>Out-of-Stock</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
