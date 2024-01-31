'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import SearchIcon from '/public/assets/search.svg'

const SearchField = () => {

    const [isSearchFocused, setIsSearchFocused] = useState(false)

    const handleSearchFocus = () => {
        setIsSearchFocused(true);
    };

    const handleSearchBlur = () => {
        setIsSearchFocused(false);
    };

    return (
        <div className='flex bg-primary rounded-full py-1.5'>

            <input type="text"
                className='h-12 w-[85%] bg-primary text-lg rounded-l-full outline-none pl-6 border-r-[1px] border-gray-200'
                placeholder='Search for Movies, TV Shows, Themes & Cast'
                name="" id=""
                onFocus={handleSearchFocus}
                onBlur={handleSearchBlur}
            />

            <div className='w-[15%] centered'>
                <Image src={SearchIcon} className='w-9 h-9' alt='' />
            </div>
        </div>
    )
}

export default SearchField
