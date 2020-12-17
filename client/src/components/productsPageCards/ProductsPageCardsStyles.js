import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    paper: {
        //width: '18vw',
        backgroundColor: 'rgba(244, 0, 117, 0.42)',
        height: '38vh',
       // padding: '5rem',
       marginTop: '6rem',
       borderRadius: '13px',
    //    top: '-9%',
    //    right:'-9%',
       //borderTopRightRadius: '20%'
       "&:hover":{
        transition: "all 0.2s ease-out",
        boxShadow: "0px 10px 12px rgba(38, 38, 38, 0.7)",
       bottom: '-1rem',
        border: "1.4px solid #cccccc",
        cursor: 'pointer'
       }
    },
    text:{
        color: 'rgba(145, 145, 145, 1)',
     //   marginLeft: '1rem'
    },
    mrp: {
        color: 'rgba(145, 145, 145, 1)',
        marginLeft: '2.2rem'
    },
    icon: {
         fontSize: '1.7rem',
        marginTop: '0.6rem',
        marginRight:'0.5rem'
    }
}))