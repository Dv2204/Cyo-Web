import React, { useState } from "react";
import { Avatar, Typography, Grid, Paper, Chip } from "@material-ui/core";
import head from "../../assets/2.PNG";
import profile from "../../assets/compare.jpg";
import { useStyles } from "./GymPageCardStyles";
import BeenhereOutlinedIcon from "@material-ui/icons/BeenhereOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import StarIcon from "@material-ui/icons/Star";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";
import { ALL_GYMS, CITY_GYMS, IMAGE_URL, SEARCH_GYMS } from "../../graphql/requests";
import { useQuery, useLazyQuery } from "@apollo/client";
import Loader from "../Loader";
import PinDropIcon from "@material-ui/icons/PinDrop";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const Cards = () => {
  const classes = useStyles();
  const [searchText, setText] = useState(" ");
  const [searchNameText, setNameText] = useState(" ");
  const [isShown, setIsShown] = useState(false);
  const { data: gym, loading: gymLoading, error: gymError } = useQuery(
    ALL_GYMS,
    {
      variables: {
        city: "",
      },
    }
  );
  const [
    getGyms,
    { data: filteredGym, loading: filteredGymLoading, error: filteredGymError },
  ] = useLazyQuery(CITY_GYMS, {
    variables: { city: searchText },
  });
  const [
    getNameGyms,
    { data: filteredNameGym, loading: filteredNameGymLoading, error: filteredNameGymError },
  ] = useLazyQuery(SEARCH_GYMS, {
    variables: { keyword: searchNameText },
  });
  if (gymLoading || filteredGymLoading || filteredNameGymLoading) {
    return (
      <Grid
        container
        lg={12}
        md={12}
        justify="center"
        style={{ margin: "5rem" }}
      >
        <Grid item lg={3} md={3} justify="center">
          <Loader color="rgba(38, 38, 38, 0.7)" className={classes.loader} />
        </Grid>
      </Grid>
    );
  }

  if (gymError) {
    return <p style={{ color: "#fff" }}>{gymError.message}</p>;
  }
  if (filteredGymError) {
    return <p style={{ color: "#fff" }}>{filteredGymError.message}</p>;
  }
  if (filteredNameGymError) {
    return <p style={{ color: "#fff" }}>{filteredNameGymError.message}</p>;
  }

  const onChangeHandler = (e) => {
  //  if(searchText.length > 0){
  //    setText(e.target.value);
  //  }else{
  //    setNameText(e.target.value)
  //  }
  setNameText(e.target.value);
  setText(e.target.value)
  }
  const onClickHandler = () => {
    getGyms();
    getNameGyms();
  }

  console.log(gym);
  console.log(filteredGym);
  console.log(filteredNameGym);
  const clearFilter = () => {
    setText(" ");
    setNameText(" ");
  };
  // const gymData = () => {
  //   const classes = useState();
  //   return(
  //     <Grid item lg={4} md={4} id="gym" className={classes.card}>
  //     <Paper elevation={4} className={classes.paperNormal}>
  //       <Grid container>
  //         <Grid item lg={12} md={12}>
  //           <Grid container className={classes.row}>
  //             <Grid item lg={10} md={10}>
  //               <Grid container className={classes.top}>
  //                 <Grid item lg={2} md={2}>
  //                   <Avatar
  //                     src={head}
  //                     alt="Profile"
  //                     className={classes.small}
  //                   />
  //                 </Grid>
  //                 <Grid item lg={10} md={10}>
  //                   <Typography variant="h6" className={classes.title}>
  //                     {" "}
  //                     {item.gym.name}{" "}
  //                   </Typography>
  //                   <Grid container>
  //                     <Grid item lg={2} md={2}>
  //                       <Typography className={classes.rating}>
  //                         {item.rating}
  //                         <StarIcon className={classes.ratingIcon} />
  //                       </Typography>
  //                     </Grid>
  //                     <Grid item lg={10} md={10}>
  //                       <Typography className={classes.count}>
  //                         {item.gym.counter} people
  //                       </Typography>
  //                     </Grid>
  //                   </Grid>
  //                 </Grid>
  //               </Grid>
  //             </Grid>
  //             <Grid item lg={2} md={2}>
  //               <BeenhereOutlinedIcon
  //                 fontSize="small"
  //                 style={{ color: "#11C62E", float: "right" }}
  //               />
  //             </Grid>
  //           </Grid>
  //         </Grid>
  //         <Grid container justify="center" spacing={0}>
  //           <Grid item lg={12} md={12}>
  //             {item.gymimageSet.length > 0 ? (
  //               <img
  //                 src={`${IMAGE_URL}${item.gymimageSet[0].image}`}
  //                 alt="Profile"
  //                 index={0}
  //                 className={classes.avatarimage}
  //               />
  //             ) : (
  //               <img
  //                 src={profile}
  //                 alt="Profile"
  //                 className={classes.avatarimage}
  //               />
  //             )}
  //           </Grid>
  //         </Grid>
  //         <Grid container className={classes.row}>
  //           <Grid item lg={12} md={12}>
  //             <Typography
  //               variant="caption"
  //               className={classes.location}
  //             >
  //               <LocationOnOutlinedIcon fontSize="small" />
  //               {item.city}
  //             </Typography>
  //           </Grid>
  //         </Grid>
  //         <Grid container className={classes.row}>
  //           <Grid item lg={12} md={12}>
  //             <Typography variant="body1" className={classes.body}>
  //               {item.address}
  //             </Typography>
  //           </Grid>
  //         </Grid>
  //         <Grid container className={classes.row}>
  //           <Grid item lg={10} md={10}>
  //             <Link
  //               to={`/gymdetails/${item.id}`}
  //               className={classes.nonunderlinelink}
  //             >
  //               <Chip
  //                 label="View Details"
  //                 className={classes.detailschip}
  //               />
  //             </Link>
  //           </Grid>
  //           <Grid item lg={2} md={2}>
  //             <LocationOnIcon
  //               fontSize="large"
  //               style={{ color: "#E93E7F" }}
  //             />
  //           </Grid>
  //         </Grid>
  //       </Grid>
  //     </Paper>
  //   </Grid>
  //   )
  // }
  return (
    <>
      <Grid container md={12} lg={12} justify="center">
        <Grid item lg={7} md={7} justify="center" style={{ width: "100%" }}>
          <Grid container xs={12} lg={12} md={12}>
            <Grid item xs={4} lg={1} md={1}>
              <PinDropIcon fontSize="large" className={classes.icon} />
            </Grid>
            <Grid xs={8} lg={8} md={8}>
              <Paper className={classes.root} elevation={2}>
                <InputBase
                  className={classes.input}
                  placeholder="Search by city or name"
                  // onChange={(e) => {searchText ? setText(e.target.value) :  setNameText(e.target.value)}}
                onChange={onChangeHandler}

                />
                <IconButton
                  onMouseEnter={() => setIsShown(true)}
                  onMouseLeave={() => setIsShown(false)}
                  className={classes.iconButton}
                  // onClick={() => {setText ? getGyms() : getNameGyms()}}
                  onClick={onClickHandler}
                >
                  <SearchIcon />
                </IconButton>
              </Paper>
            </Grid>
            <Grid item xs={12} lg={3} md={3}>
              <Chip
                className={classes.select}
                label="Clear Filter"
                onClick={() => clearFilter()}
              />
            </Grid>
          </Grid>
          <Grid container lg={9} md={9} justify="flex-end">
            <Grid item lg={1} md={1} justify="flex-end">
              {isShown && <div className={classes.hover}> Search</div>}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {(() => {
          if (filteredGym?.gym?.length > 0) {
           {filteredGym.gym.map((item, index) => (
            <Grid item lg={4} md={4} id="gym" className={classes.card}>
              <Paper elevation={4} className={classes.paperNormal}>
                <Grid container>
                  <Grid item lg={12} md={12}>
                    <Grid container className={classes.row}>
                      <Grid item lg={10} md={10}>
                        <Grid container className={classes.top}>
                          <Grid item lg={2} md={2}>
                            <Avatar
                              src={head}
                              alt="Profile"
                              className={classes.small}
                            />
                          </Grid>
                          <Grid item lg={10} md={10}>
                            <Typography variant="h6" className={classes.title}>
                              {" "}
                              {item.gym.name}{" "}
                            </Typography>
                            <Grid container>
                              <Grid item lg={2} md={2}>
                                <Typography className={classes.rating}>
                                  {item.rating}
                                  <StarIcon className={classes.ratingIcon} />
                                </Typography>
                              </Grid>
                              <Grid item lg={10} md={10}>
                                <Typography className={classes.count}>
                                  {item.gym.counter} people
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item lg={2} md={2}>
                        <BeenhereOutlinedIcon
                          fontSize="small"
                          style={{ color: "#11C62E", float: "right" }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid container justify="center" spacing={0}>
                    <Grid item lg={12} md={12}>
                      {item.gymimageSet.length > 0 ? (
                        <img
                          src={`${IMAGE_URL}${item.gymimageSet[0].image}`}
                          alt="Profile"
                          index={0}
                          className={classes.avatarimage}
                        />
                      ) : (
                        <img
                          src={profile}
                          alt="Profile"
                          className={classes.avatarimage}
                        />
                      )}
                    </Grid>
                  </Grid>
                  <Grid container className={classes.row}>
                    <Grid item lg={12} md={12}>
                      <Typography
                        variant="caption"
                        className={classes.location}
                      >
                        <LocationOnOutlinedIcon fontSize="small" />
                        {item.city}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container className={classes.row}>
                    <Grid item lg={12} md={12}>
                      <Typography variant="body1" className={classes.body}>
                        {item.address}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container className={classes.row}>
                    <Grid item lg={10} md={10}>
                      <Link
                        to={`/gymdetails/${item.id}`}
                        className={classes.nonunderlinelink}
                      >
                        <Chip
                          label="View Details"
                          className={classes.detailschip}
                        />
                      </Link>
                    </Grid>
                    <Grid item lg={2} md={2}>
                      <LocationOnIcon
                        fontSize="large"
                        style={{ color: "#E93E7F" }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
          } else if(filteredNameGym?.gym?.length > 0) {
           {filteredNameGym.gym.map((item, index) => (
            <Grid item lg={4} md={4} id="gym" className={classes.card}>
              <Paper elevation={4} className={classes.paperNormal}>
                <Grid container>
                  <Grid item lg={12} md={12}>
                    <Grid container className={classes.row}>
                      <Grid item lg={10} md={10}>
                        <Grid container className={classes.top}>
                          <Grid item lg={2} md={2}>
                            <Avatar
                              src={head}
                              alt="Profile"
                              className={classes.small}
                            />
                          </Grid>
                          <Grid item lg={10} md={10}>
                            <Typography variant="h6" className={classes.title}>
                              {" "}
                              {item.gym.name}{" "}
                            </Typography>
                            <Grid container>
                              <Grid item lg={2} md={2}>
                                <Typography className={classes.rating}>
                                  {item.rating}
                                  <StarIcon className={classes.ratingIcon} />
                                </Typography>
                              </Grid>
                              <Grid item lg={10} md={10}>
                                <Typography className={classes.count}>
                                  {item.gym.counter} people
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item lg={2} md={2}>
                        <BeenhereOutlinedIcon
                          fontSize="small"
                          style={{ color: "#11C62E", float: "right" }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid container justify="center" spacing={0}>
                    <Grid item lg={12} md={12}>
                      {item.gymimageSet.length > 0 ? (
                        <img
                          src={`${IMAGE_URL}${item.gymimageSet[0].image}`}
                          alt="Profile"
                          index={0}
                          className={classes.avatarimage}
                        />
                      ) : (
                        <img
                          src={profile}
                          alt="Profile"
                          className={classes.avatarimage}
                        />
                      )}
                    </Grid>
                  </Grid>
                  <Grid container className={classes.row}>
                    <Grid item lg={12} md={12}>
                      <Typography
                        variant="caption"
                        className={classes.location}
                      >
                        <LocationOnOutlinedIcon fontSize="small" />
                        {item.city}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container className={classes.row}>
                    <Grid item lg={12} md={12}>
                      <Typography variant="body1" className={classes.body}>
                        {item.address}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container className={classes.row}>
                    <Grid item lg={10} md={10}>
                      <Link
                        to={`/gymdetails/${item.id}`}
                        className={classes.nonunderlinelink}
                      >
                        <Chip
                          label="View Details"
                          className={classes.detailschip}
                        />
                      </Link>
                    </Grid>
                    <Grid item lg={2} md={2}>
                      <LocationOnIcon
                        fontSize="large"
                        style={{ color: "#E93E7F" }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
          }else{
            {gym.gym.map((item, index) => (
            <Grid item lg={4} md={4} id="gym" className={classes.card}>
              <Paper elevation={4} className={classes.paperNormal}>
                <Grid container>
                  <Grid item lg={12} md={12}>
                    <Grid container className={classes.row}>
                      <Grid item lg={10} md={10}>
                        <Grid container className={classes.top}>
                          <Grid item lg={2} md={2}>
                            <Avatar
                              src={head}
                              alt="Profile"
                              className={classes.small}
                            />
                          </Grid>
                          <Grid item lg={10} md={10}>
                            <Typography variant="h6" className={classes.title}>
                              {" "}
                              {item.gym.name}{" "}
                            </Typography>
                            <Grid container>
                              <Grid item lg={2} md={2}>
                                <Typography className={classes.rating}>
                                  {item.rating}
                                  <StarIcon className={classes.ratingIcon} />
                                </Typography>
                              </Grid>
                              <Grid item lg={10} md={10}>
                                <Typography className={classes.count}>
                                  {item.gym.counter} people
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item lg={2} md={2}>
                        <BeenhereOutlinedIcon
                          fontSize="small"
                          style={{ color: "#11C62E", float: "right" }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid container justify="center" spacing={0}>
                    <Grid item lg={12} md={12}>
                      {item.gymimageSet.length > 0 ? (
                        <img
                          src={`${IMAGE_URL}${item.gymimageSet[0].image}`}
                          alt="Profile"
                          index={0}
                          className={classes.avatarimage}
                        />
                      ) : (
                        <img
                          src={profile}
                          alt="Profile"
                          className={classes.avatarimage}
                        />
                      )}
                    </Grid>
                  </Grid>
                  <Grid container className={classes.row}>
                    <Grid item lg={12} md={12}>
                      <Typography
                        variant="caption"
                        className={classes.location}
                      >
                        <LocationOnOutlinedIcon fontSize="small" />
                        {item.city}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container className={classes.row}>
                    <Grid item lg={12} md={12}>
                      <Typography variant="body1" className={classes.body}>
                        {item.address}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container className={classes.row}>
                    <Grid item lg={10} md={10}>
                      <Link
                        to={`/gymdetails/${item.id}`}
                        className={classes.nonunderlinelink}
                      >
                        <Chip
                          label="View Details"
                          className={classes.detailschip}
                        />
                      </Link>
                    </Grid>
                    <Grid item lg={2} md={2}>
                      <LocationOnIcon
                        fontSize="large"
                        style={{ color: "#E93E7F" }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))
          }}
        })()}
      {/* {filteredGym?.gym?.length > 0
        ? filteredGym.gym.map((item, index) => (
            <Grid item lg={4} md={4} id="gym" className={classes.card}>
              <Paper elevation={4} className={classes.paperNormal}>
                <Grid container>
                  <Grid item lg={12} md={12}>
                    <Grid container className={classes.row}>
                      <Grid item lg={10} md={10}>
                        <Grid container className={classes.top}>
                          <Grid item lg={2} md={2}>
                            <Avatar
                              src={head}
                              alt="Profile"
                              className={classes.small}
                            />
                          </Grid>
                          <Grid item lg={10} md={10}>
                            <Typography variant="h6" className={classes.title}>
                              {" "}
                              {item.gym.name}{" "}
                            </Typography>
                            <Grid container>
                              <Grid item lg={2} md={2}>
                                <Typography className={classes.rating}>
                                  {item.rating}
                                  <StarIcon className={classes.ratingIcon} />
                                </Typography>
                              </Grid>
                              <Grid item lg={10} md={10}>
                                <Typography className={classes.count}>
                                  {item.gym.counter} people
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item lg={2} md={2}>
                        <BeenhereOutlinedIcon
                          fontSize="small"
                          style={{ color: "#11C62E", float: "right" }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid container justify="center" spacing={0}>
                    <Grid item lg={12} md={12}>
                      {item.gymimageSet.length > 0 ? (
                        <img
                          src={`${IMAGE_URL}${item.gymimageSet[0].image}`}
                          alt="Profile"
                          index={0}
                          className={classes.avatarimage}
                        />
                      ) : (
                        <img
                          src={profile}
                          alt="Profile"
                          className={classes.avatarimage}
                        />
                      )}
                    </Grid>
                  </Grid>
                  <Grid container className={classes.row}>
                    <Grid item lg={12} md={12}>
                      <Typography
                        variant="caption"
                        className={classes.location}
                      >
                        <LocationOnOutlinedIcon fontSize="small" />
                        {item.city}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container className={classes.row}>
                    <Grid item lg={12} md={12}>
                      <Typography variant="body1" className={classes.body}>
                        {item.address}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container className={classes.row}>
                    <Grid item lg={10} md={10}>
                      <Link
                        to={`/gymdetails/${item.id}`}
                        className={classes.nonunderlinelink}
                      >
                        <Chip
                          label="View Details"
                          className={classes.detailschip}
                        />
                      </Link>
                    </Grid>
                    <Grid item lg={2} md={2}>
                      <LocationOnIcon
                        fontSize="large"
                        style={{ color: "#E93E7F" }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))
        : gym.gym.map((item, index) => (
            <Grid item lg={4} md={4} id="gym" className={classes.card}>
              <Paper elevation={4} className={classes.paperNormal}>
                <Grid container>
                  <Grid item lg={12} md={12}>
                    <Grid container className={classes.row}>
                      <Grid item lg={10} md={10}>
                        <Grid container className={classes.top}>
                          <Grid item lg={2} md={2}>
                            <Avatar
                              src={head}
                              alt="Profile"
                              className={classes.small}
                            />
                          </Grid>
                          <Grid item lg={10} md={10}>
                            <Typography variant="h6" className={classes.title}>
                              {" "}
                              {item.gym.name}{" "}
                            </Typography>
                            <Grid container>
                              <Grid item lg={2} md={2}>
                                <Typography className={classes.rating}>
                                  {item.rating}
                                  <StarIcon className={classes.ratingIcon} />
                                </Typography>
                              </Grid>
                              <Grid item lg={10} md={10}>
                                <Typography className={classes.count}>
                                  {item.gym.counter} people
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item lg={2} md={2}>
                        <BeenhereOutlinedIcon
                          fontSize="small"
                          style={{ color: "#11C62E", float: "right" }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid container justify="center" spacing={0}>
                    <Grid item lg={12} md={12}>
                      {item.gymimageSet.length > 0 ? (
                        <img
                          src={`${IMAGE_URL}${item.gymimageSet[0].image}`}
                          alt="Profile"
                          index={0}
                          className={classes.avatarimage}
                        />
                      ) : (
                        <img
                          src={profile}
                          alt="Profile"
                          className={classes.avatarimage}
                        />
                      )}
                    </Grid>
                  </Grid>
                  <Grid container className={classes.row}>
                    <Grid item lg={12} md={12}>
                      <Typography
                        variant="caption"
                        className={classes.location}
                      >
                        <LocationOnOutlinedIcon fontSize="small" />
                        {item.city}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container className={classes.row}>
                    <Grid item lg={12} md={12}>
                      <Typography variant="body1" className={classes.body}>
                        {item.address}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container className={classes.row}>
                    <Grid item lg={10} md={10}>
                      <Link
                        to={`/gymdetails/${item.id}`}
                        className={classes.nonunderlinelink}
                      >
                        <Chip
                          label="View Details"
                          className={classes.detailschip}
                        />
                      </Link>
                    </Grid>
                    <Grid item lg={2} md={2}>
                      <LocationOnIcon
                        fontSize="large"
                        style={{ color: "#E93E7F" }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))} */}
    </>
  );
};

export default Cards;
