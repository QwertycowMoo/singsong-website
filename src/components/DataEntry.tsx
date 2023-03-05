import { Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";

import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder"

interface DataEntryProps {
    urlBlob: string,
    setBlob(blob): any
    phraseImage: any,
    setMetronome: any
    setMetronomeDisabled: any
}
function DataEntry ({urlBlob, setBlob, phraseImage, setMetronome, setMetronomeDisabled}: DataEntryProps) { 
    const recordingControls = useAudioRecorder()

    useEffect(()=> {
        if (recordingControls.isRecording) {
            setMetronome(false)
            setMetronomeDisabled(true)
        }
    })
    return (
        <>
        <img src={phraseImage}/>
        <AudioRecorder onRecordingComplete={(blob) => {setBlob(blob); setMetronomeDisabled(false)}}
        recorderControls={recordingControls}/>
        <audio controls src={urlBlob}></audio>
        <Typography variant="body1">
            Made a mistake? Just click the microphone again to rerecord!
        </Typography>
        </>
    )
}

export default DataEntry