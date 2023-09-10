

import { Grid,Box, Stack } from "@mui/material";
import React from "react";

import img1 from '../../assets/unesico/meskel1.jpg'
import img2 from '../../assets/unesico/meskel2.jpg'
import img3 from '../../assets/unesico/meskel3.webp'
import img4 from '../../assets/unesico/meskel4.jpg'
import img5 from '../../assets/unesico/meskel5.jpg'


const PartEight=()=>{

    const Cardd=(props)=>{
        return(
            <Stack direction='row'   p={3} sx={{boxShadow:4,backgroundColor:'#DDF9EE' }} >
              <Box sx={{ width:650 }}>
                  <img src={props.image1} style={{ width:640 ,height:800}}/>
              </Box>
              <Box  sx={{ textAlign:"center"}}>
                
                    <h1>{props.name}</h1>
                    <h6 style={{ fontSize:20 }}>{props.location}</h6>
                    <p style={{ marginBottom:203 ,fontSize:30,marginLeft:30,marginRight:30}}>{props.detail}</p>
                  <Stack direction='row' spacing={1}>
                    <img src={props.image5} style={{ width:270,height:240 }}/>
                    <img src={props.image3 } style={{ width:270,height:240 }}/>
                    <img src={props.image4} style={{ width:270,height:240 }}/>
                    <img src={props.image2} style={{ width:270,height:240}}/>
                 </Stack>
             </Box>

          

        </Stack>

    )}
    return(
        <Box >
        <h1> Ethiopia has also unesico registerd  intangible heritages</h1>
        <Cardd 
           name='Meskel (Commemoration feast of the finding of the True Holy Cross of Christ)'
           location='Christian holiday in the Ethiopian Orthodox, Ethiopia'
           detail="Meskel is a Christian holiday in the Ethiopian Orthodox and Eritrean Orthodox churches that commemorates the discovery of the True Cross by the Roman Empress Helena in the fourth century. 
           Meskel occurs on the 17 Meskerem in the Ethiopian calendar. 'Meskel'is Ge'ez for 'cross."
            image1={img1}
            image2={img2}
            image3={img3}
            image4={img4}
            image5={img5}

        />

        </Box>
    )

}

export default PartEight