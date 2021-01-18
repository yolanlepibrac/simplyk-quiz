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
        <Grid container spacing={4} >
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
                            <img src="https://lh3.googleusercontent.com/proxy/twr31lAzbcmJQeV3MejwpMt0vENjRWMScZBC9Q47DcmBgnmvm3J-taQ_g3ecNwZKzCfXOGNls8QmZoYVt4tqlZDYafOdFjqeDKYb36FB1_p_6j0QW0IbBp1pnQJfimdlSj53" height="70"/>
                            <Typography   variant="h4" >
                                backend 
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <img src="https://charbase.com/images/glyph/8646" height="70"/>
                        </Grid>
                        <Grid item xs={2}>
                            <img src="https://cdn.pixabay.com/photo/2014/04/02/10/13/computer-303130_1280.png" height="70"/>
                            <Typography   variant="h4" >
                                frontend 
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <img src="https://charbase.com/images/glyph/8646" height="70"/>
                        </Grid>
                        <Grid item xs={2}>
                            <img src="https://www.icone-png.com/png/12/12063.png" height="70"/>
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
                            <img src="https://cdn.pixabay.com/photo/2014/04/02/10/13/computer-303130_1280.png" height="70"/>
                            <Typography   variant="h4" >
                                frontend 
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <img src="https://charbase.com/images/glyph/8646" height="70"/>
                        </Grid>
                        <Grid item xs={2}>
                            <img src="https://lh3.googleusercontent.com/proxy/twr31lAzbcmJQeV3MejwpMt0vENjRWMScZBC9Q47DcmBgnmvm3J-taQ_g3ecNwZKzCfXOGNls8QmZoYVt4tqlZDYafOdFjqeDKYb36FB1_p_6j0QW0IbBp1pnQJfimdlSj53" height="70"/>
                            <Typography   variant="h4" >
                                backend 
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <img src="https://charbase.com/images/glyph/8646" height="70"/>
                        </Grid>
                        <Grid item xs={2}>
                            <img src="https://www.icone-png.com/png/12/12063.png" height="70"/>
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
                            <img src="https://cdn.pixabay.com/photo/2014/04/02/10/13/computer-303130_1280.png" height="70"/>
                            <Typography   variant="h4" >
                                frontend 
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <img src="https://charbase.com/images/glyph/8646" height="70"/>
                        </Grid>
                        <Grid item xs={2}>
                            <img src="https://www.icone-png.com/png/12/12063.png" height="70"/>
                            <Typography   variant="h4" >
                                database 
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <img src="https://charbase.com/images/glyph/8646" height="70"/>
                        </Grid>
                        <Grid item xs={2}>
                            <img src="https://lh3.googleusercontent.com/proxy/twr31lAzbcmJQeV3MejwpMt0vENjRWMScZBC9Q47DcmBgnmvm3J-taQ_g3ecNwZKzCfXOGNls8QmZoYVt4tqlZDYafOdFjqeDKYb36FB1_p_6j0QW0IbBp1pnQJfimdlSj53" height="70"/>
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
                        <img src="https://cdn.pixabay.com/photo/2014/04/02/10/13/computer-303130_1280.png" height="70"/>
                        <Typography   variant="h4" >
                            frontend 
                        </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <img src="https://charbase.com/images/glyph/8646" height="70"/>
                    </Grid>
                    <Grid item xs={2}>
                        <img src="https://www.icone-png.com/png/12/12063.png" height="70"/>
                        <Typography   variant="h4" >
                            database 
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <img src="https://charbase.com/images/glyph/8646" height="70"/>
                    </Grid>
                    <Grid item xs={2}>
                        <img src="https://cdn.pixabay.com/photo/2014/04/02/10/13/computer-303130_1280.png" height="70"/>
                        <Typography   variant="h4" >
                            frontend 
                        </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <img src="https://charbase.com/images/glyph/8646" height="70"/>
                    </Grid>
                    <Grid item xs={2}>
                        <img src="https://lh3.googleusercontent.com/proxy/twr31lAzbcmJQeV3MejwpMt0vENjRWMScZBC9Q47DcmBgnmvm3J-taQ_g3ecNwZKzCfXOGNls8QmZoYVt4tqlZDYafOdFjqeDKYb36FB1_p_6j0QW0IbBp1pnQJfimdlSj53" height="70"/>
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