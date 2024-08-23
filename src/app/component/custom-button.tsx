import { Button, styled } from "@mui/material";

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#55BA76",
  color: "white",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#3a9460",
  },
}));

export default CustomButton;
