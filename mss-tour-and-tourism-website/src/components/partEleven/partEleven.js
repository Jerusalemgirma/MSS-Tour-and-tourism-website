

 import { Box, Stack } from '@mui/material'
 import React, { useState } from 'react'

//Bale Mountains National Park
 

const PartEleven=()=>{

    const [count,setCount]=useState(1)

        const Cardd=(props)=>{
        return(
        <Box>
            <img src={props.imagee}/>
            <h2>{props.title} </h2>
            <p> {props.explanation}</p>
        </Box>
        )
    }
    return(
        <Box>
        
         {
            (count===1) &&<Stack direction='column'>

                <Stack direction='row'>
                     < Cardd />
                </Stack>
                <Stack direction='row'>
                    
                </Stack>

                </Stack>
                      }
        </Box>
    )
}