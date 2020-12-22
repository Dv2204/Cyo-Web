import React, {useState} from 'react';
import {Grid, Container, Typography} from "@material-ui/core";
import NavBar from '../components/productsNav/NavBarMain';
import { useStyles } from "./PageStyles/ProductsStyles";
import Contact from '../components/contactUs/Contact';
import ProductsSearch from '../components/productsSearch/ProductsSearch';
import ProductsPageCards from '../components/productsPageCards/ProductsPageCards';
import Sidebar from '../components/Sidebar/Sidebar';


const Products = () => {
    const classes = useStyles();
    const[isOpen, setIsOpen] = useState(false)

    const toggle =() => {
        setIsOpen(!isOpen)
    }
    return(
        <div style={{backgroundColor: 'rgba(248, 248, 248, 1)'}}>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <NavBar toggle={toggle}/>
        <Grid container xs={12} lg={12} md={12}>
                <Grid item xs={12} lg={12} md={12} >
                    <Typography variant="h2" className={classes.text}  justify="center" >
                        EXPLORE OUR PRODUCTS
                    </Typography>
                </Grid>
            </Grid>
            <Grid container xs={12} md={12} lg={12} justify="center">
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
