import React from 'react'
import edit from '/public/assets/editPDF.svg'
import crop from '/public/assets/Crop-PDF.svg'
import replace from '/public/assets/replace-text-pdf.svg'
import rotate from '/public/assets/Rotate-PDF.svg'
import Image from 'next/image'

const Bookmarks = () => {

    const cardData = [
        { image: edit, heading: 'Edit PDF', des: 'Use the best online tool to edit PDFs in your browser.' },
        { image: crop, heading: 'Crop PDF', des: 'Crop PDF online to a selected area, adjust margin size swiftly.' },
        { image: replace, heading: 'Replace PDF', des: 'The easiest way to replace text online.' },
        { image: rotate, heading: 'Rotate PDF', des: 'Rotate and save your PDF pages online for free.' },
    ]

    return (
        <>
            <div className='xl:px-32 sm:px-12 px-4 sm:py-16 py-8'>
                <h1 className='sm:text-4xl text-2xl font-bold'>Your Bookmarks</h1>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 sm:gap-6 gap-4 pt-10'>
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

export default Bookmarks
