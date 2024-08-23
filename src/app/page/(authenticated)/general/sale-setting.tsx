import CustomButton from "@/app/component/custom-button";
import CustomTextField from "@/app/component/custom-textfield";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

type Props = {};

const SaleSetting = (props: Props) => {
  const { t } = useTranslation(["language"]);

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box>
          <Grid
            container
            sx={{
              height: "90vh",
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
                {t("general")}
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
                <FormControl
                  sx={{
                    width: "400px",
                    marginBottom: "15px",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "default",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#55BA76",
                      },
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#55BA76",
                    },
                  }}
                  variant="outlined"
                >
                  <InputLabel id="type-label">{t("type")}</InputLabel>
                  <Select
                    labelId="type-label"
                    id="outlined-type"
                    // value={type}
                    // onChange={handleTypeChange}
                    label={t("type")}
                  >
                    <MenuItem value="Spa">Spa</MenuItem>
                    <MenuItem value="Restaurant">Restaurant</MenuItem>
                    <MenuItem value="Pet Shop">Pet Shop</MenuItem>
                    <MenuItem value="Groceries">Groceries</MenuItem>
                  </Select>
                </FormControl>

                <Box sx={{ width: "400px" }}>
                  {t("img")}{" "}
                  <input
                    style={{ marginBottom: "15px" }}
                    accept="image/*"
                    id="img-upload"
                    type="file"
                    // onChange={handleImageChange}
                  />
                </Box>
                <Box sx={{ width: "400px" }}>
                  {t("logo")}{" "}
                  <input
                    style={{ marginBottom: "15px" }}
                    accept="image/*"
                    id="img-upload"
                    type="file"
                    // onChange={handleImageChange}
                  />
                </Box>
                <CustomTextField
                  sx={{ width: "400px", marginBottom: "15px" }}
                  id="outlined-basic"
                  label={t("hotline")}
                  variant="outlined"
                  type="text"
                  //   value={hotline}
                  //   onChange={(e) => setHotline(e.target.value)}
                />

                <CustomTextField
                  sx={{ width: "400px", marginBottom: "15px" }}
                  id="outlined-basic"
                  label={t("fb")}
                  variant="outlined"
                  type="text"
                  //   value={fb}
                  //   onChange={(e) => setFb(e.target.value)}
                />
                <CustomTextField
                  sx={{ width: "400px", marginBottom: "15px" }}
                  id="outlined-basic"
                  label={t("tt")}
                  variant="outlined"
                  type="text"
                  //   value={tt}
                  //   onChange={(e) => setTt(e.target.value)}
                />

                <CustomTextField
                  sx={{ width: "400px", marginBottom: "15px" }}
                  id="outlined-basic"
                  label={t("vat")}
                  variant="outlined"
                  type="text"
                  //   value={tt}
                  //   onChange={(e) => setTt(e.target.value)}
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
    </>
  );
};

export default SaleSetting;
