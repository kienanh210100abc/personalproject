"use client";

import React, { useState } from "react";
import { register } from "@/app/service/service";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
type Props = {};

export const RegisterOwner = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { t } = useTranslation(["register"]);

  const handleValidatePassword = () => {
    if (password !== confirmPassword) {
      return "Mật khẩu xác nhận không khớp!";
    }
    return "";
  };

  const handleRegister = async () => {
    const error = handleValidatePassword();
    if (error) {
      setErrorMessage(error);
    } else {
      try {
        const response = await register(email, password);
        if (response) {
          toast.success(t("success"));
          navigate("/register-store");
        }
      } catch (error) {
        toast.error(t("fail"));
      }
      console.log({
        lastName,
        firstName,
        email,
        password,
        confirmPassword,
        phone,
      });
    }
  };
  const handleLogin = () => {
    navigate("/");
  };

  return (
    <>
      <Grid
        container
        sx={{
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        <Grid
          item
          sx={{
            border: "1px solid",
            borderRadius: "10px",
            width: "auto",
            padding: 2,
          }}
        >
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "50px",
              fontWeight: "600",
              marginBottom: "20px",
            }}
          >
            {t("register")}
          </Typography>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "20px",
              marginBottom: "20px",
            }}
          >
            {t("basic")}
          </Typography>
          <Box
            sx={{
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TextField
              sx={{ width: "400px", marginBottom: "15px" }}
              id="outlined-basic"
              label={t("l_name")}
              variant="outlined"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
              sx={{ width: "400px", marginBottom: "15px" }}
              id="outlined-basic"
              label={t("f_name")}
              variant="outlined"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              sx={{ width: "400px", marginBottom: "15px" }}
              id="outlined-basic"
              value={email}
              label={t("email")}
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              sx={{ width: "400px", marginBottom: "15px" }}
              id="outlined-basic"
              label={t("password")}
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              sx={{ width: "400px", marginBottom: "15px" }}
              id="outlined-basic"
              label={t("confirm")}
              variant="outlined"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={!!errorMessage}
              helperText={errorMessage}
            />
            <TextField
              sx={{ width: "400px", marginBottom: "15px" }}
              id="outlined-basic"
              label={t("phone")}
              variant="outlined"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Box>
          <Box
            sx={{
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <Button
              sx={{ width: "15vh", marginBottom: "10px" }}
              variant="contained"
              onClick={handleRegister}
            >
              {t("next")}
            </Button>
            <Button onClick={handleLogin}>
              <Typography>{t("login")}</Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default RegisterOwner;
