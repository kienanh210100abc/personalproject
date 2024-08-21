import { Button, styled } from "@mui/material";

const CustomButton = styled(Button)(({ theme }) => ({
  //   width: "15vh",
  marginBottom: "10px",
  backgroundColor: "#55BA76",
  color: "white",
  "&:hover": {
    backgroundColor: "#3a9460",
  },
}));

export default CustomButton;
