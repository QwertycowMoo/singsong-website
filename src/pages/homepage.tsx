import * as React from "react"
import { Link } from "gatsby"
import { Button, Grid, Typography } from "@mui/material"
import Layout from "../components/layout"
import Seo from "../components/seo"
import CenterGrid from "../components/CenterGrid"
import { Box } from "@mui/system"

const HomePage = () => (
    <CenterGrid>
            <Typography variant="h1">
                SingSong
            </Typography>

            <Typography variant="body1" align="center">
                Welcome to SingSong, a data collection webapp to help with machine learning transcription research!
                We really appreciate your time and effort to help us collect data for our vocal transcription work.
                - Kevin Zhou and Evan Matthews
            </Typography>

            <Link to="/login">
                <Button size="large" variant="outlined">Start</Button>
            </Link>
    </CenterGrid>
            

)

export const Head = () => <Seo title="Singsong Homepage" description="Homepage of SingSong" children={undefined} />

export default HomePage
