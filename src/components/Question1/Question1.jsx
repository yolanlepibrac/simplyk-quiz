import * as React from "react"
import { Card, Typography, CardContent, Grid, makeStyles, Divider, Button } from "@material-ui/core"
import { ClickableCard } from "../ClickableCard/ClickableCard"

export const Question1 = ({setsSelectedAnswer, selectedAnswer}) => {

    const select = (answer) => {
        if(selectedAnswer === answer){
            setsSelectedAnswer(null)
        }else {
            setsSelectedAnswer(answer)
        }
    }

    return (
        <Grid container spacing={4} >
        <Grid item xs={1}/>
        <Grid item xs={3} onClick={() => select(1)}>
            <ClickableCard  selected={selectedAnswer === 1}>
                <Typography   variant="h4" gutterBottom>
                React<br/>
                Typescript<br/>
                SQL
                </Typography>
            </ClickableCard>
        </Grid>
        <Grid item xs={3} onClick={() => select(2)}>
            <ClickableCard  selected={selectedAnswer === 2}>
                <Typography   variant="h4" gutterBottom>
                Html<br/>
                Javascript<br/>
                SQL
                </Typography>
            </ClickableCard>
        </Grid>
        <Grid item xs={3} onClick={() => select(3)}>
        <ClickableCard selected={selectedAnswer === 3}>
                <Typography   variant="h4" gutterBottom>
                React<br/>
                Python<br/>
                MongoDb
                </Typography>
            </ClickableCard>
        </Grid>
        
        <Grid item xs={1}/>
        
    </Grid>
    )
}