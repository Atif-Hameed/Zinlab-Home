import Image from 'next/image'
import Link from 'next/link'
import Arrow from '/public/assets/arrow.png'
import React from 'react'

export default function VideoTempl() {

    const Items = [
        { subLable: 'After Effects', subUrl: '/' },
        { subLable: 'Premiere Pro', subUrl: '/' },
        { subLable: 'Apple Motion', subUrl: '/' },
        { subLable: 'Final Cut Pro', subUrl: '/' },
        { subLable: 'DaVicni Resolve', subUrl: '/' },

    ]

    return (
        <div className='relative'>
            <div className='absolute flex w-96 px-4 gap-2 pl-4  pt-6 flex-col my-4 pb-4 bg-white shadow-lg p-2 rounded-b-md'>
                {
                    Items.map((subItem, subIndex) => (
                        <Link href={subItem.subUrl} key={subIndex}>
                            <h1 className={`p-2 px-3 hover:bg-primary rounded-lg w-fit gap-2 text-darkGray flex items-center`}>
                                {subItem.subLable}
                            </h1>
                        </Link>
                    ))
                }
                <div className='px-3'>
                    <div className='h-[0.5px] w-full bg-secondary' ></div>
                </div>

                <Link href={'/'} className='flex flex-col gap-0'>
                    <h1 className='p-3 hover:bg-primary rounded-lg font-bold w-fit text-darkGray items-center'>
                        Create with Video Templates
                    </h1>
                    <p className='text-darkGray px-3'>Find useful resources and learn more about creating with Video Templates</p>
                </Link>

                <Link href={'/'} className='p-2 px-3 hover:bg-primary font-bold rounded-lg w-fit gap-2 text-darkGray flex items-center'>
                    All Video Templates <Image src={Arrow} alt='' />
                </Link>
            </div>
        </div>
    )
}
