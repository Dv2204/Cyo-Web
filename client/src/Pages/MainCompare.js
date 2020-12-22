import React, {useState} from 'react';
import { useStyles } from "./PageStyles/MainCompareStyles";
import NavBar from '../components/compareNav/NavBarMain';
import {Grid, Typography, Chip} from "@material-ui/core";
import Contact from '../components/contactUs/Contact';
import Sidebar from '../components/Sidebar/Sidebar';

const About = () => {
    const classes = useStyles();
    const[isOpen, setIsOpen] = useState(false)

  const toggle =() => {
      setIsOpen(!isOpen)
  }
        return (
            <>
            <div style={{backgroundColor: 'rgba(248, 248, 248, 1)'}}>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <NavBar toggle={toggle}/>
               <Grid container lg={12} md={12} justify="space-around" className={classes.top}>
                   <Grid item lg={5} md={5}>
                       <Typography variant="h3">
                           Gym 1
                       </Typography>
                       <Typography variant="body1" justify="center">
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus auctor eu platea dolor etiam vitae aliquam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus auctor eu platea dolor etiam vitae aliquam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus auctor eu platea dolor etiam vitae aliquam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus auctor eu platea dolor etiam vitae aliquam urna.
                       </Typography>
                   </Grid>
                   <Grid item lg={5} md={5}>
                       <Typography variant="h3">
                           Gym 2
                       </Typography>
                       <Typography variant="body1" justify="center" className={classes.body}>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus auctor eu platea dolor etiam vitae aliquam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus auctor eu platea dolor etiam vitae aliquam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus auctor eu platea dolor etiam vitae aliquam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus auctor eu platea dolor etiam vitae aliquam urna.
                       </Typography>
                   </Grid>
               </Grid>
               <hr className={classes.line}/>
                 <Chip className={classes.btn} label="Trainers"></Chip>
                  <hr className={classes.line}/>
                 <Chip className={classes.btn} label="Price Info"></Chip>
            <Contact />
            </div>
            </>
        )
}

export default About
