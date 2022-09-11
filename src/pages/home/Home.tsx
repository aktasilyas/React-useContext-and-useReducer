import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import Dashboard from "../dashboard/Dashboard";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Login from "../login/Login";

export default function Home() {
  const {user}=useAuth()
  return (
    <div className="w-full h-full duration-500 bg-white text-black dark:bg-black dark:text-white">
      <Header />
      {user ? <Dashboard/> : <Login />}
      <Footer/>
    </div>
  );
}
