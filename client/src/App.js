import React from 'react';
import Cards from './components/cards/Cards';
import {Grid, Container} from "@material-ui/core";


function App() {
  return (
    <div style={{backgroundColor: '#fff'}}>
    <Container fixed>
    <Grid container>
      <Grid item lg={3}>
      <Cards />
      </Grid>
    </Grid>
    </Container>
    </div>
  );
}

export default App;
