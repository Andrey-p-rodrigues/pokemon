import React from "react";
import { Route, BrowserRouter, Routes, useParams } from "react-router-dom";

import TrainerPage from "./pages/home/home";
import Pokemons from "./pages/team/cards"
import Pokemon from "./pages/p1/card"

function App(){
   return(
       <BrowserRouter>
       <Routes>
           <Route  path="/" exact element = {< TrainerPage />}/>
           <Route  path="/pokemon/:id" element = {< Pokemon />} />
           <Route  path="/pokemons" element = {< Pokemons />} />

           </Routes>
       </BrowserRouter>
   )
}

export default App;