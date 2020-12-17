import React from 'react';
import { Paper, Grid, Typography} from '@material-ui/core';
import { useStyles } from "./ProductsSearchStyles";
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';


const ProductsSearch = () => {
    const classes = useStyles();
  
  const [value, setValue] = React.useState(null);

    return(
        //  <Paper justify="center" classsName={classes.paper}>
                    <Grid container lg={12} md={12} justify="center">
                        <Grid lg={8} md={8}>
                             <Paper component="form" className={classes.root} elevation={2}>
                              <InputBase
                                className={classes.input}
                                placeholder="Search"
                                inputProps={{ 'aria-label': 'Search' }}
                              />
                              <IconButton type="submit" className={classes.iconButton} aria-label="search">
                                <SearchIcon />
                              </IconButton>
                            </Paper>
                        </Grid>
                        <Grid item lg={2} md={2}>
                        <Typography variant="h5" className={classes.filter}>filter</Typography>
                        </Grid>
                        
                    </Grid>
                    // </Paper>          
    )
}

export default ProductsSearch;
