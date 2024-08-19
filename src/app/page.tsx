"use client";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import Register from "./page/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./page/HomePage";

export default function Home() {
  return (
    <>
      <Router>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/homePage" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}
