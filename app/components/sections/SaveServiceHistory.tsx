/*상담이력저장*/
import SectionTitle from "@/app/components/ui/SectionTitle";
import CommonButton from "@/app/components/ui/CommonButton";

const SaveServiceHistory = () => {
    return (
        <div className="">
            <SectionTitle title="상담이력저장"/>
            <div className="grid grid-cols-2 auto-cols-fr px-2 py-2 gap-2">
                <div className="flex flex-col space-y-1">
                    <div className=" grid grid-cols-5 gap-2">
                        <p className="shrink-0 text-right rounded-s">검색</p>
                        <div className="flex flex-row col-span-4 justify-between">
                            <input className="border-2"></input>
                            <CommonButton>조회</CommonButton>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 gap-2">
                        <p className="shrink-0 text-right">메모</p>
                        <input className="col-span-4 border-2 h-36 rounded-s"/>
                    </div>
                </div>
                <div className="">
                    <input className="border-2 w-full h-full rounded-s"/>
                </div>
                <div>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-2 px-2 pb-2">
                <div className="flex flex-row text-sm space-x-1">
                    <div className="flex items-center justify-end shrink-0">
                        <p className="text-right">
                            통화자명
                        </p>
                    </div>
                    <input className="w-full bg-pink-100 grow border-2 rounded-sm"/>
                </div>
                <div className="flex flex-row text-sm space-x-1">
                    <div className="flex items-center justify-end shrink-0">
                        <p className="text-right">
                            연락처
                        </p>
                    </div>
                    <input className="w-full bg-pink-100 grow border-2 rounded-sm"/>
                </div>
                <div className="flex flex-row text-sm space-x-1">
                    <div className="flex items-center justify-end shrink-0">
                        <p className="text-right">
                            접촉구분
                        </p>
                    </div>
                    <select className="grow bg-pink-100 border-2 rounded-sm">
                        <option></option>
                        <option>1</option>
                        <option>2</option>
                    </select>
                </div>
                <div className="flex flex-row text-sm space-x-1">
                    <div className="flex items-center justify-end shrink-0">
                        <p className="text-right">
                            관계
                        </p>
                    </div>
                    <select className="grow bg-pink-100 border-2 rounded-sm">
                        <option></option>
                        <option>1</option>
                        <option>2</option>
                    </select>
                </div>
                <div className="col-end-6">
                    <CommonButton>
                        <div className="px-2">
                            저장
                        </div>
                    </CommonButton>
                </div>
            </div>
        </div>
    )
}

export default SaveServiceHistory