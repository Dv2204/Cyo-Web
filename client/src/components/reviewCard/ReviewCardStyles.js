import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: '2rem',
        backgroundColor:'rgba(240, 240, 240, 1)',
        height: '20vh',
        borderRadius: '20px'
    },
    cirpaper: {
        height: '13vh',
        borderRadius: '50%',
        backgroundColor: 'rgba(196, 196, 196, 1)',
        marginTop: '-1.5rem',
        marginLeft: '-1rem'
    },
    name: {
        marginLeft: '1.5rem',
        color: '#000000'
    }
 }))