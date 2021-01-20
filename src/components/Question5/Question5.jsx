import * as React from "react"
import { Card, Typography, CardContent, Grid, makeStyles, Divider, Button } from "@material-ui/core"
import { ClickableCard } from "../ClickableCard/ClickableCard"

export const Question5 = ({setsSelectedAnswer, selectedAnswer}) => {

    const select = (answer) => {
        if(selectedAnswer === answer){
            setsSelectedAnswer(null)
        }else {
            setsSelectedAnswer(answer)
        }
    }

    return (
    <Grid container spacing={2} >
        <Grid item xs={12}>
            <Typography variant="h6">
            Which practice is allowed when we develop ?
            </Typography>
            
        </Grid>
        <Grid item xs={1}/>
        <Grid item xs={10} onClick={() => select(1)}>
            <ClickableCard  selected={selectedAnswer === 1}>
                <Typography variant="h6" >
                    Let unused code to maybe use it later
                </Typography>
            </ClickableCard>
        </Grid>
        <Grid item xs={1}/>
        <Grid item xs={1}/>
        <Grid item xs={10} onClick={() => select(2)}>
            <ClickableCard  selected={selectedAnswer === 2}>
                <Typography variant="h6" >
                    Let a variable with unknown type
                </Typography>
            </ClickableCard>
        </Grid>
        <Grid item xs={1}/>
        <Grid item xs={1}/>
        <Grid item xs={10} onClick={() => select(3)}>
            <ClickableCard  selected={selectedAnswer === 3}>
                <Typography variant="h6" >
                    Delete all the code of another developer because you don't like it/him 
                </Typography>
            </ClickableCard>
        </Grid>
        <Grid item xs={1}/>
        <Grid item xs={1}/>
        <Grid item xs={10} onClick={() => select(4)}>
            <ClickableCard  selected={selectedAnswer === 4}>
                <Typography variant="h6" >
                    Write the same code in different part of the app
                </Typography>
            </ClickableCard>
        </Grid>
        <Grid item xs={1}/>
        <Grid item xs={1}/>
        <Grid item xs={10} onClick={() => select(5)}>
            <ClickableCard  selected={selectedAnswer === 5}>
                <Typography variant="h6" >
                    Copy paste code from the Internet
                </Typography>
            </ClickableCard>
        </Grid>
        <Grid item xs={1}/>
        
        
    </Grid>
    )
}