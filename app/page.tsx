import {CustomerServiceInfoData} from "@/app/components/tables/CustomerServiceInfo/columns_customerServiceInfo";
import CustomerServiceInfo from "@/app/components/sections/CustomerServiceInfo";
import SearchCustomerService from "@/app/components/sections/SearchCustomerService";
import BillingInformation from "@/app/components/sections/BillingInformation";
import PaymentInformation, {PaymentInformationData} from "@/app/components/sections/PaymentInformation";
import SaveServiceHistory from "@/app/components/sections/SaveServiceHistory";
import CustomerServiceDetail from "@/app/components/sections/CustomerServiceDetail";
import {BillingInfoData} from "@/app/components/tables/BillingInfo/columns_billingInfo";
import History from "@/app/components/sections/History";
import {
    CustomerServiceHistoryData
} from "@/app/components/tables/CustomerServiceHistory/columns_customerServiceHistory";


async function getCustomerInfoData(): Promise<CustomerServiceInfoData[]> {
    // Fetch data from your API here.
    return [
        /*3개의 비어있는 데이터 추가 */
        {
            select: false,
            accountNumber: '2020',
            serviceType: '몰러',
            serviceNumber: '10',
            serviceStatus: "좋은상태",
            ratePlan: "무제한",
            deviceName: "아이폰",
            businessNumber: "010-1234-5678",
            businessName: "테스트",
        },
        {
            select: false,
            accountNumber: '',
            serviceType: '',
            serviceNumber: '',
            serviceStatus: "",
            ratePlan: "",
            deviceName: "",
            businessNumber: "",
            businessName: "",
        },
        {
            select: false,
            accountNumber: '',
            serviceType: '',
            serviceNumber: '',
            serviceStatus: "",
            ratePlan: "",
            deviceName: "",
            businessNumber: "",
            businessName: "",
        },
        {
            select: false,
            accountNumber: '',
            serviceType: '',
            serviceNumber: '',
            serviceStatus: "",
            ratePlan: "",
            deviceName: "",
            businessNumber: "",
            businessName: "",
        },


    ]
}

async function getBillingInfoData(): Promise<BillingInfoData[]> {
    return [
        /*make 5 leer data*/
        {
            billingDate: '2020-01-01',
            billingAmount: '100,000',
            unpaidBalance: '100,000',
            serviceNumber: '010-1234-5678',
        },
        {
            billingDate: '',
            billingAmount: '',
            unpaidBalance: '',
            serviceNumber: '',
        },
        {
            billingDate: '',
            billingAmount: '',
            unpaidBalance: '',
            serviceNumber: '',
        },
        {
            billingDate: '',
            billingAmount: '',
            unpaidBalance: '',
            serviceNumber: '',
        },
        {
            billingDate: '',
            billingAmount: '',
            unpaidBalance: '',
            serviceNumber: '',
        },
    ]
}

async function getPaymentInfoData(): Promise<PaymentInformationData> {
    return {
        billType: '청구서 발행유형 데이터',
        billAddress: '',
        taxBill: false,
        paymentMethod: '',
        bank: '',
        cardNumber: '',
    }
}

