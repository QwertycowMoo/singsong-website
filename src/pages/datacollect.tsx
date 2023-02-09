import * as React from "react"
import { useState } from "react"
import { Button, Grid, Typography } from "@mui/material"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { AudioRecorder } from "react-audio-voice-recorder"
import { navigate } from "gatsby"
import CenterGrid from "../components/CenterGrid"
import Phrase from "../components/Phrase"

import saveInstructions from "../images/saveInstructions.png"
import phraseExample from "../images/phraseExample.png"

function DataCollectPage(props) {
    const [showTutorial, setShowTutorial] = useState(true)
    const [urlBlob, setUrlBlob] = useState("")
    const handleFinishClicked = () => {
        navigate("/summary")
    }

    const addAudioElement = (blob) => {
        const url = URL.createObjectURL(blob)
        setUrlBlob(url)
        console.log(urlBlob)
        const audio = document.createElement("audio")
        audio.src = urlBlob;
        audio.controls = true;
        document.body.appendChild(audio);
      };

    const handleCloseTutorial = () => {
        setShowTutorial(false)
    }

    return (
        <Layout>
            <CenterGrid>
                {showTutorial ?
                <>
                <Typography variant="h3">
                Hello {props.location.state?.name}!
                </Typography>
                <Typography variant="body1" paragraph={true} textAlign="center">
                    The first thing you'll see is a phrase of music. If you see any numbers, just ignore them, they're for us to keep track of phrases.
                </Typography>
                <img src={phraseExample}/>
                <Typography variant="body1" paragraph={true} textAlign="center">
                    To start recording, click the microphone button. When done, click the save icon on the top left of the recording box.
                </Typography>
                <img src={saveInstructions}/>
                <Typography variant="body1" paragraph={true} textAlign="center">
                    Listen back to your recording, and retry if you need to. We want to get results as accurate as possible, so we really appreciate your time getting things right!
                </Typography>
                <Button size="large" variant="outlined" onClick={handleCloseTutorial}>Let's Go!</Button>
                </>
                :
                <>
                <Phrase></Phrase>
                <AudioRecorder onRecordingComplete={(blob) => addAudioElement(blob)}></AudioRecorder>
                {/* Use Wavesurfer.js to visualize and playback audio? */}
                <Button size="large" variant="outlined" onClick={handleFinishClicked}>Finish</Button>
                </>
                }
                
                
            </CenterGrid>
        
                

        </Layout>
        
    
    )
}



export const Head = () => <Seo title="Singsong Homepage" description="Homepage of SingSong" children={undefined} />

export default DataCollectPage
