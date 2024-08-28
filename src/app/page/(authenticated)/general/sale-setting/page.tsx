"use client";

import CustomTab from "@/app/component/custom-tab";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import React from "react";
import { useTranslation } from "react-i18next";
import ChangePass from "../change-pass/page";
import ManageSpace from "./manage-space";
import AddNew from "./add-new";

type Props = {};
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const SaleSetting = (props: Props) => {
  const [value, setValue] = React.useState(0);
  const { t } = useTranslation(["language"]);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
          }}
        >
          <Box sx={{ padding: "20px" }}>
            <Typography sx={{ fontSize: "30px", fontWeight: "600" }}>
              {t("general")}
            </Typography>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                sx={{
                  ".MuiTabs-indicator": {
                    display: "none",
                  },
                }}
              >
                <CustomTab
                  sx={{ marginRight: "20px" }}
                  label={t("tab1")}
                  {...a11yProps(0)}
                />
                <CustomTab label={t("add-new")} {...a11yProps(1)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <ManageSpace />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <AddNew />
            </CustomTabPanel>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SaleSetting;
