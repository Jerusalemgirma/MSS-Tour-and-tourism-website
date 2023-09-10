import React from "react"

// import Box from '@mui/material'
import {Grid,Box }from "@mui/material"
import Navbar from "../navbar/navbar"
import HeadingOne from "../headingOne/headingOne"
import PartOne from "../partOne/partOne"
import PartTwo from "../partTwo/partTwo"
import PartThree from '../partThree/partThree'
import PartFour from "../partFour/partFour"
import PartFive from "../partFive/partFive"
import PartSix from "../partSix/partSix"
import PartSeven from "../partSeven/partSeven"
import PartEight from "../partEight/partEight"
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
              <Grid item sx={{ color:'black' }}>< PartFive /></Grid>
              <Grid item sx={{ color:'black' }}><PartSix /></Grid>
              <Grid item sx={{ color:'black' }}>< PartSeven/></Grid>
              <Grid item sx={{ color:'black' }}> <PartEight/></Grid>

           </Grid>
        </Box>
    )
}


export default Home