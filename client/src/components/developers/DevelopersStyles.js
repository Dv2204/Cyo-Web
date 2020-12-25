import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    profile:{
        width:'15vw',
        height:'15vw',
        [theme.breakpoints.down("xs")]:{
            width:'55vw',
        height:'55vw',
        },
        [theme.breakpoints.down("sm")]:{
            width:'55vw',
        height:'55vw',
        },
        [theme.breakpoints.down("md")]:{
            width:'15vw',
        height:'15vw',
        margin:'0px 5vw'
        }
    },
    name:{
        [theme.breakpoints.down("sm")]:{
            fontSize:'3rem',
        }
    }
 }))