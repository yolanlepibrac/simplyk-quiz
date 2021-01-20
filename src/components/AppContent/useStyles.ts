import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    mainContainer: {
      height:"100vh",
      display:"flex",
      flexDirection : "column", 
      justifyContent:"space-between"
    },
    step:{
        display:"flex",
    },
    bottom:{
        height:100
    },
    selectedAnswer:{
        marginRight:30
    },
    score:{
        position:"absolute",
        top:20,
        right:20
    },
    win: {
        position:"absolute",
        width:"100vw",
        height:"100vh",
        top:0,
        left:0, 
        zIndex:20000,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        color : 'green',
        animation: `Text-Appear 1s linear infinite, Text-Opacity 1s linear infinite`
    },
    lost: {
        position:"absolute",
        width:"100vw",
        height:"100vh",
        top:0,
        left:0, 
        zIndex:20000,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        color : 'red',
        animation: `Text-Appear 1s linear infinite, Text-Opacity 1s linear infinite`
    }
  });