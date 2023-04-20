import * as React from "react"
import { useEffect } from "react"
import { Link } from "gatsby"
import { Button, Grid, Typography } from "@mui/material"
import Layout from "../components/layout"
import Seo from "../components/seo"

function SummaryPage(props) {
    useEffect(() => {
        console.log(props.location.state?.phrases)
    }, [])
    return (
        <Grid container sx={{justifyContent: "center"}} p={2}>
            <Grid>
                <Typography variant="h1">
                    SingSong Summary
                </Typography>
                {props.location.state?.phrases.map(phrase => 
                    <Typography key={phrase}>{phrase}</Typography>
                )}
                <Link to="/login">
                    <Button size="large" variant="outlined">Restart</Button>
                </Link>
            </Grid>
        </Grid>

    )
}

export const Head = () => <Seo title="Singsong Homepage" description="Homepage of SingSong" children={undefined} />

export default SummaryPage
