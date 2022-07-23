import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import SortingStatus from "./SortingStatus";

interface Item {
  name: string;
  price: number;
}

const columns: ColumnDef<Item>[] = [
  {
    header: "Name",
    accessorKey: "name",
    filterFn: "auto",
  },
  {
    header: "Price",
    accessorKey: "price",
    filterFn: (row, columnId, filterValue) =>
      String(row.getValue(columnId)).includes(filterValue),
  },
  {
    header: "Formatted",
    accessorFn: (row) => `${row.name} $${row.price}`,
    filterFn: "auto",
  },
];

interface TableProps {
  initialData: Item[];
}

function CustomTable(props: TableProps) {
  const [data, setData] = useState(props.initialData);

  const table = useReactTable({
    data: data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <table className="table">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => {
          return (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th key={header.id}>
                    <button
                      className="column-btn"
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      <SortingStatus direction={header.column.getIsSorted()} />
                    </button>
                    <input
                      value={header.column.getFilterValue() as string}
                      onChange={(e) => {
                        let val: string = e.target.value;
                        header.column.setFilterValue(val);
                      }}
                      type="text"
                    />
                  </th>
                );
              })}
            </tr>
          );
        })}
      </thead>

      <tbody>
        {table.getRowModel().rows.map((row) => {
          return (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => {
                return (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default CustomTable;
