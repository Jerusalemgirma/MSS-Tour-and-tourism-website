
import React from "react";
import { Box,Stack } from "@mui/material";
import Card from '@mui/material/Card';


import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from '../../assets/img1.png'
import ButtonBase from '@material-ui/core/ButtonBase';

  const Cardd=(props)=>{
     return(
        <div>
          <ButtonBase>
            <Card sx={{ boxShadow:3 }}>
             <CardMedia
               sx={{ height: 250 }}
               image={props.imagee}
              title="green iguana"
            />

          <CardContent>
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
        </CardActions>
    </Card>
    </ButtonBase>
        </div>
    )
}

export default Cardd