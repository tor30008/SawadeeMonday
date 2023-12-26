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
import {Addprofile_service , Deleteprofile_service, Editprofile_service, Getprofile_service} from "../Player/Player_service";
import Allplayer_service from "../Service/Allplayer_service";
import { Add, AllInboxSharp, Update } from "@mui/icons-material";
import { red } from "@mui/material/colors";
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import Switch from '@mui/material/Switch';

function Player() {
  const [open, Setopen] = useState(false);

  const [Avatar_pic, setAvatar_pic] = useState(null);

  const [Name_profile, setName_profile] = useState("");

  const [Phone_profile, setPhone_profile] = useState("");

  const [Type_profile, setType_profile] = useState(0);

  const [Path_Profile, setPath_Profile] = useState(null);

  const [Typelist, setTypelist] = useState(null);

  const [Reture_Typeid, setReture_Typeid] = useState(null);

  const [Alllistplayer, setAlllistplayer] = useState(null);

  const handleclose = () => {
    setName_profile("");
    setPhone_profile("");
    setPath_Profile(null);
    setType_profile(0);
    Setopen(false);
  };// กำหนดเวลาปิดปุ่ม Modal Addplayer

  const handleopen = () => {
    Setopen(true);
  }; // กำหนดเวลาเปิดปุ่ม Modal Addplayer

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
  }, []); //เอาไว้เรียกค่า TypePlayer and Allplayer

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
      <AllPlayer list={Alllistplayer} Typelist={Typelist}></AllPlayer>
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
                  <Grid item xs={12}>
                    <Hidden mdUp={false}>
                      <Button
                        id="Btn_Avatar"
                        className={"Button_Avatar"}
                        component="label"
                        variant="contained"
                        item="true"
                        startIcon={
                          Avatar_pic === null ? (
                            <AddAPhotoIcon className={"Avatar"}></AddAPhotoIcon>
                          ) : (
                            <Avatar
                              className={"Profile_Avatar"}
                              src={Avatar_pic}
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
                              event.target.files[0]
                            );
                            setAvatar_pic(URL.createObjectURL(event.target.files[0]));
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
                      defaultValue=""
                      multiline={false}
                      item="true"
                      value={Name_profile}
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
                      defaultValue=""
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
                        label="ประเภทมือ"
                        value={Type_profile}
                        onChange={ChangeTypePlayer}
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

const AllPlayer = ({ list = null ,Typelist = null}) => {

  const [Edit_btn,setEditbtn] = useState(false);
  const [EditName,setEditname] = useState("");
  const [Editphone,setEditphone] = useState("");
  const [EditPath,setEditpath] = useState(null);
  const [EditType,setEditType] = useState(0);
  const [EditAvatar,setEditAvatar] = useState(null);
  const [EditPlayer_id,setEditPlayer_id] = useState(0);

  const handleopenedit = (Player_id = null) =>{
    Get_profile(Player_id);
    setEditbtn(true);
  }

  const handlecloseedit = () =>{
    setEditbtn(false);
  }

  const Editprofile = async() => {
    try{
      const res = await Editprofile_service(EditPath,EditName,Editphone,EditType,EditPlayer_id);
      const result = await res;
      if(result){
        setEditbtn(false);
      }
    }catch(error){
      console.log(error);
    }
  }

  const Get_profile = async({Player_id=null}) =>{
    try{
      const res = await Getprofile_service(Player_id);
      const result = await res;
      setEditname(result[0].Player_name);
      setEditpath(result[0].Player_photo);
      setEditAvatar(result[0].Player_photo);
      setEditphone(result[0].Player_tel)
      setEditType(result[0].Type_id);
      setEditPlayer_id(Player_id);
    }catch(error){
      console.error(error);
    }
  }

  const Delete_Btn = (Player_id,Player_status,Player_name) =>{

    let Update_status;
    let title;
    let buttontext;

    if(Player_status == 1){
      Update_status = 0 ;
      title = "คุณต้องการถอนผู้เล่น "+`'`+Player_name+` ' ออกจากรายชื่อตีประจำ`;
      buttontext = "ถอน";
    }
    else{
      Update_status = 1;
      title = "คุณต้องการเพิ่มผู้เล่น "+`'`+Player_name+` ' ในรายชื่อตีประจำ`;
      buttontext = "เพิ่ม";
    }

    //DeletePlayer(Player_id);
    Swal.fire({
      title:title,
      showDenyButton:true,
      confirmButtonText:buttontext,
      denyButtonText:"ยกเลิก"
    }).then((result) =>{
      if(result.isConfirmed){
        DeletePlayer(Player_id,Update_status);
        Swal.fire("Delete Success","","success");
      }
    })
  };

  const DeletePlayer = async(Player_id,Player_status) =>{
      try{
        const res = await Deleteprofile_service(Player_id,Player_status);
        const data = await res;
        console.log(data);
      }catch(error){
        console.log("Error : Delete Player");
      }
  }
  return (
    <>
      {list ? (
        <Grid container xs={12} className="Table-Player">
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ลำดับ</TableCell>
                  <TableCell>รายชื่อ</TableCell>
                  <TableCell>ฝีมือ</TableCell>
                  <TableCell>เบอร์โทร</TableCell>
                  <TableCell>แก้ไข</TableCell>
                  <TableCell>คนตีประจำ</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {list.map((row,index)=>(
                  <TableRow key={row.Player_id}>
                    <TableCell>{++index}</TableCell>
                    <TableCell><span className={"Tablecell"}><Avatar className={"Tablecell_avatar"} alt="Remy Sharp" src={row.Player_photo} /><p>{row.Player_name}</p></span></TableCell>
                    <TableCell>{row.Type_name} (Lv : {row.Type_id})</TableCell>
                    <TableCell>{row.Player_tel}</TableCell>
                    <TableCell><span className={"Tablecell"}><EditIcon onClick={() => handleopenedit({Player_id:row.Player_id})} color={"primary"} ></EditIcon></span></TableCell>
                    <TableCell>
                      <Switch checked={row.Player_status} onChange={() => {Delete_Btn(row.Player_id,row.Player_status,row.Player_name)}}></Switch>
                    </TableCell>
                  </TableRow>
      ))}
              </TableBody>
            </Table>  
          </TableContainer>
        </Grid>
      ) : (
        <p>ไม่มีข้อมูล</p>
      )}

      <Modal
        keepMounted
        item="true"
        open={Edit_btn}
        onClose={handlecloseedit}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Fade in={Edit_btn} item={true}>
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
                  <Grid item xs={12}>
                    <Hidden mdUp={false}>
                      <Button
                        id="Btn_Avatar"
                        className={"Button_Avatar"}
                        component="label"
                        variant="contained"
                        item="true"
                        startIcon={
                          EditAvatar === null ? (
                            <AddAPhotoIcon className={"Avatar"}></AddAPhotoIcon>
                          ) : (
                            <Avatar
                              className={"Profile_Avatar"}
                              src={EditAvatar}
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
                            setEditpath(
                              event.target.files[0]
                            );
                            setEditAvatar(URL.createObjectURL(event.target.files[0]));
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
                      label="ชื่อเว้ย"
                      variant="outlined"
                      fullWidth
                      className={"Text_field "}
                      color="primary"
                      defaultValue=""
                      multiline={false}
                      item="true"
                      value={EditName}
                      InputLabelProps={{
                        style: { color: "red" },
                      }}
                      onChange={(event) => {
                        setEditname(event.target.value);
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
                      defaultValue=""
                      multiline={false}
                      value={Editphone}
                      onChange={(event) => {
                        setEditphone(event.target.value);
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
                        label="ประเภทมือ"
                        value={EditType}
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
                    )
                    }
                  </FormControl>
                </Grid>
              </Grid>
              {/** Grid ใหญ่ */}
              <Grid container spacing={2}>
                <Grid xs={6}>
                  {EditName && Editphone ? (
                    <Button
                      variant="contained"
                      color="primary"
                      item="true"
                      onClick={(event) =>{Editprofile()}}
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
                      handlecloseedit();
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
};

export default Player;
