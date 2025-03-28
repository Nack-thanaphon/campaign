import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  Eye,
  Edit2,
  Trash2,
  Link as LinkIcon,
  Copy,
} from 'lucide-react';
import Link from 'next/link';

interface TableProps {
  columns: string[];
  header: string[];
  data: Record<string, any>[];  // Better typing for data
  edit_link: string;  // Better typing for data
  onEdit: (item: any) => void;
  onDelete: (id: number) => void;
  pagination: {
    page: number;
    limit: number;
    total: number;
  };
  onPreview: (id: number) => void;
  onPageChange: (newPage: number) => void;
  onLimitChange: (newLimit: number) => void;
}

const Table: React.FC<TableProps> = ({ columns, header, data, edit_link, onEdit, onDelete, onPreview, pagination, onPageChange, onLimitChange }) => {
  const [sortField, setSortField] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  // Handle sorting
  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  // Apply sorting and filtering
  const filteredData = data
    .filter(item =>
      columns.some(col => item[col].toString().toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      if (!sortField) return 0;

      if (sortDirection === 'asc') {
        return a[sortField] > b[sortField] ? 1 : -1;
      } else {
        return a[sortField] < b[sortField] ? 1 : -1;
      }
    });

  // Pagination
  const totalPages = Math.ceil(filteredData.length / pagination.limit);

  // Handle row selection
  const toggleSelectRow = (id: number) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter(rowId => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const toggleSelectAll = () => {
    if (selectedRows.length === data.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.map(row => row.id));
    }
  };

  const handleCopyLink = (link: string) => {
    navigator.clipboard.writeText(link).then(() => {
      alert('Link copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy link: ', err);
    });
  };


  // Get status badge styling
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active':
        return "bg-green-100 text-green-800 border border-green-200";
      case 'Inactive':
        return "bg-gray-100 text-gray-800 border border-gray-200";
      default:
        return "bg-blue-100 text-blue-800 border border-blue-200";
    }
  };


  const renderTableCell = (row: any, column: string) => {
    // Handle nested object paths (e.g., "business_type.name")
    if (column.includes('.')) {
      const parts = column.split('.');
      let value = row;
      for (const part of parts) {
        value = value?.[part];
      }
      return value || '-';
    }

    // Handle boolean values
    if (typeof row[column] === 'boolean') {
      return row[column] ? (
        <span className="px-2 py-1 text-sm rounded-full bg-green-100 text-green-800">
          Yes
        </span>
      ) : (
        <span className="px-2 py-1 text-sm rounded-full bg-red-100 text-red-800">
          No
        </span>
      );
    }

    // Return regular value or dash if null/undefined
    return row[column] || '-';
  };

  return (
    <div className=" bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No.</th>
              {header?.map((col, index) => (
                <th key={index} onClick={() => handleSort(col)} className="text-nowrap px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer">
                  {col}
                  {sortField === col && (
                    sortDirection === 'asc' ? <ChevronUp className="inline-block ml-1 h-4 w-4" /> : <ChevronDown className="inline-block ml-1 h-4 w-4" />
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data?.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-100">
                <td className="px-6 py-4">{rowIndex + 1 + (pagination.page - 1) * pagination.limit}</td>
                {columns?.map((col, colIndex) => (
                  <td key={colIndex} className="px-6 py-4 ">{renderTableCell(row, col)}</td>
                ))}
                <td className="px-6 py-4 flex space-x-2">
                  <div className="flex items-center justify-end space-x-2">
                    <Link target='_blank' href={`/${row.slug}`}
                      className="p-1 text-blue-600 hover:text-blue-800 rounded-full hover:bg-blue-50"
                    >
                      <LinkIcon className="h-4 w-4" />
                    </Link>
                    <button
                      onClick={() => handleCopyLink(row.website)}
                      className="p-1 text-gray-600 hover:text-gray-800 rounded-full hover:bg-gray-50"
                    >
                      <Copy className="h-4 w-4" />
                    </button>
                    <Link href={edit_link + "/" + row.id} className="p-1 text-green-600 hover:text-green-800 rounded-full hover:bg-green-50">
                      <Edit2 className="h-4 w-4" />
                    </Link>
                    <button onClick={() => onDelete(row.id)} className="p-1 text-red-600 hover:text-red-800 rounded-full hover:bg-red-50">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="py-4 px-6 border-t border-gray-100 bg-gray-50 flex flex-wrap justify-between items-center gap-4">
        <div className="text-sm text-gray-600">
          Showing {(pagination.page - 1) * pagination.limit + 1} to {Math.min(pagination.page * pagination.limit, filteredData.length)} of {filteredData.length} entries
        </div>
        <div className="flex items-center space-x-2">
          <label>
            Rows per page:
            <select value={pagination.limit} onChange={(e) => onLimitChange(Number(e.target.value))} className="ml-2 border rounded p-1">
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
            </select>
          </label>
          <button onClick={() => onPageChange(pagination.page - 1)} disabled={pagination.page === 1} className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50">
            Previous
          </button>
          <span>{pagination.page}</span>
          <button onClick={() => onPageChange(pagination.page + 1)} disabled={pagination.page * pagination.limit >= pagination.total} className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;