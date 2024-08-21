"use client";

import { login } from "@/app/service/service";
import { Box, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CustomButton from "../component/custom-button";
import CustomTextField from "../component/custom-textfield";
type Props = {};

export const Login = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { t } = useTranslation(["login"]);

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
    navigate("/register/register-owner");
  };
  return (
    <>
      <Grid
        container
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#55BA76",
        }}
      >
        <Grid
          item
          sx={{
            border: "1px solid #55BA76",
            borderRadius: "10px",
            width: "auto",
            padding: 2,
            backgroundColor: "white",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "50px",
              fontWeight: "600",
              color: "#55BA76",
            }}
          >
            {t("login")}
          </Typography>
          <Box sx={{ padding: "20px" }}>
            <CustomTextField
              sx={{ width: "100%", marginBottom: "30px" }}
              id="outlined-basic"
              value={email}
              label={t("email")}
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />
            <CustomTextField
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
            <CustomButton
              sx={{
                marginRight: "10px",
                color: "#55BA76",
                backgroundColor: "white",
              }}
              onClick={handleLogin}
            >
              {t("login")}
            </CustomButton>

            <CustomButton onClick={handleRegister}>
              {t("register")}
            </CustomButton>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
