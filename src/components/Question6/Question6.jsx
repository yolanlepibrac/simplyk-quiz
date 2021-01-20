import * as React from "react"
import { Card, Typography, CardContent, Grid, makeStyles, Divider, Button, TextField } from "@material-ui/core"
import { ClickableCard } from "../ClickableCard/ClickableCard"


const scripts = ["const canadonIndex = inputData.indexOf('Canadon');", "inputData.splice(canadonIndex, 1);", "inputData.unshift('Simplyk');", "return inputData;"]

const codePlaceholder = `function executeScript(){
    return "simplyk"


}
executeScript()
`

export const Question6 = ({setsSelectedAnswer, selectedAnswer}) => {

    const select = (answer) => {
        console.log(answer)
        setsSelectedAnswer(answer)
    }


    return (
    <Grid container spacing={2} >
        <Grid item xs={12}>
            <Typography variant="h6">
            Write an algorithms to find the word "Canadon" of array inputData[], delete it, and add the word "Simplyk at the begining of the array" 
            </Typography>
        </Grid>
        {scripts.map((script) => {
            return (
                <Grid item xs={12}>
                    {script}
                </Grid>
            )
        })}
 

        <Grid container justify="center" alignItems="center">
            <Card style={{padding:20}}>
                <Grid item xs={12}>
                    <Typography variant="body2" gutterBottom>
                    const inputData = ["Something", ... , "Canadon", ... , "SomethingElse"]
                    </Typography>
                    
                </Grid>
                <Grid item xs={12}>
                    <Grid container justify="center" alignItems="center" >
                        <TextField onChange={(e) => select(e.target.value)}  rows={5} variant="outlined" rowsMax={8} multiline defaultValue={codePlaceholder} style={{minWidth:600}}/>
                    </Grid>
                </Grid>
            </Card>
        </Grid>
       
        
        
    </Grid>
    )
}