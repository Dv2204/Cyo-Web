import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    row:{
        backgroundColor: 'rgba(254, 212, 105, 1)',
       // height: '100vh',
        width: '100%',
        overflowX: 'hidden'
    },
    image: {
        width: theme.spacing(40),
        height: theme.spacing(80),
        overflowY: 'hidden',
       marginTop: '5rem'
    }
}))