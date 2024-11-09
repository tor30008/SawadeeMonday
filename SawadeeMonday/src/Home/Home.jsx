import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

import { motion } from "framer-motion";
import Y from "../../public/image/Y.png";


import "./Home.css";

const Home = () => {
  useEffect(() => {
    const typewritter = document.getElementById("typewritter");
     //typewritter.style.animationPlayState = "Sawadee Monday";
  }, []);



  return (
    <>
      <Box xs={{ flexGrow: 1 }} className={"Box"}>
        <Grid container>
          <Grid xs={12} className={"Box-Grid"}>
              <div id={"typecontainer"}>
                <span id={"typewritter"}>Sawadee monday Badminton</span>
              </div>
              <Button size="large" variant="outlined">WelCome</Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Home;
