import React from 'react'
import NavListItem from './NavListItem';

export default function NavList({ id, order, section, categories }) {
    return (
        <>
            <ul className={
                id === 'search' ?
                'navbar-nav flex-column flex-lg-row flex-wrap align-items-lg-center flex-lg-fill ' + order
                :
                'navbar-nav flex-column flex-lg-row flex-wrap align-items-lg-center ' + order
            }>  
                {
                    section.map((item) => {
                        return (
                            <NavListItem
                                key={item.id}
                                id={item.id}
                                names={item.classes}
                                contentType={item.type}
                                contentValue={item.innerVal}
                                dropdownInfo={item.drop}
                                icon={item.icon}
                                categories={item.categories}
                            />
                        )
                    })
                }
            </ul>
        </>
    )

}

<>
    <NavListItem
        id="search"
        names={'nav-item flex-fill w-100'}
        contentType={'search'}
    />

    <NavListItem
        id={'cart'}
        names={'nav-item dropdown'}
        contentType={'button'}
        icon={'bi bi-cart'}
    />

    <NavListItem
        id={'profile'}
        names={'nav-item dropdown'}
        contentType={'button'}
        icon={"bi bi-person-circle"}
    />
</>