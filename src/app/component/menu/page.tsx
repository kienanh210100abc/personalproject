"use client";
import logo from "@/app/assets/sir.png";
import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import CustomButton from "../custom-button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {};

export const Menu = (props: Props) => {
  const { t } = useTranslation(["language"]);
  const router = useRouter();

  const [storeName, setStoreName] = useState("");
  useEffect(() => {
    const storeStorage = localStorage.getItem("store");
    if (storeStorage) {
      const store = JSON.parse(storeStorage);
      setStoreName(store.storeName);
    } else {
    }
  }, []);
  const handleClick = () => {
    router.push("/page/homepage");
  };
  const handleGeneral = () => {
    router.push("/page/general");
  };
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Drawer
          sx={{
            "& .MuiDrawer-paper": {
              width: 220,
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "1px solid black",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Image
            style={{
              height: "100px",
              width: "100px",
              marginBottom: "20px",
              marginTop: "20px",
              cursor: "pointer",
            }}
            onClick={() => handleClick()}
            className="logo"
            src={logo}
            alt="logo"
          />
          <Typography
            sx={{
              marginBottom: "50px",
              fontSize: "30px",
              fontWeight: "500",
            }}
          >
            {storeName}
          </Typography>
          <List
            className="menuNav"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              padding: 0,
              width: "100%",
            }}
          >
            <Box
              sx={{
                width: "100%",
                "& ul:not(:last-child)": { mb: 2 },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <ul>
                <CustomButton onClick={handleGeneral}>
                  <Typography>{t("general")}</Typography>
                </CustomButton>
              </ul>
              <ul>
                <CustomButton>
                  <Typography>{t("product")}</Typography>
                </CustomButton>
              </ul>
              <ul>
                <CustomButton>
                  <Typography>{t("sale")}</Typography>
                </CustomButton>
              </ul>
              <ul>
                <CustomButton>
                  <Typography>{t("spent")}</Typography>
                </CustomButton>
              </ul>
              <ul>
                <CustomButton>
                  <Typography>{t("income")}</Typography>
                </CustomButton>
              </ul>
              <ul>
                <CustomButton>
                  <Typography>{t("employee")}</Typography>
                </CustomButton>
              </ul>
              <ul>
                <CustomButton>
                  <Typography>{t("customer")}</Typography>
                </CustomButton>
              </ul>
            </Box>
          </List>
        </Drawer>
      </Box>
    </>
  );
};

export default Menu;
