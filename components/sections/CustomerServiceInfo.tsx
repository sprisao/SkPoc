'use client'
import {CustomerServiceInfoTable} from "@/components/tables/CustomerServiceInfo/CustomerServiceInfoTable";
import {columns_customerServiceInfo} from "@/components/tables/CustomerServiceInfo/columns_customerServiceInfo";
import SectionTitle from "@/components/ui/sectionTitle";
import CustomerServiceDetail from "@/components/sections/CustomerServiceDetail";
import BillingInformation from "@/components/sections/BillingInformation";
import PaymentInformation from "@/components/sections/PaymentInformation";
import SaveServiceHistory from "@/components/sections/SaveServiceHistory";
import {useEffect, useState} from "react";

{/*고객상담 정보*/
}
const CustomerServiceInfo = ({data}) => {

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
                        <CustomerServiceDetail data={detailData}/>
                    </div>
                    <div className="w-1/2 border rounded-sm overflow-clip ">
                        <BillingInformation
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
                        <PaymentInformation data={detailData}/>
                    </div>
                    <div className="w-3/5 border rounded-sm overflow-clip ">
                        <SaveServiceHistory/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CustomerServiceInfo;