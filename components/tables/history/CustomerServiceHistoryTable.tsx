import {ColumnDef, flexRender, getCoreRowModel, useReactTable} from "@tanstack/react-table";
import {useRef, useState} from "react";
import {useVirtualizer} from "@tanstack/react-virtual";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    showMore: boolean
}

export function CustomerServiceHistoryTable<TData, TValue>({
                                                               columns, data, showMore
                                                           }: DataTableProps<TData, TValue>) {

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        debugTable: true,
    });

    const {rows} = table.getRowModel();

    const parentRef = useRef();

    const virtualizer = useVirtualizer({
        count: rows.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 25,
    })

    let tHeight = showMore ? 1250 : 275;
    return (
        <div ref={parentRef} className={`w-full h-[${tHeight}px] overflow-y-scroll bg-purple-300`}>
                <table className="w-full bg-yellow-200" >
                    <thead className="bg-blue-300 text-sm h-[25px]">
                    {
                        table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id} className="border">
                                {
                                    headerGroup.headers.map((header) => {
                                        return (
                                            <th className=""
                                                key={header.id}>
                                                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                            </th>
                                        )
                                    })
                                }
                            </tr>
                        ))
                    }
                    </thead>
                    <tbody className="text-sm">
                    {virtualizer.getVirtualItems().map((virtualRow, index) => {
                        const row = rows[virtualRow.index];
                        return (
                            <tr key={row.id} id=""
                                style={{
                                    height: `${virtualRow.size}px`,
                                    transform: `translateY(${virtualRow.start - index * virtualRow.size}px)`,
                                }}
                            >
                                {row.getVisibleCells().map((cell) => {
                                    return (
                                        <td className="text-center border" key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
    );
}
