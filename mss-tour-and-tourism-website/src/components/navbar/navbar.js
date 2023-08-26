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
          <Grid container sx={{ borderBottom: 1  }}>

            <Grid item  lg={4}  sx={{ }}>
            <Stack direction='row'>  
            <Box
              component="img"
              sx={{
              height: 90,
              width:70,
              marginLeft:7,
              marginRight:3
               }}
              alt="logo image"
              src={img1} 
            />

            <h1>visit ethiopia</h1>
            </Stack> 
            </Grid>

            <Grid item lg={8}>
             <Stack direction='row'  justifyContent='space-evenly'   sx={{ marginLeft:'20px' }}>
              <FormControl sx={{ width:'170px' }} >
                <InputLabel >select city</InputLabel>
                 <Select
                    value={age}
                    // label="Language"
                    // onChange={handleChange}
                >
                    <MenuItem value={10}>english</MenuItem>
                    <MenuItem value={20}>amharic</MenuItem>
                    <MenuItem value={30}>spanish</MenuItem>
                    <MenuItem value={30}>korean</MenuItem>
                    <MenuItem value={30}>arabic</MenuItem>

                </Select>
            </FormControl>

              <form>
              
                 <Box sx={{ border: 1 , borderRadius:50}}> 
                
                   <InputBase
                //    sx={{ ml: 1, flex: 1 }}
                   placeholder=" Search Places"
                  />
                  <IconButton type="submit" sx={{ p: '13px' }} >
                    <SearchIcon />
                  </IconButton>
                    
                 </Box>
              </form>
              <FormControl sx={{ width:'200px' }} >
                <InputLabel >Language</InputLabel>
                 <Select
                   
                    value={age}
                    label="Language"
                    // onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
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