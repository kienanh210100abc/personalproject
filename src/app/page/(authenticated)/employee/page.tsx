"use client";
import React, { useState } from "react";
import CustomButton from "@/app/component/custom-button";
import CustomTextField from "@/app/component/custom-textfield";
import { Box, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import TableEmployee from "../customer/table-employee";
type Props = {};

const EmployeeManagement = (props: Props) => {
  const router = useRouter();
  const { t } = useTranslation(["language"]);
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = () => {
    setSearchQuery(searchInput);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ padding: "20px" }}>
          <Typography sx={{ fontSize: "30px", fontWeight: "600" }}>
            {t("employee")}
          </Typography>
        </Box>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <CustomButton
          // onClick={handleClick}
          >
            {t("add-new")}
          </CustomButton>
        </Box>
        <Box>
          <Grid
            container
            sx={{
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid black",
            }}
          >
            <Grid sx={{ width: "100%" }}>
              <Box
                sx={{
                  padding: "30px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <CustomTextField
                  sx={{ width: "300px" }}
                  placeholder={t("search")}
                  value={searchInput}
                  onChange={handleSearchInputChange}
                  onKeyPress={handleKeyPress}
                />
                <CustomButton
                  sx={{ width: "auto", height: "55px" }}
                  onClick={handleSearch}
                >
                  {t("search")}
                </CustomButton>
              </Box>
            </Grid>
            <Grid sx={{ width: "100%" }}>
              <Box
                sx={{
                  marginLeft: "30px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <CustomButton sx={{ width: "auto" }}>
                  {t("filter1")}
                </CustomButton>
                <CustomButton sx={{ width: "auto" }}>
                  {t("filter2")}
                </CustomButton>
                <CustomButton sx={{ width: "auto" }}>
                  {t("filter3")}
                </CustomButton>
              </Box>
            </Grid>
            <Grid
              item
              sx={{
                width: "100%",
                padding: 2,
                backgroundColor: "white",
              }}
            >
              <TableEmployee searchQuery={searchQuery} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default EmployeeManagement;
