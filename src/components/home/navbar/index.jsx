import Link from 'next/link'
import React from 'react'
import Arrow from '/public/assets/arrow.png'
import Image from 'next/image'
import NavItem from '@/components/shared/NavItem'

const Navbar = () => {

    const navMenu = [
        {
            label: 'Stock Video', url: '/', id: 'stock-video',
            subItems: [
                { subLable: 'stock Footage', subUrl: '/' },
                { subLable: 'Motion Graphics', subUrl: '/' },
                { subLable: 'All Stock Video', subUrl: '/' },
            ]
        },
        {
            label: 'Video Templates', url: '/', id: 'stock-video',
            subItems: [
                { subLable: 'After Effects', subUrl: '/' },
                { subLable: 'Premimum Pro', subUrl: '/' },
                { subLable: 'Apple Motion', subUrl: '/' },
                { subLable: 'Final Cut Pro', subUrl: '/' },
                { subLable: 'Davinci Resolve', subUrl: '/' },
                { subLable: 'Create with Video Templates', subUrl: '/' },
                { subLable: 'All Video Templates', subUrl: '/' },
                
            ]
        },
        {
            label: 'Music', url: '/', id: 'stock-video',
            subItems: [
                { subLable: 'Royalty Free Music', subUrl: '/' },
                { subLable: 'Logos and Idents', subUrl: '/' },
                { subLable: 'All Music', subUrl: '/' },
            ]
        },
        {
            label: 'Sound Effects', url: '/', id: 'stock-video',
            subItems: [
                { subLable: 'Royalty Free Music', subUrl: '/' },
                { subLable: 'Transition and Movements', subUrl: '/' },
                { subLable: 'Human Sound', subUrl: '/' },
                { subLable: 'Industerial Sound', subUrl: '/' },
                { subLable: 'Cartoon Sound', subUrl: '/' },
                { subLable: 'Sound Pack', subUrl: '/' },
                { subLable: 'Interface Sound', subUrl: '/' },
                { subLable: 'All Sound Effects', subUrl: '/' },
            ]
        },
        // { label: '', url: '/', id: '', subItems: ['1', '2', '3'] },
        // { label: 'Sound Effects', url: '/', id: '', subItems: ['1', '2', '3'] },
        // { label: 'Graphic Templates', url: '/', id: '', subItems: ['1', '2', '3'] },
        // { label: 'Graphics', url: '/', id: '', subItems: ['1', '2', '3'] },
        // { label: 'Presentation Templates', url: '/', id: '', subItems: ['1', '2', '3'] },
        // { label: 'Photos', url: '/', id: '', subItems: ['1', '2', '3'] },
        // { label: 'Fonts', url: '/', id: '', subItems: ['1', '2', '3'] },
        // { label: 'More', url: '/', id: '', subItems: ['1', '2', '3'] },
    ]

    return (
        <div className='flex items-center w-[92%] justify-between pl-7'>

            {
                navMenu.map((item, index) => (
                    <div key={index} className='group relative nav-link pb-4'>
                        <Link href={item.url}>
                            <h1 className='font-medium text-darkGray'>
                                {item.label}
                            </h1>
                        </Link>
                        <div className='absolute hidden -left-6  group-hover:flex min-w-60 pl-4 gap-4 flex-col my-4 pb-4 bg-white shadow-lg p-2 rounded-b-md'>
                            {item.subItems.map((subItem, subIndex) => (
                                <Link href={subItem.subUrl} key={subIndex}>
                                    <h1 className={`p-2 px-3 hover:bg-primary rounded-lg w-fit gap-2 text-darkGray flex items-center ${subIndex === item.subItems.length - 1 ? 'justify-between font-bold' : ''}`}>
                                        {subItem.subLable}
                                        {subIndex === item.subItems.length - 1 && <Image src={Arrow} alt='' />}
                                    </h1>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))
            }
            <NavItem/>

        </div>
    )
}

export default Navbar
