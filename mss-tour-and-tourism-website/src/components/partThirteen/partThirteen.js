

import React from "react";
import { Stack,Box } from "@mui/material";
import img1 from '../../assets/img2.jpg'


const PartThirteen=()=>{
    const Cardd=(props)=>{
        return(
            <Stack direction='row'spacing={3} sx={{ width:300,height:78, boxShadow:5 ,borderRadius:'8%'}} >
                <Box> 
                   <img src={props.imagee} style={{ width:100,height:78,borderRadius:'8%'}} />
                </Box>
                <Box>
                    <h3>{props.title}</h3>
                    <p> {props.explanation}</p>
                </Box>
            </Stack>
        )

    }

    return(
        <Stack direction='column' spacing={2} p={7}>
            <h1>holidays</h1> 
           <Stack direction='row' spacing={3}>
           <Cardd imagee={img1} title='Ethiopian Christmas' explanation="Christian's holiday" />
           <Cardd imagee={img1} title='Mawlid' explanation='Muslims holiday' />          
           <Cardd imagee={img1} title='Eastern' explanation='Christians holiday' />
           <Cardd imagee={img1} title='Eid al-Fitr' explanation='Muslims holiday' />
           <Cardd imagee={img1} title='Meskel' explanation='Christians holiday' />

           </Stack>
           <Stack direction='row' spacing={3}>
           <Cardd imagee={img1} title='Eid al-Adha' explanation='Muslims holiday' />
           <Cardd imagee={img1} title='Timkat' explanation='Christians holiday' />
           <Cardd imagee={img1} title='Enkutatash' explanation='Holiday' />

           {/* <Cardd imagee={img1} title='ashenday' explanation='girls festival' />
           <Cardd imagee={img1} title='ashenday' explanation='girls festival' />
           <Cardd imagee={img1} title='ashenday' explanation='girls festival' /> */}

           </Stack>
           <h1>Days</h1>     
           <Stack direction='row' spacing={3}>
           <Cardd imagee={img1} title='Patriots Victory Day' explanation=' national holiday ' />
           <Cardd imagee={img1} title='Derg Downfall Day' explanation=' national holiday ' />
           <Cardd imagee={img1} title='Adwa Victory Day' explanation=' national holiday ' />
           <Cardd imagee={img1} title='Labour Day' explanation=' national holiday' />

           </Stack>
           <h1>festivals</h1>   
        <Stack direction='row' spacing={3}>
           <Cardd imagee={img1} title='Ashenda' explanation='Tigrayan festival' />
           <Cardd imagee={img1} title='Irecha' explanation='girls festival' />
           <Cardd imagee={img1} title='Buhe' explanation='boys festival' />
           {/* <Cardd imagee={img1} title='ashenday' explanation='girls festival' /> */}

           {/* <Cardd imagee={img1} title='ashenday' explanation='girls festival' /> */}
 
           </Stack>
          {/* <Cardd imagee={img1} title='ashenday' explanation='girls festival' /> */}
        </Stack>
    )
}


export default PartThirteen



