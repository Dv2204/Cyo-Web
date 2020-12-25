import React, {useState} from "react";
import top from "../assets/about.png";
import { useStyles } from "./PageStyles/AboutStyles";
import AboutNavBar from "../components/Nav/AboutNav";
import { Grid, Typography } from "@material-ui/core";
import Contact from "../components/contactUs/Contact";
import Developers from "../components/developers/Developers";
import Parth from "../assets/parth.jpg";
import Akriti from "../assets/Akriti.jpg";
import Divanshu from "../assets/Divanshu.jpg";
import Paritosh from "../assets/Paritosh.jpg";
import Harmanjit from "../assets/Harmanjit.jpg";
import Sushila from "../assets/Sushila.jpeg";
import Saurav from "../assets/Saurav.jpg";
import Priya from "../assets/Priya.jpeg";
import Divyanshu from "../assets/Divyanshu.jpg";
import Sidebar from '../components/Sidebar/Sidebar';


const About = () => {
  const classes = useStyles();
  const[isOpen, setIsOpen] = useState(false)

  const toggle =() => {
      setIsOpen(!isOpen)
  }
  return (
    <>
      <div style={{ backgroundColor: "rgba(248, 248, 248, 1)" }}>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <AboutNavBar toggle={toggle}/>
        <Grid container md={12} lg={12} justify="center">
          <img src={top} alt="topBg" className={classes.top} />
          <Typography variant="h2" className={classes.head}>
            ABOUT DEVELOPERS
          </Typography>
          <Grid item lg={7} md={7} justify="center">
            <Typography  className={classes.body} style={{ textAlign: "center", marginBottom: "10vh" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
              risus, mattis et nec adipiscing facilisi nisl odio tincidunt.
              Sapien quis amet, neque ut rhoncus dictum nisi, ultricies nec.
              Senectus rhoncus sed accumsan varius nunc faucibus tempor nulla.
              Neque et tortor velit, hendrerit faucibus. Lorem morbi curabitur
              ac faucibus ac. Pellentesque vitae dolor ipsum varius at sodales
              scelerisque nibh. Mauris elit leo nunc sit semper et. Amet
              dignissim neque morbi ipsum felis justo, nibh nunc neque. Aliquet
              libero accumsan proin arcu faucibus amet. Neque et tortor velit,
              hendrerit faucibus. Lorem morbi curabitur ac faucibus ac.
              Pellentesque vitae dolor ipsum varius at sodales scelerisque nibh.
              Mauris elit leo nunc sit semper et. Amet dignissim neque morbi
              ipsum felis justo, nibh nunc neque. Aliquet libero accumsan proin
              arcu faucibus amet. elit leo nunc sit semper et. Aliquet libero
              accumsan proin arcu faucibus amet. Neque et tortor velit,
              hendrerit faucibus.
            </Typography>
          </Grid>
          <Grid container justify="center">
            <Grid item lg={4}>
              <Developers
                name="Parth Arora"
                skill="Full Stack Developer"
                pic={Parth}
              />
            </Grid>
            <Grid item lg={4}>
              <Developers
                name="Akriti Singhal"
                skill="Full Stack Developer"
                pic={Akriti}
              />
            </Grid>
            <Grid item lg={4}>
              <Developers
                name="Divanshu Agarwal"
                skill="App Developer"
                pic={Divanshu}
              />
            </Grid>
          </Grid>
          <Grid container justify="center">
            <Grid item lg={4}>
              <Developers
                name="Paritosh Arora"
                skill="App Developer"
                pic={Paritosh}
              />
            </Grid>
            <Grid item lg={4}>
              <Developers
                name="Harmanjit Singh"
                skill="Designer"
                pic={Harmanjit}
              />
            </Grid>
            <Grid item lg={4}>
              <Developers name="Sushila Kaur" skill="Designer" pic={Sushila} />
            </Grid>
          </Grid>
          <Grid container justify="center">
            <Grid item lg={4}>
              <Developers
                name="Saurav Shrivastav"
                skill="Backend Developer"
                pic={Saurav}
              />
            </Grid>
            <Grid item lg={4}>
              <Developers
                name="Priya Aggarwal"
                skill="FrontEnd Developer"
                pic={Priya}
              />
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
        <Contact />
      </div>
    </>
  );
};

export default About;
