import React from 'react';
import {Grid, Container, Typography} from "@material-ui/core";
import NavBar from '../components/Nav/NavBarMain';
import { useStyles } from "./PageStyles/ProductsStyles";
import Contact from '../components/contactUs/Contact';
import ProductsSearch from '../components/productsSearch/ProductsSearch';


const Products = () => {
    const classes = useStyles();
    return(
        <div style={{backgroundColor: 'rgba(248, 248, 248, 1)'}}>
         <NavBar/>
        <Grid container lg={12} md={12}>
                <Grid item lg={12} md={12} >
                    <Typography variant="h2" className={classes.text}  justify="center" >
                        EXPLORE OUR PRODUCTS
                    </Typography>
                </Grid>
            </Grid>
            <Grid container md={12} lg={12} justify="center">
                <Grid item lg={7} md={7} justify="center">
                    <ProductsSearch/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Products;
