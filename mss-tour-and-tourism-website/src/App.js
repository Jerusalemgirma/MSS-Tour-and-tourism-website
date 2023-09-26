import React from "react";
import Home from "./components/home/home";
import Navbar from "./components/navbar/navbar";
import { Box } from "@mui/material";
import {Routes,BrowserRouter, Route} from 'react-router-dom'
import HeadingOne from "./components/headingOne/headingOne";
import AddisAbeba from "./components/cityCategory/addisAbeba";
function App() {
  return (
    <BrowserRouter>
        <Box className="App" >
          <Navbar/>
          <HeadingOne />
            <Routes>
                < Route  exact={true} path='/' element={<Home/>}/>
                < Route path='/addisabeba' element={<AddisAbeba />}/>
           </Routes>
     
        {/* <Home /> */}
       </Box>
     
    </BrowserRouter>
  );
}


export default App;
