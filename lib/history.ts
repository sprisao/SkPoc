import 'server-only'
import {CustomerConsultationHistory} from "@/lib/types";
import fs from "fs";
import path from "path";

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
