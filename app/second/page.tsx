'use client'
import InputBox from "@/app/components/ui/InputBox";
import {Button} from "@/components/ui/button";
import SelectBox from "@/app/components/ui/SelectBox";
import ImageSlider from "@/app/components/ui/ImageSlider";
import Accordion from "@/app/components/ui/Accordion";
import {useEffect, useRef, useState} from "react";
import {Dialog, DialogContent, DialogHeader, DialogTrigger} from "@/components/ui/dialog";

export default function SecondPage() {
    const [isMenuActive, setIsMenuActive] = useState(false)
    const dialogTriggerRef = useRef(null);

    const handleKeyDown = (e: KeyboardEvent) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault()
            setIsMenuActive(!isMenuActive)
            if(dialogTriggerRef.current) {
                dialogTriggerRef.current.click()
            }
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
                    <div className="col-span-3 col-start-2 flex flex-row bg-yellow-200 justify-between">
                        <div className="flex flex-row space-x-2">
                            <InputBox
                                className="rounded h-full"
                                type="text"
                                placeholder="Search"
                            />
                            <DialogTrigger asChild ref={dialogTriggerRef} >
                                <Button variant="outline" className=" h-full">
                                    메뉴 검색
                                </Button>
                            </DialogTrigger>
                        </div>
                        <SelectBox
                            className=" max-w-[100px] text-center px-2 h-10 rounded-md"
                        >
                            <option value="ko">한글</option>
                            <option value="en">영문</option>
                        </SelectBox>
                    </div>
                    <div className="col-span-1 flex flex-col space-y-3">
                        <div className="bg-pink-100 grow">
                            hi
                        </div>
                        <Button>
                            찾기
                        </Button>
                    </div>
                    <div className="col-span-3">
                        <div className="grid grid-cols-2 gap-3">
                            <div className="h-60 bg-pink-100">1</div>
                            <div className="h-60 bg-pink-100">2</div>
                            <div className="h-60 bg-pink-100">3</div>
                            <div className="h-60 bg-pink-100">4</div>
                        </div>
                    </div>
                </div>
                <ImageSlider/>
                <Accordion/>
            </div>
            <DialogContent>
                <DialogHeader>
                    메뉴 팝업
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}