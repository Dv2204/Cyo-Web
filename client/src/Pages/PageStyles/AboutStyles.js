import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    top:{
        width:'100%',
        
        height: 'auto'
    },
    head:{
        color:'#000',
        zIndex:'100',
        top:'20%',
        position:'absolute',
        textAlign: 'center',
        fontWeight:'bold'
    }
 }))