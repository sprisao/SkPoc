'use client'
import SectionTitle from "@/app/components/ui/SectionTitle";
import CommonButton from "@/app/components/ui/CommonButton";
import {Button} from "@/components/ui/button"
import {
    Dialog, DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import InputBox from "@/app/components/ui/InputBox";
import SelectBox from "@/app/components/ui/SelectBox";
import {Checkbox} from "@/components/ui/checkbox";

{/*고객상담관리 조회 Container*/
}
const SearchCustomerService = () => {
    return (

        <Dialog>
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
                                <option>011</option>
                                <option>017</option>
                                <option>016</option>
                            </SelectBox>

                            <InputBox
                                className="max-w-[100px]"
                                type="number"
                                placeholder="4636"/>
                            <InputBox
                                className="max-w-[100px]"
                                type="number"
                                placeholder="3519"/>
                            <DialogTrigger asChild>
                                <Button variant="outline" className="w-14 h-full">검색</Button>
                            </DialogTrigger>
                        </div>
                    </div>

                    <div className=" flex-1 flex flex-row items-center space-x-3">
                        <div className="flex flex-row space-x-1 items-center">
                            <p className="shrink-0">고객명</p>
                            <InputBox
                                className="max-w-[100px] grow"
                                type="text"
                                placeholder="홍길동"/>
                        </div>
                        <div className="flex flex-row space-x-1 items-center">
                            <p className="shrink-0">생년/법인/사업자번호</p>
                            <InputBox
                                className="max-w-[120px] grow"
                                type="text"
                                placeholder="901208"/>
                        </div>
                        <CommonButton>
                            고객인증
                        </CommonButton>
                    </div>
                    <div className="col-span-1">
                        <DialogTrigger asChild>
                            <Button variant="outline" className="w-28">조회</Button>
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
                                    placeholder="01046363519"/>
                                <div className="flex flex-row justify-center items-center w-full space-x-1">
                                    <Checkbox></Checkbox>
                                    <p>번호별이력</p>
                                </div>
                            </div>
                            <CommonButton>검색</CommonButton>
                        </div>
                    </div>
                    <div className=" border rounded-sm overflow-clip mb-4 ">
                        <SectionTitle title="결과"/>
                    </div>
                    <DialogFooter className="flex flex-row justify-center items-center space-x-1">
                        <Button type="submit">적용</Button>
                        <DialogClose asChild>
                            <Button type="button" variant="secondary">
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