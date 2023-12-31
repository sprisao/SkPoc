'use client'
import SectionTitle from "@/components/ui/sectionTitle";
import CommonButton from "@/components/ui/commonButton";
import {Button} from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import InputBox from "@/components/ui/inputBox";
import SelectBox from "@/components/ui/selectBox";
import {Checkbox} from "@/components/ui/checkbox";
import {AccountTable} from "@/components/tables/search/AccountTable";
import {
    serviceAccountSearchColumns
} from "@/components/tables/search/account_column";
import {ChangeEvent, useEffect, useRef, useState} from "react";
import {HiMagnifyingGlass} from "react-icons/hi2";
import Info from "@/components/sections/Info";

const Search = () => {

    const [midNumber, setMidNumber] = useState('')
    const [lastNumber, setLastNumber] = useState('')

    const [selectedServiceNumber, setSelectedServiceNumber] = useState('')

    const [startSearch, setStartSearch] = useState(false)
    const [SearchResult, setSearchResult] = useState([])

    const [getCustomerInfoData, setGetCustomerInfoData] = useState(false)
    const [customerInfoData, setCustomerInfoData] = useState([])
    const [detailData, setDetailData] = useState(null)
    const [billingData, setBillingData] = useState([])
    const [historyData, setHistoryData] = useState([])
    const [getDetailData, setGetDetailData] = useState(false)

    const closeButtonRef = useRef(null);


    useEffect(() => {
        const controller = new AbortController();
        if (!startSearch) return
        (async () => {
            const response = await fetch('/api/search')
            const data = await response.json()
            setSearchResult(data)
            console.log(data)
        })()
        setStartSearch(false)
        return () => {
            controller.abort()
        }
    }, [startSearch]);

    useEffect(() => {
        const controller = new AbortController();
        if (!getCustomerInfoData) return
        (async () => {
            const response = await fetch('/api/consultation/info')
            const detailResponse = await fetch('/api/consultation/detail')
            const billingResponse = await fetch('/api/consultation/billing')
            const historyResponse = await fetch('/api/consultation/history')
            const data = await response.json()
            const detailData = await detailResponse.json()
            const billingData = await billingResponse.json()
            const historyData = await historyResponse.json()
            setCustomerInfoData(data)
            setDetailData(detailData)
            setBillingData(billingData)
            setHistoryData(historyData)
            console.log(data)
        })()
        setGetCustomerInfoData(false)
        return () => {
            controller.abort()
        }
    }, [getCustomerInfoData]);

    function searchUser() {
        console.log(`searchUser: ${selectedServiceNumber}`)
        const query = `010${midNumber}${lastNumber}`
        setStartSearch(true)
        console.log(`searchUser: ${query}`)
    }

    /*todo: 검색결과에 표시된 사용자를 클릭하고 적용하면 고객상담 정보에 데이터 표시*/
    function fetchData() {
        setGetCustomerInfoData(true)
        console.log(`fetchData: ${selectedServiceNumber}`)
    }

    const handleDoubleClick = async (selectedItem) => {
        await setSelectedServiceNumber(selectedItem.serviceNumber); // 예시로 'serviceNumber' 필드를 사용
        console.log(`handleDoubleClick: ${selectedItem.serviceNumber}`)
        setCustomerInfoData([])
        fetchData()
        closeButtonRef.current.click();
    }

    const handleSelect = (selectedItem) => {
        setSelectedServiceNumber(selectedItem.serviceNumber); // 예시로 'serviceNumber' 필드를 사용
        console.log(`handleSelect: ${selectedItem.serviceNumber}`)
    };

    useEffect(() => {
        console.log(`useeffect selectedServiceNumber: ${selectedServiceNumber}`)
        setMidNumber(selectedServiceNumber.substring(3, 7));
        setLastNumber(selectedServiceNumber.substring(7, 11));
    }, [selectedServiceNumber]);

    return (
        <Dialog onOpenChange={(e) => {
            if (!e) {
                setSearchResult([])
            }
        }}>
            <div className="w-full border rounded-sm overflow-clip m-1 mt-4 ">
                <SectionTitle title="고객상담관리 조회"/>
                <div className="flex flex-row py-2 px-2 justify-around text-sm space-x-3 w-full">
                    <div className="flex-1  flex flex-row items-center space-x-2 justify-end ">
                        <p className="shrink-0">조회구분</p>
                        <div className="flex flex-row items-center space-x-1 flex-1 ">
                            <SelectBox className="max-w-[120px] min-w-[100px]">
                                <option>서비스번호</option>
                                <option>법인번호</option>
                                <option>사업자번호</option>
                                <option>외국인등록번호</option>
                                <option>여권번호</option>
                                <option>고객계정번호</option>
                            </SelectBox>
                            <SelectBox className="max-w-[100px]">
                                <option>010</option>
                            </SelectBox>

                            <InputBox
                                className="max-w-[100px]"
                                type="number"
                                value={midNumber}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setMidNumber(e.target.value)}
                            />
                            <InputBox
                                className="max-w-[100px]"
                                type="number"
                                value={lastNumber}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setLastNumber(e.target.value)}
                            />
                            <DialogTrigger asChild>
                                <Button className="h-7 px-2 rounded-sm py-1"><HiMagnifyingGlass fontSize={23}/></Button>
                            </DialogTrigger>
                        </div>
                    </div>

                    <div className=" flex-1 flex flex-row items-center space-x-3">
                        <div className="flex flex-row space-x-1 items-center">
                            <p className="shrink-0">고객명</p>
                            <InputBox
                                className="max-w-[100px] grow"
                                type="text"
                                placeholder=""/>
                        </div>
                        <div className="flex flex-row space-x-1 items-center">
                            <p className="shrink-0">생년/법인/사업자번호</p>
                            <InputBox
                                className="max-w-[120px] grow"
                                type="text"
                                placeholder=""/>
                        </div>
                        <CommonButton disable={true}>
                            고객인증
                        </CommonButton>
                    </div>
                    <div className="col-span-1">
                        <DialogTrigger asChild>
                            <Button className="w-28" onClick={() => {
                                setMidNumber('');
                                setLastNumber('');
                            }}>조회</Button>
                        </DialogTrigger>
                    </div>
                </div>
            </div>
            <DialogContent className="w-full">
                <DialogHeader>
                    <DialogTitle>고객청구서비스정보조회</DialogTitle>
                </DialogHeader>
                <div className="w-full text-sm">
                    <div className=" border rounded-sm overflow-clip mb-4 ">
                        <SectionTitle title="검색"/>
                        <div className="flex flex-row justify-between items-center py-1 px-3">
                            <div className="flex flex-row space-x-1 items-center">
                                <SelectBox className="">
                                    <option>서비스번호</option>
                                    <option>법인번호</option>
                                    <option>사업자번호</option>
                                    <option>외국인등록번호</option>
                                    <option>여권번호</option>
                                    <option>고객계정번호</option>
                                </SelectBox>
                                <InputBox
                                    className="grow"
                                    type="number"
                                    value={`010${midNumber}${lastNumber}`}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                        setMidNumber(e.target.value.substring(3, 7));
                                        setLastNumber(e.target.value.substring(7, 11));
                                    }}
                                />
                                <div className="flex flex-row justify-center items-center w-full space-x-1">
                                    <Checkbox></Checkbox>
                                    <p>번호별이력</p>
                                </div>
                            </div>
                            <Button className="w-16 h-8" onClick={() => {
                                setSearchResult([])
                                searchUser();
                            }}>검색</Button>
                        </div>
                    </div>
                    <div className=" border rounded-sm overflow-clip mb-4 ">
                        <SectionTitle title="결과"/>
                        <AccountTable columns={serviceAccountSearchColumns} data={SearchResult}
                                      onSelect={handleSelect} onDoubleClick={handleDoubleClick}/>
                    </div>
                    <DialogFooter className="flex flex-row justify-center items-center space-x-1">
                        <DialogClose asChild ref={closeButtonRef}>
                            <Button type="submit"
                                    onClick={() => {
                                        setCustomerInfoData([])
                                        fetchData()
                                        setSearchResult([])
                                    }
                                    }
                            >적용</Button>
                        </DialogClose>
                        <DialogClose asChild>
                            <Button type="button" variant="secondary" onClick={() => {
                                setMidNumber('');
                                setLastNumber('');
                                setSelectedServiceNumber('');
                            }}>
                                취소
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </div>
            </DialogContent>
            <Info infoData={customerInfoData} billingData={billingData} detailData={detailData} historyData={historyData}/>
        </Dialog>
    );
}

export default Search;