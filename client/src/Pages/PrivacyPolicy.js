import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import PrivacyNav from "../components/Nav/PrivacyNav";
import Sidebar from "../components/Sidebar/Sidebar";
import { useStyles } from "./PageStyles/PrivacyPolicyStyles";

const PrivacyPolicy = () => {
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
              PRIVACY POLICY
            </Typography>
            <Typography variant="h2" className={classes.name} justify="center">
              Choose Your Option Pvt. Ltd.
            </Typography>
          </Grid>
        </Grid>
        <Grid container lg={12} md={12} xs={12} sm={12} justify="center">
          <Grid item lg={10} sm={10} xs={10} md={10} justify="center">
            <Typography variant="h4" className={classes.textheading}>
              Personal Information -
            </Typography>
            <Typography variant="body1" className={classes.textbody}>
              Choose Your Option Pvt. Ltd. is the licensed owner of the brand
              CYOGYMS and the website cyogyms.com (”The Site”) from Choose Your
              Option Pvt. Ltd. respects your privacy. This Privacy Policy
              provides succinctly the manner your data is collected and used by
              cyogyms.com on the Site. As a visitor to the Site/ Customer you
              are advised to please read the Privacy Policy carefully. By
              accessing the services provided by the Site you agree to the
              collection and use of your data by Choose Your Option Pvt. Ltd. in
              the manner provided in this Privacy Policy.
            </Typography>
          </Grid>
        </Grid>
        <Grid container lg={12} md={12} xs={12} sm={12} justify="center">
          <Grid item lg={10} sm={10} xs={10} md={10} justify="center">
            <Typography variant="h4" className={classes.textheading}>
              What information is, or may be, collected form you?
            </Typography>
            <Typography variant="body1" className={classes.textbody}>
              As part of the registration process on the Site, cyogyms.com may
              collect the following personally identifiable information about
              you: Name including first and last name, alternate email address,
              mobile phone number and contact details, Postal code, Demographic
              profile (like your age, gender, occupation, education, address
              etc.) and information about the pages on the site you
              visit/access, the links you click on the site, the number of times
              you access the page and any such browsing information.
            </Typography>
          </Grid>
        </Grid>
        <Grid container lg={12} md={12} xs={12} sm={12} justify="center">
          <Grid item lg={10} sm={10} xs={10} md={10} justify="center">
            <Typography variant="h4" className={classes.textheading}>
              How do we Collect the Information ?
            </Typography>
            <Typography variant="body1" className={classes.textbody}>
              cyogyms.com will collect personally identifiable information about
              you only as part of a voluntary registration process, on-line
              survey or any combination thereof. The Site may contain links to
              other Web sites. cyogyms.com is not responsible for the privacy
              practices of such Web sites which it does not own, manage or
              control. The Site and third-party vendors, including Google, use
              first-party cookies (such as the Google Analytics cookie) and
              third-party cookies (such as the DoubleClick cookie) together to
              inform, optimize, and serve ads based on someone’s past visits to
              the Site.
            </Typography>
          </Grid>
        </Grid>
        <Grid container lg={12} md={12} xs={12} sm={12} justify="center">
          <Grid item lg={10} sm={10} xs={10} md={10} justify="center">
            <Typography variant="h4" className={classes.textheading}>
              How is information used ?
            </Typography>
            <Typography variant="body1" className={classes.textbody}>
              cyogyms.com will use your personal information to provide
              personalized features to you on the Site and to provide for
              promotional offers to you through the Site and other channels.
              cyogyms.com will also provide this information to its business
              associates and partners to get in touch with you when necessary to
              provide the services requested by you. cyogyms.com will use this
              information to preserve transaction history as governed by
              existing law or policy. cyogyms.com may also use contact
              information internally to direct its efforts for product
              improvement, to contact you as a survey respondent, to notify you
              if you win any contest; and to send you promotional materials from
              its contest sponsors or advertisers. cyogyms.com will also use
              this information to serve various promotional and advertising
              materials to you via display advertisements through the Google Ad
              network on third party websites. You can opt out of Google
              Analytics for Display Advertising and customize Google Display
              network ads using the Ads Preferences Manager. Information about
              Customers on an aggregate (exlcuding any information that may
              identify you specifically) covering Customer transaction data and
              Customer demographic and location data may be provided to partners
              of cyogyms.com for the purpose of creating additional features on
              the website, creating appropriate merchandising or creating new
              products and services and conducting marketing research and
              statistical analysis of customer behaviour and transactions.
            </Typography>
          </Grid>
        </Grid>
        <Grid container lg={12} md={12} xs={12} sm={12} justify="center">
          <Grid item lg={10} sm={10} xs={10} md={10} justify="center">
            <Typography variant="h4" className={classes.textheading}>
              With whom your information will be shared -
            </Typography>
            <Typography variant="body1" className={classes.textbody}>
              cyogyms.com will not use your financial information for any
              purpose other than to complete a transaction with you. cyogyms.com
              does not rent, sell or share your personal information and will
              not disclose any of your personally identifiable information to
              third parties. In cases where it has your permission to provide
              products or services you’ve requested and such information is
              necessary to provide these products or services the information
              may be shared with cyogyms.com business associates and partners.
              cyogyms.com may, however, share consumer information on an
              aggregate with its partners or third parties where it deems
              necessary. In addition cyogyms.com may use this information for
              promotional offers, to help investigate, prevent or take action
              regarding unlawful and illegal activities, suspected fraud,
              potential threat to the safety or security of any person,
              violations of the Site’s terms of use or to defend against legal
              claims; special circumstances such as compliance with subpoenas,
              court orders, requests/order from legal authorities or law
              enforcement agencies requiring such disclosure.
            </Typography>
          </Grid>
        </Grid>
        <Grid container lg={12} md={12} xs={12} sm={12} justify="center">
          <Grid item lg={10} sm={10} xs={10} md={10} justify="center">
            <Typography variant="h4" className={classes.textheading}>
              What Choice are available to you regarding collection, use and
              distribution of your information ?
            </Typography>
            <Typography variant="body1" className={classes.textbodylast}>
              To protect against the loss, misuse and alteration of the
              information under its control, cyogyms.com has in place
              appropriate physical, electronic and managerial procedures. For
              example, cyogyms.com servers are accessible only to authorized
              personnel and your information is shared with employees and
              authorised personnel on a need to know basis to complete the
              transaction and to provide the services requested by you. Although
              cyogyms.com will endeavour to safeguard the confidentiality of
              your personally identifiable information, transmissions made by
              means of the Internet cannot be made absolutely secure. By using
              this site, you agree that cyogyms.com will have no liability for
              disclosure of your information due to errors in transmission or
              unauthorized acts of third parties.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          lg={12}
          md={12}
          justify="center"
          style={{ backgroundColor: "#282828", height: "8vh" }}
        >
          <Grid item lg={10} md={10} sm={10} xs={10} justify="center">
            <Typography variant="h6" className={classes.link}>
              Choose Your Option &copy; 2020
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default PrivacyPolicy;
