"use client";
// Sửa imports để trỏ đến vị trí mới
import React from "react";
import ComplaintedForm from "../../components/features/user/ComplaintedForm";
import Header from "../../components/layout/Header";
import Features from "../../components/layout/Features";
import Footer from "../../components/layout/Footer";

const ContactedUs = () => {
  return (
    <div className="flex flex-col bg-white min-h-[screen] pt-3">
      <Header />
      <main className="flex flex-col px-64 py-10 max-md:px-10 max-sm:px-5">

        <h1 className="mb-10 mt-10 text-3xl font-semibold">Khiếu nại và báo cáo</h1>

        <div className="flex items-center justify-center gap-10 max-md:flex-col">
          <ComplaintedForm />
        </div>
      </main>

      <Features />
      <Footer />
    </div>
  );
};

export default ContactedUs;
