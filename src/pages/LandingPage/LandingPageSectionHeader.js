import React from 'react'

export default function LandingPageSectionHeader({ title, subtitle, titleSide }) {
    return (
        <div className='col-12'>
            <div className='row'>
                <div className='col-12'>
                    <h5 className={`${'border-bottom border-black text-capitalize'} ${titleSide}`}>{title}.</h5>
                </div>

                <div className='col-12'>
                    <p className={`${'text-capitalize'} ${titleSide}`}>{subtitle}</p>
                </div>
            </div>
        </div>
    )
}
