import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    text: {
        paddingTop: '8rem',
        paddingBottom: '4rem',
        fontWeight: 'bold',
        color: 'rgba(233, 62, 127, 1)',
        letterSpacing: '0.1rem',
        textAlign: 'center'
    },
    carousel: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '82vh',
        //marginTop:'1rem',
        marginBottom:'3rem',
      }
 }))