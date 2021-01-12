import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import PrivacyNav from "../components/Nav/PrivacyNav";
import Sidebar from "../components/Sidebar/Sidebar";
import { useStyles } from "./PageStyles/SupportStyles";
import ContactUsNew from "../components/contactUs/ContactUsNew";
import background from "../assets/comparecroptwo.PNG";

const Support = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div style={{ backgroundColor: "rgba(248, 248, 248, 1)" }}>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <PrivacyNav toggle={toggle} />
        <Grid
          container
          lg={12}
          md={12}
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "100%",
          }}
          className={classes.bgimage}
        >
          <Grid item lg={5} md={5}>
            <Typography variant="h2" className={classes.heading}>
              Support Centre
            </Typography>
            <Typography variant="h6" className={classes.headingbody}>
              Need help? Submit a support request and we'll get back to you
              ASAP!
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <ContactUsNew />
        </Grid>
      </div>
    </>
  );
};

export default Support;
