import React from 'react';
import Cards from '../components/cards/Cards';
import {Grid, Container} from "@material-ui/core";
import Main from '../components/mainPage/Main';
import Carousel from '../components/carousel/Carousel';
import Products from '../components/products/Products';
import ViewMoreProducts from '../components/products/ViewMoreProducts';
import ViewMore from '../components/more/More';
import ConnectWithUs from '../components/connect/ConnectWithUs';
import NavBar from '../components/Nav/NavBarMain';
import Contact from '../components/contactUs/Contact';
import '../components/Nav/navbar.css';
import phone from '../assets/phoneview-01.png';
import './PageStyles/landingpage.css';

const LandingPage = () => {
    return (
      <div>
      <img src={phone} alt="phone" className="phoneview" style={{display:'none'}} />
        <div style={{backgroundColor: 'rgba(248, 248, 248, 1)'}} className="bla">
        {/* <LandingPage /> */}
        <NavBar />
        <Grid container>
          <Main />
        </Grid>
        <Grid container>
          <Carousel/>
        </Grid>
        <Container fixed>
        <Grid container spacing={8} style={{marginTop: '0.2rem'}}>
          <Cards />
        </Grid>
        <ViewMore/>
        </Container>
        <Grid container style={{marginTop: '8rem', backgroundColor: '#3F3F3F'}}>
          <Products/>
          <ViewMoreProducts />
          </Grid>
          <Grid container>
            <ConnectWithUs />
          </Grid>
          <Grid container>
            <Contact />
          </Grid>
          
        </div>
        </div>
      );
}

export default LandingPage;