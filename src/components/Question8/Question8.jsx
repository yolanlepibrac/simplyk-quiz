import * as React from "react"
import {  Typography, Grid,  TextField, Card } from "@material-ui/core"
import { CssStyleCard } from "../CssStyleCard/CssStyleCard"

export const Question8 = ({setsSelectedAnswer, selectedAnswer}) => {


    const select = (answer) => {
        if(selectedAnswer === answer){
            setsSelectedAnswer(null)
        }else {
            setsSelectedAnswer(answer)
        }
    }

    const [imageTop1, setImageTop1] = React.useState(75)
    const [imageLeft1, setImageLeft1] = React.useState(150)
    const [imageTop2, setImageTop2] = React.useState(75)
    const [imageLeft2, setImageLeft2] = React.useState(150)
    const [imageTop3, setImageTop3] = React.useState(75)
    const [imageLeft3, setImageLeft3] = React.useState(150)
    const [imageTop4, setImageTop4] = React.useState(75)
    const [imageLeft4, setImageLeft4] = React.useState(150)
    const [imageTop5, setImageTop5] = React.useState(75)
    const [imageLeft5, setImageLeft5] = React.useState(150)
    const [imageTop6, setImageTop6] = React.useState(75)
    const [imageLeft6, setImageLeft6] = React.useState(150)

    React.useEffect(() => {
        setsSelectedAnswer([imageTop1, imageLeft1, imageTop2, imageLeft2,  imageTop3, imageLeft3, imageTop4, imageLeft4, imageTop5, imageLeft5,  imageTop6, imageLeft6])
    }, [imageTop1, imageLeft1, imageTop2, imageLeft2,  imageTop3, imageLeft3, imageTop4, imageLeft4, imageTop5, imageLeft5,  imageTop6, imageLeft6])

    return (
        <Grid container  >
            <Grid item xs={12}>
                <Typography variant="h6" gutterBottom style={{paddingBottom:30}}>
                Finish the puzzle (values allowed : 0 ; 150 ; 300)
                </Typography>
            </Grid>
            
            <Grid container alignItems="center" justify="center">
                <div style={{width : 450, height:300, backgroundColor:"rgb(250,250,250)", position:"relative", boxShadow : "0px 0px 30px 13px rgb(150,150,150)", zIndex:1000}}>
                    <div style={{position:"absolute", top:parseInt(imageTop1), left:parseInt(imageLeft1), width:150, heigh:150}}>
                        <img src="./assets/images/simplyk_banner1.png" width="150" height="150"/>
                    </div>

                    <div style={{position:"absolute", top:parseInt(imageTop2), left:parseInt(imageLeft2), heigh:150}}>
                        <img src="./assets/images/simplyk_banner2.png" width="150" height="150"/>
                    </div>

                    <div style={{position:"absolute", top:parseInt(imageTop3), left:parseInt(imageLeft3), heigh:150}}>
                        <img src="./assets/images/simplyk_banner3.png" width="150" height="150"/>
                    </div>

                    <div style={{position:"absolute", top:parseInt(imageTop4), left:parseInt(imageLeft4), heigh:150}}>
                        <img src="./assets/images/simplyk_banner4.png" width="150" height="150"/>
                    </div>

                    <div style={{position:"absolute", top:parseInt(imageTop5), left:parseInt(imageLeft5), heigh:150}}>
                        <img src="./assets/images/simplyk_banner5.png" width="150" height="150"/>
                    </div>

                    <div style={{position:"absolute", top:parseInt(imageTop6), left:parseInt(imageLeft6), heigh:150}}>
                        <img src="./assets/images/simplyk_banner6.png" width="150" height="150"/>
                    </div>

                </div>
            </Grid>

            <Grid item xs={12}>
                <Grid container style={{padding:10}} justify="space-around">
                    <CssStyleCard setImageTop={setImageTop1} setImageLeft={setImageLeft1} imageTop={imageTop1} imageLeft={imageLeft1} value={1}/>
                    <CssStyleCard setImageTop={setImageTop4} setImageLeft={setImageLeft4} imageTop={imageTop4} imageLeft={imageLeft4} value={2}/>
                    <CssStyleCard setImageTop={setImageTop3} setImageLeft={setImageLeft3} imageTop={imageTop3} imageLeft={imageLeft3} value={3}/>
                    <CssStyleCard setImageTop={setImageTop6} setImageLeft={setImageLeft6} imageTop={imageTop6} imageLeft={imageLeft6} value={4}/>
                    <CssStyleCard setImageTop={setImageTop5} setImageLeft={setImageLeft5} imageTop={imageTop5} imageLeft={imageLeft5} value={5}/>
                    <CssStyleCard setImageTop={setImageTop2} setImageLeft={setImageLeft2} imageTop={imageTop2} imageLeft={imageLeft2} value={6}/>
                </Grid>
            </Grid>
        </Grid>
    )
}