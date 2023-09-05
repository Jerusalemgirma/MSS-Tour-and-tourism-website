import React from "react"

// import Box from '@mui/material'
import {Grid,Box }from "@mui/material"
import Navbar from "../navbar/navbar"
import HeadingOne from "../headingOne/headingOne"
import PartOne from "../partOne/partOne"
import PartTwo from "../partTwo/partTwo"
import PartThree from '../partThree/partThree'
import PartFour from "../partFour/partFour"

const Home=()=>{
    return(
        <Box>
           <Grid container direction='column' spacing={6}>
              <Grid item sx={{ color:'black' }} ><Navbar /></Grid>
              <Grid item sx={{ color:'black' }}><HeadingOne /></Grid>
              <Grid item sx={{ }}> <PartOne /> </Grid>
              <Grid item sx={{ color:'black' }}><PartTwo /></Grid>
              <Grid item sx={{ color:'black' }}><PartThree /></Grid>
              <Grid item sx={{ color:'black' }}><PartFour /></Grid>
              <Grid item sx={{ color:'black' }}>7</Grid>
              <Grid item sx={{ color:'black' }}>8</Grid>
              <Grid item sx={{ color:'black' }}>9</Grid>
              <Grid item sx={{ color:'black' }}>10</Grid>

           </Grid>
        </Box>
    )
}


export default Home