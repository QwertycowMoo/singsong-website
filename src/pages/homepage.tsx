import * as React from "react"
import { Link } from "gatsby"
import { Button, Grid, Typography } from "@mui/material"
import Layout from "../components/layout"
import Seo from "../components/seo"

const HomePage = () => (
    <Grid container sx={{justifyContent: "center"}} p={2}>
        <Grid>
            <Typography variant="h1">
                SingSong
            </Typography>
        </Grid>
        <Grid>
            <Typography variant="body1" align="center">
                Welcome to SingSong, a data collection webapp to help with machine learning transcription research!
                We really appreciate your time and effort to help us collect data for our vocal transcription work.
                - Kevin Zhou and Evan Matthews
            </Typography>
        </Grid>
        <Grid>
            <Link to="/login">
                <Button size="large" variant="outlined">Start</Button>
            </Link>
            
        </Grid>
        
    </Grid>

)

export const Head = () => <Seo title="Singsong Homepage" description="Homepage of SingSong" children={undefined} />

export default HomePage
