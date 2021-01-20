import * as React from "react"
import { Card, Typography, Grid,  TextField } from "@material-ui/core"


const scripts = ["inputData.unshift('Simplyk');", "return inputData;", "const canadonIndex = inputData.indexOf('Canadon');", "inputData.splice(canadonIndex, 1);"]

const codePlaceholder = `function executeScript(){
    
    
    
    
}
executeScript();
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
            Write an algorithms to find the word "Canadon" of array inputData[], delete it, and add the word "Simplyk" at the begining of the array
            </Typography>
        </Grid>
        {scripts.map((script) => {
            return (
                <Grid container justify="center" alignItems="center">
                    <Card style={{padding : 5, margin:5}}>

                    {script}

                    </Card>
                </Grid>
                
                
            )
        })}
 

        <Grid container justify="center" alignItems="center">
            <Card style={{padding:20}}>
                <Grid item xs={12} style={{textAlign:"left", marginLeft :15, color:"grey"}}>
                    <Typography variant="body1" gutterBottom>
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