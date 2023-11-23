import {ColumnDef, flexRender, getCoreRowModel, useReactTable} from "@tanstack/react-table";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {useState} from "react";

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
    });

    let tHeight = showMore ? 1500 : 300;

    // Function to render rows
    const renderRows = () => {
        const rows = table.getRowModel().rows;
        let additionalRows = [];

        // Determine the number of rows to add
        let rowCount = showMore ? 50 : 10;
        if (rows.length < rowCount) {
            for (let i = rows.length; i < rowCount; i++) {
                additionalRows.push(
                    <tr key={`empty-${i}`}>
                        {columns.map((_, index) => (
                            <td className="text-center border" key={`empty-cell-${index}`}>-</td>
                        ))}
                    </tr>
                );
            }
        } else if (showMore && rows.length >= 50) {
            // If there are more than 50 rows and showMore is true, display all rows
            additionalRows = [];
        }

        return (
            <>
                {rows.map(row => (
                    <TableRow
                        className={row.index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                        key={row.id}>
                        {row.getVisibleCells().map(cell => (
                            <TableCell className="text-center border" key={cell.id}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
                {additionalRows}
            </>
        );
    };

    return (
        <div
            style={{maxHeight: `${tHeight}px`, overflowY: "scroll"}}
                >
            <Table className="table-auto">
                <TableHeader className="bg-blue-300 sticky top-0">
                    {
                        table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {
                                    headerGroup.headers.map((header) => {
                                        return (
                                            <TableHead className="text-center border-x text-white h-4 text-sm"
                                                       key={header.id}>
                                                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                            </TableHead>
                                        )
                                    })
                                }
                            </tr>
                        ))
                    }
                </TableHeader>
                <TableBody className="">
                    {table.getRowModel().rows.length ? renderRows() : (
                        <tr>
                            <td className="text-center border" colSpan={columns.length}>
                                No Data
                            </td>
                        </tr>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
