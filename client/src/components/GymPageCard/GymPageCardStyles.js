import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    card:{
        [theme.breakpoints.down("xs")]:{
            margin:'0px 20px',
            marginTop:'20px', 
        },
    },
    paperNormal: {
      marginBottom: '0.5rem',
        "&:hover": {
          transition: "all 0.2s ease-out",
          boxShadow: "0px 10px 12px rgba(38, 38, 38, 0.5)",
         bottom: '-1rem',
          border: "1.4px solid #cccccc",
          cursor: 'pointer'
        },
      },
      top:{
          paddingTop: '0.2rem',
      },
    location: {
        fontSize: '11px',
        color: 'grey',
        padding: '10px'
    },
    title: {
       fontWeight: 'bold',
       
    },
    body:{
        fontSize: '12px',
        paddingLeft: '19px',
        paddingRight: '19px'
    },
    small: {
        width: theme.spacing(5),
        height: theme.spacing(5),
        paddingLeft: '10px'
      },
    rating: {
        fontSize: '8px',
        color: '#fff',
        backgroundColor: '#11C62E',
        marginLeft: '0.7rem',
    },
    ratingIcon: {
        fontSize: '10px',
        color: '#fff',
        backgroundColor: '#11C62E',
        float: 'right'
    },
    count: {
        fontSize: '10px',
        color: 'grey',
        backgroundColor: '#fff',
        paddingLeft: '0.3rem'
    },
    details: {
        fontSize: '18px',
        color: 'grey',
        padding: '10px',
        textDecoration: 'none',
        "&:hover": {
            color: '#000'
        }
    },
}))