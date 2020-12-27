import React from "react";
import { Typography, Paper, Grid } from "@material-ui/core";
import { useStyles } from "./ProductCardsStyles";
import { ALL_PRODUCTS } from "../../graphql/requests";
import { useQuery } from "@apollo/client";

const ProductCards = () => {

  const IMAGE_URL =
  "https://elasticbeanstalk-ap-south-1-487328506249.s3.ap-south-1.amazonaws.com/media/";

  const classes = useStyles();
  // const ProductList = [
  //   {
  //     basePrice: "7599",
  //     discountedPrice: "6000",
  //   },
  //   {
  //     basePrice: "7599",
  //     discountedPrice: "6000",
  //   },
  //   {
  //     basePrice: "7599",
  //     discountedPrice: "6000",
  //   },
  //   {
  //     basePrice: "7599",
  //     discountedPrice: "6000",
  //   },
  //   {
  //     basePrice: "7599",
  //     discountedPrice: "6000",
  //   },
  //   {
  //     basePrice: "7599",
  //     discountedPrice: "6000",
  //   },
  //   {
  //     basePrice: "7599",
  //     discountedPrice: "6000",
  //   },
  //   {
  //     basePrice: "7599",
  //     discountedPrice: "6000",
  //   },
  //   {
  //     basePrice: "7599",
  //     discountedPrice: "6000",
  //   },
  // ];

  const {data:products, loading, error} = useQuery(ALL_PRODUCTS);
  if(loading){
    return <p>Loading</p>
  }

  if(error){
    return <p style={{color: '#fff'}}>{error.message}</p>
  }
  
  console.log(products);
  return (
    <>
      {products.products.map((item, index) =>
        index < 9 ? (
          <Grid item xs={12} lg={4} md={4} sm={12} key={item.id}>
            <Grid container justify="center">
              <Grid item xs={12} lg={6} md={6} sm={12}>
                <Paper elevation={2} className={classes.paper}>
                  <Grid container justify="center">
                    <Grid item lg={12} md={12}>
                    <img className={classes.images} src={ `${IMAGE_URL}${item.image}`} alt="Products" />
                    </Grid>
                  </Grid>
                </Paper>
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
        ) : null
      )}
    </>
  );
};

export default ProductCards;
