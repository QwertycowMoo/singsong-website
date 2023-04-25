import { Typography, Button } from "@mui/material";
import React, { useState } from "react";

import saveInstructions from "../images/saveInstructions.png"
import phraseExample from "../images/phraseExample.png"


interface TutorialProps {
    name: string,
    closeTutorial(): any
}
function Tutorial ({name, closeTutorial}: TutorialProps) { 
    
    return (
        <>
        <Typography variant="h3">
                Hello {name}!
                </Typography>
                <Typography variant="body1" paragraph={true} textAlign="center">
                    The first thing you'll see is a phrase of music. If you see any numbers, just ignore them, they're for us to keep track of phrases.
                </Typography>
                <Typography variant="body1" paragraph={true} textAlign="center">
                    You'll have a button to play the starting pitch and a metronome to play the tempo.
                </Typography>
                <img src={phraseExample}/>
                <Typography variant="body1" paragraph={true} textAlign="center">
                    To start recording, click the microphone button. When done, click the save icon on the top left of the recording box.
                </Typography>
                <img src={saveInstructions}/>
                <Typography variant="body1" paragraph={true} textAlign="center">
                    Listen back to your recording, and retry if you need to. We want to get results as accurate as possible, so we really appreciate your time getting things right!
                </Typography>

                <Typography variant="body1" paragraph={true} textAlign="center">
                    Finally, this data will be published in a paper. Your name will be anonymized when the final data is published, but we just need your name now to keep track of work done for any compensation.
                </Typography>
                <Button size="large" variant="outlined" onClick={closeTutorial}>Let's Go!</Button>
                </>
    )
}

export default Tutorial