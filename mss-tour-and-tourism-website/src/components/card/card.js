
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
    const [clicked,setClicked]=useState(true)
     return(
        <div>
          <Link to='detailpage'>
          <ButtonBase onClick={ ()=>{} }>
            <Card sx={{ boxShadow:3 ,width:380,borderRadius:5,backgroundColor:'#e3f1ea'}}>
             <CardMedia
               sx={{ height: 210 }}
               image={props.imagee}
              title="green iguana"
            />

          <CardContent sx={{  }}>
            <Typography gutterBottom variant="h5" component="div">
             {props.title} 
             </Typography>
            <Typography variant="body2" color="text.secondary">
               {props.explanation}
           </Typography>
         </CardContent>

         <CardActions>
           <Button size="small">Read more...</Button>
           <Button size="small">Share</Button>
           <IconButton color="danger" onClick={(prev)=>setClicked(!prev)}>
            {clicked ?  <FavoriteIcon /> : <FavoriteBorderIcon/>}
        </IconButton>
        </CardActions>
    </Card>
    </ButtonBase>
    </Link>
        </div>
    )
}

export default Cardd