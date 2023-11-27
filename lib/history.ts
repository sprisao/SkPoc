import 'server-only'
import {CustomerConsultationHistory} from "@/lib/types";
import fs from "fs";
import path from "path";

export async function getHistoryData(): Promise<CustomerConsultationHistory[]> {

    const response = await fetch('https://storage.googleapis.com/skpoc/data.json',{cache: "no-cache"});
    const data = await response.json();

    return data.map((item: any) => {
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
