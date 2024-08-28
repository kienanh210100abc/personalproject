"use client";

import CustomButton from "@/app/component/custom-button";
import CustomTextField from "@/app/component/custom-textfield";
import { Box, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

type Props = {};

const ChangePass = (props: Props) => {
  const { t } = useTranslation(["language"]);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    const userStorage = localStorage.getItem("user");
    if (userStorage) {
      const user = JSON.parse(userStorage);
      setPassword(user.password);
    } else {
    }
  }, []);

  const handleValidatePassword = () => {
    if (password !== confirmPassword) {
      return t("validate-pass");
    }
    return "";
  };

  const handleSubmit = () => {
    const errorPass = handleValidatePassword();
    if (errorPass) {
      setErrorMessage(errorPass);
    }
  };
  const hadleSaleSetting = () => {
    router.push("sale-setting");
  };
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ padding: "20px" }}>
          <Typography sx={{ fontSize: "30px", fontWeight: "600" }}>
            {t("general")}
          </Typography>
        </Box>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <CustomButton sx={{ marginRight: "20px" }} onClick={hadleSaleSetting}>
            {t("tab1")}
          </CustomButton>
          <CustomButton>{t("tab2")}</CustomButton>
        </Box>
        <Box>
          <Grid
            container
            sx={{
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid black",
              //   backgroundColor: "#55BA76",
            }}
          >
            <Grid
              item
              sx={{
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
                  fontSize: "35px",
                  fontWeight: "600",
                  color: "#55BA76",
                  marginBottom: "10px",
                }}
              >
                {t("change")}
              </Typography>

              <Box
                sx={{
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <CustomTextField
                  sx={{ width: "400px", marginBottom: "15px" }}
                  id="outlined-basic"
                  label={t("current-pass")}
                  variant="outlined"
                  value={password}
                  type="password"
                  //   onChange={(e) => setStoreName(e.target.value)}
                />
                <CustomTextField
                  sx={{ width: "400px", marginBottom: "15px" }}
                  id="outlined-basic"
                  label={t("new-pass")}
                  variant="outlined"
                  // value={description}
                  //   onChange={(e) => setDescription(e.target.value)}
                />

                <CustomTextField
                  sx={{ width: "400px", marginBottom: "15px" }}
                  id="outlined-basic"
                  label={t("confirm")}
                  variant="outlined"
                  type="text"
                  // value={hotline}
                  //   onChange={(e) => setHotline(e.target.value)}
                  error={!!errorMessage}
                  helperText={errorMessage}
                />
                <CustomButton
                  sx={{
                    width: "15vh",
                    marginBottom: "10px",
                    alignSelf: "center",
                  }}
                  variant="contained"
                  onClick={handleSubmit}
                >
                  {t("submit")}
                </CustomButton>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ChangePass;
