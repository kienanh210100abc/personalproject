import { Tab, Tabs, styled } from "@mui/material";

type Props = {};

const CustomTab = styled(Tab)(({ theme }) => ({
  color: "black",
  textTransform: "none",
  "&.Mui-selected": {
    backgroundColor: "#55BA76",
    color: "white",
  },
  "&:hover": {
    backgroundColor: "#3a9460",
    color: "white",
  },

  padding: "20px",
}));

export default CustomTab;
