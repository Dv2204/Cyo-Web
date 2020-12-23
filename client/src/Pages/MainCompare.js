import React, {useState} from 'react';
import { useStyles } from "./PageStyles/MainCompareStyles";
import NavBar from '../components/compareNav/NavBarMain';
import {Grid, Typography} from "@material-ui/core";
// import Contact from '../components/contactUs/Contact';
import Sidebar from '../components/Sidebar/Sidebar';
import Accordion from '../components/dropdownCompare/Accordion';
import './PageStyles/compare.css';

const About = () => {
    const classes = useStyles();
    const[isOpen, setIsOpen] = useState(false)
  const toggle =() => {
      setIsOpen(!isOpen)
  }

    const [selectedIndex, SetSelectedIndex] = useState(0);
        return (
            <>
            <div style={{backgroundColor: 'rgba(248, 248, 248, 1)'}}>
                <Sidebar isOpen={isOpen} toggle={toggle}/>
                <NavBar toggle={toggle}/>
            
               <Grid container lg={12} md={12} justify="space-around" className={classes.top}>
                   <Grid item lg={4} md={4}>
                       <Typography variant="h4" justify="center">
                           Gym 1
                       </Typography>
                   </Grid>
                   <Grid item lg={4} md={4}>
                       <Typography variant="h4" justify="center">
                           Gym 2
                       </Typography>
                   </Grid>

               <Grid item xs={10} style={{margin:'5vh 1vw'}}>
                <Accordion className="accordion" selectedIndex={SetSelectedIndex} >
                    <div data-header="Description" className="accordion-item">

                    <Grid container lg={12} md={12} justify="space-around">
                    <Grid item lg={5} md={5}>
                       <Typography variant="body1" justify="center">
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus auctor eu platea dolor etiam vitae aliquam urna.Lorem ipsum dolor sit amet, 
                       consectetur adipiscing elit.Faucibus auctor eu platea dolor etiam vitae aliquam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                       Faucibus auctor eu platea dolor etiam vitae aliquam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus auctor eu platea dolor
                        etiam vitae aliquam urna.
                       </Typography>
                   </Grid>
                   <Grid item lg={5} md={5}>
                       <Typography variant="body1" justify="center" >
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus auctor eu platea dolor etiam vitae aliquam urna.Lorem ipsum dolor sit amet, 
                       consectetur adipiscing elit.Faucibus auctor eu platea dolor etiam vitae aliquam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit
                       .Faucibus auctor eu platea dolor etiam vitae aliquam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus auctor eu platea dolor 
                       etiam vitae aliquam urna.
                       </Typography>
                   </Grid>
                   </Grid>

                    </div>
                    <div data-header="Price Info" className="accordion-item">
                    <Grid container lg={12} md={12} justify="space-around">
                    <Grid item lg={5} md={5}>
                       <Typography variant="body1" justify="center">
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus auctor eu platea dolor etiam vitae aliquam urna.Lorem ipsum dolor sit amet, 
                       consectetur adipiscing elit.Faucibus auctor eu platea dolor etiam vitae aliquam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                       Faucibus auctor eu platea dolor etiam vitae aliquam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus auctor eu platea dolor
                        etiam vitae aliquam urna.
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus auctor eu platea dolor etiam vitae aliquam urna.Lorem ipsum dolor sit amet, 
                       consectetur adipiscing elit.Faucibus auctor eu platea dolor etiam vitae aliquam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                       Faucibus auctor eu platea dolor etiam vitae aliquam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus auctor eu platea dolor
                        etiam vitae aliquam urna.
                       </Typography>
                   </Grid>
                   <Grid item lg={5} md={5}>
                       <Typography variant="body1" justify="center" >
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus auctor eu platea dolor etiam vitae aliquam urna.Lorem ipsum dolor sit amet, 
                       consectetur adipiscing elit.Faucibus auctor eu platea dolor etiam vitae aliquam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit
                       .Faucibus auctor eu platea dolor etiam vitae aliquam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus auctor eu platea dolor 
                       etiam vitae aliquam urna.
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus auctor eu platea dolor etiam vitae aliquam urna.Lorem ipsum dolor sit amet, 
                       consectetur adipiscing elit.Faucibus auctor eu platea dolor etiam vitae aliquam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit
                       .Faucibus auctor eu platea dolor etiam vitae aliquam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus auctor eu platea dolor 
                       etiam vitae aliquam urna.
                       </Typography>
                   </Grid>
                   </Grid>
                    </div>
                    <div data-header="Trainers" className="accordion-item">
                    <Grid container lg={12} md={12} justify="space-around">
                    <Grid item lg={5} md={5}>
                       <Typography variant="body1" justify="center">
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus auctor eu platea dolor etiam vitae aliquam urna.Lorem ipsum dolor sit amet, 
                       consectetur adipiscing elit.Faucibus auctor eu platea dolor etiam vitae aliquam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                       Faucibus auctor eu platea dolor etiam vitae aliquam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus auctor eu platea dolor
                        etiam vitae aliquam urna.
                       </Typography>
                   </Grid>
                   <Grid item lg={5} md={5}>
                       <Typography variant="body1" justify="center" >
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus auctor eu platea dolor etiam vitae aliquam urna.Lorem ipsum dolor sit amet, 
                       consectetur adipiscing elit.Faucibus auctor eu platea dolor etiam vitae aliquam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit
                       .Faucibus auctor eu platea dolor etiam vitae aliquam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus auctor eu platea dolor 
                       etiam vitae aliquam urna.
                       </Typography>
                   </Grid>
                   </Grid>
                    </div>
                    <div data-header="Machines" className="accordion-item">
                    <Grid container lg={12} md={12} justify="space-around">
                    <Grid item lg={5} md={5}>
                       <Typography variant="body1" justify="center">
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus auctor eu platea dolor etiam vitae aliquam urna.Lorem ipsum dolor sit amet, 
                       consectetur adipiscing elit.Faucibus auctor eu platea dolor etiam vitae aliquam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                       Faucibus auctor eu platea dolor etiam vitae aliquam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus auctor eu platea dolor
                        etiam vitae aliquam urna.
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus auctor eu platea dolor etiam vitae aliquam urna.Lorem ipsum dolor sit amet, 
                       consectetur adipiscing elit.Faucibus auctor eu platea dolor etiam vitae aliquam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                       Faucibus auctor eu platea dolor etiam vitae aliquam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus auctor eu platea dolor
                        etiam vitae aliquam urna.
                       </Typography>
                   </Grid>
                   <Grid item lg={5} md={5}>
                       <Typography variant="body1" justify="center" >
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus auctor eu platea dolor etiam vitae aliquam urna.Lorem ipsum dolor sit amet, 
                       consectetur adipiscing elit.Faucibus auctor eu platea dolor etiam vitae aliquam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit
                       .Faucibus auctor eu platea dolor etiam vitae aliquam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus auctor eu platea dolor 
                       etiam vitae aliquam urna.
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus auctor eu platea dolor etiam vitae aliquam urna.Lorem ipsum dolor sit amet, 
                       consectetur adipiscing elit.Faucibus auctor eu platea dolor etiam vitae aliquam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit
                       .Faucibus auctor eu platea dolor etiam vitae aliquam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus auctor eu platea dolor 
                       etiam vitae aliquam urna.
                       </Typography>
                   </Grid>
                   </Grid>
                    </div>
                    <div data-header="Time Slots" className="accordion-item">
                    <Grid container lg={12} md={12} justify="space-around">
                    <Grid item lg={5} md={5}>
                       <Typography variant="body1" justify="center">
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus auctor eu platea dolor etiam vitae aliquam urna.Lorem ipsum dolor sit amet, 
                       consectetur adipiscing elit.Faucibus auctor eu platea dolor etiam vitae aliquam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                       Faucibus auctor eu platea dolor etiam vitae aliquam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus auctor eu platea dolor
                        etiam vitae aliquam urna.
                       </Typography>
                   </Grid>
                   <Grid item lg={5} md={5}>
                       <Typography variant="body1" justify="center" >
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus auctor eu platea dolor etiam vitae aliquam urna.Lorem ipsum dolor sit amet, 
                       consectetur adipiscing elit.Faucibus auctor eu platea dolor etiam vitae aliquam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit
                       .Faucibus auctor eu platea dolor etiam vitae aliquam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus auctor eu platea dolor 
                       etiam vitae aliquam urna.
                       </Typography>
                   </Grid>
                   </Grid>
                    </div>
                    </Accordion>
                </Grid>
                </Grid>
                
              {/* <hr className={classes.line}/>
                 <Chip className={classes.btn} label="Trainers"></Chip>
                  <hr className={classes.line}/>
                 <Chip className={classes.btn} label="Price Info"></Chip>
                  */}
          </div>
           

            </>
        )
}

export default About
