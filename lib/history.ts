import 'server-only'
import {CustomerConsultationHistory} from "@/lib/types";
import path from "path";
import fs from "fs";

export async function getHistoryData(): Promise<CustomerConsultationHistory[]> {
    // JSON 파일 불러오기
    const filePath = path.join(process.cwd(), '/lib/data/history.json');
    const rawData = fs.readFileSync(filePath, 'utf-8');
    const jsonData = JSON.parse(rawData);

    // 필요한 데이터 가공
    return jsonData.map((item: any) => {
        return {
            consultationSequenceNumber: item.consultationSequenceNumber,
            serviceNumber: item.serviceNumber,
            consultationDate: item.consultationDate,
            consultationTime: item.consultationTime,
            serviceConsultationNumber: item.serviceConsultationNumber,
            consultationType: item.consultationType,
            notes: item.notes,
            processStatus: item.processStatus,
            consultantName: item.consultantName,
            contactCategory: item.contactCategory,
        };
    });
}

// export async function getHistoryData(): Promise<CustomerConsultationHistory[]> {
//     const s3Url = 'https://seoulforest946d11193b74484098fc836b62a80eb783206-dev.s3.ap-northeast-2.amazonaws.com/data.json'
//     const googleCloudUrl = 'https://storage.googleapis.com/skpoc/data.json';
//
//     const response = await fetch(s3Url,{
//         cache: 'no-cache',
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//             'Access-Control-Allow-Origin': '*',
//         },
//         next: {
//             tags: ['api'],
//         }
//     });
//     if (!response.ok) {
//         throw new Error(response.statusText);
//     }
//
//     const data = await response.json();
//
//     return data.map(toHistory);
// }

function toHistory(data: any): CustomerConsultationHistory {
    return {
        consultationSequenceNumber: data.consultationSequenceNumber,
        serviceNumber: data.serviceNumber,
        consultationDate: data.consultationDate,
        consultationTime: data.consultationTime,
        serviceConsultationNumber: data.serviceConsultationNumber,
        consultationType: data.consultationType,
        notes: data.notes,
        processStatus: data.processStatus,
        consultantName: data.consultantName,
        contactCategory: data.contactCategory,
    };
}