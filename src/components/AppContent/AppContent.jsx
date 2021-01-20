
import { Card, Typography, CardContent, Grid, makeStyles, Divider, Button } from "@material-ui/core"
import * as React from "react"
import {Question1} from "../Question1/Question1"
import {Question2} from "../Question2/Question2"
import {Question3} from "../Question3/Question3"
import {Question4} from "../Question4/Question4"
import {Question5} from "../Question5/Question5"
import {Question6} from "../Question6/Question6"
import {Question7} from "../Question7/Question7"
import { useStyles } from "./useStyles"


export const AppContent = () => {

    const checkJavascriptQuestion = (selectedAnswer) => {
        try {
            const inputData = ["hello", "something", "Canadon", "goodbye"]
            const result  = eval(selectedAnswer)
            console.log(result)
            if(result && result.includes("Simplyk") && !result.includes("Canadon")){
                return true;
            }
            lostAction();
            return null;
        } catch (error) {
            lostAction();
            return null;
        }
    }

    const Answers = [
        {
            validation : (value) => {return checkJavascriptQuestion(value)}, 
            points : 5, 
            penalty : -1, 
            allowMultipleCheck : true,
            component : () => <Question6 setsSelectedAnswer={setsSelectedAnswer} selectedAnswer={selectedAnswer}/>},
        {
            validation : (value) => {return value === 1}, 
            points : 1, 
            penalty : -1, 
            component : () => <Question1 setsSelectedAnswer={setsSelectedAnswer} selectedAnswer={selectedAnswer}/>}, 
        {
            validation : (value) => {return value === 4}, 
            points : 2, 
            penalty : -1, 
            component : () => <Question2 setsSelectedAnswer={setsSelectedAnswer} selectedAnswer={selectedAnswer}/>}, 
        {
            validation : (value) => {return value === 2}, 
            points : 3, 
            penalty : -1, 
            component : () => <Question3 setsSelectedAnswer={setsSelectedAnswer} selectedAnswer={selectedAnswer}/>},
        {
            validation : (value) => {return value === 2}, 
            points : 4, 
            penalty : -1, 
            component : () => <Question4 setsSelectedAnswer={setsSelectedAnswer} selectedAnswer={selectedAnswer}/>},
        {
            validation : (value) => {return value === 5}, 
            points : 5, 
            penalty : -1, 
            component : () => <Question5 setsSelectedAnswer={setsSelectedAnswer} selectedAnswer={selectedAnswer}/>},
            
        {
            validation : (value) => {return [1, 2, 3, 4, 5].includes(value)}, 
            points : 5, 
            penalty : -1, 
            component : () => <Question7 setsSelectedAnswer={setsSelectedAnswer} selectedAnswer={selectedAnswer}/>}]

    const classes = useStyles()

    const [stepCounter, setStepCounter] = React.useState(0)
    const [selectedAnswer, setsSelectedAnswer] = React.useState(null)
    const [score, setScore] = React.useState(0)

    const validate = () => {
        if(stepCounter > Answers.length-1){
            return
        }
        const currentAnswer = Answers[stepCounter]

        const questionIsValid = currentAnswer.validation(selectedAnswer)
        if(questionIsValid === null){
            setScore((prev) => prev + currentAnswer.penalty)
            return;
        }
        if(questionIsValid){
            setScore((prev) => prev + currentAnswer.points)
            winAction()
        }
        else {
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
            {win && 
                <div className={classes.win}>
                    <Typography variant="h1">
                    YOU WIN
                    </Typography>
                </div>
            }
            {lost && 
                <div className={classes.lost}>
                    <Typography variant="h1">
                    LOST
                    </Typography>
                </div>
            }
            <div>
                <h1>{`Question ${stepCounter+1}`}</h1>
                <Divider/>
            </div>
            <Grid className={classes.step}>
                {Answers[stepCounter] && Answers[stepCounter].component()}
            </Grid>

            <Grid  className={classes.bottom}>
                <Divider/>
                <Grid container justify="center" alignItems="center" className={classes.bottom}>
                    <Button variant="contained" disabled={!selectedAnswer } onClick={validate}>Validate</Button>
                </Grid>
            </Grid> 
            
        </div>
    )
}