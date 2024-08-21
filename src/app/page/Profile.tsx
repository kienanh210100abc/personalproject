import { Box, Toolbar } from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../component/header";
import Menu from "../component/menu";
type Props = {
  show: boolean;
  handleClose: () => void;
  dataDetailts: any;
};

export const Profile = (props: Props) => {
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
