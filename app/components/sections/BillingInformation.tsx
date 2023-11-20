/*청구정보*/
'use client'
import SectionTitle from "@/app/components/ui/SectionTitle";
import {columns} from "@/app/components/tables/BillingInfo/columns_billingInfo";
import {BillingInfoTable} from "@/app/components/tables/BillingInfo/BillingInfoTable";
import {GridRowComponent} from "@/app/components/sections/CustomerServiceDetail";
import CommonButton from "@/app/components/ui/CommonButton";


const BillingInformation = ({data}) => {

    const rows1 = [
        {
            title: "미납월수",
            contents: [""]
        },
        {
            title: "당월청구",
            contents: [""]
        },
    ];

    const rows2 = [
        {
            title: "미납금액",
            contents: [""]
        },
        {
            title: "후청구금액",
            contents: [""]
        },
    ];

    return (
        <div className="flex flex-col h-full w-full justify-between">
            <div>
                <SectionTitle title="청구정보"/>
                <BillingInfoTable columns={columns} data={data}/>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-row w-full justify-between py-2 px-2 ">
                    <div className="flex flex-col w-full text-sm justify-evenly space-y-2">
                        {rows1.map((row) => (
                            <GridRowComponent title={row.title} contents={row.contents}/>
                        ))}
                    </div>
                    <div className="flex flex-col w-full text-sm justify-evenly space-y-2">
                        {rows2.map((row) => (
                            <GridRowComponent title={row.title} contents={row.contents}/>))}
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-1 justify-evenly p-2 h-full">
                    <CommonButton>
                        서비스별
                    </CommonButton>
                    <CommonButton>
                        청구서별
                    </CommonButton>
                    <CommonButton>
                        수납이력
                    </CommonButton>
                    <CommonButton>
                        당월사용요금
                    </CommonButton>
                </div>
            </div>
        </div>
    );
}

export default BillingInformation