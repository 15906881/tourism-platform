import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import { useReactTable, getCoreRowModel, getPaginationRowModel, getSortedRowModel, getFilteredRowModel, flexRender, } from '@tanstack/react-table';
import { cn } from '../../lib/utils';
export function DataTable({ data, columns, enablePagination = true, enableSorting = true, enableFiltering = true, onRowClick, className }) {
    const [sorting, setSorting] = useState([]);
    const [columnFilters, setColumnFilters] = useState([]);
    const [columnVisibility, setColumnVisibility] = useState({});
    const [rowSelection, setRowSelection] = useState({});
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: enablePagination ? getPaginationRowModel() : undefined,
        getSortedRowModel: enableSorting ? getSortedRowModel() : undefined,
        getFilteredRowModel: enableFiltering ? getFilteredRowModel() : undefined,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    });
    return (_jsxs("div", { className: cn('space-y-md', className), children: [_jsx("div", { className: "rounded-md border border-border overflow-hidden", children: _jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "w-full", children: [_jsx("thead", { className: "bg-surface-2", children: table.getHeaderGroups().map((headerGroup) => (_jsx("tr", { children: headerGroup.headers.map((header) => (_jsx("th", { className: cn('px-md py-sm text-left text-sm font-medium text-text', 'border-b border-border', header.column.getCanSort() && 'cursor-pointer select-none hover:bg-surface-3'), onClick: header.column.getToggleSortingHandler(), children: _jsxs("div", { className: "flex items-center gap-xs", children: [flexRender(header.column.columnDef.header, header.getContext()), header.column.getIsSorted() && (_jsx("span", { className: "text-primary", children: header.column.getIsSorted() === 'asc' ? '↑' : '↓' }))] }) }, header.id))) }, headerGroup.id))) }), _jsx("tbody", { children: table.getRowModel().rows.map((row) => (_jsx("tr", { className: cn('border-b border-border transition-colors', 'hover:bg-surface-2', onRowClick && 'cursor-pointer'), onClick: () => onRowClick?.(row.original), children: row.getVisibleCells().map((cell) => (_jsx("td", { className: "px-md py-sm text-sm text-text", children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id))) }, row.id))) })] }) }) }), enablePagination && (_jsxs("div", { className: "flex items-center justify-between px-md", children: [_jsxs("div", { className: "text-sm text-text-muted", children: [table.getFilteredSelectedRowModel().rows.length, " of", ' ', table.getFilteredRowModel().rows.length, " row(s) selected"] }), _jsxs("div", { className: "flex items-center gap-sm", children: [_jsx("button", { className: "px-md py-sm rounded-md bg-surface text-text border border-border hover:bg-surface-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors", onClick: () => table.previousPage(), disabled: !table.getCanPreviousPage(), children: "Previous" }), _jsxs("span", { className: "text-sm text-text", children: ["Page ", table.getState().pagination.pageIndex + 1, " of", ' ', table.getPageCount()] }), _jsx("button", { className: "px-md py-sm rounded-md bg-surface text-text border border-border hover:bg-surface-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors", onClick: () => table.nextPage(), disabled: !table.getCanNextPage(), children: "Next" })] })] }))] }));
}
//# sourceMappingURL=DataTable.js.map