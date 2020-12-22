import React from 'react';
import { useStyles } from "./CustomCarouselStyles";

const CustomCarousel = () => {
    const classes = useStyles();
    let sliderArr = [1, 2, 3, 4, 5];

    return(
        <div className={classes.slider}>
            {sliderArr.map((item, index) => {
                return(
                    <div key={index} className={classes.slide}>
                        {item}
                    </div>
                )
            })}
            <button className={classes.goLeft}>Left</button>
            <button className={classes.goRight}>Right</button>

        </div>
    )
}

export default CustomCarousel;