'use client'
import React, { useState } from 'react'
import DXF from '/public/assets/PDF-DXF.svg'
import EPUB from '/public/assets/PDF-EPUB.svg'
import HTML from '/public/assets/pdf-html.svg'
import JPG from '/public/assets/PDF-JPG.svg'
import OCR from '/public/assets/OCR.svg'
import RTX from '/public/assets/PDF-RTX.svg'
import PPT from '/public/assets/PDF-PPT.svg'
import Pages from '/public/assets/PDF-Pages.svg'
import Word from '/public/assets/pdf-word.svg'
import Excel from '/public/assets/pdf-excel.svg'
import TXT from '/public/assets/PDF-TXT.svg'
import Save from '/public/assets/save.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
import Arrow from '/public/assets/rightArrow.png'
import { Carousel } from '@/components/shared/carousel'


const FromPdfCarousel = () => {

    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
        setShowAll(prevShowAll => !prevShowAll);
    };


    const renderContent = () => {
        if (showAll) {
            return (
                <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 sm:gap-6 gap-4 pt-10 w-full'>
                    {cardData.map((item, index) => (
                        <div key={index} className='px-3 py-5'>
                            <div className={`sm:py-7 py-3 relative sm:px-6 x-4 rounded-2xl w-[100%] group cursor-pointer cardShadow flex flex-col sm:gap-5 gap-4 border-[1px] border-[#ebebeb]`}>
                                <div className='hidden group-hover:block top-2 right-2 absolute'>
                                    <Image alt='' src={Save} className='' />
                                </div>
                                <Image alt='' src={item.image} className='sm:h-16 sm:w-16 w-12 h-12' />
                                <div className='flex flex-col sm:gap-3 gap-2'>
                                    <h1 className='text-xl font-bold'>{item.heading}</h1>
                                    <p className='text-secondary overflow-hidden line-clamp-2'>{item.des}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            );
        } else {
            return (
                <Carousel
                    content={cardData.map((item, index) => (
                        <div key={index} className='px-3 py-5'>
                            <div className={`sm:py-7 py-3 relative sm:px-6 x-4 rounded-2xl w-[100%] group cursor-pointer cardShadow flex flex-col sm:gap-5 gap-4 border-[1px] border-[#ebebeb]`}>
                                <div className='hidden group-hover:block top-2 right-2 absolute'>
                                    <Image alt='' src={Save} className='' />
                                </div>
                                <Image alt='' src={item.image} className='sm:h-16 sm:w-16 w-12 h-12' />
                                <div className='flex flex-col sm:gap-3 gap-2'>
                                    <h1 className='text-xl font-bold'>{item.heading}</h1>
                                    <p className='text-secondary overflow-hidden line-clamp-2'>{item.des}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                />
            );
        }
    };


    const cardData = [
        { image: Word, heading: 'PDF to Word', des: 'Easily convert PDF to Word document.' },
        { image: PPT, heading: 'PDF to PPT', des: 'Convert PDF to Powerpoint online.' },
        { image: Excel, heading: 'PDF to Excel', des: 'Convert PDF to xls for free.' },
        { image: JPG, heading: 'PDF to JPG', des: 'Convert PDF files to a set of optimized JPG, PNG, BMP, GIF or TIFF images.' },
        { image: TXT, heading: 'PDF to TXT', des: 'Convert your PDF to TXT, and extract text from your PDF.' },
        { image: RTX, heading: 'PDF to RTF', des: 'Convert PDF to RTF online and free.' },
        { image: Pages, heading: 'PDF to Pages', des: 'Convert PDF to Pages on Mac and Windows.' },
        { image: HTML, heading: 'PDF to HTML', des: 'Convert your PDF documents to HTML web page.' },
        { image: DXF, heading: 'PDF to DXF', des: 'The best online tool to convert PDF to DXF online.' },
        { image: EPUB, heading: 'PDF to EPUB', des: 'Convert PDF file to EPUB ebook.' },
        { image: OCR, heading: 'OCR', des: 'Convert your scanned PDFs and images into editable Word, Excel, and PPT.' },
    ]


    return (
        <>
            <div className='xl:px-32 sm:px-12 px-4 py-16 w-full'>
                <div className='flex justify-between items-center w-full '>
                    <h1 className='text-4xl font-bold'>Convert from PDF</h1>
                    <button onClick={toggleShowAll} className='flex gap-1 items-center bg-secondary p-1 px-3 rounded-full'>
                        {showAll ? 'Hide' : 'All'}
                        <Image alt='' src={Arrow} className='h-4 w-4' />
                    </button>
                </div>
                {renderContent()}
            </div>
        </>
    )
}

export default FromPdfCarousel
