"use client";

import CustomButton from "@/app/component/custom-button";
import CustomTextField from "@/app/component/custom-textfield";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useTranslation } from "react-i18next";
type Props = {};

const RegisterStore = (props: Props) => {
  const [storeName, setStoreName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [hotline, setHotline] = useState("");
  const [fb, setFb] = useState("");
  const [tt, setTt] = useState("");
  const [img, setImg] = useState<File | null>(null);
  const router = useRouter();

  const { t } = useTranslation(["language"]);

  // const navigate = useNavigate();
  const handleSubmit = () => {
    localStorage.setItem(
      "store",
      JSON.stringify({ storeName, type, hotline, description, fb, tt, img })
    );

    // navigate("/homePage");
    router.push("/page/homepage");
  };
  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setImg(file);
    }
  };
  const handleTypeChange = (event: SelectChangeEvent<string>) => {
    setType(event.target.value as string);
  };
  return (
    <>
      <Grid
        container
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#55BA76",
        }}
      >
        <Grid
          item
          sx={{
            border: "1px solid #55BA76",
            borderRadius: "10px",
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
              fontSize: "50px",
              fontWeight: "600",
              color: "#55BA76",
            }}
          >
            {t("register")}
          </Typography>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "20px",
              marginBottom: "20px",
              color: "#55BA76",
            }}
          >
            {t("store_infor")}
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
              onChange={(e) => setStoreName(e.target.value)}
            />
            <CustomTextField
              sx={{ width: "400px", marginBottom: "15px" }}
              id="outlined-basic"
              label={t("description")}
              variant="outlined"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
                onChange={handleTypeChange}
                label={t("type")}
              >
                <MenuItem value="Spa">Spa</MenuItem>
                <MenuItem value="Restaurant">Restaurant</MenuItem>
                <MenuItem value="Pet Shop">Pet Shop</MenuItem>
                <MenuItem value="Groceries">Groceries</MenuItem>
              </Select>
            </FormControl>

            <Box>
              {t("img")}{" "}
              <input
                style={{ marginBottom: "15px" }}
                accept="image/*"
                id="img-upload"
                type="file"
                onChange={handleImageChange}
              />
            </Box>
            <CustomTextField
              sx={{ width: "400px", marginBottom: "15px" }}
              id="outlined-basic"
              label={t("hotline")}
              variant="outlined"
              type="text"
              value={hotline}
              onChange={(e) => setHotline(e.target.value)}
            />

            <CustomTextField
              sx={{ width: "400px", marginBottom: "15px" }}
              id="outlined-basic"
              label={t("fb")}
              variant="outlined"
              type="text"
              value={fb}
              onChange={(e) => setFb(e.target.value)}
            />
            <CustomTextField
              sx={{ width: "400px", marginBottom: "15px" }}
              id="outlined-basic"
              label={t("tt")}
              variant="outlined"
              type="text"
              value={tt}
              onChange={(e) => setTt(e.target.value)}
            />
          </Box>
          <Box
            sx={{
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <CustomButton
              sx={{ width: "15vh", marginBottom: "10px" }}
              variant="contained"
              onClick={handleSubmit}
            >
              {t("submit")}
            </CustomButton>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default RegisterStore;
