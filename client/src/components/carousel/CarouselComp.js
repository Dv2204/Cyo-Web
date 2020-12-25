import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import { useStyles } from "./CarouselStyles";
import pic from "../../assets/1.jpg";
import compare from "../../assets/compare.jpg";
import { LANDING_IMAGE } from "../../graphql/requests";
import { useQuery } from "@apollo/client";



const breakPoints = [
  { width: 1, itemsToShow: 1 },
  // { width: 550, itemsToShow: 2 },
  // { width: 768, itemsToShow: 3 },
  // { width: 1200, itemsToShow: 4 },
];


const CarouselComp = () => {
  const classes = useStyles();
  const {data:landingImage, loading, error} = useQuery(LANDING_IMAGE);
if(loading){
  return <p>Loading</p>
}

if(error){
  return <p style={{color: '#fff'}}>{error.message}</p>
}

console.log(landingImage);
  return (
    <>
      <div className={classes.carousel}>
        <Carousel breakPoints={breakPoints}>
          <Item><img src={landingImage.image} alt="Gym"></img></Item>
          <Item><img src={landingImage.image} alt="Gym"></img></Item>
          <Item><img src={landingImage.image} alt="Gym"></img></Item>
          <Item><img src={compare}  alt="Gym"></img></Item>
          <Item><img src={pic} alt="Gym"></img></Item>
          {/* <Item><img src={compare} alt="Gym"></img></Item>
          <Item><img src={pic} alt="Gym"></img></Item>
          <Item><img src={compare} alt="Gym"></img></Item>
          <Item><img src={pic} alt="Gym"></img></Item>
          <Item><img src={compare} alt="Gym"></img></Item>
          <Item><img src={pic} alt="Gym"></img></Item> */}
        </Carousel>
      </div>
    </>
  );
}

export default CarouselComp;