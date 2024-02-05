import React from 'react'
import JPG from '/public/assets/PDF-JPG.svg'
import PPT from '/public/assets/PDF-PPT.svg'
import Word from '/public/assets/pdf-word.svg'
import Excel from '/public/assets/pdf-excel.svg'
import TXT from '/public/assets/PDF-TXT.svg'
import Image from 'next/image'

const ToPdf = () => {

    const cardData = [
        { image: Word, heading: 'Word to PDF', des: 'Easily convert Word to PDF  Word document.' },
        { image: PPT, heading: 'PPT to PDF', des: 'Convert Powerpoint to PDF online.' },
        { image: Excel, heading: 'Excel to PDF', des: 'Convert xls to PDF for free.' },
        { image: JPG, heading: 'JPG to PDF', des: 'Convert JPG, PNG, BMP, GIF or TIFF images to a set of optimized PDF Files.' },
        { image: TXT, heading: 'TXT to PDF', des: 'Convert your TXT to PDF, and extract text from your PDF.' },
    ]

    return (
        <>
            <div className='xl:px-32 sm:px-12 px-4 sm:py-16 py-8'>
                <h1 className='sm:text-4xl text-2xl font-bold'>Convert to PDF</h1>
                <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 sm:gap-6 gap-4 pt-10'>
                    {
                        cardData.map((item, index) => (
                            <div key={index} className='sm:py-7 py-3 sm:px-6 px-4 rounded-2xl cursor-pointer cardShadow flex flex-col sm:gap-5 gap-4 border-[1px] border-[#ebebeb]'>
                                <Image alt='' src={item.image} className='sm:h-16 sm:w-16 w-12 h-12' />
                                <div className='flex flex-col sm:gap-3 gap-2'>
                                    <h1 className='text-xl font-bold'>{item.heading}</h1>
                                    <p className='text-secondary overflow-hidden line-clamp-2'>{item.des}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default ToPdf
