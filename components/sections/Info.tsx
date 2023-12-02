'use client'
import {InfoTable} from "@/components/tables/info/InfoTable";
import {info_columns} from "@/components/tables/info/info_columns";
import SectionTitle from "@/components/ui/sectionTitle";
import Detail from "@/components/sections/Detail";
import Billing from "@/components/sections/Billing";
import Payment from "@/components/sections/Payment";
import Save from "@/components/sections/Save";
import {useEffect, useState} from "react";
import History from "@/components/sections/History";

{/*고객상담 정보*/
}
const Info = ({infoData, detailData, billingData, historyData}) => {


    return (
        <>
            <div className="w-full border rounded-sm overflow-clip m-1 ">

                <SectionTitle title="고객상담 정보"/>

                {/*고객상담 정보 아이템*/}
                <div className="flex flex-row justify-between">
                    <InfoTable columns={info_columns} data={infoData}
                               />
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
                        <Save/>
                    </div>
                </div>
            </div>
            {/*이력조회*/}
            <History customerHistoryData={historyData} customerSMSHistoryData="" customerUnpaidHistoryData=""/>
        </>
    );
}

export default Info;