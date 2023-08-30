
import React from "react";
import { Box,Stack } from "@mui/material";
import Card from '@mui/material/Card';


import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from '../../assets/img1.png'


  const Cardd=({imagee})=>{
     return(
        <div>
            <Card sx={{  }}>
             <CardMedia
               sx={{ height: 250 }}
               image={imagee}
              title="green iguana"
            />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
               Lizards are a widespread group of squamate reptiles, with over 6,000
               species, ranging across all continents except Antarctica
           </Typography>
         </CardContent>

         <CardActions>
           <Button size="small">Read more...</Button>
           <Button size="small">Share</Button>
        </CardActions>
    </Card>
        </div>
    )
}

export default Cardd