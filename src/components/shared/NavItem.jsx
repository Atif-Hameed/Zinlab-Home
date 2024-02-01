import Image from 'next/image'
import Arrow from '/public/assets/arrow.png'
import Link from 'next/link'
import React from 'react'

const NavItem = () => {

    const Items = [
        { subLable: 'After Effects', subUrl: '/' },
        { subLable: 'Premimum Pro', subUrl: '/' },
        { subLable: 'Apple Motion', subUrl: '/' },
        { subLable: 'Final Cut Pro', subUrl: '/' },
        { subLable: 'Davinci Resolve', subUrl: '/' },
        { subLable: 'Create with Video Templates', subUrl: '/' },
        { subLable: 'All Video Templates', subUrl: '/' },
        { subLable: 'After Effects', subUrl: '/' },
        { subLable: 'Premimum Pro', subUrl: '/' },
        { subLable: 'Apple Motion', subUrl: '/' },
        { subLable: 'Final Cut Pro', subUrl: '/' },
        { subLable: 'Davinci Resolve', subUrl: '/' },
        { subLable: 'Create with Video Templates', subUrl: '/' },
        { subLable: 'All Video Templates', subUrl: '/' },

    ]

    return (
        <div className='group relative nav-link pb-4'>
            <Link href={'/'}>
                <h1 className='font-medium text-darkGray'>
                    Sound Effects
                </h1>
            </Link>
            <div className='absolute hidden -right-20  group-hover:grid grid-cols-2 w-[36rem] pl-4 gap-4 flex-col my-4 pb-4 bg-white shadow-lg p-2 rounded-b-md'>
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

export default NavItem
