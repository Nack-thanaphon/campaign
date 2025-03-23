'use client'
import { generateHref } from "@/app/utils/common.util";
import Link from "next/link";
import React from "react";

const BackTo = ({ to }: { to: string }) => {
  return (
    <Link href={to}>
      <div className="d-flex align-items-center mb-3">
        <div
          className="d-flex justify-content-center align-items-center bg-dark text-white"
          style={{ width: 20, height: 20, borderRadius: "50%" }}
        >
          <i
            className="fa-solid fa-chevron-left"
            style={{ fontSize: ".7rem" }}
          />
        </div>
        <div className="ms-2">ย้อนกลับ</div>
      </div>
    </Link>
  );
};

export default BackTo;
