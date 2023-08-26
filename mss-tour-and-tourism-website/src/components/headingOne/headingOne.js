

import React from "react";
import { Box,Stack } from "@mui/material";
import Divider from '@mui/material/Divider';

const HeadingOne=()=>{
    return(

        <Box sx={{ textAlign: 'center'}}>
         <h1 style={{     textAlign: 'center', }}>where to find delicious foods?</h1>
         <p style={{ fontSize:'20px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
         <Stack 
         direction='row'
         spacing={5}   
         alignItems="center"
         justifyContent="center"

         >
            <Box  ><h1 style={{ fontSize:'30px' }}><b >hotel</b></h1> </Box>      <Divider orientation="vertical" flexItem />

            <Box><h1 style={{ fontSize:'30px' }}><b >hotel</b></h1></Box> <Divider orientation="vertical" flexItem />

            <Box ><h1 style={{ fontSize:'30px' }}><b >hotel</b></h1></Box>  <Divider orientation="vertical" flexItem />

            <Box  ><h1 style={{ fontSize:'30px' }}><b >hotel</b></h1></Box><Divider orientation="vertical" flexItem />
            <Box  ><h1 style={{ fontSize:'30px' }}><b >hotel</b></h1></Box><Divider orientation="vertical" flexItem />
            <Box  ><h1 style={{ fontSize:'30px' }}><b >hotel</b></h1></Box><Divider orientation="vertical" flexItem />
            <Box  ><h1 style={{ fontSize:'30px' }}><b >hotel</b></h1></Box><Divider orientation="vertical" flexItem />
            <Box ><h1 style={{ fontSize:'30px' }}><b >hotel</b></h1></Box>


         </Stack>
        </Box>

        )
    
}

export default HeadingOne