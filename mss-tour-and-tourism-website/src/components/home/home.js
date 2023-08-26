import React from "react"

// import Box from '@mui/material'
import {Grid,Box }from "@mui/material"
import Navbar from "../navbar/navbar"
import HeadingOne from "../headingOne/headingOne"

const Home=()=>{
    return(
        <Box>
           <Grid container direction='column'>
              <Grid item sx={{ color:'black' }} ><Navbar /></Grid>
              <Grid item sx={{ color:'black' }}><HeadingOne /></Grid>
              <Grid item sx={{ color:'black' }}>3</Grid>
              <Grid item sx={{ color:'black' }}>4</Grid>
              <Grid item sx={{ color:'black' }}>5</Grid>
              <Grid item sx={{ color:'black' }}>6</Grid>
              <Grid item sx={{ color:'black' }}>7</Grid>
              <Grid item sx={{ color:'black' }}>8</Grid>
              <Grid item sx={{ color:'black' }}>9</Grid>
              <Grid item sx={{ color:'black' }}>10</Grid>

           </Grid>
        </Box>
    )
}


export default Home