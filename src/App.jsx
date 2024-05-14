import axios from "axios";
import React, { useEffect, useState } from "react";
import Search from "./Components/Search";
import Card from "./Components/Card";
import PokemonList from "./Components/PokemonList";
import PokemonDetail from "./Components/PokemonDetail";

function App() {
  return (
    <>
      <Search />
      <PokemonList />
      {/* <PokemonDetail/> */}
    </>
  );
}

export default App;
