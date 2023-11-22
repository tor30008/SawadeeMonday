import React, { Component, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TextField,
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

function Player() {
  const [open, Setopen] = useState(false);

  const [Btn_checkprofile, setBtn_checkprofile] = useState(false);

  const [Avatar_pic, setAvatar_pic] = useState(true);

  const [Path_Profile,setPath_Profile] = useState(null);

  const handleclose = () => Setopen(false);

  const handleopen = () => Setopen(true);

  return (
    <>
      <Grid container xs={12}>
        <Grid xs={11}>
          <h2>รายชื่อสมาชิก</h2>
        </Grid>
        <Grid xs={1}>
          <Button variant="outlined" color="success" onClick={handleopen}>
            เพิ่มสมาชิก
          </Button>
        </Grid>
      </Grid>
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
              <TableRow>
                <TableCell>ตี้</TableCell>
                <TableCell>P</TableCell>
                <TableCell>091-223-1234</TableCell>
                <TableCell>
                  <EditIcon fontSize="small"></EditIcon>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>โตน</TableCell>
                <TableCell>P</TableCell>
                <TableCell>091-223-1234</TableCell>
                <TableCell>
                  <EditIcon fontSize="small"></EditIcon>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>วาย</TableCell>
                <TableCell>กาก</TableCell>
                <TableCell>091-223-1234</TableCell>
                <TableCell>
                  <EditIcon fontSize="small"></EditIcon>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>ตูน</TableCell>
                <TableCell>กาก</TableCell>
                <TableCell>091-223-1234</TableCell>
                <TableCell>
                  <EditIcon fontSize="small"></EditIcon>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

      {/*Modal*/}
      <Modal
        keepMounted
        open={open}
        onClose={handleclose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Fade in={open}>
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
                        startIcon={Path_Profile === null ? <AddAPhotoIcon className={"Avatar"}></AddAPhotoIcon> : <Avatar className={"Profile_Avatar"} src = {Path_Profile}></Avatar>}
                      >
                        <input
                          type="file"
                          id="Profile_Avatar"
                          name="Profile_Avatar"
                          accept="image/png, image/jpeg"
                          onChange={(event) => {
                            console.log(URL.createObjectURL(event.target.files[0]));
                            setPath_Profile(URL.createObjectURL(event.target.files[0]));
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
                      multiline={"color:white"}
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
                      fullWidth
                    ></TextField>
                  </Box>
                </Grid>
              </Grid>
              {/** Grid ใหญ่ */}
              <Grid container spacing={2}>
                <Grid xs={6}>
                  <Button variant="contained" color="success">
                    Success
                  </Button>
                </Grid>
                <Grid xs={6}>
                  <Button variant="contained" color="warning" onClick={(event)=> {
                      handleclose();
                  }}>
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

export default Player;
