import React, { useEffect, useState } from "react";

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
import List from "@mui/material/List";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ImageIcon from "@mui/icons-material/Image";
import Paper from "@mui/material/Paper";
import ListItem from "@mui/material/ListItem";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Switch from "@mui/material/Switch";
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
import AddIcon from "@mui/icons-material/Add";

import Player from "../src/Player/Player";
import Typeplayer from "../src/Typeplayer/Typeplayer";
import Court from "../src/Court/Court";
import Shuttercock from "./shuttercock/Shuttercock";
import * as ReactRouterDom from "react-router-dom";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Allplayer_service from "./Service/Allplayer_service";
import { Jointoday_service } from "./Service/Service";
import io from "socket.io-client";
import {Getplayerjointoday_service,Getplayernotjointoday_service} from "../src/Player/Player_service";

const socket = io("http://127.0.0.1:1111/", { transports: ["websocket"] });

export const Template_Web = () => {
  const [today, setToday] = useState(new Date());
  const [TimetoDay, setTimetoDay] = useState("");
  const [MenuId, SetMenuId] = useState("");
  const [Listplayer, setListplayer] = useState(null);
  const [Listplayerjointoday2,setListplayerjointoday2] = useState(null);

  useEffect(() => {
    socket.on("M", (data) => {
      socket.emit("MFC", "Sawadee by React");
    });

    socket.on("listplayertodayFromServer", (data) => {
      console.log(data);
    });

    const getallplayer = async () => {
      try {
        const res = await Getplayernotjointoday_service();
        const result = await res;
        setListplayer(result);
        const res2 = await Getplayerjointoday_service();
        const result2 = await res2;
        setListplayerjointoday2(result2);
      
      } catch (error) {
        console.log(error);
      }
    };
    getallplayer();
  }, []);

  /*setInterval(() => {
      setTimetoDay("");
      setToday(new Date());
      setTimetoDay(today.toLocaleDateString());
    }, 3000);//ทำให้มี side effect loop ไม่หยุด*/

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
                <ListItemIcon className="icon" fontSize="small">
                  <HomeIcon className="icon" fontSize="small"></HomeIcon>
                </ListItemIcon>

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
              <MenuItem
                onClick={(event) => {
                  SetMenuId(6);
                }}
              >
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
          {MenuId === 1 ? <Main_page list={Listplayer} listjoinplayer_main={Listplayerjointoday2}></Main_page> : null}
          {MenuId === 2 ? <Show_courtbadminton></Show_courtbadminton> : null}
          {MenuId === 3 ? <Player></Player> : null}
          {MenuId === 4 ? <Typeplayer></Typeplayer> : null}
          {MenuId === 5 ? <Court></Court> : null}
          {MenuId === 6 ? <Shuttercock></Shuttercock> : null}
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
          <Fab>
            <AddIcon></AddIcon>
          </Fab>
        </Grid>
      </Grid>
    </>
  );
}

export const Main_page = (list = null) => {
  const [Listplayertoday, setListplayertoday] = useState(null);
  const [Listplayernotjoin, setListplaynotjoin] = useState(null);
  
  useEffect(() => {
    console.log(Listplayernotjoin);
  }, [Listplayertoday, Listplayernotjoin]);

  const join_today = (Player_id, Status_join) => {
    const data = {
      Player_id: Player_id,
      Joinday_status: Status_join,
    };
    try {
      socket.emit("join", data);
      socket.on("listplayertodayFromserver", (data) => {
        setListplayertoday(data.listjoinday);
        setListplaynotjoin(data.listplayer);
        console.log(Listplayernotjoin);
      }); // ส่งค่ามาทั้งหมด
    } catch (error) {
      console.log(error);
    }
  }; // Component เอาไว้เช็คชื่อ คนมาในแต่ละวัน

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <div className={"Grid_list"}>
            <div>
              <h2>แมตที่กำลังตีอยู่</h2>
            </div>
            <div>
              <TableContainer>
                <Table aria-label="TablePlayer"></Table>
              </TableContainer>
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className={"Grid_list"}>
            <h2>คิวที่จะตีต่อ</h2>
          </div>
        </Grid>
        <Grid item xs={4}>
          <Grid item xs={12} className={"Grid_small"}>
            <div>
              <h2>รายชื่อคนตีวันนี้</h2>
            </div>
            <div>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>ลำดับ</TableCell>
                      <TableCell>ชื่อ</TableCell>
                      <TableCell>ตีไปกี่เกมส์</TableCell>
                      <TableCell>สถานนะ</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {Listplayertoday ? (
                      Listplayertoday.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell>{++index}</TableCell>
                          <TableCell>{row.Player_name}</TableCell>
                          {!row.Jointoday_round ? (
                            <TableCell>ยังไม่ได้ตี</TableCell>
                          ) : (
                            <TableCell>{row.Jointoday_round}</TableCell>
                          )}
                          {row.Joinday_status == 1 ? (
                            <TableCell>ยังตีอยู่</TableCell>
                          ) : (
                            <TableCell></TableCell>
                          )}
                        </TableRow>
                      ))
                    ) : (
                      list.listjoinplayer_main.map((row,index) => (
                        <TableRow key={index}>
                          <TableCell>{++index}</TableCell>
                          <TableCell>{row.Player_name}</TableCell>
                          {!row.Jointoday_round ? (
                            <TableCell>ยังไม่ได้ตี</TableCell>
                          ) : (
                            <TableCell>{row.Jointoday_round}</TableCell>
                          )}
                          {row.Joinday_status == 1 ? (
                            <TableCell>ยังตีอยู่</TableCell>
                          ) : (
                            <TableCell></TableCell>
                          )}
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Grid>
          <Grid item xs={12} className={"Grid_small"}>
            <div>
              <h2>รายชื่อคนในกลุ่ม</h2>
            </div>
            <div>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>ลำดับ</TableCell>
                      <TableCell>รายชื่อ/มือ</TableCell>
                      <TableCell>วันนี้มาไหม</TableCell>
                    </TableRow>
                  </TableHead>
                  {Listplayernotjoin ? (
                    <TableBody>
                   {Listplayernotjoin.map((row,index) => (
                      <TableRow key={index}>
                        <TableCell>{index}</TableCell>
                        <TableCell>{row.Player_id}</TableCell>
                        <TableCell><Button variant="outlined" aria-label="เข้าร่วมตี" onClick={(event) => { 
                                join_today(row.Player_id,true)
                            }}>ลงชื่อ</Button></TableCell>
                      </TableRow>
                   ))}
                   </TableBody>
                  ) : (
                    <TableBody>
                    {list.list.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell>{row.Player_id}</TableCell>
                          <TableCell>
                            {row.Player_name + " / Lv." + row.Type_id}
                          </TableCell>
                          <TableCell>
                            <Button variant="outlined" aria-label="เข้าร่วมตี" onClick={(event) => { 
                                join_today(row.Player_id,true)
                            }}>ลงชื่อ</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  )}
                </Table>
              </TableContainer>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Template_Web;
