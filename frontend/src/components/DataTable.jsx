import React, { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import { FaArrowLeft, FaArrowRight, FaSearch, FaFilter, FaTimes, FaCheck } from "react-icons/fa";
import { Input } from "./ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "./ui/dialog";

const DataTable = ({ columns, data }) => {
  const [filtering, setFiltering] = useState("");
  const [columnFilters, setColumnFilters] = useState([]);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("scheduled");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter: filtering,
      columnFilters: columnFilters,
    },
    onGlobalFilterChange: setFiltering,
    onColumnFiltersChange: setColumnFilters,
  });

  const handleAdvancedFilters = () => {
    setShowAdvancedFilters(false);
    // Apply advanced filters logic here
  };

  const getThemeClasses = () => {
    switch (currentTheme) {
      case "pending":
        return "bg-yellow-50 text-yellow-800";
      case "cancelled":
        return "bg-red-50 text-red-800";
      case "scheduled":
        return "bg-green-50 text-green-800";
      default:
        return "bg-violet-50 text-violet-800";
    }
  };

  const handleFilterChange = (value) => {
    setColumnFilters([{ id: 'status', value: value }]);
    switch (value) {
      case "pending":
        setCurrentTheme("pending");
        break;
      case "cancelled":
        setCurrentTheme("cancelled");
        break;
      case "scheduled":
        setCurrentTheme("scheduled");
        break;
      default:
        setCurrentTheme("default");
    }
  };

  return (
    <div className={`rounded-md border ${getThemeClasses()} font-serif`}>
      <div className="p-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Input
              placeholder="Search..."
              value={filtering}
              onChange={(e) => setFiltering(e.target.value)}
              className={`pl-12 pr-4 py-3 max-w-sm text-lg font-medium bg-white border-${currentTheme === "default" ? "violet" : currentTheme}-200 focus:border-${currentTheme === "default" ? "violet" : currentTheme}-400 focus:ring-${currentTheme === "default" ? "violet" : currentTheme}-300`}
            />
            <FaSearch className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-${currentTheme === "default" ? "violet" : currentTheme}-400 text-xl`} />
          </div>
          <Select onValueChange={handleFilterChange}>
            <SelectTrigger className={`w-[200px] bg-white border-${currentTheme === "default" ? "violet" : currentTheme}-200 focus:border-${currentTheme === "default" ? "violet" : currentTheme}-400 focus:ring-${currentTheme === "default" ? "violet" : currentTheme}-300`}>
              <SelectValue placeholder="Filter" className="text-lg font-medium" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pending" className="text-lg">Pending</SelectItem>
              <SelectItem value="cancelled" className="text-lg">Cancelled</SelectItem>
              <SelectItem value="scheduled" className="text-lg">Scheduled</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="lg" className={`bg-white text-${currentTheme === "default" ? "violet" : currentTheme}-700 border-${currentTheme === "default" ? "violet" : currentTheme}-300 hover:bg-${currentTheme === "default" ? "violet" : currentTheme}-100`}>
              <FaFilter className="mr-3 text-xl" /> Advanced Filters
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Advanced Filters</DialogTitle>
            </DialogHeader>
            {/* Add your advanced filter components here */}
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowAdvancedFilters(false)}>
                <FaTimes className="mr-2" /> Cancel
              </Button>
              <Button onClick={handleAdvancedFilters}>
                <FaCheck className="mr-2" /> Apply Filters
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className={`bg-${currentTheme === "default" ? "violet" : currentTheme}-100`}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id} className={`text-lg font-semibold text-${currentTheme === "default" ? "violet" : currentTheme}-800 py-4`}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className={`hover:bg-${currentTheme === "default" ? "violet" : currentTheme}-50`}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="text-base py-4">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className={`h-32 text-center text-lg text-${currentTheme === "default" ? "violet" : currentTheme}-600`}>
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className={`p-6 flex items-center justify-between ${getThemeClasses()}`}>
        <div className={`flex-1 text-base text-${currentTheme === "default" ? "violet" : currentTheme}-600`}>
          {table.getFilteredRowModel().rows.length} row(s) total
        </div>
        <div className="flex space-x-4">
          <Button
            variant="outline"
            size="lg"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className={`bg-white text-${currentTheme === "default" ? "violet" : currentTheme}-700 border-${currentTheme === "default" ? "violet" : currentTheme}-300 hover:bg-${currentTheme === "default" ? "violet" : currentTheme}-100 disabled:opacity-50`}
          >
            <FaArrowLeft className="mr-3 text-xl" /> Previous
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className={`bg-white text-${currentTheme === "default" ? "violet" : currentTheme}-700 border-${currentTheme === "default" ? "violet" : currentTheme}-300 hover:bg-${currentTheme === "default" ? "violet" : currentTheme}-100 disabled:opacity-50`}
          >
            Next <FaArrowRight className="ml-3 text-xl" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;