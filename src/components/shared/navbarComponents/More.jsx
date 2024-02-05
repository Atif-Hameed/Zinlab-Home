import Image from 'next/image'
import Link from 'next/link'
import Arrow from '/public/assets/rightArrow.png'
import Arrow2 from '/public/assets/arrow.png'
import React, { useState } from 'react'

const MoreContent = ({ main }) => {
    return (
        <div>
            <h1 className='text-darkGray sm:text-xl text-lg font-bold'>{main} Heading</h1>
            <div className='flex flex-col gap-2 sm:pt-3 pt-2'>
                <div className='flex flex-col sm:gap-2 gap-0 w-full items-center'>
                    <Link href={'/'} className='sm:p-2 p-1 sm:font-semibold text-darkGray hover:bg-primary'>{main} Links 1</Link>
                    <Link href={'/'} className='sm:p-2 p-1 sm:font-semibold text-darkGray hover:bg-primary'>{main} Links 2</Link>
                    <Link href={'/'} className='sm:p-2 p-1 sm:font-semibold text-darkGray hover:bg-primary'>{main} Links 3</Link>
                    <Link href={'/'} className='sm:p-2 p-1 sm:font-semibold text-darkGray hover:bg-primary'>{main} Links 3</Link>
                </div>

                <h1 className='font-semibold text-darkGray'>{main} Heading 2</h1>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, numquam?</p>
            </div>
            <div className='flex gap-2 sm:pt-10 pt-6'>
                <h1 className='font-semibold text-darkGray'>All {main} Products</h1>
                <Image src={Arrow2} className='h-5 w-6' alt='' />
            </div>
        </div>
    )
}

export default function More() {

    const [activeComponent, setActiveComponent] = useState(null);

    const Items = [
        { subLable: 'Add-ons', component: <MoreContent main="Add-ons" />, subUrl: '/' },
        { subLable: 'Web Templates', component: <MoreContent main="Web Templates" />, subUrl: '/' },
        { subLable: 'CMS Templates', component: <MoreContent main="CMS Templates" />, subUrl: '/' },
        { subLable: 'WordPress', component: <MoreContent main="WordPress" />, subUrl: '/' },
        { subLable: '3D', component: <MoreContent main="3D" />, subUrl: '/' },
        { subLable: 'Free Files', component: <MoreContent main="Free Files" />, subUrl: '/' },
        { subLable: 'Extensions', component: <MoreContent main="Extensions" />, subUrl: '/' },
        { subLable: 'Popular', component: <MoreContent main="Popular" />, subUrl: '/' },
    ]

    const handleMouseEnter = (component) => {
        setActiveComponent(component);
    };

    const handleMouseLeave = () => {
        setActiveComponent(null);
    };

    return (
        <div className='relative'>
            <div className='absolute lg:-right-40 lg:top-0 -top-28 sm:w-[40rem] w-[20rem] overflow-x-scroll sm:pl-4 pl-2 flex my-4 bg-white shadow-lg rounded-b-md'>
                <div className='w-[40%] border-r-2 border-primary flex sm:gap-3 gap-1 flex-col sm:pt-6 pt-4 sm:pb-4 pb-2 sm:p-2 p-1'>
                    {
                        Items.map((item, index) => (
                            <Link href={item.subUrl} key={index} className='group relative '
                                onMouseEnter={() => handleMouseEnter(item.component)}
                                onMouseLeave={handleMouseLeave}>
                                <h1 className={`sm:p-2 p-1 px-3 hover:bg-primary rounded-lg w-full  sm:gap-2 gap-1 text-darkGray flex items-center justify-between font-semibold`}>
                                    {item.subLable}
                                    {index === Items.length - 1 ? '' : <Image src={Arrow} className='h-5 w-6' alt='' />}
                                </h1>
                            </Link>
                        ))
                    }
                </div>
                <div className='w-[60%] pl-4 my-4 bg-white sm:relative '>
                    {activeComponent ? (
                        <div className="hidden group-hover:block w-full">
                            {activeComponent}
                        </div>
                    ) : <MoreContent />}
                </div>
            </div>
        </div>
    )
}
