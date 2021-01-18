
import { Card, Typography, CardContent, Grid, makeStyles, Divider, Button } from "@material-ui/core"
import * as React from "react"
import {Question1} from "../Question1/Question1"
import {Question2} from "../Question2/Question2"
import {Question3} from "../Question3/Question3"

const Answers = [
    {answer : 1, points : 1, penalty : -1}, 
    {answer : 1, points : 2, penalty : -1}, 
    {answer : 1, points : 1, penalty : -1}]


const useStyles = makeStyles({
    mainContainer: {
      height:"100vh",
      display:"flex",
      flexDirection : "column", 
      justifyContent:"space-between"
    },
    step:{
        display:"flex",
    },
    bottom:{
        height:100
    },
    selectedAnswer:{
        marginRight:30
    },
    score:{
        position:"absolute",
        top:20,
        right:20
    }
  });

export const AppContent = () => {

    const classes = useStyles()

    const [stepCounter, setStepCounter] = React.useState(0)
    const [selectedAnswer, setsSelectedAnswer] = React.useState(null)
    const [score, setScore] = React.useState(0)

    const validate = () => {
        if(stepCounter > Answers.length-1){
            return
        }
        const currentAnswer = Answers[stepCounter]
        if(selectedAnswer === currentAnswer.answer){
            console.log("win")
            setScore((prev) => prev + currentAnswer.points)
        }
        else {
            console.log("lost")
            setScore((prev) => prev + currentAnswer.penalty)
        }
        setStepCounter((prev) => prev +1)
    }

    
    


    return (
        <div className={classes.mainContainer}>
            <div className={classes.score}>
                <Typography variant="h5">
                {`score : ${score}`}
                </Typography>
                
            </div>
            <div>
                <h1>{`Question ${stepCounter+1}`}</h1>
                <Divider/>
            </div>
            
            <Grid className={classes.step}>
                {stepCounter === 0 &&
                    <Question1 setsSelectedAnswer={setsSelectedAnswer} selectedAnswer={selectedAnswer}/>
                }
                {stepCounter === 1 &&
                    <Question2 setsSelectedAnswer={setsSelectedAnswer} selectedAnswer={selectedAnswer}/>
                }
                {stepCounter === 2 &&
                    <Question3 setsSelectedAnswer={setsSelectedAnswer} selectedAnswer={selectedAnswer}/>
                }
                
            </Grid>

            <Grid  className={classes.bottom}>
                <Divider/>
                <Grid container justify="center" alignItems="center" className={classes.bottom}>
                    <Typography className={classes.selectedAnswer}>
                    {`selectedAnswer  : ${selectedAnswer || ""}`}
                    </Typography>
                
                <Button variant="contained" disabled={!selectedAnswer} onClick={validate}>Validate</Button>
                </Grid>
                
            </Grid>
                
            
        </div>
    )
}