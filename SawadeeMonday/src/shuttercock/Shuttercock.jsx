import React,{useState,useEffect} from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import {AddShuttercock_service,GetShuttercock_service,EditShuttercock_Service} from './Shuttercock_service';
import "./Shuttercock.css";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Paper
} from "@mui/material";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import io from "socket.io-client";
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import { useLocation } from "react-router-dom";

const socket = io(import.meta.env.VITE_HTTP_SOCKET, {transports:["websocket"]});

const Shuttercock = () => {
  const [Modalshuttercock,setModalshuttercock] = useState(false);
  const [Idshuttercock,setIdshuttercock] = useState();
  const [Nameshuttercock , setNameshuttercock] = useState();
  const [Priceshuttercock,setPriceshuttercock] = useState();
  const [Speedshuttercock,setSpeedshuttercock] = useState();
  const [Submitmodal,setSubmitmodal] = useState(true);
  const [Listshuttercock,setListshuttercock] = useState(null);
  const [CRUD_TYPE,setCRUD_TYPE] = useState("C");
  const location = useLocation();

  useEffect(()=>{
    GetAllshuttercock();
    console.log("test shuttercock");
  },[])

  useEffect(() => {
    if(Nameshuttercock  && Priceshuttercock && Speedshuttercock){
      setSubmitmodal(false);
    }
    else{
      setSubmitmodal(true);
    }
  },[Nameshuttercock,Priceshuttercock,Speedshuttercock,CRUD_TYPE]);// ปุ่ม submmit modal shuttercock

  useEffect(() => {
    const test = async() => {
      try{
        const res = await GetShuttercock_service();
        console.log(res);
        //setListshuttercock(res);
        //console.log(res);
      }catch(err){
        console.log(err);
      }
    }
    test();
  },[location]);

  const handle_modalshutter_open = () => {
    ClearData_shuttercock();
    setModalshuttercock(true);
  }

  const handle_modalshutter_close = () => {
    setModalshuttercock(false);
  }

  const submitAddShuttercock = async() => {
    try{  
      const res = await AddShuttercock_service(Nameshuttercock,Priceshuttercock,Speedshuttercock);
      if(res){
        ClearData_shuttercock();
      }
    }catch(err){
      console.log(err);
    }
  }

  const ClearData_shuttercock = () => {
    setModalshuttercock(false);
    setNameshuttercock();
    setPriceshuttercock();
    setSpeedshuttercock();
    setCRUD_TYPE("C");
  }

  const GetAllshuttercock = async() => {
    try{
      const res = await GetShuttercock_service();
      setListshuttercock(res);
      //console.log(res);
    }catch(err){
      console.log(err);
    }
  };

  const Change_status_shuttercock = (type_bb_id,type_bb_status) => {
    const data = {
      Type_BB_id : type_bb_id,
      Type_BB_status : type_bb_status
    }
    socket.emit("Changestatus_shuttercock_to_server",data);
    socket.on("RT_getall_type_bb",(result) => {
      setListshuttercock(result);
    })
  }

   const Delete_shuttercock = (type_bb_id,type_bb_name) => {
      Swal.fire({
      title:"คุณต้องการลบลูกแบด"+" '"+type_bb_name+"' หรือไหม",
      showDenyButton:true,
      confirmButtonText:"ลบ",
      denyButtonText:"ยกเลิก"
      }).then((result) => {
        if(result.isConfirmed){
          let data = {
            Type_BB_id : type_bb_id
          }
          socket.emit("Delete_Shuttercock_From_Client",data);
          socket.on("RT_getall_type_bb",(result) => {
            setListshuttercock(result);
            GetAllshuttercock();
          })
        }
      })
    }

    const Edit_Modal_shuttercock = (id,name,speed,price) => {
      setCRUD_TYPE("U");
      setModalshuttercock(true);
      setIdshuttercock(id);
      setNameshuttercock(name);
      setSpeedshuttercock(speed);
      setPriceshuttercock(price);
    }

    const submitEditshuttercock = async() => { 
      try{
        let data = {
          Type_BB_id : Idshuttercock ,
          Type_BB_name : Nameshuttercock ,
          Type_BB_speed : Speedshuttercock,
          Type_BB_price : Priceshuttercock
        }
        const res = await EditShuttercock_Service(data);
        const result = res;
        if(result == true){
          ClearData_shuttercock();
        }
       // const res = await ChangeStatus_Shuttercock_service();
       // console.log(res);
      }catch(err){
        console.log(err);
      }
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
          <Table container component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ลำดับ</TableCell>
                  <TableCell>ยี่ห้อ</TableCell>
                  <TableCell>Speed ลูกแบด</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Status(เปิด-ปิด การใช้งานลูกแบด)</TableCell>
                  <TableCell>ตั้งค่า</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Listshuttercock || Listshuttercock == [] ? 
                (
                  Listshuttercock.map((row,index) => (
                    <TableRow key = {index} >
                      <TableCell>{index+1}</TableCell>
                      <TableCell  onClick = {() => (
                        Edit_Modal_shuttercock(row.Type_BB_id,row.Type_BB_name,row.Type_BB_speed,row.Type_BB_price)
                        )}>{row.Type_BB_name}</TableCell>
                      <TableCell>{row.Type_BB_speed}</TableCell>
                      <TableCell>{row.Type_BB_price}</TableCell>
                      {row.Type_BB_status == true ? 
                        (
                          <TableCell>
                            <Switch checked={true} onChange={() => (Change_status_shuttercock(row.Type_BB_id,false))}></Switch>
                          </TableCell>  
                        ) 
                        : 
                        (
                          <TableCell>
                            <Switch checked={false} onChange={() => (Change_status_shuttercock(row.Type_BB_id,true))}></Switch>
                          </TableCell>
                        )
                      }
                      <TableCell><Button variant="contained" color="error" onClick={() =>(Delete_shuttercock(row.Type_BB_id,row.Type_BB_name))}>ลบ</Button></TableCell>
                    </TableRow>
                  ))
                ) : 
                (
                  <TableRow>
                    <TableCell colSpan={6} sx={{textAlign:"center"}}><p>ไม่มีข้อมูล</p></TableCell>
                  </TableRow>
                )}
                
              </TableBody>
            </Table>
          </Table>
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
              <TextField inputProps = {{style:{color:"white"}}} label="ชื่อยี่ห้อลูกแบด" variant="outlined" fullWidth={true} onChange={(event)=>(setNameshuttercock(event.target.value))} value = {Nameshuttercock}></TextField>
            </Grid>
            <Grid item xs={3} className={"Modal_Add_Label_center"}>
              Speed ลูกแบด
            </Grid>
            <Grid item xs={9}>
              <TextField type = "number" InputProps = {{ inputProps:{min:0,max:99},style:{color:"white"}}} label="Speed ลูกแบดเท่าไหร่" fullWidth={true} onChange={(event) => (setPriceshuttercock(event.target.value))} value = {Priceshuttercock}></TextField>
            </Grid>
            <Grid item xs={3} className={"Modal_Add_Label_center"}>
              ราคาต่อลูก
            </Grid>
            <Grid item xs={9}>
              <TextField type = "number" InputProps = {{ inputProps:{min:0,max:99},style:{color:"white"}}}  label="ราคา / ลูก" fullWidth={true} onChange={(event) => (setSpeedshuttercock(event.target.value))} value = {Speedshuttercock}></TextField>
            </Grid>
            <Grid item xs={6}>
              {CRUD_TYPE == "C" ? 
                (<Button variant="contained" disabled={Submitmodal} onClick={(submitAddShuttercock)}>ตกลง</Button>) 
                  : 
                (<Button variant="contained"  disabled = {Submitmodal} onClick={submitEditshuttercock} >อัพเดท</Button>)
              }
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" onClick={handle_modalshutter_close}>ยกเลิก</Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

export default Shuttercock;
