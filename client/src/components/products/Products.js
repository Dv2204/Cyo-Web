import React from 'react';
import { Typography,Grid, Container} from '@material-ui/core';
import { useStyles } from "./ProductsStyles";
import ProductCards from './ProductCards';

const Products = () => {
    const classes = useStyles();
    return(
            <Grid item lg={12} md={12} style={{backgroundColor: '#3F3F3F'}}>
            <Grid container lg={12} md={12} justify="center">
                <Grid item lg={6} md={6}>
                    <Typography variant="h3" className={classes.heading} id="products">
                        EXPLORE OUR PRODUCTS
                    </Typography>
                </Grid>
            </Grid>
            <Container fixed>
            <Grid container lg={12} md={12} >
                <ProductCards />
            </Grid>
            </Container>
            </Grid>
        
    )
}

export default Products;