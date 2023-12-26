import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";

const Shuttercock = () => {
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={11}>
          <h2>ลูกแบด</h2>
        </Grid>
        <Grid item xs={1}>
          <Button
            color="success"
            item="true"
            variant="outlined"
          >
            เพิ่มลูกแบด
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Shuttercock;
