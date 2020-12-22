import React from "react";
import { Typography, Paper, Grid } from "@material-ui/core";
import { useStyles } from "./ProductCardsStyles";
import { HiOutlineCurrencyRupee } from "react-icons/hi";

const ProductCards = () => {
  const classes = useStyles();
  const ProductList = [
    {
      current: "7599",
      mrp: "8000",
    },
    {
      current: "6599",
      mrp: "8000",
    },
    {
      current: "8599",
      mrp: "9000",
    },
    {
      current: "1299",
      mrp: "2000",
    },
    {
      current: "2599",
      mrp: "2600",
    },
    {
      current: "4000",
      mrp: "4500",
    },
    {
      current: "2000",
      mrp: "2400",
    },
    {
      current: "4300",
      mrp: "4999",
    },
    {
      current: "4599",
      mrp: "5000",
    },
    {
      current: "5000",
      mrp: "6399",
    },
    {
      current: "4000",
      mrp: "4299",
    },
    {
      current: "2355",
      mrp: "2999",
    },
  ];
  return (
    <>
      {ProductList.map((item, index) =>
        index < 9 ? (
          <Grid item xs={12} lg={4} md={4}>
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
                  <HiOutlineCurrencyRupee className={classes.icon} />
                  {item.current} only
                </Typography>
                <Typography variant="caption" className={classes.mrp}>
                  MRP: <HiOutlineCurrencyRupee />{" "}
                  <span style={{ textDecoration: "line-through" }}>
                    {" "}
                    {item.mrp}
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
