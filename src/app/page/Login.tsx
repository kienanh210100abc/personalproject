"use client";

import { Box, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import CustomButton from "../component/custom-button";
import CustomTextField from "../component/custom-textfield";
import { login } from "../service/service";
import { toast } from "react-toastify";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { t } = useTranslation(["language"]);
  const router = useRouter();

  const handleErrorMessage = (message: string) => {
    const lowerCaseMessage = message.toLowerCase();
    switch (lowerCaseMessage) {
      case "user not found":
        toast.error(t("not-found"));
        break;
      case "missing email or username":
        toast.error(t("empty-login"));
        break;
      default:
        toast.error(t("login-failed"));
    }
  };

  const handleLogin = async () => {
    try {
      const response = await login(email, password);

      if (response) {
        toast.success(t("login-success"));
        localStorage.setItem("user", JSON.stringify({ email, password }));
        router.push("/page/homepage");
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log("Error message:", error.message); // Log thông điệp lỗi
        handleErrorMessage(error.message);
      } else {
        toast.error(t("login-failed"));
      }
    }
  };

  const handleRegister = () => {
    router.push("register/register-owner");
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
              label={t("email") + ": eve.holt@reqres.in"}
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
              onClick={handleRegister}
              sx={{
                marginRight: "10px",
                color: "#55BA76",
                backgroundColor: "white",
              }}
            >
              {t("register")}
            </CustomButton>
            <CustomButton onClick={handleLogin}>{t("login")}</CustomButton>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
