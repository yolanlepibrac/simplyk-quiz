import * as React from "react"
import { Card, Typography, CardContent, Grid , makeStyles} from "@material-ui/core"

const useStyles = makeStyles({
    card: {
      cursor: "pointer",
      "&:hover" :{
          backgroundColor : "#A1EDCA"
      },
      color:"grey"
    },
    cardSelected:{
        cursor: "pointer",
        backgroundColor : "#60CE91",
        border : "1px solid grey",
        color:"white"
    }
  });
  

export const ClickableCard = ({children, selected}) => {

    const classes = useStyles();


    return (
        <Card className={selected ? classes.cardSelected : classes.card} >
            <CardContent>
                {children}
            </CardContent>
        </Card>
    )
}