import Image from 'next/image'
import Link from 'next/link'
import Arrow from '/public/assets/arrow.png'
import React from 'react'

export default function Graphics() {

    const Items = [
        { subLable: 'Backgrounds', subUrl: '/' },
        { subLable: 'Textures', subUrl: '/' },
        { subLable: 'Social', subUrl: '/' },
        { subLable: 'Patterns', subUrl: '/' },
        { subLable: 'Icons', subUrl: '/' },
        { subLable: 'Objects', subUrl: '/' },
        { subLable: 'Illustrations', subUrl: '/' },
        { subLable: 'All Graphics', subUrl: '/' },

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
