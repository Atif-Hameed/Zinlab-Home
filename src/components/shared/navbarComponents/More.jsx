import Image from 'next/image'
import Link from 'next/link'
import Arrow from '/public/assets/rightArrow.png'
import Arrow2 from '/public/assets/arrow.png'
import React, { useState } from 'react'

const MoreContent = ({ main }) => {
    return (
        <div>
            <h1 className='text-darkGray text-xl font-bold'>{main} Heading</h1>
            <div className='flex flex-col gap-2 pt-3'>
                <div className='flex flex-col gap-2 w-full items-center'>
                    <Link href={'/'} className='p-2 font-bold text-darkGray hover:bg-primary'>{main} Links 1</Link>
                    <Link href={'/'} className='p-2 font-bold text-darkGray hover:bg-primary'>{main} Links 2</Link>
                    <Link href={'/'} className='p-2 font-bold text-darkGray hover:bg-primary'>{main} Links 3</Link>
                    <Link href={'/'} className='p-2 font-bold text-darkGray hover:bg-primary'>{main} Links 3</Link>
                </div>

                <h1 className='font-bold text-darkGray'>{main} Heading 2</h1>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, numquam?</p>
            </div>
            <div className='flex gap-2 pt-10'>
                <h1 className='font-bold text-darkGray'>All {main} Products</h1>
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
            <div className='absolute -right-40 w-[40rem] pl-4 flex my-4 bg-white shadow-lg rounded-b-md'>
                <div className='w-[40%] border-r-2 border-primary flex gap-3 flex-col pt-6 pb-4 p-2'>
                    {
                        Items.map((item, index) => (
                            <Link href={item.subUrl} key={index} className='group relative '
                                onMouseEnter={() => handleMouseEnter(item.component)}
                                onMouseLeave={handleMouseLeave}>
                                <h1 className={`p-2 px-3 hover:bg-primary rounded-lg w-full  gap-2 text-darkGray flex items-center justify-between font-bold`}>
                                    {item.subLable}
                                    {index === Items.length - 1 ? '' : <Image src={Arrow} className='h-5 w-6' alt='' />}
                                </h1>
                            </Link>
                        ))
                    }
                </div>
                <div className='w-[60%] pl-4 my-4 bg-white '>
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
