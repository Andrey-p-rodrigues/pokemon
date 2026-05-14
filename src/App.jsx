import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import TrainerPage from "./pages/home/home";
import Pokemons from "./pages/team/cards"
import Pokemon from "./pages/p1/card"
import Pokemon2 from "./pages/p2/card2";

function App(){
   return(
       <BrowserRouter>
       <Routes>
           <Route  path="/" exact element = {< TrainerPage />}/>
           <Route  path="/pokemons" element = {< Pokemons />} />
           <Route  path="/pokemon" element = {< Pokemon />} />
           <Route  path="/pokemon2" element = {< Pokemon2 />} />
           </Routes>
       </BrowserRouter>
   )
}

export default App;