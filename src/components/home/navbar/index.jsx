import NavItem from '@/components/shared/NavItem';
import StockVideo from '@/components/shared/navbarComponents/StockVideo';
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {

    const [activeComponent, setActiveComponent] = useState(null);

    const navMenu = [
        { label: 'Stock Video', component: <StockVideo />, url: '/', id: 'stock-video' },
        { label: 'Video Templates', url: '/', id: '' },
        { label: 'Music', url: '/', id: '' },
        { label: 'Sound Effects', url: '/', id: '' },
        { label: 'Graphic Templates', url: '/', id: '' },
        { label: 'Graphics', url: '/', id: '' },
        { label: 'Presentation Templates', url: '/', id: '' },
        { label: 'Photos', url: '/', id: '' },
        { label: 'Fonts', url: '/', id: '' },
        { label: 'More', url: '/', id: '' },
    ]

    const handleMouseEnter = (component) => {
        setActiveComponent(component);
    };

    const handleMouseLeave = () => {
        setActiveComponent(null);
    };


    return (
        <div className='flex items-center w-[92%] justify-between pl-7'>

            {
                navMenu.map((item, index) => (
                    <Link href={item.url} key={index} className='group relative nav-link pb-4'
                        onMouseEnter={() => handleMouseEnter(item.component)}
                        onMouseLeave={handleMouseLeave}>
                        <h1 className='text-base font-medium text-darkGray'>{item.label}</h1>
                        {activeComponent && (
                            <div className="absolute -left-6 hidden group-hover:block bg-white shadow-lg rounded-md">
                                {activeComponent}
                            </div>
                        )}
                    </Link>
                ))
            }


        </div>
    )
}

export default Navbar
