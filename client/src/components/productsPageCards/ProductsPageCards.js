import React, { useState } from "react";
import { Typography, Paper, Grid } from "@material-ui/core";
import { useStyles } from "./ProductsPageCardsStyles";
import { ALL_PRODUCTS } from "../../graphql/requests";
import { IMAGE_URL } from "../../graphql/requests";
import { useQuery, useLazyQuery } from "@apollo/client";
import Loader from "../Loader";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { SEARCH_PRODUCT } from "../../graphql/requests";
import Slide from "react-reveal/Slide";

const ProductPageCards = () => {
  const classes = useStyles();
  const [searchText, setText] = useState(" ");
  const [isShown, setIsShown] = useState(false);
  const {
    data: products,
    loading: productsLoading,
    error: productsError,
  } = useQuery(ALL_PRODUCTS);
  const [
    getProducts,
    {
      data: filteredProduct,
      loading: filteredProductLoading,
      error: filteredProductError,
    },
  ] = useLazyQuery(SEARCH_PRODUCT, {
    variables: { search: searchText },
  });
  if (productsLoading || filteredProductLoading) {
    return (
      <Grid
        container
        lg={12}
        md={12}
        justify="center"
        style={{ margin: "5rem" }}
      >
        <Grid item lg={3} md={3} justify="center">
          <Loader color="#FB5B21" />
        </Grid>
      </Grid>
    );
  }

  if (productsError) {
    return <p style={{ color: "#fff" }}>{productsError.message}</p>;
  }
  if (filteredProductError) {
    return <p style={{ color: "#fff" }}>{filteredProductError.message}</p>;
  }

  console.log(products);
  const clearFilter = () => {
    setText(" ");
  };
  return (
    <>
      <Grid container xs={12} lg={12} md={12} justify="center">
        <Grid xs={6} sm={6} lg={8} md={8}>
          <Paper className={classes.root} elevation={2}>
            <InputBase
              className={classes.input}
              placeholder="Search"
              onChange={(e) => setText(e.target.value)}
            />
            <IconButton
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
              className={classes.iconButton}
              onClick={() => getProducts()}
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>
        <Grid item xs={3} lg={2} sm={4} md={2}>
          <Typography
            variant="h5"
            onClick={() => clearFilter()}
            className={classes.filter}
          >
            Clear filter
          </Typography>
        </Grid>
      </Grid>
      <Grid container lg={9} md={9} justify="flex-end">
        <Grid item lg={1} md={1} justify="flex-end">
          {isShown && <div className={classes.hover}> Search Products</div>}
        </Grid>
      </Grid>

      {filteredProduct?.searchProduct?.length > 0
        ? filteredProduct.searchProduct.map((item, index) => (
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
          ))
        : products.products.map((item, index) => (
            <Grid item xs={12} lg={4} md={4} sm={4} key={item.id}>
              <Grid container justify="center">
                <Grid item xs={10} lg={6} md={6} sm={12}>
                  <Slide bottom>
                    <Paper elevation={2} className={classes.paper}>
                      <Grid container justify="center">
                        <Grid item lg={12} sm={12} md={12}>
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
          ))}
    </>
  );
};

export default ProductPageCards;
