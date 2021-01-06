import React from "react";
import { Grid, Paper, Typography, Box, Avatar } from "@material-ui/core";
import { useStyles } from "./ReviewCardStyles";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { IMAGE_URL } from "../../graphql/requests";

const ReviewCard = ({ rating }) => {
  const classes = useStyles();
  return (
    <>
      <Grid item lg={7} md={7}>
        {rating.map((item, index) => (
          <Paper elevation={3} className={classes.paper}>
            <Grid container lg={12} md={12}>
              <Grid item lg={1} md={1}>
                <Paper elevation={5} className={classes.cirpaper}>
                  <Avatar
                    className={classes.images}
                    src={`${IMAGE_URL}${item.userId.image}`}
                    alt="Profile"
                  />
                </Paper>
              </Grid>
              <Grid item lg={3} md={3}>
                <Typography variant="h5" className={classes.name}>
                  {item.userId.firstName} {item.userId.lastName}
                </Typography>
              </Grid>
              <Grid item lg={4} md={4}>
                <Box mb={3}>
                  <Rating
                    defaultValue={item.rating}
                    readOnly
                    emptyIcon={<StarBorderIcon fontSize="inherit" />}
                  />
                </Box>
              </Grid>
            </Grid>
            <Grid container lg={12} md={12} justify="center">
              <Grid item lg={10} md={10}>
                <Typography variant="body1" className={classes.text}>
                  {item.description}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Grid>
    </>
  );
};

export default ReviewCard;
