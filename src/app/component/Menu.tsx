"use client";
import logo from "@/app/assets/sir.png";
import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {};

const Menu = (props: Props) => {
  const location = useLocation();
  const { t } = useTranslation(["menu"]);
  const navigate = useNavigate();

  let style = {
    textDecoration: "none",
  };

  const handleClick = () => {
    navigate("/homePage");
  };
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Drawer
          sx={{
            // display: "flex",
            // justifyContent: "center",
            // padding: 0,
            // flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: 250,
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
            <div>
              <ul>
                <Button onClick={() => navigate("/homePage")}>
                  <Typography>{t("dashboard")}</Typography>
                </Button>
              </ul>
              <ul>
                <Button>
                  <Typography>{t("p2")}</Typography>
                </Button>
              </ul>
              <ul>
                <Button>
                  <Typography>{t("p3")}</Typography>
                </Button>
              </ul>
            </div>
          </List>
        </Drawer>
      </Box>
    </>
  );
};

export default Menu;
