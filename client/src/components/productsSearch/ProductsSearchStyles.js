import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
     root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      //width: 400,
      marginLeft: '1rem',
    //  borderRadius: '10%'
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
      color: 'rgba(0, 0, 0, 0.98)'
    },
    iconButton: {
      padding: 10,
      color: 'rgba(0, 0, 0, 1)',
    },
    filter: {
        color: 'rgba(139, 139, 139, 1)',
        marginLeft: '2rem',
        textAlign:'center',
        marginTop: '0.4rem',
        "&:hover": {
            cursor: 'pointer'
        }
    }
 }))