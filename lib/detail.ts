import 'server-only'
import {CustomerConsultationDetail, PaymentInformationData} from "@/lib/types";

export async function getConsultationDetailData(): Promise<CustomerConsultationDetail> {
    return {
        serviceNumber: '010-4636-3519',
        postCorpName: '소속법인명',
        welfareDiscount: '복지할인',
        serviceSubscribeDate: '서비스가입일',
        serviceTerminateDate: '서비스해지일',
        feeDetailName: '요금제상세',
        serviceStatusName: '서비스상태명',
        serviceSubscribeClass: '서비스구분',
        serviceType: '이용종류',
        simType1: 'SIM유형1',
        simType2: 'SIM유형2',
        simType3: 'SIM유형3',
        simType4: 'SIM유형4',
        equipmentManufacturer: '제조사',
        equipmentOS: 'OS',
        equipmentNickname1: '단말기애칭1',
        equipmentNickname2: '단말기애칭2',
        serviceSequence: '일련',
        serviceUseDate: '사용일',
        minorClass: '미성년자',
        equipmentMethod1: '방식1',
        equipmentMethod2: '방식2',
        legalGuardian: '법정대리인',
        serviceNumberPortability1: '번호이동1',
        serviceNumberPortability2: '번호이동2',
        unpaidMonthCount: 1,
        unpaidAmount: 1,
        currentMonthCharge: '당월청구',
        postChargeAmount: '후청구금액',
        billIssueType: '청구서발행유형',
        billEmail: '이메일',
        billAddress1: '청구주소',
        billAddress2: '청구주소',
        billAddress3: '청구주소',
        taxInvoiceIssue: '새금계산서발행',
        paymentMethod1: '납부방법1',
        paymentMethod2: '납부방법2',
        paymentMethod3: '납부방법3',
        bankOrCardCompany: '은행/카드사',
        bankOrCardNumber: '카드/계좌번호',
    }
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
