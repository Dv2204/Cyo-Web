import React from "react";
import { Grid, Paper, Typography, Button } from "@material-ui/core";

const ContactUsNew = () => {
  return (
    <Grid
      container
      lg={12}
      md={12}
      style={{ backgroundColor: "#3F3F3F", marginTop: "1.7rem" }}
    >
      <Grid item lg={12} md={12}>
        <Grid container justify="center" style={{ marginTop: "2rem" }}>
          <Grid item lg={2} md={2}>
            <Typography variant="h4">CYO GYM</Typography>
          </Grid>
          <Grid item lg={8} md={8}>
            <Typography variant="h5">
              The World's Fastest Growing Hotel Chain {"  "}&nbsp;&nbsp; Join
              our network and grow your business!
            </Typography>
          </Grid>
          <Grid item lg={2} md={2}>
            <Button>List your Gym</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default ContactUsNew;
