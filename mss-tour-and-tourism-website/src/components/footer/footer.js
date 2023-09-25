
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




                <Box p={8} sx={{backgroundColor:'#b4e2cb' }}>
                    footer
                    <Stack direction='row' spacing={16}>

                    <Box sx={{ width:500 }}>
                        <h1>About Us</h1>
                        <b style={{ fontSize:20 }}>
                            Visit Ethiopia website is website which try to show all over ethiopia from the geographical
                            appearance  to wondefull events and festival celebration .it also give information and hint
                            about most visted places, amazing park and muesums , waterfalls and volcanos ,mountain and plains,endemic plant and 
                            animals,unique foods and dress in Ethiopia for peoples who want vist ethiopia and make this easy 
                        </b>

                    </Box>
                    <Box> 
                    <h1>Contact inforation</h1>
                        <p >phoneNumber:
                        email:  <br/>
                        instagram:<br/>
                        telegram:<br/>
                        skype:<br/>
                        twitter:<br/>
                        linkedIn:
                        </p>


                    </Box>
                    <Box sx={{ width:450 }}>
                       <h1 >On page Route</h1> 
                    <b style={{fontSize:20  }}>
                        <a href="#part1">What Parks are there in Ethiopia?</a><br/>
                        
                       <a> What Heritages of ethiopia are registerd on unesico?</a><br/>
                          What Hotels there in Ethiopia?<br/>
                         what intageble heritage or Events of ethiopia registerd on unesico?<br/>
                         What Muesums are there in Ethiopia?<br/>
                         What Waterfalls are there in Ethiopia?<br/>
                         what events and festival celebration are there in ethiopia?<br/>
                         What foods are there in Ethiopia?<br/>
                         how many nations and nationatonality are there in ethiopia?<br/>
                         What animals and plants are there in Ethiopia?
                    </b>
                    </Box>
                    {/* <Box>page route</Box> */}

                    </Stack>
                    
                    </Box>
            </Stack>
        </Box>
    )
}


export default Footer