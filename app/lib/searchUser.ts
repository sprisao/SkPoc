import 'server-only'
import {ServiceAccountSearchData} from "@/app/models/models";

export async function getServiceAccountSearchData(): Promise<ServiceAccountSearchData[]> {
    return [
        {
            serviceNumber: '01012345678',
            customerCorporateNumber: 1,
            sexCode: '남',
            customerAccountNumber: 1,
            customerName: '홍길동',
            billingAccountNumber: 1,
            billingCustomerName: '홍길동',
            serviceAccountNumber: 1,
            serviceSubscriptionDate: '2021-09-01',
        },
        {
            serviceNumber: '01099991188',
            customerCorporateNumber: 2,
            sexCode: '남',
            customerAccountNumber: 2,
            customerName: '홍길동',
            billingAccountNumber: 2,
            billingCustomerName: '홍길동',
            serviceAccountNumber: 2,
            serviceSubscriptionDate: '2021-09-01',
        },
    ]
}
