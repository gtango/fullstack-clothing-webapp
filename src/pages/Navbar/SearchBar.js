import React, { useState, useEffect } from 'react';
import SearchBarResults from './SearchBarResults';
import axios from 'axios';

export default function SearchBar() {

    const [value, setValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [hideSuggestions, setHideSuggestions] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(
                    `https://dummyjson.com/products/search?q=${value}`
                );

                setSuggestions(data.products);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [value]);

    return (
        <>
            <form className='d-flex flex-column position-relative bg-white rounded-3 mx-2'>
                <div className='input-group'>
                    <button type='button' className="bi bi-search btn btn-light border text-dark"></button>

                    <input
                        id='searchbar'
                        className='form-control border-0'
                        placeholder='Search'
                        aria-label='Searchbar'
                        type='search'
                        onChange={(e) => {
                            setValue(e.target.value);
                        }}
                        value={value}
                        onFocus={() => setHideSuggestions(false)}
                        onBlur={async () => {
                            setTimeout(() => {
                                setHideSuggestions(true);
                            }, 200);
                        }}
                    />

                </div>
            </form>

            <SearchBarResults items={suggestions} flag={hideSuggestions} />
        </>
    )
}
