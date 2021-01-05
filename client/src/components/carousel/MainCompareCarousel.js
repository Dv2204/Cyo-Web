import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import { useStyles } from "./CarouselStyles";
import { IMAGE_URL } from "../../graphql/requests";

const breakPoints = [{ width: 1, itemsToShow: 1 }];

const MainCompareCarousel = ({ images }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.carousel}>
        <Carousel breakPoints={breakPoints}>
          {images.map((item, index) => (
            <Item>
              <img
                className={classes.images}
                src={`${IMAGE_URL}${item.image}`}
                alt="Gym"
              />
            </Item>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default MainCompareCarousel;
