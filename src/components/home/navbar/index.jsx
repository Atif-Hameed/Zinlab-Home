import NavItem from '@/components/shared/NavItem';
import Fonts from '@/components/shared/navbarComponents/Fonts';
import GraphicTempl from '@/components/shared/navbarComponents/GraphicTempl';
import Graphics from '@/components/shared/navbarComponents/Graphics';
import More from '@/components/shared/navbarComponents/More';
import Music from '@/components/shared/navbarComponents/Music';
import PresentationTemplate from '@/components/shared/navbarComponents/Presentation';
import SoundEffects from '@/components/shared/navbarComponents/SoundEffects';
import StockVideo from '@/components/shared/navbarComponents/StockVideo';
import VideoTempl from '@/components/shared/navbarComponents/VideoTempl';
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {

    const [activeComponent, setActiveComponent] = useState(null);

    const navMenu = [
        { label: 'Stock Video', url: '/', component: <StockVideo /> },
        { label: 'Video Templates', url: '/', component: <VideoTempl /> },
        { label: 'Music', url: '/', component: <Music /> },
        { label: 'Sound Effects', url: '/', component: <SoundEffects /> },
        { label: 'Graphic Templates', url: '/', component: <GraphicTempl /> },
        { label: 'Graphics', url: '/', component: <Graphics /> },
        { label: 'Presentation Templates', url: '/', component: <PresentationTemplate /> },
        { label: 'Photos', url: '/'},
        { label: 'Fonts', url: '/', component:<Fonts/> },
        { label: 'More', component: <More/>, url: '/'},
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
