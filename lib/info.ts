import 'server-only'
import {CustomerConsultationInfo} from "@/lib/types";

export async function getCustomerInfoData(): Promise<CustomerConsultationInfo[]> {
    return [
        {
            serviceAccountNumber: 111743938,
            serviceName: '서비스구분',
            serviceNumber: '010-4636-3519',
            serviceStatusName: '서비스상태',
            feeName: '요금제',
            equipmentName: '단말기',
            businessNumber: '사업자번호',
            businessName: '사업자명',
        },
    ]
}
