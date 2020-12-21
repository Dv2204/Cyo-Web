import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    text: {
        paddingTop: '5rem',
        paddingBottom: '1.7rem',
        fontWeight: 'bold',
        color: 'rgba(251, 91, 33, 1)',
        letterSpacing: '0.1rem',
        textAlign: 'center',
        textShadow: "0px 5px 5px rgba(255, 255, 255, 1)",
    },
    selection: {
        textAlign: 'center',
        color: '#ffffff'
    },
    btn:{
        backgroundColor: 'rgba(255, 147, 108, 1)',
        color: '#fff',
        marginTop:'0.6rem',
        padding: '1.3rem 2.2rem',
        fontSize: '19px',
        letterSpacing: '0.1rem',
        marginTop:'3rem',
        "&:hover":{
            cursor: 'pointer'
        }
    }
    // compare: {
    //     backgroundImage: '../../assets/compare.jpg'
    // }
 }))