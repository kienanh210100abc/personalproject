import React, { useState } from "react";
import { register } from "@/app/service/service";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type Props = {};

const Register = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await register(email, password);

      if (response) {
        toast.success("Register successfully");
        navigate("/homePage");
      }
    } catch (error) {
      toast.error("Register failed");
    }
  };
  const handleLogin = () => {
    navigate("/");
  };
  return (
    <Grid
      container
      sx={{
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        item
        sx={{
          border: "1px solid",
          borderRadius: "10px",
          width: "auto",
          padding: 2,
        }}
      >
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Register
        </Typography>
        <Box sx={{ padding: "20px" }}>
          <TextField
            sx={{ width: "100%", marginBottom: "30px" }}
            id="outlined-basic"
            value={email}
            label="Email"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            sx={{ width: "100%" }}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          <Button
            sx={{ width: "15vh", marginBottom: "10px" }}
            variant="contained"
            onClick={handleRegister}
          >
            Register
          </Button>
          <Button onClick={handleLogin}>
            <Typography>Already have an account? Back to login!</Typography>
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Register;
