

import React from "react";
import Cardd from "../card/card";
import { Stack ,Box} from "@mui/material";

const PartOne=()=>{
    const nu = [1,2,4,5,6]
    return(
    <Stack spacing={5}>
        <Stack direction='row' spacing={3}>
         {
            nu.map((e)=>(
               <Box><Cardd /></Box>
             ))
         
          }
        </Stack>
        <Stack direction='row' spacing={3}>
         {
            nu.map((e)=>(
               <Box><Cardd /></Box>
             ))
         
          }
        </Stack>
        
    </Stack>
    )
}


export default PartOne