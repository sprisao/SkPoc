import {ColumnDef} from "@tanstack/react-table";

export type ServiceAccountSearchData = {
    serviceNumber: string;        // 서비스번호, VARCHAR2(20)
    customerCorporateNumber: number; // 고객법인번호, NUMBER(20)
    sexCode: string;              // 성별코드, VARCHAR2(4)
    customerAccountNumber: number; // 고객계정번호, NUMBER(10)
    customerName: string;         // 고객명, VARCHAR2(80)
    billingAccountNumber: number; // 청구계정번호, NUMBER(10)
    billingCustomerName: string;  // 청구고객명, VARCHAR2(80)
    serviceAccountNumber: number; // 서비스계정번호, NUMBER(10)
    serviceSubscriptionDate: string; // 서비스가입일자, VARCHAR2(8)
};

export const serviceAccountSearchColumns: ColumnDef<ServiceAccountSearchData>[] = [
    {
        id: "serviceNumber",
        accessorKey: "serviceNumber",
        header: "서비스번호",
        cell: ({row}) =>
            <div className="">{row.getValue("serviceNumber")}</div>
    },
    {
        id: "customerCorporateNumber",
        accessorKey: "customerCorporateNumber",
        header: "고객법인번호",
        cell: ({row}) =>
            <div className="">{row.getValue("customerCorporateNumber")}</div>
    },
    {
        id: "sexCode",
        accessorKey: "sexCode",
        header: "성별코드",
        cell: ({row}) =>
            <div className="">{row.getValue("sexCode")}</div>
    },
    {
        id: "customerAccountNumber",
        accessorKey: "customerAccountNumber",
        header: "고객계정번호",
        cell: ({row}) =>
            <div className="">{row.getValue("customerAccountNumber")}</div>
    },
    {
        id: "customerName",
        accessorKey: "customerName",
        header: "고객명",
        cell: ({row}) =>
            <div className="">{row.getValue("customerName")}</div>
    },
    {
        id: "billingAccountNumber",
        accessorKey: "billingAccountNumber",
        header: "청구계정번호",
        cell: ({row}) =>
            <div className="">{row.getValue("billingAccountNumber")}</div>
    },
    {
        id: "billingCustomerName",
        accessorKey: "billingCustomerName",
        header: "청구고객명",
        cell: ({row}) =>
            <div className="">{row.getValue("billingCustomerName")}</div>
    },
    {
        id: "serviceAccountNumber",
        accessorKey: "serviceAccountNumber",
        header: "서비스계정번호",
        cell: ({row}) =>
            <div className="">{row.getValue("serviceAccountNumber")}</div>
    },
    {
        id: "serviceSubscriptionDate",
        accessorKey: "serviceSubscriptionDate",
        header: "서비스가입일자",
        cell: ({row}) =>
            <div className="">{row.getValue("serviceSubscriptionDate")}</div>
    },
]
