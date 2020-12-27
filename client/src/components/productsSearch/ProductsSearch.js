import React, {useState} from 'react';
import { Paper, Grid, Typography} from '@material-ui/core';
import { useStyles } from "./ProductsSearchStyles";
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { SEARCH_PRODUCT } from "../../graphql/requests";
import { useQuery } from "@apollo/client";
import { ALL_PRODUCTS } from "../../graphql/requests";
import { IMAGE_URL } from "../../graphql/requests";


const ProductsSearch = () => {
    const classes = useStyles();
    const [searchText, setText] = useState(" ");
    const { data: products, loading, error } = useQuery(SEARCH_PRODUCT, {
      variables: {
        search: searchText,
      },
    });

    const handleChange = (e) => {
      setText(e.target.value)
    }

    return(
                    <Grid container xs={12} lg={12} md={12} justify="center" >
                        <Grid xs={6} lg={8} md={8}>
                             <Paper component="form" className={classes.root} elevation={2}>
                              <InputBase
                                className={classes.input}
                                placeholder="Search"
                                inputProps={{ 'aria-label': 'Search' }}
                                onChange={handleChange}
                              />
                              <IconButton type="submit" onChange={event => setText(event.target.value)} className={classes.iconButton} aria-label="search">
                                <SearchIcon />
                              </IconButton>
                             { console.log(setText)}
                            </Paper>
                        </Grid>
                        <Grid item xs={1} lg={2} md={2}>
                        <Typography variant="h5" className={classes.filter}>filter</Typography>
                        </Grid>
                    </Grid>         
    )
}

export default ProductsSearch;
