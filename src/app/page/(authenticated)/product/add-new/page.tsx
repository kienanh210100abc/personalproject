"use client";

import CustomButton from "@/app/component/custom-button";
import CustomTextField from "@/app/component/custom-textfield";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Image from "next/image";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#55BA76",
    },
  },
  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "rgba(0, 0, 0, 0.6)", // Màu mặc định của MUI FormLabel
          "&.Mui-focused": {
            color: "rgba(0, 0, 0, 0.6)", // Giữ màu không đổi khi focused
          },
        },
      },
    },
  },
});

type Props = {};

const AddNewProduct = (props: Props) => {
  const router = useRouter();
  const { t } = useTranslation(["language"]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [value, setValue] = React.useState("female");
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ padding: "20px" }}>
          <Typography sx={{ fontSize: "30px", fontWeight: "600" }}>
            {t("product")}
          </Typography>
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
                  label={t("store_name")}
                  variant="outlined"
                  //   value={storeName}
                  //   onChange={(e) => setStoreName(e.target.value)}
                />
                <CustomTextField
                  sx={{ width: "400px", marginBottom: "15px" }}
                  id="outlined-basic"
                  label={t("description")}
                  variant="outlined"
                  //   value={description}
                  //   onChange={(e) => setDescription(e.target.value)}
                />
                <Box sx={{ width: "400px", marginBottom: "20px" }}>
                  <Box
                    component="span"
                    tabIndex={-1}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <CustomButton
                      variant="contained"
                      tabIndex={-1}
                      //   startIcon={<CloudUploadIcon />}
                      onClick={() =>
                        document.getElementById("file-input")?.click()
                      }
                    >
                      {t("img")}
                    </CustomButton>
                    <input
                      id="file-input"
                      type="file"
                      accept="image/*"
                      //   onChange={handleImageChange}
                      style={{ display: "none" }}
                    />
                  </Box>
                  {selectedImage && (
                    <Box
                      sx={{
                        marginTop: "20px",
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                        height: "auto",
                      }}
                    >
                      <Box
                        sx={{
                          width: "200px",
                          height: "auto",
                        }}
                      >
                        <Image
                          src={selectedImage}
                          alt="Selected"
                          layout="responsive"
                          width={400}
                          height={300}
                          objectFit="contain"
                        />
                      </Box>
                    </Box>
                  )}
                </Box>
                <CustomTextField
                  sx={{ width: "400px", marginBottom: "15px" }}
                  id="outlined-basic"
                  label={t("price")}
                  variant="outlined"
                  type="text"
                  //   value={hotline}
                  //   onChange={(e) => setHotline(e.target.value)}
                />
                <CustomTextField
                  sx={{ width: "400px", marginBottom: "15px" }}
                  id="outlined-basic"
                  label={t("unit")}
                  variant="outlined"
                  type="text"
                  //   value={hotline}
                  //   onChange={(e) => setHotline(e.target.value)}
                />
                <CustomTextField
                  sx={{ width: "400px", marginBottom: "15px" }}
                  id="outlined-basic"
                  label={t("duration")}
                  variant="outlined"
                  type="text"
                  //   value={hotline}
                  //   onChange={(e) => setHotline(e.target.value)}
                />
                <CustomTextField
                  sx={{ width: "400px", marginBottom: "15px" }}
                  id="outlined-basic"
                  label={t("barcode")}
                  variant="outlined"
                  type="text"
                  //   value={hotline}
                  //   onChange={(e) => setHotline(e.target.value)}
                />
                <Box sx={{ width: "100%" }}>
                  <ThemeProvider theme={theme}>
                    <FormControl
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <FormLabel
                        id="demo-controlled-radio-buttons-group"
                        sx={{
                          marginRight: "10px",
                          flexShrink: 0,
                          color: "rgba(0, 0, 0, 0.6) !important",
                        }}
                      >
                        {t("type")}
                      </FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={value}
                        onChange={handleChange}
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "flex-end",
                        }}
                      >
                        <FormControlLabel
                          value="single"
                          control={<Radio />}
                          label={t("single")}
                        />
                        <FormControlLabel
                          value="combo"
                          control={<Radio />}
                          label={t("combo")}
                        />
                      </RadioGroup>
                    </FormControl>
                    {value === "combo" && (
                      <CustomTextField placeholder={t("search")} />
                    )}
                  </ThemeProvider>
                </Box>
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
    </>
  );
};

export default AddNewProduct;
