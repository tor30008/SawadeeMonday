import React,{useState} from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import { TextField, Typography } from "@mui/material";
import "./Shuttercock.css";

const Shuttercock = () => {
  const [Modalshuttercock,setModalshuttercock] = useState(false);

  const handle_modalshutter_open = () => {
    setModalshuttercock(true);
  }

  const handle_modalshutter_close = () => {
    setModalshuttercock(false);
  }

  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={11} sx={{color:"white"}}>
          <h2>ลูกแบด</h2>
        </Grid>
        <Grid item xs={1}>
          <Button
            color="success"
            item="true"
            variant="outlined"
            onClick={handle_modalshutter_open}
            sx={{color:"white"}}
          >
            เพิ่มลูกแบด
          </Button>
        </Grid>
        <Grid item xs={12}>

        </Grid>
      </Grid>
      <Modal open={Modalshuttercock} onClose={handle_modalshutter_close}>
        <Box className={"Modal_Add_Shuttercock"}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <h2>เพิ่มลูกแบดมินตัน</h2>
            </Grid>
            <Grid item xs={3} className={"Modal_Add_Label_center"}>
              ชื่อลูกแบด
            </Grid>
            <Grid item xs={9}>
              <TextField label="ชื่อยี่ห้อลูกแบด" variant="outlined"></TextField>
            </Grid>
            <Grid item xs={3} className={"Modal_Add_Label_center"}>
              Speed ลูกแบด
            </Grid>
            <Grid item xs={9}>
              <TextField label="Speed ลูกแบดเท่าไหร่"></TextField>
            </Grid>
            <Grid item xs={3} className={"Modal_Add_Label_center"}>
              ราคาต่อลูก
            </Grid>
            <Grid item xs={9}>
              <TextField label="ราคาต่อลูกแบด"></TextField>
            </Grid>
            <Grid item xs={6}>

            </Grid>
            <Grid item xs={6}>
              
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

export default Shuttercock;
