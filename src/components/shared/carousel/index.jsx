'use client'
import React from 'react'
import SliderArrow from '/public/assets/next.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from 'next/image'


export const Carousel = ({ content }) => {

    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
            <div
                onClick={onClick}
                className='sm:flex hidden absolute top-[45%] -right-4 z-10 cursor-pointer'>
                <div className="text-2xl">
                    <Image alt='' src={SliderArrow} className='w-10 h-10' />
                </div>
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
            <div
                onClick={onClick}
                className='sm:flex hidden absolute cursor-pointer rotate-180 top-[45%] -left-4 z-10'>
                <div className="text-2xl">
                    <Image alt='' src={SliderArrow} className='w-10 h-10' />
                </div>
            </div>
        );
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                arrows: true,
            }
        }, {
            breakpoint: 790,
            settings: {
                slidesToShow: 2,
                infinite: true,
                autoplay: true
            }
        }, 
        {
            breakpoint: 300,
            settings: "unslick"
        }]
    };



    return (
        <>
            <Slider {...settings} className=''>
                {content}
            </Slider>
        </>
    )
}
