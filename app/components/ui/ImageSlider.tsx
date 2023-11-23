'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, {useEffect, useState} from "react";

import Image from "next/image";
import {Button} from "@/components/ui/button";
import {HiArrowLeftCircle, HiArrowRightCircle, HiArrowUpCircle} from "react-icons/hi2";

export default function ImageSlider() {
    const sliderRef = React.useRef<Slider>(null)
    const [settings, setSettings] = useState({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3.2,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    })


    const images = [
        {"url": "https://source.unsplash.com/random/1"},
        {"url": "https://source.unsplash.com/random/2"},
        {"url": "https://source.unsplash.com/random/3"},
        {"url": "https://source.unsplash.com/random/4"},
        {"url": "https://source.unsplash.com/random/5"},
        {"url": "https://source.unsplash.com/random/6"},
        {"url": "https://source.unsplash.com/random/7"},
        {"url": "https://source.unsplash.com/random/8"},
        {"url": "https://source.unsplash.com/random/9"},
        {"url": "https://source.unsplash.com/random/10"}
    ]


    useEffect(() => {
        const observer = new ResizeObserver(entries => {
            for (let entry of entries) {
                setSettings({
                    ...settings,
                    slidesToShow: entry.contentRect.width / 280
                })
            }
        });
        observer.observe(sliderRef.current?.innerSlider.list);
        return () => {
            observer.disconnect();
        };
    }, []);

    function next() {
        sliderRef.current?.slickNext()
    }

    function prev() {
        sliderRef.current?.slickPrev()
    }


    return (
        <div className="flex flex-row w-ful justify-center py-10 border-2">
            <button className="flex justify-center  items-center w-[50px]" onClick={prev}>
                <HiArrowLeftCircle fontSize="30px" />
            </button>
            <Slider ref={sliderRef} {...settings} className=" w-[80%] h-[180px] grow">
                {images.map((image, index) => (
                    <div key={index} className="h-[180px] bg-pink-100 relative">
                        <Image src={image.url} alt={`Image ${index}`} layout="fill" objectFit="cover"/>
                    </div>
                ))}
            </Slider>
            <button className="flex justify-center  items-center w-[50px]" onClick={next}>
                <HiArrowRightCircle fontSize="30px"/>
            </button>
        </div>
    )
}