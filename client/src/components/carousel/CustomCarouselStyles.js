import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    slider:{
        border: '1px solid red',
        width: '80vw',
        height:'100vh',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        display:'flex',
        //alignItems:'center'
    },
    slide:{
        border: '1px solid blue',
        width: '80vw',
        height: '50vh',
    },
    goLeft: {
        position:'absolute',
        //top: '50%',
        left: '0',
        
    }
 }))