import BrandLogo from '@/components/shared/common/BrandLogo';
import Fonts from '@/components/shared/navbarComponents/Fonts';
import GraphicTempl from '@/components/shared/navbarComponents/GraphicTempl';
import Graphics from '@/components/shared/navbarComponents/Graphics';
import More from '@/components/shared/navbarComponents/More';
import Music from '@/components/shared/navbarComponents/Music';
import PresentationTemplate from '@/components/shared/navbarComponents/Presentation';
import SoundEffects from '@/components/shared/navbarComponents/SoundEffects';
import StockVideo from '@/components/shared/navbarComponents/StockVideo';
import VideoTempl from '@/components/shared/navbarComponents/VideoTempl';
import CloseIcon from '/public/assets/close.svg'
import Arrow from '/public/assets/rightArrow.png'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image';

const Navbar = ({ openNav, handleOpenNav }) => {

    const [activeComponent, setActiveComponent] = useState(null);

    const navMenu = [
        { label: 'Stock Video', url: '/', component: <StockVideo /> },
        { label: 'Video Templates', url: '/', component: <VideoTempl /> },
        { label: 'Music', url: '/', component: <Music /> },
        { label: 'Sound Effects', url: '/', component: <SoundEffects /> },
        { label: 'Graphic Templates', url: '/', component: <GraphicTempl /> },
        { label: 'Graphics', url: '/', component: <Graphics /> },
        { label: 'Presentation Templates', url: '/', component: <PresentationTemplate /> },
        { label: 'Photos', url: '/', },
        { label: 'Fonts', url: '/', component: <Fonts /> },
        { label: 'More', component: <More />, url: '/' },
    ]

    const handleMouseEnter = (component) => {
        setActiveComponent(component);
    };

    const handleMouseLeave = () => {
        setActiveComponent(null);
    };


    return (
        <div className='flex lg:flex-row flex-col lg:items-center lg:w-[92%] sm:w-[40%] w-[70%] xl:gap-3 gap-1 lg:static fixed lg:bg-inherit z-30 bg-white lg:h-auto h-screen lg:justify-between xl:pl-14 lg:pl-4'>

            <div className='lg:hidden flex gap-6 items-center justify-between px-4 pt-2 pb-8'>
                <BrandLogo />
                <Image alt='' src={CloseIcon} onClick={handleOpenNav} className={`${openNav ? 'block' : 'hidden'} sm:h-8 h-5 sm:w-8 w-5`} />
            </div>

            {
                navMenu.map((item, index) => (
                    <Link href={item.url} key={index} className={`group relative ${!openNav && 'nav-link'} pb-4 lg:px-0 px-8`}
                        onMouseEnter={() => handleMouseEnter(item.component)}
                        onMouseLeave={handleMouseLeave}>
                        <h1 className='text-base font-medium flex text-darkGray justify-between'>
                            {item.label}
                            {openNav && <Image alt='' src={Arrow} className='h-5 w-5' />}
                        </h1>
                        {activeComponent && (
                            <div className={`absolute lg:-left-6 lg:top-[25px] z-50 hidden group-hover:block bg-white shadow-lg rounded-md`}>
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
