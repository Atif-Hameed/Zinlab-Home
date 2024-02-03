import Image from 'next/image'
import Link from 'next/link'
import Arrow from '/public/assets/arrow.png'
import React from 'react'

export default function SoundEffects() {

    const Items = [
        { subLable: 'Game Sounds', subUrl: '/' },
        { subLable: 'Transitions & Movement', subUrl: '/' },
        { subLable: 'Domestic Sounds', subUrl: '/' },
        { subLable: 'Human Sounds', subUrl: '/' },
        { subLable: 'Urban Sounds', subUrl: '/' },
        { subLable: 'Nature Sounds', subUrl: '/' },
        { subLable: 'Futuristic Sounds', subUrl: '/' },
        { subLable: 'Interface Sounds', subUrl: '/' },
        { subLable: 'Cartoon Sounds', subUrl: '/' },
        { subLable: 'Industrial Sounds', subUrl: '/' },
        { subLable: 'Sound Packs', subUrl: '/' },
        { subLable: 'Miscellaneous', subUrl: '/' },
        { subLable: 'All Sound Effects', subUrl: '/' },

    ]

    return (
        <div className='relative'>
            <div className='absolute grid grid-cols-2 lg:w-[34rem] w-80 pl-4 gap-2 flex-col pt-6 my-4 pb-4 bg-white shadow-lg p-2 rounded-b-md'>
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
