/*납부정보*/
import SectionTitle from "@/components/ui/sectionTitle";
import CommonButton from "@/components/ui/commonButton";
import ResultContainer from "@/components/ui/resultContainer";
import {CustomerConsultationDetail} from "@/lib/types";


type PaymentInformationProps = {
    data: CustomerConsultationDetail;
};


const PaymentInformation = ({data}: PaymentInformationProps) => {
    // export type CustomerConsultationDetail = {
    //     serviceNumber: string; // 서비스번호
    //     postCorpName: string; // 소속법인명
    //     welfareDiscount: string; // 복지할인
    //     serviceSubscribeDate: string; // 서비스가입일
    //     serviceTerminateDate: string; // 서비스해지일
    //     feeDetailName: string; // 요금제상세
    //     serviceStatusName: string; // 서비스상태명
    //     serviceSubscribeClass: string; // 서비스구분
    //     serviceType: string; // 이용종류
    //     simType1: string; // SIM유형1
    //     simType2: string; // SIM유형2
    //     simType3: string; // SIM유형3
    //     simType4: string; // SIM유형4
    //     equipmentManufacturer: string; // 제조사
    //     equipmentOS: string; // OS
    //     equipmentNickname1: string; // 단말기애칭1
    //     equipmentNickname2: string; // 단말기애칭2
    //     serviceSequence: string; // 일련
    //     serviceUseDate: string; // 사용일
    //     minorClass: string; // 미성년자
    //     equipmentMethod1: string; // 방식1
    //     equipmentMethod2: string; // 방식2
    //     legalGuardian: string; // 법정대리인
    //     serviceNumberPortability1: string; // 번호이동1
    //     serviceNumberPortability2: string; // 번호이동2
    //     unpaidMonthCount: number; // 미납월수
    //     unpaidAmount: number; // 미납금액
    //     currentMonthCharge: string; // 당월청구
    //     postChargeAmount: string; // 후청구금액
    //     billIssueType: string; // 청구서발행유형
    //     billEmail: string; // 이메일
    //     billAddress1: string; // 청구주소
    //     billAddress2: string;
    //     billAddress3: string;
    //     taxInvoiceIssue: string; // 새금계산서발행
    //     paymentMethod1: string; // 납부방법1
    //     paymentMethod2: string; // 납부방법2
    //     paymentMethod3: string; // 납부방법3
    //     bankOrCardCompany: string; // 은행/카드사
    //     bankOrCardNumber: string; // 카드/계좌번호
    // };
    return (
        <div className="flex flex-col h-full w-full justify-between">
            <SectionTitle title="납부정보"/>
            <div className="px-5 py-1 space-y-1">
                <div className="grid grid-cols-3 gap-1 text-sm">
                    <div className="flex items-center justify-end col-span-1">
                        <p className="text-right">
                            청구서발행유형
                        </p>
                    </div>
                    <div className="flex items-center  col-span-2 ">
                        <ResultContainer content={data?.billIssueType || ""} key={data?.billIssueType}/>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-1 text-sm">
                    <div className="flex items-center justify-end col-span-1">
                        <p className="text-right">
                            청구주소
                        </p>
                    </div>
                    <div className="flex items-center  col-span-2 ">
                        <ResultContainer content={data?.billAddress1 + data?.billAddress2 + data?.billAddress3}
                                         key={
                                             data?.billAddress1 + data?.billAddress2 + data?.billAddress3
                                         }/>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-1 text-sm">
                    <div className="flex items-center justify-end col-span-1">
                        <p className="text-right">
                            세금계산서발행
                        </p>
                    </div>
                    <div className="flex items-center  col-span-2 ">
                        <ResultContainer content={data?.taxInvoiceIssue || ""} key={data?.taxInvoiceIssue}/>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-1 text-sm">
                    <div className="flex items-center justify-end col-span-1">
                        <p className="text-right">
                            납부방법
                        </p>
                    </div>
                    <div className="flex items-center col-span-2 ">
                        <ResultContainer content={data?.paymentMethod1 +
                            data?.paymentMethod2 +
                            data?.paymentMethod3
                        } key={
                            data?.paymentMethod1 +
                            data?.paymentMethod2 +
                            data?.paymentMethod3

                        }/>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-1 text-sm">
                    <div className="flex items-center justify-end col-span-1">
                        <p className="text-right">
                            은행/카드사
                        </p>
                    </div>
                    <div className="flex items-center col-span-2 ">
                        <ResultContainer content={data?.bankOrCardCompany} key={data?.bankOrCardCompany}/>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-1 text-sm">
                    <div className="flex items-center justify-end col-span-1">
                        <p className="text-right">
                            카드/계좌번호
                        </p>
                    </div>
                    <div className="flex items-center col-span-2 ">
                        <ResultContainer content={data?.bankOrCardNumber} key={data?.bankOrCardNumber}/>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 auto-cols-max gap-1 p-1">
                <CommonButton>자납변경</CommonButton>
                <CommonButton>인출일정</CommonButton>
                <CommonButton>청구정보관리</CommonButton>
                <CommonButton>기본약정/할부지원</CommonButton>
                <CommonButton>입금전용계좌</CommonButton>
                <CommonButton>청구서 반송내역</CommonButton>
            </div>

        </div>
    )
}

export default PaymentInformation