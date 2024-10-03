import react, { useEffect, useState, useMemo } from "react";
import Table from "@mui/material/Table";
import { FormControl, InputLabel, TableHead } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { getshuttercockMatchId,addmoreshuttercockMatchId, deletemoreshuttercockMatchId } from "./ModalMoreshuttercock_service";
import "./ModalMoreShuttercock.css";
import { DateRange, Maximize } from "@mui/icons-material";
import { GetShuttercock_service } from "../shuttercock/Shuttercock_service";

const ModalMoreshuttercock = ({ status, onDatareturn }) => {
  const [
    Openmodal_Addshuttercockformatch,
    setOpenmodal_Addshuttercockformatch,
  ] = useState(false);
  const [matchId, setmatchId] = useState();
  const [selectShuttercock,setselectShuttercock] = useState(0);
  const [listShuttercock, setlistShuttercock] = useState(Array);
  const [listbrandShuttercock,setlistbrandShuttercock] = useState(Array);
  const [isDisabled_btnaddShuttercock,setisDisabled_btnaddShuttercock] = useState(true);
  const [isAddshuttercock,setisAddShuttercock] = useState(false);//ไว้เช็คการทำงาน มีการเพิ่มลูกแบดไหม

  useEffect(() => {
    setOpenmodal_Addshuttercockformatch(status.status);
    setmatchId(status.id);
    //console.log("Modalshutter test");
    //console.log(Openmodal_Addshuttercockformatch);
    allshuttercockMatch(status.id);
    allserviceData();
    console.log(listbrandShuttercock)
  }, [status]);

  useEffect(() => {
    console.log(selectShuttercock)
    if(selectShuttercock === 0){
        setisDisabled_btnaddShuttercock(true);
    }else{
        setisDisabled_btnaddShuttercock(false)
    }   
    console.log(isDisabled_btnaddShuttercock)
  },[selectShuttercock])

  useEffect(() => {
    console.log(isAddshuttercock);
    const testawait = async() => {
      if(isAddshuttercock){
        await allshuttercockMatch(status.id);
        setisAddShuttercock(false);
      }
    }
    testawait()
  },[isAddshuttercock])

  const handle_Addshuttercockformatch_close = () => {
    setOpenmodal_Addshuttercockformatch(false);
    onDatareturn(false);
  }; // set Button modal modaladdshuttercock Close
  const handle_Addshuttercockformatch_open = () => {
    setOpenmodal_Addshuttercockformatch(true);
  }; // set Button modal modaladdshuttercock Open

  async function allserviceData(){
    let data = await GetShuttercock_service();
    setlistbrandShuttercock(data); // getBrandshuttercock in DB 
  }

  async function allshuttercockMatch(id) {
    //console.log(id);
    try {
      const result = await getshuttercockMatchId(id);
      setlistShuttercock(result);
      setisAddShuttercock(result);
    } catch (err) {
      console.log(err);
    }
  }

  function TableModal() {
    return (
      <>
        <Grid item xs={12}>
          <Table>
            <TableHead>
              <TableCell>ลำดับ</TableCell>
              <TableCell>ชื่อลูกแบด</TableCell>
              <TableCell>แก้ไข</TableCell>
            </TableHead>
            <TableBody>
                <TablelistShuttercock></TablelistShuttercock>
            </TableBody>
            <Grid item xs = {8}>
                <p>**** ต้องมีลูกแบดมากกว่า 1 ลูกลบได้</p>
            </Grid>
          </Table>
        </Grid>
      </>
    );
  }

  function ButtonModal() {
    return (
      <>
        <Grid item xs={12}>
          <Button
            sx={{width:'80%',height:'100%'}}
            variant={"contained"}
            onClick={handle_Addshuttercockformatch_close}
          >
            ปิด
          </Button>
        </Grid>
      </>
    );
  }

  function HeadModal() {
    return (
      <>
        <Grid item xs={12}>
          <h2>Match up</h2>
        </Grid>
      </>
    );
  }

  const TablelistShuttercock = () => {
    console.log(listShuttercock);
    return useMemo(() => {
        if(listShuttercock.length > 1 ){
            return listShuttercock.map((data,index) => (
            <TableRow key = {++index}>
                <TableCell>{++index}</TableCell>
                <TableCell>{data.Type_BB_name} - {data.Type_BB_speed}</TableCell>
                <TableCell><Button variant="contained" color ="error" onClick={() => (eventdeleteShuttercock(data.Match_id,data.MTB_id,data.MTB_TIME))}>ลบ</Button></TableCell>
            </TableRow>
            ))
        }else if (listShuttercock.length === 1){
            return (
                <TableRow key = {0}>
                    <TableCell>1</TableCell>
                    <TableCell>{listShuttercock[0].Type_BB_name} - {listShuttercock[0].Type_BB_speed}</TableCell>
                    <TableCell>ลบไม่ได้</TableCell>
                </TableRow>
            )
        }else{
            return (
                <TableRow key = {0}>
                    <TableCell>ไม่มีข้อมูล</TableCell>
                </TableRow>
            )
        }
    },[listShuttercock])
  }

  function DivmoreShuttercock(){

    return (
        <>
            <Grid item xs={6}>
                <Grid item>
                    <FormControl variant="standard" sx = {{ m:1,width : `100%`,textAlign:'center',color:'white'}}>
                        <InputLabel id = "label-select-moreshuttercock">Select ShutterCock</InputLabel>
                        <Select sx={{color:'white'}}  value = {selectShuttercock} id = "select-moreshuttercock" name = {selectShuttercock} labelId="label-select-moreshuttercock" onChange = {(event) => setselectShuttercock(event.target.value)} label="Select more Shuttercock">
                            <MenuItem value = {0}>กรุณาเลือกลูกแบด</MenuItem>
                            {listbrandShuttercock ? 
                                listbrandShuttercock.map((data) => (
                                    <MenuItem value = {data.Type_BB_id}>{data.Type_BB_name} - {data.Type_BB_speed}</MenuItem>
                                )) 
                            : 
                                (<MenuItem>ไม่มีข้อมูล</MenuItem>) 
                            }
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                    <Button sx={{width:`100%`,height:'80%'}} variant="contained" disabled={isDisabled_btnaddShuttercock} onClick={eventaddmoreShuttercock}>เพิ่ม</Button>
            </Grid>
        </>
    )
  }

  const eventaddmoreShuttercock = async() => {

    const result = await addmoreshuttercockMatchId(status.id,selectShuttercock);
    if(result){
        allshuttercockMatch();
    }else{
        alert("ไม่สามารถเพิ่มลูกแบดได้");
    }
  }

  const eventdeleteShuttercock = async(Match_id,MTB_id,MTB_TIME) => {
    try{
      const res = await deletemoreshuttercockMatchId(Match_id,MTB_id,MTB_TIME);
      const result = await res;
      if(result.status == 200 && result.statusText =="OK"){
        setisAddShuttercock(true);
      }
    }catch(err){  
      console.log(err);
    }
  }

  return (
    <>
      <Modal open={true} onClose={handle_Addshuttercockformatch_close}>
        <Box className={"Modaladdshuttercock"}>
          <Grid container spacing={2}>
            <HeadModal></HeadModal>
            <TableModal></TableModal>
            <DivmoreShuttercock></DivmoreShuttercock>
            <ButtonModal></ButtonModal>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

export default ModalMoreshuttercock;
