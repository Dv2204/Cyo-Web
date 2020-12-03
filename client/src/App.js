import React from 'react';
import Cards from './components/cards/Cards';
import {Grid, Container} from "@material-ui/core";
import LandingPage from './Pages/LandingPage';

function App() {
  return (
    <div style={{backgroundColor: '#fff'}}>
    <LandingPage />
    <Container fixed>
    <Grid container spacing={8}>
      <Cards />
    </Grid>
    </Container>
    </div>
  );
}

export default App;
