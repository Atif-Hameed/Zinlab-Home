import Image from 'next/image'
import Link from 'next/link'
import Arrow from '/public/assets/rightArrow.png'
import React, { useState } from 'react'

export default function More() {

    const [activeComponent, setActiveComponent] = useState(null);

    const Items = [
        { subLable: 'Add-ons',component:'', subUrl: '/' },
        { subLable: 'Web Templates', subUrl: '/' },
        { subLable: 'CMS Templates', subUrl: '/' },
        { subLable: 'WordPress', subUrl: '/' },
        { subLable: '3D', subUrl: '/' },
        { subLable: 'Free Files', subUrl: '/' },
        { subLable: 'Extensions', subUrl: '/' },
        { subLable: 'Popular', subUrl: '/' },

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
                <div className='border-r-2 border-black flex gap-3 flex-col pt-6 pb-4 p-2'>
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
                <div className='w-56 pl-4   my-4 bg-white '>
                    {activeComponent && (
                        <div className="absolute -left-6 hidden group-hover:block bg-white shadow-lg rounded-md">
                            {activeComponent}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
