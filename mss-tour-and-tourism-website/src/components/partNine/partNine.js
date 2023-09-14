
import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
// Abyssinian longclaw.jpg
// BaleMountainsVervet.jpg
// BigHeadedAfricanMoleRat.webp
// Black-clawed brush-furred rat.JPG
// Blue-wingedGoose.jpg
// EthiopianHighlandHare.jpg
// EthiopianSiskin.jpg
// ethiopianWolf.jpg
// gelada.jpg
// Harnessed bushbuck.jpg
// Harwood'sSpurfowl.jpg
// Leptopelis gramineus.jpg
// MountainNyala.jpg
// Ptychadena neumanni.jpg
// Ruspoli's turaco.jpg
// SomaliWildAss.webp
// Spot-breastedLapwing.jpg
// Swayne.jpg
// waliaIbex.jpg
// White-tailed swallow.jpg
// YellowFrontedParrot.jpg

import img1 from  '../../assets/endemic/Abyssinian longclaw.jpg'
import img2 from  '../../assets/endemic/YellowFrontedParrot.jpg'
import img3 from  '../../assets/endemic/BaleMountainsVervet.jpg'
import img4 from  '../../assets/endemic/White-tailed swallow.jpg'
import img5 from  '../../assets/endemic/BigHeadedAfricanMoleRat.webp'
import img6 from  '../../assets/endemic/waliaIbex.jpg'
import img7 from  '../../assets/endemic/Black-clawed brush-furred rat.JPG'
import img8 from  '../../assets/endemic/Swayne.jpg'
import img9 from  '../../assets/endemic/Blue-wingedGoose.jpg'
import img10 from  '../../assets/endemic/EthiopianHighlandHare.jpg'
import img11 from  '../../assets/endemic/SomaliWildAss.webp'
import img12 from  '../../assets/endemic/EthiopianSiskin.jpg'
import img13 from  '../../assets/endemic/Ruspolis turaco.jpg'
import img14 from  '../../assets/endemic/ethiopianWolf.jpg'
import img15 from  '../../assets/endemic/Ptychadena neumanni.jpg'
import img16 from  '../../assets/endemic/gelada.jpg'
import img17 from  '../../assets/endemic/MountainNyala.jpg'
import img18 from  '../../assets/endemic/Harnessed bushbuck.jpg'
import img19 from  '../../assets/endemic/Leptopelis gramineus.jpg'
import img20 from  '../../assets/endemic/HarwoodsSpurfowl.jpg'
import img21 from  '../../assets/endemic/Spot-breastedLapwing.jpg'
import img22 from  '../../assets/endemic/Salvadoris seedeater.jpg'
import img23 from  '../../assets/endemic/The Ethiopian banana frog.webp'
import img24 from  '../../assets/endemic/Moorland francolin.jpg'

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import ButtonBase from '@material-ui/core/ButtonBase';

const PartNine=()=>{
    const [count ,setCount]=useState(1)
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
        <Box >
            <h1>There are many endemic animal in Ethiopia</h1>
        <Stack p={7} sx={{ boxShadow:3 }} >
            <h3> Page {count}</h3>
            <Stack direction='row' spacing={1}>
                <Box> <img src={img10} style={{ width:400 }} /> <h3> Ethiopian Highland Hare</h3></Box>

                <Box > <img src={img2} style={{ width:420 }}/> <h3> Yellow Fronted Parrot</h3></Box>
                <Box> <img src={img3} style={{ width:410 }} /> <h3> Bale Mountains Vervet</h3></Box>
                <Box> <img src={img4} style={{ width:430 }} /> <h3>White-tailed swallow</h3></Box>

            </Stack>
            <Stack direction='row'spacing={1}>
                <Box> <img src={img5} style={{ width:420 }} /> <h3> Big Headed African Mole Rat</h3></Box>
                <Box> <img src={img6} style={{ width:410 }} /> <h3> waliaIbex</h3></Box>
                <Box> <img src={img7} style={{ width:420 }} /> <h3>Black-clawed brush-furred rat</h3></Box>
                <Box> <img src={img8} style={{ width:410 }}  /> <h3>Swayne</h3></Box>

            </Stack>
            <Stack direction='row' spacing={1}>
                <Box> <img src={img9} style={{ width:400 }} /> <h3> Blue-wingedGoose</h3></Box>
                <Box> <img src={img11} style={{ width:400 }} /> <h3>Somali Wild Ass</h3></Box>
                <Box> <img src={img12} style={{ width:400 }} /> <h3>Spot-breasted Lapwing.</h3></Box>
                <Box > <img src={img1} style={{ width:410 }} /> <h3> Abyssinian longclaw</h3></Box>

            </Stack>
            <Stack  direction='row' ml={60} pl={7} sx={{ boxShadow:3 ,width:160 }}> 
                     <ButtonBase onClick={minus}><Box  sx={{ border:3,borderRadius:'50%',width:40,height:40,paddingTop:2 ,paddingLeft:1}}><ArrowBackIosIcon /></Box></ButtonBase> 
                     <ButtonBase onClick={add}><Box  sx={{ border:3,borderRadius:'50%',width:40,height:40,paddingTop:2 ,paddingLeft:1}}><ArrowForwardIosSharpIcon  /></Box></ButtonBase> 
                    </Stack>
        </Stack>
        </Box>
    )


}

export default PartNine