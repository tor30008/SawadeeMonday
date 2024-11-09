import React , {useEffect, useState} from "react";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";


import "./Payment.css";

export const Payment = () => {
    const [selectedDate , setSelectedDate] = useState(dayjs());

    useEffect(() => {
        console.log(selectedDate);
    },[selectedDate])

    const setDate = (e) => {
        console.log(e.target.value)
        //console.log("Test fate")
    }

  return (
    <>
      <h2 className="headLine">Payment</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={12} class = "custom-date">
            {/* <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DateCalendar value={selectedDate} onChange = {(value) => setDate(value) }  />
            </LocalizationProvider> */}
           
           <Grid item xs = {2}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']} >
                  <DatePicker label = "StartDate" sx = {{
                  input : {color : 'white'},
                  '& .MuiOutlinedInput-root' : {
                    '& fieldset' : {
                      borderColor : 'white'
                    }
                  }
                }}
                  onChange = {(event) => setDate(event)}
                  format = 'YYYY-MM-DD'
                />
                </DemoContainer>
              </LocalizationProvider>
           </Grid>

           <Grid item xs = {2} ssx={{ mx: 'auto'}}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components = {['DatePicker']}>
                  <DatePicker label = 'EndDate' sx = {{
                    input : {color : 'white'},
                    '& .MuiOutlinedInput-root' : {
                      '& fieldset' : {
                        borderColor : 'white'
                      }
                    }
                  }}
                  format = 'YYYY-MM-DD'
                  >

                  </DatePicker>
                </DemoContainer>
            </LocalizationProvider>
           </Grid>
            
        </Grid>
        <Grid item xs={12} lg={6} className="heightSection">
          <h2 className="headLine">ยอดเงินภาพรวมวัน</h2>
          <Grid item lg={12}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ลำดับ</TableCell>
                    <TableCell>วันที่</TableCell>
                    <TableCell>เงินทั้งหมด</TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <h2 className={"headLine"}>ยอดเงินแต่ละคน / วัน</h2>
        </Grid>
        <Grid item xs={12} lg={12}>
          <h2 className={"headLine"}>Graph</h2>
        </Grid>
      </Grid>
    </>
  );
};
export default Payment;
