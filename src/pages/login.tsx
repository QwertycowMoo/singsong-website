import * as React from "react"
import { Link } from "gatsby"
import { Button, Grid, Typography } from "@mui/material"
import Layout from "../components/layout"
import Seo from "../components/seo"

const LoginPage = () => (
    <Grid container sx={{justifyContent: "center"}} p={2}>
        <Grid>
            <Typography variant="h1">
                SingSong Login
            </Typography>
        </Grid>
        <Grid>
            <Link to="/datacollect">
                <Button size="large" variant="outlined">Continue</Button>
            </Link>
            
        </Grid>
        
    </Grid>

)

export const Head = () => <Seo title="Singsong Homepage" description="Homepage of SingSong" children={undefined} />

export default LoginPage
