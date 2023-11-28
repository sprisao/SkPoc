import {ColumnDef, flexRender, getCoreRowModel, useReactTable} from "@tanstack/react-table";
import {useRef, useState} from "react";
import {useVirtualizer} from "@tanstack/react-virtual";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    showMore: boolean
}

export function HistoryTable<TData, TValue>({
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
        overscan: 10,
    })

    let tHeight = showMore ? 1250 : 275;
    return (
        <div style={{height: `${tHeight}px`, width: "100%", overflowY: "scroll"}} ref={parentRef} >
            <table
                style={{width: "100%", tableLayout: "fixed", borderCollapse: "collapse"}}
            >
                <thead style={{backgroundColor: "rgb(147 197 253)", color:'white', height:'25px', fontSize:'13.5px', fontWeight:'300'}}>
                {
                    table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}
                        >
                            {
                                headerGroup.headers.map((header) => {
                                    return (
                                        <th
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
                <tbody style={{fontSize:'13.5px'}} >
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
                                    <td
                                        style={{
                                            border: '1px solid lightGray',
                                            textAlign: 'center',
                                            backgroundColor: row.index % 2 === 0 ? "white" : "rgb(243 244 246)",
                                        }}
                                        key={cell.id}>
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
