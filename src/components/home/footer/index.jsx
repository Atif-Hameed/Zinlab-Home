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

    const Links = [
        { label: 'Privacy Policy', url: '/' },
        { label: 'Terms and conditions', url: '/' },
        { label: 'Cookies Policy', url: '/' },
        { label: 'About us', url: '/' },
        { label: 'EULA', url: '/' },
        { label: 'Contact', url: '/' },
    ]

    return (
        <>
            <div className='bg-[#f1f3f4] md:py-12 py-8 sm:px-6 px-4'>
                <div className='flex gap-8 items-center flex-wrap'>
                    <h1 className='text-xl font-semibold'>Follow Us</h1>
                    <Image alt='' src={Youtube} className='w-7 h-7' />
                    <Image alt='' src={Twitter} className='w-7 h-7' />
                    <Image alt='' src={Facebook} className='w-7 h-7' />
                </div>
                <div className='h-[1px] w-full md:my-10 my-6 bg-gray-300' ></div>
                <div className='grid xl:grid-cols-5 xl:gap-y-0 md:gap-y-12 gap-y-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-1' >
                    <InternalLinks />
                    <EnterPrise />
                    <InternalLinks />
                    <EnterPrise />
                    <InternalLinks />
                </div>
                <div className='h-[1px] w-full md:my-10 my-6 bg-gray-300' ></div>
                <div className='flex justify-between items-center w-full flex-wrap'>
                    <div className='flex xl:gap-12 lg:gap-8 sm:gap-6 gap-4  items-center flex-wrap'>
                        <BrandLogo />
                        <div className='flex xl:gap-8 md:gap-6 gap-4 flex-wrap'>
                            {
                                Links.map((item, index) => (
                                    <Link key={index} href={item.url} className='text-darkGray sm:text-lg text-sm'>
                                        {item.label}
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                    <div className='sm:p-3 p-2 rounded-full bg-secondary lg:mt-0 sm:mt-5 mt-3'>
                        <Image alt='' src={Moon} className='sm:h-8 h-6 sm:w-8 w-6' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
