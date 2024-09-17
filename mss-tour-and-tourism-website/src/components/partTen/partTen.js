

import { Box, Stack } from "@mui/material";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const PartTen=()=>{
    const age=''
    return(
    <Box  pt={5} pl={5}  sx={{width:1280, height:320 ,backgroundColor:'#151a22',opacity:0.8,color:'white'}} > 
        <h1>Toursim of Ethiopia</h1>
        <p style={{ fontSize:21, paddingRight:90 }}>
          Ethiopia has an unequalled range of natural habitats,
          ranging from the extraordinary peaks and ambas (flat-topped summits) 
          of the Simien Mountains at over 4,000 meters, to the Danakil Depression,
          120 meters below sea-level, one of the lowest points as well as the hottest 
          place on Earth. There are Afro-Alpine highlands, moors and mountains, deep gorges, 
          the Sof Omar caves (the most extensive in Africa), the Great Rift Valley and
          its many lakes, tropical rain forests, white-water rivers and rock climbing faces,
          savannahs, waterfalls, volcanic hot springs and  a volcano or two.
          These are supplemented by a wealth of historic, cultural, religious, 
          archaeological and anthropological sites, including the northern "historic route" 
          which incorporates the former capitals of Gondar (17and 18th centuries), Axum (1st-8th centuries),
          and Lalibela (12th-13th centuries) 
          
        </p>
        
    </Box>)
}

export default  PartTen
