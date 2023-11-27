/*청구정보*/
'use client'
import SectionTitle from "@/components/ui/sectionTitle";
import {columns} from "@/components/tables/BillingInfo/columns_billingInfo";
import {BillingInfoTable} from "@/components/tables/BillingInfo/BillingInfoTable";
import {GridRowComponent} from "@/components/sections/CustomerServiceDetail";
import CommonButton from "@/components/ui/commonButton";
import {BillingInfoData} from "@/lib/types";

interface BillingInformationProps {
    unpaidMonthCount?: string;
    currentMonthCharge: string;
    unpaidAmount: string;
    postChargeAmount: string;
    billingInfoData: BillingInfoData[];
}


const BillingInformation = ({
                                unpaidMonthCount,
                                currentMonthCharge,
                                unpaidAmount,
                                postChargeAmount,
                                billingInfoData
                            }: BillingInformationProps) => {


    const rows1 = [
        {
            title: "미납월수",
            contents: [unpaidMonthCount || ""]
        },
        {
            title: "당월청구",
            contents: [currentMonthCharge || ""]
        },
    ];

    const rows2 = [
        {
            title: "미납금액",
            contents: [unpaidAmount || ""]
        },
        {
            title: "후청구금액",
            contents: [postChargeAmount || ""]
        },
    ];

    return (
        <div className="flex flex-col h-full w-full justify-between">
            <div>
                <SectionTitle title="청구정보"/>
                <BillingInfoTable columns={columns} data={billingInfoData}/>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-row w-full justify-between py-2 px-2 ">
                    <div className="flex flex-col w-full text-sm justify-evenly space-y-2">
                        {rows1.map((row, index) => (
                            <GridRowComponent title={row.title} contents={row.contents} key={`billing-row1-${index}`}/>
                        ))}
                    </div>
                    <div className="flex flex-col w-full text-sm justify-evenly space-y-2">
                        {rows2.map((row,index) => (
                            <GridRowComponent title={row.title} contents={row.contents} key={`billing-row2-${index}`}/>))}
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