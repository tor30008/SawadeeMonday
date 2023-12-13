import React, { useState } from "react";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";

import {
  CardContent,
  CardHeader,
  CardMedia,
  CssBaseline,
  Icon,
  ListItemIcon,
  ListItemText,
  MenuList,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import "./App.css";
import { blue, deepOrange, purple, red } from "@mui/material/colors";
import { useStopwatch, useTimer } from "react-timer-hook";
import "./App.css";
import "./fonts/digital-7/digital-7.ttf";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import HomeIcon from "@mui/icons-material/Home";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import FingerprintIcon from "@mui/icons-material/Fingerprint";

import Player from "../src/Player/Player";
import Typeplayer from "../src/Typeplayer/Typeplayer";
import Court from "../src/Court/Court";
import * as ReactRouterDom from "react-router-dom";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      return{" "}
      <Button item="true" variant="contained">
        Hello world
      </Button>
      ;
    </>
  );
}
export const Template_Web = () => {

  const [today, setToday] = useState(new Date());
  const [TimetoDay, setTimetoDay] = useState("");
  const [MenuId, SetMenuId] = useState("");
  setInterval(() => {
    setTimetoDay("");
    setToday(new Date());
    setTimetoDay(today.toLocaleDateString());
  }, 3000);

  return (
    <>
      <Grid container className="Grid-header">
        <Grid className="Time-To-Day" xs={2}>
          <p className="Timer-Font">{TimetoDay}</p>
        </Grid>
        <Grid xs={10}>
          <p className="GroupName">SAWADEE MONDAY BADMINTON</p>
        </Grid>
      </Grid>
      {/** header */}
      <Grid container spacing={0}>
        <Grid className="Menu-Template" xs={2}>
          <Paper sx={{ width: "100%" }}>
            <MenuList className="Menu-List">
           
                <MenuItem onClick={(event) => {
                  SetMenuId(1);
                }}>
                  <HomeIcon className="icon" fontSize="small"></HomeIcon>
                  <ListItemText className="Item-List">หน้าแรก</ListItemText>
                </MenuItem>

              <MenuItem
                onClick={(event) => {
                  SetMenuId(2);
                }}
              >
                <ListItemIcon>
                  <SportsTennisIcon
                    className="icon"
                    fontSize="small"
                  ></SportsTennisIcon>
                </ListItemIcon>
                <ListItemText className="Item-List">การแข่ง</ListItemText>
              </MenuItem>
              <MenuItem
                onClick={(event) => {
                  SetMenuId(3);
                }}
              >
                <ListItemIcon>
                  <PeopleAltIcon
                    className="icon"
                    fontSize="small"
                  ></PeopleAltIcon>
                </ListItemIcon>
                <ListItemText className="Item-List">ผู้เล่น</ListItemText>
              </MenuItem>
              <MenuItem
                onClick={(event) => {
                  SetMenuId(4);
                }}
              >
                <ListItemIcon>
                  <FingerprintIcon
                    className="icon"
                    fontSize="small"
                  ></FingerprintIcon>
                </ListItemIcon>
                <ListItemText className="Item-List">ฝีมือ</ListItemText>
              </MenuItem>
              <MenuItem
                onClick={(event) => {
                  SetMenuId(5);
                }}
              >
                <ListItemIcon>
                  <HomeIcon className="icon" fontSize="small"></HomeIcon>
                </ListItemIcon>
                <ListItemText className="Item-List">สนาม</ListItemText>
              </MenuItem>
              <MenuItem href={"/app"}>
                <ListItemIcon>
                  <SportsBaseballIcon
                    className="icon"
                    fontSize="small"
                  ></SportsBaseballIcon>
                </ListItemIcon>
                <ListItemText className="Item-List">ลูกแบด</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <AttachMoneyIcon
                    className="icon"
                    fontSize="small"
                  ></AttachMoneyIcon>
                </ListItemIcon>
                <ListItemText className="Item-List">ค่าใช้จ่าย</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <StackedBarChartIcon
                    className="icon"
                    fontSize="small"
                  ></StackedBarChartIcon>
                </ListItemIcon>
                <ListItemText className="Item-List">สถิติ</ListItemText>
              </MenuItem>
            </MenuList>
          </Paper>
        </Grid>
        {/* Menu */}
        <Grid className="Grid-Content" xs={10}>
          
          {MenuId === 1 ? <Show_courtbadminton></Show_courtbadminton> : null}
          {MenuId === 2 ? <Show_courtbadminton></Show_courtbadminton> : null}
          {MenuId === 3 ? <Player></Player> : null}
          {MenuId === 4 ? <Typeplayer></Typeplayer> : null}
          {MenuId === 5 ? <Court></Court> : null}
          
         
        </Grid>
      </Grid>
      {/**Content */}

      <Grid xs={12} className="Grid-Footer">
        <div>
          <footer>{`Copyright @ by โรจน์`}</footer>
        </div>
      </Grid>
      {/** footer */}
    </>
  );
};
//set Menu Header Footer

