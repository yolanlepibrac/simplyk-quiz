
import {  Typography,  Grid, Divider, Button } from "@material-ui/core"
import * as React from "react"
import {Question1} from "../Question1/Question1"
import {Question2} from "../Question2/Question2"
import {Question3} from "../Question3/Question3"
import {Question4} from "../Question4/Question4"
import {Question5} from "../Question5/Question5"
import {Question6} from "../Question6/Question6"
import {Question7} from "../Question7/Question7"
import {Question8} from "../Question8/Question8"
import {Question9} from "../Question9/Question9"
import {Question10} from "../Question10/Question10"
import { useStyles } from "./useStyles"

const randomInputData = [
    ["Canadon", "something", "jonhattan", "jeremie"],
    ["Francois", "Tibaut", "Canadon", "benjamin", "Yolan"],
    ["Tali", "Sam", "Florence", "Canadon", "Rowan", "Myriam", "Lola"],
    ["Michel", "Michel", "Canadon", "Michel", "Michel", "Michel"],
    ["Beteau", "Maison", "Canadon", "Couloir", "piscine"],
    ["eau", "bruit", "Canadon", "rhinoceros", "panthere", "riz"],
    ["vitre", "tomate", "Canadon", "jean", "helper"],
    ["javascript", "cplus", "Canadon", "python", "java", "go"],
    ["cerise", "pomme", "Canadon", "poire", "fraise", "framboise"],
    ["david", "russia", "Canadon", "marseille", "Paris"],
    ["bruceLee", "Canadon", "karate", "nunchaku"]
]


export const AppContent = () => {

    const inputData = randomInputData[Math.floor(Math.random()*10)]

    const checkJavascriptQuestion = (selectedAnswer) => {
        try {
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

    const AnswerCssPuzzle = [0,0,0,150,0,300, 150,0,150,150,150,300]

    const checkCssQuestion = (selectedAnswer) => {
        console.log(selectedAnswer)
        if(selectedAnswer.every((value, index) => parseInt(value) === AnswerCssPuzzle[index])){
            return true;
        }
        lostAction();
            return null;
    }

    const [puzzleCabbageError, setPuzzleCabbageError] = React.useState(null)
    const testPuzzleCabbage = (value) => {
        let riverSide = "left";
        let peopleRight = [];
        let peopleLeft = ["Cabbage", "Wolf", "Goat"];
        let peopleOnBoard = null

        const error = value.reduce((prev, instruction, index) => {
            if(Boolean(prev)){
                return prev
            }
            const error = checkActionIsPossible(instruction, riverSide, peopleRight,  peopleLeft, peopleOnBoard, index+1);
            if(error){
                return error;
            } 
            if(instruction.action === "Go"){
                riverSide = "right";
                if(peopleOnBoard){
                    peopleRight = [...peopleRight, peopleOnBoard]
                    peopleOnBoard = null
                }
            }
            if(instruction.action === "Back"){
                riverSide = "left";
                if(peopleOnBoard){
                    peopleLeft = [...peopleLeft, peopleOnBoard]
                    peopleOnBoard = null
                }
            }
            if(instruction.action === "Get"){
                peopleOnBoard = instruction.animal
                if(riverSide === "left"){
                    peopleLeft = peopleLeft.filter((a) => a !== instruction.animal)
                }
                if(riverSide === "right"){
                    peopleRight = peopleRight.filter((a) => a !== instruction.animal)
                }
            }
            return null
        }, null)

        if(error){
            console.log(error)
            setPuzzleCabbageError(error)
            lostAction();
            return null
        }
        
        if(peopleRight.length < 3 || peopleLeft.length > 0){
            console.log("not finished")
            setPuzzleCabbageError("Good attempt, but all animals must cross the river !")
            lostAction();
            return null
        }

        return true;
    }

    const checkActionIsPossible = (instruction, riverSide, peopleRight,  peopleLeft, peopleOnBoard, index) => {
        if(instruction.action === "Get" && peopleOnBoard){
            return `Instruction : ${index}: You tried Action: get someone, but there is already someone in the boat`
        }
        if(instruction.action === "Go" && riverSide === "right"){
            return `Instruction : ${index}: You tried Action: Go ->, but you were at the right side of river`
        }
        if(instruction.action === "Back" && riverSide === "left"){
            return `Instruction : ${index}: You tried Action <- back, but you were at the left side of river`
        }
        if(instruction.action === "Go" && Boolean(animalsCanEat(peopleLeft))){
            return `Instruction : ${index}: ${animalsCanEat(peopleLeft)}`
        }
        if(instruction.action === "Back" && Boolean(animalsCanEat(peopleRight))){
            return `Instruction : ${index}: ${animalsCanEat(peopleRight)}`
        }
        if(instruction.action === "Get" && instruction.animal === peopleOnBoard){
            return `Instruction : ${index}: You tried to get the ${peopleOnBoard}, but it is aleady on board`
        }
        if(instruction.action === "Get" && riverSide === "right" && !peopleRight.includes(instruction.animal)){
            return `Instruction : ${index}: You tried to get the ${instruction.animal}, but it is on the other side`
        }
        if(instruction.action === "Get" && riverSide === "left" && !peopleLeft.includes(instruction.animal)){
            return `Instruction : ${index}: You tried to get the ${instruction.animal}, but it is on the other side`
        }
        return null
    }

    const animalsCanEat = (animals) => {
        if(animals.includes("Cabbage") && animals.includes("Goat")){
            return "Goat eat the Cabbage"
        }
        if(animals.includes("Wolf") && animals.includes("Goat")){
            return "Wolf eat the Goat"
        }
        return null
    }

    const setsSelectedAnswerForPuzzleGoat = (value) => {
        setsSelectedAnswer(value); 
        setPuzzleCabbageError(null);
    }

    

    const Answers = [
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
            validation : (value) => {return checkCssQuestion(value)}, 
            points : 10, 
            penalty : -1, 
            component : () => <Question8 setsSelectedAnswer={setsSelectedAnswer} selectedAnswer={selectedAnswer}/>},
        {
            validation : (value) => {return checkJavascriptQuestion(value)}, 
            points : 20, 
            penalty : -1, 
            allowMultipleCheck : true,
            component : () => <Question6 setsSelectedAnswer={setsSelectedAnswer} selectedAnswer={selectedAnswer}/>},
            
        {
            validation : (value) => {return value === 5}, 
            points : 100, 
            penalty : -1, 
            component : () => <Question9 setsSelectedAnswer={setsSelectedAnswer} selectedAnswer={selectedAnswer}/>},
        {
            validation : (value) => {return testPuzzleCabbage(value)}, 
            points : 200, 
            penalty : -1, 
            component : () => <Question10 setsSelectedAnswer={setsSelectedAnswerForPuzzleGoat} selectedAnswer={selectedAnswer} puzzleCabbageError={puzzleCabbageError}/>},
        {
            validation : (value) => {return [1, 2, 3, 4, 5].includes(value)}, 
            points : 1000, 
            penalty : -1, 
            component : () => <Question7 setsSelectedAnswer={setsSelectedAnswer} selectedAnswer={selectedAnswer}/>},
        
        ]

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