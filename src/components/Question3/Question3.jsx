import * as React from "react"
import { Card, Typography, CardContent, Grid, makeStyles, Divider, Button } from "@material-ui/core"
import { ClickableCard } from "../ClickableCard/ClickableCard"

export const Question3 = ({setsSelectedAnswer, selectedAnswer}) => {


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
                Which architecture do we use in web ?
                </Typography>
            </Grid>
            <Grid item xs={1}/>
            <Grid item xs={10} onClick={() => select(1)}>
                <ClickableCard  selected={selectedAnswer === 1} >
                    <Grid container style={{padding:20}}>
                        <Grid item xs={2}>
                            <img src="./assets/images/server.png" height="70"/>
                            <Typography   variant="h4" >
                                backend 
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <img src="./assets/images/arrows.png" height="70"/>
                        </Grid>
                        <Grid item xs={2}>
                            <img src="./assets/images/computer.webp" height="70"/>
                            <Typography   variant="h4" >
                                frontend 
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <img src="./assets/images/arrows.png" height="70"/>
                        </Grid>
                        <Grid item xs={2}>
                            <img src="./assets/images/db.png" height="70"/>
                            <Typography   variant="h4" >
                                database 
                            </Typography>
                        </Grid>
                    </Grid>
                
                </ClickableCard>
            </Grid>
            <Grid item xs={1}/>
            <Grid item xs={1}/>
            <Grid item xs={10} onClick={() => select(2)}>
                <ClickableCard  selected={selectedAnswer === 2}>
                    
                    <Grid container style={{padding:20}}>
                        <Grid item xs={2}>
                            <img src="./assets/images/computer.webp" height="70"/>
                            <Typography   variant="h4" >
                                frontend 
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <img src="./assets/images/arrows.png" height="70"/>
                        </Grid>
                        <Grid item xs={2}>
                            <img src="./assets/images/server.png" height="70"/>
                            <Typography   variant="h4" >
                                backend 
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <img src="./assets/images/arrows.png" height="70"/>
                        </Grid>
                        <Grid item xs={2}>
                            <img src="./assets/images/db.png" height="70"/>
                            <Typography   variant="h4" >
                                database 
                            </Typography>
                        </Grid>
                    </Grid>

                </ClickableCard>
            </Grid>
            <Grid item xs={1}/>
            <Grid item xs={1}/>
            <Grid item xs={10} onClick={() => select(3)}>
            <ClickableCard selected={selectedAnswer === 3}>
                <Grid container style={{padding:20}}>
                        <Grid item xs={2}>
                            <img src="./assets/images/computer.webp" height="70"/>
                            <Typography   variant="h4" >
                                frontend 
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <img src="./assets/images/arrows.png" height="70"/>
                        </Grid>
                        <Grid item xs={2}>
                            <img src="./assets/images/db.png" height="70"/>
                            <Typography   variant="h4" >
                                database 
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <img src="./assets/images/arrows.png" height="70"/>
                        </Grid>
                        <Grid item xs={2}>
                            <img src="./assets/images/server.png" height="70"/>
                            <Typography   variant="h4" >
                                backend 
                            </Typography>
                        </Grid>
                    </Grid>
                </ClickableCard>
            </Grid>
            <Grid item xs={1}/>
            <Grid item xs={1}/>
            <Grid item xs={10} onClick={() => select(4)}>
            <ClickableCard selected={selectedAnswer === 4}>
                
                <Grid container style={{padding:20}}>
                    <Grid item xs={2}>
                        <img src="./assets/images/computer.webp" height="70"/>
                        <Typography   variant="h4" >
                            frontend 
                        </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <img src="./assets/images/arrows.png" height="70"/>
                    </Grid>
                    <Grid item xs={2}>
                        <img src="./assets/images/db.png" height="70"/>
                        <Typography   variant="h4" >
                            database 
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <img src="./assets/images/arrows.png" height="70"/>
                    </Grid>
                    <Grid item xs={2}>
                        <img src="./assets/images/computer.webp" height="70"/>
                        <Typography   variant="h4" >
                            frontend 
                        </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <img src="./assets/images/arrows.png" height="70"/>
                    </Grid>
                    <Grid item xs={2}>
                        <img src="./assets/images/server.png" height="70"/>
                        <Typography   variant="h4" >
                            backend 
                        </Typography>
                    </Grid>
                </Grid>

            </ClickableCard>
        </Grid>
        <Grid item xs={1}/>
        
    </Grid>
    )
}