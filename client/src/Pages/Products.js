import React from 'react';
import {Grid, Container, Typography} from "@material-ui/core";
import NavBar from '../components/productsNav/NavBarMain';
import { useStyles } from "./PageStyles/ProductsStyles";
import Contact from '../components/contactUs/Contact';
import ProductsSearch from '../components/productsSearch/ProductsSearch';
import ProductsPageCards from '../components/productsPageCards/ProductsPageCards';


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
            <Container fixed >
            <Grid container lg={12} md={12} style={{marginBottom: '5rem'}} >
                <ProductsPageCards />
            </Grid>
            </Container>
            <Grid container>
            <Contact />
          </Grid>
        </div>
    )
}

export default Products;
