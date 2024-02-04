import React from 'react'
import Youtube from '/public/assets/youtube.svg'
import Twitter from '/public/assets/twiter.svg'
import Facebook from '/public/assets/facebook.svg'
import Image from 'next/image'
import Moon from '/public/assets/moon.png'
import Link from 'next/link'
import { EnterPrise, InternalLinks } from '@/components/shared/footerComponents/Content'
import BrandLogo from '@/components/shared/common/BrandLogo'



const Footer = () => {

    return (
        <>
            <div className='bg-[#f1f3f4] py-12 px-6'>
                <div className='flex gap-8 items-center flex-wrap'>
                    <h1 className='text-xl font-semibold'>Follow Us</h1>
                    <Image alt='' src={Youtube} className='w-7 h-7' />
                    <Image alt='' src={Twitter} className='w-7 h-7' />
                    <Image alt='' src={Facebook} className='w-7 h-7' />
                </div>
                <div className='h-[1px] w-full my-10 bg-gray-300' ></div>
                <div className='grid xl:grid-cols-5 xl:gap-y-0 gap-y-12 lg:grid-cols-4 md:grid-cols-3 grid-cols-1' >
                    <InternalLinks />
                    <EnterPrise />
                    <InternalLinks />
                    <EnterPrise />
                    <InternalLinks />
                </div>
                <div className='h-[1px] w-full my-10 bg-gray-300' ></div>
                <div className='flex justify-between items-center w-full flex-wrap'>
                    <div className='flex xl:gap-12 lg:gap-8 gap-6  items-center flex-wrap'>
                        <BrandLogo />
                        <div className='flex xl:gap-8 gap-6 flex-wrap'>
                            <Link href='/' className='text-darkGray text-lg'>Privacy Policy</Link>
                            <Link href='/' className='text-darkGray text-lg'>Terms and conditions</Link>
                            <Link href='/' className='text-darkGray text-lg'>Cookies Policy</Link>
                            <Link href='/' className='text-darkGray text-lg'>About us</Link>
                            <Link href='/' className='text-darkGray text-lg'>EULA</Link>
                            <Link href='/' className='text-darkGray text-lg'>Contact</Link>
                        </div>
                    </div>
                    <div className='p-3 rounded-full bg-secondary lg:mt-0 mt-3'>
                        <Image alt='' src={Moon} className='h-8 w-8' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
