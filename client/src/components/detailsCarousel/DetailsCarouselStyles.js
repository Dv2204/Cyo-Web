import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: '3rem',
        borderRadius: '20px',
        boxShadow: "0px 10px 12px rgba(38, 38, 38, 0.6)",
    },
    location: {
        color: 'rgba(243, 103, 156, 1)',
       marginLeft: '1rem',
    },
    locationtext: {
        fontSize: '16px',
        color: 'grey',
        marginLeft: '-1rem',
    },
    line: {
        color: 'grey',
        marginTop: '0.5rem',
    },
    rating: {
       fontSize: '12px',
        color: '#fff',
        backgroundColor: '#11C62E',
        width: '3.2vw'
    },
    ratingIcon: {
        fontSize:'16px',
        color: '#fff',
        backgroundColor: '#11C62E',
    },
    count: {
        fontSize: '14px',
        color: 'grey',
        backgroundColor: '#fff',
    },
}))