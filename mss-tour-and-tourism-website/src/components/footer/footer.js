
import React from "react";

import { Box,Grid,Button } from"@mui/material";
import { Stack } from "@mui/material";
import TextField from '@mui/material/TextField';



const Footer=()=>{
    return(
        <Box>
           
            <Stack >
                <Box sx={{ 
                backgroundColor:'#131414' ,
                color:'white',
                }} 
                p={5}>
                   <h1>Contact Us</h1>
                    <form  >
                        <Stack direction='column' spacing={2} >
                          <Stack direction='row' spacing={5}>
                           <Box >
                            <h3>Enter Full name</h3>
                            <TextField 
                               sx={{border:'1px solid white',width:330}}
                               inputProps={{
                                style: {
                                  color: "white"
                                }
                              }}
                                type="text"
                                // label='Full name'

                              />
                              </Box>

                              <Box>
                              <h3>Enter Email</h3>

                                <TextField 
                               type="email"
                            //    label='email'
                               sx={{border:'1px solid white',width:330}}
                               inputProps={{
                                style: {
                                  color: "white"
                                }
                              }}
                             />
                             </Box> 
                          </Stack>
                          <Box>
                          <h3>Enter Address</h3>

                          <TextField
                              type="text"
                            //   label='addrress'
                            sx={{border:'1px solid white',width:690}}
                            inputProps={{
                             style: {
                               color: "white"
                             }
                           }}                              /> 
                         </Box>
                         <Box>
                         <h3>Enter your comment</h3>

                          <textarea 
                              placeholder="commet section"
                              style={{ width:690,height:120 }}
                               />
                        </Box>
                        <Box pl={38}>
                          <Button variant="contained" color="primary" >Submit</Button>
                        </Box>
                        </Stack>

                    </form>
                </Box>


                <Box>footer</Box>
            </Stack>
        </Box>
    )
}


export default Footer