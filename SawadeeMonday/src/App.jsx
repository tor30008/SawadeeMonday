import React, { useState } from "react";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';

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

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      return <Button variant="contained">Hello world</Button>;
    </>
  );
}
const Template_Web = () => {
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
              <MenuItem
                onClick={(event) => {
                  SetMenuId(1);
                }}
              >
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
              <MenuItem>
                <ListItemIcon>
                  <HomeIcon className="icon" fontSize="small"></HomeIcon>
                </ListItemIcon>
                <ListItemText className="Item-List">สนาม</ListItemText>
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
          {MenuId === 3 ? <Menu_Player></Menu_Player> : null}
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
      <Button color="secondary">
        <p className="Timer-Font">
          {minutes} Min :{seconds} Seconds
        </p>
      </Button>
      <br></br>
      <Button className="Button-Timmer" color="success" onClick={start}>
        เริ่ม
      </Button>
      <Button className="Button-Timmer" color="error" onClick={pause}>
        หยุด
      </Button>
      <Button
        className="Button-Timmer"
        color="secondary"
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

function Show_courtbadminton() {
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

const Menu_Player = () => {
  return (
    <>
      <Grid container xs={12}>
        <Grid xs={11}>
          <p>รายชื่อสมาชิก</p>
        </Grid>
        <Grid xs={1}>
          <Button variant="outlined" color="success">
            เพิ่มสมาชิก
          </Button>
        </Grid>
      </Grid>
      <Grid container xs={12} className="Table-Player">
        <TableContainer component={Paper} >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>รายชื่อ</TableCell>
                <TableCell>ฝีมือ</TableCell>
                <TableCell>เบอร์โทร</TableCell>
                <TableCell>แก้ไข</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>ตี้</TableCell>
                <TableCell>P</TableCell>
                <TableCell>091-223-1234</TableCell>
                <TableCell><EditIcon fontSize="small"></EditIcon></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>โตน</TableCell>
                <TableCell>P</TableCell>
                <TableCell>091-223-1234</TableCell>
                <TableCell><EditIcon fontSize="small"></EditIcon></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>วาย</TableCell>
                <TableCell>กาก</TableCell>
                <TableCell>091-223-1234</TableCell>
                <TableCell><EditIcon fontSize="small"></EditIcon></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>ตูน</TableCell>
                <TableCell>กาก</TableCell>
                <TableCell>091-223-1234</TableCell>
                <TableCell><EditIcon fontSize="small"></EditIcon></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </>
  );
};

export default Template_Web;
