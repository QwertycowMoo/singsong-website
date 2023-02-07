import * as React from "react"
import { Link } from "gatsby"
import { Button, Grid, Typography } from "@mui/material"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { AudioRecorder } from "react-audio-voice-recorder"
import { navigate } from "gatsby"

function DataCollectPage(props) {
    const handleFinishClicked = () => {
        navigate("/summary")
    }
    return (
        <Layout>
        <Grid container 
            sx={{justifyContent: "center"}}
            direction="column">
            <Grid item>
                <Typography variant="h1">
                    Hello {props.location.state.name}
                </Typography>
            </Grid>
            <Grid item>
                <AudioRecorder></AudioRecorder>
                {/* Use Wavesurfer.js to visualize and playback audio? */}
            </Grid>
            <Grid item>
                <Button size="large" variant="outlined" onClick={handleFinishClicked}>Finish</Button>
            </Grid>
        </Grid>
        </Layout>
        
    
    )
}



export const Head = () => <Seo title="Singsong Homepage" description="Homepage of SingSong" children={undefined} />

export default DataCollectPage
