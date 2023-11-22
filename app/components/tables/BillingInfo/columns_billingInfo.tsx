import {ColumnDef} from "@tanstack/react-table";
import {BillingInfoData} from "@/app/models/models";



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

