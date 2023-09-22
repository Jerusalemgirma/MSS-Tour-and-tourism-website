

import React, { useState } from "react";
import { Box,Stack } from "@mui/material";

//afar
//amhara
//argoba
//awii
//basketo
//Burji
//Dawro
//gamo
//Gedeo
//Goffa
//gumuz
//gurage
//hadiya

import img1 from '../../assets/nations/afar.jpg'
import img2 from '../../assets/nations/amhara.jpg'
import img3 from '../../assets/nations/argoba.jpg'
import img4 from '../../assets/nations/awii.jpg'
import img5 from '../../assets/nations/basketo.jpg'
import img6 from '../../assets/nations/Burji.jpg'
import img7 from '../../assets/nations/Dawro.jpg'
import img8 from '../../assets/nations/gamo.jpg'
import img9 from '../../assets/nations/Gedeo.jpg'
import img10 from '../../assets/nations/Goffa.jpg'
import img11 from '../../assets/nations/gumuz.jpg'
import img12 from '../../assets/nations/gurage.jpg'
import img13 from '../../assets/nations/hadiya.jpg'
import img14 from '../../assets/nations/halaba.jpg'
import img15 from '../../assets/nations/Hamar.jpg'
import img16 from '../../assets/nations/harari.jpg'
import img17 from '../../assets/nations/kambata.jpg'
import img18 from '../../assets/nations/karo.jpg'
import img19 from '../../assets/nations/mursi.jpg'
import img20 from '../../assets/nations/oromo.jpg'
import img21 from '../../assets/nations/Qebena.jpg'
import img22 from '../../assets/nations/shinasha.jpg'
import img23 from '../../assets/nations/sidama.jpg'
import img24 from '../../assets/nations/silte.jpg'
import img25 from '../../assets/nations/somali.jpg'
import img26 from '../../assets/nations/welayta.jpg'


import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import ButtonBase from '@material-ui/core/ButtonBase';





const Fourteen=()=>{
    const [count,setCount]=useState(1)

    const One=(props)=>{
        return(
        <Box sx={{ borderRadius:'5%',  }}>
            <h2>{props.title}</h2>
            <img src={props.imagee}/>
        </Box>
        )
    }

    const Two=(props)=>{
        return(
            <Box>
            <img src={props.imagee}/>
            <h2>{props.title}</h2>

        </Box>
        )
    }
    const add=()=>{
        if(count===2){
            setCount(2)
        }else{
            setCount(count+1)}
    }
    const minus=()=>{
        if(count===1){
            setCount(1)
        }else{setCount(count-1)}
    }

    return(
    <Box>
       <Stack direction='column' spacing={1} borderRadius='7%'>
        <Stack direction='row' spacing={1}> 
          
        </Stack>
    </Stack> 
    </Box>
)}