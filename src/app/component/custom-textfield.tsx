import { TextField, styled } from "@mui/material";

const CustomTextField = styled(TextField)(({ theme }) => ({
  width: "100%",
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#55BA76",
  },
  "& .MuiInputLabel-root.Mui-focused ": {
    color: "#55BA76",
  },
}));

export default CustomTextField;
