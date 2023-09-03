import { Box, Button } from "@mui/material";
import  React ,{ useState, useEffect } from "react";

import img1 from '../../assets/img2.jpg'
import img2 from '../../assets/img3.jpg'
import img3 from '../../assets/img10.jpg'
import img4 from '../../assets/img12.jpg'
import img5 from '../../assets/img11.jpg'



const PartTwo=()=>{
    const [count, setCount]=useState(0)
    const [timer,setTimer]=[1,2,3,4,5]
    const One=()=>{
        return( 
            <h1> one </h1>
        )
    
    
    }
    
    const Two=()=>{
        return( 
            <h1> two </h1>
        )
    
    
    }
    
   const Three=()=>{
        return( 
            <h1> three </h1>
        )
    
    
    }
    
     const Four=()=>{
        return( 
            <h1> four </h1>
        )
    
    
    }
    
    const Five=()=>{
        return( 
            <h1> five </h1>
        )
    
    
    }

    
    
    useEffect(()=>{
        const interval=setInterval(()=>{
            
           
           setCount(count + 1)
           if (count ===5) setCount(0)


        },2000)

        return ()=>clearInterval(interval)

       },[count])


     const All=(props)=>{
        return(
            <Box sx={{backgroundImage:`url(${props.image})`,
                     backgroundRepeat:"no-repeat",
                     backgroundSize:'cover',
                    height:400}}
                > 
                  <h1>{props.title}</h1>
                  <h3>{props.heading}</h3>
                  <p>
                    {props.explanation} 
                  </p>
                <Button variant='contained'>Read More...</Button>  

            </Box>
        )
        
     }

       return(
        <Box >
           {/* <div>PartTwo  is {count}</div>  */}
                 {(count ===0)  && <All 
                 title='semen mountain'
                 image={img1}
                 heading='some mountain really amazing here '
                 explanation='ome mountain really amazingome mountain really amazingome mountain really amazingome mountain really amazing'
                  />}
                 { (count  ===1)  && <Two />}
                 { (count  ===2)  && <Three />}
                 { (count  ===3)  && <Four />}
                 { (count  ===4)  && <Five />}
                 { (count  ===5)  && <Five />}


                
       </Box>
    )
}



export default PartTwo