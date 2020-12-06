import ImageGallery from 'react-image-gallery';
import React from 'react';
import {Grid} from '@material-ui/core';
 
const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

const CarouselComp = () => {
    return(
        <Grid item lg={12} md={12}>
        <ImageGallery 
        items={images}
        showBullets={true}
        autoPlay={true}
        showPlayButton={false}
        showFullscreenButton={false}
         />
         </Grid>
    )
}

export default CarouselComp;