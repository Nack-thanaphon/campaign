import { useTableData } from "@/hook/useTableData";
import DeleteModal from "@/shared/components/DeleteModal";
import Modal from "@/shared/components/Modal";
import Register from "@/shared/components/Register";
import StatusModal from "@/shared/components/StatusModal";
import Table from "@/shared/components/Table";
import { getTotalProfilesCount } from "@/shared/services/superbase.service";
import { Download, Filter, Plus, Search } from "lucide-react";
import Link from "next/link";
import React, { use, useEffect, useState } from "react";


const CustomerTable = () => {
  const { data, addData, updateData, deleteData, setFilter, pagination, getOneData, setPagination } = useTableData();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [total, setTotal] = useState<number>(0);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [previewData, setPreviewData] = useState<any>(null);

  const handleEdit = (item: any) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const handleDelete = (id: number) => {
    const { showDeleteConfirm } = DeleteModal({
      onDelete: async () => {
        await deleteData(id);
      },
    });
    showDeleteConfirm();
  };

  const handleSave = (item: any) => {
    if (editingItem) {
      updateData(editingItem.id, item);
    } else {
      addData(item);
    }
    StatusModal.success('บันทึกข้อมูลสำเร็จ');
    setIsModalOpen(false);
  };

  const handlePageChange = (newPage: number) => {
    setPagination({
      page: newPage,
      limit: pagination.limit,
      total: pagination.total
    });
  };

  const handleLimitChange = (newLimit: number) => {
    setPagination({
      page: 1,
      limit: newLimit,
      total: pagination.total
    });
  };

  const handlePreview = async (id: number) => {
    try {
      const data = await getOneData(id);
      setPreviewData(data);
      setIsPreviewModalOpen(true);
    } catch (error) {
      console.error('Error fetching preview:', error);
    }
  };

  const fetchTotalProfilesCount = async () => {
    const { data, error } = await getTotalProfilesCount();
    if (error) {
      console.error('Error fetching total profiles count:', error);
    } else {
      console.log('data', data)
      setTotal(data ?? 0);
    }
  };


  useEffect(() => {
    fetchTotalProfilesCount();
  }, []);


  return (
    <div className="w-full p-0">
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="border rounded-md py-3 px-5">
          <p>ร้านค้าทั้งหมด</p>
          <h1>{total}</h1>
        </div>
        <div className="border border-red-400 rounded-md py-3 px-5">
          <p>รอการจัดส่ง</p>
          <h1>0</h1>
        </div>
        <div className="border border-green-400 rounded-md py-3 px-5">
          <p>สำเร็จ</p>
          <h1>0</h1>
        </div>
      </div>
      <div className="py-4 border-b border-gray-100 bg-gray-50 flex flex-wrap justify-between items-center gap-3">
        <div className="lg:flex items-center justify-between lg:space-x-2 w-full">
          <div className="flex gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                onChange={(e) => setFilter(e.target.value)}
                className="pl-9 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent lg:w-64"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
            {/* <button className="p-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100">
              <Filter className="h-4 w-4" />
            </button> */}
          </div>
          <div className="mt-1">
            <Link href={'/admin/customers/create'} className="bg-blue-600 !text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
              <Plus className="h-4 w-4 mr-2" />
              เพิ่ม
            </Link>
          </div>
        </div>
      </div>
      {!isModalOpen && (
        <Table
          columns={["profile_name", "slug", "website", "business_type.name", "is_review_redirect"]}
          header={["ชือร้านค้า", "slug", "เว็บไซต์", "ประเภท", "สถานะ redirect", "จัดการ"]}
          data={data}
          edit_link="/admin/customers/"
          onEdit={handleEdit}
          onPreview={handlePreview}
          onDelete={handleDelete}
          pagination={pagination}
          onPageChange={handlePageChange}
          onLimitChange={handleLimitChange}
        />

      )}
      {/* Preview Modal */}
      <Modal isOpen={isPreviewModalOpen} onClose={() => setIsPreviewModalOpen(false)}>
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-5">รายละเอียดกิจกรรม</h2>
          {previewData && (
            <div className="text-start space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">ประเภทกิจกรรม</label>
                <p className="mt-1 text-gray-900">{previewData.event_type}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">รายละเอียด</label>
                <p className="mt-1 text-gray-900">{previewData.event_detail}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">วันที่สร้าง</label>
                <p className="mt-1 text-gray-900">
                  {new Date(previewData.created_at).toLocaleString('th-TH')}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">อัพเดทล่าสุด</label>
                <p className="mt-1 text-gray-900">
                  {new Date(previewData.updated_at).toLocaleString('th-TH')}
                </p>
              </div>
            </div>
          )}
          <div className="mt-6 flex justify-end">
            <button
              onClick={() => setIsPreviewModalOpen(false)}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
            >
              ปิด
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CustomerTable;