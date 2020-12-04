import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    row:{
       background: 'linear-gradient(to right bottom, #FED469, #ED0891)',
       // height: '100vh',
        width: '100%',
        overflowX: 'hidden'
    },
    image: {
       // width: theme.spacing(40),
      //  height: theme.spacing(70),
      height: '100vh',
      width: '20vw',
       paddingTop: '3.2rem'
    },
    paper:{
        backgroundColor: 'rgba(255, 255, 255, 0.13)',
        marginTop: '6.2rem',
        height: '65vh',
        borderRadius: '6%'
    },
    text: {
        fontWeight: 'bold',
        paddingLeft: '4.8rem',
        paddingTop: '2.7rem',
        letterSpacing: '0.1rem',
        fontSize: '4.2rem'
        //textAlign: 'center'
    }
}))