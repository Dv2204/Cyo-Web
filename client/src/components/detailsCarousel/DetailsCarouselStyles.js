import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: '3rem'
    },
    location: {
        color: 'rgba(243, 103, 156, 1)',
       marginLeft: '1rem',
    },
    locationtext: {
        fontSize: '16px',
        color: 'grey',
        marginLeft: '-3rem',
    },
    line: {
        color: 'grey',
        marginTop: '0.5rem',
        // width: '90%',
    }
}))