import * as React from "react"
import { Card, Typography, CardContent, Grid, makeStyles, Divider, Button } from "@material-ui/core"
import { ClickableCard } from "../ClickableCard/ClickableCard"

export const Question9 = ({setsSelectedAnswer, selectedAnswer}) => {

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
            What is REACT ?
            </Typography>
            
        </Grid>
        <Grid item xs={1}/>
        <Grid item xs={10} onClick={() => select(1)}>
            <ClickableCard  selected={selectedAnswer === 1}>
                <Typography   variant="h6" >
                A html streamer which parsed unformalized data, in firebase interpreter as laravel plugin
                </Typography>
            </ClickableCard>
        </Grid>
        <Grid item xs={1}/>
        <Grid item xs={1}/>
        <Grid item xs={10} onClick={() => select(2)}>
            <ClickableCard  selected={selectedAnswer === 2}>
                <Typography   variant="h6" >
                A recursive blueprint which allowed multi-performed state on production templating 
                </Typography>
            </ClickableCard>
        </Grid>
        <Grid item xs={1}/>
        <Grid item xs={1}/>
        <Grid item xs={10} onClick={() => select(3)}>
            <ClickableCard selected={selectedAnswer === 3}>
                <Typography   variant="h6" >
                A coercive serverless environnement producing retroactive plugin in database EKU system
                </Typography>
            </ClickableCard>
        </Grid>
        <Grid item xs={1}/>
        <Grid item xs={1}/>
        <Grid item xs={10} onClick={() => select(4)}>
            <ClickableCard selected={selectedAnswer === 4}>
                <Typography   variant="h6" >
                A Python compiler which verify the Grabowsky emulations pattern 
                </Typography>
            </ClickableCard>
        </Grid>
        <Grid item xs={1}/>
        <Grid item xs={1}/>
        <Grid item xs={10} onClick={() => select(5)}>
            <ClickableCard selected={selectedAnswer === 5}>
                <Typography   variant="h6" >
                A javascript framework transpiled by Webpack and Babel to be interpret by ES5
                </Typography>
            </ClickableCard>
        </Grid>
        
        <Grid item xs={1}/>
        
    </Grid>
    )
}