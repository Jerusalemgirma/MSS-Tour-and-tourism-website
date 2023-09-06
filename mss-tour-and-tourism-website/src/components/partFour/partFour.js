import React from "react";

import { Grid,Box, Button } from "@mui/material";
import img1 from '../../assets/waterfalls/abay.jpg'

const PartFour=()=>{
  return(
    <Grid container p={4} sx={{ backgroundColor:'orange' }} > 

      <Grid item lg={12} xl={12} md={12} sm={12} xs={12}> 
        <h1> There is alot water falls in ethiopia  </h1>
      </Grid>

      <Grid item lg={6} xl={6} md={6} sm={6} xs={6}>
         <Box  sx={{ width:830 }}>
            <img  src={img1} style={{  width:830  }}/>
        </Box>
      </Grid>

      <Grid item lg={6} xl={6} md={6} sm={6} xs={6} >
         <Box textAlign='center' >
            <h1>Blue Nile</h1>
            <p style={{ fontSize:27 }}>The Blue Nile originates at 
              Lake Tana in Ethiopia (where it is called the Abay River).
               The river flows generally south before entering a
                canyon about 400 km (250 mi) long, about 30 km (19 mi) from Lake Tana, 
                which is a tremendous obstacle for travel and communication
                 between north and south Ethiopia. The canyon was first referred to 
                 as the "Grand Canyon" in 1968 by a British team that accomplished the
                  first descent of the river from Lake Tana to the end of the canyon;
                   subsequent river rafting parties called it the "Grand Canyon of the Nile"
            </p>
            <Button variant="contained"> See Detail</Button>
         </Box>
      </Grid>
      
    </Grid>
  )
}

export default PartFour