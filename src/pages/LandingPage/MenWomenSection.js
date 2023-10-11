import React from 'react'
import LandingPageSectionHeader from './LandingPageSectionHeader';

export default function MenWomenSection({ title, titleSide, subtitle, sectionItems }) {

    const sectionHref = title.toLocaleLowerCase();

    return (
        <div className='row justify-content-center align-items-center py-5'>

            <LandingPageSectionHeader
                title={title}
                subtitle={subtitle}
                titleSide={titleSide}
            />

            <div className='row row-cols-2'>
                <div className='col-12 p-0 m-0 w-100 position-relative border border-bottom-0 border-dark' style={{ height: '33vh', whiteSpace: "nowrap" }}>
                    <a href={sectionHref} style={{ width: '100%', height: '100%', color: 'black' }}>
                        <img src={sectionItems.all.img} alt={`${sectionItems.all.altText} ${title}`} style={{ objectFit: "cover", width: '100%', height: '100%', mixBlendMode: "multiply", objectPosition: '50% 5%' }} />
                        <div className='position-absolute top-50 start-50 translate-middle landingSectionWomens' style={{ color: '#F5EEE4', fontSize: '5vw' }}>
                            <p className='p-0 m-0 text-uppercase fw-bold' >{sectionItems.all.content}</p>
                            <i className="bi bi-arrow-right"></i>
                        </div>
                    </a>
                </div>

                <div className='col p-0 m-0 position-relative border border-end-0 border-dark' style={{ minHeight: '15vh' }}>
                    <a href={`${sectionHref}/tops`} style={{ width: '100%', height: '100%', color: 'black' }}>
                        <img src={sectionItems.tops.img} alt={`${sectionItems.tops.altText} ${title}`} style={{ objectFit: "cover", width: '100%', height: '100%', mixBlendMode: "multiply", objectPosition: '50% 5%' }} />
                        <div className='position-absolute top-50 start-50 translate-middle landingSectionWomens' style={{ color: '#F5EEE4', fontSize: '5vw' }}>
                            <p className='p-0 m-0 text-uppercase fw-bold' >{sectionItems.tops.content}</p>
                            <i className="bi bi-arrow-right"></i>
                        </div>
                    </a>
                </div>

                <div className='col p-0 m-0 position-relative border border-end-0 border-dark' style={{ minHeight: '15vh' }}>
                    <a href={`${sectionHref}/bottoms`} style={{ width: '100%', height: '100%', color: 'black' }}>
                        <img src={sectionItems.bottoms.img} alt={`${sectionItems.bottoms.altText} ${title}`} style={{ objectFit: "cover", width: '100%', height: '100%', mixBlendMode: "multiply", objectPosition: '50% 5%' }} />
                        <div className='position-absolute top-50 start-50 translate-middle landingSectionWomens' style={{ color: '#F5EEE4', fontSize: '5vw' }}>
                            <p className='p-0 m-0 text-uppercase fw-bold' >{sectionItems.bottoms.content}</p>
                            <i className="bi bi-arrow-right"></i>
                        </div>
                    </a>
                </div>

                <div className='col-12 p-0 m-0 w-100 position-relative border border-top-0 border-dark' style={{ height: '33vh' }}>
                    <a href={sectionHref} style={{ width: '100%', height: '100%', color: 'black' }}>
                        <img src={sectionItems.shoes.img} alt={`${sectionItems.shoes.altText} ${title}`} style={{ objectFit: "cover", width: '100%', height: '100%', mixBlendMode: "multiply", objectPosition: '50% 5%' }} />
                        <div className='position-absolute top-50 start-50 translate-middle landingSectionWomens' style={{ color: '#F5EEE4', fontSize: '5vw' }}>
                            <p className='p-0 m-0 text-uppercase fw-bold' >{sectionItems.shoes.content}</p>
                            <i className="bi bi-arrow-right"></i>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
