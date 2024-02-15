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
import img71 from "../assets/img_rectangle71.png";
//import img61 from "../assets/img_rectangle61.png";
import img19 from "../assets/Group 19.png";
import img7 from "../assets/Group 7.png";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Grid container>
        {/* {Image on the left} */}
        <Grid
          item
          lg={6}
          md={6}
          xs={12}
          // lg={6}
          // md={8}
          style={{ marginTop: "70px", position: "relative" }}
        >
          <img
            src={img7}
            alt=""
            style={{
              width: "552px",
              height: "630px",
              marginLeft: "-60px",
              marginTop: "28px",
            }}
          />

          <img
            src={img19}
            alt=""
            style={{
              width: "530px",
              height: "438px",
              position: "absolute",
              marginLeft: "-530px",
              marginTop: "134px",
            }}
          />
        </Grid>

        {/* Form on the right */}
        <Grid
          item
          lg={6}
          md={8}
          // xs={12}
          // lg={6}
          // md={4}
          style={{
            marginTop: "-640px",
            marginLeft: "643px",
          }}
        >
          <Typography fontWeight="700" fontStyle="Arial" fontSize="50px">
            WELCOME BACK TO
          </Typography>
          <img
            src={img71}
            alt=""
            style={{ width: "370px", height: "63px", marginLeft: "70px" }}
          />
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
          >
            Sign Up
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginPage;
