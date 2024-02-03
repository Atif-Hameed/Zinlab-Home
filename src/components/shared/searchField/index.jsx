'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import SearchIcon from '/public/assets/search.svg'

const SearchField = () => {

    const [openBlur, setOpenBlur] = useState(false)

    const handleBlur = () => {
        setOpenBlur((prev) => !prev)
    }

    return (
        <div className='flex bg-primary rounded-full py-1.5'>

            <input type="text"
                className='h-12 w-[85%] bg-primary text-lg rounded-l-full outline-none pl-6 border-r-[1px] border-gray-200'
                placeholder='Search for Movies, TV Shows, Themes & Cast'
                name="" id=""
                onFocus={handleBlur}
            />

            {openBlur && <div className="fixed top-[4.6rem] inset-0 backdrop-filter transparent-balck backdrop-blur-sm z-10">
                <div className='absolute bg-white w-[40] h-60' >
                    <h1 className='text-secondary font-bold '>Trend</h1>
                    <dir>
                        <div>
                            <Image src={SearchIcon} className='w-9 h-9' alt='' />
                            <h1>casteway</h1>
                        </div>
                    </dir>
                </div>
            </div>}

            <div className='w-[15%] centered'>
                <Image src={SearchIcon} className='w-9 h-9' alt='' />
            </div>
        </div>
    )
}

export default SearchField
