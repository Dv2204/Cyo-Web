import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({

 text: {
        fontSize: '1.7rem',
        fontWeight: 'normal',
        color: 'rgba(255, 255, 255, 0.55)',
        "&:hover":{
            cursor: 'pointer',
            fontSize:'1.75rem'
        }
    },

}))