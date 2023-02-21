import { Button, Typography } from "@mui/material"
import * as React from "react"

import bpm72 from "../audio/metronome/72bpm.wav"
import bpm80 from "../audio/metronome/80bpm.wav"
import bpm100 from "../audio/metronome/100bpm.wav"
import bpm120 from "../audio/metronome/120bpm.wav"
import bpm144 from "../audio/metronome/144bpm.wav"
import bpm160 from "../audio/metronome/160bpm.wav"
import bpm200 from "../audio/metronome/200bpm.wav"
import PianoA from "../audio/piano/piano_a.wav"
import { useEffect, useRef, useState } from "react"
import { Box } from "@mui/system"

interface MetronomeProps {
    setMetronome(boolean): any,
    metronome: boolean,
    bpm: number
}

const Metronome = ({setMetronome, metronome, bpm}: MetronomeProps) => {
    const AudioEl = useRef<HTMLAudioElement>(null)
    const [metronomeVal, setMetronomeVal] = useState()
    useEffect(() => {
        //set the audio when first rendered
        switch (bpm) {
            case 72:
                setMetronomeVal(bpm72)
                break;
            case 80:
                setMetronomeVal(bpm80)
                break;
            case 100:
                setMetronomeVal(bpm100)
                break;
            case 120:
                setMetronomeVal(bpm120)
                break;
            case 144:
                setMetronomeVal(bpm144)
                break;
            case 160:
                setMetronomeVal(bpm160)
                break;
            case 200:
                setMetronomeVal(bpm200)
                break;
        }
    }, [])

    const toggleMetronome = () => {
        setMetronome(!metronome)
        if (!metronome){
            AudioEl.current?.load()
            AudioEl.current?.play()
        } else {
            AudioEl.current?.pause()
            AudioEl.current?.load()
        }
            
        
    }

    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Typography variant="body1" m={1}>{bpm} bpm</Typography>
            <Button 
            onClick={toggleMetronome}
            variant="outlined">
                {metronome? "Stop" : "Play" } Metronome
            </Button>
            <audio ref={AudioEl} src={metronomeVal}></audio>
        </Box>
    )
}
    

export default Metronome
