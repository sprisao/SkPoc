import {ColumnDef} from "@tanstack/react-table";

export type BillingInfoData = {
    /*청구일자, 청구금액, 미납잔액, 서비스 수*/
    invoiceDate: string;
    invoiceAmount: string;
    collectionBalanceAmount: string;
    serviceNumber: string;
}


export const columns: ColumnDef<BillingInfoData, string>[] = [
    {
        id: 'invoiceDate',
        accessorKey: 'invoiceDate',
        header: '청구일자', cell: ({row}) =>
            <div className="text-center">{row.getValue("invoiceDate")}</div>
    },
    {
        id: 'invoiceAmount',
        accessorKey: 'invoiceAmount',
        header: '청구금액', cell: ({row}) =>
            <div className="text-center">{row.getValue("invoiceAmount")}</div>
    },
    {
        id: 'collectionBalanceAmount',
        accessorKey: 'collectionBalanceAmount',
        header: '미납잔액', cell: ({row}) =>
            <div className="text-center">{row.getValue("collectionBalanceAmount")}</div>
    },
    {
        id: 'serviceNumber',
        accessorKey: 'serviceNumber',
        header: '서비스 수', cell: ({row}) =>
            <div className="text-center">{row.getValue("serviceNumber")}</div>
    },
];

