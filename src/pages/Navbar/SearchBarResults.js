import React from 'react'

export default function SearchBarResults({ items, flag }) {

const list = items === undefined ||items === null ? [] : items; 

  return (
    <div className={`'position-absolute list-group w-100 pt-2 suggestions ${flag ? 'hidden': ''}`}>
      {
        list.length > 0 ?
          list.map((item) => {
            return (
              <a className='d-flex justify-content-between list-group-item list-group-item-action' key={item.upc} href={`/shop/${item.upc}`}>
                <p className='m-0 p-0'>{item.productName}</p>
                <p className='m-0 p-0'>{item.upc}</p>
              </a>
            )
          }).slice(0,10)

          :

          <></>
      }
    </div>
  )
}
