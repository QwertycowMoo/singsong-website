import { Typography, Button } from "@mui/material";
import React, { useState } from "react";

import { AudioRecorder } from "react-audio-voice-recorder"
import Phrase from "./Phrase"

interface DataEntryProps {
    urlBlob: string,
    setBlob(blob): any
    finish(): any
    setMetronome: any //TODO: Check if this is still ok to do, may not actually call the function
}
function DataEntry ({urlBlob, setBlob, finish, setMetronome}: DataEntryProps) { 
    //TODO: Make the metronome stop when you start the recording
    return (
        <>
        <Phrase></Phrase>
        <AudioRecorder onRecordingComplete={(blob) => setBlob(blob)}></AudioRecorder>
        <audio controls src={urlBlob}></audio>
        <Typography variant="body1">
            Made a mistake? Just click the microphone again to rerecord!
        </Typography>
        <Button size="large" variant="outlined" onClick={finish}>I'm Happy, Submit Phrase</Button>
        </>
    )
}

export default DataEntry