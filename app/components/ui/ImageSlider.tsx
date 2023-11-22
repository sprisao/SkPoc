'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, {useEffect, useState} from "react";

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
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1024 / 280,
                    slidesToScroll: 1,
                }
            },
        ]
    })


    useEffect(() => {
        const observer = new ResizeObserver(entries => {
            for (let entry of entries) {
                console.log('Slider 너비 변경:', entry.contentRect.width);
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
        <div className="flex flex-row w-ful justify-center">
            <button className="bg-red-100 px-2 w-[50px]" onClick={prev}>prev</button>
            <Slider ref={sliderRef} {...settings} className="bg-blue-200 w-[80%] grow">
                <div className="w-[250px] h-[180px] bg-pink-100">1</div>
                <div className="w-[250px] h-[180px] bg-pink-100">2</div>
                <div className="w-[250px] h-[180px] bg-pink-100">3</div>
                <div className="w-[250px] h-[180px] bg-pink-100">4</div>
                <div className="w-[250px] h-[180px] bg-pink-100">5</div>
                <div className="w-[250px] h-[180px] bg-pink-100">6</div>
                <div className="w-[250px] h-[180px] bg-pink-100">7</div>
                <div className="w-[250px] h-[180px] bg-pink-100">8</div>
                <div className="w-[250px] h-[180px] bg-pink-100">9</div>
                <div className="w-[250px] h-[180px] bg-pink-100">10</div>
            </Slider>
            <button className="bg-red-100 w-[50px]" onClick={next}>next</button>
        </div>
    )
}