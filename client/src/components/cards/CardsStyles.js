import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    location: {
        fontSize: '11px',
        color: 'grey',
    },
    title: {
        paddingTop: '0.4rem',
       fontWeight: 'bold',
       
    },
    body:{
        fontSize: '12px'
    },
    details: {
        fontSize: '14px',
        color: 'grey',
        padding: '5px',
    },
    small: {
        width: theme.spacing(4),
        height: theme.spacing(4),
      },
    // locationicon: {
    //     alignSelf: 'center',
    //     fontSize: '31px',
    //     justifyContent: 'center',
    //     color: '#fff',
    //     fontWeight: 'bold',
    //     marginLeft: '0.4rem'
    // },
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
       // paddingTop: '0.04rem',
        float: 'right'
    },
    count: {
        fontSize: '10px',
        color: 'grey',
        backgroundColor: '#fff',
        paddingLeft: '0.3rem'
    }
    // icon: {

    // }
}))