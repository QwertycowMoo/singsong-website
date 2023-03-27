import * as React from "react"
import { useState, useEffect } from "react"
import {Button, Typography } from "@mui/material"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { navigate } from "gatsby"
import {v4 as uuidv4} from "uuid"

import CenterGrid from "../components/CenterGrid"
import Tutorial from "../components/Tutorial"
import DataEntry from "../components/DataEntry"
import StartingPitch from "../components/StartingPitch"
import Metronome from "../components/Metronome"
import { sendAudio } from "../api/SendAudio"
// Large amount of importing pictures
import Phrase1 from "../images/phrases/Phrase1_C_100.png"
import Phrase2 from "../images/phrases/Phrase2_D_120.png"
import Phrase3 from "../images/phrases/Phrase3_A_160.png"

// Also create parallel arrays for the data so that starting pitch, metronome val, all line up
const phrases = [Phrase1, Phrase2, Phrase3]
const startPitches = ["C", "D", "A"]
const tempos = [100, 120, 160]

function DataCollectPage(props) {
    const [urlBlob, setUrlBlob] = useState("")
    const [metronome, setMetronome] = useState(false) // Whether it is on or not, not the bpm
    const [metronomeDisabled, setMetronomeDisabled] = useState(false)
    const [showTutorial, setShowTutorial] = useState(true)

    const [phraseImg, setPhraseImg] = useState(null)
    const [startingPitch, setStartingPitch] = useState("")
    const [bpm, setBpm] = useState(60)
    const [index, setIndex] = useState(0)
    
    //On componenent load
    useEffect(() => {
        refreshPhrase()
    }, [])

    const setAudioElement = (blob) => {
        const url = URL.createObjectURL(blob)
        setUrlBlob(url)
        console.log(url)
    };
   
    const refreshPhrase = () => {
        const i = Math.floor(Math.random() * phrases.length)
        setIndex(i)
        console.log(i, tempos[i], startPitches[i])
        setPhraseImg(phrases[i])
        setBpm(tempos[i])
        setStartingPitch(startPitches[i])
    }

    const handleCloseTutorial = () => {
        setShowTutorial(false)
    }

    const handleFinishClicked = () => {
        // navigate("/summary")
        // Call Api to send information
        // Restart with a new phrase
        // Update Starting Pitch and Metronome
    }

    

    const handleSubmitPhrase = async () => {
        // Get information from blob url
        let blob = await fetch(urlBlob).then((res) => {
            return res.blob()
        })
        // saveBlob(await blob, "blob")
        const uuid = uuidv4()
        const filename = props.location.state?.name + "_" + index + "_" + startPitches[index] + "_" + tempos[index] + "_" + uuid
        const data = new FormData();

        data.append("file", blob, filename + ".wav")
        console.log("This is the data", data)

        const success = await sendAudio(data, filename)
        if (success) {
            refreshPhrase()
        } else {
            console.log("Did not succeed")
        }
       
    }

    

    
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
                    startingPitch={startingPitch}/>
                    <Metronome
                    setMetronome={setMetronome}
                    metronome={metronome}
                    bpm={bpm}
                    disabled={metronomeDisabled}/>
                    <DataEntry
                        urlBlob={urlBlob}
                        setBlob={setAudioElement}
                        phraseImage={phraseImg}
                        setMetronome={setMetronome}
                        setMetronomeDisabled={setMetronomeDisabled}/>
                    
                    <Button size="large" variant="outlined" onClick={handleSubmitPhrase}>I'm Happy, Submit Phrase</Button>

                    <Button size="large" variant="outlined" onClick={handleFinishClicked}>Done with data collection?</Button>
                    </>
                }   
            </CenterGrid>
        </Layout>
        
    
    )
}



export const Head = () => <Seo title="Singsong Homepage" description="Homepage of SingSong" children={undefined} />

export default DataCollectPage
