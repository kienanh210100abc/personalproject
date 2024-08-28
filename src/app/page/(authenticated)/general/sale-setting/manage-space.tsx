import CustomButton from "@/app/component/custom-button";
import CustomTextField from "@/app/component/custom-textfield";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

type Props = {};

const ManageSpace = (props: Props) => {
  const { t } = useTranslation(["language"]);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
          }}
        >
          <Box>
            <Box>
              <Grid
                container
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid black",
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
                    {t("tab1")}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ManageSpace;
