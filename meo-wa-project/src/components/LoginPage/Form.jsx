import React from 'react';
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
                onClick={() => navigate('/forgotPW')}
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
                onClick={() => navigate("/home")}
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
                onClick={() => navigate('/signUp')}
            >
                Sign Up
            </Typography>
        </>
    )
}

export default Form