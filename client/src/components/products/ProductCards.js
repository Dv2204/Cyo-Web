import React from "react";
import { Typography, Paper, Grid } from "@material-ui/core";
import { useStyles } from "./ProductCardsStyles";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { ALL_PRODUCTS } from "../../graphql/requests";
import { useQuery } from "@apollo/client";

const ProductCards = () => {
  const classes = useStyles();
  const ProductList = [
    {
      basePrice: "7599",
      discountedPrice: "6000",
    },
    {
      basePrice: "7599",
      discountedPrice: "6000",
    },
    {
      basePrice: "7599",
      discountedPrice: "6000",
    },
    {
      basePrice: "7599",
      discountedPrice: "6000",
    },
    {
      basePrice: "7599",
      discountedPrice: "6000",
    },
    {
      basePrice: "7599",
      discountedPrice: "6000",
    },
    {
      basePrice: "7599",
      discountedPrice: "6000",
    },
    {
      basePrice: "7599",
      discountedPrice: "6000",
    },
    {
      basePrice: "7599",
      discountedPrice: "6000",
    },
  ];

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
      {/* {ProductList.map((item, index) => */}
      {products.products.map((item, index) =>
        index < 9 ? (
          <Grid item xs={12} lg={4} md={4} key={item.id}>
            <Grid container justify="center">
              <Grid item xs={12} lg={6} md={6}>
                <Paper elevation={2} className={classes.paper}>
                  <Grid container justify="center">
                    <Grid item lg={12} md={12}>
                      {/* hi */}
                    </Grid>
                  </Grid>
                </Paper>
                <Typography variant="h5" className={classes.text}>
                  {/* <HiOutlineCurrencyRupee className={classes.icon} /> */}
                  ₹{item.discountedPrice} only
                </Typography>
                <Typography variant="caption" className={classes.mrp}>
                  {/* MRP: <HiOutlineCurrencyRupee />{" "} */}
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
