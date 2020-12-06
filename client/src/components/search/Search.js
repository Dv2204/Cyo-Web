import React from 'react';
import Grid from "@material-ui/core/Grid";
import { Avatar, Typography, Chip, Paper} from '@material-ui/core';
import { useStyles } from "./SearchStyles";
import PinDropIcon from '@material-ui/icons/PinDrop';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const Search = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    return(
         <Paper justify="center" classsName={classes.paper}>
                    <Grid container lg={12} md={12}>
                       <Grid item lg={4} md={4} >
                       <PinDropIcon fontSize='large' className={classes.icon} />
                       <Button className={classes.menu} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                Open Menu
                            </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                                <MenuItem onClick={handleClose}>Logout</MenuItem>
                            </Menu>
                        </Grid>
                        {/* <Grid item lg={4} md={4}>
                     
                        </Grid> */}
                    </Grid>
                    </Paper>          
    )
}

export default Search;