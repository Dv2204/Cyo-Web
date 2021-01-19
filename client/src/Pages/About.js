import React, { useState } from "react";
import top from "../assets/about.png";
import { useStyles } from "./PageStyles/AboutStyles";
import AboutNavBar from "../components/Nav/AboutNav";
import { Grid, Typography } from "@material-ui/core";
import ContactUsNew from "../components/contactUs/ContactUsNew";
import Developers from "../components/developers/Developers";
import Parth from "../assets/parth.jpg";
import Akriti from "../assets/Akriti.jpg";
import Divanshu from "../assets/Divanshu.jpg";
import Paritosh from "../assets/Paritosh.jpg";
import Harmanjit from "../assets/Harmanjit.jpg";
import Sushila from "../assets/Sushila.jpeg";
import Saurav from "../assets/Saurav.jpg";
import Priya from "../assets/Priya.jpg";
import Rupesh from "../assets/rupesh.jfif";
import Divyanshu from "../assets/Divyanshu.PNG";
import Sidebar from "../components/Sidebar/Sidebar";

const About = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div style={{ backgroundColor: "rgba(248, 248, 248, 1)" }}>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <AboutNavBar toggle={toggle} />
        <Grid container md={12} lg={12} justify="center">
          <img src={top} alt="topBg" className={classes.top} />
          <Typography variant="h2" className={classes.head}>
            ABOUT DEVELOPERS
          </Typography>
          <Grid item lg={8} md={8} justify="center">
            <Typography
              className={classes.body}
              style={{ textAlign: "center", marginBottom: "10vh" }}
            >
              <Typography style={{ fontSize: "3vh", fontWeight: "bold" }}>
                WHO ARE WE
              </Typography>{" "}
              We are a team of Passionate designer, Developers and Programmers
              brought together by their love for design and development. We are
              innovators and creators, creating coolest of stuffs for you. Our
              work speaks our philosophy. With quality being our top most
              priority, we design your requirement. Each of our projects is
              special and so are our clients!
              <Typography
                style={{
                  fontSize: "3vh",
                  fontWeight: "bold",
                  marginTop: "0.9rem",
                }}
              >
                OUR MISSION
              </Typography>{" "}
              Our mission is to develop elegant and affordable solutions that
              enables small to large businesses to establish visibility online,
              increases sales and improve productivity. We strive to build and
              maintain an effective relationship with our clients by providing
              web solutions that include all of the most powerful tools that web
              development and digital marketing have to offer. <br />
              <Typography
                style={{
                  fontSize: "3vh",
                  fontWeight: "bold",
                  marginTop: "0.9rem",
                }}
              >
                TEAMWORK
              </Typography>{" "}
              Our expert designers, developers and project managers will guide
              you through the process of customizing an online user experience
              that meets your unique business needs and scales your company. We
              are here to serve you with a vision to become a prime performer,
              in providing you the solution for competing at the global market.{" "}
              <Typography
                style={{
                  fontSize: "3vh",
                  fontWeight: "bold",
                  marginTop: "0.9rem",
                }}
              >
                HOW WE WORK
              </Typography>
              Our developers work on your project with a view to attain perfect
              planned development methodologies with seamless communication
              among other designer team. We believe in hand-code accelerated
              development with daily reporting of projects through online
              meetings and others communication mode. With us, achieve
              accomplishment and ongoing business growth.
            </Typography>
          </Grid>
          <Grid container md={12} lg={12} justify="center">
            <Grid item lg={4} md={4} sm={12} xs={12}>
              
            </Grid>
            <Grid item lg={4}>
              <Developers
                name="Rupesh Gaur"
                skill="Full Stack Developer"
                pic={Rupesh}
                className={classes.dev}
              />
            </Grid>
            <Grid item lg={4}>
              
            </Grid>
          </Grid>
          <Grid container md={12} lg={12} justify="center">
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Developers
                name="Parth Arora"
                skill="Full Stack Developer"
                pic={Parth}
                className={classes.dev}
              />
            </Grid>
            <Grid item lg={4}>
              <Developers
                name="Akriti Singhal"
                skill="Full Stack Developer"
                pic={Akriti}
                className={classes.dev}
              />
            </Grid>
            <Grid item lg={4}>
              <Developers
                name="Saurav Shrivastav"
                skill="Full Stack Developer"
                pic={Saurav}
              />
            </Grid>
          </Grid>
          <Grid container justify="center">
            <Grid item lg={4}>
              <Developers
                name="Priya Aggarwal"
                skill="FrontEnd Developer"
                pic={Priya}
              />
            </Grid>
            <Grid item lg={4}>
              <Developers
                name="Divanshu Agarwal"
                skill="App Developer"
                pic={Divanshu}
                className={classes.dev}
              />
            </Grid>
            <Grid item lg={4}>
              <Developers
                name="Paritosh Arora"
                skill="App Developer"
                pic={Paritosh}
              />
            </Grid>
          </Grid>
          <Grid container justify="center">
            <Grid item lg={4}>
              <Developers
                name="Harmanjit Singh"
                skill="Designer and Developer"
                pic={Harmanjit}
              />
            </Grid>
            <Grid item lg={4}>
              <Developers 
              name="Sushila Kaur" 
              skill="Designer" pic={Sushila} />
            </Grid>
            <Grid item lg={4}>
              <Developers
                name="Divyanshu Jindal"
                skill="App Developer"
                pic={Divyanshu}
              />
            </Grid>
          </Grid>
        </Grid>
       <Grid container>
          <ContactUsNew />
       </Grid>
      </div>
    </>
  );
};

export default About;
