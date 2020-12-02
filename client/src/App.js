import React from 'react';
import Cards from './components/cards/Cards';
import {Grid, Container} from "@material-ui/core";


function App() {
  return (
    <Container fixed>
    <Grid container>
      <Grid item lg={3}>
      <Cards />
      </Grid>
    </Grid>
    </Container>
  );
}

export default App;
