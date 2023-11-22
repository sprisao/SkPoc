import {ColumnDef} from "@tanstack/react-table";

export type CustomerServiceHistoryData = {
    consultationSerialNumber: number;  // 상담일련번호, NUMBER(10)
    serviceNumber: string; // 서비스번호
    consultationDate: string; // 상담일자
    consultationTime: string; // 상담시각
    serviceConsultationNumber: string; // 통화번호
    consultationType: string; // 상담유형
    notes: string; // 메모
    processingStatus: string; // 처리상태
    consultantName: string; // 상담원
    contactType: string; // 접촉구분
};

export const customerServiceHistoryColumns: ColumnDef<CustomerServiceHistoryData>[] = [
    {
        id: "consultationDate",
        accessorKey: "consultationDate",
        header: "상담일자",
        cell: ({row}) =>
            <div className="">{row.getValue("consultationDate")}</div>
    },
    {
        id: "consultationTime",
        accessorKey: "consultationTime",
        header: "상담시각",
        cell: ({row}) =>
            <div className="">{row.getValue("consultationTime")}</div>
    },
    {
        id: "serviceConsultationNumber",
        accessorKey: "serviceConsultationNumber",
        header: "통화번호",
        cell: ({row}) =>
            <div className="">{row.getValue("serviceConsultationNumber")}</div>
    },
    {
        id: "consultationType",
        accessorKey: "consultationType",
        header: "상담유형",
        cell: ({row}) =>
            <div className="">{row.getValue("consultationType")}</div>
    },
    {
        id: "notes",
        accessorKey: "notes",
        header: "메모",
        cell: ({row}) =>
            <div className="">{row.getValue("notes")}</div>
    },
    {
        id: "processingStatus",
        accessorKey: "processingStatus",
        header: "처리상태",
        cell: ({row}) =>
            <div className="">{row.getValue("processingStatus")}</div>
    },
    {
        id: "consultantName",
        accessorKey: "consultantName",
        header: "상담원",
        cell: ({row}) =>
            <div className="">{row.getValue("consultantName")}</div>
    },
    {
        id: "contactType",
        accessorKey: "contactType",
        header: "접촉구분",
        cell: ({row}) =>
            <div className="">{row.getValue("contactType")}</div>
    },
]
