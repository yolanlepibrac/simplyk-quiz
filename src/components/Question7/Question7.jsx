import * as React from "react"
import {  Typography, Grid, makeStyles, Divider, Button } from "@material-ui/core"
import { ClickableCard } from "../ClickableCard/ClickableCard"

export const Question7 = ({setsSelectedAnswer, selectedAnswer}) => {


    const select = (answer) => {
        if(selectedAnswer === answer){
            setsSelectedAnswer(null)
        }else {
            setsSelectedAnswer(answer)
        }
    }

    return (
        <Grid container spacing={4} >
            <Grid item xs={12}>
                <Typography variant="h6">
                Who is the best dev ?
                </Typography>
            </Grid>
        <Grid item xs={1}/>
        <Grid item xs={3} onClick={() => select(1)}>
            <ClickableCard selected={selectedAnswer === 1}>
                <Typography   variant="h4" gutterBottom>
                   Yolan Pibrac
                </Typography>
                <img src="https://media-exp1.licdn.com/dms/image/C5603AQGkMKmNrje-MA/profile-displayphoto-shrink_200_200/0/1517038575375?e=1616630400&v=beta&t=nQY4S5bDFlHLGJO9y4CZ4rOqINMmh8wMqmUfXvXQsQg" width="100%" style={{maxHeight:200, maxWidth:200}}/>
            </ClickableCard>
        </Grid>
        <Grid item xs={3} onClick={() => select(2)}>
            <ClickableCard selected={selectedAnswer === 2}>
                <Typography   variant="h4" gutterBottom>
                   Yolan Pibrac
                </Typography>
                <img src="https://media-exp1.licdn.com/dms/image/C5603AQGkMKmNrje-MA/profile-displayphoto-shrink_200_200/0/1517038575375?e=1616630400&v=beta&t=nQY4S5bDFlHLGJO9y4CZ4rOqINMmh8wMqmUfXvXQsQg" width="100%" style={{maxHeight:200, maxWidth:200}}/>
            </ClickableCard>
        </Grid>
        <Grid item xs={3} onClick={() => select(3)}>
            <ClickableCard selected={selectedAnswer === 3}>
                <Typography   variant="h4" gutterBottom>
                   Yolan Pibrac
                </Typography>
                <img src="https://media-exp1.licdn.com/dms/image/C5603AQGkMKmNrje-MA/profile-displayphoto-shrink_200_200/0/1517038575375?e=1616630400&v=beta&t=nQY4S5bDFlHLGJO9y4CZ4rOqINMmh8wMqmUfXvXQsQg" width="100%" style={{maxHeight:200, maxWidth:200}}/>
            </ClickableCard>
        </Grid>
        <Grid item xs={1}/>
        <Grid item xs={1}/>
        <Grid item xs={1}/>
        <Grid item xs={3} onClick={() => select(4)}>
            <ClickableCard selected={selectedAnswer === 4}>
                <Typography   variant="h4" gutterBottom>
                   Yolan Pibrac
                </Typography>
                <img src="https://media-exp1.licdn.com/dms/image/C5603AQGkMKmNrje-MA/profile-displayphoto-shrink_200_200/0/1517038575375?e=1616630400&v=beta&t=nQY4S5bDFlHLGJO9y4CZ4rOqINMmh8wMqmUfXvXQsQg" width="100%" style={{maxHeight:200, maxWidth:200}}/>
            </ClickableCard>
        </Grid>
        <Grid item xs={3} onClick={() => select(5)}>
            <ClickableCard selected={selectedAnswer === 5}>
                <Typography   variant="h4" gutterBottom>
                   Yolan Pibrac
                </Typography>
                <img src="https://media-exp1.licdn.com/dms/image/C5603AQGkMKmNrje-MA/profile-displayphoto-shrink_200_200/0/1517038575375?e=1616630400&v=beta&t=nQY4S5bDFlHLGJO9y4CZ4rOqINMmh8wMqmUfXvXQsQg" width="100%" style={{maxHeight:200, maxWidth:200}}/>
            </ClickableCard>
        </Grid>
        <Grid item xs={3} onClick={() => select(6)}>
            <ClickableCard selected={selectedAnswer === 6}>
                <Typography   variant="h4" gutterBottom>
                   Yolan Pibrac
                </Typography>
                <img src="https://media-exp1.licdn.com/dms/image/C5603AQGkMKmNrje-MA/profile-displayphoto-shrink_200_200/0/1517038575375?e=1616630400&v=beta&t=nQY4S5bDFlHLGJO9y4CZ4rOqINMmh8wMqmUfXvXQsQg" width="100%" style={{maxHeight:200, maxWidth:200}}/>
            </ClickableCard>
        </Grid>
        <Grid item xs={1}/>
        
    </Grid>
    )
}