"use client"

import {ColumnDef} from "@tanstack/react-table";

export type BillingInfoData = {
    /*청구일자, 청구금액, 미납잔액, 서비스 수*/
    billingDate: string;
    billingAmount: string;
    unpaidBalance: string;
    serviceNumber: string;
}


export const columns: ColumnDef<BillingInfoData, string>[] = [
    {
        id: 'billingDate', header: '청구일자', cell: ({row}) =>
            <div className="text-center">{row.getValue("billingDate")}</div>
    },
    {
        id: 'billingAmount', header: '청구금액', cell: ({row}) =>
            <div className="text-center">{row.getValue("billingAmount")}</div>
    },
    {
        id: 'unpaidBalance', header: '미납잔액', cell: ({row}) =>
            <div className="text-center">{row.getValue("unpaidBalance")}</div>
    },
    {
        id: 'serviceNumber', header: '서비스 수', cell: ({row}) =>
            <div className="text-center">{row.getValue("serviceNumber")}</div>
    },
];

