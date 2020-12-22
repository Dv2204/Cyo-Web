import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
   top: {
       marginTop: '2rem'
   },
   body: {
       marginTop: '1rem'
   },
   line: {
       marginTop: '1rem'
   },
     btn:{
        backgroundColor: 'rgba(255, 147, 108, 1)',
        color: '#fff',
        marginLeft: '4rem',
        padding: '1.3rem 2.2rem',
        fontSize: '19px',
        letterSpacing: '0.1rem',
        marginTop:'3rem',
        textDecoration: 'none',
        "&:hover":{
            cursor: 'pointer'
        }
    }
 }))