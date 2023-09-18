import React from 'react'
import j4sb from '../../assets/images/J4_SB.jpg'
import j1dior from '../../assets/images/J1_DIOR.jpg'
import j4guave from '../../assets/images/J4_UNIONGUAVE.jpg'
import am1treeline from '../../assets/images/AM1_TREELINE.jpg'
import am1micagreen from '../../assets/images/AM1_MICAGREEN.jpg'
import am1aquanoise from '../../assets/images/AM1_AQUANOISE.jpg'
import am1sean from '../../assets/images/AM1_SEANWITHERSPOON.jpg'
import am1waveswhite from '../../assets/images/AM1_WAVESWHITE.jpg'
import j1rabbitt from '../../assets/images/J1LOW_YEAROFRABBIT.jpg'
import dunksbscott from '../../assets/images/DUNKSB_TRAVISSCOTT.jpg'
import shoewall from '../../assets/images/shoewall.jpg'
import smwall from '../../assets/images/main_smallscreens.jpg'
import mensSection from '../../assets/images/landingMenSection.jpg'
import wmnsSection from '../../assets/images/landingWomenSection.jpg'
import shoesSection from '../../assets/images/landingShoeSection.jpg'

export default function LandingPage() {
    return (
        <>
            <div className='m-0 p-0 text-center min-vh-100'>
                <img
                    src={shoewall}
                    alt="background large screens"
                    className='img-fluid d-none d-md-block'
                    style={{ objectFit: "cover", objectPosition: "50% 75%", minHeight: "100vh", maxHeight: "100%", width: "100%" }}
                />

                <img
                    src={smwall}
                    alt="background small screens"
                    className='img-fluid d-md-none d-block'
                    style={{ objectFit: "cover", minHeight: "95vh", maxHeight: "100vh", width: "100%" }}
                />

                <div className='position-absolute start-50 top-50 translate-middle w-50 align-items-center text-white'>
                    <h1 className='p-2 start-50 top-50 w-100 bg-black text-uppercase'>
                        welcome <br /> to <br /> tango's shop

                    </h1>
                    <p className='bg-black p-1 mx-auto fs-6'
                        style={{ maxWidth: "fit-content" }}
                    >by tango</p>
                </div>

                <div className='container-fluid' style={{ background: "#F5EEE4" }}>

                    <div className='row justify-content-center align-items-center py-5'>
                        <div className='col-12'>
                            <h5 className='float-end border-bottom border-black text-capitalize'>sections.</h5>
                        </div>

                        <div className='col-12'>
                            <p className='float-end p-0 m-0 text-capitalize'>welcome friend! here's the scoop</p>
                        </div>

                        <div className='landingSectionItem h-100 col-lg-4 col-sm-6 col-12 p-2 position-relative order-lg-1'>
                            <a href='\' style={{ width: '100%', height: '100%' }}>
                                <img style={{ objectFit: "contain", width: '100%', height: '95%' }} src={wmnsSection} alt='Section - Womens' />
                                <div className='position-absolute top-50 start-50 translate-middle'>
                                    <p className='bg-white p-2 fs-1 text-uppercase'>"womens"</p>
                                </div>
                            </a>
                        </div>

                        <div className='landingSectionItem h-100 col-lg-4 col-sm-6 col-12 p-2 position-relative order-md-last order-lg-2'>
                            <a href='\' style={{ width: '100%', height: '100%' }}>
                                <img style={{ objectFit: "contain", width: '100%', height: '95%' }} src={shoesSection} alt='Section - Womens' />
                                <div className='position-absolute top-50 start-50 translate-middle'>
                                    <p className='bg-white p-2 fs-1 text-uppercase'>"shoes"</p>
                                </div>
                            </a>
                        </div>

                        <div className='landingSectionItem h-100 col-lg-4 col-sm-6 col-12 p-2 position-relative order-lg-3'>
                            <a href='\' style={{ width: '100%', height: '100%' }}>
                                <img style={{ objectFit: "contain", width: '100%', height: '95%' }} src={mensSection} alt='Section - Mens' />
                                <div className='position-absolute top-50 start-50 translate-middle'>
                                    <p className='bg-white p-2 fs-1 text-uppercase'>"mens"</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className='row justify-content-center align-items-center py-5'>
                        <div className='col-12'>
                            <h5 className='float-start border-bottom border-black text-capitalize'>shoes.</h5>
                        </div>

                        <div className='col-12'>
                            <p className='float-start p-0 text-capitalize'>we like shoes, you like shoes...we should be friends</p>
                        </div>

                        <div className='row row-cols-2 row-cols-md-5'>
                            <div className='col'>
                                <a href='\' style={{ width: '100%', height: '100%' }}>
                                    <img style={{ objectFit: "contain", width: '100%', height: '95%' }} src={am1treeline} alt='Shoes - Air Max 1 Treeline' />
                                </a>
                            </div>
                            <div className='col'>
                                <a href='\' style={{ width: '100%', height: '100%' }}>
                                    <img style={{ objectFit: "contain", width: '100%', height: '95%' }} src={am1micagreen} alt='Shoes - Air Max 1 Mica Green' />
                                </a>
                            </div>
                            <div className='col'>
                                <a href='\' style={{ width: '100%', height: '100%' }}>
                                    <img style={{ objectFit: "contain", width: '100%', height: '95%' }} src={am1aquanoise} alt='Shoes - Air Max 1 Aqua Noise' />
                                </a>
                            </div>
                            <div className='col'>
                                <a href='\' style={{ width: '100%', height: '100%' }}>
                                    <img style={{ objectFit: "contain", width: '100%', height: '95%' }} src={am1waveswhite} alt='Shoes - Air Max 1 Waves White' />
                                </a>
                            </div>
                            <div className='col'>
                                <a href='\' style={{ width: '100%', height: '100%' }}>
                                    <img style={{ objectFit: "contain", width: '100%', height: '95%' }} src={am1sean} alt='Shoes - Air Max 1 Sean Witherspoons' />
                                </a>
                            </div>
                            <div className='col'>
                                <a href='\' style={{ width: '100%', height: '100%' }}>
                                    <img style={{ objectFit: "contain", width: '100%', height: '95%' }} src={dunksbscott} alt='Shoes - Nike Dunk Low SB Travis Scott' />
                                </a>
                            </div>
                            <div className='col'>
                                <a href='\' style={{ width: '100%', height: '100%' }}>
                                    <img style={{ objectFit: "contain", width: '100%', height: '95%' }} src={j4guave} alt='Shoes - Jordan 4 Union Guave' />
                                </a>
                            </div>
                            <div className='col'>
                                <a href='\' style={{ width: '100%', height: '100%' }}>
                                    <img style={{ objectFit: "contain", width: '100%', height: '95%' }} src={j1dior} alt='Shoes - Jordan 1 Dior' />
                                </a>
                            </div>
                            <div className='col'>
                                <a href='\' style={{ width: '100%', height: '100%' }}>
                                    <img style={{ objectFit: "contain", width: '100%', height: '95%' }} src={j4sb} alt='Shoes - Jordan 4 SB' />
                                </a>
                            </div>
                            <div className='col'>
                                <a href='\' style={{ width: '100%', height: '100%' }}>
                                    <img style={{ objectFit: "contain", width: '100%', height: '95%' }} src={j1rabbitt} alt='Shoes - Jordan 1 Retro Low Year Of The Rabbit' />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
