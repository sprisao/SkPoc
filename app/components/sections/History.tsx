'use client';
import SectionTitle from "@/app/components/ui/SectionTitle";
import CommonTabs from "@/app/components/ui/CommonTabs";
import {useState} from "react";
import CustomerUnpaidHistoryTable from "@/app/components/tables/CustomerUnpaidHistory/CustomerUnpaidHistoryTable";
import CustomerSMSHistoryTable from "@/app/components/tables/CustomerSMSHistory/CustomerSMSHistoryTable";
import CommonButton from "@/app/components/ui/CommonButton";
import {Button} from "@/components/ui/button";
import {CustomerServiceHistoryTable} from "@/app/components/tables/CustomerServiceHistory/CustomerServiceHistoryTable";
import {
    customerServiceHistoryColumns
} from "@/app/components/tables/CustomerServiceHistory/columns_customerServiceHistory";


const History = ({customerHistoryData, customerUnpaidHistoryData, customerSMSHistoryData}) => {
    const [activeTab, setActiveTab] = useState('tab1');
    const [showMore, setShowMore] = useState(false)
    const toggleNumber = () => {
        setShowMore(!showMore)
    };

    return (
        <div className="w-full border rounded-sm overflow-clip m-1">
            <SectionTitle title="이력조회"/>
            <div className="flex justify-between">
                <CommonTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
                <div className="flex flex-row space-x-5">
                    <CommonButton>번호관리 이력조회</CommonButton>
                    <CommonButton>고객접촉이력</CommonButton>
                    <CommonButton>고객정보현행화</CommonButton>
                    <CommonButton>SMS발송</CommonButton>
                    <Button onClick={toggleNumber} className="w-50">
                        {showMore ? '10개씩 보기' : '50개씩 보기'}
                    </Button>
                </div>
            </div>
            <div className="bg-yellow-200">
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