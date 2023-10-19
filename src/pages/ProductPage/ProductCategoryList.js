import React from 'react'

export default function ProductCategoryList({ section, categories }) {
    return (
        <div>
            <h6 className='text-center border-bottom border-top border-black px-1 py-3 m-0'>Category</h6>

            <div className='border-bottom border-dark py-0'>
                <div className='d-flex flex-row flex-lg-column flex-wrap'>
                    {
                        categories.map((cat) =>
                            <a className='col-lg-12 col-6 btn btn-outline-dark border-0 my-1 py-2 px-3 text-center text-capitalize order-last'
                                href={cat === 'all' ? `/${section}` : `/${section}/${cat}`}
                                key={cat}>{cat}</a>
                        )
                    }
                </div>

            </div>
        </div>
    )
}
