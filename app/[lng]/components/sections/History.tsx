'use client';
import SectionTitle from "@/app/[lng]/components/ui/SectionTitle";
import CommonTabs from "@/app/[lng]/components/ui/CommonTabs";
import {useState} from "react";
import CustomerUnpaidHistoryTable from "@/app/[lng]/components/tables/CustomerUnpaidHistory/CustomerUnpaidHistoryTable";
import CustomerSMSHistoryTable from "@/app/[lng]/components/tables/CustomerSMSHistory/CustomerSMSHistoryTable";
import CommonButton from "@/app/[lng]/components/ui/CommonButton";
import {Button} from "@/components/ui/button";
import {CustomerServiceHistoryTable} from "@/app/[lng]/components/tables/CustomerServiceHistory/CustomerServiceHistoryTable";
import {
    customerServiceHistoryColumns
} from "@/app/[lng]/components/tables/CustomerServiceHistory/columns_customerServiceHistory";


const History = ({customerHistoryData, customerUnpaidHistoryData, customerSMSHistoryData}) => {
    const [activeTab, setActiveTab] = useState('tab1');
    const [showMore, setShowMore] = useState(false)
    const toggleNumber = () => {
        setShowMore(!showMore)
    };

    return (
        <div className="w-full border rounded-sm overflow-clip m-1">
            <SectionTitle title="이력조회"/>
            <div className="flex flex-row justify-between items-center h-10">
                <CommonTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
                <div className="flex flex-row space-x-2 h-8 items-center px-5">
                    <div className="flex flex-row space-x-2 h-8 items-center px-2">
                        <CommonButton>번호관리 이력조회</CommonButton>
                        <CommonButton>고객접촉이력</CommonButton>
                        <CommonButton>고객정보현행화</CommonButton>
                        <CommonButton>SMS발송</CommonButton>
                    </div>
                    <Button variant="outline" onClick={toggleNumber} className="w-50 h-8">
                        {showMore ? '10개씩 보기' : '50개씩 보기'}
                    </Button>
                </div>
            </div>
            <div className="">
                {activeTab === 'tab1' &&
                    <CustomerServiceHistoryTable columns={customerServiceHistoryColumns} data={customerHistoryData}
                                                 showMore={showMore}/>}
                {activeTab === 'tab2' && <CustomerUnpaidHistoryTable/>}
                {activeTab === 'tab3' && <CustomerSMSHistoryTable/>}
            </div>
        </div>
    );
};

export default History;