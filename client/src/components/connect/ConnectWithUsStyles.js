import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    paper:{
        backgroundColor: 'rgba(248, 248, 248, 1)',
        marginTop: '10rem'
    },
    heading: {
        fontWeight: 'bold',
    },
    vertical: {
        width: '0.8vw',
        backgroundColor: 'rgba(0, 0, 0, 0.87)',
        height: '8vh'
    },
    body: {
        marginTop: '0.5rem'
    },
    image: {
       height: '90vh',
      width: '37vw',
        paddingTop: '7rem',
        paddingBottom: '5rem'
    },
    btn:{
        backgroundColor: '#000',
        color: '#fff',
        marginTop:'0.9rem',
        padding: '1.1rem 2rem',
        fontSize: '19px',
        letterSpacing: '0.1rem',
        // marginLeft: '4.6rem',
        "&:hover":{
            cursor: 'pointer'
        }
    }
 }))