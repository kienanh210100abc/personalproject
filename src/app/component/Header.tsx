"use client";

import {
  AppBar,
  Box,
  Button,
  Popover,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

type Props = {};

export const Header = (props: Props) => {
  const { i18n } = useTranslation();
  const { t } = useTranslation(["header"]);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [profileAnchorEl, setProfileAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const [currentLanguage, setCurrentLanguage] = React.useState<string>("vi");
  // const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const profilePopoverOpen = Boolean(profileAnchorEl);
  const id = open ? "simple-popper" : undefined;
  const profileId = profilePopoverOpen ? "profile-popper" : undefined;

  const userStorage = localStorage.getItem("user");
  let email = "";
  if (userStorage) {
    const user = JSON.parse(userStorage);
    email = user.email;
  } else {
    console.log("Không tìm thấy dữ liệu người dùng trong localStorage.");
  }

  const changeLanguage = (lng: "en" | "vi") => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
    handleClose();
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setProfileAnchorEl(profileAnchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setProfileAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.clear();
    // navigate("/");
  };

  const viewProfile = () => {
    // navigate("/profile");
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - 250px)`,
        boxShadow: "unset",
        backgroundColor: "#ffff",
        color: "#000",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "70px",
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid black",
          gap: "30px",
        }}
      >
        <Typography
          sx={{ marginLeft: "auto", cursor: "pointer" }}
          aria-describedby={profileId}
          onClick={handleProfileClick}
        >
          {t("hello")} {email}
        </Typography>

        <Popover
          id={profileId}
          open={profilePopoverOpen}
          anchorEl={profileAnchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              p: 2,
              minWidth: "200px",
            }}
          >
            <Button onClick={viewProfile} sx={{ mb: 1, textAlign: "left" }}>
              {t("profile")}
            </Button>
            <Button onClick={() => handleLogout()} sx={{ textAlign: "left" }}>
              {t("logout")}
            </Button>
          </Box>
        </Popover>

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "right",
            }}
          >
            <Button onClick={() => changeLanguage("vi")} sx={{ p: 2 }}>
              {t("vi")}
            </Button>
            <Button onClick={() => changeLanguage("en")} sx={{ p: 2 }}>
              {t("en")}
            </Button>
          </Box>
        </Popover>

        <Button
          sx={{
            marginRight: "20px",
          }}
          aria-describedby={id}
          onClick={handleClick}
          variant="contained"
        >
          {t(currentLanguage)}
        </Button>
      </Box>
    </AppBar>
  );
};

export default Header;
