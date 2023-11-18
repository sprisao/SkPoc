'use client'
import React, {useState} from "react";
import {faker} from '@faker-js/faker';
import {CustomerServiceInfoTable} from "@/app/components/tables/CustomerServiceInfo/table";
import {columns, CustomerServiceDetailData} from "@/app/components/tables/CustomerServiceInfo/columns";
import CustomerServiceInfo from "@/app/components/sections/CustomerServiceInfo";
import SearchCustomerService from "@/app/components/sections/SearchCustomerService";
import BillingInformation from "@/app/components/sections/BillingInformation";
import PaymentInformation from "@/app/components/sections/PaymentInformation";
import SaveServiceHistory from "@/app/components/sections/SaveServiceHistory";
import CustomerServiceDetail from "@/app/components/sections/CustomerServiceDetail";


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

async function getData(): Promise<CustomerServiceDetailData[]> {
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
            <SearchCustomerService/>

            {/*고객상담 정보*/}
            <CustomerServiceInfo data={data}/>

            {/*고객상담 상세정보, 청구정보, 납부정보, 상담이력저장 섹션ㅐ*/}
            <div>
                <div className="flex flex-row justify-between">
                    <div className="w-1/2 bg-amber-600">
                        <CustomerServiceDetail/>
                    </div>
                    <div className="w-1/2 bg-green-300">
                        <BillingInformation/>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="w-2/5 bg-purple-200">
                        <PaymentInformation/>
                    </div>
                    <div className="w-3/5 bg-pink-300">
                        <SaveServiceHistory/>
                    </div>
                </div>
            </div>


            {/*<button*/}
            {/*    className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 generate-users-button"*/}
            {/*    onClick={generateUsers}*/}
            {/*>*/}
            {/*    Generate Users*/}
            {/*</button>*/}
            {/*<button*/}
            {/*    className={`ml-4 px-4 py-2 text-white rounded show-table-button ${isGenerated ? 'bg-green-500 hover:bg-green-600' : 'bg-green-200 cursor-not-allowed'}`}*/}
            {/*    onClick={handleShowTable}*/}
            {/*    disabled={!isGenerated}*/}
            {/*>*/}
            {/*    Show Table*/}
            {/*</button>*/}
            {/*{showTable && <UserTable users={users}/>}*/}
        </div>
    );
}
