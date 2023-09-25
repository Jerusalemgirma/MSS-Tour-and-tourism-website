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

const Navbar=()=>{
    const age=''
    return(
          <Grid  p={3} pr={7} pl={4} container sx={{ boxShadow: 4 ,backgroundColor:'#cbecdb' }} >

            <Grid item  lg={4}  sx={{ }}>
              <Stack direction='row'>  
                <Box
              component="img"
              sx={{
              height: 90,
              width:70,
              marginLeft:4,
              marginRight:3
               }}
              alt="logo image"
              src={img1} 
            />

               <h1>Visit Ethiopia</h1>
              </Stack> 
            </Grid>

            <Grid item lg={8}>
             <Stack direction='row'  justifyContent='space-evenly' sx={{ marginLeft:'16px' }}>
              <FormControl sx={{ width:'165px' }} >
                <InputLabel sx={{ fontSize:18,fontWeight:35, }} >Select City</InputLabel>
                 <Select
                    value={age}
                    sx={{border:'2px solid black',borderRadius:50 }}
                    
                    // label="Language"
                    // onChange={handleChange}
                >
                    <MenuItem value={'Tigray'}>Tigray</MenuItem>
                    <MenuItem value={'Afar'}>Afar</MenuItem>
                    <MenuItem value={'Amhara'}>Amhara</MenuItem>
                    <MenuItem value={'Oromia'}>Oromia</MenuItem>
                    <MenuItem value={'Somali'}> Somali</MenuItem>
                    <MenuItem value={'Benishangul-Gumuz'}> Benishangul-Gumuz</MenuItem>
                    <MenuItem value={'Gambella'}>  Gambella</MenuItem>
                    <MenuItem value={'Harari'}>Harari</MenuItem>
                    <MenuItem value={'SNNPR'}>SNNPR</MenuItem>
                    <MenuItem value={'Addis Ababa'}> Addis Ababa</MenuItem>
                    <MenuItem value={'Dire Dawa'}>Dire Dawa</MenuItem>



                </Select>
            </FormControl>

              <form>
              
                 <Box sx={{ border:'3px solid black' , borderRadius:50}}>                 
                   <InputBase
                   sx={{ paddingLeft:2,paddingBottom:1.5,paddingTop:1 }}
                    placeholder=" Search Places"
                  />
                  <IconButton type="submit" sx={{ p: '10px' }} >
                    <SearchIcon />
                  </IconButton>
                    
                 </Box>
              </form>

              <FormControl sx={{ width:'180px' }} >
                <InputLabel  >Language</InputLabel>
                 <Select
                   sx={{ border:'2px solid black' , borderRadius:50 }}
                    value={age}
                    label="Language"
                    // onChange={handleChange}
                >
                    <MenuItem value={10}>Amharic</MenuItem>
                    <MenuItem value={20}>English</MenuItem>
                    <MenuItem value={30}>Arabic</MenuItem>
                </Select>
            </FormControl>
              <h3>mihiret desalegn</h3>
              <Button variant="contained">Logout</Button>
            
            </Stack>
            </Grid>
            
            </Grid>  

    )
}


export default Navbar