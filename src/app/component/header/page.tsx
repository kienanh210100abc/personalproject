"use client";

import { AppBar, Box, Button, Popover, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import i18n from "@/app/i18n/i18n";
import CustomButton from "../custom-button";

type Props = {};

export const Header = (props: Props) => {
  const { t } = useTranslation(["language"]);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [profileAnchorEl, setProfileAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const [currentLanguage, setCurrentLanguage] = React.useState<string>("vi");
  const open = Boolean(anchorEl);
  const profilePopoverOpen = Boolean(profileAnchorEl);
  const id = open ? "simple-popper" : undefined;
  const profileId = profilePopoverOpen ? "profile-popper" : undefined;
  const router = useRouter();
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    const userStorage = localStorage.getItem("user");
    if (userStorage) {
      const user = JSON.parse(userStorage);
      setEmail(user.email);
    } else {
    }
  }, []);
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
    router.push("/");
  };

  const viewProfile = () => {
    router.push("/page/profile");
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - 220px)`,
        boxShadow: "unset",
        backgroundColor: "#ffff",
        color: "#000",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "65px",
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
        <AccountCircleIcon fontSize="large" />
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
            <Button onClick={handleLogout} sx={{ textAlign: "left" }}>
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

        <CustomButton
          sx={{
            marginRight: "20px",
            display: "flex",
            alignItems: "center",
          }}
          aria-describedby={id}
          onClick={handleClick}
          variant="contained"
        >
          {t(currentLanguage)}
        </CustomButton>
      </Box>
    </AppBar>
  );
};

export default Header;
