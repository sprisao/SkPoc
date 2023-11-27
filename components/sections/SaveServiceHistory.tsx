/*상담이력저장*/
import SectionTitle from "@/components/ui/sectionTitle";
import CommonButton from "@/components/ui/commonButton";
import SelectBox from "@/components/ui/selectBox";
import InputBox from "@/components/ui/inputBox";
import TextAreaBox from "@/components/ui/textAreaBox";

const SaveServiceHistory = () => {
    return (
        <div className="">
            <SectionTitle title="상담이력저장"/>
            <div className="grid grid-cols-2 auto-cols-fr px-2 py-2 gap-2">
                <div className="flex flex-col space-y-1">
                    <div className=" grid grid-cols-5 gap-2">
                        <p className="shrink-0 text-right rounded-s">검색</p>
                        <div className="flex flex-row col-span-4 justify-between space-x-2">
                            <InputBox className=""
                                      type="text"
                                      placeholder=""
                            />
                            <CommonButton>조회</CommonButton>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 gap-2">
                        <p className="shrink-0 text-right">메모</p>
                        <TextAreaBox className="col-span-4 border-2 h-36 rounded-s"
                        />
                    </div>
                </div>
                <div className="">
                    <TextAreaBox className="border-2 w-full h-full rounded-s"/>
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
                    <InputBox className=""
                              type="text"
                              placeholder=""
                    />
                </div>
                <div className="flex flex-row text-sm space-x-1">
                    <div className="flex items-center justify-end shrink-0">
                        <p className="text-right">
                            연락처
                        </p>
                    </div>
                    <InputBox className=""
                              type="text"
                              placeholder=""
                    />
                </div>
                <div className="flex flex-row text-sm space-x-1">
                    <div className="flex items-center justify-end shrink-0">
                        <p className="text-right">
                            접촉구분
                        </p>
                    </div>
                    <SelectBox
                        className=""
                    >
                        <option></option>
                        <option>1</option>
                        <option>2</option>
                    </SelectBox>
                </div>
                <div className="flex flex-row text-sm space-x-1">
                    <div className="flex items-center justify-end shrink-0">
                        <p className="text-right">
                            관계
                        </p>
                    </div>
                    <SelectBox
                        className=""
                    >
                        <option></option>
                        <option>1</option>
                        <option>2</option>
                    </SelectBox>
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