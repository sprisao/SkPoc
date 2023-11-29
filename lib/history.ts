import 'server-only'
import {CustomerConsultationHistory} from "@/lib/types";
export async function getHistoryData(): Promise<CustomerConsultationHistory[]> {
    const s3Url = 'https://seoulforest946d11193b74484098fc836b62a80eb783206-dev.s3.ap-northeast-2.amazonaws.com/data.json'
    const googleCloudUrl = 'https://storage.googleapis.com/skpoc/data.json';
    const localUrl = 'http://localhost:8080/api/sk/GET_CSR_CNSL_HST_HISTORY';

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

    // 'contents' 키에 해당하는 배열에 접근
    const contents = data.contents;

    // 각 항목을 'toHistory' 함수로 변환
    return contents.map(toHistory);
}

function toHistory(data: any): CustomerConsultationHistory {
    return {
        consultationSequenceNumber: data.CNSL_SEQ_NUM,
        serviceNumber: data.SVC_CNSL_NUM,
        consultationDate: data.CNSL_DT,
        consultationTime: data.CNSL_TM,
        serviceConsultationNumber: null, // Update this if you have a corresponding field in your data
        consultationType: data.CNST_TYP,
        notes: null, // Update this if you have a corresponding field in your data
        processStatus: data.PROC_ST,
        consultantName: data.CNSL_NM,
        contactCategory: data.CONT_KND,
    };
}
