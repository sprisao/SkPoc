import SectionTitle from "@/app/components/ui/SectionTitle";
import CommonButton from "@/app/components/ui/CommonButton";

{/*고객상담관리 조회 Container*/
}
const SearchCustomerService = () => {
    return (

        <div className="w-full border rounded-sm overflow-clip m-1 mt-4 ">
            <SectionTitle title="고객상담관리 조회"/>
            <div className="flex flex-row py-2 px-2 justify-around text-sm space-x-1 w-full">
                <div className="flex flex-row items-center space-x-2">
                    <p>조회구분</p>
                    <div className="flex flex-row space-x-1">
                        <select className="h-6 bg-pink-100 border-2">
                            <option>서비스 번호</option>
                            <option>고객상담</option>
                            <option>고객상담</option>
                            <option>고객상담</option>
                        </select>
                        <select className="h-6 bg-pink-100 border-2">
                            <option>010</option>
                            <option>123</option>
                            <option>456</option>
                            <option>789</option>
                        </select>
                        <input
                            className="w-12 h-6 bg-pink-100 border-2"
                            type="number"
                            placeholder="1234"
                        />
                        <input
                            className="w-12 h-6 bg-pink-100 border-2"
                            type="number"
                            placeholder="5678"
                        />
                        <CommonButton
                        >검색
                        </CommonButton>
                    </div>
                </div>

                <div className="flex flex-row items-center space-x-3">
                    <div className="flex flex-row space-x-1 items-center">
                        <p>고객명</p>
                        <input
                            className="w-[110px] bg-blue-200 border-2 h-6"
                            type="text"
                        />
                    </div>
                    <div className="flex flex-row space-x-1 items-center">
                        <p>생년/법인/사업자번호</p>
                        <input
                            className="bg-blue-200 border-2 h-6"
                            type="text"
                        />
                    </div>
                    <CommonButton>
                        고객인증
                    </CommonButton>
                </div>
                <div className="flex flex-row w-24">
                    <button className="bg-gray-400 w-full rounded-sm text-white h-6">
                        조회
                    </button>
                </div>

            </div>
        </div>
    );
}

export default SearchCustomerService;