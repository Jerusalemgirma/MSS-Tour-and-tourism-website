

import { Grid,Box, Stack } from "@mui/material";
import React from "react";

import img1 from '../../assets/unesico/aksum1.jpg'
import img2 from '../../assets/unesico/aksum2.jpg'
import img3 from '../../assets/unesico/aksum3.jpg'
import img4 from '../../assets/unesico/aksum4.jpg'
import img5 from '../../assets/unesico/aksum5.jpg'


const PartEight=()=>{

    const Cardd=(props)=>{
        return(
            <Stack direction='row'   p={3} sx={{boxShadow:4,backgroundColor:'#EBF5F6' }} >
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
        <h1> Ethiopia has many unesico registerd Events and holiday</h1>
        <Cardd 
           name='Aksum'
           location='Around Tigray, Ethiopia'
           detail="Aksum is a city in northern Ethiopia. 
           It's known for its tall, carved obelisks, relics of the ancient Kingdom of Aksum.
            Most are in the northern Stelae Park, including a huge fallen pillar, now in pieces. 
            Centuries-old St. Mary of Zion is a Christian church and pilgrimage 
            site believed to have housed the biblical Ark of the Covenant.
            The neighboring Chapel of the Tablet is said to contain the Ark today."
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