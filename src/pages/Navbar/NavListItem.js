import React from 'react'
import SearchBar from './SearchBar';
import NavListItemContent from './NavListItemContent';

export default function NavListItem({ id, names, contentType, contentValue, icon, dropdownInfo }) {
    // const itemList = [{ id: 1, desc: "Air Max 1 Mica Green" }, { id: 2, desc: "Jordan 1 High Gore-Tex Bone" }]
    return (
        <>
            <li className={names + ' dropdown'}>
                {
                    contentType === 'searchbar' ?

                        <SearchBar/>
                        :
                        <>
                            <button
                                id={id}
                                type="button"
                                aria-expanded='false'
                                data-bs-toggle="dropdown"
                                className={icon === undefined ? 'p-2 btn btn-dark nav-link w-100 text-lg-center text-start' : 'p-2 btn btn-dark nav-link w-100 text-lg-center text-start ' + icon}
                            // data-bs-auto-close="outside"
                            >
                                {contentValue}
                            </button>
                            <NavListItemContent
                                id={dropdownInfo.id}
                                type={contentType}
                                section={dropdownInfo.section}
                                titleSection={{
                                    title: dropdownInfo.section,
                                    subTitle: dropdownInfo.subtitle,
                                    list: dropdownInfo.list
                                }}
                            />
                        </>
                }
            </li>


        </>
    )
}
