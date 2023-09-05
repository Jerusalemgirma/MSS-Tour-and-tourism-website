import { Box, Button, Stack } from "@mui/material";
import  React ,{ useState, useEffect } from "react";

import img1 from '../../assets/img2.jpg'
import img2 from '../../assets/img3.jpg'
import img3 from '../../assets/img10.jpg'
import img4 from '../../assets/img12.jpg'
import img5 from '../../assets/img11.jpg'



const PartTwo=()=>{
   
    const [count,setCount]=useState(1)
    const Places=(props)=>{
      return(
        <div> <Box> <img src={img3}/></Box>
        <Box> 
          <h1> lalibela church</h1>
          <p1>Nestled in the highlands of northern Ethiopia you
             will find the spectacular Simien Mountains. 
             This jewel of an area makes you feel lost in time 
             with its remarkable rock-hewn churches and medieval castles.
              These majestic mountains seemed to have been hand-shaped by
               nature and are home to a rich cultural heritage. 
               They now draw people here to learn about ancient religious sites 
               and to witness the jagged peaks and seemingly endless vistas. 
               .</p1>
        </Box></div>
      )
    }
    useEffect(()=>{

         const interval=setInterval(()=>{
          setCount(count +1)
          if (count===10) setCount(1)
             
         },1000)
         return ()=>clearInterval(interval)

    },[count])
    
      

       return(
        <Stack
         sx={{ height:650,
         backgroundColor:'#0a0a0a',
         opacity: 0.9,
         color:'white',
         boxShadow:4,
        //  display:'flex',
         direction:'column',
         textAlign: 'center',
         marginLeft:'20px',
         marginRight:'20px',
         padding:'20px'

        }}>
          <h1 > origin of man ethiopia</h1>
          <p style={{ fontSize:'30px' }}>Ethiopia, in the Horn of Africa, is 
            a rugged, landlocked country split by the 
            Great Rift Valley. With archaeological finds dating back more 
            than 3 million years, it's a place of ancient culture. Among its important 
            sites are Lalibela with its rock-cut Christian churches from the 12th-13th centuries. 
            Aksum is the ruins of an ancient city with
             obelisks, tombs, castles and Our Lady Mary of Zion church.
          </p>
          <Box>
           
          </Box>
        </Stack>
       
    )
}



export default PartTwo