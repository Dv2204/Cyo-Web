import React, { useState } from "react";
import { Typography, Grid, Paper, Chip, Button } from "@material-ui/core";
import { useStyles } from "./ContactStyles";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MobileStoreButton from "react-mobile-store-button";
import { Link } from "react-router-dom";
import { ADD_MAIL } from "../../graphql/requests";
import { useMutation } from "@apollo/client";
import Loader from "../Loader";

const Contact = () => {
  const classes = useStyles();
  const iOSUrl =
    "https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8";
  const androidUrl = "https://play.google.com";
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
    <>
      <Grid item md={12} style={{ backgroundColor: "#3F3F3F" }}>
        <Grid container lg={12} md={12} className={classes.row}>
          <Grid container lg={12} md={12} justify="center" id="contact">
            <Typography variant="h3" className={classes.heading}>
              CONTACT US
            </Typography>
            <Grid container justify="center">
              <Grid item lg={5} md={5} justify="center">
                <Typography className={classes.about} variant="h6">
                  Choose Your Option Pvt Ltd 2020-2021 / All Rights Reserved /
                  Web Desgin and Develop by Cybersify Technologies Pvt Ltd{" "}
                  {"  "}
                  <a
                    className={classes.footerlink}
                    href="https://cybersifytech.com"
                  >
                    www.cybersifytech.com
                  </a>
                </Typography>
                <Link to="/privacypolicy">
                  <Chip label="Privacy Policy" className={classes.privacy} />
                </Link>
                <Grid container>
                  <Grid item lg={4}>
                    <MobileStoreButton
                      store="ios"
                      url={iOSUrl}
                      linkProps={{ title: "iOS Store Button" }}
                      className={classes.mac}
                    />
                  </Grid>
                  <Grid item lg={4}>
                    <MobileStoreButton
                      store="android"
                      url={androidUrl}
                      linkProps={{ title: "Android Store Button" }}
                      className={classes.google}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid lg={1} />

              <Grid item lg={5} md={5} justify="center">
                <Paper
                  elevation={5}
                  variant="outlined"
                  className={classes.mailbox}
                >
                  <Typography
                    variant="h6"
                    className={classes.mailus}
                    style={{ textAlign: "center", marginBottom: "2vh" }}
                  >
                    Mail Us at <b>support@cyogyms.com</b>
                  </Typography>
                  <div className={classes.margin}>
                    <Grid container spacing={1} alignItems="center" justify="center">
                      <Grid item>
                        <Grid container justify="center">
                          <TextField
                            id="input-with-icon-grid"
                            label="Name"
                            id="name"
                            value={name}
                            onChange={onChange}
                            style={{ marginLeft: "1rem" }}
                          />
                          <TextField
                            id="input-with-icon-grid"
                            label="Mail"
                            id="email"
                            value={email}
                            onChange={onChange}
                            style={{ marginLeft: "1rem" }}
                          />
                          <TextField
                            id="input-with-icon-grid"
                            label="Mobile Number"
                            id="mobile"
                            value={mobile}
                            onChange={onChange}
                            style={{ marginLeft: "1rem" }}
                          />
                          <TextField
                            id="input-with-icon-grid"
                            label="Title"
                            id="title"
                            value={title}
                            onChange={onChange}
                            style={{ marginLeft: "1rem" }}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid container xs={12} justify="center">
                    <TextField
                      id="outlined-basic"
                      label="Your Message"
                      variant="outlined"
                      id="message"
                      value={message}
                      onChange={onChange}
                      style={{ margin: "4vh 0", width: "30rem" }}
                      className={classes.body}
                    />
                    </Grid>
                    <Grid container justify="flex-end">
                      <Button onClick={onSubmit}>Send Message!</Button>
                    </Grid>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        lg={12}
        md={12}
        justify="center"
        style={{ backgroundColor: "#282828", height: "8vh" }}
      >
        <Typography variant="h6" className={classes.link}>
          Choose Your Option &copy; 2020
        </Typography>
      </Grid>
    </>
  );
};

export default Contact;
