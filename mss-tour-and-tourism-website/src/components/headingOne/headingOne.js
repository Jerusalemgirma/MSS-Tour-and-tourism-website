

import React from "react";
import { Box,Stack } from "@mui/material";
import Divider from '@mui/material/Divider';

const HeadingOne=()=>{
    return(

        <Box sx={{ textAlign: 'center'}}>
         <h1 style={{textAlign: 'center', }}>Where we can find amazing place to visit?</h1>
         <p style={{ fontSize:'22px', fontWeight:25 ,paddingLeft:15,paddingRight:15}}>
          

         Ethiopia, in the Horn of Africa, is a rugged,
          landlocked country split by the Great Rift Valley. With 
          archaeological finds dating back more than 3 million years,
           it’s a place of ancient culture. Among its important sites are
            Lalibela with its rock-cut Christian churches from the 12th–13th centuries. Aksum is the ruins of an ancient city 
         with obelisks, tombs, castles and Our Lady Mary of Zion church.
          </p>
         <Stack 
         direction='row'
         spacing={5}   
         alignItems="center"
         justifyContent="center"

         >
            <Box  ><h1 style={{ fontSize:'30px' }}><b >hotel</b></h1> </Box>      <Divider orientation="vertical" flexItem />

            <Box><h1 style={{ fontSize:'30px' }}><b >park</b></h1></Box> <Divider orientation="vertical" flexItem />

            <Box ><h1 style={{ fontSize:'30px' }}><b >museam</b></h1></Box>  <Divider orientation="vertical" flexItem />

            <Box  ><h1 style={{ fontSize:'30px' }}><b >holiday</b></h1></Box><Divider orientation="vertical" flexItem />
            <Box  ><h1 style={{ fontSize:'30px' }}><b >hotel</b></h1></Box><Divider orientation="vertical" flexItem />
            <Box  ><h1 style={{ fontSize:'30px' }}><b >hotel</b></h1></Box><Divider orientation="vertical" flexItem />
            <Box  ><h1 style={{ fontSize:'30px' }}><b >hotel</b></h1></Box><Divider orientation="vertical" flexItem />
            <Box ><h1 style={{ fontSize:'30px' }}><b >hotel</b></h1></Box>


         </Stack>

           <Box><h2 style={{ paddingLeft:'100px', paddingRight:'100px' }}>
           Ethiopia, in the Horn of Africa, is a rugged, landlocked country 
           split by the Great Rift Valley. With archaeological
            finds dating back more than 3 million years, it’s a place of ancient culture

             </h2>
        </Box>

         {/* <Box sx={{ height:'700px', backgroundColor:"powderblue" }}>

         </Box> */}
         
        </Box>

        )
    
}

export default HeadingOne