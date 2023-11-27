import 'server-only'
import {BillingInfoData} from "@/lib/types";

export async function getBillingInfoData(): Promise<BillingInfoData[]> {
    return [
        /*make 5 leer data*/
        {
            serviceNumber: '010-1234-5678',
            invoiceDate: 20200101,
            invoiceAmount: 10000,
            unpaidBalance: 10000,
            serviceCount: 1,
        },
        {
            serviceNumber: '010-1234-5678',
            invoiceDate: 20200101,
            invoiceAmount: 10000,
            unpaidBalance: 10000,
            serviceCount: 1,
        },
        {
            serviceNumber: '010-1234-5678',
            invoiceDate: 20200101,
            invoiceAmount: 10000,
            unpaidBalance: 10000,
            serviceCount: 1,
        },
        {
            serviceNumber: '010-1234-5678',
            invoiceDate: 20200101,
            invoiceAmount: 10000,
            unpaidBalance: 10000,
            serviceCount: 1,
        },
        {
            serviceNumber: '010-1234-5678',
            invoiceDate: 20200101,
            invoiceAmount: 10000,
            unpaidBalance: 10000,
            serviceCount: 1,
        },
    ]
}
