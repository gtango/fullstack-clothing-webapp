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
import wmnsAll from '../../assets/images/WOMENS_ALL.jpg'
import wmnsTops from '../../assets/images/WOMENS_TOPS.jpg'
import wmnsBottoms from '../../assets/images/WOMENS_BOTTOMS.jpg'
import wmnsShoes from '../../assets/images/WOMENS_SHOES.jpg'
import mensAll from '../../assets/images/MENS_ALL.jpg'
import mensTops from '../../assets/images/MENS_TOPS.jpg'
import mensBottoms from '../../assets/images/MENS_BOTTOMS.jpg'
import mensShoes from '../../assets/images/MENS_SHOES.jpg'
import MenWomenSection from './MenWomenSection'
import LandingPageSectionHeader from './LandingPageSectionHeader'
import ShoeList from './ShoeList'

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

                {/* Intro Text */}
                <div className='position-absolute start-50 top-50 translate-middle w-50 align-items-center text-white'>
                    <h1 className='p-2 start-50 top-50 w-100 bg-black text-uppercase'>
                        welcome <br /> to <br /> tango's shop

                    </h1>
                    <p className='bg-black p-1 mx-auto fs-6'
                        style={{ maxWidth: "fit-content" }}
                    >by tango</p>
                </div>

                {/* Content */}
                <div className='container-fluid' style={{ background: "#F5EEE4" }}>

                    {/* Sections */}
                    <div className='row justify-content-center align-items-center py-5'>

                        <LandingPageSectionHeader
                            title={'sections'}
                            subtitle={`welcome friend! here's the scoop`}
                            titleSide={'float-start'}
                        />

                        <div className='landingSectionItem h-100 col-lg-4 col-sm-6 col-12 px-2 pb-2 position-relative order-lg-1'>
                            <a href='/mens' style={{ width: '100%', height: '100%', color: 'black' }}>
                                <img className='border border-dark' style={{ objectFit: "contain", width: '100%', height: '95%' }} src={mensSection} alt='Section - Mens' />
                                <div className='position-absolute top-50 start-50 translate-middle'>
                                    <p className='bg-white p-2 fs-1 text-uppercase'>"mens"</p>
                                </div>
                            </a>
                        </div>

                        <div className='landingSectionItem h-100 col-lg-4 col-sm-6 col-12 px-2 pb-2 position-relative order-sm-last order-lg-2'>
                            <a href='\' style={{ width: '100%', height: '100%', color: 'black' }}>
                                <img className='border border-dark' style={{ objectFit: "contain", width: '100%', height: '95%' }} src={shoesSection} alt='Section - Womens' />
                                <div className='position-absolute top-50 start-50 translate-middle'>
                                    <p className='bg-white p-2 fs-1 text-uppercase'>"shoes"</p>
                                </div>
                            </a>
                        </div>

                        <div className='landingSectionItem h-100 col-lg-4 col-sm-6 col-12 px-2 position-relative order-lg-3'>
                            <a href='/womens' style={{ width: '100%', height: '100%', color: 'black' }}>
                                <img className='border border-dark' style={{ objectFit: "contain", width: '100%', height: '95%' }} src={wmnsSection} alt='Section - Womens' />
                                <div className='position-absolute top-50 start-50 translate-middle'>
                                    <p className='bg-white p-2 fs-1 text-uppercase'>"womens"</p>
                                </div>
                            </a>
                        </div>

                    </div>

                    {/* Shoes */}
                    <div className='row justify-content-center align-items-center py-5'>

                        <LandingPageSectionHeader
                            title={'shoes'}
                            subtitle={'we like shoes, you like shoes ... lets be friends'}
                            titleSide={'float-end'}
                        />

                        <ShoeList
                            shoes={[
                                { img: am1treeline, link: '/', brand: 'nike', type: 'air max 1', name: `treeline` },
                                { img: am1micagreen, link: '/', brand: 'nike', type: 'air max 1', name: `mica green` },
                                { img: am1aquanoise, link: '/', brand: 'nike', type: 'air max 1', name: `patta aqua noise` },
                                { img: am1waveswhite, link: '/', brand: 'nike', type: 'air max 1', name: `patta waves white` },
                                { img: am1sean, link: '/', brand: 'nike', type: 'air max 1', name: `sean witherspoon` },
                                { img: dunksbscott, link: '/', brand: 'nike', type: 'dunk low', name: `travis scott` },
                                { img: j4guave, link: '/', brand: 'air jordan', type: 'jordan 4 union', name: `guave` },
                                { img: j1dior, link: '/', brand: 'air jordan', type: 'jordan 1', name: `dior` },
                                { img: j4sb, link: '/', brand: 'air jordan', type: 'jordan 4 sb', name: 'pine green' },
                                { img: j1rabbitt, link: '/', brand: 'nike', type: 'dunk low', name: `year of rabbit` },
                            ]}
                        />

                        {/* <div className='row row-cols-2 row-cols-md-5'>
                            <div className='col position-relative img-hover p-0'>
                                <a href='\' style={{ width: '100%', height: '100%', color: 'black' }}>
                                    <img style={{ objectFit: "contain", width: '100%', height: '95%', mixBlendMode: "multiply" }} src={am1treeline} alt='Shoes - Air Max 1 Treeline' />
                                    <div className='position-absolute start-50 translate-middle' style={{ top: "25%" }}>
                                        <p className='pt-2 p-0 text-uppercase'>air max 1 <br /> treeline</p>
                                    </div>
                                </a>
                            </div>
                            <div className='col position-relative img-hover p-0'>
                                <a href='\' style={{ width: '100%', height: '100%', color: 'black' }}>
                                    <img style={{ objectFit: "contain", width: '100%', height: '95%', mixBlendMode: "multiply" }} src={am1micagreen} alt='Shoes - Air Max 1 Mica Green' />
                                    <div className='position-absolute start-50 translate-middle' style={{ top: "25%" }}>
                                        <p className='pt-2 p-0 text-uppercase'>air max 1 <br /> mica green</p>
                                    </div>
                                </a>
                            </div>
                            <div className='col position-relative img-hover p-0'>
                                <a href='\' style={{ width: '100%', height: '100%', color: 'black' }}>
                                    <img style={{ objectFit: "contain", width: '100%', height: '95%', mixBlendMode: "multiply" }} src={am1aquanoise} alt='Shoes - Air Max 1 Aqua Noise' />
                                    <div className='position-absolute start-50 translate-middle' style={{ top: "25%" }}>
                                        <p className='pt-2 p-0 text-uppercase'>air max 1 <br /> patta aqua noise</p>
                                    </div>
                                </a>
                            </div>
                            <div className='col position-relative img-hover p-0'>
                                <a href='\' style={{ width: '100%', height: '100%', color: 'black' }}>
                                    <img style={{ objectFit: "contain", width: '100%', height: '95%', mixBlendMode: "multiply" }} src={am1waveswhite} alt='Shoes - Air Max 1 Waves White' />
                                    <div className='position-absolute start-50 translate-middle' style={{ top: "25%" }}>
                                        <p className='pt-2 p-0 text-uppercase'>air max 1 <br /> patta waves white</p>
                                    </div>
                                </a>
                            </div>
                            <div className='col position-relative img-hover p-0'>
                                <a href='\' style={{ width: '100%', height: '100%', color: 'black' }}>
                                    <img style={{ objectFit: "contain", width: '100%', height: '95%', mixBlendMode: "multiply" }} src={am1sean} alt='Shoes - Air Max 1 Sean Witherspoons' />
                                    <div className='position-absolute start-50 translate-middle' style={{ top: "25%" }}>
                                        <p className='pt-2 p-0 text-uppercase'>air max 1 <br /> sean witherspoon</p>
                                    </div>
                                </a>
                            </div>
                            <div className='col position-relative img-hover p-0'>
                                <a href='\' style={{ width: '100%', height: '100%', color: 'black' }}>
                                    <img style={{ objectFit: "contain", width: '100%', height: '95%', mixBlendMode: "multiply" }} src={dunksbscott} alt='Shoes - Nike Dunk Low SB Travis Scott' />
                                    <div className='position-absolute start-50 translate-middle' style={{ top: "25%" }}>
                                        <p className='pt-2 p-0 text-uppercase'>nike dunk low <br /> travis scott</p>
                                    </div>
                                </a>
                            </div>
                            <div className='col position-relative img-hover p-0'>
                                <a href='\' style={{ width: '100%', height: '100%', color: 'black' }}>
                                    <img style={{ objectFit: "contain", width: '100%', height: '95%', mixBlendMode: "multiply" }} src={j4guave} alt='Shoes - Jordan 4 Union Guave' />
                                    <div className='position-absolute start-50 translate-middle' style={{ top: "25%" }}>
                                        <p className='pt-2 p-0 text-uppercase'>jordan 4 Union <br /> guave</p>
                                    </div>
                                </a>
                            </div>
                            <div className='col position-relative img-hover p-0'>
                                <a href='\' style={{ width: '100%', height: '100%', color: 'black' }}>
                                    <img style={{ objectFit: "contain", width: '100%', height: '95%', mixBlendMode: "multiply" }} src={j1dior} alt='Shoes - Jordan 1 Dior' />
                                    <div className='position-absolute start-50 translate-middle' style={{ top: "25%" }}>
                                        <p className='pt-2 p-0 text-uppercase'>jordan 1 <br /> dior </p>
                                    </div>
                                </a>
                            </div>
                            <div className='col position-relative img-hover p-0'>
                                <a href='\' style={{ width: '100%', height: '100%', color: 'black' }}>
                                    <img style={{ objectFit: "contain", width: '100%', height: '95%', mixBlendMode: "multiply" }} src={j4sb} alt='Shoes - Jordan 4 SB' />
                                    <div className='position-absolute start-50 translate-middle' style={{ top: "25%" }}>
                                        <p className='pt-2 p-0 text-uppercase'>jordan 4 sb</p>
                                    </div>
                                </a>
                            </div>
                            <div className='col position-relative img-hover p-0'>
                                <a href='\' style={{ width: '100%', height: '100%', color: 'black' }}>
                                    <img style={{ objectFit: "contain", width: '100%', height: '95%', mixBlendMode: "multiply" }} src={j1rabbitt} alt='Shoes - Jordan 1 Retro Low Year Of The Rabbit' />
                                    <div className='position-absolute start-50 translate-middle' style={{ top: "25%" }}>
                                        <p className='pt-2 p-0 text-uppercase'>nike dunk low <br /> year of rabbit</p>
                                    </div>
                                </a>
                            </div>
                        </div> */}
                    </div>

                    {/* Mens */}
                    <MenWomenSection
                        title={'Mens'}
                        titleSide={'float-start'}
                        subtitle={'lets be real ... grab the one shirt and go'}
                        sectionItems={{
                            all: { content: 'shop all', img: mensAll, altText: 'Shop All' },
                            tops: { content: 'tops', img: mensTops, altText: 'Shop Tops' },
                            bottoms: { content: 'bottoms', img: mensBottoms, altText: 'Shop Bottoms' },
                            shoes: { content: 'shoes', img: mensShoes, altText: 'Shop Shoes' }
                        }}
                    />

                    {/* Womens */}
                    <MenWomenSection
                        title={'Womens'}
                        titleSide={'float-end'}
                        subtitle={'its always hot girl summer'}
                        sectionItems={{
                            all: { content: 'shop all', img: wmnsAll, altText: 'Shop All' },
                            tops: { content: 'tops', img: wmnsTops, altText: 'Shop Tops' },
                            bottoms: { content: 'bottoms', img: wmnsBottoms, altText: 'Shop Bottoms' },
                            shoes: { content: 'shoes', img: wmnsShoes, altText: 'Shop Shoes' }
                        }}
                    />

                    {/* Contact */}
                    <div className='row justify-content-center border border-dark bg-dark text-white p-5'>

                        <div className='col-12'>
                            <h4 className='text-center text-capitalize pb-3'><u>call me beep me</u></h4>

                            <div className='row text-start'>
                                <div className='col-12 col-md-6'>

                                    <h6 className='text-capitalize'>wanna join the club?!</h6>
                                    <p>
                                        Stay up to-date with all of the moves we're making by joining our mailing list or just message us.
                                        <br />
                                        Signing up indicates you agree with our <u>Terms And Services</u>.
                                    </p>

                                </div>
                                <div className='col-12 col-md-6'>

                                    <h6>Enter Your Email</h6>
                                    <form className='w-100' action='https://formsubmit.co/ef7152db6dc584f18f44a0461ba13958' method='POST'>
                                        <input type='email' name='email' className='form-control' placeholder='your@email.com'></input>
                                        <input type='hidden' name='_next'></input>
                                    </form>

                                </div>
                            </div>
                        </div>

                        <div className='col-12 mt-3 text-start'>
                            <h6>Need to reach us?</h6>

                            <div className='row'>
                                <div className='col-12 col-md-6 col-lg'>
                                    <p className='p-0'>Phone Number <i className="bi bi-arrow-right-short m-0 p-0"></i> (123)456-7890</p>
                                </div>
                                <div className='col-12 col-md-6 col-lg'>
                                    <p className='p-0'>Email <i className="bi bi-arrow-right-short m-0 p-0"></i> gavriltango99291@gmail.com</p>
                                </div>
                                <div className='col-12 col-md-6 col-lg'>
                                    <p className='p-0'>Social Media <i className="bi bi-arrow-right-short m-0 p-0"></i> @gavril.tango</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
