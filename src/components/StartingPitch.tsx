import { Typography, Button } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

// Import all of the starting pitches
import PianoA from "../audio/piano/piano_a.wav"
import PianoAs from "../audio/piano/piano_as.wav"
import PianoB from "../audio/piano/piano_b.wav"
import PianoC from "../audio/piano/piano_c.wav"
import PianoCs from "../audio/piano/piano_cs.wav"
import PianoD from "../audio/piano/piano_d.wav"
import PianoDs from "../audio/piano/piano_ds.wav"
import PianoE from "../audio/piano/piano_e.wav"
import PianoF from "../audio/piano/piano_f.wav"
import PianoFs from "../audio/piano/piano_fs.wav"
import PianoG from "../audio/piano/piano_g.wav"
import PianoGs from "../audio/piano/piano_gs.wav"

interface StartingPitchProps {
    startingPitch: string,
}
function StartingPitch ({startingPitch}: StartingPitchProps) { 
    const AudioEl = useRef<HTMLAudioElement>(null)
    const [note, setNote] = useState()
    useEffect(() => {
        //set the audio when first rendered
        switch (startingPitch) {
            case "A":
                setNote(PianoA)
                break;
            case "A#":
                setNote(PianoAs)
                break;
            case "B":
                setNote(PianoB)
                break;
            case "C":
                setNote(PianoC)
                break;
            case "C#":
                setNote(PianoCs)
                break;
            case "D":
                setNote(PianoD)
                break;
            case "D#":
                setNote(PianoDs)
                break;
            case "E":
                setNote(PianoE)
                break;
            case "F":
                setNote(PianoF)
                break;
            case "F#":
                setNote(PianoFs)
                break;
            case "G":
                setNote(PianoG)
                break;
            case "G#":
                setNote(PianoGs)
                break;
        }
    }, [])

    const handleStartingPitchClick = () => {
        AudioEl.current?.load()
        AudioEl.current?.play()
    }
    return (
        <>
        <Button variant="outlined" onClick={handleStartingPitchClick}>
            Play Starting Pitch
        </Button>
        <audio ref={AudioEl} src={note}></audio>
        </>
    )
}

export default StartingPitch