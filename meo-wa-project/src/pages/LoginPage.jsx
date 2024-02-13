import React from "react";
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
// import img71 from "../assets/img_rectangle71.png";
// import img61 from "../assets/img_rectangle61.png";
import {useNavigate} from "react-router-dom";


const LoginPage = () => {

  const navigate = useNavigate();


  return (
    <Container>
      <Grid container>
        {/* {Image on the left} */}
        <Grid item xs={6} style={{ marginTop: "150px"}}>
          <img
            // src={img61} // You may need to adjust this to your image path
            alt=""
            style={{ width: "520px", height: "auto" }} // Adjust the width and height as needed
          />
        </Grid>

        {/* Form on the right */}
        <Grid item xs={6} style={{ marginTop: "90px" }}>
          <Typography variant="h3" fontWeight="bold">
            WELCOME BACK TO
          </Typography>
          <img
            // src={img71}
            alt=""
            style={{ width: "500px", height: "63px", margin: "-0.1px auto 0" }}
          />
          <Typography
            className="text-black-900 font-arial text-left text-xl font-normal"
            fontWeight="normal"
            marginTop="55px"
            marginLeft="-10px"
            fontSize="20px"
            borderRadius="120px"
          >
            Email
          </Typography>
          <TextField
            sx={{
              backgroundColor: "#D6EBF2",
              width: "480px",
              marginLeft: "-10px",
              borderRadius: "20px",
              "& .MuiInputBase-root": {
                borderRadius: "20px",
              },
            }}
          ></TextField>

          <Typography
            className="text-black-900 font-arial text-left text-xl font-normal"
            fontWeight="normal"
            marginTop="30px"
            marginLeft="-10px"
            fontSize="20px"
          >
            Password
          </Typography>
          <TextField
            type="password"
            sx={{
              backgroundColor: "#D6EBF2",
              width: "480px",
              marginLeft: "-10px",
              borderRadius: "20px",
              "& .MuiInputBase-root": {
                borderRadius: "20px",
              },
            }}
          ></TextField>
          <Checkbox
            sx={{
              backgroundcolor: "grey",
              marginLeft: "-490px",
              marginTop: "75px",
            }}
          ></Checkbox>
          <Typography
            sx={{ marginLeft: "26px", color: "grey", marginTop: "-33px" }}
          >
            Keep me logged in
          </Typography>
          <Typography
            sx={{
              color: "#0000FF",
              marginTop: "-24px",
              marginLeft: "291px",
              cursor: "pointer",
            }}
          >
            Forgot your password?
          </Typography>
          <Button
            sx={{
              backgroundColor: "#4169E1",
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
            onClick={() => (navigate('/home'))}
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
              color: "#0000FF",
              marginTop: "-25px",
              marginLeft: "315px",
              cursor: "pointer",
            }}
          >
            Sign Up
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginPage;