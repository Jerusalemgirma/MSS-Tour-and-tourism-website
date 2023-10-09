
import React, { useState } from "react";
import { Box,Stack } from "@mui/material";
import Card from '@mui/material/Card';


import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from '../../assets/img1.png'
import ButtonBase from '@material-ui/core/ButtonBase';
import { Link, Navigate } from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';

  const Cardd=(props)=>{
    const [clicked,setClicked]=useState(false)
     return(
        <div>
         
            <Card sx={{ boxShadow:3 ,width:380,borderRadius:3,backgroundColor:'#f1f8f4'}}>
            
             <CardMedia
               sx={{ height: 245 }}
               image={props.imagee}
              // title="green iguana"
            />
<Link to='detailpage'>
<ButtonBase>
          <CardContent sx={{ color:'black' }}>
            
            <Typography gutterBottom variant="h5" component="div">
             {props.title} 
             </Typography>
            <Typography variant="body2" >
               {props.explanation}
           </Typography>

         </CardContent>
         </ButtonBase>
    </Link>
         <CardActions>
           <Button >Read more...</Button>
           <Button >Share</Button>
           <IconButton   onClick={()=>setClicked(!clicked)} sx={{ bottom:358,position:'relative' ,left:130,fontSize:"large", borderRadius:'50%',backgroundColor:'white'}}>
               {clicked ?  <FavoriteIcon  
               sx={{

                width:32,height:32,color:'red'
              }}
               /> : <FavoriteBorderIcon
               sx={{

                width:32,height:32,color:'black'
              }}
               />}
           </IconButton>
        </CardActions>
    </Card>
    
        </div>
    )
}

export default Cardd