import React from 'react';
import { Avatar, Typography,Paper,Grid, Container} from '@material-ui/core';
import { useStyles } from "./ProductCardsStyles";
import { HiOutlineCurrencyRupee } from "react-icons/hi";


const ProductCards = () => {
    const classes = useStyles();
    const ProductList = [
        {
            current: '7500',
            mrp: '9000'
        },
        {
            current: '6500',
            mrp: '8000'
        },
        {
            current: '7500',
            mrp: '9000'
        },
        {
            current: '6500',
            mrp: '8000'
        },
        {
            current: '7500',
            mrp: '9000'
        },
        {
            current: '6500',
            mrp: '8000'
        },
        {
            current: '7500',
            mrp: '9000'
        },
        {
            current: '6500',
            mrp: '8000'
        },
        {
            current: '7500',
            mrp: '9000'
        },
    ];
    return(
        <>
        {ProductList.map((item, index) => (
        <Grid item lg={4} md={4} >
        <Grid container justify="center">
            <Grid item lg={6} md={6}>
            <Paper elevation={2} className={classes.paper}>
               <Grid container justify="center">
                    <Grid item lg={12} md={12}>
                    {/* hi */}
                    </Grid>
                </Grid>
           </Paper>
           <Typography variant="h5" className={classes.text}>
           <HiOutlineCurrencyRupee className={classes.icon}/>
               {item.current} only
           </Typography>
           <Typography variant="caption" className={classes.mrp} >
               MRP: <span style={{textDecoration: 'line-through'}}> {item.mrp}</span>
           </Typography>
            </Grid>
        </Grid>
        </Grid>
        ))}
        </>
    )
}

export default ProductCards;