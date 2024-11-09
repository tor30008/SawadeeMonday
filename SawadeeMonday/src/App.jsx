import React, { useEffect, useState, useRef, cache } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

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
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { PropTypes } from "prop-types";
import { AppProvider } from "@toolpad/core/AppProvider";
import { createTheme } from "@mui/material/styles";

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
  ButtonGroup,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Divider,
} from "@mui/material";
import Grid from "@mui/material/Grid";
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
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";

import Player from "../src/Player/Player";
import Typeplayer from "../src/Typeplayer/Typeplayer";
import Court from "../src/Court/Court";
import Shuttercock from "./shuttercock/Shuttercock";
import Payment from "./Payment/Payment";
import Allplayer_service from "./Service/Allplayer_service";
import { Jointoday_service } from "./Service/Service";
import {
  Getallmatchplaying_today_service,
  Randommatch_service,
  deleteMatchid_service,
  finishMatchid_service,
} from "./Service/Match_service";
import io from "socket.io-client";
import Modal from "@mui/material/Modal";
import {
  Getplayerjointoday_service,
  Getplayernotjointoday_service,
} from "../src/Player/Player_service";
import { Clear } from "@mui/icons-material";
import { Allcourt_service } from "./Service/Court_service";
import { GetShuttercock_service } from "./shuttercock/Shuttercock_service";
import Home from "./Home/Home";
import ModalMoreshuttercock from "./ModalMoreShuttercock/ModalMoreshuttercock";
import ModalFinishMatch from "./ModalFinishMatch/ModalFinishMatch";
import CRUD from "./CRUD/CRUD";
import Swal from "sweetalert2";

const socket = io(import.meta.env.VITE_HTTP_SOCKET, {
  transports: ["websocket"],
});

