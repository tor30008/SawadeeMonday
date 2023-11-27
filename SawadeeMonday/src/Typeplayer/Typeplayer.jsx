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
import axios, { isCancel, AxiosError } from "axios";


function Table_typeplayer() {
  const [listtype, setlisttype] = useState([]);
  const [loading, setloading] = useState(true);

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    //body: JSON.stringify({ title: 'React POST Request Example' })
  }; // SET BODY
  const fetdata = async () => {
    await axios
      .get("http://127.0.0.1:7777/Type_player")
      .then((res) => {
        //setlisttype(res.data)
        setlisttype(res.data);
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  };
  useEffect(() => {
    fetdata();
  }, [listtype]);
  return (
    <>
      <Grid container xs={12}>
        <Grid item xs={11}>
          <h2>ประเภทมือแบดมินตัน</h2>
        </Grid>
        <Grid item xs={1}>
          <Button variant="outlined" color="success">
            เพิ่มประเภทมือ
          </Button>
        </Grid>
      </Grid>
      {/**Grid header */}
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
              {listtype.map((row) =>(
                <TableRow>
                  <TableCell>{row.Type_id}</TableCell>
                  <TableCell>{row.Type_name}</TableCell>
                  <TableCell>แก้ไข</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </>
  );
}

export default Table_typeplayer;
