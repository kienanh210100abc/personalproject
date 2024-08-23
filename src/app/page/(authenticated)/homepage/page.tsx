"use client";

import { Box, Grid, Toolbar, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Filter1Icon from "@mui/icons-material/Filter1";
import Filter2Icon from "@mui/icons-material/Filter2";
import Filter3Icon from "@mui/icons-material/Filter3";
type Props = {};

const HomePage = (props: Props) => {
  const { t } = useTranslation(["language"]);
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          // width: `calc(100% - 220px)`,
        }}
      >
        <Box sx={{ padding: "20px" }}>
          <Typography sx={{ fontSize: "30px", fontWeight: "600" }}>
            {t("dashboard")}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Grid
            container
            item
            xs={12}
            sm={12}
            md={12}
            justifyContent="center"
            gap={3}
          >
            <Grid
              item
              xs={5}
              sm={5}
              md={5}
              lg={5}
              sx={{
                border: "1px solid black",
                borderRadius: "10px",
                p: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "30px",
                  fontWeight: "600",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                {t("order")}
              </Typography>
              <Typography
                sx={{
                  fontSize: "30px",
                  fontWeight: "600",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                50
              </Typography>
            </Grid>

            <Grid
              item
              xs={5}
              sm={5}
              md={5}
              lg={5}
              sx={{
                border: "1px solid black",
                borderRadius: "10px",
                p: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "30px",
                  fontWeight: "600",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                {t("revenue")}
              </Typography>
              <Typography
                sx={{
                  fontSize: "30px",
                  fontWeight: "600",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                500.000
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
        >
          <Grid
            container
            item
            xs={12}
            sm={12}
            md={12}
            justifyContent="center"
            gap={3}
          >
            <Grid
              item
              xs={5}
              sm={5}
              md={5}
              lg={5}
              sx={{
                border: "1px solid black",
                borderRadius: "10px",
                p: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "30px",
                  fontWeight: "600",
                  textAlign: "center",
                  width: "100%",
                  marginBottom: "20px",
                }}
              >
                {t("most-order")}
              </Typography>
              <Box sx={{ display: "flex", gap: "10px" }}>
                <Filter1Icon />
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "200",
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  {t("massage-1")}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: "10px" }}>
                <Filter2Icon />
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "200",
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  {t("massage-2")}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: "10px" }}>
                <Filter3Icon />
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "200",
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  {t("nail")}
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={5}
              sm={5}
              md={5}
              lg={5}
              sx={{
                border: "1px solid black",
                borderRadius: "10px",
                p: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontSize: "30px", fontWeight: "600" }}>
                To be defined
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
