import React, { useState } from "react";
import { Grid, Typography, Paper, TextField, Button } from "@material-ui/core";
import PrivacyNav from "../components/Nav/PrivacyNav";
import Sidebar from "../components/Sidebar/Sidebar";
import { useStyles } from "./PageStyles/SupportStyles";
import ContactUsNew from "../components/contactUs/ContactUsNew";
import background from "../assets/7.jfif";
import { ADD_MAIL } from "../graphql/requests";
import { useMutation } from "@apollo/client";
import Loader from "../components/Loader";

const Support = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
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
      <div style={{ backgroundColor: "rgba(248, 248, 248, 1)", backgroundSize: "cover"}}>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <PrivacyNav toggle={toggle} />
        <Grid
          container
          lg={12}
          md={12}
          style={{
            backgroundSize: "100%",
          }}
          className={classes.bgimage}
        >
          <Grid item lg={12} md={12}>
            <img src={background} alt="p" className={classes.image} />
            <Typography variant="h2" className={classes.heading}>
              Support Centre
            </Typography>
            <Typography variant="h6" className={classes.headingbody}>
              Need help? Submit a support request and <br /> we'll get back to
              you ASAP!
            </Typography>
          </Grid>
        </Grid>
        <Grid container lg={12} md={12} justify="center">
          <Grid item lg={9} md={9} sm={10} xs={10}>
            <Paper elevation={5} variant="outlined" className={classes.paper}>
              <Typography variant="h6" className={classes.paperhead}>
                Mail Us at <b>support@cyogyms.com</b>
              </Typography>
              <Grid
                container
                lg={12}
                md={12}
                justify="center"
                style={{ marginTop: "2.5rem" }}
              >
                <Grid item lg={4} md={4} sm={4} xs={10}>
                  <TextField
                    id="input-with-icon-grid"
                    label="Name"
                    id="name"
                    required
                    value={name}
                    onChange={onChange}
                    className={classes.textfield}
                  />
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={10}>
                  <TextField
                    id="input-with-icon-grid"
                    label="Mobile"
                    id="mobile"
                    required
                    value={mobile}
                    onChange={onChange}
                    className={classes.textfieldtwo}
                  />
                </Grid>
                <Grid item lg={4} md={4} xs={10} sm={4}>
                  <TextField
                    id="input-with-icon-grid"
                    label="Email"
                    id="email"
                    required
                    value={email}
                    onChange={onChange}
                    className={classes.textfieldtwo}
                  />
                </Grid>
              </Grid>
              <Grid container lg={12} md={12} justify="center">
                <Grid item lg={7} md={7}>
                  <TextField
                    id="input-with-icon-grid"
                    label="Title"
                    id="title"
                    required
                    value={title}
                    onChange={onChange}
                    className={classes.textfieldtitle}
                  />
                </Grid>
              </Grid>
              <Grid container lg={12} md={12} justify="center">
                <Grid item lg={7} md={7}>
                  <TextField
                    id="outlined-basic"
                    label="Your Message"
                    variant="outlined"
                    id="message"
                    required
                    value={message}
                    onChange={onChange}
                    className={classes.textfieldmsg}
                  />
                </Grid>
              </Grid>
              <Grid container lg={12} md={12} justify="flex-end">
                <Grid item lg={4} md={4}>
                  <Typography variant="caption" className={classes.required}>
                    *All fields required
                  </Typography>
                </Grid>
              </Grid>
              <Grid container lg={12} md={12} justify="center">
                <Grid item lg={3} md={3}>
                  <Button onClick={onSubmit} className={classes.btn}>
                    Submit Message
                  </Button>
                </Grid>
              </Grid>
            </Paper>
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
