import 'server-only'
import {CustomerConsultationInfo} from "@/lib/types";

export async function getCustomerInfoData(): Promise<CustomerConsultationInfo[]> {
    // return [
    //     {
    //         serviceAccountNumber: 111743938,
    //         serviceName: '서비스구분',
    //         serviceNumber: '010-4636-3519',
    //         serviceStatusName: '서비스상태',
    //         feeName: '요금제',
    //         equipmentName: '단말기',
    //         businessNumber: '사업자번호',
    //         businessName: '사업자명',
    //     },
    // ]

    const localUrl = 'http://localhost:8080/api/sk/GET_CSR_CNSL_INFO';

    const response = await fetch(localUrl,{
        cache: 'no-cache',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        next: {
            tags: ['api'],
        }
    });

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    const data = await response.json();

    const contents = data.contents;

    return contents.map(toCustomerInfo);
}

// {
//     "SV_ACNT_NUM": 111747816,
//     "SVC_NM": "이동전화",
//     "SVC_ST_NM": "사용 중",
//     "EQP_NM": "OMD************",
//     "SVC_NUM": "010-46**-3***",
//     "FEE_NM": "10% 포인트(2GB/200분)"
// }

type CustomerInfoData = {
    SV_ACNT_NUM: number; // 서비스계정번호
    SVC_NM: string; // 서비스명
    SVC_ST_NM: string; // 서비스상태명
    EQP_NM: string; // 단말기
    SVC_NUM: string; // 서비스번호
    FEE_NM: string; // 요금제
}

function toCustomerInfo(data: CustomerInfoData): CustomerConsultationInfo {
    return {
        serviceAccountNumber: data.SV_ACNT_NUM,
        serviceName: data.SVC_NM,
        serviceStatusName: data.SVC_ST_NM,
        equipmentName: data.EQP_NM,
        serviceNumber: data.SVC_NUM,
        feeName: data.FEE_NM,
    };
}

