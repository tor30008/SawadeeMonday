import React, { useState, useEffect } from "react";

import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Input from "@mui/material/Input";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { CardActionArea, CardActions, TextField } from "@mui/material";
import "../Court/Court.css";
import { Addcourt_service, Allcourt_service ,Editcourt_service, Editcourtstatus_service } from "../Service/Court_service";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from "@mui/icons-material/Edit";
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

const Court = () => {
  const [Namecourt, setNamecourt] = useState(null);
  const [Pricecourt, setPricecourt] = useState(null);

  const [Btn_modal, setBtn_modal] = useState(false);
  const [Btn_addcourt, setBtn_addcourt] = useState(false);
  const [Listcourt, setListcourt] = useState([]);

  useEffect(() => {
    const res_listcourt = async () => {
      try {
        const result = await Allcourt_service();
        setListcourt(result);
      } catch (error) {
        console.log(error);
      }
    };
    res_listcourt();
  }, []);

  const closemodaladd = () => {
    setBtn_addcourt(false);
  };
  const openmodaladd = () => {
    setBtn_addcourt(true);
  };
  const submitcourt = async () => {
    try {
      const res = await Addcourt_service(Namecourt, Pricecourt);
      const result = await res;
      console.log(result);
      if (result) {
        closemodaladd();
      }
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={11}>
          <h2>สนามแบดมินตัน</h2>
        </Grid>
        <Grid item xs={1}>
          <Button
            color="success"
            item="true"
            variant="outlined"
            onClick={openmodaladd}
          >
            เพิ่มสนามแบดมินตัน
          </Button>
        </Grid>
      </Grid>
      {/** Grid ใหญ่*/}
      <Allcourt list={Listcourt}></Allcourt>

      <Modal
        open={Btn_addcourt}
        onClose={closemodaladd}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ mt: 5 }}
      >
        <Box className={"Modaladd"}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            เพิ่มสนามแบดมินตัน
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  className={"Gridmodal_add"}
                  id="NameCourd"
                  label="ชื่อสนาม"
                  variant="outlined"
                  onChange={(event) => {
                    setNamecourt(event.target.value);
                    console.log(event.target.value);
                  }}
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={"Gridmodal_add"}
                  id="PriceCourd"
                  label="ราคาต่อชั่วโมง"
                  variant="outlined"
                  onChange={(event) => {
                    setPricecourt(event.target.value);
                  }}
                ></TextField>
              </Grid>
            </Grid>
          </Typography>
          <Typography>
            <Grid item xs={12} className={"Gridmodal_add"}>
              {Namecourt && Pricecourt ? (
                <Button
                  variant="Outlined"
                  onClick={() => {
                    submitcourt();
                  }}
                >
                  ตกลง
                </Button>
              ) : (
                <Button variant="Outlined" disabled>
                  ตกลง
                </Button>
              )}
              <Button variant="Outlined" onClick={closemodaladd}>
                ยกเลิก
              </Button>
            </Grid>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

const Allcourt = ({ list = null }) => {
  //console.log(list);

  const [Editcourtname,setEditcourtname] = useState(null);
  const [Editcourtprice,setEditcourtprice] = useState(null);
  const [Editcourtid,setEditcourtid] = useState(null);
  const [Editmodal,setEditmodal] = useState(false);

  const closemodaledit = () => {
    setEditmodal(false);
  }
  const openmodaledit = () =>{
    setEditmodal(true);
  }

  const Editcourt = (Court_id=null,Court_name=null,Court_price=null) => { 
    console.log(Court_id);
    setEditcourtid(Court_id);
    setEditcourtname(Court_name);
    setEditcourtprice(Court_price);
    openmodaledit();
  }

  const Editsubmit = async(Court_id=null,Court_name=null,Court_price=null) => {
    try{
      const res = await Editcourt_service(Court_id,Court_name,Court_price);
      const result = res;
      if(result){
        Court();
      }
    }catch(error){
      console.log(error);
    }
  }
  const Editcourt_status = async(id=null,status=null,name=null)=>{
    let title;
    let statusnow;
    let buttontext;
    if(status == 1){
      title = "คุณต้องการลบคอร์ดแบดหมายเลข : " + name;
      statusnow = 0;
      buttontext = "DELETE";
    }
    else{
      title = "คุณต้องการเพิ่มคอร์ดแบดหมายเลข : " + name;
      statusnow = 1;
      buttontext = "ADD";
    }
    Swal.fire({
      title:title,
      showDenyButton:true,
      confirmButtonText:buttontext,
      denyButtonText:"Cancel"
    }).then((result) => {
      if(result.isConfirmed){
        const result = Editcourtstatus_service(id,statusnow); 
        if(result){
          Swal.fire("Delete Success","","success");
        }
      }
    });
  }
  return (
    <>
      <TableContainer>
        <Table aria-label="Courd Badminton">
          <TableHead>
            <TableRow>
              <TableCell>ลำดับ</TableCell>
              <TableCell>ชื่อสนาม</TableCell>
              <TableCell>ราคา/ชั่วโมง</TableCell>
              <TableCell>แก้ไข/ลบ</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list ? (
              list.map((row,index) => (
                <TableRow>
                  <TableCell>{++index}</TableCell>
                  <TableCell>{row.Court_name}</TableCell>
                  <TableCell>{row.Court_price}</TableCell>
                  <TableCell><EditIcon onClick={(event) =>{Editcourt(row.Court_Id,row.Court_name,row.Court_price)}}  color={"primary"}></EditIcon><DeleteIcon color={"error"} onClick={() => {Editcourt_status(row.Court_Id,row.Court_status,row.Court_name)}}></DeleteIcon></TableCell>
                </TableRow>
              ))
            ):(<p>ไม่มีข้อมูล</p>)}
            
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={Editmodal}
        onClose={closemodaledit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ mt: 5 }}
      >
        <Box className={"Modaladd"}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            เพิ่มสนามแบดมินตัน
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  className={"Gridmodal_add"}
                  id="NameCourd"
                  label="ชื่อสนาม"
                  variant="outlined"
                  value={Editcourtname}
                  onChange={(event)=>{setEditcourtname(event.target.value)}}
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={"Gridmodal_add"}
                  id="PriceCourd"
                  label="ราคาต่อชั่วโมง"
                  value={Editcourtprice}
                  variant="outlined"    
                  onChange={(event)=>{setEditcourtprice(event.target.value)}}
                ></TextField>
              </Grid>
            </Grid>
          </Typography>
          <Typography>
            <Grid item xs={12} className={"Gridmodal_add"}>
              {Editcourtname && Editcourtprice ? (
                <Button
                  variant="Outlined"
                  onClick={(event) => {
                    Editsubmit(Editcourtid,Editcourtname,Editcourtprice)
                  }}
                >
                  ตกลง
                </Button>
              ) : (
                <Button variant="Outlined" disabled>
                  ตกลง
                </Button>
              )}
              <Button variant="Outlined" onClick={closemodaledit}>
                ยกเลิก
              </Button>
            </Grid>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default Court;
