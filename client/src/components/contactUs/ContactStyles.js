import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    row:{
       height: '70vh',
        width: '100vw',
        overflowX: 'hidden'
    },
    heading:{
        color: '#fff',
        padding: '5vh',
        textAlign: 'center'
    },
    link:{
        paddingTop: '2vh',
        color: '#959595',
        cursor:'pointer'
    },
    about:{
        color:'#b2b2b2',
        padding: '2vh'
    }
}))