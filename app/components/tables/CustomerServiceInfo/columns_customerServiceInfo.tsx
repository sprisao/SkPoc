"use client"

import {ColumnDef} from "@tanstack/react-table"
import {Checkbox} from "@/components/ui/checkbox";

/*고객상담정보 타입*/
export type CustomerServiceInfoData = {
    /*선택유무*/
    select: boolean
    /*서비스계정정보*/
    accountNumber: string
    /*서비스구분*/
    serviceType: string
    /*서비스 번호*/
    serviceNumber: string
    /*서비스상태*/
    serviceStatus: string
    /*요금제*/
    ratePlan: string
    /*단말기*/
    deviceName: string
    /*사업자번호*/
    businessNumber: string
    /*사업자명*/
    businessName: string
}

export const columns_customerServiceInfo: ColumnDef<CustomerServiceInfoData>[] = [
    {
        id: "select",
        header: ({table}) => (
            <div className="flex flex-row justify-center">
                {/*<Checkbox*/}
                {/*    checked={table.getIsAllPageRowsSelected()}*/}
                {/*    onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}*/}
                {/*    aria-label="Select all"*/}
                {/*/>*/}
                <p className="">선택</p>
            </div>
        ),
        cell: ({row}) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "accountNumber",
        header: "서비스계정정보",
        cell: ({row}) => <div className="lowercase">{row.getValue("accountNumber")}</div>,
    },
    {
        accessorKey: "serviceType",
        header: "서비스구분",
        cell: ({row}) => <div className="lowercase">{row.getValue("serviceType")}</div>,
    },
    {
        accessorKey: "serviceNumber",
        header: "서비스 번호",
        cell: ({row}) => <div className="lowercase">{row.getValue("serviceNumber")}</div>,
    },
    {
        accessorKey: "serviceStatus",
        header: "서비스상태",
        cell: ({row}) => <div className="lowercase">{row.getValue("serviceStatus")}</div>,
    },
    {
        accessorKey: "ratePlan",
        header: "요금제",
        cell: ({row}) => <div className="lowercase">{row.getValue("ratePlan")}</div>,
    },
    {
        accessorKey: "deviceName",
        header: "단말기",
        cell: ({row}) => <div className="lowercase">{row.getValue("deviceName")}</div>,
    },
    {
        accessorKey: "businessNumber",
        header: "사업자번호",
        cell: ({row}) => <div className="lowercase">{row.getValue("businessNumber")}</div>,
    },
    {
        accessorKey: "businessName",
        header: "사업자명",
        cell: ({row}) => <div className="lowercase">{row.getValue("businessName")}</div>,
    },
]
