import React from "react";
import { useQuery } from "@apollo/client";
import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import {useStyles} from './DropdownStyles.js';
import {  Grid } from "@material-ui/core";
import { PRODUCT_CATEGORY } from "../../graphql/requests";
import Loader from "../Loader";


const ProductsDropdown = () => {
    const classes = useStyles();
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

  return (
         <Menu menuButton={<MenuButton>Category</MenuButton>}>
    {categoryData.category.map((item, index) => (
        <MenuItem>{item.categoryName}</MenuItem>
    ))}
    </Menu>
  );
}

export default ProductsDropdown;
