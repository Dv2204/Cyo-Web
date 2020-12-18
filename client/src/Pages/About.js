import React from 'react';
import top from '../assets/about.png';
import { useStyles } from "./PageStyles/AboutStyles";
import NavBar from '../components/Nav/NavBarMain';
import {Grid, Container, Typography} from "@material-ui/core";
import Contact from '../components/contactUs/Contact';
import Developers from '../components/developers/Developers';

const About = () => {
    const classes = useStyles();
        return (
            <>
            <div style={{backgroundColor: 'rgba(248, 248, 248, 1)'}}>
                <NavBar/>
                <Grid container md={12} lg={12} justify="center">
                    <img src={top} alt="topBg" className={classes.top} />  
                <Typography variant="h2" className={classes.head} >
                    ABOUT DEVELOPERS
                    </Typography> 
                    <Grid item lg={7} md={7} justify="center">
                        <Typography style={{textAlign:'center', marginBottom:'10vh'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit risus, mattis et nec adipiscing facilisi nisl odio tincidunt. Sapien quis amet, 
                        neque ut rhoncus dictum nisi, ultricies nec. Senectus rhoncus sed accumsan varius nunc faucibus tempor nulla. Neque et tortor velit, hendrerit 
                        faucibus. Lorem morbi curabitur ac faucibus ac. Pellentesque vitae dolor ipsum varius at sodales scelerisque nibh. Mauris elit leo nunc sit
                        semper et. Amet dignissim neque morbi ipsum felis justo, nibh nunc neque. Aliquet libero accumsan proin arcu faucibus amet. Neque et tortor 
                        velit, hendrerit faucibus. Lorem morbi curabitur ac faucibus ac. Pellentesque vitae dolor ipsum varius at sodales scelerisque nibh. Mauris 
                        elit leo nunc sit semper et. Amet dignissim neque morbi ipsum felis justo, nibh nunc neque. Aliquet libero accumsan proin arcu faucibus amet.
                        elit leo nunc sit semper et. Aliquet libero accumsan proin arcu faucibus amet. Neque et tortor velit, hendrerit faucibus.
                        </Typography>
                    </Grid>
                    <Grid container>
                        <Developers />
                    </Grid>
                </Grid>
            <Contact />
            </div>
            </>
        )
}

export default About
