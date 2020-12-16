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

const LandingPage = () => {
            return (
                <div style={{backgroundColor: 'rgba(248, 248, 248, 1)'}}>
                {/* <LandingPage /> */}
                <NavBar/>
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
                 
                </div>
              );
}

export default LandingPage;