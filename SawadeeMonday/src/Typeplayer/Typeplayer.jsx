import { Button, List, listClasses } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableCell,
    TableRow,
    TextField,
  } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import Paper from "@mui/material/Paper";

function Get_typeplayer() {
  /*const [list,setlist] = useState(false);
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    //body: JSON.stringify({ title: 'React POST Request Example' })
  }; // SET BODY

  useEffect(() => {
    const fetdata = async() => {
        const res = fetch("http://127.0.0.1:7777/Type_player", { requestOptions })
        .then((res) => res.json())
        .then((data) => setlist(data))
    }
    fetdata();
  },[])

  return list;*/
}

function Table_typeplayer() {
    const [listtype,setlisttype] = useState("Before use effect");
    const [count,setCount] = useState('');

    //test
    const employees = [
      {id: 1, name: 'Alice', country: 'Austria'},
      {id: 2, name: 'Bob', country: 'Belgium'},
      {id: 3, name: 'Carl', country: 'Canada'},
      {id: 4, name: 'Dean', country: 'Denmark'},
      {id: 5, name: 'Ethan', country: 'Egypt'},
    ]
    //test


    var test;
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      //body: JSON.stringify({ title: 'React POST Request Example' })
    }; // SET BODY
    useEffect(() => {
        fetch("http://127.0.0.1:7777/Type_player")
        .then((res) => res.json())
       // .then((data) => {setlisttype(Object.values(data))})
        .then((data)=> {setlisttype(data)})
        .catch((err) => console.warn(err))
    },[])
    //test = JSON.parse(listtype);
    //console.log(listtype);

    //setlisttype(employees);
  return (
    <>
      <Grid container xs={12}>
        <Grid item xs={11}>
          <h2>ประเภทมือแบดมินตัน</h2>
        </Grid>
        <Grid item xs={1}>
          <Button variant="outlined" color="success" >
            เพิ่มประเภทมือ
          </Button>
        </Grid>
      </Grid>{/**Grid header */}
      <Grid container xs={12}>
        <TableContainer component={Paper}>
            <Table sx={12}>
                <TableHead>
                    <TableRow>
                        <TableCell>ลำดับ</TableCell>
                        <TableCell>ชื่อประเภท</TableCell>
                        <TableCell>แก้ไข</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                   {/*Object.values(listtype).map((data,key) =>{
                    <TableRow key={data.Type_id}>
                      <TableCell>{data.Type_id}</TableCell>
                      <TableCell>{data.Type_Name}</TableCell>
                      <TableCell>{data.Type_Name}</TableCell>
                      {console.log(data.Type_name)}
                    </TableRow>
                   })*/}
                   {employees.map((data) =>{
                    <TableRow key={data.id}>
                      <TableCell>{data.id}</TableCell>
                      <TableCell>{data.id}</TableCell>
                      <TableCell>{data.id}</TableCell>
                    </TableRow>
                    console.log(data.id)
                   })}
                </TableBody>
            </Table>
        </TableContainer>
      </Grid>
    </>
  );
}

export default Table_typeplayer;
