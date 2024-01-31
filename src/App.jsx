import axios from "axios";
import React, { useEffect, useState } from "react";
import Search from "./Components/Search";
import Card from "./Components/Card";
import PokemonList from "./Components/PokemonList";

function App() {
  return (
    <>
      <Search />
      <PokemonList />
    </>
  );
}

export default App;
