import * as React from "react"
import { Card, Typography, CardContent, Grid, makeStyles, Divider, Button } from "@material-ui/core"
import { ClickableCard } from "../ClickableCard/ClickableCard"

export const Question2 = ({setsSelectedAnswer, selectedAnswer}) => {

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
            Who is the creator of Javascript ?
            </Typography>
            
        </Grid>
        <Grid item xs={1}/>
        <Grid item xs={3} onClick={() => select(1)}>
            <ClickableCard selected={selectedAnswer === 1}>
                <Typography   variant="h4" gutterBottom>
                    Dennis Ritchie
                </Typography>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Dennis_Ritchie_2011.jpg/260px-Dennis_Ritchie_2011.jpg" width="100%" style={{maxHeight:200}}/>
            </ClickableCard>
        </Grid>
        <Grid item xs={3} onClick={() => select(2)}>
            <ClickableCard  selected={selectedAnswer === 2}>
                <Typography   variant="h4" gutterBottom>
                    Elon <br/>musk
                </Typography>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Elon_Musk_2015.jpg/220px-Elon_Musk_2015.jpg" width="100%" style={{maxHeight:200}}/>
            </ClickableCard>
        </Grid>
        <Grid item xs={3} onClick={() => select(3)}>
            <ClickableCard selected={selectedAnswer === 3}>
                <Typography   variant="h4" gutterBottom>
                Bjarne Stroustrup
                </Typography>
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Bjarne-stroustrup_%28cropped%29.jpg" width="100%" style={{maxHeight:200}}/>
            </ClickableCard>
        </Grid>
        <Grid item xs={1}/>
        <Grid item xs={1}/>
        <Grid item xs={1}/>
        <Grid item xs={3} onClick={() => select(4)}>
            <ClickableCard  selected={selectedAnswer === 4}>
                <Typography   variant="h4" gutterBottom>
                    Brendan Eich
                </Typography>
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Brendan_Eich_Mozilla_Foundation_official_photo.jpg" width="100%" style={{maxHeight:200}}/>
                
            </ClickableCard>
        </Grid>
        <Grid item xs={3} onClick={() => select(5)}>
            <ClickableCard selected={selectedAnswer === 5}>
                <Typography   variant="h4" gutterBottom>
                   
                    Richard Gotainer
                </Typography>
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Richard_gotainer.jpg" width="100%" style={{maxHeight:200}}/>
            </ClickableCard>
        </Grid>
        <Grid item xs={3} onClick={() => select(6)}>
            <ClickableCard selected={selectedAnswer === 6}>
                <Typography   variant="h4" gutterBottom>
                    Linus Torvalds
                </Typography>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg/240px-LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg" width="100%" style={{maxHeight:200}}/>
            </ClickableCard>
        </Grid>
        
        <Grid item xs={1}/>
        
    </Grid>
    )
}