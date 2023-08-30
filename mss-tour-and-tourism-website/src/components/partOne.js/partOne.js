

import React from "react";
import Cardd from "../card/card";
import { Stack ,Box} from "@mui/material";
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'
import img7 from '../../assets/img7.jpg'
import img8 from '../../assets/img8.jpg'
import img9 from '../../assets/img9.jpg'
import img10 from '../../assets/img10.jpg'
import img11 from '../../assets/img11.jpg'
import img12 from '../../assets/img12.jpg'

const PartOne=()=>{
    const nu = [1,2,4,5,6]
    const pics=[img2,img3,img4,img5]
    const pics2=[img7,img8,img9,img10]
     

    return(
    <Stack spacing={5} mt={6}>
        <Stack direction='row' spacing={3}>
         {
            pics.map((e)=>(
                
               <Box><Cardd imagee={e}/></Box>
             ))
         
          }
        </Stack>
        <Stack direction='row' spacing={3}>
         {
             pics2.map((e)=>(
                
                <Box><Cardd imagee={e}/></Box>
              ))
         
          }
        </Stack>
        
    </Stack>
    )
}


export default PartOne