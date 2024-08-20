import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Header from "../component/Header";
import Menu from "../component/Menu";
import { Box, Toolbar, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

type Props = {
  show: boolean;
  handleClose: () => void;
  dataDetailts: any;
};

const Profile = (props: Props) => {
  const { show, handleClose, dataDetailts } = props;
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [avt, setAvt] = useState("");
  useEffect(() => {
    if (show) {
      setFName(dataDetailts.first_name);
      setLName(dataDetailts.last_name);
      setEmail(dataDetailts.email);
      setAvt(dataDetailts.avatar);
    }
  }, [dataDetailts, show]);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Header />
        <Box
          component="nav"
          sx={{ width: "242px", flexShrink: 0, backgroundColor: "red" }}
        >
          <Menu />
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            width: `calc(100% - 200px)`,
          }}
        >
          <Toolbar />
          profile
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default Profile;
