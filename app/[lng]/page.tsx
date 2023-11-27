import SearchCustomerService from "@/components/sections/SearchCustomerService";
import History from "@/components/sections/History";
import {getHistoryData} from "@/lib/history";

export default async function Page() {
    const customerHistoryData = await getHistoryData()
    return (
        <div className="flex flex-col px-3 space-y-5">
            {/*고객상담관리 조회 Container*/}
            <SearchCustomerService/>

            {/*이력조회*/}
            <History customerHistoryData={customerHistoryData} customerSMSHistoryData="" customerUnpaidHistoryData=""/>
        </div>
    );
}
