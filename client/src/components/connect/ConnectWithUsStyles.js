import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    paper:{
        backgroundColor: 'rgba(248, 248, 248, 1)',
        marginTop: '10rem'
    },
    heading: {
        fontWeight: 'bold',
    },
    body: {
        marginTop: '0.5rem'
    },
    image: {
       height: '80vh',
      width: '37vw',
        paddingTop: '5rem',
        paddingBottom: '5rem'
    }
 }))