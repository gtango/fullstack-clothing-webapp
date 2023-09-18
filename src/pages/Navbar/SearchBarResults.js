import React from 'react'

export default function SearchBarResults({ items, flag }) {

const list = items === undefined ||items === null ? [] : items; 

  return (
    <div className={`'position-absolute list-group w-100 pt-2 suggestions ${flag ? 'hidden': ''}`}>
      {
        list.length > 0 ?
          list.map((item) => {
            return (
              <a className='list-group-item list-group-item-action' key={item.title} href={item.images[0]}>{item.title} {item.id}</a>
            )
          }).slice(0,10)

          :

          <></>
      }
    </div>
  )
}
