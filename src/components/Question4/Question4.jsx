import * as React from "react"
import { Card, Typography, CardContent, Grid, makeStyles, Divider, Button } from "@material-ui/core"
import { ClickableCard } from "../ClickableCard/ClickableCard"

export const Question4 = ({setsSelectedAnswer, selectedAnswer}) => {

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
            Which sentence is SQL language ?
            </Typography>
            
        </Grid>
        <Grid item xs={1}/>
        <Grid item xs={10} onClick={() => select(1)}>
            <ClickableCard  selected={selectedAnswer === 1}>
                <Typography   variant="h6" >
                const Simplyk = new Promise((resolve, reject) => resolve('DonationForm');)
                </Typography>
            </ClickableCard>
        </Grid>
        <Grid item xs={1}/>
        <Grid item xs={1}/>
        <Grid item xs={10} onClick={() => select(2)}>
            <ClickableCard  selected={selectedAnswer === 2}>
                <Typography   variant="h6" >
                SELECT * from DonationForm df LEFTJOIN Donation d ON d.donationFormId = df.id 
                </Typography>
            </ClickableCard>
        </Grid>
        <Grid item xs={1}/>
        <Grid item xs={1}/>
        <Grid item xs={10} onClick={() => select(3)}>
            <ClickableCard selected={selectedAnswer === 3}>
                <Typography   variant="h6" >
                ՋավաՍկրիպտ (անգլ.՝ SQL), ինտերպրետացվող սկրիպտային լեզու։ 
                </Typography>
            </ClickableCard>
        </Grid>
        <Grid item xs={1}/>
        <Grid item xs={1}/>
        <Grid item xs={10} onClick={() => select(4)}>
            <ClickableCard selected={selectedAnswer === 4}>
                <Typography   variant="h6" >
                {`int main(){std::cout << "Hello, I am SQL language!";}`}
                </Typography>
            </ClickableCard>
        </Grid>
        <Grid item xs={1}/>
        <Grid item xs={1}/>
        <Grid item xs={10} onClick={() => select(5)}>
            <ClickableCard selected={selectedAnswer === 5}>
                <Typography   variant="h6" >
                {`def filtre_inferieur_a_5(l):
                    def m(x): 
                        return x < 5
                    return filter(m, l)`}
                </Typography>
            </ClickableCard>
        </Grid>
        
        <Grid item xs={1}/>
        
    </Grid>
    )
}