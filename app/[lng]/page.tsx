import CustomerServiceInfo from "@/app/[lng]/components/sections/CustomerServiceInfo";
import SearchCustomerService from "@/app/[lng]/components/sections/SearchCustomerService";
import BillingInformation from "@/app/[lng]/components/sections/BillingInformation";
import SaveServiceHistory from "@/app/[lng]/components/sections/SaveServiceHistory";
import CustomerServiceDetail from "@/app/[lng]/components/sections/CustomerServiceDetail";
import History from "@/app/[lng]/components/sections/History";
import {
    BillingInfoData,
    CustomerServiceHistoryData,
    CustomerServiceInfoData,
    PaymentInformationData
} from "@/app/models/models";
import PaymentInformation from "@/app/[lng]/components/sections/PaymentInformation";
import {useTranslation} from "@/app/i18n";


async function getCustomerInfoData(): Promise<CustomerServiceInfoData[]> {
    // /*서비스계정정보*/
    // serviceAccountNumber: number
    // /*서비스구분*/
    // serviceName: string
    // /*서비스 번호*/
    // serviceNumber: string
    // /*서비스상태*/
    // serviceStatusName: string
    // /*요금제*/
    // feeName: string
    // /*단말기*/
    // equipmentName: string
    // /*사업자번호*/
    // businessNumber: string
    // /*사업자명*/
    // businessName: string
    return [
        {
            serviceAccountNumber: 1,
            serviceName: '서비스구분',
            serviceNumber: '010-1234-5678',
            serviceStatusName: '서비스상태',
            feeName: '요금제',
            equipmentName: '단말기',
            businessNumber: '사업자번호',
            businessName: '사업자명',
        },
        {
            serviceAccountNumber: 2,
            serviceName: '서비스구분',
            serviceNumber: '010-1234-5678',
            serviceStatusName: '서비스상태',
            feeName: '요금제',
            equipmentName: '단말기',
            businessNumber: '사업자번호',
            businessName: '사업자명',
        },
        {
            serviceAccountNumber: 3,
            serviceName: '서비스구분',
            serviceNumber: '010-1234-5678',
            serviceStatusName: '서비스상태',
            feeName: '요금제',
            equipmentName: '단말기',
            businessNumber: '사업자번호',
            businessName: '사업자명',
        },
        {
            serviceAccountNumber: 4,
            serviceName: '서비스구분',
            serviceNumber: '010-1234-5678',
            serviceStatusName: '서비스상태',
            feeName: '요금제',
            equipmentName: '단말기',
            businessNumber: '사업자번호',
            businessName: '사업자명',
        },
        {
            serviceAccountNumber: 5,
            serviceName: '서비스구분',
            serviceNumber: '010-1234-5678',
            serviceStatusName: '서비스상태',
            feeName: '요금제',
            equipmentName: '단말기',
            businessNumber: '사업자번호',
            businessName: '사업자명',
        }
    ]
}

async function getBillingInfoData(): Promise<BillingInfoData[]> {
    return [
        /*make 5 leer data*/
        {
            invoiceDate: '2020-01-01',
            invoiceAmount: '100,000',
            collectionBalanceAmount: '100,000',
            serviceNumber: '010-1234-5678',
        },
        {
            invoiceDate: '',
            invoiceAmount: '',
            collectionBalanceAmount: '',
            serviceNumber: '',
        },
        {
            invoiceDate: '',
            invoiceAmount: '',
            collectionBalanceAmount: '',
            serviceNumber: '',
        },
        {
            invoiceDate: '',
            invoiceAmount: '',
            collectionBalanceAmount: '',
            serviceNumber: '',
        },
        {
            invoiceDate: '',
            invoiceAmount: '',
            collectionBalanceAmount: '',
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
    // consultationSerialNumber: number;  // 상담일련번호, NUMBER(10)
    // serviceNumber: string; // 서비스번호
    // consultationDate: string; // 상담일자
    // consultationTime: string; // 상담시각
    // serviceConsultationNumber: string; // 통화번호
    // consultationType: string; // 상담유형
    // notes: string; // 메모
    // processingStatus: string; // 처리상태
    // consultantName: string; // 상담원
    // contactType: string; // 접촉구분
    return [
        {
            consultationSerialNumber: 1,
            serviceNumber: '010-1234-5678',
            consultationDate: '2020-01-01',
            consultationTime: '00:00:00',
            serviceConsultationNumber: '010-1234-5678',
            consultationType: '상담유형',
            notes: '메모',
            processingStatus: '처리상태',
            consultantName: '상담원',
            contactType: '접촉구분',
        },
        {
            consultationSerialNumber: 2,
            serviceNumber: '010-1234-5678',
            consultationDate: '2020-01-01',
            consultationTime: '00:00:00',
            serviceConsultationNumber: '010-1234-5678',
            consultationType: '상담유형',
            notes: '메모',
            processingStatus: '처리상태',
            consultantName: '상담원',
            contactType: '접촉구분',
        },
        {
            consultationSerialNumber: 3,
            serviceNumber: '010-1234-5678',
            consultationDate: '2020-01-01',
            consultationTime: '00:00:00',
            serviceConsultationNumber: '010-1234-5678',
            consultationType: '상담유형',
            notes: '메모',
            processingStatus: '처리상태',
            consultantName: '상담원',
            contactType: '접촉구분',
        },
        {
            consultationSerialNumber: 4,
            serviceNumber: '010-1234-5678',
            consultationDate: '2020-01-01',
            consultationTime: '00:00:00',
            serviceConsultationNumber: '010-1234-5678',
            consultationType: '상담유형',
            notes: '메모',
            processingStatus: '처리상태',
            consultantName: '상담원',
            contactType: '접촉구분',
        },
    ]
}

export default async function Page({params:{lng}}) {

    const {t} =  await useTranslation(lng, 'translation')

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
