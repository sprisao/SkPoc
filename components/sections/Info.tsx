'use client'
import {CustomerServiceInfoTable} from "@/components/tables/info/CustomerServiceInfoTable";
import {columns_customerServiceInfo} from "@/components/tables/info/columns_customerServiceInfo";
import SectionTitle from "@/components/ui/sectionTitle";
import Detail from "@/components/sections/Detail";
import Billing from "@/components/sections/Billing";
import Payment from "@/components/sections/Payment";
import History from "@/components/sections/Save";
import {useEffect, useState} from "react";

{/*고객상담 정보*/
}
const Info = ({data}) => {

    const [detailData, setDetailData] = useState(null)
    const [billingData, setBillingData] = useState([])
    const [getDetailData, setGetDetailData] = useState(false)

    useEffect(() => {
        const controller = new AbortController();
        if (!getDetailData) return
        (async () => {
            const detailResponse = await fetch('/api/consultation/detail')
            const billingResponse = await fetch('/api/consultation/billing')
            const detailData = await detailResponse.json()
            const billingData = await billingResponse.json()
            console.log(detailData)
            console.log(billingData)
            setDetailData(detailData)
            setBillingData(billingData)
        })()
        setGetDetailData(false)
        return () => {
            controller.abort()
        }
    }, [getDetailData]);

    const handleSelect = (selectedItem) => {
        setGetDetailData(true)
    }


    return (
        <>
            <div className="w-full border rounded-sm overflow-clip m-1 ">

                <SectionTitle title="고객상담 정보"/>

                {/*고객상담 정보 아이템*/}
                <div className="flex flex-row justify-between">
                    <CustomerServiceInfoTable columns={columns_customerServiceInfo} data={data}
                                              onSelect={handleSelect}/>
                </div>
            </div>
            {/*고객상담 상세정보, 청구정보, 납부정보, 상담이력저장 섹션*/}
            <div className="w-full">
                <div className="flex w-full flex-row space-x-1.5 justify-between m-1">
                    <div className="w-1/2 border rounded-sm overflow-clip ">
                        <Detail data={detailData}/>
                    </div>
                    <div className="w-1/2 border rounded-sm overflow-clip ">
                        <Billing
                            unpaidMonthCount={detailData?.unpaidMonthCount}
                            currentMonthCharge={detailData?.currentMonthCharge}
                            unpaidAmount={detailData?.unpaidAmount}
                            postChargeAmount={detailData?.postChargeAmount}
                            billingInfoData={billingData}
                        />
                    </div>
                </div>
                <div className="flex w-full flex-row space-x-1.5 justify-between m-1">
                    <div className="w-2/5 border rounded-sm overflow-clip ">
                        <Payment data={detailData}/>
                    </div>
                    <div className="w-3/5 border rounded-sm overflow-clip ">
                        <History/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Info;