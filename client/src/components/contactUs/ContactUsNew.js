import React, { useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  Button,
  Divider,
  TextField,
} from "@material-ui/core";
import { useStyles } from "./ContactUsNewStyles";
import MobileStoreButton from "react-mobile-store-button";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import PinterestIcon from "@material-ui/icons/Pinterest";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Link } from "react-router-dom";
import { ADD_MAIL } from "../../graphql/requests";
import { useMutation } from "@apollo/client";
import InfoIcon from "@material-ui/icons/Info";
import PeopleIcon from "@material-ui/icons/People";
import HelpIcon from "@material-ui/icons/Help";
import PolicyIcon from "@material-ui/icons/Policy";
import Loader from "../Loader";

const ContactUsNew = () => {
  const classes = useStyles();
  const iOSUrl =
    "https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8";
  const androidUrl = "https://play.google.com";
  const fb = "https://www.facebook.com/CYO-GYMS-103120781756195";
  const insta = "https://www.instagram.com/cyogyms/";
  const twitter = "https://twitter.com/CyoGyms?s=08";
  const [mail, setMail] = useState({
    name: "",
    email: "",
    message: "",
    title: "",
    mobile: "",
  });
  const { name, email, message, title, mobile } = mail;
  const [sendMail, { loading: mailLoading, error: mailError }] = useMutation(
    ADD_MAIL
  );
  if (mailLoading) {
    return (
      <Grid
        container
        lg={12}
        md={12}
        justify="center"
        style={{ margin: "5rem" }}
      >
        <Grid item lg={3} md={3} justify="center">
          <Loader color="rgba(38, 38, 38, 0.7)" />
        </Grid>
      </Grid>
    );
  }

  if (mailError) {
    return <p style={{ color: "#fff" }}>{mailError.message}</p>;
  }
  const onChange = (e) => {
    setMail({ ...mail, [e.target.id]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    sendMail({
      variables: {
        name: name,
        email: email,
        message: message,
        title: title,
        mobile: mobile,
      },
    });
    console.log(mail);
    setMail("");
  };
  return (
    <Grid
      container
      xs={12}
      lg={12}
      md={12}
      style={{ backgroundColor: "#3F3F3F", marginTop: "1.7rem", zIndex: "10" }}
    >
      <Grid item lg={12} md={12}>
        <Grid
          container
          justify="center"
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <Grid item xs={12} lg={2} md={2}>
            <Typography variant="h4" className={classes.headingone}>
              CYO GYMS
            </Typography>
          </Grid>
          <Grid item xs={12} lg={8} md={8}>
            <Typography variant="h5" className={classes.headingtwo}>
              Fastest Growing Gym Chain.&nbsp;
              <br className={classes.break} /> Join our network and grow your
              business!
            </Typography>
          </Grid>
          <Grid item lg={2} md={2}>
            <Button className={classes.headingbutton}>
              <Typography className={classes.headindbuttontext}>
                List your Gym
              </Typography>
            </Button>
          </Grid>
        </Grid>
        <Grid container xs={12} lg={12} md={12}>
          <Grid item xs={12} lg={12} md={12}>
            <hr />
          </Grid>
        </Grid>
        <Grid container lg={12} md={12} style={{ marginBottom: "2.5rem" }}>
          <Grid item xs={12} lg={5} md={5}>
            <Grid container xs={12} lg={12} md={12} justify="center">
              <Grid
                item
                xs={12}
                lg={12}
                md={12}
                justify="center"
                style={{ marginLeft: "2.5rem" }}
              >
                <Typography variant="h6" className={classes.download}>
                  Download the CYO GYMS app.
                </Typography>
              </Grid>
            </Grid>
            <Grid container lg={12} md={12} justify="center">
              <Grid item xs={5} lg={4}>
                <MobileStoreButton
                  store="ios"
                  url={iOSUrl}
                  linkProps={{ title: "iOS Store Button" }}
                  className={classes.mac}
                />
              </Grid>
              <Grid item xs={6} lg={4}>
                <MobileStoreButton
                  store="android"
                  url={androidUrl}
                  linkProps={{ title: "Android Store Button" }}
                  className={classes.google}
                />
              </Grid>
            </Grid>
          </Grid>
          <Divider
            orientation="vertical"
            className={classes.divider1}
            flexItem
          />
          <Grid item lg={4} md={4} xs={12} sm={12}>
            <Grid container>
              <Grid item lg={6} md={6} xs={12} sm={12}>
                <Typography className={classes.menu}>MENU</Typography>
                <Link to="/aboutgyms" className={classes.nonunderlinelink}>
                  <Typography variant="h6" className={classes.pagestop}>
                    <InfoIcon className={classes.menuicons} />
                    About Us
                  </Typography>
                </Link>
                <Link to="/about" className={classes.nonunderlinelink}>
                  <Typography variant="h6" className={classes.pages}>
                    <PeopleIcon className={classes.menuicons} />
                    About Developers
                  </Typography>
                </Link>
                <Link to="/support" className={classes.nonunderlinelink}>
                  <Typography variant="h6" className={classes.pagessupport}>
                    <HelpIcon className={classes.menuicons} />
                    Support
                  </Typography>
                </Link>
              </Grid>
              <Grid item lg={6} md={6} xs={12} sm={12}>
                <Link
                  to="/licensesregistration"
                  className={classes.nonunderlinelink}
                >
                  <Typography
                    variant="h6"
                    className={classes.pagestwotop}
                    style={{ textDecoration: "none" }}
                  >
                    <PolicyIcon className={classes.menuicons} />
                    Licenses & Registration
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Divider
            orientation="vertical"
            className={classes.divider}
            flexItem
          />
          <Grid item lg={2} md={2} xs={12} sm={12}>
            <Link to="/privacypolicy" className={classes.nonunderlinelink}>
              <Typography variant="h6" className={classes.pagesthreetop}>
                <PolicyIcon className={classes.menuicons} />
                Privacy Policy
              </Typography>
            </Link>
            <Link to="/apipolicy" className={classes.nonunderlinelink}>
              <Typography
                variant="h6"
                className={classes.pagesthree}
                style={{ textDecoration: "none !important" }}
              >
                <PolicyIcon className={classes.menuicons} />
                API Policy
              </Typography>
            </Link>
            <Link to="/csrpolicy" className={classes.nonunderlinelink}>
              <Typography variant="h6" className={classes.pagesthree}>
                <PolicyIcon className={classes.menuicons} />
                CSR Policy
              </Typography>
            </Link>
          </Grid>
        </Grid>
        <Grid container lg={12} md={12} justify="center">
          <Grid item lg={11} md={11}>
            <hr />
          </Grid>
        </Grid>
        <Grid container lg={12} md={12} justify="center">
          <Grid item xs={12} lg={7} md={7}>
            <Grid container justify="center">
              <Grid item lg={9} md={9} sm={10} xs={10}>
                <Paper
                  elevation={5}
                  variant="outlined"
                  className={classes.paper}
                >
                  <Typography variant="h6" className={classes.paperhead}>
                    Mail Us at <b>support@cyogyms.com</b>
                  </Typography>
                  <Grid container lg={12} md={12} justify="center">
                    <Grid item lg={5} md={5}>
                      <TextField
                        id="input-with-icon-grid"
                        label="Name"
                        id="name"
                        required
                        value={name}
                        onChange={onChange}
                        style={{ marginLeft: "1rem" }}
                      />
                    </Grid>
                    <Grid item lg={5} md={5}>
                      <TextField
                        id="input-with-icon-grid"
                        label="Mobile"
                        id="mobile"
                        required
                        value={mobile}
                        onChange={onChange}
                        style={{ marginLeft: "1rem" }}
                      />
                    </Grid>
                  </Grid>
                  <Grid container lg={12} md={12} justify="center">
                    <Grid item lg={5} md={5}>
                      <TextField
                        id="input-with-icon-grid"
                        label="Email"
                        id="email"
                        required
                        value={email}
                        onChange={onChange}
                        style={{ marginLeft: "1rem" }}
                      />
                    </Grid>
                    <Grid item lg={5} md={5}>
                      <TextField
                        id="input-with-icon-grid"
                        label="Title"
                        id="title"
                        required
                        value={title}
                        onChange={onChange}
                        style={{ marginLeft: "1rem" }}
                      />
                    </Grid>
                  </Grid>
                  <Grid container lg={12} md={12} justify="center">
                    <Grid item lg={10} md={10}>
                      <TextField
                        id="outlined-basic"
                        label="Your Message"
                        variant="outlined"
                        id="message"
                        required
                        value={message}
                        onChange={onChange}
                        className={classes.body}
                      />
                    </Grid>
                  </Grid>
                  <Grid container lg={12} md={12} justify="flex-end">
                    <Grid item lg={4} md={4}>
                      <Typography
                        variant="caption"
                        className={classes.required}
                      >
                        *All fields required
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container lg={12} md={12} justify="center">
                    <Grid item lg={5} md={5}>
                      <Button onClick={onSubmit} className={classes.btn}>
                        Submit Message
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Divider
            orientation="vertical"
            className={classes.dividersec}
            flexItem
          />
          <Grid item lg={4} md={4} style={{ marginTop: " 1.9rem" }}>
            <Typography variant="h6" className={classes.follow}>
              {" "}
              Follow us on:
            </Typography>
            <a href={insta} target="_blank">
              <InstagramIcon className={classes.iconsone} />
            </a>
            <a href={fb} target="_blank">
              <FacebookIcon className={classes.icons} />
            </a>
            <a href={twitter} target="_blank">
              <TwitterIcon className={classes.icons} />
            </a>
            <br />
            <br />
            <a target="_blank">
              <YouTubeIcon className={classes.iconstwo} />
            </a>
            <a target="_blank">
              <PinterestIcon className={classes.iconstwo} />
            </a>
          </Grid>
        </Grid>
        <Grid container lg={12} md={12}>
          <Grid item lg={12} md={12}>
            <hr />
          </Grid>
        </Grid>
        <Grid container lg={12} md={12}>
          <Grid item lg={12} md={12}>
            <Paper className={classes.footerPaper} elevation={5}>
              <Typography variant="h6" className={classes.textfooter}>
                ?? 2021 | Choose Your Option Pvt Ltd | All Rights Reserved |
                Webdesign & Develop by :??{" "}
                <a
                  className={classes.footerlink}
                  href="https://cybersifytech.com"
                >
                  CyberSify Technologies Pvt Ltd
                </a>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default ContactUsNew;
