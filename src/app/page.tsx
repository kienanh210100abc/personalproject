"use client";

import "@/app/i18n/i18n";
import "react-toastify/dist/ReactToastify.css";
import Login from "./page/login";
import RegisterOwner from "@/app/page/register/register-owner/page";
const show = true;
const handleClose = () => console.log("Close clicked");
const dataDetailts = {};
export default function Home() {
  return (
    <>
      {/* <Router>
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
          <Route
            path="/page/register/register-owner"
            element={<RegisterOwner />}
          />
          <Route path="/register-store" element={<RegisterStore />} />
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
        </Routes>
      </Router> */}
      <Login />
      {/* <RegisterOwner /> */}
    </>
  );
}
