import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { Grid, Chip } from "@material-ui/core";
import { PRODUCT_CATEGORY } from "../../graphql/requests";
import Loader from "../Loader";
import { useStyles } from "./DropdownStyles";

const ProductsDropdown = () => {
  const classes = useStyles();
  const [showMenu, setShowMenu] = useState(false);
  const handleChange = (e) => {
    setShowMenu(!showMenu);
  };
  const {
    data: categoryData,
    loading: categoryLoading,
    error: categoryError,
  } = useQuery(PRODUCT_CATEGORY);

  if (categoryLoading) {
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

  if (categoryError) {
    return <p style={{ color: "#fff" }}>{categoryError.message}</p>;
  }

const handleClick = (id) => {
  const catid = id
  console.log(catid)
}
  return (
    <>
      <Chip
        onClick={handleChange}
        className={classes.menu}
        label="Category"
      />
      {showMenu ? (
        <div className={classes.menuitems}>
          {categoryData.category.map((item, index) => (
            <Chip key={index} className={classes.menuchip} onClick={() => handleClick(item.id)} label={item.categoryName} />
          ))}
        </div>
      ) : null}
    </>
  );
};

export default ProductsDropdown;
