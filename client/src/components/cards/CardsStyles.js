import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    paperNormal: {
       //height: "300px",
      marginBottom: '0.5rem',
        // borderTop: "8px solid #3f51b5",
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
        //paddingTop: '0.4rem',
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
    },
    details: {
        fontSize: '15px',
        color: 'grey',
        padding: '10px',
    },
    text: {
        fontSize: '1.7rem',
        fontWeight: 'normal',
        color: 'rgba(0, 0, 0, 0.33)',
        "&:hover":{
            cursor: 'pointer',
            fontSize:'1.75rem'
        }
    },
    // arrowIcon: {
    //    // fontSize: '2rem',
    //     color: 'rgba(0, 0, 0, 0.33)',
    // }
    // row: {
    //     padding: '8px'
    // }
    // icon: {

    // }
}))