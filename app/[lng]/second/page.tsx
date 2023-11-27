'use client'
import InputBox from "@/components/ui/inputBox";
import {Button} from "@/components/ui/button";
import ImageSlider from "@/components/ui/imageSlider";
import {useEffect, useRef, useState} from "react";
import {Dialog, DialogContent, DialogHeader, DialogTrigger} from "@/components/ui/dialog";

import Image from "next/image";
import profilePic from '@/public/assets/images/user.png'
import {Accordion} from "@/components/ui/accordion/client";
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import MonthlySignUpChart from "@/components/charts/MonthlySignUpChart";
import MonthlySignUpLineChart from "@/components/charts/MonthlySignUpLineChart";
import RegionPiChart from "@/components/charts/RegionPieChart";
import RegionPieChart from "@/components/charts/RegionPieChart";
import RegionRadarChart from "@/components/charts/RegionRadarChart";
import {HiOutlineGlobeAlt} from "react-icons/hi2";

export default function SecondPage({params: {lng}}) {
    const [isMenuActive, setIsMenuActive] = useState(false)
    const dialogTriggerRef = useRef(null);
    const [imageSrc, setImageSrc] = useState(''); // Adjusted default image path
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageSrc(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault()
            setIsMenuActive(!isMenuActive)
            if (dialogTriggerRef.current) {
                dialogTriggerRef.current.click()
            }
        }
    }

    const handleFileInputClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [isMenuActive]);

    return (
        <Dialog>
            <div className="px-5 space-y-4">
                <div className="grid grid-cols-[250px_auto] gap-3">
                    <div className="col-span-3 col-start-2 flex flex-row justify-between">
                        <div className="flex flex-row space-x-2">
                            <InputBox
                                className="rounded h-full"
                                type="text"
                                placeholder="Search"
                            />
                            <DialogTrigger asChild ref={dialogTriggerRef}>
                                <Button variant="outline" className=" h-full">
                                    메뉴 검색
                                </Button>
                            </DialogTrigger>
                        </div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="flex flex-row justify-center items-center space-x-1"
                                        variant="outline"><HiOutlineGlobeAlt fontSize={20}/>
                                    <p>언어</p>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <Link href="/en/second">
                                    <DropdownMenuLabel>영어</DropdownMenuLabel>
                                </Link>
                                <Link href="/kr/second">
                                    <DropdownMenuLabel>한국어</DropdownMenuLabel>
                                </Link>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="col-span-1 flex-col space-y-3 ">
                        <div className="w-full flex border grow h-72 items-center justify-center">
                            <div className="w-full h-full relative flex justify-center items-center">
                                {imageSrc === '' ? (
                                    <Image src={profilePic} alt="Image" objectFit="cover" style={{width: '50%'}}/>
                                ) : (
                                    <Image src={imageSrc} alt="Image" layout="fill" objectFit="cover"/>
                                )}
                            </div>
                        </div>

                        <input
                            ref={fileInputRef}
                            id="file-upload" type="file" accept="image/*" onChange={handleFileChange}
                            style={{display: 'none'}}/>
                        <Button className="w-full" onClick={handleFileInputClick}>
                            찾기
                        </Button>
                    </div>
                    <div className="col-span-3">
                        <div className="grid grid-cols-2 gap-3">
                            <div className="h-80 border p-5 flex justify-center"><MonthlySignUpChart/></div>
                            <div className="flex h-80 border p-5 justify-center"><RegionPieChart/></div>
                            <div className="h-80 border p-5 flex justify-center"><MonthlySignUpLineChart/></div>
                            <div className="h-80 border p-5 flex justify-center"><RegionRadarChart/></div>
                        </div>
                    </div>
                </div>
                <ImageSlider/>
                <div className="p-5 border bg-gray-50">
                    <Accordion lng={lng}/>
                </div>
            </div>
            <DialogContent>
                <DialogHeader>
                    메뉴 팝업
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}