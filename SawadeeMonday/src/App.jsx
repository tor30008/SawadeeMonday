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
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import {
  CardContent,
  CardHeader,
  CardMedia,
  CssBaseline,
  FormControl,
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
import {Getallmatchplaying_today_service} from "./Service/Match_service";
import io from "socket.io-client";
import Modal from '@mui/material/Modal';
import {
  Getplayerjointoday_service,
  Getplayernotjointoday_service,
} from "../src/Player/Player_service";
import { Clear } from "@mui/icons-material";
import { Allcourt_service } from "./Service/Court_service";


const socket = io(import.meta.env.VITE_HTTP_SOCKET, { transports: ["websocket"] });

export const Template_Web = () => {
  const [today, setToday] = useState(new Date());
  const [TimetoDay, setTimetoDay] = useState("");
  const [MenuId, SetMenuId] = useState("");
  const [Listplayer, setListplayer] = useState(null);
  const [Listplayerjointoday2, setListplayerjointoday2] = useState(null);
  const [Listmatching_playnow,setListmatching_playnow] = useState(null);

  useEffect(() => {
    socket.on("M", (data) => {
      socket.emit("MFC", "Sawadee by React");
    });

    socket.on("listplayertodayFromServer", (data) => {
      console.log(data);
    });

    socket.on("Listmatchplaying_to_server",(data) => {
      socket.emit("Listmatchplaying_from_server",(data) => {
        console.log(data);
      })
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
    const getMatch_nowplay = async() => {
      try{
        const res = await Getallmatchplaying_today_service();
        const result = await res;
        if(result != null){
          setListmatching_playnow(result);
        }
        else{
          setListmatching_playnow(false);
        }
        setListmatching_playnow(result);
        console.log(Listmatching_playnow);
      }catch(error){
        console.log(error);
      }
    }
    getallplayer();
    getMatch_nowplay();
    console.log("Use effect mainpage")
    console.log(Listmatching_playnow);
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
        <Grid className="Menu-Template" xs={12} lg = {2}>
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
        <Grid className="Grid-Content" xs={12} lg = {10}>
          {MenuId === 1 ? (
            <Main_page
              list={Listplayer}
              listjoinplayer_main={Listplayerjointoday2}
              listmatch_playnow = {Listmatching_playnow}
            ></Main_page>
          ) : null}
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
  const [LengthListplayertoday, setLengthListplayertoday] = useState(null);
  const [Queueplayertoday, setQueueplayertoday] = useState(null);
  const [Peoplenotqueue, setPeoplenotqueue] = useState(null);
  const [Openmodal_addmatch,setOpenmodal_addmatch] = useState(false);

  const [Selectplayerone , setSelectplayerone] = useState(null);
  const [SelectPlayertwo , setSelectplayertwo] = useState(null);
  const [Selectplayerthree, setSelectplayerthree] = useState(null);
  const [Selectplayerfour, setSelectplayerfour] = useState(null);
  const [SelectCourt , setSelectCourt] = useState(null);

  const [ListPlaying, setListPlaying] = useState(false);
  const [ListPlayingtwo,setListPlayingtwo] = useState(false);
  const [ListPlayingthree,setListPlayingthree] = useState(false);
  const [ListPlayingfour , setListPlayingfour] = useState(false);
  const [Listrecheckmatch_playnow , setListrecheckcatch_playnow] = useState(false);
  const [Listcourt, setListcourt] = useState(false);

  const handlemodalopen_addmatch = () => {
    setOpenmodal_addmatch(true);
    selectplayerone_playering();
  }
  const handlemodalclose_addmatch = () => {
    setOpenmodal_addmatch(false);
    Clear_data();
  }

  const selectplayerone_playering = () => { 
    socket.emit("Select_playerone");
    socket.on("res_Playerone-readytoplay",(data) => { 
      setListPlaying(data);
    })
    console.log(ListPlaying);
  }

  const selectplayertwo_playering = (Playerone_id) => {
    setSelectplayerone(Playerone_id);
    socket.emit("Select_playertwo",Playerone_id);
    socket.on("res_Playertwo-readytoplay",(data)=> {
      setListPlayingtwo(data);
    })
  }

  const selectplayerthree_playering = (Playertwo_id) => {
    setSelectplayertwo(Playertwo_id);
    socket.emit("Select_playerthree",{Playerone_id : Selectplayerone,Playertwo_id : Playertwo_id});
    socket.on("res_Playerthree-readytoplay",(data) => {
      setListPlayingthree(data);
    })
  }

  const selectplayerfour_playing = (Playerthree_id) => {
    setSelectplayerthree(Playerthree_id);
    socket.emit("Select_playerfour",{Playerone_id : Selectplayerone,Playertwo_id : SelectPlayertwo,Playerthree_id:Playerthree_id});
    socket.on("res_Playerfour-readytoplay",(data) => {
      setListPlayingfour(data);
    })
  }

  const submitdraftmatch = () => {
    socket.emit("Submitdraftmatch_to_server",{Playerone_id : Selectplayerone,Playertwo_id : SelectPlayertwo,Playerthree_id:Selectplayerthree,Playerfour_id : Selectplayerfour,Court_id : SelectCourt});
    handlemodalclose_addmatch();
    socket.on("Listmatchplaying_from_server",(data) => {
      console.log(data);
    });
    //Clear_data();
  }
  
  const Clear_data = () => {
    setListPlaying(false);
    setListPlayingtwo(false);
    setListPlayingthree(false);
    setListPlayingfour(false);
    //setListcourt(false);

    setSelectplayerone(false);
    setListPlaying(false);
    setListPlayingtwo(false);
    setListPlayingthree(false);
    setListPlayingfour(false);  
  }//ไว้เคลียช้อมูล Usestate

  useEffect(() => {
    
    if(Selectplayerone && SelectPlayertwo && Selectplayerthree && Selectplayerfour){
      console.log("unlock button submit");
    }

    getAllcourd();
    
  }, [Listplayertoday, Listplayernotjoin, Queueplayertoday, Peoplenotqueue,ListPlaying]);

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
        setLengthListplayertoday(data.listjoinday.length);
      }); // ส่งค่ามาทั้งหมด

      socket.on("queuebyserver", (data) => {
        console.log(data.queue_match);
        setQueueplayertoday(data.queue_match);
        setPeoplenotqueue(data.player_notqueue);

      }); // รับคิวตีแบด กะ คนไม่มีคิวตีแบด
    } catch (error) {
      console.log(error);
    }
  }; // Component เอาไว้เช็คชื่อ คนมาในแต่ละวัน

  const getAllcourd = async() => {
    try{
      const res = await Allcourt_service();
      const result = await res;
      setListcourt(result);
     // console.log(Listcourd);
     // console.log(result);
    }catch(error){
      console.log(error);
    }
  }

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} lg = {4}>
          <div className={"Grid_list"} >
            <Grid container>
              <Grid item xs = {10}  color={"white"}>
                <h2>แมต</h2>
              </Grid>
              <Grid item xs = {2} className={"Float_Addmatch"}>
                <Fab size={"small"}>
                  <AddIcon onClick = {handlemodalopen_addmatch}></AddIcon>
                </Fab>
              </Grid>
            </Grid>
            
              {!Listrecheckmatch_playnow ? (
                <p>ไม่มีคน</p>
              ) : (
                list.listmatch_playnow.map((row,index) => (
              <Grid item xs = {12} lg = {12} className={"Listquene_match"} key={index}>
                <Grid container spacing={2} key = {index}>
                    <Grid item xs={2} lg ={2} className={"Detail_Listqueue_Time"}>
                      <p>{index + 1}</p>
                    </Grid>
                    <Grid item xs={12} lg = {8} className={"Detail_Listqueue_Player"}>
                      <Grid container direction={"row"} spacing={2}>
                        <Grid item xs = {6} >
                          <p>{row.Teamone_Playerone_name}</p>
                        </Grid>
                        <Grid item xs = {6}>
                          <p>{row.Teamone_Playertwo_name}</p>
                        </Grid>
                      </Grid>
                      <Grid container direction={"row"} spacing={2}>
                        <Grid item xs = {6}>
                          <p>{row.Teamtwo_Playerone_name}</p>
                        </Grid>
                        <Grid item xs = {6}>
                          <p>{row.Teamtwo_Playertwo_name}</p>
                        </Grid>
                      </Grid>
                    </Grid>
                  <Grid item xs = {2} className={"Detail_Listqueue_Time"}>
                    <Grid container direction={"row"}>
                      <Grid item xs={12} >
                        <p className={"Timematch"}>{row.Match_timestart_convert}</p>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
                ))
              )}
          </div>
        </Grid>

        <Grid item lg = {4} xs={12}>
          <div className={"Grid_list"} color="white">
            <h2>คิวที่จัดให้</h2>
            <div>
              {LengthListplayertoday >= 4 ? (
                Queueplayertoday.map((row, index) => (
                  <Grid container spacing={1} key={index} className={"Listqueue_Player"}>
                    {row.map((player,row_index) => (
                      <>
                      <Grid item xs={3} key={row_index} >
                        <Grid item xs={12} style={{ display : 'flex'}} justifyContent={"center"}>
                          <Avatar>
                            <ImageIcon></ImageIcon>
                          </Avatar>
                        </Grid>
                        <Grid item xs={12}>
                          <p>{player.Player_name}</p>
                        </Grid>
                      </Grid>
                      </>
                    ))}
                  </Grid>
                ))
              ) : (
                <p>ต้องมีผู้เล่น 4 คน เพื่อจัดคิว</p>
              )}
            </div>
          </div>
        </Grid>
        <Grid item xs={12} lg = {4}>
          <Grid item xs={12} className={"Grid_small"}>
            <div>
              <h2>รายชื่อคนตีวันนี้</h2>
            </div>
            <div>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow className = {"TableHead"}>
                      <TableCell>ลำดับ</TableCell>
                      <TableCell>ชื่อ</TableCell>
                      <TableCell>ตีไปกี่เกมส์</TableCell>
                      <TableCell>สถานนะ</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {Listplayertoday
                      ? Listplayertoday.map((row, index) => (
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
                      : list.listjoinplayer_main.map((row, index) => (
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
                        ))}
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
                      {Listplayernotjoin.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell>{++index}</TableCell>
                          <TableCell>
                            {row.Player_name + " / Lv." + row.Type_id}
                          </TableCell>
                          <TableCell>
                            <Button
                              variant="outlined"
                              aria-label="เข้าร่วมตี"
                              onClick={(event) => {
                                join_today(row.Player_id, true);
                              }}
                            >
                              ลงชื่อ
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  ) : (
                    <TableBody>
                      {list.list.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell>{++index}</TableCell>
                          <TableCell>
                            {row.Player_name + " / Lv." + row.Type_id}
                          </TableCell>
                          <TableCell>
                            <Button
                              variant="outlined"
                              aria-label="เข้าร่วมตี"
                              onClick={(event) => {
                                join_today(row.Player_id, true);
                              }}
                            >
                              ลงชื่อ
                            </Button>
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

      {/*Modal Addmatch*/}
        <Modal open={Openmodal_addmatch} onClose={handlemodalclose_addmatch}>
            <Box className={"Modaladdmatch"}>
              <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <h2>จัดคู่ตี</h2>
                  </Grid>
                  <Grid item xs={4} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    เลือกผู้เล่นทีม 1
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl fullWidth>
                      <InputLabel id = "Teamone_playerone_label" >เลือกผู้เล่นทีม 1 คนที่ 1</InputLabel>
                      <Select sx={{color:"white"}} labelId="Teamone_playerone_label" id = "teamone_playerone" label="Age" onChange={(event) => (selectplayertwo_playering(event.target.value))} defaultValue={0}>
                        {ListPlaying != false ? (
                          ListPlaying.map((row,index) => (
                            <MenuItem  key = {index} value = {row.Player_id}>{row.Player_name}</MenuItem>
                          ))
                        ) : 
                        (<MenuItem value = {0}>สมาชิกลงชื่อไม่ถึง 4 คน</MenuItem>) }
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                  <FormControl fullWidth>
                      <InputLabel id = "Teamone_playerone_label">เลือกผู้เล่นทีม 1 คนที่ 2</InputLabel>
                      <Select sx={{color:"white"}} labelId="Teamone_playerone_label" id = "teamone_playerone" label="Age" onChange={(event) => (selectplayerthree_playering(event.target.value))} defaultValue={0}>
                        {ListPlayingtwo ? 
                        (
                          ListPlayingtwo.map((row,index) => (


                            <MenuItem key={index} value = {row.Player_id}>{row.Player_name}</MenuItem>
                          ))
                        ) : 
                        (<MenuItem value = {0}>สมาชิกลงชื่อไม่ถึง 4 คน</MenuItem>)
                        }
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    เลือกผู้เล่นทีม 2
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl fullWidth>
                      <InputLabel id = "Teamone_playerone_label">เลือกผู้เล่นทีม 2 คนที่ 1</InputLabel>
                      <Select sx={{color:"white"}} labelId="Teamone_playerone_label" id = "teamone_playerone" label="Age" onChange={(event) => (selectplayerfour_playing(event.target.value))} defaultValue={0}>
                        {ListPlayingthree ? 
                        (
                          ListPlayingthree.map((row,index) => (
                            <MenuItem key = {index} value = {row.Player_id}>{row.Player_name}</MenuItem>
                          ))
                        ) : 
                        (
                          <MenuItem value = {0}>สมาชิกลงชื่อไม่ถึง 4 คน</MenuItem>
                        ) 
                        }
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl fullWidth>
                      <InputLabel id = "Teamone_playerone_label">เลือกผู้เล่นทีม 2 คนที่ 2</InputLabel>
                      <Select sx={{color:"white"}} labelId="Teamone_playerone_label" id = "teamone_playerone" label="Age" onChange={(event) => setSelectplayerfour(event.target.value)} defaultValue={0}>
                      {ListPlayingfour ? 
                      (
                        ListPlayingfour.map((row,index) => (
                          <MenuItem key = {index} value = {row.Player_id}>{row.Player_name}</MenuItem>
                        ))
                      ) : 
                      (
                        <MenuItem value = {0}>สมาชิกลงชื่อไม่ถึง 4 คน</MenuItem>
                      )}
                      </Select>
                    </FormControl>
                  </Grid>
                  
                  <Grid item xs = {4} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                        เลือกสนามตีแบด
                  </Grid>
                  <Grid item xs = {8}>
                    <FormControl fullWidth>
                      <InputLabel id = "Court_label">เลือกสนามที่ตีแบด</InputLabel>
                      <Select sx={{color:"white"}} labelId="Court_label" id = "court" label ="court" onChange={(event) => setSelectCourt(event.target.value)} defaultValue={0}>
                        <MenuItem value={0}>กรุณาเลือกสนามแบด</MenuItem>
                        {
                          Listcourt ?
                          (
                            Listcourt.map((row,index) => (
                              <MenuItem key = {index} value={row.Court_Id} >{row.Court_name + " / ราคา : " + row.Court_price + " " + row.Court_Id}</MenuItem> 
                            ))
                          ) : 
                          (
                            <MenuItem>ไม่มีข้อมูล</MenuItem>
                          )}
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={4} sx={{display:"flex",justifyContent:"center",alignItems:"center",color:"white"}}>
                      เลือกลูกแบด
                  </Grid>
                  <Grid item xs={8}>
                    <FormControl fullWidth>
                      <InputLabel id = "type_badmintonball" sx={{color:"white"}}>กรุณาเลือกลูกแบด</InputLabel>
                      <Select defaultValue={0} sx={{color:"white"}}>
                        <MenuItem value = {0}>ไม่มีลูกแบด</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={6}>
                    <Button variant={"contained"} onClick={submitdraftmatch} >จัดแข่ง</Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button variant={"contained"} onClick={handlemodalclose_addmatch}>ยกเลิก</Button>
                  </Grid>
              </Grid>
            </Box>
        </Modal>
      {/*Modal Addmatch */}
    </>
  );
};
export default Template_Web;
