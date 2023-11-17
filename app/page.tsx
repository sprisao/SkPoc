'use client'
import UserTable from "./components/UserTable";
import {useState} from "react";
import {faker} from '@faker-js/faker';
import {DataTable} from "@/app/components/tables/CustomerServiceDetails/table";
import {columns, CustomerServiceDetail} from "@/app/components/tables/CustomerServiceDetails/columns";


export function createRandomUser() {
    return {
        userId: faker.datatype.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        // avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate({min: 18, max: 65, mode: 'age'}), // age 옵션 사용
        registeredAt: faker.date.past(),
    };
}

async function getData(): Promise<CustomerServiceDetail[]> {
    // Fetch data from your API here.
    return [
        /*3개의 비어있는 데이터 추가 */
        {
            select: false,
            accountNumber: '',
            serviceType: '',
            serviceNumber: '',
            serviceStatus: "",
            ratePlan: "",
            deviceName: "",
            businessNumber: "",
            businessName: "",
        },
        {
            select: false,
            accountNumber: '',
            serviceType: '',
            serviceNumber: '',
            serviceStatus: "",
            ratePlan: "",
            deviceName: "",
            businessNumber: "",
            businessName: "",
        },
        {
            select: false,
            accountNumber: '',
            serviceType: '',
            serviceNumber: '',
            serviceStatus: "",
            ratePlan: "",
            deviceName: "",
            businessNumber: "",
            businessName: "",
        },
        {
            select: false,
            accountNumber: '',
            serviceType: '',
            serviceNumber: '',
            serviceStatus: "",
            ratePlan: "",
            deviceName: "",
            businessNumber: "",
            businessName: "",
        },


    ]
}

export default async function Page() {
    const [users, setUsers] = useState([]);
    const [showTable, setShowTable] = useState(false);
    const [isGenerated, setIsGenerated] = useState(false);

    const generateUsers = () => {
        const newUsers = Array.from({length: 50000}, () => createRandomUser());
        setUsers(newUsers);
        setIsGenerated(true);
    };

    const handleShowTable = () => {
        setShowTable(true);
    };

    const data = await getData()


    return (
        <div className="bg-amber-200 mainContainer px-3">

            <div className="px-3 py-1 rounded-md border-b-2 border-x-2 border-black">
                <p>고객상담</p>
            </div>

            {/*고객상담관리 조회 Container*/}
            <div className="bg-blue-100 mt-4">
                <div>
                    <p>고객상담관리 조회</p>
                </div>

                {/*고객상담관리 조회 아이템*/}
                <div className="flex flex-row bg-blue-500 py-2 px-5 justify-between">

                    {/*조회구분*/}
                    <div className="flex flex-row items-center">
                        <div>
                            <p>조회구분</p>
                        </div>
                        <div className="ml-2">
                            <select className="h-6">
                                <option>서비스 번호</option>
                                <option>고객상담</option>
                                <option>고객상담</option>
                                <option>고객상담</option>
                            </select>
                        </div>
                        <div>
                            <select className="h-6">
                                <option>010</option>
                                <option>123</option>
                                <option>456</option>
                                <option>789</option>
                            </select>
                        </div>
                        <div>
                            <input
                                className="w-10 h-6"
                                type="number"
                                placeholder="1234"
                            />
                        </div>
                        <div>
                            <input
                                className="w-10 h-6"
                                type="number"
                                placeholder="5678"
                            />
                        </div>
                        {/*검색 아이콘 버튼 추가 */}
                        <div className="flex justify-center items-center border-2 border-amber-300 h-6">
                            <button
                                className="text-sm bg-amber-200"
                            >검색
                            </button>
                        </div>
                    </div>

                    {/*고객명*/}
                    <div className="flex flex-row items-center">
                        <div>
                            <p>고객명</p>
                        </div>
                        <div className="ml-2">
                            <input
                                className="w-[120px] rounded-sm"
                                type="text"
                            />
                        </div>
                    </div>

                    {/*생년/법인/사업자 번호*/}
                    <div className="flex flex-row items-center">
                        <div>
                            <p>생년/법인/사업자 번호</p>
                        </div>
                        <div className="ml-2 h-6 ">
                            <input
                                className="rounded-sm px-2"
                                type="text"
                            />
                        </div>
                        <div className="flex justify-center items-center h-6 border-2 ml-2 rounded-sm">
                            <button className="text-sm">
                                고객인증
                            </button>
                        </div>
                    </div>

                    {/*조회 버튼*/}
                    <div className="flex flex-row p-2">
                        <div className="border-2 rounded-md px-10">
                            <button className="">
                                조회
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {/*고객상담 정보*/}
            <div className="bg-blue-100 mt-4">
                <div>
                    <p>고객상담 정보</p>
                </div>

                {/*고객상담 정보 아이템*/}
                <div className="flex flex-row bg-blue-500 justify-between">
                    <DataTable columns={columns} data={data}/>
                </div>
            </div>


            <button
                className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 generate-users-button"
                onClick={generateUsers}
            >
                Generate Users
            </button>
            <button
                className={`ml-4 px-4 py-2 text-white rounded show-table-button ${isGenerated ? 'bg-green-500 hover:bg-green-600' : 'bg-green-200 cursor-not-allowed'}`}
                onClick={handleShowTable}
                disabled={!isGenerated}
            >
                Show Table
            </button>
            {showTable && <UserTable users={users}/>}
        </div>
    );
}
