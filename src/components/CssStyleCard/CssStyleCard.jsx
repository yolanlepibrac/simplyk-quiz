import * as React from "react"
import {  Typography, Grid,  TextField, Card } from "@material-ui/core"

export const CssStyleCard = ({setImageTop, setImageLeft, imageTop, imageLeft, value}) => {


    return (
        <Grid item xs={2} style={{textAlign:"left", padding:6}}>
            <Card style={{padding:10}}>
                
                    <Typography variant="body1">
                        {`#img${value} {`}
                    </Typography>
                    <Typography variant="body1" style={{marginLeft:20}}>
                    {`position: absolute;`}
                    </Typography>
                    <Typography variant="body1" style={{marginLeft:20}}>
                    top: <TextField type="number" value={imageTop} onChange={(e) => setImageTop(e.target.value)} style={{width:120}}/>;
                    </Typography>
                    <Typography variant="body1" style={{marginLeft:20}}>
                    left: <TextField type="number" value={imageLeft} onChange={(e) => setImageLeft(e.target.value)} style={{width:120}}/>;
                    </Typography>
                    <Typography variant="body1">
                    {`}`}
                    </Typography>
            </Card>
         </Grid>
    )
}