async function getCustomerServiceDetailData(): Promise<CustomerServiceHistoryData[]> {
    // consultationDate: string; // 상담일자
    // consultationTime: string; // 상담시각
    // phoneNumber: string; // 통화번호
    // consultationType: string; // 상담유형
    // notes: string; // 메모
    // status: string; // 처리상태
    // consultant: string; // 상담원
    // contactType: string; // 접촉구분
    return [
        {
            consultationDate: '2020-01-01',
            consultationTime: '10:00',
            phoneNumber: '010-1234-5678',
            consultationType: '상담유형',
            notes: '메모',
            status: '처리상태',
            consultant: '상담원',
            contactType: '접촉구분',
        },
        {
            consultationDate: '',
            consultationTime: '',
            phoneNumber: '',
            consultationType: '',
            notes: '',
            status: '',
            consultant: '',
            contactType: '',
        },
        {
            consultationDate: '',
            consultationTime: '',
            phoneNumber: '',
            consultationType: '',
            notes: '',
            status: '',
            consultant: '',
            contactType: '',
        },
        {
            consultationDate: '',
            consultationTime: '',
            phoneNumber: '',
            consultationType: '',
            notes: '',
            status: '',
            consultant: '',
            contactType: '',
        },
        {
            consultationDate: '',
            consultationTime: '',
            phoneNumber: '',
            consultationType: '',
            notes: '',
            status: '',
            consultant: '',
            contactType: '',
        },
        {
            consultationDate: '',
            consultationTime: '',
            phoneNumber: '',
            consultationType: '',
            notes: '',
            status: '',
            consultant: '',
            contactType: '',
        },
        {
            consultationDate: '',
            consultationTime: '',
            phoneNumber: '',
            consultationType: '',
            notes: '',
            status: '',
            consultant: '',
            contactType: '',
        },
        {
            consultationDate: '',
            consultationTime: '',
            phoneNumber: '',
            consultationType: '',
            notes: '',
            status: '',
            consultant: '',
            contactType: '',
        },
        {
            consultationDate: '',
            consultationTime: '',
            phoneNumber: '',
            consultationType: '',
            notes: '',
            status: '',
            consultant: '',
            contactType: '',
        },
        {
            consultationDate: '',
            consultationTime: '',
            phoneNumber: '',
            consultationType: '',
            notes: '',
            status: '',
            consultant: '',
            contactType: '',
        },
        {
            consultationDate: '',
            consultationTime: '',
            phoneNumber: '',
            consultationType: '',
            notes: '',
            status: '',
            consultant: '',
            contactType: '',
        },
        {
            consultationDate: '',
            consultationTime: '',
            phoneNumber: '',
            consultationType: '',
            notes: '',
            status: '',
            consultant: '',
            contactType: '',
        },
        {
            consultationDate: '',
            consultationTime: '',
            phoneNumber: '',
            consultationType: '',
            notes: '',
            status: '',
            consultant: '',
            contactType: '',
        },
        {
            consultationDate: '',
            consultationTime: '',
            phoneNumber: '',
            consultationType: '',
            notes: '',
            status: '',
            consultant: '',
            contactType: '',
        },
        {
            consultationDate: '',
            consultationTime: '',
            phoneNumber: '',
            consultationType: '',
            notes: '',
            status: '',
            consultant: '',
            contactType: '',
        },
        {
            consultationDate: '',
            consultationTime: '',
            phoneNumber: '',
            consultationType: '',
            notes: '',
            status: '',
            consultant: '',
            contactType: '',
        },
        {
            consultationDate: '',
            consultationTime: '',
            phoneNumber: '',
            consultationType: '',
            notes: '',
            status: '',
            consultant: '',
            contactType: '',
        },
        {
            consultationDate: '',
            consultationTime: '',
            phoneNumber: '',
            consultationType: '',
            notes: '',
            status: '',
            consultant: '',
            contactType: '',
        },
        {
            consultationDate: '',
            consultationTime: '',
            phoneNumber: '',
            consultationType: '',
            notes: '',
            status: '',
            consultant: '',
            contactType: '',
        },
        {
            consultationDate: '',
            consultationTime: '',
            phoneNumber: '',
            consultationType: '',
            notes: '',
            status: '',
            consultant: '',
            contactType: '',
        },
        {
            consultationDate: '',
            consultationTime: '',
            phoneNumber: '',
            consultationType: '',
            notes: '',
            status: '',
            consultant: '',
            contactType: '',
        },
        {
            consultationDate: '',
            consultationTime: '',
            phoneNumber: '',
            consultationType: '',
            notes: '',
            status: '',
            consultant: '',
            contactType: '',
        },
        {
            consultationDate: '',
            consultationTime: '',
            phoneNumber: '',
            consultationType: '',
            notes: '',
            status: '',
            consultant: '',
            contactType: '',
        },
        {
            consultationDate: '',
            consultationTime: '',
            phoneNumber: '',
            consultationType: '',
            notes: '',
            status: '',
            consultant: '',
            contactType: '',
        },
        {
            consultationDate: '',
            consultationTime: '',
            phoneNumber: '',
            consultationType: '',
            notes: '',
            status: '',
            consultant: '',
            contactType: '',
        },
        {
            consultationDate: '',
            consultationTime: '',
            phoneNumber: '',
            consultationType: '',
            notes: '',
            status: '',
            consultant: '',
            contactType: '',
        },
        {
            consultationDate: '',
            consultationTime: '',
            phoneNumber: '',
            consultationType: '',
            notes: '',
            status: '',
            consultant: '',
            contactType: '',
        },
        {
            consultationDate: '',
            consultationTime: '',
            phoneNumber: '',
            consultationType: '',
            notes: '',
            status: '',
            consultant: '',
            contactType: '',
        },
        {
            consultationDate: '',
            consultationTime: '',
            phoneNumber: '',
            consultationType: '',
            notes: '',
            status: '',
            consultant: '',
            contactType: '',
        },
        {
            consultationDate: '',
            consultationTime: '',
            phoneNumber: '',
            consultationType: '',
            notes: '',
            status: '',
            consultant: '',
            contactType: '',
        },
        {
            consultationDate: '',
            consultationTime: '',
            phoneNumber: '',
            consultationType: '',
            notes: '',
            status: '',
            consultant: '',
            contactType: '',
        },
        {
            consultationDate: '',
            consultationTime: '',
            phoneNumber: '',
            consultationType: '',
            notes: '',
            status: '',
            consultant: '',
            contactType: '',
        },
        {
            consultationDate: '',
            consultationTime: '',
            phoneNumber: '',
            consultationType: '',
            notes: '',
            status: '',
            consultant: '',
            contactType: '',
        },
        {
            consultationDate: '',
            consultationTime: '',
            phoneNumber: '',
            consultationType: '',
            notes: '',
            status: '',
            consultant: '',
            contactType: '',
        },
    ]
}

export default async function Page() {

    const customerServiceInfoData = await getCustomerInfoData()
    const billingInfoData = await getBillingInfoData()
    const paymentInfoData = await getPaymentInfoData()

    const customerHistoryData = await getCustomerServiceDetailData()


    return (
        <div className="flex flex-col px-3 space-y-5">

            {/*고객상담관리 조회 Container*/}
            <SearchCustomerService/>

            {/*고객상담 정보*/}
            <CustomerServiceInfo data={customerServiceInfoData}/>

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

            {/*이력조회*/}
            <History customerHistoryData={customerHistoryData} customerSMSHistoryData="" customerUnpaidHistoryData=""/>
        </div>
    );
}
