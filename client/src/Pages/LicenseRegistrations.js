import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import PrivacyNav from "../components/Nav/PrivacyNav";
import Sidebar from "../components/Sidebar/Sidebar";
import { useStyles } from "./PageStyles/PrivacyPolicyStyles";
import ContactUsNew from "../components/contactUs/ContactUsNew";

const LicenseRegistrations = () => {
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
        <Grid container lg={12} md={12} xs={12} sm={12}>
          <Grid item lg={12} md={12} xs={12} sm={12}>
            <Typography variant="h2" className={classes.text} justify="center">
              Licenses and Registration
            </Typography>
            <Typography variant="h3" className={classes.name} justify="center">
              Certificate of Incorporation
            </Typography>
          </Grid>
        </Grid>
        <Grid container lg={12} md={12} xs={12} sm={12} justify="center">
          <Grid item lg={10} sm={10} xs={10} md={10} justify="center">
            <Typography variant="h6" className={classes.textbody}>
              I hereby certify that CHOOSE YOUR OPTION PRIVATE LIMITED is
              incorporated on this Sixteenth day of October Two thousand twenty
              under the Companies Act, 2013 (18 of 2013) and that the company is
              limited by shares.
            </Typography>
          </Grid>
        </Grid>
        <br />
        <br />
        <br />
        <Grid container lg={12} md={12} xs={12} sm={12} justify="center">
          <Grid item lg={10} sm={10} xs={10} md={10} justify="center">
            <Typography variant="h6" className={classes.textbody}>
              Registration Certificate <br />
              Registration Number : 06AAJCC0489M1Z9 <br />
              CIN - U74999HR2020PTC090198 <br />
              PAN - AAJCC0489M <br />
              TAN - RTKC06183C <br />
              GSTIN - 06AAJCC0489M1Z9
            </Typography>
          </Grid>
        </Grid>
        <br />
        <br />
        <Grid container lg={12} md={12} xs={12} sm={12} justify="center">
          <Grid item lg={10} sm={10} xs={10} md={10} justify="center">
            <Typography variant="h6" className={classes.textbody}>
              This is a system generated digitally signed Registration
              Certificate issued based on the approval of application granted on
              27/10/2020 by the jurisdictional authority.
            </Typography>
          </Grid>
        </Grid>
        <br />
        <br />
        <Grid container lg={12} md={12} xs={12} sm={12} justify="center">
          <Grid item lg={10} sm={10} xs={10} md={10} justify="center">
            <Typography variant="h6" className={classes.textbody}>
              1. Legal Name CHOOSE YOUR OPTION PRIVATE LIMITED <br />
              2. Trade Name, if any CHOOSE YOUR OPTION PRIVATE LIMITED <br />
              3. Constitution of Business Private Limited Company <br />
              4. Address of Principal Place of Business 5175/8 KHASAPURA, LEO
              CHOWK NEAR BMG MALL, REWARI, Rewari, Haryana, 123401 <br />
              5. Date of Liability <br />
              6. Period of Validity From 27/10/2020 To Not Applicable <br />
              7. Type of Registration Regular <br />
              8. Particulars of Approving Authority Centre <br />
              &nbsp;&nbsp;&nbsp;&nbsp;Signature <br />
              &nbsp;&nbsp;&nbsp;&nbsp;Name Virender Singh <br />
              &nbsp;&nbsp;&nbsp;&nbsp;Designation Superintendent <br />
              &nbsp;&nbsp;&nbsp;&nbsp;Jurisdictional Office Rewari Ward 1 <br />
              9. Date of issue of Certificate 27/10/2020 Note: The registration
              certificate is required to be prominently displayed at all places
              of business in the State.
            </Typography>
          </Grid>
        </Grid>
        <br />
        <br />
        <Grid container lg={12} md={12} xs={12} sm={12} justify="center">
          <Grid item lg={10} sm={10} xs={10} md={10} justify="center">
            <Typography variant="h6" className={classes.textbody}>
              Annexure A <br />
              &nbsp;&nbsp;&nbsp;&nbsp;Details of Additional Places of Business{" "}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;Total Number of Additional Places of
              Business in the State 0 <br />
              &nbsp;&nbsp;&nbsp;&nbsp;GSTIN 06AAJCC0489M1Z9 <br />
              &nbsp;&nbsp;&nbsp;&nbsp;Legal Name CHOOSE YOUR OPTION PRIVATE
              LIMITED <br />
              &nbsp;&nbsp;&nbsp;&nbsp;Trade Name, if any CHOOSE YOUR OPTION
              PRIVATE LIMITED <br />
            </Typography>
          </Grid>
        </Grid>
        <br />
        <br />
        <Grid container lg={12} md={12} xs={12} sm={12} justify="center">
          <Grid item lg={10} sm={10} xs={10} md={10} justify="center">
            <Typography variant="h6" className={classes.textbody}>
              Annexure B <br />
              &nbsp;&nbsp;&nbsp;&nbsp;Details of Managing / Whole-time Directors
              and Key Managerial &nbsp;&nbsp;&nbsp;&nbsp;Persons <br />
              &nbsp;&nbsp;&nbsp;&nbsp;GSTIN 06AAJCC0489M1Z9
            </Typography>
          </Grid>
        </Grid>
        <br />
        <br />
        <Grid container lg={12} md={12} xs={12} sm={12} justify="center">
          <Grid item lg={10} sm={10} xs={10} md={10} justify="center">
            <Typography variant="h6" className={classes.textbody}>
              Legal Name CHOOSE YOUR OPTION PRIVATE LIMITED <br />
              Trade Name, if any CHOOSE YOUR OPTION PRIVATE LIMITED
            </Typography>
          </Grid>
        </Grid>
        <br />
        <br />
        <Grid container lg={12} md={12} xs={12} sm={12} justify="center">
          <Grid item lg={10} sm={10} xs={10} md={10} justify="center">
            <Typography variant="h6" className={classes.textbody}>
              1 Name HARISH SAINI <br />
              &nbsp;&nbsp;&nbsp;&nbsp; Designation/Status DIRECTOR <br />
              &nbsp;&nbsp;&nbsp;&nbsp; Resident of State Haryana
            </Typography>
          </Grid>
        </Grid>
        <br />
        <br />
        <Grid container lg={12} md={12} xs={12} sm={12} justify="center">
          <Grid item lg={10} sm={10} xs={10} md={10} justify="center">
            <Typography variant="h6" className={classes.textbodylast}>
              2 Name VIKAS MALIK <br />
              &nbsp;&nbsp;&nbsp;&nbsp;Designation/Status Director <br />
              &nbsp;&nbsp;&nbsp;&nbsp;Resident of State Haryana
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

export default LicenseRegistrations;
