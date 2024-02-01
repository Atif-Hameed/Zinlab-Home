import Image from 'next/image'
import React from 'react'
import ICON from '/public/assets/icon1.jpg'

const BrandLogo = () => {
    return (
        <div className='flex gap-1 items-center'>
            <Image src={ICON} className='sm:h-11 sm:w-11 h-9 w-9' alt='' />
            <h1 className='sm:text-2xl text-xl font-extrabold'>ZinTools</h1>
        </div>
    )
}

export default BrandLogo
