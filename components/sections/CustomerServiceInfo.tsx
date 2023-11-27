import {CustomerServiceInfoTable} from "@/components/tables/CustomerServiceInfo/CustomerServiceInfoTable";
import {columns_customerServiceInfo} from "@/components/tables/CustomerServiceInfo/columns_customerServiceInfo";
import SectionTitle from "@/components/ui/sectionTitle";
import CustomerServiceDetail from "@/components/sections/CustomerServiceDetail";
import BillingInformation from "@/components/sections/BillingInformation";
import PaymentInformation from "@/components/sections/PaymentInformation";
import SaveServiceHistory from "@/components/sections/SaveServiceHistory";

{/*고객상담 정보*/
}
const CustomerServiceInfo = ({data}) => {
    const billingInfoData = {}
    const paymentInfoData = {}
    return (
        <>
            <div className="w-full border rounded-sm overflow-clip m-1 ">

                <SectionTitle title="고객상담 정보"/>

                {/*고객상담 정보 아이템*/}
                <div className="flex flex-row justify-between">
                    <CustomerServiceInfoTable columns={columns_customerServiceInfo} data={data}/>
                </div>
            </div>
            {/*고객상담 상세정보, 청구정보, 납부정보, 상담이력저장 섹션*/}
            <div className="w-full">
                <div className="flex w-full flex-row space-x-1.5 justify-between m-1">
                    <div className="w-1/2 border rounded-sm overflow-clip ">
                        <CustomerServiceDetail data={null}/>
                    </div>
                    <div className="w-1/2 border rounded-sm overflow-clip ">
                        <BillingInformation data={billingInfoData}/>
                    </div>
                </div>
                <div className="flex w-full flex-row space-x-1.5 justify-between m-1">
                    <div className="w-2/5 border rounded-sm overflow-clip ">
                        <PaymentInformation data={paymentInfoData}/>
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