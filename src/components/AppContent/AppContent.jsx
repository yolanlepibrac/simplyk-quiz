
import { Card, Typography, CardContent, Grid, makeStyles, Divider, Button } from "@material-ui/core"
import * as React from "react"
import {Question1} from "../Question1/Question1"
import {Question2} from "../Question2/Question2"
import {Question3} from "../Question3/Question3"
import {Question4} from "../Question4/Question4"
import Reward from 'react-rewards';

const Answers = [
    {answer : 1, points : 1, penalty : -1}, 
    {answer : 4, points : 2, penalty : -1}, 
    {answer : 2, points : 3, penalty : -1},
    {answer : 2, points : 4, penalty : -1}]


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
    },
    win: {
        position:"absolute",
        width:"100vw",
        height:"100vh",
        top:0,
        left:0, 
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        color : 'green',
        animation: `Text-Appear 2s linear infinite, Text-Opacity 2s linear infinite`
    },
    lost: {
        position:"absolute",
        width:"100vw",
        height:"100vh",
        top:0,
        left:0, 
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        color : 'red',
        animation: `Text-Appear 2s linear infinite, Text-Opacity 2s linear infinite`
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
            winAction()
        }
        else {
            console.log("lost")
            setScore((prev) => prev + currentAnswer.penalty)
            lostAction()
        }
        setStepCounter((prev) => prev +1)
        setsSelectedAnswer(null)
    }

    const [win, setWin] = React.useState(false)
    const [lost, setLost] = React.useState(false)

    const winAction = () => {
        setWin(true)
        setTimeout(() => {
            setWin(false)
        }, 2000)
    }

    const lostAction = () => {
        setLost(true)
        setTimeout(() => {
            setLost(false)
        }, 2000)
    }

    
    


    return (
        <div className={classes.mainContainer}>
            <div className={classes.score}>
                <Typography variant="h5">
                {`score : ${score}`}
                </Typography>
            </div>
            {win && <div className={classes.win}>
                <Typography variant="h1">
                YOU WIN
                </Typography>
            </div>}
            {lost && <div className={classes.lost}>
                <Typography variant="h1">
                LOST
                </Typography>
            </div>}


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
                {stepCounter === 3 &&
                    <Question4 setsSelectedAnswer={setsSelectedAnswer} selectedAnswer={selectedAnswer}/>
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