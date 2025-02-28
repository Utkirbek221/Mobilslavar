import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-[#222831] pb-[150px] pt-[80px]">
      <Header/>
      <Outlet />
      <Footer />
    </div>
  );
}
