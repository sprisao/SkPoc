"use client"

import {ColumnDef} from "@tanstack/react-table"
import {Checkbox} from "@/components/ui/checkbox";
import {CustomerServiceInfoData} from "@/app/models/models";

/*고객상담정보 타입*/

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
        accessorKey: "serviceAccountNumber",
        header: "서비스계정정보",
        cell: ({row}) => <div className="lowercase">{row.getValue("serviceAccountNumber")}</div>,
    },
    {
        accessorKey: "serviceName",
        header: "서비스구분",
        cell: ({row}) => <div className="lowercase">{row.getValue("serviceName")}</div>,
    },
    {
        accessorKey: "serviceNumber",
        header: "서비스 번호",
        cell: ({row}) => <div className="lowercase">{row.getValue("serviceNumber")}</div>,
    },
    {
        accessorKey: "serviceStatusName",
        header: "서비스상태",
        cell: ({row}) => <div className="lowercase">{row.getValue("serviceStatusName")}</div>,
    },
    {
        accessorKey: "feeName",
        header: "요금제",
        cell: ({row}) => <div className="lowercase">{row.getValue("feeName")}</div>,
    },
    {
        accessorKey: "equipmentName",
        header: "단말기",
        cell: ({row}) => <div className="lowercase">{row.getValue("equipmentName" +
            "")}</div>,
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
