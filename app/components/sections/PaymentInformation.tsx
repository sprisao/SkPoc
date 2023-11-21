/*납부정보*/
import SectionTitle from "@/app/components/ui/SectionTitle";
import CommonButton from "@/app/components/ui/CommonButton";

export type PaymentInformationData = {
    /*청구서 발행유형, 청구주소, 세금계산서발행유무, 납부방법, 은행/카드사, 카드/계좌번호*/
    billType: string; // 청구서 발행유형
    billAddress: string; // 청구주소
    taxBill: boolean; // 세금계산서발행유무
    paymentMethod: string; // 납부방법
    bank: string; // 은행/카드사
    cardNumber: string; // 카드/계좌번호
};

type PaymentInformationProps = {
    data: PaymentInformationData;
};


const PaymentInformation = ({data}: PaymentInformationProps) => {
    return (
        <div className="flex flex-col h-full w-full justify-between">
            <SectionTitle title="납부정보"/>
            <div className="px-5 py-1 space-y-1">
                <div className="grid grid-cols-4 gap-1 text-sm">
                    <div className="flex items-center justify-end col-span-1">
                        <p className="text-right">
                            청구서 발행유형
                        </p>
                    </div>
                    <div className="flex items-center border col-span-3 px-0.5">
                        <p>
                            {data.billType}
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-1 text-sm">
                    <div className="flex items-center justify-end col-span-1">
                        <p className="text-right">
                            청구주소
                        </p>
                    </div>
                    <div className="flex items-center border col-span-3 px-0.5">
                        <p>
                            {data.billAddress}
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-1 text-sm">
                    <div className="flex items-center justify-end col-span-1">
                        <p className="text-right">
                            세금계산서발행
                        </p>
                    </div>
                    <div className="flex items-center border col-span-3 px-0.5">
                        <p>
                            {data.taxBill ? "발행" : "미발행"}
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-1 text-sm">
                    <div className="flex items-center justify-end col-span-1">
                        <p className="text-right">
                            납부방법
                        </p>
                    </div>
                    <div className="flex items-center border col-span-3 px-0.5">
                        <p>
                            {data.paymentMethod}
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-1 text-sm">
                    <div className="flex items-center justify-end col-span-1">
                        <p className="text-right">
                            은행/카드사
                        </p>
                    </div>
                    <div className="flex items-center border col-span-3 px-0.5">
                        <p>
                            {data.bank}
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-1 text-sm">
                    <div className="flex items-center justify-end col-span-1">
                        <p className="text-right">
                            카드/계좌번호
                        </p>
                    </div>
                    <div className="flex items-center border col-span-3 px-0.5">
                        <p>
                            {data.cardNumber}
                        </p>
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