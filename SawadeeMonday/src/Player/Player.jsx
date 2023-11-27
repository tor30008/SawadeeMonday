import React, { Component, useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import axios from "axios";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  tableRowClasses,
} from "@mui/material";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import Hidden from "@mui/material/Hidden";
import { styled } from "@mui/material/styles";

import Avatar from "@mui/material/Avatar";

import "../Player/Player.css";
import FetchData from "../Service/Service";
import Addprofile_service from "../Player/Player_service";
import Allplayer_service from "../Service/Allplayer_service";
import { Add, AllInboxSharp } from "@mui/icons-material";
import { red } from "@mui/material/colors";

function Player() {
  const [open, Setopen] = useState(false);

  const [Btn_checkprofile, setBtn_checkprofile] = useState(false);

  const [Avatar_pic, setAvatar_pic] = useState(true);

  const [Name_profile, setName_profile] = useState("");

  const [Phone_profile, setPhone_profile] = useState("");

  const [Type_profile, setType_profile] = useState("");

  const [Path_Profile, setPath_Profile] = useState(null);

  const [Typelist, setTypelist] = useState(null);

  const [Reture_Typeid, setReture_Typeid] = useState(null);

  const [Alllistplayer, setAlllistplayer] = useState(null);

  const handleclose = () => Setopen(false);

  const handleopen = () => {
    Setopen(true);
  };

  useEffect(() => {
    const fetch_type_player = async () => {
      try {
        const result = await FetchData();
        setTypelist(result);
        console.log(Typelist);
      } catch (error) {
        console.log(error);
      }
    }; //typeplayer

    const get_all_player = async () => {
      try {
        const result = await Allplayer_service();
        setAlllistplayer(result);
        console.log(Alllistplayer);
      } catch (error) {
        console.log(error);
      }
    }; //allplayer
    fetch_type_player();
    get_all_player();
  }, []);

  const ChangeTypePlayer = (event) => {
    setType_profile(event.target.value);
  };

  const Resgister_Profile = async () => {
    try {
      const response = await Addprofile_service(
        Path_Profile,
        Name_profile,
        Phone_profile,
        Type_profile
      );
      if (response) {
        handleclose();
      }
    } catch (error) {
      console.log(error);
    }
    useEffect;
  };
  useEffect(() => {
    console.log(Reture_Typeid);
  }, [Reture_Typeid]);

  return (
    <>
      <Grid container xs={12}>
        <Grid xs={11}>
          <h2>รายชื่อสมาชิก</h2>
        </Grid>
        <Grid xs={1}>
          <Button
            variant="outlined"
            color="success"
            item="true"
            onClick={handleopen}
          >
            เพิ่มสมาชิก
          </Button>
        </Grid>
      </Grid>

      {/*function Allplayer*/}
      <AllPlayer list={Alllistplayer}></AllPlayer>
      {/*เป็นตัวคุมการโชว์ Allplayer ทั้งหมด*/}

      {/*Modal*/}
      <Modal
        keepMounted
        item="true"
        open={open}
        onClose={handleclose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Fade in={open} item={true}>
          <Grid container>
            <Box className={"Modal_Register_Player"}>
              <Grid item xs={12}>
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                >
                  รายละเอียดผู้เล่น
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  id="transition-modal-description"
                  sx={{ mt: 2 }}
                  className={"Modal_Avatar"}
                >
                  {/*<Avatar className={"Avatar"}>
                    <AddAPhotoIcon></AddAPhotoIcon>
                    </Avatar>*/}
                  <Grid item xs={12}>
                    <Hidden mdUp={false}>
                      <Button
                        id="Btn_Avatar"
                        className={"Button_Avatar"}
                        component="label"
                        variant="contained"
                        item="true"
                        startIcon={
                          Path_Profile === null ? (
                            <AddAPhotoIcon className={"Avatar"}></AddAPhotoIcon>
                          ) : (
                            <Avatar
                              className={"Profile_Avatar"}
                              src={Path_Profile}
                            ></Avatar>
                          )
                        }
                      >
                        <input
                          type="file"
                          id="Profile_Avatar"
                          name="Profile_Avatar"
                          accept="image/png, image/jpeg"
                          multiline={false}
                          onChange={(event) => {
                            console.log(
                              URL.createObjectURL(event.target.files[0])
                            );
                            setPath_Profile(
                              URL.createObjectURL(event.target.files[0])
                            );
                            // setPath_Profile(event.currentTarget.files[0]);
                            //setAvatar_pic(false);
                            //setBtn_checkprofile(true);
                          }}
                        ></input>
                      </Button>
                    </Hidden>
                    <Hidden mdUp={true}>
                      <Avatar src="#" className={"Button_Avatar"}>
                        <input
                          type="file"
                          id="Profile_Avatar"
                          name="Profile_Avatar"
                          accept="image/png, image/jpeg"
                          onChange={(event) => {
                            console.log(event.target.value);
                            //setAvatar_pic(false);
                            //setBtn_checkprofile(true);
                          }}
                        ></input>
                      </Avatar>
                    </Hidden>
                  </Grid>
                </Typography>

                <Grid item xs={12} className={"Grid_modal_text"}>
                  <Box component={"form"} noValidate autoComplete="off">
                    <TextField
                      id="outlined-basic"
                      label="ขื่อเว้ย"
                      variant="outlined"
                      fullWidth
                      className={"Text_field "}
                      color="primary"
                      name="Name"
                      defaultValue={""}
                      multiline={false}
                      item="true"
                      InputLabelProps={{
                        style: { color: "red" },
                      }}
                      onChange={(event) => {
                        setName_profile(event.target.value);
                      }}
                    ></TextField>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box
                    component={"form"}
                    className={"Grid_modal_text"}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="outlined-basic"
                      label="เบอร์โทรเว้ย"
                      variant="outlined"
                      defaultValue={""}
                      multiline={false}
                      value={Phone_profile}
                      onChange={(event) => {
                        setPhone_profile(event.target.value);
                      }}
                      fullWidth
                    ></TextField>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth className={"Grid_modal_select"}>
                    <InputLabel id="demo-simple-select-label">
                      ประเภทมือ
                    </InputLabel>
                    {Typelist ? (
                      <Select
                        className={"Grid_modal_select"}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={0}
                        label="ประเภทมือ"
                        onChange={ChangeTypePlayer}
                        defaultValue={0}
                      >
                        <MenuItem key={0} value={0}>
                          กรุณาเลือกประเภทฝีมือ
                        </MenuItem>
                        {Typelist.map((data) => (
                          <MenuItem key={data.Type_id} value={data.Type_id}>
                            {data.Type_name}
                          </MenuItem>
                        ))}
                      </Select>
                    ) : (
                      <p>loading</p>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
              {/** Grid ใหญ่ */}
              <Grid container spacing={2}>
                <Grid xs={6}>
                  {Name_profile && Phone_profile && Type_profile ? (
                    <Button
                      variant="contained"
                      color="primary"
                      item="true"
                      onClick={Resgister_Profile}
                    >
                      Success
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      color="secondary"
                      item={true}
                      disabled
                    >
                      Success
                    </Button>
                  )}
                </Grid>
                <Grid xs={6}>
                  <Button
                    variant="contained"
                    color="warning"
                    item="true"
                    onClick={(event) => {
                      handleclose();
                    }}
                  >
                    Cancel
                  </Button>
                </Grid>
              </Grid>
              {/**Grid button */}
            </Box>
          </Grid>
        </Fade>
      </Modal>
    </>
  );
}

const AllPlayer = ({ list = null }) => {
  return (
    <>
      {list ? (
        <Grid container xs={12} className="Table-Player">
          <TableContainer component={Paper}>
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
                {list.map((row)=>(
                  <TableRow key={row.Player_id}>
                    <TableCell><span className={"Tablecell-Avatar"}><Avatar alt="Remy Sharp" src={row.Player_photo} /><p>{row.Player_photo}</p></span></TableCell>
                    <TableCell>{row.Type_id}</TableCell>
                    <TableCell>{row.Player_tel}</TableCell>
                    <TableCell><p>แก้ไข</p></TableCell>
                  </TableRow>
      ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      ) : (
        <p>ไม่มีข้อมูล</p>
      )}
    </>
  );
};
export default Player;
