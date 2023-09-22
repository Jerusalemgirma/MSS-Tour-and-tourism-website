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
import PartNine from "../partNine/partNine"
import PartTen from "../partTen/partTen"
import PartEleven from "../partEleven/partEleven"
import PartTwelve from "../partTwelve/partTwelve"
import PartThirteen from "../partThirteen/partThirteen"


const Home=()=>{
    return(
        <Box>
           <Grid container direction='column' spacing={5}>


              <Grid item sx={{  }} ><Navbar /></Grid>
              <Grid item sx={{  }}><HeadingOne /></Grid>
              <Grid item sx={{ }}> <PartOne /> </Grid>
              <Grid item sx={{ }}><PartTwo /></Grid>
              <Grid item sx={{ }}><PartThree /></Grid>
              <Grid item sx={{ }}><PartFour /></Grid>
              <Grid item sx={{ }}>< PartFive /></Grid>
              <Grid item sx={{ }}><PartSix /></Grid>
              <Grid item sx={{ }}> <PartTwelve /> </Grid>
              <Grid item sx={{ }}>< PartSeven/></Grid>
              <Grid item sx={{ }}> <PartEight/></Grid>
              <Grid item sx={{ }}> <PartThirteen /> </Grid>
              <Grid item sx={{ }}> <PartNine /></Grid>
              <Grid item sx={{ }}> <PartTen /> </Grid>
              <Grid item sx={{ }}> <PartEleven /> </Grid>
              {/* <Grid item sx={{ }}> <PartThirteen /> </Grid> */}


           </Grid>
        </Box>
    )
}


export default Home