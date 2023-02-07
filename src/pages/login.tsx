import * as React from "react"
import { Link } from "gatsby"
import { Button, Grid, Typography } from "@mui/material"
import Layout from "../components/layout"
import Seo from "../components/seo"
import CenterGrid from "../components/CenterGrid"
import LoginForm from "../components/LoginForm"

const LoginPage = () => (
    <Layout>
         <CenterGrid>
            <Typography variant="h3">
                SingSong Login
            </Typography>
            <LoginForm/>
        </CenterGrid>

    </Layout>
   

)

export const Head = () => <Seo title="Singsong Homepage" description="Homepage of SingSong" children={undefined} />

export default LoginPage
