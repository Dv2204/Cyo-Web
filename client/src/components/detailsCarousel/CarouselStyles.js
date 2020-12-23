import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    text: {
        paddingTop: '8rem',
        paddingBottom: '4rem',
        fontWeight: 'bold',
        color: 'rgba(233, 62, 127, 1)',
        letterSpacing: '0.1rem',
        textAlign: 'center',
        [theme.breakpoints.down('xs')]:{
            fontSize:'3rem',
            paddingTop:'4rem'
        }
    },
    carousel: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '75vh',
        marginBottom:'3rem',
        [theme.breakpoints.down('xs')]:{
            height:'40vh !important'
        }
      }
 }))