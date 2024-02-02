import Image from 'next/image'
import Link from 'next/link'
import Arrow from '/public/assets/arrow.png'
import React from 'react'

export default function Fonts() {

    const Items = [
        { subLable: 'Serif', subUrl: '/' },
        { subLable: 'Sans-Serif', subUrl: '/' },
        { subLable: 'Script and Handwritten', subUrl: '/' },
        { subLable: 'Decorative', subUrl: '/' },
        { subLable: 'All Fonts', subUrl: '/' },
    ]

    return (
        <div className='relative'>
            <div className='absolute flex w-56 pl-4 gap-2 flex-col pt-6 my-4 pb-4 bg-white shadow-lg p-2 rounded-b-md'>
                {Items.map((subItem, subIndex) => (
                    <Link href={subItem.subUrl} key={subIndex}>
                        <h1 className={`p-2 px-3 hover:bg-primary rounded-lg w-fit gap-2 text-darkGray flex items-center ${subIndex === Items.length - 1 ? 'justify-between font-bold' : ''}`}>
                            {subItem.subLable}
                            {subIndex === Items.length - 1 && <Image src={Arrow} alt='' />}
                        </h1>
                    </Link>
                ))}
            </div>
        </div>
    )
}