export const Template_Web = () => {
  const [today, setToday] = useState(new Date());
  const [TimetoDay, setTimetoDay] = useState("");
  const [MenuId, SetMenuId] = useState("");
  const [Listplayer, setListplayer] = useState(null);
  const [Listplayerjointoday2, setListplayerjointoday2] = useState(null);
  const [openmenu, setMenu] = useState(true);

  const drawerWidth = 350;

  useEffect(() => {}, []);

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

  const handlemenuToggle = () => {
    setMenu(!openmenu);
    console.log(openmenu);
  };

  return (
    <>
      <Router>
        <AppProvider>
          <Box sx={{ display: "flex" }}>
            {/* AppBar สำหรับแสดงชื่อ Dashboard ด้านบน */}
            <AppBar
              position="fixed"
              sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            >
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick={handlemenuToggle}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                  Management Badminton
                </Typography>
              </Toolbar>
            </AppBar>

            {/* Sidebar สำหรับเมนูด้านข้าง */}
            <Drawer
              variant="temporary"
              open={openmenu} // ใช้ openmenu ที่ถูกต้อง
              onClose={handlemenuToggle}
              sx={{
                display: { xs: "block", md: "ิblock" }, // แสดง Drawer บนมือถือ
                "& .MuiDrawer-paper": { width: drawerWidth , mt : 8 },
              }}
              >
              <Box sx={{ overflow: "auto"}}>
                <List>
                  <ListItem button component={Link} to="/Main">
                    <ListItemText primary="Home"></ListItemText>
                  </ListItem>

                  <ListItem button component={Link} to="/Player">
                    <ListItemText primary="Player"></ListItemText>
                  </ListItem>

                  <ListItem button component={Link} to="/show">
                    <ListItemText primary = "Countbadminton"></ListItemText>
                  </ListItem>
                </List>
                <Divider />
              </Box>
            </Drawer>

            {/* Main Content */}
            <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
              <Routes>
                <Route path="/" element={<Home></Home>} />
                <Route path="/Main" element={<Home></Home>} />
                <Route path="/Player" element={<Player></Player>} />
              </Routes>
            </Box>
          </Box>
        </AppProvider>
      </Router>
      {/*}
      <Grid container className="Grid-header">
        <Grid className="Time-To-Day" xs={2}>
          <p className="Timer-Font">{TimetoDay}</p>
        </Grid>
        <Grid xs={10}>
          <p className="GroupName">SAWADEE MONDAY BADMINTON</p>
        </Grid>
      </Grid>

      <Grid container spacing={0}>
        <Router>
        <Grid className="Menu-Template" xs={12} lg = {2}>
          <Paper sx={{ width: "100%" }}>
            <MenuList className="Menu-List">
              <MenuItem>
                <ListItemIcon className="icon" fontSize="small">
                  <HomeIcon className="icon" fontSize="small"></HomeIcon>
                </ListItemIcon>
                <Link to="/main">
                  <ListItemText className="Item-List">หน้าแรก</ListItemText>
                </Link>
              </MenuItem>

              <MenuItem>
                <ListItemIcon>
                  <SportsTennisIcon
                    className="icon"
                    fontSize="small"
                  ></SportsTennisIcon>
                </ListItemIcon>
                <Link to ="/Show">
                  <ListItemText className="Item-List">การแข่ง</ListItemText>
                </Link>
              </MenuItem>

              <MenuItem>
                <ListItemIcon>
                  <PeopleAltIcon
                    className="icon"
                    fontSize="small"
                  ></PeopleAltIcon>
                </ListItemIcon>
                <Link to ="/Player">
                  <ListItemText className="Item-List">ผู้เล่น</ListItemText>
                </Link>
              </MenuItem>

              <MenuItem>
                <ListItemIcon>
                  <FingerprintIcon
                    className="icon"
                    fontSize="small"
                  ></FingerprintIcon>
                </ListItemIcon>
                <Link to = "/Typeplayer">
                  <ListItemText className="Item-List">ฝีมือ</ListItemText>
                </Link>
              </MenuItem>
              
              <MenuItem>
                <ListItemIcon>
                  <HomeIcon className="icon" fontSize="small"></HomeIcon>
                </ListItemIcon>
                <Link to="/Court">
                  <ListItemText className="Item-List">สนาม</ListItemText>
                </Link>
              </MenuItem>
           
               <MenuItem>
                <ListItemIcon>
                  <SportsBaseballIcon
                    className="icon"
                    fontSize="small"
                  ></SportsBaseballIcon>
                </ListItemIcon>
                <Link to="/Shuttercock">
                  <ListItemText className="Item-List">ลูกแบด</ListItemText>
                </Link>
              </MenuItem>

              <MenuItem>
                <ListItemIcon>
                  <AttachMoneyIcon
                    className="icon"
                    fontSize="small"
                  ></AttachMoneyIcon>
                </ListItemIcon>
                <Link to="/Payment">
                  <ListItemText className="Item-List">ค่าใช้จ่าย</ListItemText>
                </Link>
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

              <MenuItem>
                <ListItemIcon>
                  <StackedBarChartIcon
                    className="icon"
                    fontSize="small"
                  ></StackedBarChartIcon>
                </ListItemIcon>

                <Link to="/CRUD">
                  <ListItemText className="Item-List">CRUD</ListItemText>
                </Link>             
              </MenuItem>
            </MenuList>
          </Paper>
        </Grid>

        <Grid className="Grid-Content" xs={12} lg = {10}>          
            <Routes>
              <Route path="/"  element={<Home></Home>}></Route>
              <Route path="/main" element={<Main_page></Main_page>}></Route>
              {<Route path="/Show" element={<Show_courtbadminton></Show_courtbadminton>}></Route>}
              <Route path="/Player" element={<Player></Player>}></Route>
              <Route path="/Typeplayer" element={<Typeplayer></Typeplayer>}></Route>
              <Route path="/Court" Component={Court}></Route>
              <Route path="/Shuttercock" element={<Shuttercock></Shuttercock>}></Route>
              <Route path="/Payment" element={<Payment></Payment>}></Route>
            </Routes>
        </Grid>
        </Router>
      </Grid>


      <Grid xs={12} className="Grid-Footer">
        <div>
          <footer>{`Copyright @ by โรจน์`}</footer>
        </div>
      </Grid>
      {*/}
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
  const [StatusModalmoreshuttercock, setStatusModalmoresuttercock] =
    useState(false); // ตัวกำหนด status modal

  const [Listplayertoday, setListplayertoday] = useState(null);
  const [Listplayernotjoin, setListplaynotjoin] = useState(null);
  const [LengthListplayertoday, setLengthListplayertoday] = useState(null);
  const [Queueplayertoday, setQueueplayertoday] = useState(null);
  const [Peoplenotqueue, setPeoplenotqueue] = useState(null);
  const [Openmodal_addmatch, setOpenmodal_addmatch] = useState(false);
  const [ButtonSubmitmatch, setButtonSubmitmatch] = useState(true);

  const [Selectplayerone, setSelectplayerone] = useState(null);
  const [SelectPlayertwo, setSelectplayertwo] = useState(null);
  const [Selectplayerthree, setSelectplayerthree] = useState(null);
  const [Selectplayerfour, setSelectplayerfour] = useState(null);
  const [SelectCourt, setSelectCourt] = useState(null);
  const [SelectShuttercock, setSelectShuttercock] = useState(null);
  const [selectmatchIdMoreshuttercock, setSelectmatchIdMoreshuttercock] =
    useState(false);
  const [isloadAllmatch, setisloadAllmatch] = useState(false); // ไว้เช็คว่าควรอัพเดทไหม
  const [isloadRandommatch, setisloadRandommatch] = useState(false);

  const [ListPlaying, setListPlaying] = useState(false);
  const [ListPlayingtwo, setListPlayingtwo] = useState(false);
  const [ListPlayingthree, setListPlayingthree] = useState(false);
  const [ListPlayingfour, setListPlayingfour] = useState(false);
  const [List_matchplaynow, setList_matchplaynow] = useState(false);
  const [Listcourt, setListcourt] = useState(false);
  const [ListShuttercock, setListShuttercock] = useState(false);
  const location = useLocation();

  useEffect(() => {
    getRandomMap();
    getAllmatchplaynow();
    getAllshuttercock();
    getAllcourt();
    getPlayerjointoday();
    getPlayernotjointoday();
  }, []);

  useEffect(() => {
    if (
      Selectplayerone &&
      SelectPlayertwo &&
      Selectplayerthree &&
      Selectplayerfour &&
      SelectCourt &&
      SelectShuttercock
    ) {
      setButtonSubmitmatch(false);
    } else {
      setButtonSubmitmatch(true);
    }
    // ถ้ากรอกข้อมูลไม่ตรบ
  }, [
    Selectplayerone,
    SelectPlayertwo,
    Selectplayerthree,
    Selectplayerfour,
    SelectCourt,
    SelectShuttercock,
  ]);

  useEffect(() => {
    const reloadallMatch = async () => {
      if (isloadAllmatch) {
        getAllmatchplaynow();
        setisloadAllmatch(false);
      }
    };
    reloadallMatch();
  }, [isloadAllmatch]);

  /*useEffect(() => {
  console.log(isloadRandommatch);
  const reloadRandommatch = async() => {
    if(isloadRandommatch == true){
      console.log("เข้า")
      socket.on("queuebyserver", (data) => {
        console.log(data);

        //console.log(data.queue_match);
        setQueueplayertoday(data.queue_match);
        setPeoplenotqueue(data.player_notqueue);
      }); 
      setisloadRandommatch(false)
    }
  }
  reloadRandommatch()
},[isloadRandommatch])*/

  const handlemodalopen_addmatch = () => {
    setOpenmodal_addmatch(true);
    selectplayerone_playering();
  };
  const handlemodalclose_addmatch = () => {
    setOpenmodal_addmatch(false);
    Clear_data();
  };

  const selectplayerone_playering = () => {
    socket.emit("Select_playerone");
    socket.on("res_Playerone-readytoplay", (data) => {
      setListPlaying(data);
    });
  };

  const selectplayertwo_playering = (Playerone_id) => {
    setSelectplayerone(Playerone_id);
    socket.emit("Select_playertwo", Playerone_id);
    socket.on("res_Playertwo-readytoplay", (data) => {
      setListPlayingtwo(data);
    });
  };

  const selectplayerthree_playering = (Playertwo_id) => {
    setSelectplayertwo(Playertwo_id);
    socket.emit("Select_playerthree", {
      Playerone_id: Selectplayerone,
      Playertwo_id: Playertwo_id,
    });
    socket.on("res_Playerthree-readytoplay", (data) => {
      setListPlayingthree(data);
    });
  };

  const selectplayerfour_playing = (Playerthree_id) => {
    setSelectplayerthree(Playerthree_id);
    socket.emit("Select_playerfour", {
      Playerone_id: Selectplayerone,
      Playertwo_id: SelectPlayertwo,
      Playerthree_id: Playerthree_id,
    });
    socket.on("res_Playerfour-readytoplay", (data) => {
      setListPlayingfour(data);
    });
  };

  const submitdraftmatch = async () => {
    socket.emit("Submitdraftmatch_to_server", {
      Playerone_id: Selectplayerone,
      Playertwo_id: SelectPlayertwo,
      Playerthree_id: Selectplayerthree,
      Playerfour_id: Selectplayerfour,
      Court_id: SelectCourt,
      Type_BB_id: SelectShuttercock,
    });
    handlemodalclose_addmatch();
    getAllmatchplaynow();
    // setisloadRandommatch(true);
  };

  const Clear_data = () => {
    setListPlaying(false);
    setListPlayingtwo(false);
    setListPlayingthree(false);
    setListPlayingfour(false);
    //setListShuttercock(false);
    //setListcourt(false);

    setSelectplayerone(null);
    setSelectplayertwo(null);
    setSelectplayerthree(null);
    setSelectplayerfour(null);
    setSelectCourt(null);
    setSelectShuttercock(null);
  }; //ไว้เคลียช้อมูล Usestate

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

  const getAllcourt = async () => {
    try {
      const res = await Allcourt_service();
      const result = await res;
      setListcourt(result);
      //console.log(Listcourt);
    } catch (error) {
      console.log(error);
    }
  };
  const getAllshuttercock = async () => {
    try {
      const res = await GetShuttercock_service();
      const result = await res;
      setListShuttercock(result);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllmatchplaynow = async () => {
    try {
      const res = await Getallmatchplaying_today_service();
      const result = await res;
      setList_matchplaynow(result);
    } catch (error) {
      console.log(error);
    }
  };

  const getPlayernotjointoday = async () => {
    try {
      const res = await Getplayernotjointoday_service();
      const result = await res;
      setListplaynotjoin(result);
      // console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const getPlayerjointoday = async () => {
    try {
      const res = await Getplayerjointoday_service();
      const result = await res;
      setListplayertoday(result);
      //setLengthListplayertoday(result.length);
    } catch (error) {
      console.log(error);
    }
  };

  const getRandomMap = async () => {
    try {
      const res = await Randommatch_service();
      const result = await res;
      setQueueplayertoday(result.queue_match);
    } catch (err) {
      console.log(err);
    }
  };

  const handle_Statusmodalmoreshutter_cock_open = (e, id) => {
    e.stopPropagation(); // ให้หยุดการทำงานของ Parent event
    setStatusModalmoresuttercock(true);
    setSelectmatchIdMoreshuttercock(id);
  }; // ส่งค่ามาให้เปิด modal  และ เปิด tag child modalmoreshuttercock

  const handle_Statusmodalmoreshutter_cock_close = (e) => {
    setStatusModalmoresuttercock(e);
    setSelectmatchIdMoreshuttercock(null);
    setisloadAllmatch(true);
  };

  const finishMatch = async (
    matchId,
    TOO_ID,
    TOW_ID,
    TWO_ID,
    TWW_ID,
    match_timestart
  ) => {
    /*
      TOO_ID = teamone_playerone_id 
      TOW_ID = teamone_playertwo_id
      TWO_ID = teamtwo_playerone_id
      TWW_ID = teamtwo_playertwo_id
      
    */
    var statusMatch;
    Swal.fire({
      title: "Manage Match",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Finish Match",
      denyButtonText: "Delete Match",
    }).then((result) => {
      if (result.isConfirmed) {
        //Swal.fire("Finish Match")
        Swal.fire({
          title: "กรอกข้อมูลคะแนนทั้ง 2 ทีม ",
          showCancelButton: true,
          cancelButtonText: "ยกเลิก",
          cancelButtonColor: "#d33",
          html:
            '<input id="scoreTeamone" class="swal2-input" type ="number" placeholder="คะแนนทีม1">' +
            '<input id="scoreTeamtwo" class="swal2-input" type = "number" placeholder="คะแนนทีม2">',
          preConfirm: () => {
            const scoreTeamone = document.getElementById("scoreTeamone");
            const scoreTeamtwo = document.getElementById("scoreTeamtwo");
            if (!scoreTeamone.value) {
              Swal.showValidationMessage("กรุณากรอกคะแนนทีม 1");
              return false;
            }
            if (!scoreTeamtwo.value) {
              Swal.showValidationMessage("กรุณากรอกคะแนนทีม 2");
              return false;
            }
            return [scoreTeamone.value, scoreTeamtwo.value];
          },
        })
          .then((data) => {
            console.log(data);
            const scoreTeamone = data.value[0];
            const scoreTeamtwo = data.value[1];
            const promiseisfinishMatchid = async (
              matchId,
              TOO_ID,
              TOW_ID,
              TWO_ID,
              TWW_ID,
              match_timestart,
              scoreTeamone,
              scoreTeamtwo
            ) => {
              const result = await finishMatchid_service(
                matchId,
                TOO_ID,
                TOW_ID,
                TWO_ID,
                TWW_ID,
                match_timestart,
                scoreTeamone,
                scoreTeamtwo
              );
              console.log(result);
              return true;
            }; //ประกาศ function
            promiseisfinishMatchid(
              matchId,
              TOO_ID,
              TOW_ID,
              TWO_ID,
              TWW_ID,
              match_timestart,
              scoreTeamone,
              scoreTeamtwo
            ).then(() => {
              setisloadAllmatch(true);
              console.log(isloadAllmatch);
              console.log(List_matchplaynow);
            });
            getPlayerjointoday();
          })
          .catch((error) => {
            console.log(error);
          });
        //console.log(promiseisfinishMatchid);
        //promiseisfinishMatchid();
      } // กรณี confirm แล้วกรอก ข้อมูลคะแนนทีม1 แล้ว ทีม 2
      if (result.isDenied) {
        const promisedeleteMatchid = async () => {
          const result = await deleteMatchid_service(
            matchId,
            TOO_ID,
            TOW_ID,
            TWO_ID,
            TWW_ID,
            match_timestart
          );
          if (result === true) {
            Swal.fire(`Delete Matchid : ${matchId}`, "", "success");
            return true;
          }
        };
        promisedeleteMatchid().then((data) => {
          console.log(data);
          setisloadAllmatch(true);
          console.log(List_matchplaynow);
          getPlayerjointoday();
        });
      }
    });
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={4}>
          <div className={"Grid_list"}>
            <Grid container>
              <Grid item xs={10} color={"white"}>
                <h2>แมต</h2>
              </Grid>
              <Grid item xs={2} className={"Float_Addmatch"}>
                <Fab size={"small"}>
                  <AddIcon onClick={handlemodalopen_addmatch}></AddIcon>
                </Fab>
              </Grid>
            </Grid>

            {!List_matchplaynow ? (
              <p>ไม่มีคน</p>
            ) : (
              List_matchplaynow.map((row, index) => (
                <Grid
                  item
                  xs={12}
                  lg={12}
                  className={"Listquene_match"}
                  key={index}
                  onClick={() =>
                    finishMatch(
                      row.Match_id,
                      row.Teamone_playerone,
                      row.Teamone_playertwo,
                      row.Teamtwo_playerone,
                      row.Teamtwo_playertwo,
                      row.Match_timestart
                    )
                  }
                >
                  <Grid container spacing={2} key={index}>
                    <Grid
                      item
                      xs={1}
                      lg={1}
                      className={"Detail_Listqueue_Time"}
                    >
                      <p>{index + 1}</p>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      lg={5}
                      className={"Detail_Listqueue_Player"}
                    >
                      <Grid container direction={"row"} spacing={2}>
                        <Grid item xs={6}>
                          <p>{row.Teamone_Playerone_name}</p>
                        </Grid>
                        <Grid item xs={6}>
                          <p>{row.Teamone_Playertwo_name}</p>
                        </Grid>
                      </Grid>
                      <Grid container direction={"row"} spacing={2}>
                        <Grid item xs={6}>
                          <p>{row.Teamtwo_Playerone_name}</p>
                        </Grid>
                        <Grid item xs={6}>
                          <p>{row.Teamtwo_Playertwo_name}</p>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      xs={3}
                      lg={3}
                      className={"Detail_Listqueue_Time"}
                    >
                      <Grid container direction={"row"}>
                        <Grid item xs={6}>
                          <p>จำนวนลูกแบด</p>
                          <ButtonGroup variant="outlined">
                            <Button>-</Button>
                            <Button>{row.Count_Shuttercock}</Button>
                            <Button
                              onClick={(e) =>
                                handle_Statusmodalmoreshutter_cock_open(
                                  e,
                                  row.Match_id
                                )
                              }
                            >
                              +
                            </Button>
                          </ButtonGroup>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item lg={3} className={"Timematch"}>
                      <Grid container direction={"row"}>
                        <p>{row.Match_timestart_convert}</p>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              ))
            )}
          </div>
        </Grid>
        {/**Modal Moreshuttercock */}
        {StatusModalmoreshuttercock ? (
          <ModalMoreshuttercock
            status={{
              stauts: StatusModalmoreshuttercock,
              id: selectmatchIdMoreshuttercock,
            }}
            onDatareturn={handle_Statusmodalmoreshutter_cock_close}
          ></ModalMoreshuttercock>
        ) : null}

        {/**Modal Moreshuttercock */}

        <Grid item lg={4} xs={12}>
          <div className={"Grid_list"} color={"white"}>
            <h2 style={{ color: "white" }}>คิวที่จัดให้</h2>
            <div>
              {Queueplayertoday ? (
                Queueplayertoday.map((row, index) => (
                  <Grid
                    container
                    spacing={1}
                    key={index}
                    className={"Listqueue_Player"}
                  >
                    {row.map((player, row_index) => (
                      <>
                        <Grid item xs={3} key={row_index}>
                          <Grid
                            item
                            xs={12}
                            style={{ display: "flex" }}
                            justifyContent={"center"}
                          >
                            <Avatar>
                              <SportsTennisIcon></SportsTennisIcon>
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
        <Grid item xs={12} lg={4}>
          <Grid item xs={12} className={"Grid_small"}>
            <div>
              <h2>รายชื่อคนตีวันนี้</h2>
            </div>
            <div>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow className={"TableHead"}>
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
                          <TableCell>
                            {row.Joinday_round ? row.Joinday_round : 0}
                          </TableCell>
                          {!row.Joinday_status ? (
                            <TableCell>กลับบ้านแล้ว</TableCell>
                          ) : row.Joinday_status == true ? (
                            <TableCell>ยังตีอยู่</TableCell>
                          ) : (
                            <TableCell>ยังอยู่ในเกมส์</TableCell>
                          )}
                        </TableRow>
                      ))
                    ) : (
                      <p>ไม่มีข้อมูล</p>
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
                    <TableBody></TableBody>
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
            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              เลือกผู้เล่นทีม 1
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel id="Teamone_playerone_label">
                  เลือกผู้เล่นทีม 1 คนที่ 1
                </InputLabel>
                <Select
                  sx={{ color: "white" }}
                  labelId="Teamone_playerone_label"
                  id="teamone_playerone"
                  label="Age"
                  onChange={(event) =>
                    selectplayertwo_playering(event.target.value)
                  }
                  defaultValue={0}
                >
                  {ListPlaying != false ? (
                    ListPlaying.map((row, index) => (
                      <MenuItem key={index} value={row.Player_id}>
                        {row.Player_name}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem value={0}>สมาชิกลงชื่อไม่ถึง 4 คน</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel id="Teamone_playerone_label">
                  เลือกผู้เล่นทีม 1 คนที่ 2
                </InputLabel>
                <Select
                  sx={{ color: "white" }}
                  labelId="Teamone_playerone_label"
                  id="teamone_playerone"
                  label="Age"
                  onChange={(event) =>
                    selectplayerthree_playering(event.target.value)
                  }
                  defaultValue={0}
                >
                  {ListPlayingtwo ? (
                    ListPlayingtwo.map((row, index) => (
                      <MenuItem key={index} value={row.Player_id}>
                        {row.Player_name}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem value={0}>สมาชิกลงชื่อไม่ถึง 4 คน</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              เลือกผู้เล่นทีม 2
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel id="Teamone_playerone_label">
                  เลือกผู้เล่นทีม 2 คนที่ 1
                </InputLabel>
                <Select
                  sx={{ color: "white" }}
                  labelId="Teamone_playerone_label"
                  id="teamone_playerone"
                  label="Age"
                  onChange={(event) =>
                    selectplayerfour_playing(event.target.value)
                  }
                  defaultValue={0}
                >
                  {ListPlayingthree ? (
                    ListPlayingthree.map((row, index) => (
                      <MenuItem key={index} value={row.Player_id}>
                        {row.Player_name}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem value={0}>สมาชิกลงชื่อไม่ถึง 4 คน</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel id="Teamone_playerone_label">
                  เลือกผู้เล่นทีม 2 คนที่ 2
                </InputLabel>
                <Select
                  sx={{ color: "white" }}
                  labelId="Teamone_playerone_label"
                  id="teamone_playerone"
                  label="Age"
                  onChange={(event) => setSelectplayerfour(event.target.value)}
                  defaultValue={0}
                >
                  {ListPlayingfour ? (
                    ListPlayingfour.map((row, index) => (
                      <MenuItem key={index} value={row.Player_id}>
                        {row.Player_name}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem value={0}>สมาชิกลงชื่อไม่ถึง 4 คน</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Grid>

            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              เลือกสนามตีแบด
            </Grid>
            <Grid item xs={8}>
              <FormControl fullWidth>
                <InputLabel id="Court_label">เลือกสนามที่ตีแบด</InputLabel>
                <Select
                  sx={{ color: "white" }}
                  labelId="Court_label"
                  id="court"
                  label="court"
                  onChange={(event) => setSelectCourt(event.target.value)}
                  defaultValue={0}
                >
                  <MenuItem value={0}>กรุณาเลือกสนามแบด</MenuItem>
                  {Listcourt ? (
                    Listcourt.map((row, index) => (
                      <MenuItem key={index} value={row.Court_Id}>
                        {row.Court_name +
                          " / ราคา : " +
                          row.Court_price +
                          " " +
                          row.Court_Id}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem>ไม่มีข้อมูล</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Grid>

            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
              }}
            >
              เลือกลูกแบด
            </Grid>
            <Grid item xs={8}>
              <FormControl fullWidth>
                <InputLabel id="type_badmintonball" sx={{ color: "white" }}>
                  กรุณาเลือกลูกแบด
                </InputLabel>
                <Select
                  defaultValue={0}
                  sx={{ color: "white" }}
                  onChange={(event) => setSelectShuttercock(event.target.value)}
                >
                  <MenuItem value={0}>กรุณาเลือกลูกแบด</MenuItem>
                  {ListShuttercock.length ? (
                    ListShuttercock.map((row, index) => (
                      <MenuItem key={index} value={row.Type_BB_id}>
                        {row.Type_BB_name + " " + row.Type_BB_price}
                      </MenuItem>
                    ))
                  ) : (
                    <p>ไม่มีข้อมูลลูกแบด</p>
                  )}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <Button
                variant={"contained"}
                onClick={submitdraftmatch}
                disabled={ButtonSubmitmatch}
              >
                จัดแข่ง
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant={"contained"} onClick={handlemodalclose_addmatch}>
                ยกเลิก
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      {/*Modal Addmatch */}
    </>
  );
};
export default Template_Web;

/* พี่มิก
  naming convension การตั้งชื่อ Component Class Api จะทำให้ ลายมือการเขียนโค๊ด สวยขึ้น
  useState และ useEffect แล้วจะลดการใช้ useeffect ได้ขนาดไหน
*/
