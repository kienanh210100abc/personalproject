import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { login } from "../service/service";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type Props = {};

const Login = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await login(email, password);

      if (response) {
        toast.success("Successfully");
        navigate("/homePage");
      }
    } catch (error) {
      toast.error("Missing password");
    }
  };
  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <>
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
            Login
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
              justifyContent: "flex-end",
            }}
          >
            <Button
              sx={{ marginRight: "10px" }}
              variant="contained"
              onClick={handleLogin}
            >
              Login
            </Button>
            <Button variant="contained" onClick={handleRegister}>
              Register
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
