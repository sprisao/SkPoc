'use client';
import SectionTitle from "@/components/ui/sectionTitle";
import CommonTab from "@/components/ui/commonTab";
import {useState} from "react";
import UnpaidTable from "@/components/tables/unpaid/UnpaidTable";
import SMSTable from "@/components/tables/sms/SMSTable";
import CommonButton from "@/components/ui/commonButton";
import {Button} from "@/components/ui/button";
import {HistoryTable} from "@/components/tables/history/HistoryTable";
import {
    customerServiceHistoryColumns
} from "@/components/tables/history/history_columns";


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
                <CommonTab activeTab={activeTab} setActiveTab={setActiveTab}/>
                <div className="flex flex-row space-x-2 h-8 items-center px-5">
                    <div className="flex flex-row space-x-2 h-8 items-center px-2">
                        <CommonButton disable={false}>번호관리 이력조회</CommonButton>
                        <CommonButton disable={false}>고객접촉이력</CommonButton>
                        <CommonButton disable={false}>고객정보현행화</CommonButton>
                        <CommonButton disable={false}>SMS발송</CommonButton>
                    </div>
                    <Button variant="outline" onClick={toggleNumber} className="w-50 h-8">
                        {showMore ? '10개씩 보기' : '50개씩 보기'}
                    </Button>
                </div>
            </div>
            <div className="">
                {activeTab === 'tab1' &&
                    <HistoryTable columns={customerServiceHistoryColumns} data={customerHistoryData}
                                  showMore={showMore}/>}
                {activeTab === 'tab2' && <UnpaidTable/>}
                {activeTab === 'tab3' && <SMSTable/>}
            </div>
        </div>
    );
};

export default History;