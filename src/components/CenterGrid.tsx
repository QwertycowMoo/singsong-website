import * as React from "react"
import { Grid } from "@mui/material"
import { Box } from "@mui/system"

const CenterGrid = ({ children }) => (
    <Grid container 
    sx={{justifyContent: "center"}}
    direction="row">
        <Grid item xs={2}/>
        <Grid item xs={8}>
            <Box
            sx= {{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 2}}>
                {children}
            </Box>
            
        </Grid>
        <Grid item xs={2}/>
    </Grid>

)

export default CenterGrid
