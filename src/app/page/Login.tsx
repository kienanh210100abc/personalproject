"use client";

import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { login } from "@/app/service/service";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

type Props = {};

const Login = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { t } = useTranslation(["login"]);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await login(email, password);

      if (response) {
        toast.success("Successfully");
        localStorage.setItem("user", JSON.stringify({ email }));
        navigate("/homePage", { state: { email } });
      }
    } catch (error) {
      toast.error("Login failed");
    }
  };
  const handleRegister = () => {
    navigate("/register");
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
            }}
          >
            {t("login")}
          </Typography>
          <Box sx={{ padding: "20px" }}>
            <TextField
              sx={{ width: "100%", marginBottom: "30px" }}
              id="outlined-basic"
              value={email}
              label={t("email")}
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              label={t("password")}
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Box
            sx={{
              padding: "20px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              sx={{ marginRight: "10px" }}
              variant="contained"
              onClick={handleLogin}
            >
              {t("login")}
            </Button>

            <Button variant="contained" onClick={handleRegister}>
              {t("register")}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
