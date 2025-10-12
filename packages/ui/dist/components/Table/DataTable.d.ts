import type { ColumnDef } from '@tanstack/react-table';
export interface DataTableProps<TData> {
    data: TData[];
    columns: ColumnDef<TData>[];
    enablePagination?: boolean;
    enableSorting?: boolean;
    enableFiltering?: boolean;
    enableColumnVisibility?: boolean;
    onRowClick?: (row: TData) => void;
    className?: string;
}
export declare function DataTable<TData>({ data, columns, enablePagination, enableSorting, enableFiltering, onRowClick, className }: DataTableProps<TData>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=DataTable.d.ts.map