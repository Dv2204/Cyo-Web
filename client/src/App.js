import React from 'react';
import Cards from './components/cards/Cards';
import {Grid, Container} from "@material-ui/core";
import LandingPage from './Pages/LandingPage';
import Main from './components/mainPage/Main';
import Carousel from './components/carousel/Carousel';
import Products from './components/products/Products';
import ViewMore from './components/more/More';

function App() {
  return (
    <div style={{backgroundColor: 'rgba(248, 248, 248, 1)'}}>
    <LandingPage />
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
    <Grid container style={{marginTop: '8rem'}}>
     <Products/>
     </Grid>
    </div>
  );
}

export default App;
