import * as React from "react"
import { Card, Typography, CardContent, Grid, makeStyles, Divider, Button, RadioGroup, Radio, FormControlLabel, MenuItem, Select } from "@material-ui/core"
import { ClickableCard } from "../ClickableCard/ClickableCard"

const ActionNames  = {
    "Go" : "Go ->",
    "Back" : "<- Back",
    "Get" : "Get someone :",
}

export const Question10 = ({setsSelectedAnswer, puzzleCabbageError}) => {

    const [instructions, setInstructions] = React.useState([])

    const [radioValue, setRadioValue] = React.useState(null)
    const [animal, setAnimal] = React.useState("Cabbage")

    const addInstruction = () => {
        if(radioValue){
            const instructionObject = {
                action : radioValue,
                name : radioValue === "Get" ? ActionNames[radioValue] + " " + animal : ActionNames[radioValue],
                animal : radioValue === "Get" ? animal : null,
            }
            setInstructions((prev) => [...prev, instructionObject])

        }
        console.log(instructions)
        setRadioValue(null)
    }

    const deleteLastInstruction = () => {
        setInstructions(prev => {const a = [...prev]; a.pop(); return a})
    }

    React.useEffect(() => {
        setsSelectedAnswer(instructions)
    }, [instructions])


    return (
    <Grid container spacing={2} >
        <Grid item xs={12}>
            <Typography variant="h6">
            Finish the game : cabbage, goat and wolf
            </Typography>
        </Grid>
        <Grid item xs={6} style={{textAlign:"center", paddingLeft:30}}>
            <Grid container justify="center">
                <Grid item xs={12} >
                    <Typography variant="h6">
                        Instructions
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <RadioGroup value={radioValue} onChange={(e) => setRadioValue(e.target.value)} style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                        <FormControlLabel value="Go" control={<Radio />} label="Go ->"/>
                        <FormControlLabel value="Back" control={<Radio />} label="<- Back" />
                        <div style={{display:"flex", alignItems:"center"}}>
                        <FormControlLabel value="Get" control={<Radio />} label="Get someone :" />
                        {radioValue === "Get" && 
                            <Select value={animal} onChange={(e) => setAnimal(e.target.value)} >
                                <MenuItem value={"Cabbage"}>Cabbage</MenuItem>
                                <MenuItem value={"Goat"}>Goat</MenuItem>
                                <MenuItem value={"Wolf"}>Wolf</MenuItem>
                            </Select>
                        }
                        </div>
                        
                    </RadioGroup>
                </Grid>

                <Grid item xs={12} style={{marginTop:30}}>
                    <Button onClick={addInstruction} disabled={!radioValue} color="primary" variant="contained" fullWidth disabled={!radioValue}>
                        Add 
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    {instructions && instructions.length > 0 && 
                        <Grid container justify="center" style={{marginTop:20, backgroundColor:"rgb(250,250,250)", border:"1px solid black", padding:10}}>
                            {instructions.map((instruction, index) => {
                                if(index === instructions.length-1){
                                    return <Grid item xs={12}>
                                        <Card style={{width:400, display:"flex", justifyContent:"space-between"}}>
                                        <div>•{index +1}</div>
                                        {instruction.name}
                                        <button  onClick={() => deleteLastInstruction()}>Delete</button></Card></Grid>
                                }
                                return <Grid item xs={12}><Card style={{width:400, display:"flex", justifyContent:"space-between"}}><div>•{index +1}</div>{instruction.name}<div style={{width:50}}/></Card></Grid>
                            })}
                        </Grid>
                    }
                   
                </Grid>
                <Grid item xs={12} style={{color: "red"}}>
                    <Typography variant="body1">
                        {puzzleCabbageError ? puzzleCabbageError : ""}
                    </Typography>
                </Grid>

            </Grid>
            
        </Grid>

        <Grid item xs={6} style={{textAlign:"center", padding:20, position:"relative", maxHeight:500, overflow:"hidden"}}>

            <div style={{position:"relative"}}>
                <img src="./assets/images/river.jpg" height="500" width="100%"/>
                <img src="./assets/images/berger.png" width="100" style={{position: "absolute", top: 200, left:0}}/>
                <img src="./assets/images/loup.png" width="100" style={{position: "absolute", top: 250, left:50}}/>
                <img src="./assets/images/mouton.png" width="50" style={{position: "absolute", top: 250, left:130}}/>
                <img src="./assets/images/choux.png" width="50" style={{position: "absolute", top: 250, left:170}}/>
                <img src="./assets/images/barque.png" width="220" style={{position: "absolute", top: 280, left:70}}/>
            </div>

        </Grid>
        
    </Grid>
    )
}