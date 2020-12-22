import React, {useState} from 'react';
import {Grid, Container, Typography} from "@material-ui/core";
import NavBar from '../components/gymDetailsNav/NavBarMain';
import { useStyles } from "./PageStyles/GymDetailsStyles";
import Contact from '../components/contactUs/Contact';
import Sidebar from '../components/Sidebar/Sidebar';

const GymDetails = () => {
  const classes = useStyles();
  const[isOpen, setIsOpen] = useState(false)

  const toggle =() => {
      setIsOpen(!isOpen)
  }
    return(
      <div style={{backgroundColor: 'rgba(248, 248, 248, 1)'}}>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
        <NavBar toggle={toggle}/>
        <Grid container>
            <Contact />
          </Grid>
      </div>
    )
}

export default GymDetails;
