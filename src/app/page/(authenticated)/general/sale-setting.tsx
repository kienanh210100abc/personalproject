"use client";

import CustomButton from "@/app/component/custom-button";
import CustomTextField from "@/app/component/custom-textfield";
import Image from "next/image";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  styled,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

type Props = {};

const SaleSetting = (props: Props) => {
  const { t } = useTranslation(["language"]);
  const [storeName, setStoreName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [hotline, setHotline] = useState("");
  const [fb, setFb] = useState("");
  const [tt, setTt] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedLogo, setSelectedLogo] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleLogoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const logoUrl = URL.createObjectURL(file);
      setSelectedLogo(logoUrl);
    }
  };

  useEffect(() => {
    const storeStorage = localStorage.getItem("store");
    if (storeStorage) {
      const store = JSON.parse(storeStorage);
      setStoreName(store.storeName);
      setDescription(store.description);
      setType(store.type);
      setHotline(store.hotline);
      setFb(store.fb);
      setTt(store.tt);
    } else {
    }
  }, []);
  return (
    <>
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
                  value={storeName}
                  //   onChange={(e) => setStoreName(e.target.value)}
                />
                <CustomTextField
                  sx={{ width: "400px", marginBottom: "15px" }}
                  id="outlined-basic"
                  label={t("description")}
                  variant="outlined"
                  value={description}
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
                    value={type}
                    // onChange={handleTypeChange}
                    label={t("type")}
                  >
                    <MenuItem value="Spa">Spa</MenuItem>
                    <MenuItem value="Restaurant">Restaurant</MenuItem>
                    <MenuItem value="Pet Shop">Pet Shop</MenuItem>
                    <MenuItem value="Groceries">Groceries</MenuItem>
                  </Select>
                </FormControl>

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
                      startIcon={<CloudUploadIcon />}
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
                      onChange={handleImageChange}
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
                      startIcon={<CloudUploadIcon />}
                      onClick={() =>
                        document.getElementById("file-input2")?.click()
                      }
                    >
                      {t("logo")}
                    </CustomButton>
                    <input
                      id="file-input2"
                      type="file"
                      accept="image/*"
                      onChange={handleLogoChange}
                      style={{ display: "none" }}
                    />
                  </Box>
                  {selectedLogo && (
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
                          src={selectedLogo}
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
                  label={t("hotline")}
                  variant="outlined"
                  type="text"
                  value={hotline}
                  //   onChange={(e) => setHotline(e.target.value)}
                />

                <CustomTextField
                  sx={{ width: "400px", marginBottom: "15px" }}
                  id="outlined-basic"
                  label={t("fb")}
                  variant="outlined"
                  type="text"
                  value={fb}
                  //   onChange={(e) => setFb(e.target.value)}
                />
                <CustomTextField
                  sx={{ width: "400px", marginBottom: "15px" }}
                  id="outlined-basic"
                  label={t("tt")}
                  variant="outlined"
                  type="text"
                  value={tt}
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
