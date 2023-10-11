import React from 'react'

export default function ShoeList({ shoes }) {
    return (
        <div className='row row-cols-2 row-cols-md-5'>
            {
                shoes.map(item => {
                    return (
                        <div className='col position-relative img-hover p-0' key={item.type + " " + item.name}>
                            <a href={item.link} style={{ width: '100%', height: '100%', color: 'black' }}>
                                <img style={{ objectFit: "contain", width: '100%', height: '95%', mixBlendMode: "multiply" }} src={item.img} alt={`Shoes - ${item.type} ${item.name}`.toLocaleUpperCase()} />
                                <div className='position-absolute start-50 translate-middle' style={{ top: "25%" }}>
                                    <p className='pt-2 p-0 m-0 text-uppercase'>{item.brand}</p>
                                    <p className='p-0 text-uppercase'>{item.type} <br/> {item.name}</p>
                                </div>
                            </a>
                        </div>
                    )
                })
            }
        </div>
    )
}
