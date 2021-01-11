import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import PrivacyNav from "../components/Nav/PrivacyNav";
import Sidebar from "../components/Sidebar/Sidebar";
import { useStyles } from "./PageStyles/PrivacyPolicyStyles";
import ContactUsNew from "../components/contactUs/ContactUsNew";

const CsrPolicy = () => {
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
              Corporate Social Responsibility Policy <br />
              (CSR Policy)
            </Typography>
            <Typography variant="h3" className={classes.name} justify="center">
              Corporate Social Responsibility Policy
            </Typography>
          </Grid>
        </Grid>
        <Grid container lg={12} md={12} xs={12} sm={12} justify="center">
          <Grid item lg={10} sm={10} xs={10} md={10} justify="center">
            <Typography variant="h4" className={classes.textheading}>
              I.CyoGyms’s philosophy and Vision
            </Typography>
            <Typography variant="h6" className={classes.textbody}>
              Choose Your Private Limited (“Company”) is a responsible
              corporate, which strives for the overall betterment of the society
              at large. To this end, the Company seeks to undertake Corporate
              Social Responsibility (“CSR”) activities, which extend beyond the
              ambit of the business and focuses on human, environmental and
              social assets, with a special focus on addressing hunger,
              malnutrition, education and health.
            </Typography>
          </Grid>
        </Grid>
        <Grid container lg={12} md={12} xs={12} sm={12} justify="center">
          <Grid item lg={10} sm={10} xs={10} md={10} justify="center">
            <Typography variant="h4" className={classes.textheading}>
              II. Objectives and Scope of the CSR Policy
            </Typography>
            <Typography variant="h6" className={classes.textbody}>
              The CSR Policy lays down guidelines for the Company to undertake
              CSR activities, which are directed towards positively contributing
              to society through various sustainable and social welfare
              initiatives. The CSR Policy of the Company shall be governed by
              the various provisions of the Companies Act, 2013 (the “Act”),
              Companies (CSR Policy) Rules, 2014 (“CSR Rules”) and any other
              rules made thereunder, or that may apply from time to time.
              <br />
              <br />
              The Company proposes to undertake the CSR activities in the
              following areas:
              <br />
              <br />
              1. Eradicating hunger, poverty and malnutrition, promoting health
              care including preventive health care and sanitation including
              contribution to the Swach Bharat Kosh set-up by the Central
              Government for the promotion of sanitation and making available
              safe drinking water;
              <br />
              2. Promoting education, including special education and employment
              enhancing vocation skills especially among children, women,
              elderly and the differently abled and livelihood enhancement
              projects;
              <br />
              3. promoting gender equality, empowering women, operate or manage
              day care centres and such other facilities for senior citizens and
              measures for reducing inequalities faced by socially and
              economically backward groups;
              <br />
              4. ensuring environmental sustainability, ecological balance,
              protection of flora and fauna, animal welfare, agroforestry,
              conservation of natural resources;
              <br />
              5. contribution to the Prime Minister's National Relief Fund
              (PMNRF) or any other fund set up by the Central Government for
              socio economic development and relief and welfare of the schedule
              caste, tribes, other backward classes, minorities and women;
              <br />
              6. any other activity as specified under the Act, as amended from
              time to time.
              <br />
              For the purpose of the CSR Policy, the CSR activities shall
              exclude activities undertaken in pursuance of the normal course of
              business of the Company.
            </Typography>
          </Grid>
        </Grid>
        <Grid container lg={12} md={12} xs={12} sm={12} justify="center">
          <Grid item lg={10} sm={10} xs={10} md={10} justify="center">
            <Typography variant="h4" className={classes.textheading}>
              III. Implementation of the CSR Activities
            </Typography>
            <Typography variant="h6" className={classes.textbody}>
              The CSR Committee is tasked with identifying new social welfare
              initiatives that the Company can undertake as CSR activities under
              the CSR Policy. To this end, the CSR Committee shall explore the
              feasibility of various initiatives, and evaluate these initiatives
              in view of the objectives and scope of the CSR Policy and update
              the same in the policy, if required.
              <br />
              <br />
              Upon identifying a suitable social welfare initiative, the CSR
              Committee shall formulate a detailed plan, which specifies, inter
              alia, the end-goal of the initiative; expected expenditure; the
              time expected to be spent by the employees of the Company, if any;
              the modus operandi; timelines for various phases of the
              initiative; tie-ups or arrangements with third party entities, if
              any; and any other material factor that the CSR Committee may deem
              fit to be included (“CSR Plan”).
              <br />
              <br />
              The CSR Committee shall place the CSR Plan before the Board, for
              the Board’s approval. The Board reserves the right to make
              suitable modifications to the CSR Plan. The Company shall execute
              the CSR Plan in line with the modifications suggested by the
              Board.
            </Typography>
          </Grid>
        </Grid>
        <Grid container lg={12} md={12} xs={12} sm={12} justify="center">
          <Grid item lg={10} sm={10} xs={10} md={10} justify="center">
            <Typography variant="h4" className={classes.textheading}>
              IV. CSR Expenditure
            </Typography>
            <Typography variant="h6" className={classes.textbodylast}>
              The Board shall ensure that the Company spends, in every financial
              year, a minimum of 1% of the average net profits of the Company
              made during the three immediately preceding financial years, on
              the CSR activities of the Company.
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

export default CsrPolicy;
