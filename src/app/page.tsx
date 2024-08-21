"use client";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/app/i18n/i18n";
import RegisterOwner from "./page/register/register-owner";
import RegisterStore from "./page/register/register-store";
import HomePage from "./page/HomePage";
import Login from "./page/Login";
import Profile from "./page/Profile";
// import MainLayout from "./layout/MainLayout";
const show = true;
const handleClose = () => console.log("Close clicked");
const dataDetailts = {};
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
          <Route index path="/" element={<Login />} />
          <Route path="/register/register-owner" element={<RegisterOwner />} />
          <Route path="/register-store" element={<RegisterStore />} />
          {/* <Route path="/" element={<MainLayout />}> */}
          <Route path="/homepage" element={<HomePage />} />
          <Route
            path="/profile"
            element={
              <Profile
                show={show}
                handleClose={handleClose}
                dataDetailts={dataDetailts}
              />
            }
          />
          {/* </Route> */}
          {/* <Route path="/register" element={<RegisterOwner />} />
          <Route path="/register-store" element={<RegisterStore />} />
          <Route path="/homePage" element={<HomePage />} />
          <Route
            path="/profile"
            element={
              <Profile
                show={show}
                handleClose={handleClose}
                dataDetailts={dataDetailts}
              />
            }
          /> */}
        </Routes>
      </Router>
    </>
  );
}
