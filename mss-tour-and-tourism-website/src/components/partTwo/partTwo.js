import { Box } from "@mui/material";
import  React ,{ useState, useEffect } from "react";




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




       return(
        <Box>
           <div>PartTwo  is {count}</div> 
            <div>
                 {(count % 2 ===0)  && <One />}
                 { (count % 2 ==!0)  && <Two />}
                 </div>
       </Box>
    )
}



export default PartTwo