'use client'
import SectionTitle from "@/app/[lng]/components/ui/SectionTitle";
import CommonButton from "@/app/[lng]/components/ui/CommonButton";
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
import InputBox from "@/app/[lng]/components/ui/InputBox";
import SelectBox from "@/app/[lng]/components/ui/SelectBox";
import {Checkbox} from "@/components/ui/checkbox";
import {ServiceAccountSearchTable} from "@/app/[lng]/components/tables/ServiceAccountSearch/ServiceAccountSearchTable";
import {
    serviceAccountSearchColumns
} from "@/app/[lng]/components/tables/ServiceAccountSearch/columns_serviceAccountSearch";
import {useEffect, useState} from "react";
import {HiMagnifyingGlass} from "react-icons/hi2";
import {useRouter} from "next/navigation";

/*고객상담관리 조회 섹션*/

/*1. 메인화면에서 Dialog로 전화번호 전달*/
/*2. Dialog에서 전달받은 전화번호로 조회*/
/*3. 조회된 결과를 Dialog에 표시*/
/*4. Dialog에서 선택된 결과를 메인화면으로 전달*/

const SearchCustomerService = () => {
    const router = useRouter();

    const [midNumber, setMidNumber] = useState('')
    const [lastNumber, setLastNumber] = useState('')

    const [selectedServiceNumber, setSelectedServiceNumber] = useState('')

    const [startSearch, setStartSearch] = useState(false)
    const [SearchResult, setSearchResult] = useState([])


    useEffect(() => {
        const controller = new AbortController();
        if (!startSearch) return
        (async () => {
            const response = await fetch('en/api/searchUser')
            const data = await response.json()
            setSearchResult(data)
            console.log(data)
        })()
        setStartSearch(false)
        return () => {
            controller.abort()
        }
    }, [startSearch]);

    function searchUser() {
        console.log(`searchUser: ${selectedServiceNumber}`)
        const query = `010${midNumber}${lastNumber}`
        setStartSearch(true)
        console.log(`searchUser: ${query}`)
    }

    /*todo: 검색결과에 표시된 사용자를 클릭하고 적용하면 고객상담 정보에 데이터 표시*/
    function fetchData() {
        // fetch data from API
        console.log(`fetchData: ${selectedServiceNumber}`)
    }

    const handleSelect = (selectedItem) => {
        setSelectedServiceNumber(selectedItem.serviceNumber); // 예시로 'serviceNumber' 필드를 사용
        console.log(`handleSelect: ${selectedItem.serviceNumber}`)
    };

    useEffect(() => {
        setMidNumber(selectedServiceNumber.substring(3, 7));
        setLastNumber(selectedServiceNumber.substring(7, 11));
    }, [selectedServiceNumber]);

    return (
        <Dialog onOpenChange={(e) => {
            if(!e) {
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
                                onChange={(e) => setMidNumber(e.target.value)}
                            />
                            <InputBox
                                className="max-w-[100px]"
                                type="number"
                                value={lastNumber}
                                onChange={(e) => setLastNumber(e.target.value)}
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
                        <CommonButton>
                            고객인증
                        </CommonButton>
                    </div>
                    <div className="col-span-1">
                        <DialogTrigger asChild>
                            <Button className="w-28" onClick={(e) => {
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
                                    onChange={(e) => {
                                        setMidNumber(e.target.value.substring(3, 7));
                                        setLastNumber(e.target.value.substring(7, 11));
                                    }}
                                />
                                <div className="flex flex-row justify-center items-center w-full space-x-1">
                                    <Checkbox></Checkbox>
                                    <p>번호별이력</p>
                                </div>
                            </div>
                            <Button className="w-16 h-8" onClick={(e) => {
                                setSearchResult([])
                                searchUser();
                            }}>검색</Button>
                        </div>
                    </div>
                    <div className=" border rounded-sm overflow-clip mb-4 ">
                        <SectionTitle title="결과"/>
                        <ServiceAccountSearchTable columns={serviceAccountSearchColumns} data={SearchResult}
                                                   onSelect={handleSelect}/>
                    </div>
                    <DialogFooter className="flex flex-row justify-center items-center space-x-1">
                        <DialogClose asChild>
                            <Button type="submit"
                                    onClick={(e) => {
                                        fetchData()
                                        setSearchResult([])
                                    }
                                    }
                            >적용</Button>
                        </DialogClose>
                        <DialogClose asChild>
                            <Button type="button" variant="secondary" onClick={(e) => {
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
        </Dialog>
    );
}

export default SearchCustomerService;