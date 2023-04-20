import * as React from "react"
import { useState, useEffect } from "react"
import { Button, Typography } from "@mui/material"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { navigate } from "gatsby"
import { v4 as uuidv4 } from "uuid"

import CenterGrid from "../components/CenterGrid"
import Tutorial from "../components/Tutorial"
import DataEntry from "../components/DataEntry"
import StartingPitch from "../components/StartingPitch"
import Metronome from "../components/Metronome"
import { sendAudio } from "../api/SendAudio"
// Large amount of importing pictures
import Phrase1 from "../images/phrases/Phrase1_C_100.png"
import Phrase2 from "../images/phrases/Phrase2_C_160.png"
import Phrase3 from "../images/phrases/Phrase3_G_120.png"
import Phrase4 from "../images/phrases/Phrase4_F_100.png"
import Phrase5 from "../images/phrases/Phrase5_G_120.png"
import Phrase6 from "../images/phrases/Phrase6_E_100.png"
import Phrase7 from "../images/phrases/Phrase7_B_160.png"
import Phrase8 from "../images/phrases/Phrase8_D_120.png"
import Phrase9 from "../images/phrases/Phrase9_E_100.png"
import Phrase10 from "../images/phrases/Phrase10_G_120.png"
import Phrase11 from "../images/phrases/Phrase11_C_120.png"
import Phrase12 from "../images/phrases/Phrase12_B_160.png"
import Phrase13 from "../images/phrases/Phrase13_E_120.png"
import Phrase14 from "../images/phrases/Phrase14_A_100.png"
import Phrase15 from "../images/phrases/Phrase15_G_120.png"
import Phrase16 from "../images/phrases/Phrase16_C_120.png"
import Phrase17 from "../images/phrases/Phrase17_C_160.png"
import Phrase18 from "../images/phrases/Phrase18_E_100.png"
import Phrase19 from "../images/phrases/Phrase19_C_120.png"
import Phrase20 from "../images/phrases/Phrase20_D_120.png"
import Phrase21 from "../images/phrases/Phrase21_C_100.png"
import Phrase22 from "../images/phrases/Phrase22_D_120.png"
import Phrase23 from "../images/phrases/Phrase23_A_160.png"

// Also create parallel arrays for the data so that starting pitch, metronome val, all line up
const phrases = [
  Phrase1,
  Phrase2,
  Phrase3,
  Phrase4,
  Phrase5,
  Phrase6,
  Phrase7,
  Phrase8,
  Phrase9,
  Phrase10,
  Phrase11,
  Phrase12,
  Phrase13,
  Phrase14,
  Phrase15,
  Phrase16,
  Phrase17,
  Phrase18,
  Phrase19,
  Phrase20,
  Phrase21,
  Phrase22,
  Phrase23,
]
const startPitches = [
  "C",
  "C",
  "G",
  "F",
  "G",
  "E",
  "B",
  "D",
  "E",
  "G",
  "C",
  "B",
  "E",
  "A",
  "G",
  "C",
  "C",
  "E",
  "C",
  "D",
  "C",
  "D",
  "A",
]
const tempos = [
  100, 160, 120, 100, 120, 100, 160, 120, 100, 120, 120, 160, 120, 100, 120,
  120, 160, 100, 120, 120, 100, 120, 160,
]

function DataCollectPage(props) {
  const [urlBlob, setUrlBlob] = useState("")
  const [metronome, setMetronome] = useState(false) // Whether it is on or not, not the bpm
  const [metronomeDisabled, setMetronomeDisabled] = useState(false)
  const [showTutorial, setShowTutorial] = useState(true)

  const [phraseImg, setPhraseImg] = useState(null)
  const [startingPitch, setStartingPitch] = useState("")
  const [bpm, setBpm] = useState(60)
  const [index, setIndex] = useState(0)

  const [phrasesRecorded, setPhrasesRecorded] = useState([""])

  //On componenent load
  useEffect(() => {
    refreshPhrase()
  }, [])

  const setAudioElement = blob => {
    const url = URL.createObjectURL(blob)
    setUrlBlob(url)
    console.log(url)
  }

  const refreshPhrase = () => {
    //TODO: Once phrase is sent, need to show a success
    //TODO: Once phrase is sent, refresh the urlblob and disable the button unil you record a new thing

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
    console.log(phrasesRecorded)
    navigate("/summary", {state: {phrases: phrasesRecorded}})
    //TODO: This
    // navigate("/summary")
    // Call Api to send information
    // Restart with a new phrase
    // Update Starting Pitch and Metronome
  }

  const handleSubmitPhrase = async () => {
    // Get information from blob url
    let blob = await fetch(urlBlob).then(res => {
      return res.blob()
    })
    const uuid = uuidv4()
    const filename =
      index +
      "_" +
      startPitches[index] +
      "_" +
      tempos[index] +
      "_" +
      props.location.state?.name +
      "_" +
      uuid
    const data = new FormData()
    data.append("file", blob, filename + ".wav")
    

    const success = await sendAudio(data, filename)
    if (success) {
      setPhrasesRecorded([...phrasesRecorded, filename])
      refreshPhrase()
    } else {
      console.log("Did not succeed")
    }
  }

  return (
    <Layout>
      <CenterGrid>
        <Typography variant="h1">SingSong</Typography>
        {showTutorial ? (
          <>
            <Tutorial
              name={props.location.state?.name}
              closeTutorial={handleCloseTutorial}
            />
          </>
        ) : (
          <>
            <StartingPitch startingPitch={startingPitch} />
            <Metronome
              setMetronome={setMetronome}
              metronome={metronome}
              bpm={bpm}
              disabled={metronomeDisabled}
            />
            <DataEntry
              urlBlob={urlBlob}
              setBlob={setAudioElement}
              phraseImage={phraseImg}
              setMetronome={setMetronome}
              setMetronomeDisabled={setMetronomeDisabled}
            />

            <Button
              size="large"
              variant="outlined"
              onClick={handleSubmitPhrase}
            >
              I'm Happy, Submit Phrase
            </Button>

            <Button
              size="large"
              variant="outlined"
              onClick={handleFinishClicked}
            >
              Done with data collection?
            </Button>
          </>
        )}
      </CenterGrid>
    </Layout>
  )
}

export const Head = () => (
  <Seo
    title="Singsong Homepage"
    description="Homepage of SingSong"
    children={undefined}
  />
)

export default DataCollectPage
