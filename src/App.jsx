import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./pages/home/home";
import Pokemon from "./pages/p1/card"

function App(){
   return(
       <BrowserRouter>
       <Routes>

           <Route  path="/" exact element = {< Home />}/>
           <Route  path="/pokemon/:id" element = {< Pokemon />} />

        </Routes>
       </BrowserRouter>
   )
}

export default App;