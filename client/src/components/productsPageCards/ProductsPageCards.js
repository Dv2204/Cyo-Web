import React from "react";
import { Typography, Paper, Grid } from "@material-ui/core";
import { useStyles } from "./ProductsPageCardsStyles";
import { ALL_PRODUCTS } from "../../graphql/requests";
import { IMAGE_URL } from "../../graphql/requests";
import { useQuery } from "@apollo/client";
import Loader from '../Loader';

const ProductPageCards = () => {
  const classes = useStyles();
  const {data:products, loading, error} = useQuery(ALL_PRODUCTS);
  if(loading){
    return (
      <Grid container lg={12} md={12} justify="center" style={{margin: '3rem'}}>
        <Grid item lg={3} md={3} justify="center">
        <Loader  />
        </Grid>
      </Grid>
    )
  }

  if(error){
    return <p style={{color: '#fff'}}>{error.message}</p>
  }
  
  console.log(products);
  return (
    <>
      {products.products.map((item, index) =>
          <Grid item xs={12} lg={4} md={4} key={item.id}>
            <Grid container justify="center">
              <Grid item xs={12} lg={6} md={6}>
                <Paper elevation={2} className={classes.paper}>
                  <Grid container justify="center">
                    <Grid item lg={12} md={12}>
                    <img className={classes.images} src={ `${IMAGE_URL}${item.image}`} alt="Products" />
                    </Grid>
                  </Grid>
                </Paper>
                <Typography variant="h5" className={classes.title}>
                  {item.title}
                </Typography>
                <Typography variant="h5" className={classes.text}>
                  ₹{item.discountedPrice} only
                </Typography>
                <Typography variant="caption" className={classes.mrp}>
                  <span style={{ textDecoration: "line-through" }}>
                    {" "}
                   MRP: ₹{item.basePrice}
                  </span>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
      )}
    </>
  );
};

export default ProductPageCards;
