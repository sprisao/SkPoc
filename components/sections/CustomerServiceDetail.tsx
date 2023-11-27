import SectionTitle from "@/components/ui/sectionTitle";
import CommonButton from "@/components/ui/commonButton";
import ResultContainer from "@/components/ui/resultContainer";

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
export const GridRowComponent = ({title, contents}) => {
    return (
        <div className="grid grid-cols-3 w-full justify-center gap-2">
            <div className="col-span-1 flex items-center justify-end shrink-0 ">
                <p className="text-right text-sm">{title}</p>
            </div>
            <div className="col-span-2 flex flex-row w-full justify-evenly space-x-0.5 ">
                {contents.map((content, index) => (
                    <ResultContainer key={index} content={content}/>
                ))}
            </div>
        </div>
    );
};
const CustomerServiceDetail = ({data}: CustomerServiceDetailProps) => {

    const rows1 = [
        {
            title: "소속법인명",
            contents: ["삼성"]
        },
        {
            title: "가입/해지일",
            contents: ["삼성", "삼성"]
        },
        /*서비스상태, 제조사/OS, 일력/사용일, 방식, 번호이동 Row 추가 */

        {
            title: "서비스상태",
            contents: [""]
        },
        {
            title: "제조사/OS",
            contents: ["", ""]
        },
        {
            title: "일련/사용일",
            contents: ["", ""]
        },
        {
            title: "방식",
            contents: ["", ""]
        },
        {
            title: "번호이동",
            contents: ["", ""]
        },
    ];

    const rows2 = [
        /*복지할인, 요금제, 이용종류, SIM유형, 단말기애칭, 미성년자, 법정대리인*/
        {
            title: "복지할인",
            contents: [""]
        },
        {
            title: "요금제",
            contents: [""]
        },
        {
            title: "이용종류",
            contents: [""]
        },
        {
            title: "SIM유형",
            contents: ["", "", "", ""]
        },
        {
            title: "단말기애칭",
            contents: ["", ""]
        },
        {
            title: "미성년자",
            contents: [""]
        },
        {
            title: "법정대리인",
            contents: [""]
        },
    ];


    return (
        <div>
            <SectionTitle title="고객상담 상세정보"/>
            <div className="grid grid-cols-2 py-2 px-2">
                <div className="col-span-1 flex flex-col space-y-0.5">
                    {rows1.map((row, index) => (
                        <GridRowComponent key={index} {...row} />
                    ))}
                </div>
                <div className="col-span-1 flex flex-col space-y-0.5">
                    {rows2.map((row, index) => (
                        <GridRowComponent key={index} {...row} />
                    ))}
                </div>
                <div className="col-end-3 flex flex-row my-2 justify-end space-x-1">
                    <CommonButton><p>
                        이동전화변경
                    </p></CommonButton>
                    <CommonButton><p>
                        단말할부
                    </p></CommonButton>
                </div>
            </div>
        </div>
    );
}

export default CustomerServiceDetail