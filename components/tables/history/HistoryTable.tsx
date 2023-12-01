import {ColumnDef, flexRender, getCoreRowModel, useReactTable} from "@tanstack/react-table";
import {useRef, useState} from "react";
import {notUndefined, useVirtualizer} from "@tanstack/react-virtual";

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

    const items = virtualizer.getVirtualItems();

    const [before, after] =
        items.length > 0
            ? [
                notUndefined(items[0]).start - virtualizer.options.scrollMargin,
                virtualizer.getTotalSize() - notUndefined(items[items.length - 1]).end
            ]
            : [0, 0];

    let tHeight = showMore ? 1250 : 275;
    return (
        <div style={{height: `${tHeight}px`, width: "100%", overflowY: "scroll"}} ref={parentRef} >
            <table
                style={{width: "100%",}}
                className="table-auto text-sm"
            >
                <thead style={{backgroundColor: "rgb(147 197 253)", color:'white', height:'25px' }}>
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
                <tbody >
                {before > 0 && (
                    <tr style={{height: before}}>
                        <td colSpan={columns.length}/>
                    </tr>
                )}
                {
                    items.length === 0 && (
                        <tr>
                            <td colSpan={columns.length} className="text-center">
                                No Data
                            </td>
                        </tr>
                    )
                }
                {
                    items.map((item) =>(
                    <tr key={rows[item.index].id} id=""
                        style={{
                            height: `${item.size}px`,
                            transform: `translateY(${item.start - item.index * item.size}px)`,
                        }}
                    >
                        {rows[item.index].getVisibleCells().map((cell) => {
                            return (
                                <td
                                    style={{
                                        height: '25px',
                                        textAlign: 'center',
                                        backgroundColor: rows[item.index].index % 2 === 0 ? "white" : "rgb(243 244 246)",
                                    }}
                                    key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            )
                        })}
                    </tr>
                ))}
                {after > 0 && (
                    <tr style={{height: after}}>
                        <td colSpan={columns.length}/>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}
