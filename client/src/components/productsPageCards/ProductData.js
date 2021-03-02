import React from "react";
import { Typography, Grid, Paper} from "@material-ui/core";
import { useStyles } from "./ProductsPageCardsStyles";
import { IMAGE_URL } from "../../graphql/requests";
import Slide from "react-reveal/Slide";

const ProductData = ({ item }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} lg={4} md={4} sm={4} key={item.id}>
              <Grid container justify="center">
                <Grid item xs={10} lg={6} md={6} sm={12}>
                  <Slide bottom>
                    <Paper elevation={2} className={classes.paper}>
                      <Grid container justify="center">
                        <Grid item lg={12} md={12} sm={12}>
                          <img
                            className={classes.images}
                            src={`${IMAGE_URL}${item.image}`}
                            alt="Products"
                          />
                        </Grid>
                      </Grid>
                    </Paper>
                  </Slide>
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
  );
};

export default ProductData;
