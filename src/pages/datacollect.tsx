import * as React from "react"
import { useState, useEffect } from "react"
import {Typography } from "@mui/material"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { navigate } from "gatsby"
import CenterGrid from "../components/CenterGrid"

import Tutorial from "../components/Tutorial"
import DataEntry from "../components/DataEntry"
import StartingPitch from "../components/StartingPitch"
import Metronome from "../components/Metronome"

function DataCollectPage(props) {
    const [urlBlob, setUrlBlob] = useState("")
    const [metronome, setMetronome] = useState(false)
    const [showTutorial, setShowTutorial] = useState(true)
    
    const handleCloseTutorial = () => {
        setShowTutorial(false)
    }

    const handleFinishClicked = () => {
        navigate("/summary")
    }

    const setAudioElement = (blob) => {
        const url = URL.createObjectURL(blob)
        setUrlBlob(url) 
    };

    useEffect(() => {
        // Updates the url blob of the audio element
        console.log(urlBlob)
    }, [urlBlob])
    
    //TODO: Create a Metronome Element
    const toggleMetronome = () => {
        setMetronome(!metronome)
    }
    //TODO: Link files recorded to the summary page
    return (
        <Layout>
            <CenterGrid>
                <Typography variant="h1">
                    SingSong
                </Typography>
                {showTutorial ?
                <>
                    <Tutorial name={props.location.state?.name} closeTutorial={handleCloseTutorial}/>
                </>
                :
                    <>
                    <StartingPitch
                    startingPitch="G#"/>
                    <Metronome
                    setMetronome={setMetronome}
                    metronome={metronome}/>
                    <DataEntry
                        urlBlob={urlBlob}
                        setBlob={setAudioElement}
                        finish={handleFinishClicked}
                        setMetronome={setMetronome}/>
                    </>
                }   
            </CenterGrid>
        </Layout>
        
    
    )
}



export const Head = () => <Seo title="Singsong Homepage" description="Homepage of SingSong" children={undefined} />

export default DataCollectPage
