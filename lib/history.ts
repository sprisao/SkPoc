import 'server-only'
import {CustomerConsultationHistory} from "@/lib/types";
export async function getHistoryData(): Promise<CustomerConsultationHistory[]> {
    const s3Url = 'https://seoulforest946d11193b74484098fc836b62a80eb783206-dev.s3.ap-northeast-2.amazonaws.com/data.json'
    const googleCloudUrl = 'https://storage.googleapis.com/skpoc/data.json';

    const response = await fetch(googleCloudUrl,{
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

    return data.map(toHistory);
}

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