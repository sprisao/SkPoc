/*납부정보*/
import SectionTitle from "@/app/[lng]/components/ui/SectionTitle";
import CommonButton from "@/app/[lng]/components/ui/CommonButton";
import ResultContainer from "@/app/[lng]/components/ui/ResultContainer";
import {PaymentInformationData} from "@/app/models/models";


type PaymentInformationProps = {
    data: PaymentInformationData;
};


const PaymentInformation = ({data}: PaymentInformationProps) => {
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
                    <ResultContainer content={data.billType} key={data.billType}/>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-1 text-sm">
                    <div className="flex items-center justify-end col-span-1">
                        <p className="text-right">
                            청구주소
                        </p>
                    </div>
                    <div className="flex items-center  col-span-2 ">
                        <ResultContainer content={data.billAddress} key={data.billAddress}/>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-1 text-sm">
                    <div className="flex items-center justify-end col-span-1">
                        <p className="text-right">
                            세금계산서발행
                        </p>
                    </div>
                    <div className="flex items-center  col-span-2 ">
                        <ResultContainer content={data.taxBill ? "발행" : "미발행"} key={data.taxBill ? "발행" : "미발행"}/>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-1 text-sm">
                    <div className="flex items-center justify-end col-span-1">
                        <p className="text-right">
                            납부방법
                        </p>
                    </div>
                    <div className="flex items-center col-span-2 ">
                        <ResultContainer content={data.paymentMethod} key={data.paymentMethod}/>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-1 text-sm">
                    <div className="flex items-center justify-end col-span-1">
                        <p className="text-right">
                            은행/카드사
                        </p>
                    </div>
                    <div className="flex items-center col-span-2 ">
                        <ResultContainer content={data.bank} key={data.bank}/>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-1 text-sm">
                    <div className="flex items-center justify-end col-span-1">
                        <p className="text-right">
                            카드/계좌번호
                        </p>
                    </div>
                    <div className="flex items-center col-span-2 ">
                        <ResultContainer content={data.cardNumber} key={data.cardNumber}/>
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