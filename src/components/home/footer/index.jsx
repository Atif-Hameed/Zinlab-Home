import React from 'react'
import Youtube from '/public/assets/youtube.svg'
import Twitter from '/public/assets/twiter.svg'
import Facebook from '/public/assets/facebook.svg'
import Image from 'next/image'
import Link from 'next/link'


const Content = ({ main, link1, link2, link3, link4, link5, link6 }) => {
    return (
        <div className='flex flex-col gap-12'>
            <h1 className='text-xl font-medium' >{main}</h1>
            <div className='flex flex-col gap-6'>
                <Link href='/' className='text-lg text-darkGray hover:text-black'>{link1}</Link>
                <Link href='/' className='text-lg text-darkGray hover:text-black'>{link2}</Link>
                <Link href='/' className='text-lg text-darkGray hover:text-black'>{link3}</Link>
                <Link href='/' className='text-lg text-darkGray hover:text-black'>{link4}</Link>
                <Link href='/' className='text-lg text-darkGray hover:text-black'>{link5}</Link>
                <Link href='/' className='text-lg text-darkGray hover:text-black'>{link6}</Link>
            </div>
        </div>
    )
}

const Footer = () => {

    return (
        <>
            <div className='bg-[#f1f3f4] py-12'>
                <div className='flex gap-8 items-center'>
                    <h1 className='text-xl'>Follow Us</h1>
                    <Image alt='' src={Youtube} className='w-8 h-8' />
                    <Image alt='' src={Twitter} className='w-8 h-8' />
                    <Image alt='' src={Facebook} className='w-8 h-8' />
                </div>
                <div className='h-[1px] w-full my-10 bg-gray-500' ></div>
                <div className='grid grid-cols-5' >
                    <Content
                        main="Internal Links"
                        link1="Documentaries"
                        link2="Themes"
                        link3="Chrome casts"
                    />
                    <Content
                        main="Enterprise"
                        link1="Documentaries"
                        link2="Themes"
                        link3="Chrome casts"
                    />
                </div>
            </div>
        </>
    )
}

export default Footer
