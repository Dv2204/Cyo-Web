import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import { useStyles } from "./CarouselStyles";
import pic from "../../assets/1.jpg";
import compare from "../../assets/compare.jpg";

const breakPoints = [{ width: 1, itemsToShow: 1 }];

const CarouselComp = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.carousel}>
        <Carousel breakPoints={breakPoints}>
          <Item>
            <img src={pic} alt="Gym"></img>
          </Item>
          <Item>
            <img src={compare} alt="Gym"></img>
          </Item>
          <Item>
            <img src={pic} alt="Gym"></img>
          </Item>
          <Item>
            <img src={compare} alt="Gym"></img>
          </Item>
          <Item>
            <img src={pic} alt="Gym"></img>
          </Item>
          <Item>
            <img src={compare} alt="Gym"></img>
          </Item>
          <Item>
            <img src={pic} alt="Gym"></img>
          </Item>
          <Item>
            <img src={compare} alt="Gym"></img>
          </Item>
          <Item>
            <img src={pic} alt="Gym"></img>
          </Item>
        </Carousel>
      </div>
    </>
  );
};

export default CarouselComp;