function Timer() {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useStopwatch({ autoStart: false });

  //console.log(minutes);
  return (
    <>
      <Button color="secondary" item="true">
        <p className="Timer-Font">
          {minutes} Min :{seconds} Seconds
        </p>
      </Button>
      <br></br>
      <Button
        item="true"
        className="Button-Timmer"
        color="success"
        onClick={start}
      >
        เริ่ม
      </Button>
      <Button
        item="true"
        className="Button-Timmer"
        color="error"
        onClick={pause}
      >
        หยุด
      </Button>
      <Button
        className="Button-Timmer"
        color="secondary"
        item="true"
        onClick={(event) => {
          {
            Finish_Match({ totalSeconds });
          }
        }}
      >
        จบ
      </Button>
    </>
  );
}

const Finish_Match = ({ totalSeconds = "" }) => {
  console.log({ totalSeconds });
};

export function Show_courtbadminton() {
  const [data_click, set_data_click] = useState("key");
  const handleclick = (event) => {
    set_data_click("click1");
    console.log(data_click);
  };

  return (
    <>
      <Grid container spacing={4}>
        <Grid xs={3}>
          <Card className="Card">
            <CardHeader className="CardHeader" title="13/11/2023"></CardHeader>
            <CardMedia>
              <Grid xs={3} className="Avatar-inline">
                <Avatar sx={{ bgcolor: deepOrange[500] }} aria-label="recipe">
                  {" "}
                  T{" "}
                </Avatar>
              </Grid>
              <Grid xs={3} className="Avatar-inline">
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  {" "}
                  Y{" "}
                </Avatar>
              </Grid>
              <Grid xs={3} className="Avatar-inline">
                <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                  {" "}
                  T{" "}
                </Avatar>
              </Grid>
              <Grid xs={3} className="Avatar-inline">
                <Avatar sx={{ bgcolor: purple[500] }} aria-label="recipe">
                  {" "}
                  T{" "}
                </Avatar>
              </Grid>
            </CardMedia>
            <CardContent>
              <p className="Player">ตูน วาย - ตี้ โตน</p>
              <Timer></Timer>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={3}>
          <Card className="Card">
            <CardHeader className="CardHeader" title="13/11/2023"></CardHeader>
            <CardMedia>
              <Grid xs={3} className="Avatar-inline">
                <Avatar sx={{ bgcolor: deepOrange[500] }} aria-label="recipe">
                  {" "}
                  T{" "}
                </Avatar>
              </Grid>
              <Grid xs={3} className="Avatar-inline">
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  {" "}
                  Y{" "}
                </Avatar>
              </Grid>
              <Grid xs={3} className="Avatar-inline">
                <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                  {" "}
                  T{" "}
                </Avatar>
              </Grid>
              <Grid xs={3} className="Avatar-inline">
                <Avatar sx={{ bgcolor: purple[500] }} aria-label="recipe">
                  {" "}
                  T{" "}
                </Avatar>
              </Grid>
            </CardMedia>
            <CardContent>
              <p className="Player">ตูน วาย - ตี้ โตน</p>
              <Timer></Timer>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={3}>
          <Card className="Card">
            <CardHeader className="CardHeader" title="13/11/2023"></CardHeader>
            <CardMedia>
              <Grid xs={3} className="Avatar-inline">
                <Avatar sx={{ bgcolor: deepOrange[500] }} aria-label="recipe">
                  {" "}
                  T{" "}
                </Avatar>
              </Grid>
              <Grid xs={3} className="Avatar-inline">
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  {" "}
                  Y{" "}
                </Avatar>
              </Grid>
              <Grid xs={3} className="Avatar-inline">
                <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                  {" "}
                  T{" "}
                </Avatar>
              </Grid>
              <Grid xs={3} className="Avatar-inline">
                <Avatar sx={{ bgcolor: purple[500] }} aria-label="recipe">
                  {" "}
                  T{" "}
                </Avatar>
              </Grid>
            </CardMedia>
            <CardContent>
              <p className="Player">ตูน วาย - ตี้ โตน</p>
              <Timer></Timer>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={3}>
          <Card className="Card">
            <CardHeader className="CardHeader" title="13/11/2023"></CardHeader>
            <CardMedia>
              <Grid xs={3} md={3} className="Avatar-inline">
                <Avatar sx={{ bgcolor: deepOrange[500] }} aria-label="recipe">
                  {" "}
                  T{" "}
                </Avatar>
              </Grid>
              <Grid xs={3} md={3} className="Avatar-inline">
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  {" "}
                  Y{" "}
                </Avatar>
              </Grid>
              <Grid xs={3} md={3} className="Avatar-inline">
                <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                  {" "}
                  T{" "}
                </Avatar>
              </Grid>
              <Grid xs={3} md={3} className="Avatar-inline">
                <Avatar sx={{ bgcolor: purple[500] }} aria-label="recipe">
                  {" "}
                  T{" "}
                </Avatar>
              </Grid>
            </CardMedia>
            <CardContent>
              <p className="Player">ตูน วาย - ตี้ โตน</p>
              <Timer></Timer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container>
        <Grid className="Button-Match" xs={12}>
          <Icon color="primary">sss</Icon>
        </Grid>
      </Grid>
    </>
  );
}

export default Template_Web
