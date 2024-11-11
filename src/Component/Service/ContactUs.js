import React, { Fragment } from "react";
import "./ContactUs.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Box, Button, Typography } from "@mui/material";
import { FAQData } from "../../JsonData/AboutData/AboutData";
import { useTheme } from '@mui/material/styles';
import Divider from "@mui/material/Divider";
import contacUsFirstImg from "../../Media/Images/contactUsFirstImg.png";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Paper from '@mui/material/Paper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import img1 from "./../../Media/Images/img1.jpg"
import img2 from "./../../Media/Images/img2.jpg"
import HomeImage from "./HomeImage";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

// import img3 from "../../../Images/image3.jpeg"
// import img4 from "../../../Images/image4.jpeg"


function ContactUs() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  // const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <Fragment>
      <Header />
      <Box className="ContactBox">
      {/* <div className="wid100"> */}
          <Paper
            component="form"
            sx={{
              ml: 5,
              mt: "41px",
              mr: "41px",
              mb: "-9px",
              display: "flex",
              alignItems: "center",
              backgroundColor: "#e4e4e459",
              borderRadius: "10px",
            }}
          >
            {/* {console.log(course, "courseLineno100")} */}
            {/* {console.log(durationData, "durationDataLineno101")} */}
            <IconButton sx={{ p: "10px" }} aria-label="menu">
              <SearchIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search your course by name"
              inputProps={{ "aria-label": "search your course by name" }}
            />
          </Paper>
        {/* </div> */}

        <img
          src={contacUsFirstImg}
          className="contacUsFirstImg"
        />
        <div className="main-title homeImage">
          <HomeImage />
        </div>
        <Box className="getInTouchCompleteBox">
          <Box className="getInTouch">
            <Typography className="getInTouch-head">
              <b>
                Get in <span className="AquaColor">Touch</span>
              </b>
            </Typography>
            <Typography sx={{ mt: 2, mb: 5, fontSize: "0.9rem" }}>
              Our team is composed of dedicated professionals with a passion for
              education. Each member brings a unique set of skills and expertise
              to ensure the highest quality of learning for our students.
            </Typography>

            <Box className="getInTouch-about">
              <Box className="getInTouchAbtSection">
                <Box className="getInTouchVerticalLine"></Box>
                <Typography sx={{ fontSize: "0.9rem" }}>
                  Plot/Flat No-502, Adhikary Arcade, Bariatu Road, Bariantu
                  Ranchi, Jharkhand
                </Typography>
              </Box>

              <Box className="getInTouchAbtSection">
                <Box className="getInTouchVerticalLine"></Box>
                <Box>
                  <Typography sx={{ fontSize: "0.9rem" }}>
                    +91-7070993343
                  </Typography>
                  <Typography sx={{ fontSize: "0.9rem" }}>
                    +91-9348938039
                  </Typography>
                </Box>
              </Box>

              <Box className="getInTouchAbtSection">
                <Box className="getInTouchVerticalLine"></Box>
                <Typography sx={{ fontSize: "0.9rem" }}>
                  www.360criticalcare.com
                </Typography>
              </Box>

              <Box className="getInTouchAbtSection">
                <Box className="getInTouchVerticalLine"></Box>
                <Typography sx={{ fontSize: "0.9rem" }}>
                  360criticalcare@gmail.com
                </Typography>
              </Box>
            </Box>
            {/* </Box> */}
          </Box>

          <Box className="getInTouch-right">
            <Box className="getInTouch-right-nameAndMob">
              <Box>
                <Typography>
                  <b>NAME</b>
                </Typography>
                <Stack
                  component="form"
                  sx={{
                    width: "58ch",
                    height: "8ch",
                  }}
                  spacing={2}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    size="small"
                  />
                </Stack>
              </Box>

              <Box sx={{ ml: 3 }}>
                <Typography>
                  <b>MOBILE</b>
                </Typography>
                <Stack
                  component="form"
                  sx={{
                    width: "47ch",
                  }}
                  spacing={2}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    size="small"
                  />
                </Stack>
              </Box>
            </Box>

            <Box>
              <Typography>
                <b>EMAIL</b>
              </Typography>
              <Stack
                component="form"
                sx={{
                  width: "108ch",
                  height: "8ch",
                }}
                spacing={2}
                noValidate
                autoComplete="off"
              >
                <TextField
                  hiddenLabel
                  id="filled-hidden-label-small"
                  size="small"
                />
              </Stack>
            </Box>

            <Box>
              <Typography>
                <b>SEND MESSAGE</b>
              </Typography>
              <Stack
                component="form"
                sx={{
                  width: "108ch",
                }}
                spacing={2}
                noValidate
                autoComplete="off"
                 className="BGColor"
              >
                <TextField  id="filled-basic" label="Filled" variant="filled" className="BGColor" />
              </Stack>
            </Box>
            <Button variant="contained" className="sendMsgButton">
              Send message
            </Button>
          </Box>
        </Box>

        <Box>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29293.035269702268!2d85.33562851618916!3d23.40162025020351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e15783b9c0b5%3A0x5c22411ea37e8259!2sBariatu%2C%20Ranchi%2C%20Jharkhand%20834009!5e0!3m2!1sen!2sin!4v1710535703912!5m2!1sen!2sin"
            className="contactUsMap"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Box>
      <Footer />
    </Fragment>
  );
}

export default ContactUs;
