import React from 'react';
import Cards from './components/cards/Cards';
import {Grid, Container} from "@material-ui/core";
import LandingPage from './Pages/LandingPage';
import Main from './components/mainPage/Main';
import Carousel from './components/carousel/Carousel';

function App() {
  return (
    <div style={{backgroundColor: '#fff'}}>
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
    </Container>
    </div>
  );
}

export default App;
