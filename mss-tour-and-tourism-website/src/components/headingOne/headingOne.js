

import React from "react";
import { Box,Button,Stack } from "@mui/material";
import Divider from '@mui/material/Divider';
import {Link} from 'react-router-dom'
import { ButtonBase } from "@material-ui/core";

const HeadingOne=()=>{
    return(

        <Box pt={3} pb={2} sx={{ textAlign: 'center',backgroundColor:'#e8f6ef'}}>
         <h1 style={{textAlign: 'center', }}>Where we can find amazing place to visit?</h1>
         <Box sx={{ paddingLeft:12,paddingRight:18 }}>
         <p style={{ fontSize:'21px', fontWeight:25 }}>
          

                  Ethiopia, in the Horn of Africa, is a rugged,
                  landlocked country split by the Great Rift Valley. With 
                  archaeological finds dating back more than 3 million years,
                  it's a place of ancient culture. Among its important sites are
                  Lalibela with its rock-cut Christian churches from the 12th-13th
                  centuries. Aksum is the ruins of an ancient city 
                  with obelisks, tombs, castles and Our Lady Mary of Zion church.
                  
          </p>
          </Box>
         <Stack 
            direction='row'
            spacing={5}   
            alignItems="center"
            justifyContent="center"
           >

            <Box  ><Link to='hotels'><ButtonBase><h1 style={{ fontSize:'20px',color:'black' }}><b >Hotel</b></h1></ButtonBase></Link> </Box><Divider orientation="vertical" flexItem />

            <Box><Link to='hotels'><ButtonBase><h1 style={{ fontSize:'20px',color:'black' }}><b >Park</b></h1></ButtonBase></Link></Box><Divider orientation="vertical" flexItem />

            <Box ><Link to='hotels'><ButtonBase><h1 style={{ fontSize:'20px',color:'black' }}><b >Museum</b></h1></ButtonBase></Link></Box><Divider orientation="vertical" flexItem />

            <Box  ><Link to='hotels'><ButtonBase><h1 style={{ fontSize:'20px',color:'black' }}><b >WaterFalls</b></h1></ButtonBase></Link></Box><Divider orientation="vertical" flexItem />
            <Box  ><Link to='hotels'><ButtonBase><h1 style={{ fontSize:'20px' ,color:'black'}}><b >Heritages</b></h1></ButtonBase></Link></Box><Divider orientation="vertical" flexItem />
            <Box  ><Link to='hotels'><ButtonBase><h1 style={{ fontSize:'20px' ,color:'black'}}><b >Festivals</b></h1></ButtonBase></Link></Box><Divider orientation="vertical" flexItem />
            {/* <Box  ><h1 style={{ fontSize:'30px' }}><b >Nations</b></h1></Box><Divider orientation="vertical" flexItem /> */}
            {/* <Box ><h1 style={{ fontSize:'30px' }}><b >Animal and plants</b></h1></Box> */}


         </Stack>

           <Box>
            <h3 style={{ paddingLeft:'100px', paddingRight:'100px' }}>
               

               Ethiopia, in the Horn of Africa, is a rugged, landlocked country 
               split by the Great Rift Valley. With archaeological
               finds dating back more than 3 million years, it's a place
               of ancient culture
             </h3>
            <Link to ='/postregister'><ButtonBase><Button  variant="contained" sx={{color:'white', borderRadius:12,height:50,top:10,position:'relative' ,backgroundColor:'blue' ,marginBottom:5}}> register places </Button></ButtonBase></Link> 
        </Box>


         
        </Box>
        )
    
}

export default HeadingOne