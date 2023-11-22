import InputBox from "@/app/components/ui/InputBox";
import {Button} from "@/components/ui/button";
import SelectBox from "@/app/components/ui/SelectBox";

export default function SecondPage() {
    return (
        <div className="px-5">
            <div className="grid grid-cols-[250px_auto] gap-3">
                <div className="col-span-3 col-start-2 flex flex-row bg-yellow-200 justify-between">
                    <div className="flex flex-row space-x-2">
                        <InputBox
                            className="rounded h-full"
                            type="text"
                            placeholder="Search"
                        />
                        <Button>
                            메뉴 검색
                        </Button>
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
                <div className="col-span-4 h-52 bg-purple-300 flex justify-center items-center">
                    Image slider
                </div>
                <div className="col-span-4 h-52 bg-green-100 flex justify-center items-center">
                    Accordian
                </div>
            </div>
        </div>
    )
}