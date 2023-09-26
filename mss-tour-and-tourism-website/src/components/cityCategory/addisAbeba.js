

import React from 'react'
import { Stack,Box,Button }  from '@mui/material'


const AddisAbeba=()=>{
    const Part=(props)=>{
        return(

        <Stack>
            <Box>
                <img src={props.imagee}/>
            </Box>
            <Box>
                <h1>{props.title}</h1>
                <p> {props.explanation}</p>
                <Button contained> Read more...</Button>
            </Box>
        </Stack>)
    }

 
    return(
        <></>
//        <Stack> 
//  <Part imagee={}
//                 title=''
//                  explanation=''/>

//   <Part imagee={}
//                 title=''
//                  explanation=''/>
//   <Part imagee={}
//                 title=''
//                  explanation=''/>
//   <Part imagee={}
//                 title=''
//                  explanation=''/>
//   <Part imagee={}
//                 title=''
//                  explanation=''/>
//   <Part imagee={}
//                 title=''
//                  explanation=''/>
//   <Part imagee={}
//                 title=''
//                  explanation=''/>
//   <Part imagee={}
//                 title=''
//                  explanation=''/>
//   <Part imagee={}
//                 title=''
//                  explanation=''/>



// </Stack>
    
    )
}  


export default AddisAbeba