import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    row:{
       height: '70vh',
        width: '100vw'
    },
    heading:{
        color: '#fff',
        paddingTop: '10vh',
        textAlign: 'center',
        [theme.breakpoints.down('xs')]:{
            fontSize:'2.2rem',
            paddingBottom:'1vh',
            height:'3rem'
        }
    },
    link:{
        paddingTop: '2vh',
        color: '#959595',
        cursor:'pointer',
        [theme.breakpoints.down('xs')]:{
            fontSize:'1rem',
        }
    },
    mailbox:{
        padding:'5rem',
        [theme.breakpoints.down('xs')]:{
            padding:'3rem 5rem' ,
        }
    },
    about:{
        color:'#b2b2b2',
        padding: '2vh',
        [theme.breakpoints.down('xs')]:{
            fontSize:'0.6rem',
            textAlign:'justify'
        }
    }
}))