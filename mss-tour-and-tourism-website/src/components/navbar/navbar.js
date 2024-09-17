import { Box, Stack,TextField,OutlinedInput,InputBase ,Button,Grid} from "@mui/material"
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
// import InputBase from "@mui/material";
import img1 from '../../assets/img1.png'
import SearchIcon from '@mui/icons-material/Search';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from "react";
import {Link} from 'react-router-dom'
import { ButtonBase } from "@material-ui/core";
import PersonIcon from '@mui/icons-material/Person';
// import IconButton from "@mui/material";

const Navbar=()=>{
    const [city,setCity]=useState('')
    const [language,setLanguage]=useState('')

    const handleCityChange=(e)=>{
      setCity(e.target.value)

   }
    const handleLanguageChange=(e)=>{
      setLanguage(e.target.value)
   }
  
    return(
          <Grid  p={2} pr={3} pl={4} container sx={{ boxShadow: 4 ,backgroundColor:'#cbecdb' }} >

            <Grid item  lg={4}  sx={{ }}>
            <Link to='/'>
              <ButtonBase>              
               <Stack direction='row'>  
                <Box
                component="img"
                sx={{
                 height: 80,
                 width:70,
                 marginLeft:4,
                 marginRight:3
               }}
              alt="logo image"
              src={img1} 
            />

               <h1 style={{ color:'black', fontFamily:'serif' }}>Visit Ethiopia</h1>
              </Stack> 
              
              </ButtonBase>
              </Link>
            </Grid>

            <Grid item lg={8}>
             <Stack direction='row'  justifyContent='space-evenly' sx={{ marginLeft:'13px' }}>
              
              <FormControl sx={{ width:'145px' }} >
                <InputLabel sx={{ fontSize:16,fontWeight:35 }} >Select City</InputLabel>
                 <Select
                    value={city}
                    sx={{border:'1px solid black',borderRadius:50 ,color:'black' ,height:45}}
                    onChange={(e)=>handleCityChange(e)}               
                >
                    <MenuItem value='Tigray'><Link to='addisabeba' style={{ color:'black' }}>Tigray </Link></MenuItem>
                    <MenuItem value='Afar'><Link to='addisabeba' style={{ color:'black' }}>Afar </Link></MenuItem>
                    <MenuItem value='Amhara'><Link to='addisabeba' style={{ color:'black' }}>Amhara </Link></MenuItem>
                    <MenuItem value='Oromia'><Link to='addisabeba' style={{ color:'black' }}>Oromia</Link></MenuItem>
                    <MenuItem value='Somali'><Link to='addisabeba' style={{ color:'black' }}> Somali </Link></MenuItem>
                    <MenuItem value='Benishangul-Gumuz'><Link to='addisabeba' style={{ color:'black' }}> Benishangul-Gumuz </Link></MenuItem>
                    <MenuItem value='Gambella'> <Link to='addisabeba' style={{ color:'black' }}>Gambella</Link></MenuItem>
                    <MenuItem value='Harari'><Link to='addisabeba' style={{ color:'black' }}>Harari</Link> </MenuItem>
                    <MenuItem value='SNNPR'><Link to='addisabeba' style={{ color:'black' }}>SNNPR </Link></MenuItem>
                    <MenuItem value='AddisAbaba'> <Link to='addisabeba' style={{ color:'black' }}>Addis Ababa</Link> </MenuItem>
                    <MenuItem value='DireDawa'><Link to='addisabeba' style={{  textDecoration:'none' }}>Dire Dawa</Link></MenuItem>



                </Select>
             </FormControl>

              <form>
              
                 <Box sx={{ border:'1px solid black' , borderRadius:50}}>                 
                   <InputBase
                   sx={{ paddingLeft:2,paddingBottom:1,paddingTop:1 }}
                    placeholder=" Search Places"
                  />
                  <IconButton type="submit" sx={{ p: '3px',paddingLeft:'1px' }} >
                    <SearchIcon />
                  </IconButton>
                    
                 </Box>
              </form>

              <FormControl sx={{ width:'160px' }} >
                <InputLabel  >Language</InputLabel>
                 <Select
                   sx={{ border:'1px solid black' , borderRadius:50, height:48 }}
                    value={language}
                    label="Language"
                    onChange={handleLanguageChange}
                >
                    <MenuItem value='Amharic'>Amharic</MenuItem>
                    <MenuItem value='English'>English</MenuItem>
                    <MenuItem value='Arabi'>Arabic</MenuItem>
                </Select>
            </FormControl>
              <h3>mihiret desalegn</h3>
             <Link to='/auth'  ><Button sx={{ marginTop:1 }} variant="contained">SignUp</Button></Link> 
            
            </Stack>
            </Grid>
            
            </Grid>  

    )
}


export default Navbar