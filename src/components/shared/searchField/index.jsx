'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import SearchIcon from '/public/assets/search.svg'
import hashIcon from '/public/assets/hash.png'
import Link from 'next/link'

const SearchField = () => {

    const [openBlur, setOpenBlur] = useState(false)

    const handleFocus = () => {
        setOpenBlur(true);
    };

    const handleBlur = () => {
        setOpenBlur(false);
    };

    const searchMenu = [
        { label: 'casteway', url: '/' },
        { label: 'War againt machines', url: '/' },
        { label: 'prophecy', url: '/' },
        { label: 'native american', url: '/' },
    ]

    return (
        <div className='flex bg-primary rounded-full py-1.5'>

            <input type="text"
                className='h-12 w-[85%] bg-primary text-lg rounded-l-full outline-none pl-6 border-r-[1px] border-gray-200'
                placeholder='Search for Movies, TV Shows, Themes & Cast'
                name="" id=""
                onFocus={handleFocus}
                onBlur={handleBlur}
            />

            {openBlur && <div className="fixed top-[5.3rem] inset-0 flex justify-center backdrop-filter transparent-balck backdrop-blur-sm z-10">
                <div className='absolute bg-white py-6 top-1 rounded-3xl w-[37rem] mr-5 px-10' >
                    <h1 className='text-secondary font-bold '>Trend</h1>
                    <div className='px-5 py-3 flex flex-col gap-5'>
                        {
                            searchMenu.map((item, index) => (
                                <Link href={'/'} key={index} className='flex gap-8 p-2 items-center rounded-lg hover:bg-primary'>
                                    <Image src={SearchIcon} className='w-9 h-9' alt='' />
                                    <h1 className='font-semibold' >{item.label}</h1>
                                </Link>
                            ))
                        }
                        <Link href={'/'} className='hover:bg-primary rounded-lg items-center p-2 flex gap-8'>
                            <Image src={hashIcon} className='w-9 h-9' alt='' />
                            <h1 className='font-semibold'>Show All Media</h1>
                        </Link>
                    </div>
                </div>
            </div>}

            <div className='w-[15%] centered'>
                <Image src={SearchIcon} className='w-9 h-9' alt='' />
            </div>
        </div>
    )
}

export default SearchField
