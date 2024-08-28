import CustomButton from "@/app/component/custom-button";
import CustomTextField from "@/app/component/custom-textfield";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

type Props = {};

const AddNew = (props: Props) => {
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
                    {t("add-new")}
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
                      label={t("name")}
                      variant="outlined"
                      //   value={storeName}
                      //   onChange={(e) => setStoreName(e.target.value)}
                    />

                    <CustomTextField
                      sx={{ width: "400px", marginBottom: "15px" }}
                      id="outlined-basic"
                      label={t("space")}
                      variant="outlined"
                      type="text"
                      //   value={hotline}
                      //   onChange={(e) => setHotline(e.target.value)}
                    />
                  </Box>
                  <Box
                    sx={{
                      padding: "20px",
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <CustomButton
                      sx={{
                        width: "15vh",
                        marginBottom: "10px",
                        alignSelf: "center",
                      }}
                      variant="contained"
                      // onClick={handleSubmit}
                    >
                      {t("submit")}
                    </CustomButton>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AddNew;
