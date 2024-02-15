import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Container,
  Grid,
  Input,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userNameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = () => {
    let hasError = false;

    if (!email) {
      setUsernameError("*Please enter your username.");

      hasError = true;
    } else {
      setUsernameError("");
    }

    if (!password) {
      setPasswordError("*Please enter your password.");
      hasError = true;
    } else {
      setPasswordError("");
    }

    if (!hasError) {
      navigate("/home");
    }
  };

  return (
    <>
      <Typography
        className="text-black-900 font-arial text-left text-xl font-normal"
        fontWeight="Arial"
        marginTop="55px"
        marginLeft="-10px"
        fontSize="20px"
        borderRadius="120px"
      >
        Email
      </Typography>
      <TextField
        value={email}
        helperText={userNameError}
        onChange={(e) => setEmail(e.target.value)}
        sx={{
          backgroundColor: "#CEE5F3",
          width: "498px",
          height: "55px",
          marginLeft: "-10px",
          transition: "0.3s",
          "& .MuiInputBase-root": {
            borderRadius: "5px",
          },
        }}
      ></TextField>

      <Typography
        className="text-black-900 font-arial text-left text-xl font-normal"
        fontWeight="Arial"
        marginTop="30px"
        marginLeft="-10px"
        fontSize="20px"
      >
        Password
      </Typography>
      <TextField
        helperText={passwordError}
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        sx={{
          backgroundColor: "#CEE5F3",
          width: "498px",
          height: "55px",
          marginLeft: "-10px",
          borderRadius: "5px",
          transition: "0.3s",
          "& .MuiInputBase-root": {
            borderRadius: "5px",
          },
        }}
      ></TextField>
      <Checkbox
        sx={{
          backgroundcolor: "#000000 10%",
          marginLeft: "-510px",
          marginTop: "75px",
        }}
      ></Checkbox>
      <Typography
        sx={{ marginLeft: "20px", color: "grey", marginTop: "-33px" }}
      >
        Keep me logged in
      </Typography>
      <Typography
        sx={{
          color: "#0582CA",
          marginTop: "-24px",
          marginLeft: "320px",
          cursor: "pointer",
        }}
      >
        Forgot your password?
      </Typography>
      <Button
        sx={{
          backgroundColor: "#0582CA",
          color: "white",
          fontWeight: "bold",
          marginLeft: "130px",
          marginTop: "30px",
          padding: "10px",
          textTransform: "none",
          width: "220px",
          borderRadius: "12px",
          fontSize: "20px",
          ":hover": { bgcolor: " #0096FF" },
        }}
        onClick={handleLogin}
      >
        Log In
      </Button>
      <Typography
        sx={{ color: "grey", marginTop: "30px", marginLeft: "136px" }}
      >
        Don't have an account?
      </Typography>
      <Typography
        sx={{
          color: "#0582CA",
          marginTop: "-25px",
          marginLeft: "315px",
          cursor: "pointer",
        }}
      >
        Sign Up
      </Typography>
    </>
  );
};

export default Form;
