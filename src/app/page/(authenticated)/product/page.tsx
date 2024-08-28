"use client";
import CustomButton from "@/app/component/custom-button";
import CustomTextField from "@/app/component/custom-textfield";
import { Box, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import TableProduct from "./table-product";

type Props = {};

const ProductManagement = (props: Props) => {
  const router = useRouter();
  const { t } = useTranslation(["language"]);

  const handlleClick = () => {
    router.push("/page/product/add-new");
  };
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ padding: "20px" }}>
          <Typography sx={{ fontSize: "30px", fontWeight: "600" }}>
            {t("product")}
          </Typography>
        </Box>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <CustomButton onClick={handlleClick}>{t("add-new")}</CustomButton>
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
                />
                <CustomButton sx={{ width: "auto", height: "55px" }}>
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
              <TableProduct />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ProductManagement;
