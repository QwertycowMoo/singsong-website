import { Button } from "@mui/material"
import * as React from "react"

import phraseExample from "../images/phraseExample.png"

const Metronome = ({setMetronome, metronome}) => {
    
    const toggleMetronome = () => {
        setMetronome(!metronome)
    }
    return (
        <Button 
        onClick={toggleMetronome}
        variant="outlined">
            {metronome? "Stop" : "Play" } Metronome
        </Button>
    )
}
    

export default Metronome
