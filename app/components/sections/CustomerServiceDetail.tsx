import SectionTitle from "@/app/components/ui/SectionTitle";

export type CustomerServiceDetailData = {
    corporationName: string; // 소속법인명
    welfareDiscount: boolean; // 복지할인
    subscriptionDate: Date; // 가입일
    terminationDate: Date; // 해지일
    planType: string; // 요금제
    serviceStatus: string; // 서비스상태
    usageType: string; // 이용종류
    simType: string; // SIM유형
    deviceNickname: string; // 단말기애칭
    manufacturer: string; // 제조사
    OS: string; // OS
    serialNumber: string; // 일련번호
    usageDays: string; // 사용일
    isMinor: boolean; // 미성년자
    method: string; // 방식
    legalRepresentative: string; // 법정대리인
    numberPortability: string; // 번호이동
};

type CustomerServiceDetailProps = {
    data: CustomerServiceDetailData;
};

const CustomerServiceDetail = ({data}: CustomerServiceDetailProps) => {
    return (
        <div>
            <SectionTitle title="고객상담 상세정보"/>
        </div>
    );

}

export default CustomerServiceDetail