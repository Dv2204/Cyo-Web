import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    icon:{
        color: 'rgba(233, 62, 127, 1)',
        marginTop: '1rem',
    },
   select: {
       marginLeft: '-0.5rem'
   },
     root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
      marginLeft: '1rem'
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
 }))