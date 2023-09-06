import { Box, Button, Grid, Stack } from "@mui/material";
import  React ,{ useState, useEffect } from "react";
import ButtonBase from '@material-ui/core/ButtonBase';


import img1 from '../../assets/hotels/sheraton.jpg'


const PartThree=()=>{
   
    

    
   

       return(
        <Stack direction='column' pl={12} pr={12} spacing={2}>

         <Stack  direction='row' spacing={2} sx={{ marginLeft:15 }}>
           <ButtonBase>
             <Box sx={{ width:753,height:380, border:0.5 , borderRadius:'5%'}}>
                <img src={img1} style={{width:753, height:380, border:0.5 , borderRadius:'5%' }}/>
                <h1  style={{ position:'relative',bottom:400}}>Sheraton Hotel</h1>

             </Box>
            </ButtonBase>
            <Box sx={{ width:754,height:380, border:0.5 , borderRadius:'5%'}}>
                <img src={img1} style={{width:754, height:380, border:0.5 , borderRadius:'5%' }}/>
                <h1  style={{ position:'relative',bottom:400,}}>Sheraton Hotel</h1>

            </Box> 
         </Stack>

         <Stack direction='row' spacing={2} >
           <Box sx={{ width:500,height:400, border:0.5 , borderRadius:'5%'}}>
                <img src={img1} style={{width:500, height:400, border:0.5 , borderRadius:'5%' }}/>
                <h1  style={{ position:'relative',bottom:400,left:330}}>Sheraton Hotel</h1>

            </Box>
            <Box sx={{ width:500,height:400, border:0.5 , borderRadius:'5%'}}>
                <img src={img1} style={{width:500, height:400, border:0.5 , borderRadius:'5%' }}/>
                <h1  style={{ position:'relative',bottom:400,left:330}}>Sheraton Hotel</h1>

            </Box>
            <Box sx={{ width:500,height:400, border:0.5 , borderRadius:'5%'}}>
                <img src={img1} style={{width:500, height:400, border:0.5 , borderRadius:'5%' }}/>
                <h1  style={{ position:'relative',bottom:400,left:330}}>Sheraton Hotel</h1>

            </Box>
            
         </Stack>

         <Box>
            <Box></Box>
            <Box></Box>
         </Box>

        </Stack>
       
    ) 
}



export default PartThree