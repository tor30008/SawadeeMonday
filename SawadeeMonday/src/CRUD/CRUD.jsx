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
import Grid from "@mui/material/Grid";

import Paper from "@mui/material/Paper";
import axios, { isCancel, AxiosError } from "axios";
import "./CRUD.css";
import {
  getshop_service,
  deleteshop_service,
  insertshop_service,
  updateshop_service,
} from "./CRUD_SERVICE";

const CRUD = () => {
  const [listShop, setlistShop] = useState(false);
  const [idshopfront, setidshopfront] = useState(null);
  const [nameshopfront, setnameshopfront] = useState(null);
  const [nameupdate, setnameupdate] = useState(null);

  useEffect(() => {
    getshop();
  }, []);

  const getshop = async () => {
    const res = await getshop_service();
    console.log(res);
    setlistShop(res);
  };

  const deleteshop = async (id) => {
    const res = await deleteshop_service(id);
    if (res == true) {
      getshop();
    }
  };
  const insertshop = async () => {
    const res = await insertshop_service(idshopfront, nameshopfront);
    if (res == true) {
      getshop();
    }
  };

  const updateshop = async(id) => {
    console.log(id);
    let data = {
        shopId : id,
        shopName : nameupdate
    }
    const res = await updateshop_service(data);
    console.log(res);
  }

  return (
    <>
      <Grid container lg={12}>
        <Grid item lg={12}>
          <h2>CRUD</h2>
        </Grid>
        <Grid item lg={12} className={"button_crud "}>
          <Grid item lg={4}>
            <TextField
              id="filled-basic"
              label="รหัสร้านค้า"
              variant="filled"
              InputProps={{
                            style: { color: "white" },
                          }}
              onChange={(event) => setidshopfront(event.target.value)}
            />
          </Grid>
          <Grid item lg={4}>
            <TextField
              id="filled-basic"
              label="ชื่อร้านค้า"
              variant="filled"
              InputProps={{
                            style: { color: "white" },
                          }}
              onChange={(event) => setnameshopfront(event.target.value)}
            />
          </Grid>
          <Grid item lg={4}>
            <Button
              variant="contained"
              className={"button_crud"}
              onClick={insertshop}
            >
              กรอกข้อมูล
            </Button>
          </Grid>
        </Grid>
        <Grid item lg={12}>
          <TableContainer component={Paper}>
            <Table sx={12}>
              <TableHead>
                <TableRow>
                  <TableCell>ลำดับ</TableCell>
                  <TableCell>ชื่อ</TableCell>
                  <TableCell>อัพเดทชื่อ</TableCell>
                  <TableCell>ตั้งค่า</TableCell>
                </TableRow>
              </TableHead>
              {listShop ? (
                <TableBody>
                  {listShop.map((data) => (
                    <TableRow>
                      <TableCell>{data.shopId}</TableCell>
                      <TableCell>{data.shopName}</TableCell>
                      <TableCell>
                        <TextField
                          id="filled-basic"
                          InputProps={{
                            style: { color: "white" },
                          }}
                          label="อัพเดทชื่อร้าน"
                          variant="filled"
                          onChange={(event) =>
                            setnameupdate(event.target.value)
                          }
                        />
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          className={"button_crud"}
                          onClick={() => updateshop(data.shopId)}
                        >
                          แก้ไข
                        </Button>
                        <Button
                          variant="contained"
                          className={"button_crud"}
                          onClick={() => deleteshop(data.shopId)}
                        >
                          ลบ
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              ) : (
                <p>ไม่มีข้อมูล</p>
              )}
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default CRUD;
